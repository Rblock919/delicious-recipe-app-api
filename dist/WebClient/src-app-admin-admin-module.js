(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-admin-admin-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/approve-recipe-detail/approve-recipe-detail.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/approve-recipe-detail/approve-recipe-detail.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main role=\"main\">\n\n    <!-- <div class=\"container\" style=\"padding-bottom: 30px\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"well well-lg\">\n            <div class=\"row\">\n              <div class=\"col-sm-12 text-center\">\n               <h1>- {{pageTitle}} -</h1>\n               <h1 *ngIf=\"recipe\">{{recipe.title}}</h1>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <hr>\n    </div> -->\n\n    <div *ngIf=\"recipe\" class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n\n          <div class=\"card\">\n\n            <div class=\"card-header text-center\">\n              <h3 *ngIf=\"recipe.title\">Edit Recipe <br> <span style=\"font-style: italic\">{{recipe.title}}</span></h3>\n              <h3 *ngIf=\"!recipe.title\">Create New Recipe</h3>\n            </div>\n\n            <div class=\"card-body\">\n\n              <form novalidate  (ngSubmit)=\"saveForm()\" [formGroup]=\"recipeForm\">\n                <fieldset [disabled]=\"!editMode\">\n\n                <div class=\"form-group\">\n\n                  <div class=\"row form-row\">\n\n                    <div class=\"col-md-2\"></div>\n\n                    <div style=\"justify-content: center\" class=\"col-md-3 text-center input-group\">\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">Producer:</span>\n                      </div>\n                        <select class=\"form-control\" formControlName=\"producer\" id=\"producerId\"\n                                [ngClass]=\"{'is-invalid': (recipeForm.get('producer').touched || recipeForm.get('producer').dirty)\n                                                          && !recipeForm.get('producer').valid }\" >\n                          <option value=\"\" selected disabled hidden>Select Producer...</option>\n                          <option value=\"Hello Fresh\">Hello Fresh</option>\n                          <option value=\"Home Chef\">Home Chef</option>\n                          <option value=\"Blue Apron\">Blue Apron</option>\n                        </select>\n                      <div *ngIf=\"recipeForm.get('producer').errors && recipeForm.get('producer').errors['required']\" class=\"invalid-feedback text-center\">\n                        <span>\n                          Please select a producer.\n                        </span>\n                      </div>\n                      <div *ngIf=\"recipeForm.get('producer').value === 'Blue Apron'\" class=\"form-check\">\n                        <input (change)=\"changeBlueApronNutritionalFlag()\" [checked]=\"blueApronNutritionFlag\" class=\"form-check-input\" type=\"checkbox\" id=\"defaultCheck1\">\n                        <label class=\"form-check-label\" for=\"defaultCheck1\">\n                          Provides Nutritional Info\n                        </label>\n                      </div>\n                    </div>\n\n                    <div class=\"col-md-1\"></div>\n\n\n                    <div class=\"col-md-6 input-group\">\n\n                      <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">Title:</span>\n                      </div>\n                        <input type=\"text\" id=\"titleId\" class=\"form-control\" formControlName=\"title\"\n                               [ngClass]=\"{'is-invalid': (recipeForm.get('title').touched || recipeForm.get('title').dirty) &&\n                                                          !recipeForm.get('title').valid}\" >\n                      <div *ngIf=\"recipeForm.get('title').errors && recipeForm.get('title').errors['required']\" class=\"invalid-feedback text-center\">\n                        <span>\n                          Please enter a title.\n                        </span>\n                      </div>\n                    </div>\n\n                    <!-- <div class=\"col-md-2\"></div> -->\n\n                  </div>\n\n                </div>\n\n                <hr>\n\n                <div class=\"form-group\">\n                  <div class=\"row\">\n                    <div class=\"col-md-12 text-center\">\n                      <h3>Ingredients</h3>\n                    </div>\n                    <br>\n                    <div formArrayName=\"ingredients\" *ngFor=\"let ingredient of ingredients.controls; let i = index\" class=\"col-md-12\">\n                        <div [formGroupName]=\"i\" class=\"row\">\n                          <div class=\"col-md-2\"></div>\n                          <div class=\"col-md-4 text-right input-group\">\n                            <div class=\"input-group-prepend\">\n                              <span class=\"input-group-text\">Ingredient {{i+1}}: </span>\n                            </div>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"name\" id=\"{{'ingredient' + i}}\" placeholder=\"Name of Ingredient\"\n                                    [ngClass]=\"{'is-invalid': (ingredients.at(i).get('name').dirty || ingredients.at(i).get('name').touched)\n                                                              && !ingredients.at(i).get('name').valid}\">\n                            <div *ngIf=\"!ingredients.at(i).get('name').valid && ingredients.at(i).get('name').touched\" class=\"invalid-feedback text-center\">\n                              <span>\n                                Please enter an ingredient name.\n                              </span>\n                            </div>\n                          </div>\n                          <!-- <div class=\"col-md-1\"></div> -->\n                          <div class=\"col-md-4 text-center input-group\">\n                            <div class=\"input-group-prepend\">\n                              <span class=\"input-group-text\">Amount: </span>\n                            </div>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"amount\" id=\"{{'amount' + i}}\" placeholder=\"Amount of Ingredient\"\n                                   [ngClass]=\"{'is-invalid': (ingredients.at(i).get('amount').dirty || ingredients.at(i).get('amount').touched)\n                                                              && !ingredients.at(i).get('amount').valid}\">\n                            <button type=\"button\" class=\"btn btn-outline-danger btn-sm\" (click)=\"removeIngredient(i)\">X</button>\n                            <div *ngIf=\"!ingredients.at(i).get('amount').valid && ingredients.at(i).get('amount').touched\" class=\"invalid-feedback text-center\">\n                              <span>\n                                Please enter the ingredient amount.\n                              </span>\n                            </div>\n                          </div>\n                          <div class=\"col-md-2\"></div>\n                        </div>\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"col-md-12 text-center\">\n                  <button type=\"button\" class=\"btn btn-outline-success\"\n                          (click)=\"addIngredient()\" [disabled]=\"!ingredients.valid\">Add Ingredient</button>\n                </div>\n\n                <hr>\n\n                <div *ngIf=\"recipeProducer === 'Hello Fresh' || recipeProducer === 'Home Chef'\" class=\"form-group\">\n                  <div class=\"row\">\n\n                    <div class=\"col-md-12 text-center\">\n                      <h3>{{preCookTitle}}</h3>\n                    </div>\n\n                    <div formArrayName=\"preCook\" *ngFor=\"let item of preCook.controls; let i = index\" class=\"col-md-12\">\n                      <div [formGroupName]=\"i\" class=\"row form-row\">\n\n                        <div class=\"col-md-3\"></div>\n                        <div class=\"col-md-6\">\n                          <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                              <span class=\"input-group-text\">\n                                <span *ngIf=\"recipeProducer === 'Hello Fresh'\">Bust Out #{{i + 1}}:</span>\n                                <span *ngIf=\"recipeProducer === 'Home Chef'\">Step {{i + 1}}:</span>\n                              </span>\n                            </div>\n                            <input class=\"form-control\" type=\"text\" formControlName=\"body\" id=\"{{'preCook' + i}}\"\n                                   [ngClass]=\"{'is-invalid': (preCook.at(i).get('body').dirty || preCook.at(i).get('body').touched)\n                                                              && !preCook.at(i).get('body').valid}\" >\n                            <button type=\"button\" class=\"btn btn-outline-danger btn-sm\" (click)=\"removePreCook(i)\">X</button>\n                            <div *ngIf=\"!preCook.at(i).get('body').valid && preCook.at(i).get('body').touched\" class=\"invalid-feedback text-center\">\n                              <span>\n                                Please enter the pre cooking instruction\n                              </span>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"col-md-3\"></div>\n\n                      </div>\n                    </div>\n\n                  </div>\n                </div>\n\n                <div *ngIf=\"recipeProducer === 'Hello Fresh' || recipeProducer === 'Home Chef'\" class=\"col-md-12 text-center\">\n                  <button type=\"button\" [disabled]=\"!preCook.valid\" class=\"btn btn-outline-success\" (click)=\"addPreCook()\">\n                    Add Precook <span *ngIf=\"recipeProducer === 'Hello Fresh'\">Bust Out</span> <span *ngIf=\"recipeProducer === 'Home Chef'\">Instruction</span>\n                  </button>\n                </div>\n\n                <hr *ngIf=\"recipeProducer === 'Hello Fresh' || recipeProducer === 'Home Chef'\">\n\n                <div class=\"form-group\">\n                  <div class=\"row\">\n\n                    <div class=\"col-md-12 text-center\">\n                      <h3>Cooking Steps</h3>\n                    </div>\n\n                    <div formArrayName=\"steps\" *ngFor=\"let step of steps.controls; let i = index\" class=\"col-md-12\">\n                      <div [formGroupName]=\"i\" class=\"row form-row\">\n\n                        <div class=\"col-md-3\"></div>\n                        <div class=\"col-md-6\">\n                          <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                              <span class=\"input-group-text\">Step {{i+1}} Name:</span>\n                            </div>\n                            <input class=\"form-control\" type=\"text\" formControlName=\"name\" id=\"{{'stepname' + i}}\"\n                                   [ngClass]=\"{'is-invalid': (steps.at(i).get('name').dirty || steps.at(i).get('name').touched)\n                                                              && !steps.at(i).get('name').valid}\" >\n                            <div *ngIf=\"!steps.at(i).get('name').valid && steps.at(i).get('name').touched\" class=\"invalid-feedback text-center\">\n                              <span>\n                                Please enter a step name.\n                              </span>\n                            </div>\n                          </div>\n                          <!-- <label for=\"{{'stepname' + i}}\">Step {{i+1}} Name:</label> -->\n                        </div>\n                        <div class=\"col-md-3\">\n                          <button type=\"button\" class=\"btn btn-outline-danger btn-sm\" (click)=\"removeStep(i)\">Remove Step {{i+1}}</button>\n                        </div>\n\n                        <div class=\"col-md-12\">\n                          <!-- <label for=\"{{'stepbody' + i}}\">Step {{i+1}} instructions:</label><br> -->\n                          <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                              <span class=\"input-group-text\">Instructions:</span>\n                            </div>\n                            <textarea rows=\"2\" class=\"form-control\"\n                                    formControlName=\"body\" id=\"{{'stepbody' + i}}\" placeholder=\"enter step {{i+1}} instructions here...\"\n                                    [ngClass]=\"{'is-invalid': (steps.at(i).get('body').dirty || steps.at(i).get('body').touched)\n                                                              && !steps.at(i).get('body').valid}\" ></textarea>\n                            <div *ngIf=\"!steps.at(i).get('body').valid && steps.at(i).get('body').touched\" class=\"invalid-feedback text-center\">\n                              <span>\n                                Please enter a step description.\n                              </span>\n                            </div>\n                          </div>\n                        </div>\n\n                      </div>\n                      <br>\n                    </div>\n\n                  </div>\n                </div>\n\n                <div class=\"col-md-12 text-center\">\n                  <button type=\"button\" [disabled]=\"!steps.valid\" class=\"btn btn-outline-success\" (click)=\"addStep()\">Add Step</button>\n                </div>\n\n                <hr>\n\n                <div class=\"col-md-12 text-center\">\n                   <h3>Nurtitional Information</h3>\n                </div>\n\n                <div formGroupName=\"nutrition\">\n                <!-- <div class=\"row\"> -->\n\n                  <div class=\"form-group\">\n                    <div class=\"form-row\">\n\n                      <div *ngIf=\"recipeProducer !== 'Home Chef' && recipeProducer !== 'Hello Fresh' && (!recipeProducer || (recipeProducer === 'Blue Apron' && !blueApronNutritionFlag))\"\n                          class=\"col-md-4\"></div>\n                      <div [ngClass]=\"{'col-md-3': (recipeProducer === 'Home Chef' || recipeProducer === 'Hello Fresh' ||\n                                      (recipeProducer === 'Blue Apron' && blueApronNutritionFlag)),\n                                       'col-md-4': (!recipeProducer || (recipeProducer === 'Blue Apron' && blueApronNutritionFlag === false))}\"\n                            class=\"input-group\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">Calories:</span>\n                        </div>\n                        <input formControlName=\"calories\" type=\"text\" id=\"caloriesId\" class=\"form-control\"\n                               [ngClass]=\"{'is-invalid': (recipeForm.get('nutrition.calories').dirty || recipeForm.get('nutrition.calories').touched)\n                                                          && !recipeForm.get('nutrition.calories').valid}\" >\n                        <div *ngIf=\"recipeForm.get('nutrition.calories').errors &&\n                                    recipeForm.get('nutrition.calories').errors['required']\" class=\"invalid-feedback text-center\">\n                          <span>\n                            Please enter a calorie amount.\n                          </span>\n                        </div>\n                        <div *ngIf=\"recipeForm.get('nutrition.calories').errors &&\n                                    recipeForm.get('nutrition.calories').errors['numberType']\" class=\"invalid-feedback text-center\">\n                          <span>\n                            Please enter a number.\n                          </span>\n                        </div>\n                      </div>\n                      <div *ngIf=\"recipeProducer !== 'Home Chef' && recipeProducer !== 'Hello Fresh' && (recipeProducer === 'Blue Apron' && !blueApronNutritionFlag)\"\n                            class=\"col-md-4\"></div>\n\n                      <div *ngIf=\"recipeProducer === 'Home Chef' || recipeProducer === 'Hello Fresh' || (recipeProducer === 'Blue Apron' && blueApronNutritionFlag)\"\n                          class=\"col-md-3 input-group\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">Fat:</span>\n                        </div>\n                        <input formControlName=\"fat\" type=\"text\" id=\"fatId\" class=\"form-control\"\n                               [ngClass]=\"{'is-invalid': (recipeForm.get('nutrition.fat').dirty || recipeForm.get('nutrition.fat').touched)\n                                                          && !recipeForm.get('nutrition.fat').valid}\" >\n                        <div *ngIf=\"recipeForm.get('nutrition.fat').errors &&\n                                    recipeForm.get('nutrition.fat').errors['required']\" class=\"invalid-feedback text-center\">\n                          <span>\n                            Please enter a fats amount.\n                          </span>\n                        </div>\n                        <div *ngIf=\"recipeForm.get('nutrition.fat').errors &&\n                                    recipeForm.get('nutrition.fat').errors['numberType']\" class=\"invalid-feedback text-center\">\n                          <span>\n                            Please enter a number.\n                          </span>\n                        </div>\n                      </div>\n                      <div *ngIf=\"recipeProducer === 'Home Chef' || recipeProducer === 'Hello Fresh' || (recipeProducer === 'Blue Apron' && blueApronNutritionFlag)\"\n                          class=\"col-md-3 input-group\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">Carbs:</span>\n                        </div>\n                        <input formControlName=\"carbohydrate\" type=\"text\" id=\"carbsId\" class=\"form-control\"\n                               [ngClass]=\"{'is-invalid': (recipeForm.get('nutrition.carbohydrate').dirty || recipeForm.get('nutrition.carbohydrate').touched)\n                                                          && !recipeForm.get('nutrition.carbohydrate').valid}\" >\n                        <div *ngIf=\"recipeForm.get('nutrition.carbohydrate').errors &&\n                                    recipeForm.get('nutrition.carbohydrate').errors['required']\" class=\"invalid-feedback text-center\">\n                          <span>\n                            Please enter a carbs amount.\n                          </span>\n                        </div>\n                        <div *ngIf=\"recipeForm.get('nutrition.carbohydrate').errors &&\n                                    recipeForm.get('nutrition.carbohydrate').errors['numberType']\" class=\"invalid-feedback text-center\">\n                          <span>\n                            Please enter a number.\n                          </span>\n                        </div>\n                      </div>\n                      <div *ngIf=\"recipeProducer === 'Home Chef' || recipeProducer === 'Hello Fresh' || (recipeProducer === 'Blue Apron' && blueApronNutritionFlag)\"\n                          class=\"col-md-3 input-group\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">Protein:</span>\n                        </div>\n                        <input formControlName=\"protein\" type=\"text\" id=\"proteinId\" class=\"form-control\"\n                               [ngClass]=\"{'is-invalid': (recipeForm.get('nutrition.protein').dirty || recipeForm.get('nutrition.protein').touched)\n                                                          && !recipeForm.get('nutrition.protein').valid}\" >\n                        <div *ngIf=\"recipeForm.get('nutrition.protein').errors &&\n                                    recipeForm.get('nutrition.protein').errors['required']\" class=\"invalid-feedback text-center\">\n                          <span>\n                            Please enter a protein amount.\n                          </span>\n                        </div>\n                        <div *ngIf=\"recipeForm.get('nutrition.protein').errors &&\n                                    recipeForm.get('nutrition.protein').errors['numberType']\" class=\"invalid-feedback text-center\">\n                          <span>\n                            Please enter a number.\n                          </span>\n                        </div>\n                      </div>\n\n                    </div>\n                  </div>\n\n                  <div *ngIf=\"recipeProducer === 'Hello Fresh' || (recipeProducer === 'Blue Apron' && blueApronNutritionFlag)\" class=\"form-group\">\n                    <div class=\"form-row\">\n\n                      <div class=\"col-md-3 input-group\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">Sugar:</span>\n                        </div>\n                        <input formControlName=\"sugar\" type=\"text\" id=\"sugarId\" class=\"form-control\"\n                               [ngClass]=\"{'is-invalid': (recipeForm.get('nutrition.sugar').dirty || recipeForm.get('nutrition.sugar').touched)\n                                                          && !recipeForm.get('nutrition.sugar').valid}\" >\n                        <div *ngIf=\"recipeForm.get('nutrition.sugar').errors &&\n                                    recipeForm.get('nutrition.sugar').errors['required']\" class=\"invalid-feedback text-center\">\n                          <span>\n                            Please enter a sugar amount.\n                          </span>\n                        </div>\n                        <div *ngIf=\"recipeForm.get('nutrition.sugar').errors &&\n                                    recipeForm.get('nutrition.sugar').errors['numberType']\" class=\"invalid-feedback text-center\">\n                          <span>\n                            Please enter a number.\n                          </span>\n                        </div>\n                      </div>\n                      <div class=\"col-md-3 input-group\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">Saturated Fat:</span>\n                        </div>\n                        <input formControlName=\"saturatedFat\" type=\"text\" id=\"satfatId\" class=\"form-control\"\n                               [ngClass]=\"{'is-invalid': (recipeForm.get('nutrition.saturatedFat').dirty || recipeForm.get('nutrition.saturatedFat').touched)\n                                                          && !recipeForm.get('nutrition.saturatedFat').valid}\" >\n                        <div *ngIf=\"recipeForm.get('nutrition.saturatedFat').errors &&\n                                    recipeForm.get('nutrition.saturatedFat').errors['required']\" class=\"invalid-feedback text-center\">\n                          <span>\n                            Please enter a saturated fats amount.\n                          </span>\n                        </div>\n                        <div *ngIf=\"recipeForm.get('nutrition.saturatedFat').errors &&\n                                    recipeForm.get('nutrition.saturatedFat').errors['numberType']\" class=\"invalid-feedback text-center\">\n                          <span>\n                            Please enter a number.\n                          </span>\n                        </div>\n                      </div>\n                      <div class=\"col-md-3 input-group\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">Cholesterol:</span>\n                        </div>\n                        <input formControlName=\"cholesterol\" type=\"text\" id=\"cholId\" class=\"form-control\"\n                               [ngClass]=\"{'is-invalid': (recipeForm.get('nutrition.cholesterol').dirty || recipeForm.get('nutrition.cholesterol').touched)\n                                                          && !recipeForm.get('nutrition.cholesterol').valid}\" >\n                        <div *ngIf=\"recipeForm.get('nutrition.cholesterol').errors &&\n                                    recipeForm.get('nutrition.cholesterol').errors['required']\" class=\"invalid-feedback text-center\">\n                          <span>\n                            Please enter a cholesterol amount.\n                          </span>\n                        </div>\n                        <div *ngIf=\"recipeForm.get('nutrition.cholesterol').errors &&\n                                    recipeForm.get('nutrition.cholesterol').errors['numberType']\" class=\"invalid-feedback text-center\">\n                          <span>\n                            Please enter a number.\n                          </span>\n                        </div>\n                      </div>\n                      <div class=\"col-md-3 input-group\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">Fiber:</span>\n                        </div>\n                        <input formControlName=\"fiber\" type=\"text\" id=\"fiberId\" class=\"form-control\"\n                               [ngClass]=\"{'is-invalid': (recipeForm.get('nutrition.fiber').dirty || recipeForm.get('nutrition.fiber').touched)\n                                                          && !recipeForm.get('nutrition.fiber').valid}\" >\n                        <div *ngIf=\"recipeForm.get('nutrition.fiber').errors &&\n                                    recipeForm.get('nutrition.fiber').errors['required']\" class=\"invalid-feedback text-center\">\n                          <span>\n                            Please enter a fiber amount.\n                          </span>\n                        </div>\n                        <div *ngIf=\"recipeForm.get('nutrition.fiber').errors &&\n                                    recipeForm.get('nutrition.fiber').errors['numberType']\" class=\"invalid-feedback text-center\">\n                          <span>\n                            Please enter a number.\n                          </span>\n                        </div>\n                      </div>\n\n                    </div>\n                  </div>\n\n                  <div *ngIf=\"recipeProducer === 'Home Chef' || recipeProducer === 'Hello Fresh' || (recipeProducer === 'Blue Apron' && blueApronNutritionFlag)\"\n                        class=\"form-group\">\n                    <div class=\"row form-row\">\n\n                      <div class=\"col-md-4\"></div>\n                      <div class=\"col-md-3 input-group\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">Sodium:</span>\n                        </div>\n                        <input formControlName=\"sodium\" type=\"text\" id=\"sodiumId\" class=\"form-control\"\n                               [ngClass]=\"{'is-invalid': (recipeForm.get('nutrition.sodium').dirty || recipeForm.get('nutrition.sodium').touched)\n                                                          && !recipeForm.get('nutrition.sodium').valid}\" >\n                        <div *ngIf=\"recipeForm.get('nutrition.sodium').errors &&\n                                    recipeForm.get('nutrition.sodium').errors['required']\" class=\"invalid-feedback text-center\">\n                          <span>\n                            Please enter a sodium amount.\n                          </span>\n                        </div>\n                        <div *ngIf=\"recipeForm.get('nutrition.sodium').errors &&\n                                    recipeForm.get('nutrition.sodium').errors['numberType']\" class=\"invalid-feedback text-center\">\n                          <span>\n                            Please enter a number.\n                          </span>\n                        </div>\n                      </div>\n                      <div class=\"col-md-5\"></div>\n\n                    </div>\n                  </div>\n\n              </div> <!-- end of nutrition form group div -->\n\n                  <hr>\n                  <div class=\"form-group\">\n                    <div class=\"row form-row\">\n\n                      <div class=\"col-md-12 text-center\">\n                        <h3>Image URL</h3>\n                      </div>\n\n                      <div class=\"col-md-12 input-group\">\n                        <div class=\"input-group-prepend\">\n                          <span class=\"input-group-text\">Image URL:</span>\n                        </div>\n                        <input style=\"text-align: left !important\" formControlName=\"imgDir\" type=\"text\" id=\"imgId\" class=\"form-control\"\n                               [ngClass]=\"{'is-invalid': (recipeForm.get('imgDir').dirty || recipeForm.get('imgDir').touched)\n                                                          && !recipeForm.get('imgDir').valid}\" >\n                        <div *ngIf=\"recipeForm.get('imgDir').errors &&\n                                    recipeForm.get('imgDir').errors['required']\" class=\"invalid-feedback text-center\">\n                          <span>\n                            Please enter an image URL.\n                          </span>\n                        </div>\n                      </div>\n                      <br>\n                      <div class=\"col-md-12\">\n                        <div class=\"row\">\n                        <div class=\"col-md-4\"></div>\n                        <div class=\"col-md-4 text-center\">\n                          <label *ngIf=\"imageDir\" style=\"font-style: italic\" for=\"imageId\">Image Preview</label>\n                          <img *ngIf=\"imageDir\" style=\"width: 100%\" id=\"imageId\" src=\"{{imageDir}}\">\n                        </div>\n                        <div class=\"col-md-4\"></div>\n                        </div>\n                      </div>\n\n                    </div>\n                  </div>\n\n                <!-- </div> -->\n\n                <!-- <div class=\"form-group\">\n                  <br>\n                  <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n                </div> -->\n                </fieldset>\n              </form>\n\n            </div><!-- end of card body -->\n            <div class=\"card-footer\">\n              <div class=\"pull-left\">\n                <button type=\"button\" [disabled]=\"editMode\" (click)=\"toggleEditMode()\" class=\"btn btn-info\">Edit</button>\n              </div>\n              <div class=\"pull-right\">\n              Form Valid: {{recipeForm.valid}}\n                <button type=\"button\" data-toggle=\"modal\" data-target=\"#C580\"\n                        class=\"btn btn-danger\">Reject</button>\n                <button style=\"margin-left: 5px\"  data-toggle=\"modal\" data-target=\"#D580\"\n                        type=\"button\" class=\"btn btn-success\" >Approve</button>\n              </div>\n            </div><!-- end of card footer -->\n\n          </div> <!-- end of card -->\n\n        </div> <!-- end of first col-md-12 -->\n      </div> <!-- end of first row -->\n\n      <!-- Reject Modal -->\n      <div class=\"modal fade\" id=\"C580\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header text-center\">\n              <h5 class=\"modal-title\" id=\"exampleModalLabel\">\n                <span style=\"font-style: italic; padding-left: 10px\">\n                  Reject {{recipe.title}}?\n                </span>\n              </h5>\n            </div>\n\n            <div style=\"justify-content: center\" class=\"modal-footer\">\n              <!-- <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button> -->\n              <button type=\"button\" (click)=\"rejectRecipe()\" data-dismiss=\"modal\" class=\"btn btn-danger\">\n                <span>Reject</span>\n              </button>\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span>Cancel</span>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- Approve Modal -->\n      <div class=\"modal fade\" id=\"D580\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModal2Label\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header text-center\">\n              <h5 class=\"modal-title\" id=\"exampleModal2Label\">\n                <span style=\"font-style: italic; padding-left: 10px\">\n                  Approve {{recipe.title}}?\n                </span>\n              </h5>\n            </div>\n\n            <div style=\"justify-content: center\" class=\"modal-footer\">\n              <!-- <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button> -->\n              <button type=\"button\" (click)=\"saveForm()\" data-dismiss=\"modal\" class=\"btn btn-success\">\n                <span>Approve</span>\n              </button>\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span>Cancel</span>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div> <!-- end of container -->\n\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/approve-recipe-list/approve-recipe-list.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/approve-recipe-list/approve-recipe-list.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main role=\"main\">\n\n  <div class=\"container\" style=\"padding-bottom: 30px\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"well well-lg\">\n            <div class=\"row\">\n              <div class=\"col-sm-12 text-center\">\n               <h1>Select a Recipe to Review & Approve/Reject</h1>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <hr>\n\n    <div *ngFor=\"let recipe of recipeList\" class=\"row text-center\">\n      <div class=\"col-md-3\"></div>\n      <div class=\"col-md-6\">\n        <div>\n          {{recipe.title}}\n        </div>\n        <button [routerLink]=\"['/admin/approve', recipe._id]\" class=\"btn btn-outline-primary\">View Recipe</button>\n        <br><hr>\n      </div>\n      <div class=\"col-md-3\"></div>\n      <br>\n    </div>\n\n  </div>\n\n</main>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/edit-recipe-list/edit-recipe-list.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/edit-recipe-list/edit-recipe-list.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main role=\"main\">\n\n  <div class=\"container\" style=\"padding-bottom: 30px\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"well well-lg\">\n            <div class=\"row\">\n              <div class=\"col-sm-12 text-center\">\n               <h1>Select Recipe to Edit</h1>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <hr>\n\n    <div class=\"row\">\n      <div *ngFor=\"let recipe of recipeList\" class=\"col-md-4 text-center card bg-light\">\n        <div class=\"card-body\">\n          <span>{{recipe.title}}</span><br>\n          <span><button class=\"btn btn-sm btn-outline-success\" type=\"button\" [routerLink]=\"['/recipe', recipe._id, 'edit']\">Edit This Recipe</button></span><br>\n          <button class=\"btn btn-sm btn-outline-danger\" (click)=\"triggerModal(recipe)\" type=\"button\" [id]=\"recipe._id\" data-toggle=\"modal\" data-target=\"#C580\">\n            Delete\n          </button>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"modal fade\" id=\"C580\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header text-center\">\n              <h5 *ngIf=\"selectedRecipe\" class=\"modal-title\" id=\"exampleModalLabel\">\n                <span style=\"font-style: italic; padding-left: 10px\">\n                  Delete {{selectedRecipe.title}}?\n                </span>\n              </h5>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span>\n              </button>\n            </div>\n\n            <div style=\"justify-content: center\" class=\"modal-footer\">\n              <!-- <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button> -->\n              <button type=\"button\" (click)=\"deleteRecipe(selectedRecipe._id)\" data-dismiss=\"modal\" class=\"btn btn-danger\">\n                <span>Delete</span>\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n\n  </div>\n\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/edit-user-list/edit-user-list.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/edit-user-list/edit-user-list.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main role=\"main\">\n\n  <div class=\"container\" style=\"padding-bottom: 30px\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"well well-lg\">\n            <div class=\"row\">\n              <div class=\"col-sm-12 text-center\">\n               <h1>Edit Users</h1>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <hr>\n\n    <!-- <div class=\"row\"> -->\n      <div *ngFor=\"let user of userList; let i = index\" class=\"row text-center\">\n        <div class=\"col-md-3\"></div>\n        <div class=\"col-md-6\">\n          <div class=\"custom-control custom-switch\">\n            <span class=\"pull-left\">User: &nbsp; <span style=\"font-style: italic\">{{user.username}}</span></span>\n            <span class=\"pull-right\">\n              <input type=\"checkbox\" (click)=\"changeStatus(user)\" [checked]=\"user.isAdmin\" class=\"custom-control-input\" [id]=\"user._id\">\n              <label class=\"custom-control-label\" [for]=\"user._id\">Admin</label>\n            </span>\n          </div>\n        </div>\n        <div class=\"col-md-3\"></div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-3\"></div>\n        <div class=\"col-md-6\">\n          <hr>\n          <button (click)=\"submit()\" [disabled]=\"!differentFromOriginal\" class=\"btn btn-primary pull-right\">\n            Save Changes\n          </button>\n        </div>\n        <div class=\"col-md-3\"></div>\n      </div>\n    <!-- </div> -->\n\n  </div>\n\n</main>\n");

/***/ }),

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _approve_recipe_detail_approve_recipe_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./approve-recipe-detail/approve-recipe-detail.component */ "./src/app/admin/approve-recipe-detail/approve-recipe-detail.component.ts");
/* harmony import */ var _approve_recipe_list_approve_recipe_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./approve-recipe-list/approve-recipe-list.component */ "./src/app/admin/approve-recipe-list/approve-recipe-list.component.ts");
/* harmony import */ var _edit_recipe_list_edit_recipe_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-recipe-list/edit-recipe-list.component */ "./src/app/admin/edit-recipe-list/edit-recipe-list.component.ts");
/* harmony import */ var _edit_user_list_edit_user_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-user-list/edit-user-list.component */ "./src/app/admin/edit-user-list/edit-user-list.component.ts");
/* harmony import */ var _core_resolvers_recipe_resolver_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/resolvers/recipe-resolver.service */ "./src/app/core/resolvers/recipe-resolver.service.ts");
/* harmony import */ var _services_user_resolver_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/user-resolver.service */ "./src/app/admin/services/user-resolver.service.ts");
/* harmony import */ var _services_unapproved_recipe_resolver_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/unapproved-recipe-resolver.service */ "./src/app/admin/services/unapproved-recipe-resolver.service.ts");










var routes = [
    {
        path: 'editRecipeList',
        component: _edit_recipe_list_edit_recipe_list_component__WEBPACK_IMPORTED_MODULE_5__["EditRecipeListComponent"],
        resolve: { resolvedData: _core_resolvers_recipe_resolver_service__WEBPACK_IMPORTED_MODULE_7__["RecipeResolverService"] },
        data: { multipleRecipes: true, context: 'edit' }
    },
    {
        path: 'approve',
        component: _approve_recipe_list_approve_recipe_list_component__WEBPACK_IMPORTED_MODULE_4__["ApproveRecipeListComponent"],
        resolve: { resolvedData: _services_unapproved_recipe_resolver_service__WEBPACK_IMPORTED_MODULE_9__["UnapprovedRecipeResolverService"] },
        data: { multipleRecipes: true }
    },
    {
        path: 'approve/:id',
        component: _approve_recipe_detail_approve_recipe_detail_component__WEBPACK_IMPORTED_MODULE_3__["ApproveRecipeDetailComponent"],
        resolve: { resolvedData: _services_unapproved_recipe_resolver_service__WEBPACK_IMPORTED_MODULE_9__["UnapprovedRecipeResolverService"] },
        data: { multipleRecipes: false }
    },
    {
        path: 'editUserList',
        component: _edit_user_list_edit_user_list_component__WEBPACK_IMPORTED_MODULE_6__["EditUserListComponent"],
        resolve: { resolvedData: _services_user_resolver_service__WEBPACK_IMPORTED_MODULE_8__["UserResolverService"] },
        data: { multipleUsers: true }
    },
    {
        path: '',
        redirectTo: '/home'
    }
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule.components = [
        _approve_recipe_detail_approve_recipe_detail_component__WEBPACK_IMPORTED_MODULE_3__["ApproveRecipeDetailComponent"],
        _approve_recipe_list_approve_recipe_list_component__WEBPACK_IMPORTED_MODULE_4__["ApproveRecipeListComponent"],
        _edit_recipe_list_edit_recipe_list_component__WEBPACK_IMPORTED_MODULE_5__["EditRecipeListComponent"],
        _edit_user_list_edit_user_list_component__WEBPACK_IMPORTED_MODULE_6__["EditUserListComponent"]
    ];
    AdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/admin.service */ "./src/app/admin/services/admin.service.ts");
/* harmony import */ var _services_user_resolver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/user-resolver.service */ "./src/app/admin/services/user-resolver.service.ts");
/* harmony import */ var _services_unapproved_recipe_resolver_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/unapproved-recipe-resolver.service */ "./src/app/admin/services/unapproved-recipe-resolver.service.ts");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");








var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_7__["AdminRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_7__["AdminRoutingModule"].components
            ],
            providers: [
                _services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"],
                _services_user_resolver_service__WEBPACK_IMPORTED_MODULE_5__["UserResolverService"],
                _services_unapproved_recipe_resolver_service__WEBPACK_IMPORTED_MODULE_6__["UnapprovedRecipeResolverService"]
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/admin/approve-recipe-detail/approve-recipe-detail.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/admin/approve-recipe-detail/approve-recipe-detail.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input {\n  text-align: center; }\n\n.input-group {\n  align-self: flex-start; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yeWFuL1Byb2dyYW1taW5nL1BlcnNvbmFsL3JlY2lwZS1hcHAtbmcvc3JjL2FwcC9hZG1pbi9hcHByb3ZlLXJlY2lwZS1kZXRhaWwvYXBwcm92ZS1yZWNpcGUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hcHByb3ZlLXJlY2lwZS1kZXRhaWwvYXBwcm92ZS1yZWNpcGUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbnB1dC1ncm91cCB7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/admin/approve-recipe-detail/approve-recipe-detail.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/admin/approve-recipe-detail/approve-recipe-detail.component.ts ***!
  \********************************************************************************/
/*! exports provided: ApproveRecipeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproveRecipeDetailComponent", function() { return ApproveRecipeDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_core_services_toastr_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/toastr.service */ "./src/app/core/services/toastr.service.ts");
/* harmony import */ var src_app_core_services_api_recipe_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/api/recipe-api.service */ "./src/app/core/services/api/recipe-api.service.ts");







function numberChecker() {
    return function (c) {
        var isNotNumber = isNaN(c.value);
        if (c.dirty && isNotNumber && c.value !== '') {
            return { numberType: true };
        }
        return null;
    };
}
var ApproveRecipeDetailComponent = /** @class */ (function () {
    function ApproveRecipeDetailComponent(recipeApiService, route, router, toastr, fb) {
        this.recipeApiService = recipeApiService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.fb = fb;
        this.submitted = false;
        this.editMode = false;
        this.blueApronNutritionFlag = false;
    }
    ApproveRecipeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recipeId = this.route.snapshot.params.id;
        // console.log('Id in detail comp: ' + this.recipeId);
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
        this.watchImageUrl();
        var resolvedData = this.route.snapshot.data.resolvedData;
        if (resolvedData.error) {
            console.error(resolvedData.error);
            this.router.navigate(['error']);
        }
        else {
            this.recipe = resolvedData.recipe;
            this.setValidations(this.recipe.producer);
            if (this.ingredients) {
                this.ingredients.reset();
            }
            if (this.steps) {
                this.steps.reset();
            }
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
            if (this.recipe.producer === 'Blue Apron' && this.recipe.nutritionValues.fat) {
                console.log('producer is BA and nutrition info was provided...');
                this.changeBlueApronNutritionalFlag();
            }
            this.recipeForm.patchValue({
                producer: this.recipe.producer,
                title: this.recipe.title,
                nutrition: this.recipe.nutritionValues,
                imgDir: this.recipe.imgDir
            });
            this.watchProducer();
        }
    };
    ApproveRecipeDetailComponent.prototype.changeBlueApronNutritionalFlag = function () {
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
    ApproveRecipeDetailComponent.prototype.toggleEditMode = function () {
        this.editMode = true;
    };
    ApproveRecipeDetailComponent.prototype.watchImageUrl = function () {
        var _this = this;
        var imageControl = this.recipeForm.get('imgDir');
        this.imgUrlSub = imageControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(1000)).subscribe(function (value) {
            _this.imageDir = value;
        });
    };
    ApproveRecipeDetailComponent.prototype.ngOnDestroy = function () {
        this.imgUrlSub.unsubscribe();
        this.producerSub.unsubscribe();
    };
    ApproveRecipeDetailComponent.prototype.watchProducer = function () {
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
    ApproveRecipeDetailComponent.prototype.reAddPreCookValidators = function () {
        var counter = 0;
        while (counter < this.preCook.length) {
            this.preCook.at(counter).get('body').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required);
            this.preCook.at(counter).get('body').updateValueAndValidity();
            counter++;
        }
    };
    ApproveRecipeDetailComponent.prototype.setValidations = function (producer) {
        this.recipeProducer = producer;
        var nutritionControl = this.recipeForm.get('nutrition');
        if (producer === 'Blue Apron') {
            this.preCookTitle = '';
            this.removeHomeChefValidators(nutritionControl);
            this.removeHelloFreshValidators(nutritionControl);
        }
        else {
            if (producer === 'Hello Fresh') {
                this.preCookTitle = 'What to Bust Out Before You Cook:';
            }
            else if (producer === 'Home Chef') {
                this.removeHelloFreshValidators(nutritionControl);
                this.preCookTitle = 'Before You Cook Instructions:';
            }
        }
    };
    ApproveRecipeDetailComponent.prototype.saveForm = function () {
        var _this = this;
        if (!this.recipeForm.valid) {
            console.log('trying to save invalid form');
            this.markFormGroupTouched(this.recipeForm);
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
        formRecipe.favoriters = [];
        formRecipe.raters = {};
        this.recipeApiService.addRecipe(formRecipe, this.recipeId).subscribe(function (res) {
            _this.submitted = true;
            _this.toastr.success('Recipe Successfully Approved!');
            _this.router.navigate(['/recipe', res.id]);
        }, function (err) {
            _this.toastr.error('Error Submitting Recipe');
            console.log('ERROR SUBMITTING RECIPE: ' + JSON.stringify(err));
        });
    };
    ApproveRecipeDetailComponent.prototype.markFormGroupTouched = function (formGroup) {
        var _this = this;
        Object.values(formGroup.controls).forEach(function (control) {
            control.markAsTouched();
            if (control.controls) {
                _this.markFormGroupTouched(control);
            }
        });
    };
    ApproveRecipeDetailComponent.prototype.rejectRecipe = function () {
        var _this = this;
        this.recipeApiService.rejectRecipe(this.recipeId).subscribe(function (res) {
            console.log("res: " + res);
            _this.toastr.success('Recipe successfully rejected');
            _this.router.navigate(['admin/approve']);
        }, function (err) {
            console.error("Error rejecting recipe: " + err);
            _this.toastr.error('Error rejecting recipe');
        });
    };
    ApproveRecipeDetailComponent.prototype.clearFormArray = function (formArray) {
        while (formArray.length !== 0) {
            formArray.removeAt(0);
        }
    };
    Object.defineProperty(ApproveRecipeDetailComponent.prototype, "ingredients", {
        get: function () {
            return this.recipeForm.get('ingredients');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApproveRecipeDetailComponent.prototype, "steps", {
        get: function () {
            return this.recipeForm.get('steps');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApproveRecipeDetailComponent.prototype, "preCook", {
        get: function () {
            return this.recipeForm.get('preCook');
        },
        enumerable: true,
        configurable: true
    });
    ApproveRecipeDetailComponent.prototype.buildPreCook = function () {
        return this.fb.group({
            body: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    ApproveRecipeDetailComponent.prototype.buildIngredient = function () {
        return this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            amount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    ApproveRecipeDetailComponent.prototype.buildStep = function () {
        return this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            body: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    ApproveRecipeDetailComponent.prototype.addPreCook = function () {
        this.preCook.push(this.buildPreCook());
    };
    ApproveRecipeDetailComponent.prototype.addIngredient = function () {
        this.ingredients.push(this.buildIngredient());
    };
    ApproveRecipeDetailComponent.prototype.addStep = function () {
        this.steps.push(this.buildStep());
    };
    ApproveRecipeDetailComponent.prototype.removePreCook = function (id) {
        this.preCook.removeAt(id);
    };
    ApproveRecipeDetailComponent.prototype.removeIngredient = function (id) {
        this.ingredients.removeAt(id);
    };
    ApproveRecipeDetailComponent.prototype.removeStep = function (id) {
        this.steps.removeAt(id);
    };
    ApproveRecipeDetailComponent.prototype.addHomeChefValidators = function (formControl) {
        formControl.get('fat').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, numberChecker()]);
        formControl.get('fat').updateValueAndValidity();
        formControl.get('carbohydrate').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, numberChecker()]);
        formControl.get('carbohydrate').updateValueAndValidity();
        formControl.get('protein').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, numberChecker()]);
        formControl.get('protein').updateValueAndValidity();
        formControl.get('sodium').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, numberChecker()]);
        formControl.get('sodium').updateValueAndValidity();
    };
    ApproveRecipeDetailComponent.prototype.addHelloFreshValidators = function (formControl) {
        formControl.get('sugar').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, numberChecker()]);
        formControl.get('sugar').updateValueAndValidity();
        formControl.get('saturatedFat').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, numberChecker()]);
        formControl.get('saturatedFat').updateValueAndValidity();
        formControl.get('cholesterol').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, numberChecker()]);
        formControl.get('cholesterol').updateValueAndValidity();
        formControl.get('fiber').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, numberChecker()]);
        formControl.get('fiber').updateValueAndValidity();
    };
    ApproveRecipeDetailComponent.prototype.removeHomeChefValidators = function (formControl) {
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
    ApproveRecipeDetailComponent.prototype.removeHelloFreshValidators = function (formControl) {
        formControl.get('sugar').clearValidators();
        // formControl.get('sugar').patchValue('');
        formControl.get('sugar').updateValueAndValidity();
        formControl.get('saturatedFat').clearValidators();
        // formControl.get('saturatedFat').patchValue('');
        formControl.get('saturatedFat').updateValueAndValidity();
        formControl.get('cholesterol').clearValidators();
        // formControl.get('cholesterol').patchValue('');
        formControl.get('cholesterol').updateValueAndValidity();
        formControl.get('fiber').clearValidators();
        // formControl.get('fiber').patchValue('');
        formControl.get('fiber').updateValueAndValidity();
    };
    ApproveRecipeDetailComponent.ctorParameters = function () { return [
        { type: src_app_core_services_api_recipe_api_service__WEBPACK_IMPORTED_MODULE_6__["RecipeApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [src_app_core_services_toastr_service__WEBPACK_IMPORTED_MODULE_5__["TOASTR_TOKEN"],] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
    ]; };
    ApproveRecipeDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-approve-recipe-detail',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./approve-recipe-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/approve-recipe-detail/approve-recipe-detail.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./approve-recipe-detail.component.scss */ "./src/app/admin/approve-recipe-detail/approve-recipe-detail.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_app_core_services_toastr_service__WEBPACK_IMPORTED_MODULE_5__["TOASTR_TOKEN"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_api_recipe_api_service__WEBPACK_IMPORTED_MODULE_6__["RecipeApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], ApproveRecipeDetailComponent);
    return ApproveRecipeDetailComponent;
}());



/***/ }),

/***/ "./src/app/admin/approve-recipe-list/approve-recipe-list.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/admin/approve-recipe-list/approve-recipe-list.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FwcHJvdmUtcmVjaXBlLWxpc3QvYXBwcm92ZS1yZWNpcGUtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/admin/approve-recipe-list/approve-recipe-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/admin/approve-recipe-list/approve-recipe-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: ApproveRecipeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApproveRecipeListComponent", function() { return ApproveRecipeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_logger_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/logger.service */ "./src/app/core/services/logger.service.ts");




var ApproveRecipeListComponent = /** @class */ (function () {
    function ApproveRecipeListComponent(loggerService, router, route) {
        this.loggerService = loggerService;
        this.router = router;
        this.route = route;
    }
    ApproveRecipeListComponent.prototype.ngOnInit = function () {
        var resolvedData = this.route.snapshot.data.resolvedData;
        if (resolvedData.error) {
            this.loggerService.consoleError(resolvedData.error);
            this.router.navigate(['error']);
        }
        else {
            this.recipeList = resolvedData.recipes;
        }
    };
    ApproveRecipeListComponent.ctorParameters = function () { return [
        { type: _core_services_logger_service__WEBPACK_IMPORTED_MODULE_3__["LoggerService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
    ]; };
    ApproveRecipeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-approve-recipe-list',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./approve-recipe-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/approve-recipe-list/approve-recipe-list.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./approve-recipe-list.component.scss */ "./src/app/admin/approve-recipe-list/approve-recipe-list.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_logger_service__WEBPACK_IMPORTED_MODULE_3__["LoggerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ApproveRecipeListComponent);
    return ApproveRecipeListComponent;
}());



/***/ }),

/***/ "./src/app/admin/edit-recipe-list/edit-recipe-list.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/admin/edit-recipe-list/edit-recipe-list.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2VkaXQtcmVjaXBlLWxpc3QvZWRpdC1yZWNpcGUtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/admin/edit-recipe-list/edit-recipe-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/edit-recipe-list/edit-recipe-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: EditRecipeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditRecipeListComponent", function() { return EditRecipeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_services_api_recipe_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/api/recipe-api.service */ "./src/app/core/services/api/recipe-api.service.ts");
/* harmony import */ var src_app_core_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/toastr.service */ "./src/app/core/services/toastr.service.ts");
/* harmony import */ var _core_services_jQuery_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/jQuery.service */ "./src/app/core/services/jQuery.service.ts");






var EditRecipeListComponent = /** @class */ (function () {
    function EditRecipeListComponent(apiService, route, toastr, $) {
        this.apiService = apiService;
        this.route = route;
        this.toastr = toastr;
        this.$ = $;
        this.selectedRecipeTitle = '';
    }
    EditRecipeListComponent.prototype.ngOnInit = function () {
        var resolvedData = this.route.snapshot.data.resolvedData;
        this.recipeList = [];
        if (resolvedData.error) {
            console.error("Error in edit recipe list component: " + resolvedData.error);
        }
        else {
            for (var _i = 0, _a = resolvedData.recipes; _i < _a.length; _i++) {
                var recipe = _a[_i];
                var tmpRecipe = void 0;
                tmpRecipe = {
                    _id: recipe._id,
                    title: recipe.title
                };
                this.recipeList.push(tmpRecipe);
            }
            // this.recipeList = resolvedData.recipes;
        }
        // this.apiService.getRecipeList().subscribe(data => {
        // this.recipeList = data;
        // });
    };
    EditRecipeListComponent.prototype.triggerModal = function (recipe) {
        this.selectedRecipe = recipe;
        this.selectedRecipeTitle = recipe.title;
        console.log('Selected Recipe: ' + this.selectedRecipe.title);
    };
    EditRecipeListComponent.prototype.deleteRecipe = function (recipeId) {
        var _this = this;
        this.apiService.deleteRecipe(recipeId).subscribe(function (res) {
            console.log('Res: ' + res);
            _this.recipeList = _this.recipeList.filter(function (x) { return x._id !== recipeId; });
            _this.toastr.success('Recipe Successfully Deleted');
        }, function (err) {
            console.error(err);
            _this.toastr.error('Error Deleting Recipe');
        });
    };
    EditRecipeListComponent.ctorParameters = function () { return [
        { type: src_app_core_services_api_recipe_api_service__WEBPACK_IMPORTED_MODULE_3__["RecipeApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [src_app_core_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__["TOASTR_TOKEN"],] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_core_services_jQuery_service__WEBPACK_IMPORTED_MODULE_5__["JQ_TOKEN"],] }] }
    ]; };
    EditRecipeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-edit-recipe-list',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-recipe-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/edit-recipe-list/edit-recipe-list.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-recipe-list.component.scss */ "./src/app/admin/edit-recipe-list/edit-recipe-list.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(src_app_core_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__["TOASTR_TOKEN"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_core_services_jQuery_service__WEBPACK_IMPORTED_MODULE_5__["JQ_TOKEN"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_api_recipe_api_service__WEBPACK_IMPORTED_MODULE_3__["RecipeApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], Object, Object])
    ], EditRecipeListComponent);
    return EditRecipeListComponent;
}());



/***/ }),

/***/ "./src/app/admin/edit-user-list/edit-user-list.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/admin/edit-user-list/edit-user-list.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2VkaXQtdXNlci1saXN0L2VkaXQtdXNlci1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/admin/edit-user-list/edit-user-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/edit-user-list/edit-user-list.component.ts ***!
  \******************************************************************/
/*! exports provided: EditUserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserListComponent", function() { return EditUserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_admin_services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/admin/services/admin.service */ "./src/app/admin/services/admin.service.ts");
/* harmony import */ var _core_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/toastr.service */ "./src/app/core/services/toastr.service.ts");





var EditUserListComponent = /** @class */ (function () {
    function EditUserListComponent(adminService, route, router, toastr) {
        this.adminService = adminService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.differentFromOriginal = false;
    }
    EditUserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editedAdminFields = [];
        this.userList = [];
        var resolvedData = this.route.snapshot.data.resolvedData;
        if (resolvedData.error) {
            console.error("Error: " + resolvedData.error);
            this.router.navigate(['error']);
        }
        else {
            this.userList = resolvedData.users;
            var counter_1 = 0;
            this.userList.forEach(function (user) {
                _this.editedAdminFields.push();
                _this.editedAdminFields[counter_1] = user.isAdmin;
                counter_1++;
            });
        }
    };
    EditUserListComponent.prototype.changeStatus = function (user) {
        var index = this.userList.indexOf(user);
        this.editedAdminFields[index] = !this.editedAdminFields[index];
        this.calcDiff();
    };
    EditUserListComponent.prototype.calcDiff = function () {
        this.differentFromOriginal = false;
        var counter = 0;
        while (counter < this.userList.length) {
            if (this.editedAdminFields[counter] !== this.userList[counter].isAdmin) {
                this.differentFromOriginal = true;
            }
            counter++;
        }
    };
    EditUserListComponent.prototype.submit = function () {
        var _this = this;
        this.updatedUserList = [];
        var counter = 0;
        var counter2 = 0;
        this.userList.forEach(function (user) {
            if (user.isAdmin !== _this.editedAdminFields[counter]) {
                _this.updatedUserList.push(user);
                _this.updatedUserList[counter2].isAdmin = _this.editedAdminFields[counter];
                counter2++;
            }
            counter++;
        });
        this.adminService.updateUsers(this.updatedUserList).subscribe(function (res) {
            console.log('res: ' + res);
            _this.toastr.success('Users Successfully Updated!');
            _this.differentFromOriginal = false;
            var counter3 = 0;
            _this.editedAdminFields = [];
            _this.userList.forEach(function (user) {
                _this.editedAdminFields.push();
                _this.editedAdminFields[counter3] = user.isAdmin;
                counter3++;
            });
        }, function (err) {
            console.log('err: ' + JSON.stringify(err));
            _this.toastr.error('Error Updating Users');
        });
        console.log('submitted userList: ' + JSON.stringify(this.updatedUserList));
    };
    EditUserListComponent.ctorParameters = function () { return [
        { type: src_app_admin_services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_core_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__["TOASTR_TOKEN"],] }] }
    ]; };
    EditUserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-edit-user-list',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-user-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/edit-user-list/edit-user-list.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-user-list.component.scss */ "./src/app/admin/edit-user-list/edit-user-list.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_core_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__["TOASTR_TOKEN"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_admin_services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], Object])
    ], EditUserListComponent);
    return EditUserListComponent;
}());



/***/ }),

/***/ "./src/app/admin/services/admin.service.ts":
/*!*************************************************!*\
  !*** ./src/app/admin/services/admin.service.ts ***!
  \*************************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_services_api_graphql_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/api/graphql.service */ "./src/app/core/services/api/graphql.service.ts");






var AdminService = /** @class */ (function () {
    function AdminService(httpClient, graphQLService) {
        this.httpClient = httpClient;
        this.graphQLService = graphQLService;
        this.uri = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].path + 'admin';
    }
    AdminService.prototype.getUsers = function () {
        return this.graphQLService.getUserList();
        // return this.httpClient.get<IUser[]>(`${this.uri}/getUsers`, {responseType: 'json'});
    };
    AdminService.prototype.updateUsers = function (users) {
        return this.httpClient.post(this.uri + "/updateUsers", users, { responseType: 'text' });
    };
    AdminService.prototype.getApprovalList = function () {
        // return this.httpClient.get<IRecipe[]>(`${this.uri}/approval`, {responseType: 'json'});
        return this.graphQLService.getApprovalList();
    };
    AdminService.prototype.getApprovalById = function (id) {
        return this.httpClient.get(this.uri + "/approval/" + id, { responseType: 'json' });
    };
    AdminService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    AdminService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _core_services_api_graphql_service__WEBPACK_IMPORTED_MODULE_5__["GraphqlService"] }
    ]; };
    AdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(
        // { providedIn: AdminModule }
        ),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _core_services_api_graphql_service__WEBPACK_IMPORTED_MODULE_5__["GraphqlService"]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "./src/app/admin/services/unapproved-recipe-resolver.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/services/unapproved-recipe-resolver.service.ts ***!
  \**********************************************************************/
/*! exports provided: UnapprovedRecipeResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnapprovedRecipeResolverService", function() { return UnapprovedRecipeResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_admin_services_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/admin/services/admin.service */ "./src/app/admin/services/admin.service.ts");





var UnapprovedRecipeResolverService = /** @class */ (function () {
    function UnapprovedRecipeResolverService(adminService) {
        this.adminService = adminService;
    }
    UnapprovedRecipeResolverService.prototype.resolve = function (route, state) {
        var multiple = route.data.multipleRecipes;
        if (multiple) {
            return this.adminService.getApprovalList()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (graphQLRes) { return ({ recipes: graphQLRes.data.recipes }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ recipes: null, error: error });
            }));
        }
        else {
            var id = route.params.id;
            return this.adminService.getApprovalById(id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (recipe) { return ({ recipe: recipe }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ recipe: null, error: error });
            }));
        }
    };
    UnapprovedRecipeResolverService.ctorParameters = function () { return [
        { type: src_app_admin_services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"] }
    ]; };
    UnapprovedRecipeResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(
        // { providedIn: 'root' }
        ),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_admin_services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"]])
    ], UnapprovedRecipeResolverService);
    return UnapprovedRecipeResolverService;
}());



/***/ }),

/***/ "./src/app/admin/services/user-resolver.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/admin/services/user-resolver.service.ts ***!
  \*********************************************************/
/*! exports provided: UserResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserResolverService", function() { return UserResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_admin_services_admin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/admin/services/admin.service */ "./src/app/admin/services/admin.service.ts");





var UserResolverService = /** @class */ (function () {
    function UserResolverService(adminService) {
        this.adminService = adminService;
    }
    UserResolverService.prototype.resolve = function (route, state) {
        console.log('in user resolver');
        var multiple = route.data.multipleUsers;
        // if (multiple) { // implement once a need for fetching a single user is needed inside the interface and not just refreshing userdata
        if (true) {
            return this.adminService.getUsers()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (graphQLRes) { return ({ users: graphQLRes.data.users }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
                console.error(error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ users: null, error: error });
            }));
            // return this.adminService.getUsers()
            //   .pipe(map(users => ({users})),
            //   catchError(error => {
            //     console.error(error);
            //     return of ({users: null, error});
            //   })
            // );
        }
        else {}
    };
    UserResolverService.ctorParameters = function () { return [
        { type: src_app_admin_services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"] }
    ]; };
    UserResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(
        // { providedIn: 'root' }
        ),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_admin_services_admin_service__WEBPACK_IMPORTED_MODULE_4__["AdminService"]])
    ], UserResolverService);
    return UserResolverService;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-admin-admin-module.js.map