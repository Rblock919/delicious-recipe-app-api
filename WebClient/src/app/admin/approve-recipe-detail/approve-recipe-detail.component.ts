import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IRecipe } from 'src/app/models/recipe.model';
import { TOASTR_TOKEN, Toastr } from 'src/app/common/toastr.service';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { RecipeApiService } from 'src/app/services/recipe-api.service';

function numberChecker(): ValidatorFn {

  return (c: AbstractControl): { [key: string]: boolean} | null => {

    const isNotNumber = isNaN(c.value);

    if (c.dirty && isNotNumber && c.value !== '') {
      return {numberType: true};
    }

    return null;
  };
}

@Component({
  selector: 'app-approve-recipe-detail',
  templateUrl: './approve-recipe-detail.component.html',
  styleUrls: ['./approve-recipe-detail.component.scss']
})
export class ApproveRecipeDetailComponent implements OnInit, OnDestroy {

  private imgUrlSub: Subscription;

  recipeForm: FormGroup;
  recipeProducer: string;
  pageTitle: any;
  preCookTitle: string;
  recipeId: number;
  recipe: IRecipe;
  imageDir: string;
  submitted = false;
  editMode = false;

  constructor(private adminService: AdminService,
              private recipeApiService: RecipeApiService,
              private route: ActivatedRoute,
              private router: Router,
              @Inject(TOASTR_TOKEN)private toastr: Toastr,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.recipeId = this.route.snapshot.params['id'];
    console.log('Id in detail comp: ' + this.recipeId);

    this.recipeForm = this.fb.group({
      producer: ['', Validators.required],
      title: ['', Validators.required],
      ingredients: this.fb.array([]),
      preCook: this.fb.array([]),
      steps: this.fb.array([]),
      nutrition: this.fb.group({
        calories: ['', [Validators.required, numberChecker()]],
        fat: ['', [Validators.required, numberChecker()]],
        carbohydrate: ['', [Validators.required, numberChecker()]],
        protein: ['', [Validators.required, numberChecker()]],
        sugar: ['', [Validators.required, numberChecker()]],
        saturatedFat: ['', [Validators.required, numberChecker()]],
        cholesterol: ['', [Validators.required, numberChecker()]],
        fiber: ['', [Validators.required, numberChecker()]],
        sodium: ['', [Validators.required, numberChecker()]]
      }),
      imgDir: ['', Validators.required] });

    this.watchImageUrl();

    this.adminService.getApprovalById(this.recipeId).subscribe(recipe => {
        this.recipe = recipe;
        this.setValidations(this.recipe.producer);

        if (this.ingredients) {
          this.ingredients.reset();
        }
        if (this.steps) {
          this.steps.reset();
        }

        let ingredientCounter = 0;
        let stepCounter = 0;
        let preCookCounter = 0;

        this.recipe.ingredients.forEach(element => {
          const choppedElement = element.split(' | ');
          const ingredientName = choppedElement[0];
          const ingredientAmount = choppedElement[1];
          // console.log('ingredients array: ' + element);
          this.ingredients.push(this.buildIngredient());
          this.ingredients.at(ingredientCounter).patchValue({
            name: ingredientName,
            amount: ingredientAmount
          });
          ingredientCounter++;
        });

        this.recipe.preCook.forEach(element => {
          this.preCook.push(this.buildPreCook());
          this.preCook.at(preCookCounter).patchValue({
            body: element
          });
          preCookCounter++;
        });

        this.recipe.steps.forEach(step => {
          // console.log('Step ' + (stepCounter + 1) + ': ' + step.name + ' - ' + step.body);
          this.steps.push(this.buildStep());
          this.steps.at(stepCounter).patchValue({
            name: step.name,
            body: step.body
          });
          stepCounter++;
        });

        this.imageDir = this.recipe.imgDir;

        this.recipeForm.patchValue({
          producer: this.recipe.producer,
          title: this.recipe.title,
          nutrition: this.recipe.nutritionValues,
          imgDir: this.recipe.imgDir
        });
    }, err => {
      console.error('ERROR: ' + err);
    });
  }

  toggleEditMode(): void {
    this.editMode = true;
  }

  watchImageUrl(): void {
    const imageControl = this.recipeForm.get('imgDir');
    this.imgUrlSub = imageControl.valueChanges.pipe(debounceTime(1000)).subscribe(value => {
      this.imageDir = value;
    });
  }

  ngOnDestroy(): void {
    this.imgUrlSub.unsubscribe();
  }

  setValidations(producer: string) {
    this.recipeProducer = producer;
    const nutritionControl = this.recipeForm.get('nutrition');

    if (producer === 'Blue Apron') {
      this.preCookTitle = '';
      this.removeHomeChefValidators(nutritionControl);
      this.removeHelloFreshValidators(nutritionControl);
    } else {
      if (producer === 'Hello Fresh') {
        this.preCookTitle = 'What to Bust Out Before You Cook:';
      } else if (producer === 'Home Chef') {
        this.removeHelloFreshValidators(nutritionControl);
        this.preCookTitle = 'Before You Cook Instructions:';
      }
    }
  }

  saveForm(): void {
    if (!this.recipeForm.valid) {
      console.log('trying to save invalid form');
      this.markFormGroupTouched(this.recipeForm);
      console.log(this.recipeForm.controls);
      return;
    }

    if (this.recipeProducer === 'Blue Apron') {
      console.log('user submitting blue apron recipe. Clearing preCook array...');
      this.clearFormArray(this.preCook);
    }

    // console.log('recipe form value: ' + JSON.stringify(this.recipeForm.value));
    // return;

    let formRecipe: IRecipe;
    formRecipe = this.recipeForm.value;
    formRecipe.numSteps = this.recipeForm.get('steps').value.length;
    formRecipe.nutritionValues = this.recipeForm.get('nutrition').value;

    formRecipe.favoriters = [];
    formRecipe.raters = {} as Map<number, number>;

    this.recipeApiService.addRecipe(formRecipe, this.recipeId).subscribe(res => {
      this.submitted = true;
      this.toastr.success('Recipe Successfully Approved!');
      this.router.navigate(['/recipe', res.id]);
    }, err => {
      this.toastr.error('Error Submitting Recipe');
      console.log('ERROR SUBMITTING RECIPE: ' + JSON.stringify(err));
    });

  }

  private markFormGroupTouched(formGroup: FormGroup) {
    (Object as any).values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }

  clearFormArray(formArray: FormArray): void {
    while (formArray.length !== 0) {
      formArray.removeAt(0);
    }
  }

  get ingredients(): FormArray {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  get steps(): FormArray {
    return this.recipeForm.get('steps') as FormArray;
  }

  get preCook(): FormArray {
    return this.recipeForm.get('preCook') as FormArray;
  }

  buildPreCook(): FormGroup {
    return this.fb.group({
      body: ['', Validators.required]
    });
  }

  buildIngredient(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      amount: ['', Validators.required]
    });
  }

  buildStep(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      body: ['', Validators.required]
    });
  }

  addPreCook(): void {
    this.preCook.push(this.buildPreCook());
  }

  addIngredient(): void {
    this.ingredients.push(this.buildIngredient());
  }

  addStep(): void {
    this.steps.push(this.buildStep());
  }

  removePreCook(id: number): void {
    this.preCook.removeAt(id);
  }

  removeIngredient(id: number): void {
    this.ingredients.removeAt(id);
  }

  removeStep(id: number): void {
    this.steps.removeAt(id);
  }

  addHomeChefValidators(formControl: AbstractControl): void {
    formControl.get('fat').setValidators([Validators.required, numberChecker()]);
    formControl.get('fat').updateValueAndValidity();
    formControl.get('carbohydrate').setValidators([Validators.required, numberChecker()]);
    formControl.get('carbohydrate').updateValueAndValidity();
    formControl.get('protein').setValidators([Validators.required, numberChecker()]);
    formControl.get('protein').updateValueAndValidity();
    formControl.get('sodium').setValidators([Validators.required, numberChecker()]);
    formControl.get('sodium').updateValueAndValidity();
  }

  addHelloFreshValidators(formControl: AbstractControl): void {
    formControl.get('sugar').setValidators([Validators.required, numberChecker()]);
    formControl.get('sugar').updateValueAndValidity();
    formControl.get('saturatedFat').setValidators([Validators.required, numberChecker()]);
    formControl.get('saturatedFat').updateValueAndValidity();
    formControl.get('cholesterol').setValidators([Validators.required, numberChecker()]);
    formControl.get('cholesterol').updateValueAndValidity();
    formControl.get('fiber').setValidators([Validators.required, numberChecker()]);
    formControl.get('fiber').updateValueAndValidity();
  }

  removeHomeChefValidators(formControl: AbstractControl): void {
    formControl.get('fat').clearValidators();
    formControl.get('fat').patchValue('');
    formControl.get('fat').updateValueAndValidity();
    formControl.get('carbohydrate').clearValidators();
    formControl.get('carbohydrate').patchValue('');
    formControl.get('carbohydrate').updateValueAndValidity();
    formControl.get('protein').clearValidators();
    formControl.get('protein').patchValue('');
    formControl.get('protein').updateValueAndValidity();
    formControl.get('sodium').clearValidators();
    formControl.get('sodium').patchValue('');
    formControl.get('sodium').updateValueAndValidity();
  }

  removeHelloFreshValidators(formControl: AbstractControl): void {
    formControl.get('sugar').clearValidators();
    formControl.get('sugar').patchValue('');
    formControl.get('sugar').updateValueAndValidity();
    formControl.get('saturatedFat').clearValidators();
    formControl.get('saturatedFat').patchValue('');
    formControl.get('saturatedFat').updateValueAndValidity();
    formControl.get('cholesterol').clearValidators();
    formControl.get('cholesterol').patchValue('');
    formControl.get('cholesterol').updateValueAndValidity();
    formControl.get('fiber').clearValidators();
    formControl.get('fiber').patchValue('');
    formControl.get('fiber').updateValueAndValidity();
  }

}
