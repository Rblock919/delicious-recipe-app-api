import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,
  Validators, AbstractControl, ValidatorFn,
  FormArray } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { RecipeApiService } from 'src/app/services/recipe-api.service';
import { IRecipe } from 'src/app/models/recipe.model';
import { TOASTR_TOKEN, Toastr } from '../../common/toastr.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.scss']
})
export class EditRecipeComponent implements OnInit, OnDestroy {

  private sub: Subscription;
  private producerSub: Subscription;
  private imgUrlSub: Subscription;

  recipeForm: FormGroup;
  recipeProducer: string;
  pageTitle: any;
  id: any;
  recipe: IRecipe;
  imageDir: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private apiService: RecipeApiService,
              @Inject(TOASTR_TOKEN) private toastr: Toastr,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.recipeForm = this.fb.group({
      producer: ['', Validators.required],
      title: ['', Validators.required],
      ingredients: this.fb.array([]),
      steps: this.fb.array([]),
      nutrition: this.fb.group({
        calories: ['', Validators.required],
        fat: '',
        carbohydrate: '',
        protein: '',
        sugar: '',
        saturatedFat: '',
        cholesterol: '',
        fiber: '',
        sodium: ''
      }),
      imgDir: ['', Validators.required]
    });

    this.sub = this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log('id of recipe edit: ' + this.id);
      if (this.id === '0') {
        this.pageTitle = 'Add Recipe';
      } else {
        this.pageTitle = 'Edit Recipe';
      }
      this.getRecipeInfo();
    });

    this.watchProducer();
    this.watchImageUrl();

  }

  watchProducer(): void {
    const producerControl = this.recipeForm.get('producer');
    const nutritionControl = this.recipeForm.get('nutrition');

    this.producerSub = producerControl.valueChanges.subscribe(value => {
      if (value === 'Blue Apron') {
        console.log('handling validation changes based upon BA selection');
        this.removeHomeChefValidators(nutritionControl);
        this.removeHelloFreshValidators(nutritionControl);
      } else if (value === 'Home Chef') {
        this.addHomeChefValidators(nutritionControl);
        this.removeHelloFreshValidators(nutritionControl);
        console.log('handling validation changed based upon HC selection');
      } else if (value === 'Hello Fresh') {
        this.addHomeChefValidators(nutritionControl);
        this.addHelloFreshValidators(nutritionControl);
        console.log('handling validation changes based upon HF selection');
      } else {
        console.log('in else clause');
      }

      console.log('Producer changed to: ' + value);
      this.recipeProducer = value;
    });
  }

  watchImageUrl(): void {
    const imageControl = this.recipeForm.get('imgDir');
    this.imgUrlSub = imageControl.valueChanges.pipe(debounceTime(1000)).subscribe(value => {
      this.imageDir = value;
    });
  }

  get ingredients(): FormArray {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  get steps(): FormArray {
    return this.recipeForm.get('steps') as FormArray;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    this.producerSub.unsubscribe();
    this.imgUrlSub.unsubscribe();
  }

  saveForm(): void {
    // console.log(this.recipeForm);
    if (!this.recipeForm.valid) {
      console.log('trying to save invalid form');
      this.markFormGroupTouched(this.recipeForm);
      // this.recipeForm.get('title').markAsTouched();
      console.log(this.recipeForm.controls);
      return;
    }

    console.log(this.recipeForm.value);
    return;



    // console.log('Saved: ' + JSON.stringify(this.recipeForm.value));
    let formRecipe: IRecipe;
    formRecipe = this.recipeForm.value;
    // console.log('amount of steps: ' + this.recipeForm.get('steps').value.length);
    formRecipe.numSteps = this.recipeForm.get('steps').value.length;
    // console.log('Form Recipe: ' + JSON.stringify(formRecipe));

    // user is adding new recipe
    if (this.id === '0') {

      this.apiService.addRecipe(formRecipe).subscribe(res => {
        // console.log('response: ' + res.id);
        this.toastr.success('Recipe Successfully Created!');
        this.router.navigate(['recipe', res.id]);
      }, err => {
        this.toastr.error('Error Creating Recipe');
        console.log('ERROR CREATING RECIPE: ' + err);
      });

    } else { // user is editing current recipe

      formRecipe._id = this.id;
      this.apiService.updateRecipe(formRecipe).subscribe(res => {
        console.log('res on updating: ' + res);
        this.toastr.success('Recipe Successfully Updated!');
        this.router.navigate(['recipe', this.id]);
      }, err => {
        this.toastr.error('Error Updating Recipe');
        console.log('ERROR UPDATING RECIPE: ' + err);
      });

    }

  }

  getRecipeInfo(): void {
    if (this.id === '0') { // ading a recipe instead of editing one
      // this.recipeForm.reset(); // this option doesn't remove the current number of ingredients and steps
      this.recipeForm = this.fb.group({
        producer: ['', Validators.required],
        title: ['', Validators.required],
        ingredients: this.fb.array([this.buildIngredient()]),
        steps: this.fb.array([this.buildStep()]),
        nutrition: this.fb.group({
          calories: ['', Validators.required],
          fat: '',
          carbohydrate: '',
          protein: '',
          sugar: '',
          saturatedFat: '',
          cholesterol: '',
          fiber: '',
          sodium: ''
        }),
        imgDir: ['', Validators.required]
      });

      this.recipe = {} as IRecipe;
      this.imageDir = '';
      this.watchProducer();
      this.watchImageUrl();
    } else { // editing a recipe

      this.apiService.getRecipe(this.id).subscribe(res => {
        // console.log('RES IN EDIT RECIPE: ' + JSON.stringify(res));
        this.recipe = res;

        if (this.ingredients) {
          this.ingredients.reset();
        }
        if (this.steps) {
          this.steps.reset();
        }

        let ingredientCounter = 0;
        let stepCounter = 0;

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

        this.recipe.steps.forEach(step => {
          // console.log('Step ' + (stepCounter + 1) + ': ' + step.name + ' - ' + step.body);
          this.steps.push(this.buildStep());
          this.steps.at(stepCounter).patchValue({
            name: step.name,
            body: step.body
          });
          stepCounter++;
        });

        console.log('NUTRITION INFO: ' + JSON.stringify(this.recipe.nutritionValues));
        this.imageDir = this.recipe.imgDir;

        this.recipeForm.patchValue({
          producer: this.recipe.producer,
          title: this.recipe.title,
          nutrition: this.recipe.nutritionValues,
          imgDir: this.recipe.imgDir
        });
      });
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    (Object as any).values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control.controls) {
        this.markFormGroupTouched(control);
      }
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

  addIngredient(): void {
    this.ingredients.push(this.buildIngredient());
  }

  addStep(): void {
    this.steps.push(this.buildStep());
  }

  removeIngredient(id: number): void {
    this.ingredients.removeAt(id);
  }

  removeStep(id: number): void {
    this.steps.removeAt(id);
  }

  addHomeChefValidators(formControl: AbstractControl): void {
    formControl.get('fat').setValidators(Validators.required);
    formControl.get('fat').updateValueAndValidity();
    formControl.get('carbohydrate').setValidators(Validators.required);
    formControl.get('carbohydrate').updateValueAndValidity();
    formControl.get('protein').setValidators(Validators.required);
    formControl.get('protein').updateValueAndValidity();
    formControl.get('sodium').setValidators(Validators.required);
    formControl.get('sodium').updateValueAndValidity();
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

  addHelloFreshValidators(formControl: AbstractControl): void {
    formControl.get('sugar').setValidators(Validators.required);
    formControl.get('sugar').updateValueAndValidity();
    formControl.get('saturatedFat').setValidators(Validators.required);
    formControl.get('saturatedFat').updateValueAndValidity();
    formControl.get('cholesterol').setValidators(Validators.required);
    formControl.get('cholesterol').updateValueAndValidity();
    formControl.get('fiber').setValidators(Validators.required);
    formControl.get('fiber').updateValueAndValidity();
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
