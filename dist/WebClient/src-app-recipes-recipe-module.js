(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-recipes-recipe-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/edit-recipe/edit-recipe.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/edit-recipe/edit-recipe.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main role=\"main\">\n\n    <!-- <div class=\"container\" style=\"padding-bottom: 30px\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"well well-lg\">\n            <div class=\"row\">\n              <div class=\"col-sm-12 text-center\">\n               <h1>- {{pageTitle}} -</h1>\n               <h1 *ngIf=\"recipe\">{{recipe.title}}</h1>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <hr>\n    </div> -->\n\n    <div *ngIf=\"recipe\" class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n\n          <div class=\"card\">\n\n            <div class=\"card-header text-center\">\n              <h3 *ngIf=\"recipe.title\">Edit Recipe <br> <span style=\"font-style: italic\">{{recipe.title}}</span></h3>\n              <h3 *ngIf=\"!recipe.title\">Create New Recipe</h3>\n            </div>\n\n            <div class=\"card-body\">\n\n              <form novalidate  (ngSubmit)=\"saveForm()\" [formGroup]=\"recipeForm\">\n\n                <div class=\"form-group\">\n\n                  <div class=\"row form-row\">\n\n                    <div class=\"col-md-2\"></div>\n\n                    <div style=\"justify-content: center\" class=\"col-md-3 text-center input-group\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">Producer:</span>\n                      </div>\n                        <select class=\"form-control\" formControlName=\"producer\" id=\"producerId\"\n                                [ngClass]=\"{'is-invalid': (recipeForm.get('producer').touched || recipeForm.get('producer').dirty)\n                                                          && !recipeForm.get('producer').valid }\" >\n                          <option value=\"\" selected disabled hidden>Select Producer...</option>\n                          <option value=\"Hello Fresh\">Hello Fresh</option>\n                          <option value=\"Home Chef\">Home Chef</option>\n                          <option value=\"Blue Apron\">Blue Apron</option>\n                        </select>\n                      <div *ngIf=\"recipeForm.get('producer').errors && recipeForm.get('producer').errors['required']\" class=\"invalid-feedback text-center\">\n                        <span>\n                          Please select a producer.\n                        </span>\n                      </div>\n                      <div *ngIf=\"recipeProducer === 'Blue Apron'\" class=\"form-check\">\n                        <input (change)=\"changeBlueApronNutritionalFlag()\" [checked]=\"blueApronNutritionFlag\" class=\"form-check-input\" type=\"checkbox\" id=\"defaultCheck1\">\n                        <label class=\"form-check-label\" for=\"defaultCheck1\">\n                          Provides Nutritional Info\n                        </label>\n                      </div>\n                    </div>\n\n                    <div class=\"col-md-1\"></div>\n\n\n                    <div class=\"col-md-6 input-group\">\n\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">Title:</span>\n                      </div>\n                        <input type=\"text\" id=\"titleId\" class=\"form-control\" formControlName=\"title\"\n                               [ngClass]=\"{'is-invalid': (recipeForm.get('title').touched || recipeForm.get('title').dirty) &&\n                                                          !recipeForm.get('title').valid}\" >\n                      <div *ngIf=\"recipeForm.get('title').errors && recipeForm.get('title').errors['required']\" class=\"invalid-feedback text-center\">\n                        <span>\n                          Please enter a title.\n                        </span>\n                      </div>\n                    </div>\n\n                    <!-- <div class=\"col-md-2\"></div> -->\n\n                  </div>\n\n                </div>\n\n                <hr>\n\n                <div class=\"form-group\">\n                  <div class=\"row\">\n                    <div class=\"col-md-12 text-center\">\n                      <h3>Ingredients</h3>\n                    </div>\n                    <br>\n                    <div formArrayName=\"ingredients\" *ngFor=\"let ingredient of ingredients.controls; let i = index\" class=\"col-md-12\">\n                        <div [formGroupName]=\"i\" class=\"row\">\n                          <div class=\"col-md-2\"></div>\n                          <div class=\"col-md-4 text-right input-group\">\n                            <div class=\"input-group-prepend\">\n                              <span class=\"input-group-text\">Ingredient {{i+1}}: </span>\n                            </div>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"name\" id=\"{{'ingredient' + i}}\" placeholder=\"Name of Ingredient\"\n                                    [ngClass]=\"{'is-invalid': (ingredients.at(i).get('name').dirty || ingredients.at(i).get('name').touched)\n                                                              && !ingredients.at(i).get('name').valid}\">\n                            <div *ngIf=\"!ingredients.at(i).get('name').valid && ingredients.at(i).get('name').touched\" class=\"invalid-feedback text-center\">\n                              <span>\n                                Please enter an ingredient name.\n                              </span>\n                            </div>\n                          </div>\n                          <!-- <div class=\"col-md-1\"></div> -->\n                          <div class=\"col-md-4 text-center input-group\">\n                            <div class=\"input-group-prepend\">\n                              <span class=\"input-group-text\">Amount: </span>\n                            </div>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"amount\" id=\"{{'amount' + i}}\" placeholder=\"Amount of Ingredient\"\n                                   [ngClass]=\"{'is-invalid': (ingredients.at(i).get('amount').dirty || ingredients.at(i).get('amount').touched)\n                                                              && !ingredients.at(i).get('amount').valid}\">\n                            <!-- <input type=\"text\" class=\"form-control\" formControlName=\"amountFor2\" id=\"{{'amount' + i}}\" placeholder=\"Amount of Ingredient\"\n                                   [ngClass]=\"{'is-invalid': (ingredients.at(i).get('amountFor2').dirty || ingredients.at(i).get('amountFor2').touched)\n                                                              && !ingredients.at(i).get('amountFor2').valid}\">\n                            <input type=\"text\" class=\"form-control\" formControlName=\"amountFor4\" id=\"{{'amount' + i}}\" placeholder=\"Amount of Ingredient\"\n                                   [ngClass]=\"{'is-invalid': (ingredients.at(i).get('amountFor4').dirty || ingredients.at(i).get('amountFor4').touched)\n                                                              && !ingredients.at(i).get('amountFor4').valid}\"> -->\n                            <button type=\"button\" class=\"btn btn-outline-danger btn-sm\" (click)=\"removeIngredient(i)\">X</button>\n                            <div *ngIf=\"!ingredients.at(i).get('amount').valid && ingredients.at(i).get('amount').touched\" class=\"invalid-feedback text-center\">\n                              <span>\n                                Please enter the ingredient amount.\n                              </span>\n                            </div>\n                          </div>\n                          <div class=\"col-md-2\"></div>\n                        </div>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"col-md-12 text-center\">\n                  <button type=\"button\" class=\"btn btn-outline-success\"\n                          (click)=\"addIngredient()\" [disabled]=\"!ingredients.valid\">Add Ingredient</button>\n                </div>\n\n                <hr>\n\n                <div *ngIf=\"recipeProducer === 'Hello Fresh' || recipeProducer === 'Home Chef'\" class=\"form-group\">\n                  <div class=\"row\">\n\n                    <div class=\"col-md-12 text-center\">\n                      <h3>{{preCookTitle}}</h3>\n                    </div>\n\n                    <div formArrayName=\"preCook\" *ngFor=\"let item of preCook.controls; let i = index\" class=\"col-md-12\">\n                      <div [formGroupName]=\"i\" class=\"row form-row\">\n\n                        <div class=\"col-md-3\"></div>\n                        <div class=\"col-md-6\">\n                          <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                              <span class=\"input-group-text\">\n                                <span *ngIf=\"recipeProducer === 'Hello Fresh'\">Bust Out #{{i + 1}}:</span>\n                                <span *ngIf=\"recipeProducer === 'Home Chef'\">Step {{i + 1}}:</span>\n                              </span>\n                            </div>\n                            <input class=\"form-control\" type=\"text\" formControlName=\"body\" id=\"{{'preCook' + i}}\"\n                                   [ngClass]=\"{'is-invalid': (preCook.at(i).get('body').dirty || preCook.at(i).get('body').touched)\n                                                              && !preCook.at(i).get('body').valid}\" >\n                            <button type=\"button\" class=\"btn btn-outline-danger btn-sm\" (click)=\"removePreCook(i)\">X</button>\n                            <div *ngIf=\"!preCook.at(i).get('body').valid && preCook.at(i).get('body').touched\" class=\"invalid-feedback text-center\">\n                              <span>\n                                Please enter the pre cooking instruction\n                              </span>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"col-md-3\"></div>\n\n                      </div>\n                    </div>\n\n                  </div>\n                </div>\n\n                <div *ngIf=\"recipeProducer === 'Hello Fresh' || recipeProducer === 'Home Chef'\" class=\"col-md-12 text-center\">\n                  <button type=\"button\" [disabled]=\"!preCook.valid\" class=\"btn btn-outline-success\" (click)=\"addPreCook()\">\n                    Add Precook <span *ngIf=\"recipeProducer === 'Hello Fresh'\">Bust Out</span> <span *ngIf=\"recipeProducer === 'Home Chef'\">Instruction</span>\n                  </button>\n                </div>\n\n                <hr *ngIf=\"recipeProducer === 'Hello Fresh' || recipeProducer === 'Home Chef'\">\n\n                <div class=\"form-group\">\n                  <div class=\"row\">\n\n                    <div class=\"col-md-12 text-center\">\n                      <h3>Cooking Steps</h3>\n                    </div>\n\n                    <div formArrayName=\"steps\" *ngFor=\"let step of steps.controls; let i = index\" class=\"col-md-12\">\n                      <div [formGroupName]=\"i\" class=\"row form-row\">\n\n                        <div class=\"col-md-3\"></div>\n                        <div class=\"col-md-6\">\n                          <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                              <span class=\"input-group-text\">Step {{i+1}} Name:</span>\n                            </div>\n                            <input class=\"form-control\" type=\"text\" formControlName=\"name\" id=\"{{'stepname' + i}}\"\n                                   [ngClass]=\"{'is-invalid': (steps.at(i).get('name').dirty || steps.at(i).get('name').touched)\n                                                              && !steps.at(i).get('name').valid}\" >\n                            <div *ngIf=\"!steps.at(i).get('name').valid && steps.at(i).get('name').touched\" class=\"invalid-feedback text-center\">\n                              <span>\n                                Please enter a step name.\n                              </span>\n                            </div>\n                          </div>\n                          <!-- <label for=\"{{'stepname' + i}}\">Step {{i+1}} Name:</label> -->\n                        </div>\n                        <div class=\"col-md-3\">\n                          <button type=\"button\" class=\"btn btn-outline-danger btn-sm\" (click)=\"removeStep(i)\">Remove Step {{i+1}}</button>\n                        </div>\n\n                        <div class=\"col-md-12\">\n                          <!-- <label for=\"{{'stepbody' + i}}\">Step {{i+1}} instructions:</label><br> -->\n                          <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                              <span class=\"input-group-text\">Instructions:</span>\n                            </div>\n                            <textarea rows=\"2\" class=\"form-control\"\n                                    formControlName=\"body\" id=\"{{'stepbody' + i}}\" placeholder=\"enter step {{i+1}} instructions here...\"\n                                    [ngClass]=\"{'is-invalid': (steps.at(i).get('body').dirty || steps.at(i).get('body').touched)\n                                                              && !steps.at(i).get('body').valid}\" ></textarea>\n                            <div *ngIf=\"!steps.at(i).get('body').valid && steps.at(i).get('body').touched\" class=\"invalid-feedback text-center\">\n                              <span>\n                                Please enter a step description.\n                              </span>\n                            </div>\n                          </div>\n                        </div>\n\n                      </div>\n                      <br>\n                    </div>\n\n                  </div>\n                </div>\n\n                <div class=\"col-md-12 text-center\">\n                  <button type=\"button\" [disabled]=\"!steps.valid\" class=\"btn btn-outline-success\" (click)=\"addStep()\">Add Step</button>\n                </div>\n\n                <hr>\n\n                <div class=\"col-md-12 text-center\">\n                   <h3>Nurtitional Information</h3>\n                </div>\n\n                <div formGroupName=\"nutrition\">\n                <!-- <div class=\"row\"> -->\n\n                  <div class=\"form-group\">\n                    <div class=\"form-row\">\n\n                      <div *ngIf=\"recipeProducer !== 'Home Chef' && recipeProducer !== 'Hello Fresh' && (!recipeProducer || (recipeProducer === 'Blue Apron' && !blueApronNutritionFlag))\"\n                          class=\"col-md-4\"></div>\n                      <div [ngClass]=\"{'col-md-3': (recipeProducer === 'Home Chef' || recipeProducer === 'Hello Fresh' ||\n                                      (recipeProducer === 'Blue Apron' && blueApronNutritionFlag)),\n                                       'col-md-4': (!recipeProducer || (recipeProducer === 'Blue Apron' && blueApronNutritionFlag === false))}\"\n                            class=\"input-group\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">Calories:</span>\n                        </div>\n                        <input formControlName=\"calories\" type=\"text\" id=\"caloriesId\" class=\"form-control\"\n                               [ngClass]=\"{'is-invalid': (recipeForm.get('nutrition.calories').dirty || recipeForm.get('nutrition.calories').touched)\n                                                          && !recipeForm.get('nutrition.calories').valid}\" >\n                        <div *ngIf=\"recipeForm.get('nutrition.calories').errors &&\n                                    recipeForm.get('nutrition.calories').errors['required']\" class=\"invalid-feedback text-center\">\n                          <span>\n                            Please enter a calorie amount.\n                          </span>\n                        </div>\n                        <div *ngIf=\"recipeForm.get('nutrition.calories').errors &&\n                                    recipeForm.get('nutrition.calories').errors['numberType']\" class=\"invalid-feedback text-center\">\n                          <span>\n                            Please enter a number.\n                          </span>\n                        </div>\n                      </div>\n                      <div *ngIf=\"recipeProducer !== 'Home Chef' && recipeProducer !== 'Hello Fresh' && (recipeProducer === 'Blue Apron' && !blueApronNutritionFlag)\"\n                            class=\"col-md-4\"></div>\n\n                      <div *ngIf=\"recipeProducer === 'Home Chef' || recipeProducer === 'Hello Fresh' || (recipeProducer === 'Blue Apron' && blueApronNutritionFlag)\"\n                          class=\"col-md-3 input-group\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">Fat:</span>\n                        </div>\n                        <input formControlName=\"fat\" type=\"text\" id=\"fatId\" class=\"form-control\"\n                               [ngClass]=\"{'is-invalid': (recipeForm.get('nutrition.fat').dirty || recipeForm.get('nutrition.fat').touched)\n                                                          && !recipeForm.get('nutrition.fat').valid}\" >\n                        <div *ngIf=\"recipeForm.get('nutrition.fat').errors &&\n                                    recipeForm.get('nutrition.fat').errors['required']\" class=\"invalid-feedback text-center\">\n                          <span>\n                            Please enter a fats amount.\n                          </span>\n                        </div>\n                        <div *ngIf=\"recipeForm.get('nutrition.fat').errors &&\n                                    recipeForm.get('nutrition.fat').errors['numberType']\" class=\"invalid-feedback text-center\">\n                          <span>\n                            Please enter a number.\n                          </span>\n                        </div>\n                      </div>\n                      <div *ngIf=\"recipeProducer === 'Home Chef' || recipeProducer === 'Hello Fresh' || (recipeProducer === 'Blue Apron' && blueApronNutritionFlag)\"\n                          class=\"col-md-3 input-group\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">Carbs:</span>\n                        </div>\n                        <input formControlName=\"carbohydrate\" type=\"text\" id=\"carbsId\" class=\"form-control\"\n                               [ngClass]=\"{'is-invalid': (recipeForm.get('nutrition.carbohydrate').dirty || recipeForm.get('nutrition.carbohydrate').touched)\n                                                          && !recipeForm.get('nutrition.carbohydrate').valid}\" >\n                        <div *ngIf=\"recipeForm.get('nutrition.carbohydrate').errors &&\n                                    recipeForm.get('nutrition.carbohydrate').errors['required']\" class=\"invalid-feedback text-center\">\n                          <span>\n                            Please enter a carbs amount.\n                          </span>\n                        </div>\n                        <div *ngIf=\"recipeForm.get('nutrition.carbohydrate').errors &&\n                                    recipeForm.get('nutrition.carbohydrate').errors['numberType']\" class=\"invalid-feedback text-center\">\n                          <span>\n                            Please enter a number.\n                          </span>\n                        </div>\n                      </div>\n                      <div *ngIf=\"recipeProducer === 'Home Chef' || recipeProducer === 'Hello Fresh' || (recipeProducer === 'Blue Apron' && blueApronNutritionFlag)\"\n                          class=\"col-md-3 input-group\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">Protein:</span>\n                        </div>\n                        <input formControlName=\"protein\" type=\"text\" id=\"proteinId\" class=\"form-control\"\n                               [ngClass]=\"{'is-invalid': (recipeForm.get('nutrition.protein').dirty || recipeForm.get('nutrition.protein').touched)\n                                                          && !recipeForm.get('nutrition.protein').valid}\" >\n                        <div *ngIf=\"recipeForm.get('nutrition.protein').errors &&\n                                    recipeForm.get('nutrition.protein').errors['required']\" class=\"invalid-feedback text-center\">\n                          <span>\n                            Please enter a protein amount.\n                          </span>\n                        </div>\n                        <div *ngIf=\"recipeForm.get('nutrition.protein').errors &&\n                                    recipeForm.get('nutrition.protein').errors['numberType']\" class=\"invalid-feedback text-center\">\n                          <span>\n                            Please enter a number.\n                          </span>\n                        </div>\n                      </div>\n\n                    </div>\n                  </div>\n\n                  <div *ngIf=\"recipeProducer === 'Hello Fresh' || (recipeProducer === 'Blue Apron' && blueApronNutritionFlag)\" class=\"form-group\">\n                    <div class=\"form-row\">\n\n                      <div class=\"col-md-3 input-group\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">Sugar:</span>\n                        </div>\n                        <input formControlName=\"sugar\" type=\"text\" id=\"sugarId\" class=\"form-control\"\n                               [ngClass]=\"{'is-invalid': (recipeForm.get('nutrition.sugar').dirty || recipeForm.get('nutrition.sugar').touched)\n                                                          && !recipeForm.get('nutrition.sugar').valid}\" >\n                        <div *ngIf=\"recipeForm.get('nutrition.sugar').errors &&\n                                    recipeForm.get('nutrition.sugar').errors['required']\" class=\"invalid-feedback text-center\">\n                          <span>\n                            Please enter a sugar amount.\n                          </span>\n                        </div>\n                        <div *ngIf=\"recipeForm.get('nutrition.sugar').errors &&\n                                    recipeForm.get('nutrition.sugar').errors['numberType']\" class=\"invalid-feedback text-center\">\n                          <span>\n                            Please enter a number.\n                          </span>\n                        </div>\n                      </div>\n                      <div class=\"col-md-3 input-group\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">Saturated Fat:</span>\n                        </div>\n                        <input formControlName=\"saturatedFat\" type=\"text\" id=\"satfatId\" class=\"form-control\"\n                               [ngClass]=\"{'is-invalid': (recipeForm.get('nutrition.saturatedFat').dirty || recipeForm.get('nutrition.saturatedFat').touched)\n                                                          && !recipeForm.get('nutrition.saturatedFat').valid}\" >\n                        <div *ngIf=\"recipeForm.get('nutrition.saturatedFat').errors &&\n                                    recipeForm.get('nutrition.saturatedFat').errors['required']\" class=\"invalid-feedback text-center\">\n                          <span>\n                            Please enter a saturated fats amount.\n                          </span>\n                        </div>\n                        <div *ngIf=\"recipeForm.get('nutrition.saturatedFat').errors &&\n                                    recipeForm.get('nutrition.saturatedFat').errors['numberType']\" class=\"invalid-feedback text-center\">\n                          <span>\n                            Please enter a number.\n                          </span>\n                        </div>\n                      </div>\n                      <div class=\"col-md-3 input-group\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">Cholesterol:</span>\n                        </div>\n                        <input formControlName=\"cholesterol\" type=\"text\" id=\"cholId\" class=\"form-control\"\n                               [ngClass]=\"{'is-invalid': (recipeForm.get('nutrition.cholesterol').dirty || recipeForm.get('nutrition.cholesterol').touched)\n                                                          && !recipeForm.get('nutrition.cholesterol').valid}\" >\n                        <div *ngIf=\"recipeForm.get('nutrition.cholesterol').errors &&\n                                    recipeForm.get('nutrition.cholesterol').errors['required']\" class=\"invalid-feedback text-center\">\n                          <span>\n                            Please enter a cholesterol amount.\n                          </span>\n                        </div>\n                        <div *ngIf=\"recipeForm.get('nutrition.cholesterol').errors &&\n                                    recipeForm.get('nutrition.cholesterol').errors['numberType']\" class=\"invalid-feedback text-center\">\n                          <span>\n                            Please enter a number.\n                          </span>\n                        </div>\n                      </div>\n                      <div class=\"col-md-3 input-group\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">Fiber:</span>\n                        </div>\n                        <input formControlName=\"fiber\" type=\"text\" id=\"fiberId\" class=\"form-control\"\n                               [ngClass]=\"{'is-invalid': (recipeForm.get('nutrition.fiber').dirty || recipeForm.get('nutrition.fiber').touched)\n                                                          && !recipeForm.get('nutrition.fiber').valid}\" >\n                        <div *ngIf=\"recipeForm.get('nutrition.fiber').errors &&\n                                    recipeForm.get('nutrition.fiber').errors['required']\" class=\"invalid-feedback text-center\">\n                          <span>\n                            Please enter a fiber amount.\n                          </span>\n                        </div>\n                        <div *ngIf=\"recipeForm.get('nutrition.fiber').errors &&\n                                    recipeForm.get('nutrition.fiber').errors['numberType']\" class=\"invalid-feedback text-center\">\n                          <span>\n                            Please enter a number.\n                          </span>\n                        </div>\n                      </div>\n\n                    </div>\n                  </div>\n\n                  <div *ngIf=\"recipeProducer === 'Home Chef' || recipeProducer === 'Hello Fresh' || (recipeProducer === 'Blue Apron' && blueApronNutritionFlag)\"\n                        class=\"form-group\">\n                    <div class=\"row form-row\">\n\n                      <div class=\"col-md-4\"></div>\n                      <div class=\"col-md-3 input-group\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">Sodium:</span>\n                        </div>\n                        <input formControlName=\"sodium\" type=\"text\" id=\"sodiumId\" class=\"form-control\"\n                               [ngClass]=\"{'is-invalid': (recipeForm.get('nutrition.sodium').dirty || recipeForm.get('nutrition.sodium').touched)\n                                                          && !recipeForm.get('nutrition.sodium').valid}\" >\n                        <div *ngIf=\"recipeForm.get('nutrition.sodium').errors &&\n                                    recipeForm.get('nutrition.sodium').errors['required']\" class=\"invalid-feedback text-center\">\n                          <span>\n                            Please enter a sodium amount.\n                          </span>\n                        </div>\n                        <div *ngIf=\"recipeForm.get('nutrition.sodium').errors &&\n                                    recipeForm.get('nutrition.sodium').errors['numberType']\" class=\"invalid-feedback text-center\">\n                          <span>\n                            Please enter a number.\n                          </span>\n                        </div>\n                      </div>\n                      <div class=\"col-md-5\"></div>\n\n                    </div>\n                  </div>\n\n              </div> <!-- end of nutrition form group div -->\n\n                  <hr>\n                  <div class=\"form-group\">\n                    <div class=\"row form-row\">\n\n                      <div class=\"col-md-12 text-center\">\n                        <h3>Image URL</h3>\n                      </div>\n\n                      <div class=\"col-md-12 input-group\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">Image URL:</span>\n                        </div>\n                        <input style=\"text-align: left !important\" formControlName=\"imgDir\" type=\"text\" id=\"imgId\" class=\"form-control\"\n                               [ngClass]=\"{'is-invalid': (recipeForm.get('imgDir').dirty || recipeForm.get('imgDir').touched)\n                                                          && !recipeForm.get('imgDir').valid}\" >\n                        <div *ngIf=\"recipeForm.get('imgDir').errors &&\n                                    recipeForm.get('imgDir').errors['required']\" class=\"invalid-feedback text-center\">\n                          <span>\n                            Please enter an image URL.\n                          </span>\n                        </div>\n                      </div>\n                      <br>\n                      <div class=\"col-md-12\">\n                        <div class=\"row\">\n                        <div class=\"col-md-4\"></div>\n                        <div class=\"col-md-4 text-center\">\n                          <label *ngIf=\"imageDir\" style=\"font-style: italic\" for=\"imageId\">Image Preview</label>\n                          <img *ngIf=\"imageDir\" style=\"width: 100%\" id=\"imageId\" src=\"{{imageDir}}\">\n                        </div>\n                        <div class=\"col-md-4\"></div>\n                        </div>\n                      </div>\n\n                    </div>\n                  </div>\n\n                <!-- </div> -->\n\n                <!-- <div class=\"form-group\">\n                  <br>\n                  <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n                </div> -->\n              </form>\n\n            </div><!-- end of card body -->\n            <div class=\"card-footer text-right\">\n              Form Valid: {{recipeForm.valid}}\n              <button *ngIf=\"recipe.title\" type=\"button\"\n                      class=\"btn btn-primary\" (click)=\"saveForm()\">Save Changes</button>\n              <button *ngIf=\"!recipe.title\" type=\"button\"\n                      class=\"btn btn-primary\" (click)=\"saveForm()\">Create</button>\n            </div>\n          </div> <!-- end of card -->\n\n        </div> <!-- end of first col-md-12 -->\n      </div> <!-- end of first row -->\n    </div> <!-- end of container -->\n\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-detail/recipe-detail.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-detail/recipe-detail.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main role=\"main\">\n\n  <br>\n      <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div class=\"panel\">\n                <div class=\"panel-body\">\n                  <div class=\"card\">\n\n                    <div class=\"card-header text-center\">\n                      <div class=\"row\">\n                        <div class=\"col-md-2\">\n                          <div class=\"favoritingIcon pointable\">\n                            <i class=\"fa\" aria-hidden=\"true\" (click)=\"favorite()\"\n                            [ngClass]=\"{'fa-heart': favorited, 'fa-heart-o': !favorited}\"></i>\n                          </div>\n                        </div>\n                        <div class=\"col-md-8\"><h2>{{recipe.title}}</h2></div>\n                        <div class=\"col-md-1\">\n                          <app-star [rating]=\"avgRating\"></app-star>\n                          <button type=\"button\" [id]=\"recipe._id\" class=\"btn btn-sm btn-warning\" data-toggle=\"modal\" data-target=\"#C580\">\n                            <span style=\"color: white;\">Rate</span>\n                          </button>\n                        </div>\n                        <div class=\"col-md-1\"></div>\n                      </div>\n                    </div>\n\n                    <div class=\"card-body\">\n\n                      <!-- Recipe Producer Badge -->\n                      <div class=\"row text-center\">\n                        <div class=\"col-md-12\">\n                          <h4><span [ngClass]=\"{'badge-success': recipe.producer === 'Hello Fresh' || recipe.producer === 'Home Chef',\n                                                'badge-hf': recipe.producer === 'Hello Fresh',\n                                                'badge-hc': recipe.producer === 'Home Chef',\n                                                'badge-primary': recipe.producer === 'Blue Apron'}\" class=\"badge badge-pill\">{{recipe.producer}}</span></h4>\n                        </div>\n                      </div>\n                      <br>\n\n                      <div class=\"row\">\n                        <!-- Image -->\n                        <div class=\"col-md-4\">\n                          <img src=\"{{recipe.imgDir}}\">\n                        </div>\n\n                        <!-- Ingredients -->\n                        <div class=\"col-md-5\">\n                          <div class=\"card\">\n                            <div class=\"card-header text-center\">\n                              <h4>Ingredients</h4>\n                            </div>\n                            <div class=\"card-body text-center\">\n                              <p class=\"ing-text\" *ngFor=\"let ingredient of recipe.ingredients | ingredientsPipe\">\n                                <span class=\"float-left\">{{ingredient[0]}}</span> <span class=\"float-right\">{{ingredient[1]}}</span><br>\n                              </p>\n                            </div>\n                          </div>\n                        </div>\n\n                        <!-- Nutritional Information -->\n                        <div class=\"col-md-3\">\n                          <div class=\"card\">\n                            <div class=\"card-header text-center\">\n                              <h4>Nutritional Info</h4>\n                            </div>\n                            <div class=\"card-body\">\n                              <p><span class=\"float-left\">Calories: </span> <span class=\"float-right\">{{recipe.nutritionValues.calories}}</span></p>\n                              <br *ngIf=\"recipe.producer === 'Hello Fresh' || recipe.producer === 'Home Chef' || (recipe.producer === 'Blue Apron' && recipe.nutritionValues.fat)\">\n                              <p *ngIf=\"recipe.nutritionValues.fat\"><span class=\"float-left\">Fat: </span><span class=\"float-right\">{{recipe.nutritionValues.fat}}g</span><br></p>\n                              <p *ngIf=\"recipe.nutritionValues.saturatedFat\">\n                                <span class=\"float-left\">Saturated Fat: </span><span class=\"float-right\">{{recipe.nutritionValues.saturatedFat}}g</span><br>\n                              </p>\n                              <p *ngIf=\"recipe.nutritionValues.carbohydrate\"><span class=\"float-left\">Carbs: </span> <span class=\"float-right\">{{recipe.nutritionValues.carbohydrate}}g</span><br></p>\n                              <p *ngIf=\"recipe.nutritionValues.sugar\"><span class=\"float-left\">Sugar: </span> <span class=\"float-right\">{{recipe.nutritionValues.sugar}}g</span><br></p>\n                              <p *ngIf=\"recipe.nutritionValues.fiber\"><span class=\"float-left\">Fiber: </span> <span class=\"float-right\">{{recipe.nutritionValues.fiber}}g</span><br></p>\n                              <p *ngIf=\"recipe.nutritionValues.protein\"><span class=\"float-left\">Protein: </span> <span class=\"float-right\">{{recipe.nutritionValues.protein}}g</span><br></p>\n                              <p *ngIf=\"recipe.nutritionValues.cholesterol\"><span class=\"float-left\">Cholesterol: </span> <span class=\"float-right\">{{recipe.nutritionValues.cholesterol}}mg</span><br></p>\n                              <p *ngIf=\"recipe.nutritionValues.sodium\"><span class=\"float-left\">Sodium: </span> <span class=\"float-right\">{{recipe.nutritionValues.sodium}}mg</span></p>\n                            </div>\n                            <div *ngIf=\"recipe.producer === 'Blue Apron' && !recipe.nutritionValues.fat\" class=\"card-footer text-center\">\n                              <small>You can thank Blue Apron for not providing nutritional information!</small>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n\n                      <hr>\n\n                      <!-- Precook -->\n                      <div *ngIf=\"recipe.producer !== 'Blue Apron'\" class=\"card\">\n                        <app-collapsible-well [title]=\"preCookTitle\">\n                          <div well-title>\n                            {{preCookTitle}}\n                          </div>\n                          <div well-body class=\"text-center\">\n                            <ul *ngIf=\"recipe.producer === 'Home Chef'\" class=\"list-group list-group-flush\">\n                              <li class=\"list-group-item\" *ngFor=\"let step of recipe.preCook\">{{step}}</li>\n                            </ul>\n                            <ul style=\"justify-content: center\" *ngIf=\"recipe.producer === 'Hello Fresh'\" class=\"list-group list-group-horizontal\">\n                              <li class=\"list-group-item\" *ngFor=\"let step of recipe.preCook\">{{step}}</li>\n                            </ul>\n                          </div>\n                        </app-collapsible-well>\n\n                      </div>\n                      <br *ngIf=\"recipe.producer !== 'Blue Apron'\">\n\n                      <!-- Steps -->\n                      <div class=\"card\">\n\n                        <app-collapsible-well title=\"'Steps'\">\n                          <div well-title>\n                            Steps\n                          </div>\n                          <div well-body>\n                            <div *ngFor=\"let step of recipe.steps; let i = index\" class=\"row\">\n\n                              <div class=\"col-md-12\">\n                                <div class=\"card\">\n                                  <app-collapsible-well [title]=\"step.name\">\n                                    <div well-title>\n                                      <span style=\"font-style: italic\">{{i+1}}: {{step.name}}</span>\n                                    </div>\n                                    <div well-body>\n                                      <p>{{step.body}}</p>\n                                    </div>\n                                  </app-collapsible-well>\n                                </div>\n                                <br>\n                              </div>\n\n                            </div>\n                          </div>\n                        </app-collapsible-well>\n\n                        <!-- <div class=\"card-header text-center\">\n                          <h2>Steps</h2>\n                        </div> -->\n\n                        <!-- <div class=\"card-body\">\n\n                          <div *ngFor=\"let step of recipe.steps; let i = index\" class=\"row\">\n\n                            <div class=\"col-md-12\">\n                              <div class=\"card\">\n                                <app-collapsible-well [title]=\"step.name\">\n                                  <div well-title>\n                                    <span style=\"font-style: italic\">{{i+1}}: {{step.name}}</span>\n                                  </div>\n                                  <div well-body>\n                                    <p>{{step.body}}</p>\n                                  </div>\n                                </app-collapsible-well>\n                              </div>\n                              <br>\n                            </div>\n\n                          </div>\n\n                        </div> -->\n\n                        </div>\n\n                      <!-- <div class=\"card\">\n\n                        <app-collapsible-well [title]=\"'Testing'\">\n                          <div well-title>\n                          <span style=\"font-style: italic\">6: Assemble and Serve</span>\n                          </div>\n                          <div well-body>\n                              Divide beef mixture between tortillas. Spoon salse and crema over. Sprinkle with remaining cilantro. Serve with lime wedges on the side for squeezing over.\n                          </div>\n                        </app-collapsible-well>\n\n                      </div>\n -->\n                      <br>\n                      <div class=\"col-md-12 text-center\">\n                        <button class=\"btn btn-outline-primary\" type=\"button\" [routerLink]=\"['/recipe/list']\">Back to all recipes</button>\n                      </div>\n                      <div *ngIf=\"userIsAdmin\" class=\"col-md-12 text-center\">\n                        <br>\n                        <button class=\"btn btn-outline-success\" type=\"button\" [routerLink]=\"['/recipe', this.recipeId, 'edit']\">Edit This Recipe</button>\n                      </div>\n                    </div>\n                  </div>\n\n                  <!-- <div class=\"marketing\">\n                    <div class=\"row\"  style=\"text-align: center\" >\n                      <div class=\"col-lg-3\"></div>\n                        <div class=\"col-lg-6\" style=\"padding-top: 20px\">\n                          <a class=\"story-title\" href=\"#\"><img src=\"assets/images/pineapple-poblano-beef-tacos.jpg\" style=\"width:100px;height:100px\" class=\"img-circle\"></a>\n                          <h3>{{recipe.title}}</h3>\n                          <span class=\"badge badge-primary\">{{recipe.producer}} </span>\n                          <br>\n                          <p>Calories: {{recipe.nutritionValues.calories}}</p>\n                        </div>\n                        <div class=\"col-lg-3\"></div>\n                      </div>\n                  </div> -->\n\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      <!-- Modal -->\n      <div style=\"justify-content: center\" class=\"modal fade\" id=\"C580\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n            <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n              <div class=\"modal-content\">\n                <div class=\"modal-header text-center\">\n                  <h5 *ngIf=\"recipe\" class=\"modal-title\" id=\"exampleModalLabel\"><span style=\"font-style: italic; padding-left: 10px\">{{recipe.title}}</span></h5>\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                  </button>\n                </div>\n                <div class=\"modal-body text-center\">\n                  <span (click)=\"setRating(1)\" [ngClass]=\"{'fa-star': userRating > 0, 'fa-star-o': userRating < 1}\" class=\"fa\"></span>\n                  <span (click)=\"setRating(2)\" [ngClass]=\"{'fa-star': userRating > 1, 'fa-star-o': userRating < 2}\" class=\"fa\"></span>\n                  <span (click)=\"setRating(3)\" [ngClass]=\"{'fa-star': userRating > 2, 'fa-star-o': userRating < 3}\" class=\"fa\"></span>\n                  <span (click)=\"setRating(4)\" [ngClass]=\"{'fa-star': userRating > 3, 'fa-star-o': userRating < 4}\" class=\"fa\"></span>\n                  <span (click)=\"setRating(5)\" [ngClass]=\"{'fa-star': userRating > 4, 'fa-star-o': userRating < 5}\" class=\"fa\"></span>\n                </div>\n                <div class=\"modal-footer\">\n                  <!-- <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button> -->\n                  <button type=\"button\" (click)=\"submitRate()\" data-dismiss=\"modal\" class=\"btn btn-primary\">\n                    <span *ngIf=\"!rated\" >Rate!</span>\n                    <span *ngIf=\"rated\" >Change Rate!</span>\n                  </button>\n                </div>\n          </div>\n        </div>\n      </div>\n\n\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-list/recipe-list.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-list/recipe-list.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main role=\"main\">\n\n  <div class=\"container\" style=\"padding-bottom: 30px\">\n    <div class=\"row heading\">\n      <div class=\"col-md-12\">\n        <div class=\"well well-lg\">\n          <div class=\"row\">\n            <div class=\"col-sm-12 text-center\">\n             <h1>All Recipes</h1>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <hr>\n  <div class=\"row\">\n      <div class=\"col-md-4 text-center\">\n        <p>Sort By:</p>\n        <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"btn toolbar\">\n          <div class=\"btn-group\" role=\"group\" aria-label=\"First group\">\n            <button type=\"button\" class=\"btn\" (click)=\"setSortFilter('rating')\"\n                    [ngClass]=\"{'btn-dark': sortFilter !== 'rating', 'btn-light': sortFilter === 'rating'}\" >\n              Rating&nbsp;<i *ngIf=\"sortFilter === 'rating'\" class=\"fa\"\n                          [ngClass]=\"{'fa-sort-asc': sortDirection === 'up', 'fa-sort-desc': sortDirection === 'down'}\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-dark\" (click)=\"setSortFilter('calories')\"\n                    [ngClass]=\"{'btn-dark': sortFilter !== 'calories', 'btn-light': sortFilter === 'calories'}\">\n              Calories&nbsp;<i *ngIf=\"sortFilter === 'calories'\" class=\"fa\"\n                          [ngClass]=\"{'fa-sort-asc': sortDirection === 'up', 'fa-sort-desc': sortDirection === 'down'}\"></i>\n            </button>\n            <button type=\"button\" class=\"btn btn-dark\" (click)=\"setSortFilter('title')\"\n                    [ngClass]=\"{'btn-dark': sortFilter !== 'title', 'btn-light': sortFilter === 'title'}\" >\n              Title&nbsp;<i *ngIf=\"sortFilter === 'title'\" class=\"fa\"\n                       [ngClass]=\"{'fa-sort-asc': sortDirection === 'up', 'fa-sort-desc': sortDirection === 'down'}\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\"></div>\n      <div class=\"col-md-4 text-center\">\n        <p>Filter By:</p>\n        <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"btn toolbar\">\n          <div class=\"btn-group\" role=\"group\" aria-label=\"First group\">\n            <button type=\"button\" class=\"btn\" (click)=\"setTopFilter('new')\"\n                    [ngClass]=\"{'btn-dark': topSelectedFilter !== 'new', 'btn-light': topSelectedFilter === 'new'}\" >New</button>\n            <button type=\"button\" class=\"btn btn-dark\" (click)=\"setTopFilter('hot')\"\n                    [ngClass]=\"{'btn-dark': topSelectedFilter !== 'hot', 'btn-light': topSelectedFilter === 'hot'}\" >Hot</button>\n            <button type=\"button\" class=\"btn btn-dark\" (click)=\"setTopFilter('fav')\"\n                    [ngClass]=\"{'btn-dark': topSelectedFilter !== 'fav', 'btn-light': topSelectedFilter === 'fav'}\" >Fav</button>\n          </div>\n          <div class=\"btn-group\" role=\"group\" aria-label=\"Second group\">\n            <button type=\"button\" class=\"btn\" (click)=\"setBotFilter('Hello Fresh')\"\n                    [ngClass]=\"{'btn-dark': botSelectedFilter !== 'Hello Fresh', 'btn-light': botSelectedFilter === 'Hello Fresh'}\" >Hello Fresh</button>\n            <button type=\"button\" class=\"btn btn-dark\" (click)=\"setBotFilter('Home Chef')\"\n                    [ngClass]=\"{'btn-dark': botSelectedFilter !== 'Home Chef', 'btn-light': botSelectedFilter === 'Home Chef'}\" >Home Chef</button>\n            <button type=\"button\" class=\"btn btn-dark\" (click)=\"setBotFilter('Blue Apron')\"\n                    [ngClass]=\"{'btn-dark': botSelectedFilter !== 'Blue Apron', 'btn-light': botSelectedFilter === 'Blue Apron'}\" >Blue Apron</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"panel\">\n          <div class=\"panel-body\">\n\n            <div class=\"marketing\">\n              <div class=\"row\"  style=\"text-align: center; align-content: center\" >\n                <div *ngFor=\"let recipe of recipeList | filterBy:topSelectedFilter:botSelectedFilter:userId | orderBy:sortFilter:sortDirection \" class=\"col-md-4\" style=\"padding-top: 20px\">\n                  <app-recipe (rateEvent)=\"triggerRate($event)\" (favoriteEvent)=\"favEvent($event)\" [userId]=\"userId\" [recipe]=\"recipe\" [userRating]=\"recipe.raters[userId]\"></app-recipe>\n                </div>\n              </div>\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Modal -->\n    <div style=\"justify-content: center\" class=\"modal fade\" id=\"C580\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n      <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header text-center\">\n            <h5 class=\"modal-title\" id=\"exampleModalLabel\"><span style=\"font-style: italic; padding-left: 10px\">{{selectedRecipe.title}}</span></h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n              <span aria-hidden=\"true\">&times;</span>\n            </button>\n          </div>\n          <div class=\"modal-body text-center\">\n            <span (click)=\"setRating(1)\" [ngClass]=\"{'fa-star': userRating > 0, 'fa-star-o': userRating < 1}\" class=\"fa\"></span>\n            <span (click)=\"setRating(2)\" [ngClass]=\"{'fa-star': userRating > 1, 'fa-star-o': userRating < 2}\" class=\"fa\"></span>\n            <span (click)=\"setRating(3)\" [ngClass]=\"{'fa-star': userRating > 2, 'fa-star-o': userRating < 3}\" class=\"fa\"></span>\n            <span (click)=\"setRating(4)\" [ngClass]=\"{'fa-star': userRating > 3, 'fa-star-o': userRating < 4}\" class=\"fa\"></span>\n            <span (click)=\"setRating(5)\" [ngClass]=\"{'fa-star': userRating > 4, 'fa-star-o': userRating < 5}\" class=\"fa\"></span>\n          </div>\n          <div class=\"modal-footer\">\n            <!-- <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button> -->\n            <button type=\"button\" (click)=\"submitRate()\" data-dismiss=\"modal\" class=\"btn btn-primary\">\n              <span *ngIf=\"!rated\" >Rate!</span>\n              <span *ngIf=\"rated\" >Change Rate!</span>\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-search/recipe-search.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-search/recipe-search.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main role=\"main\">\n\n<div class=\"container\" style=\"padding-bottom: 30px\">\n  <div class=\"row heading\">\n    <div class=\"col-md-12\">\n      <div class=\"well well-lg\">\n        <div class=\"row\">\n          <div class=\"col-sm-12 text-center\">\n           <h1>Search Results<br>\n           <span style=\"font-style: italic\">'{{searchString}}'</span></h1>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <hr>\n</div>\n\n<div class=\"container\">\n\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"panel\">\n          <div class=\"panel-body\">\n\n            <div class=\"marketing\">\n              <div class=\"row\"  style=\"text-align: center; align-content: center\" >\n                <div *ngFor=\"let recipe of filteredList\" class=\"col-lg-4\" style=\"padding-top: 20px\">\n                  <app-recipe (rateEvent)=\"triggerRate($event)\" (favoriteEvent)=\"favEvent($event)\"\n                              [userId]=\"userId\" [recipe]=\"recipe\" [userRating]=\"recipe.raters[userId]\"></app-recipe>\n                </div>\n                <div *ngIf=\"filteredList.length < 1\" class=\"col-lg-12\">\n                  <h3 style=\"font-style: italic\">No Recipes Found</h3>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  <!-- Modal -->\n  <div style=\"justify-content: center\" class=\"modal fade\" id=\"C580\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header text-center\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\"><span style=\"font-style: italic; padding-left: 10px\">{{selectedRecipe.title}}</span></h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body text-center\">\n          <span (click)=\"setRating(1)\" [ngClass]=\"{'fa-star': userRating > 0, 'fa-star-o': userRating < 1}\" class=\"fa\"></span>\n          <span (click)=\"setRating(2)\" [ngClass]=\"{'fa-star': userRating > 1, 'fa-star-o': userRating < 2}\" class=\"fa\"></span>\n          <span (click)=\"setRating(3)\" [ngClass]=\"{'fa-star': userRating > 2, 'fa-star-o': userRating < 3}\" class=\"fa\"></span>\n          <span (click)=\"setRating(4)\" [ngClass]=\"{'fa-star': userRating > 3, 'fa-star-o': userRating < 4}\" class=\"fa\"></span>\n          <span (click)=\"setRating(5)\" [ngClass]=\"{'fa-star': userRating > 4, 'fa-star-o': userRating < 5}\" class=\"fa\"></span>\n        </div>\n        <div class=\"modal-footer\">\n          <!-- <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button> -->\n          <button type=\"button\" (click)=\"submitRate()\" data-dismiss=\"modal\" class=\"btn btn-primary\">\n            <span *ngIf=\"!rated\" >Rate!</span>\n            <span *ngIf=\"rated\" >Change Rate!</span>\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  </div>\n\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe/recipe.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe/recipe.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\" style=\"width: 100%;\">\n  <img class=\"card-img-top img-thumbnail\" src=\"{{recipe.imgDir}}\">\n  <div class=\"card-body\">\n    <h5 style=\"color: white\" class=\"card-title\">{{recipe.title}}</h5>\n    <!-- <p class=\"card-text\">Some quick example text to build on the card title & the card's content.</p> -->\n    <div class=\"row\">\n      <div class=\"col-md-3\"></div>\n      <div class=\"col-md-6\">\n        <p style=\"font-size: 13px; color: white\">Calories: {{recipe.nutritionValues.calories}}</p>\n        <p><span [ngClass]=\"{'badge-hf': recipe.producer === 'Hello Fresh',\n                             'badge-hc': recipe.producer === 'Home Chef',\n                             'badge-success': (recipe.producer === 'Hello Fresh' || recipe.producer === 'Home Chef'),\n                             'badge-primary': recipe.producer === 'Blue Apron'}\"\n            class=\"badge badge-pill\">{{recipe.producer}}</span></p>\n      </div>\n      <div class=\"col-md-3\"></div>\n    <!-- </div> -->\n\n    <!-- <div class=\"row\"> -->\n      <div class=\"col-md-3\">\n        <div class=\"favoritingIcon pointable\">\n              <i class=\"fa\" aria-hidden=\"true\" (click)=\"favorite()\"\n              [ngClass]=\"{'fa-heart': favorited, 'fa-heart-o': !favorited}\"></i>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <a [routerLink]=\"['/recipe', recipe._id]\" class=\"btn btn-info\">View Recipe &raquo;</a>\n      </div>\n      <div class=\"col-md-3\">\n        <!-- Overall -->\n        <div style=\"padding-top: 6px; margin-left: -18px\">\n          <app-star [rating]=\"avgRating\"></app-star>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-4 text-center\">\n      </div>\n      <div style=\"justify-content: center; margin-top: 6px\" class=\"col-md-4 text-center\">\n        <button type=\"button\" [id]=\"recipe._id\" (click)=\"triggerRate()\" class=\"btn btn-sm btn-warning\" data-toggle=\"modal\" data-target=\"#C580\">\n          <span style=\"color: white;\">Rate</span>\n        </button>\n      </div>\n      <div class=\"col-md-4 text-center\">\n      </div>\n    </div>\n\n      <!-- Modal -->\n<!--      <div style=\"justify-content: center\" class=\"modal fade\" [id]=\"modalContentID\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">-->\n<!--        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">-->\n<!--          <div class=\"modal-content\">-->\n<!--            <div class=\"modal-header text-center\">-->\n<!--              <h5 class=\"modal-title\" id=\"exampleModalLabel\"><span style=\"font-style: italic; padding-left: 10px\">{{recipe.title}}</span></h5>-->\n<!--              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">-->\n<!--                <span aria-hidden=\"true\">&times;</span>-->\n<!--              </button>-->\n<!--            </div>-->\n<!--            <div class=\"modal-body text-center\">-->\n<!--              <span (click)=\"setRating(1)\" [ngClass]=\"{'fa-star': userRating > 0, 'fa-star-o': userRating < 1}\" class=\"fa\"></span>-->\n<!--              <span (click)=\"setRating(2)\" [ngClass]=\"{'fa-star': userRating > 1, 'fa-star-o': userRating < 2}\" class=\"fa\"></span>-->\n<!--              <span (click)=\"setRating(3)\" [ngClass]=\"{'fa-star': userRating > 2, 'fa-star-o': userRating < 3}\" class=\"fa\"></span>-->\n<!--              <span (click)=\"setRating(4)\" [ngClass]=\"{'fa-star': userRating > 3, 'fa-star-o': userRating < 4}\" class=\"fa\"></span>-->\n<!--              <span (click)=\"setRating(5)\" [ngClass]=\"{'fa-star': userRating > 4, 'fa-star-o': userRating < 5}\" class=\"fa\"></span>-->\n<!--            </div>-->\n<!--            <div class=\"modal-footer\">-->\n<!--              &lt;!&ndash; <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button> &ndash;&gt;-->\n<!--              <button type=\"button\" (click)=\"submitRate()\" data-dismiss=\"modal\" class=\"btn btn-primary\">-->\n<!--                <span *ngIf=\"!rated\" >Rate!</span>-->\n<!--                <span *ngIf=\"rated\" >Change Rate!</span>-->\n<!--              </button>-->\n<!--            </div>-->\n<!--          </div>-->\n<!--        </div>-->\n<!--      </div>-->\n\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/recipes/edit-recipe/edit-recipe.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/recipes/edit-recipe/edit-recipe.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input {\n  text-align: center; }\n\n.input-group {\n  align-self: flex-start; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yeWFuL1Byb2dyYW1taW5nL1BlcnNvbmFsL3JlY2lwZS1hcHAtbmcvc3JjL2FwcC9yZWNpcGVzL2VkaXQtcmVjaXBlL2VkaXQtcmVjaXBlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZWNpcGVzL2VkaXQtcmVjaXBlL2VkaXQtcmVjaXBlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbnB1dC1ncm91cCB7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/recipes/edit-recipe/edit-recipe.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/recipes/edit-recipe/edit-recipe.component.ts ***!
  \**************************************************************/
/*! exports provided: EditRecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRecipeComponent", function() { return EditRecipeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_core_services_api_recipe_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/api/recipe-api.service */ "./src/app/core/services/api/recipe-api.service.ts");
/* harmony import */ var _core_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/services/toastr.service */ "./src/app/core/services/toastr.service.ts");







function numberChecker() {
    return function (c) {
        var isNotNumber = isNaN(c.value);
        if (c.dirty && isNotNumber && c.value !== '') {
            return { numberType: true };
        }
        return null;
    };
}
var EditRecipeComponent = /** @class */ (function () {
    function EditRecipeComponent(route, router, apiService, toastr, fb) {
        this.route = route;
        this.router = router;
        this.apiService = apiService;
        this.toastr = toastr;
        this.fb = fb;
        this.submitted = false;
        this.blueApronNutritionFlag = false;
    }
    EditRecipeComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scroll(0, 0);
        this.recipeForm = this.fb.group({
            producer: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            ingredients: this.fb.array([]),
            preCook: this.fb.array([]),
            steps: this.fb.array([]),
            nutrition: this.fb.group({
                calories: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, numberChecker()]],
                fat: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, numberChecker()]],
                carbohydrate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, numberChecker()]],
                protein: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, numberChecker()]],
                sugar: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, numberChecker()]],
                saturatedFat: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, numberChecker()]],
                cholesterol: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, numberChecker()]],
                fiber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, numberChecker()]],
                sodium: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, numberChecker()]]
            }),
            imgDir: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        // console.log('right before watchProducer');
        // this.watchProducer();
        // this.watchImageUrl();
        this.sub = this.route.paramMap.subscribe(function (params) {
            _this.id = params.get('id');
            if (_this.id === '0') {
                _this.pageTitle = 'Add Recipe';
            }
            else {
                _this.pageTitle = 'Edit Recipe';
            }
            _this.getRecipeInfo();
        });
    };
    EditRecipeComponent.prototype.watchProducer = function () {
        var _this = this;
        var producerControl = this.recipeForm.get('producer');
        var nutritionControl = this.recipeForm.get('nutrition');
        this.producerSub = producerControl.valueChanges.subscribe(function (value) {
            if (value === 'Blue Apron') {
                _this.preCookTitle = '';
                console.log('handling validation changes based upon BA selection');
                _this.removeHomeChefValidators(nutritionControl);
                _this.removeHelloFreshValidators(nutritionControl);
                /* using the following loop to clear validators so if the user has entered precook stuff then switched to blue apron
                the form will not clear the values in case they switch back but clear the validators so the form is valid. When the form
                is submitted if the producer is blue apron then this comp will then clear the values so they don't get submitted to database */
                var preCookCounter = 0;
                while (preCookCounter < _this.preCook.length) {
                    _this.preCook.at(preCookCounter).get('body').clearValidators();
                    _this.preCook.at(preCookCounter).get('body').updateValueAndValidity();
                    preCookCounter++;
                }
            }
            else if (value === 'Home Chef') {
                // in the case of submitting blue apron originally then changing to home chef... might delete after reactivating submit function
                // but also might keep if I create a modal window to confirm recipe and they choose no and go back to blue apron?
                if (_this.preCook.length === 0) {
                    _this.preCook.push(_this.buildPreCook());
                }
                _this.preCookTitle = 'Before You Cook Instructions:';
                _this.addHomeChefValidators(nutritionControl);
                _this.removeHelloFreshValidators(nutritionControl);
                _this.reAddPreCookValidators();
                console.log('handling validation changed based upon HC selection');
            }
            else if (value === 'Hello Fresh') {
                // in the case of submitting blue apron originally then changing to hello fresh... might delete after reactivating submit function
                // but also might keep if I create a modal window to confirm recipe and they choose no and go back to blue apron?
                if (_this.preCook.length === 0) {
                    _this.preCook.push(_this.buildPreCook());
                }
                _this.preCookTitle = 'What to Bust Out Before You Cook:';
                _this.addHomeChefValidators(nutritionControl);
                _this.addHelloFreshValidators(nutritionControl);
                _this.reAddPreCookValidators();
                console.log('handling validation changes based upon HF selection');
            }
            else {
                console.log('in else clause');
            }
            console.log('Producer changed to: ' + value);
            _this.recipeProducer = value;
        });
    };
    EditRecipeComponent.prototype.clearFormArray = function (formArray) {
        while (formArray.length !== 0) {
            formArray.removeAt(0);
        }
    };
    EditRecipeComponent.prototype.reAddPreCookValidators = function () {
        var counter = 0;
        while (counter < this.preCook.length) {
            this.preCook.at(counter).get('body').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
            this.preCook.at(counter).get('body').updateValueAndValidity();
            counter++;
        }
    };
    EditRecipeComponent.prototype.watchImageUrl = function () {
        var _this = this;
        var imageControl = this.recipeForm.get('imgDir');
        this.imgUrlSub = imageControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(1000)).subscribe(function (value) {
            _this.imageDir = value;
        });
    };
    Object.defineProperty(EditRecipeComponent.prototype, "ingredients", {
        get: function () {
            return this.recipeForm.get('ingredients');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditRecipeComponent.prototype, "steps", {
        get: function () {
            return this.recipeForm.get('steps');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditRecipeComponent.prototype, "preCook", {
        get: function () {
            return this.recipeForm.get('preCook');
        },
        enumerable: true,
        configurable: true
    });
    EditRecipeComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.producerSub.unsubscribe();
        this.imgUrlSub.unsubscribe();
    };
    EditRecipeComponent.prototype.changeBlueApronNutritionalFlag = function () {
        this.blueApronNutritionFlag = !this.blueApronNutritionFlag;
        var nutritionControl = this.recipeForm.get('nutrition');
        if (!this.blueApronNutritionFlag) {
            console.log('no BA nutritional info \nRemoving validators...');
            this.removeHelloFreshValidators(nutritionControl);
            this.removeHomeChefValidators(nutritionControl);
        }
        else {
            console.log('BA nutritional info \nAdding validators...');
            this.addHelloFreshValidators(nutritionControl);
            this.addHomeChefValidators(nutritionControl);
        }
    };
    EditRecipeComponent.prototype.saveForm = function () {
        var _this = this;
        if (!this.recipeForm.valid) {
            console.log('trying to save invalid form');
            this.markFormGroupTouched(this.recipeForm);
            this.toastr.warning('Fix form field errors and try again.');
            // console.log(this.recipeForm.controls);
            return;
        }
        if (this.recipeProducer === 'Blue Apron') {
            console.log('user submitting blue apron recipe. Clearing preCook array...');
            this.clearFormArray(this.preCook);
            if (!this.blueApronNutritionFlag) {
                console.log('saving BA form that doesnt provide nutrition info');
                var nutritionControl = this.recipeForm.get('nutrition');
                nutritionControl.get('fat').patchValue('');
                nutritionControl.get('carbohydrate').patchValue('');
                nutritionControl.get('protein').patchValue('');
                nutritionControl.get('sodium').patchValue('');
                nutritionControl.get('sugar').patchValue('');
                nutritionControl.get('saturatedFat').patchValue('');
                nutritionControl.get('cholesterol').patchValue('');
                nutritionControl.get('fiber').patchValue('');
            }
        }
        if (this.recipeProducer === 'Home Chef' && this.recipeForm.get('nutrition.sugar').value !== '') {
            var nutritionControl = this.recipeForm.get('nutrition');
            nutritionControl.get('sugar').patchValue('');
            nutritionControl.get('saturatedFat').patchValue('');
            nutritionControl.get('cholesterol').patchValue('');
            nutritionControl.get('fiber').patchValue('');
        }
        // console.log('recipe form value: ' + JSON.stringify(this.recipeForm.value));
        // return;
        var formRecipe;
        formRecipe = this.recipeForm.value;
        // formRecipe.nutritionValues = this.recipeForm.get('nutrition').value;
        // user is adding new recipe
        if (this.id === '0') {
            formRecipe.favoriters = [];
            formRecipe.raters = {};
            this.apiService.submitRecipeForApproval(formRecipe).subscribe(function (res) {
                // console.log('response: ' + res.id);
                _this.submitted = true;
                _this.toastr.success('Recipe Submitted for Approval!');
                _this.router.navigate(['/recipe/submitted']);
            }, function (err) {
                _this.toastr.error('Error submitting recipe. Check fields and try again');
                console.log('ERROR CREATING RECIPE: ' + JSON.stringify(err));
            });
        }
        else { // user is editing current recipe
            formRecipe._id = this.id;
            formRecipe.favoriters = this.recipe.favoriters;
            formRecipe.raters = this.recipe.raters;
            this.apiService.updateRecipe(formRecipe).subscribe(function (res) {
                console.log('res on updating: ' + res);
                _this.submitted = true;
                _this.toastr.success('Recipe Successfully Updated!');
                _this.router.navigate(['recipe', _this.id]);
            }, function (err) {
                _this.toastr.error('Error Updating Recipe');
                console.log('ERROR UPDATING RECIPE: ' + JSON.stringify(err));
            });
        }
    };
    EditRecipeComponent.prototype.getRecipeInfo = function () {
        var _this = this;
        if (this.id === '0') { // ading a recipe instead of editing one
            this.recipeForm = this.fb.group({
                producer: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                ingredients: this.fb.array([this.buildIngredient()]),
                preCook: this.fb.array([this.buildPreCook()]),
                steps: this.fb.array([this.buildStep()]),
                nutrition: this.fb.group({
                    calories: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, numberChecker()]],
                    fat: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, numberChecker()]],
                    carbohydrate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, numberChecker()]],
                    protein: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, numberChecker()]],
                    sugar: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, numberChecker()]],
                    saturatedFat: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, numberChecker()]],
                    cholesterol: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, numberChecker()]],
                    fiber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, numberChecker()]],
                    sodium: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, numberChecker()]]
                }),
                imgDir: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            });
            this.recipe = {};
            this.imageDir = '';
            this.watchImageUrl();
            this.watchProducer();
        }
        else { // editing a recipe
            var resolvedData = this.route.snapshot.data.resolvedData;
            if (resolvedData.error) {
                console.error("Error in edit recipe " + resolvedData.error);
                this.router.navigate(['error']);
            }
            this.watchImageUrl();
            this.watchProducer();
            this.recipe = resolvedData.recipe;
            if (this.ingredients) {
                this.ingredients.reset();
            }
            if (this.steps) {
                this.steps.reset();
            }
            this.blueApronNutritionFlag = (this.recipe.producer === 'Blue Apron' && !!this.recipe.nutritionValues.fat);
            var ingredientCounter_1 = 0;
            var stepCounter_1 = 0;
            var preCookCounter_1 = 0;
            this.recipe.ingredients.forEach(function (element) {
                var choppedElement = element.split(' | ');
                var ingredientName = choppedElement[0];
                var ingredientAmount = choppedElement[1];
                // console.log('ingredients array: ' + element);
                _this.ingredients.push(_this.buildIngredient());
                _this.ingredients.at(ingredientCounter_1).patchValue({
                    name: ingredientName,
                    amount: ingredientAmount
                });
                ingredientCounter_1++;
            });
            this.recipe.preCook.forEach(function (element) {
                _this.preCook.push(_this.buildPreCook());
                _this.preCook.at(preCookCounter_1).patchValue({
                    body: element
                });
                preCookCounter_1++;
            });
            this.recipe.steps.forEach(function (step) {
                // console.log('Step ' + (stepCounter + 1) + ': ' + step.name + ' - ' + step.body);
                _this.steps.push(_this.buildStep());
                _this.steps.at(stepCounter_1).patchValue({
                    name: step.name,
                    body: step.body
                });
                stepCounter_1++;
            });
            this.imageDir = this.recipe.imgDir;
            this.recipeForm.patchValue({
                producer: this.recipe.producer,
                title: this.recipe.title,
                nutrition: this.recipe.nutritionValues,
                imgDir: this.recipe.imgDir
            });
            // });
        }
    };
    EditRecipeComponent.prototype.markFormGroupTouched = function (formGroup) {
        var _this = this;
        Object.values(formGroup.controls).forEach(function (control) {
            control.markAsTouched();
            if (control.controls) {
                _this.markFormGroupTouched(control);
            }
        });
    };
    EditRecipeComponent.prototype.buildPreCook = function () {
        return this.fb.group({
            body: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    EditRecipeComponent.prototype.buildIngredient = function () {
        return this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
            // amountFor2: ['', Validators.required],
            // amountFor4: ['', Validators.required]
        });
    };
    EditRecipeComponent.prototype.buildStep = function () {
        return this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            body: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    EditRecipeComponent.prototype.addPreCook = function () {
        this.preCook.push(this.buildPreCook());
    };
    EditRecipeComponent.prototype.addIngredient = function () {
        this.ingredients.push(this.buildIngredient());
    };
    EditRecipeComponent.prototype.addStep = function () {
        this.steps.push(this.buildStep());
    };
    EditRecipeComponent.prototype.removePreCook = function (id) {
        this.preCook.removeAt(id);
    };
    EditRecipeComponent.prototype.removeIngredient = function (id) {
        this.ingredients.removeAt(id);
    };
    EditRecipeComponent.prototype.removeStep = function (id) {
        this.steps.removeAt(id);
    };
    EditRecipeComponent.prototype.addHomeChefValidators = function (formControl) {
        formControl.get('fat').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, numberChecker()]);
        formControl.get('fat').updateValueAndValidity();
        formControl.get('carbohydrate').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, numberChecker()]);
        formControl.get('carbohydrate').updateValueAndValidity();
        formControl.get('protein').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, numberChecker()]);
        formControl.get('protein').updateValueAndValidity();
        formControl.get('sodium').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, numberChecker()]);
        formControl.get('sodium').updateValueAndValidity();
    };
    EditRecipeComponent.prototype.removeHomeChefValidators = function (formControl) {
        formControl.get('fat').clearValidators();
        // formControl.get('fat').patchValue('');
        formControl.get('fat').updateValueAndValidity();
        formControl.get('carbohydrate').clearValidators();
        // formControl.get('carbohydrate').patchValue('');
        formControl.get('carbohydrate').updateValueAndValidity();
        formControl.get('protein').clearValidators();
        // formControl.get('protein').patchValue('');
        formControl.get('protein').updateValueAndValidity();
        formControl.get('sodium').clearValidators();
        // formControl.get('sodium').patchValue('');
        formControl.get('sodium').updateValueAndValidity();
    };
    EditRecipeComponent.prototype.addHelloFreshValidators = function (formControl) {
        formControl.get('sugar').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, numberChecker()]);
        formControl.get('sugar').updateValueAndValidity();
        formControl.get('saturatedFat').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, numberChecker()]);
        formControl.get('saturatedFat').updateValueAndValidity();
        formControl.get('cholesterol').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, numberChecker()]);
        formControl.get('cholesterol').updateValueAndValidity();
        formControl.get('fiber').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, numberChecker()]);
        formControl.get('fiber').updateValueAndValidity();
    };
    EditRecipeComponent.prototype.removeHelloFreshValidators = function (formControl) {
        formControl.get('sugar').clearValidators();
        //  formControl.get('sugar').patchValue('');
        formControl.get('sugar').updateValueAndValidity();
        formControl.get('saturatedFat').clearValidators();
        //  formControl.get('saturatedFat').patchValue('');
        formControl.get('saturatedFat').updateValueAndValidity();
        formControl.get('cholesterol').clearValidators();
        //  formControl.get('cholesterol').patchValue('');
        formControl.get('cholesterol').updateValueAndValidity();
        formControl.get('fiber').clearValidators();
        //  formControl.get('fiber').patchValue('');
        formControl.get('fiber').updateValueAndValidity();
    };
    EditRecipeComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: src_app_core_services_api_recipe_api_service__WEBPACK_IMPORTED_MODULE_5__["RecipeApiService"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_core_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__["TOASTR_TOKEN"],] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
    ]; };
    EditRecipeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-edit-recipe',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-recipe.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/edit-recipe/edit-recipe.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-recipe.component.scss */ "./src/app/recipes/edit-recipe/edit-recipe.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_core_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__["TOASTR_TOKEN"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_core_services_api_recipe_api_service__WEBPACK_IMPORTED_MODULE_5__["RecipeApiService"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], EditRecipeComponent);
    return EditRecipeComponent;
}());



/***/ }),

/***/ "./src/app/recipes/edit-recipe/submitted.component.ts":
/*!************************************************************!*\
  !*** ./src/app/recipes/edit-recipe/submitted.component.ts ***!
  \************************************************************/
/*! exports provided: SubmittedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmittedComponent", function() { return SubmittedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SubmittedComponent = /** @class */ (function () {
    function SubmittedComponent() {
    }
    SubmittedComponent.prototype.ngOnInit = function () {
    };
    SubmittedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-submitted',
            template: "\n  <div class=\"container\" style=\"padding-bottom: 30px\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"well well-lg\">\n          <div class=\"row\">\n            <div class=\"col-sm-12 text-center\">\n            <h1>Thank you for submitting a recipe.</h1> <br>\n            <h1>An admin will review your submitted recipe shortly.</h1>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <hr>\n  </div>\n",
            styles: [""]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SubmittedComponent);
    return SubmittedComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipe-detail/recipe-detail.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/recipes/recipe-detail/recipe-detail.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  height: 100%;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.ing-text {\n  font-size: 18px; }\n\nsmall {\n  font-style: italic; }\n\n.list-group-item:after {\n  border: 0px !important; }\n\n.badge-hf {\n  background-color: #0cd157 !important; }\n\n.badge-hc {\n  background-color: #319b42 !important; }\n\n.fa-heart-o, .fa-heart {\n  color: red; }\n\n.fa-star, .fa-star-o {\n  color: gold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yeWFuL1Byb2dyYW1taW5nL1BlcnNvbmFsL3JlY2lwZS1hcHAtbmcvc3JjL2FwcC9yZWNpcGVzL3JlY2lwZS1kZXRhaWwvcmVjaXBlLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsb0JBQWlCO0tBQWpCLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxrQkFBa0IsRUFBQTs7QUFHcEI7RUFLRSxzQkFBc0IsRUFBQTs7QUFHeEI7RUFFRSxvQ0FBb0MsRUFBQTs7QUFHdEM7RUFDRSxvQ0FBb0MsRUFBQTs7QUFHdEM7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZWNpcGVzL3JlY2lwZS1kZXRhaWwvcmVjaXBlLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uaW5nLXRleHQge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbnNtYWxsIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4ubGlzdC1ncm91cC1pdGVtOmFmdGVyIHtcbiAgLy8gY29udGVudDogXCJcIjtcbiAgLy8gZGlzcGxheTogYmxvY2s7XG4gIC8vIG1hcmdpbjogMCBhdXRvO1xuICAvLyB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAwcHggIWltcG9ydGFudDtcbn1cblxuLmJhZGdlLWhmIHtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzVhOWQzYSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGNkMTU3ICFpbXBvcnRhbnQ7XG59XG5cbi5iYWRnZS1oYyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMTliNDIgIWltcG9ydGFudDtcbn1cblxuLmZhLWhlYXJ0LW8sIC5mYS1oZWFydCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5mYS1zdGFyLCAuZmEtc3Rhci1vIHtcbiAgY29sb3I6IGdvbGQ7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/recipes/recipe-detail/recipe-detail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/recipes/recipe-detail/recipe-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: RecipeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeDetailComponent", function() { return RecipeDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_core_services_api_recipe_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/api/recipe-api.service */ "./src/app/core/services/api/recipe-api.service.ts");
/* harmony import */ var _core_services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/session.service */ "./src/app/core/services/session.service.ts");
/* harmony import */ var src_app_core_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/toastr.service */ "./src/app/core/services/toastr.service.ts");







var RecipeDetailComponent = /** @class */ (function () {
    function RecipeDetailComponent(recipeApi, route, session, router, sanitizer, toastr) {
        this.recipeApi = recipeApi;
        this.route = route;
        this.session = session;
        this.router = router;
        this.sanitizer = sanitizer;
        this.toastr = toastr;
        this.userRating = 0;
        this.avgRating = 0;
    }
    RecipeDetailComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
        var resolvedData = this.route.snapshot.data.resolvedData;
        if (resolvedData.error) {
            console.error("Error in recipe detail comp: " + JSON.stringify(resolvedData.error));
            if (resolvedData.error.error.ErrMessage) {
                console.log("ErrMessage: " + resolvedData.error.error.ErrMessage);
            }
            console.log('routing to error page...');
            this.router.navigate(['error']);
        }
        else {
            this.recipe = resolvedData.recipe;
            this.recipeId = this.recipe._id;
            var favoriters = void 0;
            favoriters = this.recipe.favoriters;
            this.favorited = favoriters.indexOf('' + this.session.getUser._id) > -1;
            if (this.recipe.producer === 'Hello Fresh') {
                this.preCookTitle = 'Bust Out:';
            }
            else if (this.recipe.producer === 'Home Chef') {
                this.preCookTitle = 'Before You Cook:';
            }
            if (Object.keys(this.recipe.raters).length > 0) {
                this.rated = !!this.recipe.raters[this.session.getUser._id];
                this.userRating = this.rated ? this.recipe.raters[this.session.getUser._id] : 0;
                var ratingCounter = 0;
                for (var _i = 0, _a = Object.values(this.recipe.raters); _i < _a.length; _i++) {
                    var value = _a[_i];
                    this.avgRating += Number(value);
                    ratingCounter++;
                }
                this.avgRating /= ratingCounter;
            }
        }
    };
    Object.defineProperty(RecipeDetailComponent.prototype, "userIsAdmin", {
        get: function () {
            return this.session.isAdmin;
        },
        enumerable: true,
        configurable: true
    });
    RecipeDetailComponent.prototype.setRating = function (rating) {
        this.userRating = rating;
    };
    RecipeDetailComponent.prototype.logRate = function ($event) {
        console.log($event);
    };
    RecipeDetailComponent.prototype.submitRate = function () {
        var _this = this;
        this.recipe.raters[this.session.getUser._id] = this.userRating;
        this.recipeApi.rateRecipe(this.recipe).subscribe(function (res) {
            _this.rated = true;
            _this.toastr.success(_this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SecurityContext"].HTML, _this.recipe.title) + " Successfully Rated!");
            // update average rating
            var ratingCounter = 0;
            _this.avgRating = 0;
            for (var _i = 0, _a = Object.values(_this.recipe.raters); _i < _a.length; _i++) {
                var value = _a[_i];
                _this.avgRating += Number(value);
                ratingCounter++;
            }
            _this.avgRating /= ratingCounter;
        }, function (err) {
            _this.toastr.error("ERROR RATING RECIPE");
            console.log('err in submitRate: ' + err);
        });
    };
    RecipeDetailComponent.prototype.favorite = function () {
        var _this = this;
        this.favorited = !this.favorited;
        if (this.favorited) {
            this.recipe.favoriters.push('' + this.session.getUser._id);
        }
        else {
            this.recipe.favoriters = this.recipe.favoriters.filter(function (uId) { return uId !== '' + _this.session.getUser._id; });
        }
        this.recipeApi.favoriteRecipe(this.recipe).subscribe(function (res) {
            // console.log('res from fav api call: ' + res);
            if (_this.favorited) {
                _this.toastr.success(_this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SecurityContext"].HTML, _this.recipe.title) + " Has Been Favorited");
            }
            else {
                _this.toastr.success(_this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SecurityContext"].HTML, _this.recipe.title) + " Has Been Unfavorited");
            }
        });
    };
    RecipeDetailComponent.ctorParameters = function () { return [
        { type: src_app_core_services_api_recipe_api_service__WEBPACK_IMPORTED_MODULE_4__["RecipeApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _core_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [src_app_core_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__["TOASTR_TOKEN"],] }] }
    ]; };
    RecipeDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe-detail',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recipe-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-detail/recipe-detail.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recipe-detail.component.scss */ "./src/app/recipes/recipe-detail/recipe-detail.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_app_core_services_toastr_service__WEBPACK_IMPORTED_MODULE_6__["TOASTR_TOKEN"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_api_recipe_api_service__WEBPACK_IMPORTED_MODULE_4__["RecipeApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _core_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], Object])
    ], RecipeDetailComponent);
    return RecipeDetailComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-list.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-list.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-toolbar {\n  justify-content: center; }\n\n.btn-group {\n  padding-bottom: 2px; }\n\nmain {\n  background-color: #343a40; }\n\n.fa-star, .fa-star-o {\n  color: gold; }\n\n.container {\n  background-color: white;\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yeWFuL1Byb2dyYW1taW5nL1BlcnNvbmFsL3JlY2lwZS1hcHAtbmcvc3JjL2FwcC9yZWNpcGVzL3JlY2lwZS1saXN0L3JlY2lwZS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsV0FBVyxFQUFBOztBQVFiO0VBRUUsdUJBQXVCO0VBQ3ZCLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlLWxpc3QvcmVjaXBlLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLXRvb2xiYXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJ0bi1ncm91cCB7XG4gIHBhZGRpbmctYm90dG9tOiAycHg7XG59XG5cbm1haW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xufVxuXG4uZmEtc3RhciwgLmZhLXN0YXItbyB7XG4gIGNvbG9yOiBnb2xkO1xufVxuXG4vLy5oZWFkaW5nIHtcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xuICAvL2NvbG9yOiB3aGl0ZTtcbi8vfVxuXG4uY29udGFpbmVyIHtcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/recipes/recipe-list/recipe-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/recipes/recipe-list/recipe-list.component.ts ***!
  \**************************************************************/
/*! exports provided: RecipeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeListComponent", function() { return RecipeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _core_services_session_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/session.service */ "./src/app/core/services/session.service.ts");
/* harmony import */ var _core_services_toastr_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/toastr.service */ "./src/app/core/services/toastr.service.ts");
/* harmony import */ var _core_services_api_recipe_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/services/api/recipe-api.service */ "./src/app/core/services/api/recipe-api.service.ts");







var RecipeListComponent = /** @class */ (function () {
    function RecipeListComponent(sessionService, apiService, route, router, sanitizer, 
    // private graphQLService: GraphqlService,
    toastr) {
        this.sessionService = sessionService;
        this.apiService = apiService;
        this.route = route;
        this.router = router;
        this.sanitizer = sanitizer;
        this.toastr = toastr;
        this.userRating = 0;
        this.topSelectedFilter = '';
        this.botSelectedFilter = '';
    }
    RecipeListComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
        // const resolvedData: IRecipesResolved = this.route.snapshot.data.resolvedData;
        var resolvedData = this.route.snapshot.data.resolvedData;
        if (resolvedData.error) {
            console.error("Error from resolver: " + JSON.stringify(resolvedData.error));
            this.router.navigate(['error']);
        }
        else {
            this.recipeList = [];
            // console.log(`resolvedData: ${JSON.stringify(resolvedData.recipes)}`);
            // have to loop through graphQL responses and reverse engineer maps since graphQL doesn't natively support maps
            for (var _i = 0, _a = resolvedData.recipes; _i < _a.length; _i++) {
                var recipe = _a[_i];
                var tmpRecipe = void 0;
                var tmpMap = new Map();
                var counter = 0;
                for (var _b = 0, _c = recipe.raters.keys; _b < _c.length; _b++) {
                    var key = _c[_b];
                    tmpMap[key] = recipe.raters.values[counter];
                    counter++;
                }
                tmpRecipe = {
                    _id: recipe._id,
                    title: recipe.title,
                    producer: recipe.producer,
                    nutritionValues: {
                        calories: recipe.nutritionValues.calories
                    },
                    favoriters: recipe.favoriters,
                    raters: tmpMap,
                    imgDir: recipe.imgDir
                };
                this.recipeList.push(tmpRecipe);
            }
            // this.recipeList = resolvedData.recipes;
            this.userId = this.sessionService.getUser._id;
            // just temporarily assign it to 1st recipe to avoid errors
            this.selectedRecipe = this.recipeList[0];
        }
    };
    RecipeListComponent.prototype.setSortFilter = function (input) {
        if (this.sortFilter === input) {
            if (this.sortDirection === 'down') {
                this.sortFilter = this.sortDirection = '';
            }
            else {
                this.sortDirection = 'down';
            }
        }
        else {
            this.sortFilter = input;
            this.sortDirection = 'up';
        }
    };
    RecipeListComponent.prototype.setBotFilter = function (input) {
        this.botSelectedFilter = this.botSelectedFilter === input ? '' : input;
    };
    RecipeListComponent.prototype.setTopFilter = function (input) {
        this.topSelectedFilter = this.topSelectedFilter === input ? '' : input;
    };
    // test after implementing GraphQL
    RecipeListComponent.prototype.favEvent = function ($event) {
        var _this = this;
        var recipeToFav = $event.recipe;
        var favoriting = $event.favoriting;
        this.apiService.favoriteRecipe(recipeToFav).subscribe(function (res) {
            if (favoriting) {
                var message = recipeToFav.title + " Has Been Favorited!";
                _this.toastr.success(_this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__["SecurityContext"].HTML, message));
            }
            else {
                var message = recipeToFav.title + " Has Been Unfavorited!";
                _this.toastr.success(_this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__["SecurityContext"].HTML, message));
            }
            _this.recipeList = _this.recipeList.slice(0); // re-trigger pipes
        }, function (err) {
            console.error("err: " + err);
            _this.toastr.error('Error favoriting recipe');
        });
    };
    // test all below after implementing GraphQL
    RecipeListComponent.prototype.triggerRate = function ($event) {
        this.selectedRecipe = $event;
        this.rated = !!this.selectedRecipe.raters[this.userId];
        this.userRating = this.rated ? this.selectedRecipe.raters[this.userId] : 0;
    };
    RecipeListComponent.prototype.setRating = function (rating) {
        this.userRating = rating;
    };
    RecipeListComponent.prototype.submitRate = function () {
        var _this = this;
        this.selectedRecipe.raters[this.userId] = this.userRating;
        this.apiService.rateRecipe(this.selectedRecipe).subscribe(function (res) {
            console.log("res: " + res);
            var idx = _this.recipeList.indexOf(_this.selectedRecipe);
            _this.recipeList[idx].raters[_this.userId] = _this.userRating;
            _this.toastr.success(_this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_2__["SecurityContext"].HTML, _this.selectedRecipe.title + " has been successfully rated"));
        }, function (err) {
            console.log("err: " + err);
            _this.toastr.error('Error rating recipe');
        });
    };
    RecipeListComponent.ctorParameters = function () { return [
        { type: _core_services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"] },
        { type: _core_services_api_recipe_api_service__WEBPACK_IMPORTED_MODULE_6__["RecipeApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_core_services_toastr_service__WEBPACK_IMPORTED_MODULE_5__["TOASTR_TOKEN"],] }] }
    ]; };
    RecipeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-recipe-list',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recipe-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-list/recipe-list.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recipe-list.component.scss */ "./src/app/recipes/recipe-list/recipe-list.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_core_services_toastr_service__WEBPACK_IMPORTED_MODULE_5__["TOASTR_TOKEN"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_session_service__WEBPACK_IMPORTED_MODULE_4__["SessionService"],
            _core_services_api_recipe_api_service__WEBPACK_IMPORTED_MODULE_6__["RecipeApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"], Object])
    ], RecipeListComponent);
    return RecipeListComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipe-routing.module.ts":
/*!**************************************************!*\
  !*** ./src/app/recipes/recipe-routing.module.ts ***!
  \**************************************************/
/*! exports provided: RecipeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeRoutingModule", function() { return RecipeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./recipe-list/recipe-list.component */ "./src/app/recipes/recipe-list/recipe-list.component.ts");
/* harmony import */ var _core_resolvers_recipe_resolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../core/resolvers/recipe-resolver.service */ "./src/app/core/resolvers/recipe-resolver.service.ts");
/* harmony import */ var _edit_recipe_submitted_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-recipe/submitted.component */ "./src/app/recipes/edit-recipe/submitted.component.ts");
/* harmony import */ var _recipe_search_recipe_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recipe-search/recipe-search.component */ "./src/app/recipes/recipe-search/recipe-search.component.ts");
/* harmony import */ var _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recipe-detail/recipe-detail.component */ "./src/app/recipes/recipe-detail/recipe-detail.component.ts");
/* harmony import */ var _edit_recipe_edit_recipe_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-recipe/edit-recipe.component */ "./src/app/recipes/edit-recipe/edit-recipe.component.ts");
/* harmony import */ var _core_guards_route_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../core/guards/route.guard */ "./src/app/core/guards/route.guard.ts");
/* harmony import */ var _recipe_recipe_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./recipe/recipe.component */ "./src/app/recipes/recipe/recipe.component.ts");











var routes = [
    {
        path: 'list',
        component: _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_3__["RecipeListComponent"],
        resolve: { resolvedData: _core_resolvers_recipe_resolver_service__WEBPACK_IMPORTED_MODULE_4__["RecipeResolverService"] },
        data: { multipleRecipes: true, context: 'list' }
    },
    {
        path: 'submitted',
        component: _edit_recipe_submitted_component__WEBPACK_IMPORTED_MODULE_5__["SubmittedComponent"]
    },
    {
        path: 'search',
        component: _recipe_search_recipe_search_component__WEBPACK_IMPORTED_MODULE_6__["RecipeSearchComponent"],
        resolve: { resolvedData: _core_resolvers_recipe_resolver_service__WEBPACK_IMPORTED_MODULE_4__["RecipeResolverService"] },
        data: { multipleRecipes: true, context: 'list' }
    },
    {
        path: ':id',
        component: _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_7__["RecipeDetailComponent"],
        resolve: { resolvedData: _core_resolvers_recipe_resolver_service__WEBPACK_IMPORTED_MODULE_4__["RecipeResolverService"] },
        data: { multipleRecipes: false }
    },
    {
        path: ':id/edit',
        component: _edit_recipe_edit_recipe_component__WEBPACK_IMPORTED_MODULE_8__["EditRecipeComponent"],
        canDeactivate: [_core_guards_route_guard__WEBPACK_IMPORTED_MODULE_9__["RouteGuard"]],
        resolve: { resolvedData: _core_resolvers_recipe_resolver_service__WEBPACK_IMPORTED_MODULE_4__["RecipeResolverService"] },
        data: { context: 'editRecipe', multipleRecipes: false }
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list'
    }
];
var RecipeRoutingModule = /** @class */ (function () {
    function RecipeRoutingModule() {
    }
    RecipeRoutingModule.components = [
        _recipe_recipe_component__WEBPACK_IMPORTED_MODULE_10__["RecipeComponent"],
        _recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_7__["RecipeDetailComponent"],
        _recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_3__["RecipeListComponent"],
        _edit_recipe_edit_recipe_component__WEBPACK_IMPORTED_MODULE_8__["EditRecipeComponent"],
        _recipe_search_recipe_search_component__WEBPACK_IMPORTED_MODULE_6__["RecipeSearchComponent"],
        _edit_recipe_submitted_component__WEBPACK_IMPORTED_MODULE_5__["SubmittedComponent"]
    ];
    RecipeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], RecipeRoutingModule);
    return RecipeRoutingModule;
}());



/***/ }),

/***/ "./src/app/recipes/recipe-search/recipe-search.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/recipes/recipe-search/recipe-search.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("main {\n  background-color: #343a40; }\n\n.container {\n  background-color: white;\n  height: 100%; }\n\n.fa-star, .fa-star-o {\n  color: gold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yeWFuL1Byb2dyYW1taW5nL1BlcnNvbmFsL3JlY2lwZS1hcHAtbmcvc3JjL2FwcC9yZWNpcGVzL3JlY2lwZS1zZWFyY2gvcmVjaXBlLXNlYXJjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QixFQUFBOztBQUczQjtFQUVFLHVCQUF1QjtFQUN2QixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZWNpcGVzL3JlY2lwZS1zZWFyY2gvcmVjaXBlLXNlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1haW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xufVxuXG4uY29udGFpbmVyIHtcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZmEtc3RhciwgLmZhLXN0YXItbyB7XG4gIGNvbG9yOiBnb2xkO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/recipes/recipe-search/recipe-search.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/recipes/recipe-search/recipe-search.component.ts ***!
  \******************************************************************/
/*! exports provided: RecipeSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeSearchComponent", function() { return RecipeSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_core_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/toastr.service */ "./src/app/core/services/toastr.service.ts");
/* harmony import */ var src_app_core_services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/session.service */ "./src/app/core/services/session.service.ts");
/* harmony import */ var _core_services_logger_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../core/services/logger.service */ "./src/app/core/services/logger.service.ts");
/* harmony import */ var _core_services_api_recipe_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../core/services/api/recipe-api.service */ "./src/app/core/services/api/recipe-api.service.ts");








var RecipeSearchComponent = /** @class */ (function () {
    function RecipeSearchComponent(route, sessionService, loggerService, router, sanitizer, apiService, toastr) {
        this.route = route;
        this.sessionService = sessionService;
        this.loggerService = loggerService;
        this.router = router;
        this.sanitizer = sanitizer;
        this.apiService = apiService;
        this.toastr = toastr;
        this.userRating = 0;
    }
    RecipeSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scroll(0, 0);
        // const resolvedData: IRecipesResolved = this.route.snapshot.data.resolvedData;
        var resolvedData = this.route.snapshot.data.resolvedData;
        if (resolvedData.error) {
            console.error("Error in edit recipe " + resolvedData.error);
            this.toastr.error("Error fetching recipes: " + resolvedData.error);
            this.router.navigate(['error']);
        }
        else {
            this.recipeList = [];
            // console.log(`resolvedData: ${JSON.stringify(resolvedData.recipes)}`);
            // have to loop through graphQL responses and reverse engineer maps since graphQL doesn't natively support maps
            for (var _i = 0, _a = resolvedData.recipes; _i < _a.length; _i++) {
                var recipe = _a[_i];
                var tmpRecipe = void 0;
                var tmpMap = new Map();
                var counter = 0;
                for (var _b = 0, _c = recipe.raters.keys; _b < _c.length; _b++) {
                    var key = _c[_b];
                    tmpMap[key] = recipe.raters.values[counter];
                    counter++;
                }
                tmpRecipe = {
                    _id: recipe._id,
                    title: recipe.title,
                    producer: recipe.producer,
                    nutritionValues: {
                        calories: recipe.nutritionValues.calories
                    },
                    favoriters: recipe.favoriters,
                    raters: tmpMap,
                    imgDir: recipe.imgDir
                };
                this.recipeList.push(tmpRecipe);
            }
            // this.recipeList = resolvedData.recipes;
            this.userId = this.sessionService.getUser._id;
            // just temporarily assign it to 1st recipe to avoid errors
            this.selectedRecipe = this.recipeList[0];
        }
        this.userId = this.sessionService.getUser._id;
        this.sub = this.route.queryParamMap.subscribe(function (params) {
            _this.loggerService.consoleLog("Param changed to: " + params.get('searchString'));
            _this.searchString = params.get('searchString');
            _this.filterRecipes();
        });
        // just temporarily assign a value to avoid errors
        this.selectedRecipe = this.recipeList[0];
    };
    RecipeSearchComponent.prototype.filterRecipes = function () {
        var _this = this;
        this.filteredList = this.recipeList
            .filter(function (x) { return x.title.toLocaleLowerCase().includes(_this.searchString.toLocaleLowerCase()); });
    };
    RecipeSearchComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    RecipeSearchComponent.prototype.favEvent = function ($event) {
        var _this = this;
        var recipeToFav = $event.recipe;
        var favoriting = $event.favoriting;
        this.apiService.favoriteRecipe(recipeToFav).subscribe(function (res) {
            if (favoriting) {
                var message = recipeToFav.title + " Has Been Favorited!";
                _this.toastr.success(_this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SecurityContext"].HTML, message));
            }
            else {
                var message = recipeToFav.title + " Has Been Unfavorited!";
                _this.toastr.success(_this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SecurityContext"].HTML, message));
            }
            _this.recipeList = _this.recipeList.slice(0); // re-trigger pipes
        }, function (err) {
            console.error("err: " + err);
            _this.toastr.error('Error favoriting recipe');
        });
    };
    RecipeSearchComponent.prototype.triggerRate = function ($event) {
        this.selectedRecipe = $event;
        this.rated = !!this.selectedRecipe.raters[this.userId];
        this.userRating = this.rated ? this.selectedRecipe.raters[this.userId] : 0;
    };
    RecipeSearchComponent.prototype.setRating = function (rating) {
        this.userRating = rating;
    };
    RecipeSearchComponent.prototype.submitRate = function () {
        var _this = this;
        this.selectedRecipe.raters[this.userId] = this.userRating;
        this.apiService.rateRecipe(this.selectedRecipe).subscribe(function (res) {
            console.log("res: " + res);
            var idx = _this.recipeList.indexOf(_this.selectedRecipe);
            _this.recipeList[idx].raters[_this.userId] = _this.userRating;
            _this.toastr.success(_this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SecurityContext"].HTML, _this.selectedRecipe.title + " has been successfully rated"));
        }, function (err) {
            console.log("err: " + err);
            _this.toastr.error('Error rating recipe');
        });
    };
    RecipeSearchComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_core_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"] },
        { type: _core_services_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] },
        { type: _core_services_api_recipe_api_service__WEBPACK_IMPORTED_MODULE_7__["RecipeApiService"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [src_app_core_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__["TOASTR_TOKEN"],] }] }
    ]; };
    RecipeSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe-search',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recipe-search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe-search/recipe-search.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recipe-search.component.scss */ "./src/app/recipes/recipe-search/recipe-search.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_app_core_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__["TOASTR_TOKEN"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_core_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"],
            _core_services_logger_service__WEBPACK_IMPORTED_MODULE_6__["LoggerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
            _core_services_api_recipe_api_service__WEBPACK_IMPORTED_MODULE_7__["RecipeApiService"], Object])
    ], RecipeSearchComponent);
    return RecipeSearchComponent;
}());



/***/ }),

/***/ "./src/app/recipes/recipe.module.ts":
/*!******************************************!*\
  !*** ./src/app/recipes/recipe.module.ts ***!
  \******************************************/
/*! exports provided: RecipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeModule", function() { return RecipeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _recipe_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./recipe-routing.module */ "./src/app/recipes/recipe-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");






var RecipeModule = /** @class */ (function () {
    function RecipeModule() {
    }
    RecipeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _recipe_routing_module__WEBPACK_IMPORTED_MODULE_4__["RecipeRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: [
                _recipe_routing_module__WEBPACK_IMPORTED_MODULE_4__["RecipeRoutingModule"].components
            ],
            providers: []
        })
    ], RecipeModule);
    return RecipeModule;
}());



/***/ }),

/***/ "./src/app/recipes/recipe/recipe.component.scss":
/*!******************************************************!*\
  !*** ./src/app/recipes/recipe/recipe.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card-img-top {\n  width: 100%;\n  height: 233px;\n  -o-object-fit: cover;\n     object-fit: cover; }\n\n.card {\n  background-color: #343a40;\n  height: 100%; }\n\n.img-thumbnail {\n  border: 1px solid #343a40; }\n\n.favoritingIcon {\n  padding-left: 25px;\n  padding-top: 7px; }\n\n.badge-hf {\n  background-color: #0cd157 !important; }\n\n.badge-hc {\n  background-color: #319b42 !important; }\n\n.fa-heart-o, .fa-heart {\n  color: red; }\n\n.fa-star, .fa-star-o {\n  color: gold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yeWFuL1Byb2dyYW1taW5nL1BlcnNvbmFsL3JlY2lwZS1hcHAtbmcvc3JjL2FwcC9yZWNpcGVzL3JlY2lwZS9yZWNpcGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG9CQUFpQjtLQUFqQixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSx5QkFBeUI7RUFDekIsWUFBWSxFQUFBOztBQUdkO0VBQ0UseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQUdsQjtFQUVFLG9DQUFvQyxFQUFBOztBQUd0QztFQUNFLG9DQUFvQyxFQUFBOztBQUd0QztFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3JlY2lwZXMvcmVjaXBlL3JlY2lwZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWltZy10b3Age1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMzNweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaW1nLXRodW1ibmFpbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzNDNhNDA7XG59XG5cbi5mYXZvcml0aW5nSWNvbiB7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbiAgcGFkZGluZy10b3A6IDdweDtcbn1cblxuLmJhZGdlLWhmIHtcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzVhOWQzYSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGNkMTU3ICFpbXBvcnRhbnQ7XG59XG5cbi5iYWRnZS1oYyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMTliNDIgIWltcG9ydGFudDtcbn1cblxuLmZhLWhlYXJ0LW8sIC5mYS1oZWFydCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5mYS1zdGFyLCAuZmEtc3Rhci1vIHtcbiAgY29sb3I6IGdvbGQ7XG59XG5cbi8vIC5yYXRpbmcge1xuICAvLyB1bmljb2RlLWJpZGk6IGJpZGktb3ZlcnJpZGU7XG4gIC8vIGRpcmVjdGlvbjogcnRsO1xuICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyB9XG4vLyAucmF0aW5nID4gc3BhbiB7XG4gIC8vIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgLy8gcG9zaXRpb246IHJlbGF0aXZlO1xuICAvLyB3aWR0aDogMS4xZW07XG4vLyB9XG4vLyAucmF0aW5nID4gc3Bhbjpob3ZlcjpiZWZvcmUsXG4vLyAucmF0aW5nID4gc3Bhbjpob3ZlciB+IHNwYW46YmVmb3JlIHtcbiAgIC8vIGNvbnRlbnQ6IFwiXFwyNjA1XCI7XG4gICAvLyBjb2xvcjogZ29sZDtcbiAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vIH1cblxuLy8gLmluUmF0aW5nIHtcbiAgLy8gY29udGVudDogXCJcXDI2MDVcIjtcbiAgLy8gbGVmdDogMDtcbiAgLy8gLy9jb2xvcjogZ29sZDtcbiAgLy8gcG9zaXRpb246IGFic29sdXRlO1xuLy8gfVxuIl19 */");

/***/ }),

/***/ "./src/app/recipes/recipe/recipe.component.ts":
/*!****************************************************!*\
  !*** ./src/app/recipes/recipe/recipe.component.ts ***!
  \****************************************************/
/*! exports provided: RecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeComponent", function() { return RecipeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RecipeComponent = /** @class */ (function () {
    // modalContentID: string;
    function RecipeComponent(
    // @Inject(JQ_TOKEN) private $: any
    ) {
        this._userRating = 0;
        this.rated = false;
        this.favoriteEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.rateEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.favorited = false;
        this.avgRating = 0;
    }
    Object.defineProperty(RecipeComponent.prototype, "userRating", {
        get: function () {
            return this._userRating;
        },
        set: function (rating) {
            this._userRating = !!rating ? rating : 0;
            this.rated = this._userRating > 0;
            // compute/update average rating
            if (Object.keys(this.recipe.raters).length > 0) {
                var ratingCounter = 0;
                this.avgRating = 0;
                for (var _i = 0, _a = Object.values(this.recipe.raters); _i < _a.length; _i++) {
                    var value = _a[_i];
                    this.avgRating += Number(value);
                    ratingCounter++;
                }
                this.avgRating /= ratingCounter;
            }
            // console.log(`(2) user rating for ${this.recipe.title} is ${this._userRating}`);
            // this._userRating = rating;
        },
        enumerable: true,
        configurable: true
    });
    RecipeComponent.prototype.ngOnInit = function () {
        var favoritersList;
        favoritersList = this.recipe.favoriters;
        this.favorited = favoritersList.indexOf('' + this.userId) > -1;
        // this.modalContentID = this.makeModalId(20);
        // console.log('MODAL CONTENT ID: ' + this.modalContentID);
        // if (Object.keys(this.recipe.raters).length > 0) {
        //
        //   if (this.recipe.raters[this.userId]) {
        //     this.rated = true;
        //     this.userRating = this.recipe.raters[this.userId];
        //   }
        //
        //   let ratingCounter = 0;
        //   for (const value of Object.values(this.recipe.raters)) {
        //     this.avgRating += Number(value);
        //     ratingCounter++;
        //   }
        //
        //   this.avgRating /= ratingCounter;
        //
        // }
    };
    RecipeComponent.prototype.makeModalId = function (length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };
    // ngAfterViewInit() {
    // const modalButton = '#' + this.recipe._id;
    // const thisModalContentId = '#' + this.modalContentID;
    // this.$(modalButton).attr({'data-target': thisModalContentId});
    // }
    // setRating(rating: number): void {
    //   this.userRating = rating;
    // }
    RecipeComponent.prototype.triggerRate = function () {
        this.rateEvent.emit(this.recipe);
    };
    RecipeComponent.prototype.favorite = function () {
        var _this = this;
        this.favorited = !this.favorited;
        if (this.favorited) {
            this.recipe.favoriters.push('' + this.userId);
        }
        else {
            this.recipe.favoriters = this.recipe.favoriters.filter(function (uId) { return uId !== '' + _this.userId; });
        }
        this.favoriteEvent.emit({ recipe: this.recipe, favoriting: this.favorited });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RecipeComponent.prototype, "recipe", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], RecipeComponent.prototype, "userId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
    ], RecipeComponent.prototype, "userRating", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RecipeComponent.prototype, "favoriteEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RecipeComponent.prototype, "rateEvent", void 0);
    RecipeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recipe.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/recipes/recipe/recipe.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recipe.component.scss */ "./src/app/recipes/recipe/recipe.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RecipeComponent);
    return RecipeComponent;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-recipes-recipe-module.js.map