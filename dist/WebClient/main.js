(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--The content below is only a placeholder and can be replaced.-->\n<span class=\"fa fa-spinner spinner\" *ngIf=\"loading\"></span>\n<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/error/error.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/error/error.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  Oops looks like something went wrong!\n</p>\n<button class=\"btn btn-outline-primary\" [routerLink]=\"['/home']\" >Take Me Home</button>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/home/splash-page.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/home/splash-page.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main role=\"main\">\n\n    <div class=\"text-center\">\n      <h2>Welcome to my Recipe Repository Application!</h2>\n    </div>\n    <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n        <ol class=\"carousel-indicators\">\n          <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n          <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n          <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n        </ol>\n        <div class=\"carousel-inner\">\n          <div class=\"carousel-item active\">\n            <svg class=\"bd-placeholder-img\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\" role=\"img\"><rect width=\"100%\" height=\"100%\" fill=\"#343a40\"/></svg>\n            <div class=\"container\">\n              <div class=\"carousel-caption\">\n                <h1>Tons O' Recipes.</h1>\n                <p>This application stores declicious recipes from all of Blue Apron, Hello Fresh & Home Chef. Have a recipe? Sign up now and submit it!</p>\n                <p><a class=\"btn btn-lg btn-primary\" [routerLink]=\"['/register']\" routerLinkActive=\"router-link-active\"  role=\"button\">Sign up today</a></p>\n              </div>\n            </div>\n          </div>\n          <div class=\"carousel-item\">\n            <svg class=\"bd-placeholder-img\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\" role=\"img\"><rect width=\"100%\" height=\"100%\" fill=\"#343a40\"/></svg>\n            <div class=\"container\">\n              <div class=\"carousel-caption\">\n                <h1>Have a few recipes that you especially like?</h1>\n                <p>Click the heart button next to a recipe to favorite it and add it to your personalized favorited list!</p>\n                <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Learn more</a></p>\n              </div>\n            </div>\n          </div>\n          <div class=\"carousel-item\">\n            <svg class=\"bd-placeholder-img\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\" role=\"img\"><rect width=\"100%\" height=\"100%\" fill=\"#343a40\"/></svg>\n            <div class=\"container\">\n              <div class=\"carousel-caption\">\n                <h1>Want to let others know about your favorite recipes?</h1>\n                <p>Click on one of the 5 stars next to a recipe to rate it accordingly. Then all users can sort recipes based upon the highest rated!</p>\n                <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Browse gallery</a></p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <a class=\"carousel-control-prev\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n          <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"carousel-control-next\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n          <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n      </div>\n\n  <!-- <div class=\"container\" style=\"padding-bottom: 30px\">\n    <div class=\"row\">\n\n      <div class=\"col-md-12\">\n        <div class=\"well well-lg\">\n          <div class=\"row\">\n            <div class=\"col-sm-12 text-center\">\n             <h1>{{pageTitle}}</h1>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n    <hr>\n    <div class=\"row\">\n      <div class=\"col-md-4\"></div>\n      <div class=\"col-md-4\">\n        <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"btn toolbar\">\n          <div class=\"btn-group btn-group-lg\" role=\"group\" aria-label=\"First group\">\n            <button type=\"button\" class=\"btn\" (click)=\"setFilter('new')\"\n                    [ngClass]=\"{'btn-dark': selectedFilter !== 'new', 'btn-light': selectedFilter === 'new'}\" >New</button>\n            <button type=\"button\" class=\"btn btn-dark\" (click)=\"setFilter('hot')\"\n                    [ngClass]=\"{'btn-dark': selectedFilter !== 'hot', 'btn-light': selectedFilter === 'hot'}\" >Hot</button>\n            <button type=\"button\" class=\"btn btn-dark\" (click)=\"setFilter('fav')\"\n                    [ngClass]=\"{'btn-dark': selectedFilter !== 'fav', 'btn-light': selectedFilter === 'fav'}\" >Fav</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\"></div>\n    </div>\n  </div>\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"panel\">\n          <div class=\"panel-body\">\n\n            <div class=\"marketing\">\n              <div class=\"row\"  style=\"text-align: center; align-content: center\" >\n                <div *ngFor=\"let recipe of selectedRecipeList\" class=\"col-lg-4\" style=\"padding-top: 20px\">\n                  <app-recipe (favoriteEvent)=\"favEvent()\" [userId]=\"userId\" [recipe]=\"recipe\"></app-recipe>\n                </div>\n                </div><!-- /.row -->\n            <!-- </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>  -->\n\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/home/user-home.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/home/user-home.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main role=\"main\">\n\n    <div class=\"text-center\">\n      <h2>Welcome to my Recipe Repository Application!</h2>\n    </div>\n    <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n        <ol class=\"carousel-indicators\">\n          <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n          <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n          <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n        </ol>\n        <div class=\"carousel-inner\">\n          <div class=\"carousel-item active\">\n            <svg class=\"bd-placeholder-img\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\" role=\"img\"><rect width=\"100%\" height=\"100%\" fill=\"#343a40\"/></svg>\n            <div class=\"container\">\n              <div class=\"carousel-caption\">\n                <h1>Tons O' Recipes.</h1>\n                <p>This is filler text for now. I still need to find a good use for this page for a logged in user.</p>\n                <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Filler Button</a></p>\n              </div>\n            </div>\n          </div>\n          <div class=\"carousel-item\">\n            <svg class=\"bd-placeholder-img\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\" role=\"img\"><rect width=\"100%\" height=\"100%\" fill=\"#343a40\"/></svg>\n            <div class=\"container\">\n              <div class=\"carousel-caption\">\n                <h1>Have a few recipes that you especially like?</h1>\n                <p>Click the heart button next to a recipe to favorite it and add it to your personalized favorited list!</p>\n                <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Learn more</a></p>\n              </div>\n            </div>\n          </div>\n          <div class=\"carousel-item\">\n            <svg class=\"bd-placeholder-img\" width=\"100%\" height=\"100%\" xmlns=\"http://www.w3.org/2000/svg\" preserveAspectRatio=\"xMidYMid slice\" focusable=\"false\" role=\"img\"><rect width=\"100%\" height=\"100%\" fill=\"#343a40\"/></svg>\n            <div class=\"container\">\n              <div class=\"carousel-caption\">\n                <h1>Want to let others know about your favorite recipes?</h1>\n                <p>Click on one of the 5 stars next to a recipe to rate it accordingly. Then all users can sort recipes based upon the highest rated!</p>\n                <p><a class=\"btn btn-lg btn-primary\" href=\"#\" role=\"button\">Browse gallery</a></p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <a class=\"carousel-control-prev\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n          <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"carousel-control-next\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n          <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n      </div>\n\n  <!-- <div class=\"container\" style=\"padding-bottom: 30px\">\n    <div class=\"row\">\n\n      <div class=\"col-md-12\">\n        <div class=\"well well-lg\">\n          <div class=\"row\">\n            <div class=\"col-sm-12 text-center\">\n             <h1>{{pageTitle}}</h1>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n    <hr>\n    <div class=\"row\">\n      <div class=\"col-md-4\"></div>\n      <div class=\"col-md-4\">\n        <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"btn toolbar\">\n          <div class=\"btn-group btn-group-lg\" role=\"group\" aria-label=\"First group\">\n            <button type=\"button\" class=\"btn\" (click)=\"setFilter('new')\"\n                    [ngClass]=\"{'btn-dark': selectedFilter !== 'new', 'btn-light': selectedFilter === 'new'}\" >New</button>\n            <button type=\"button\" class=\"btn btn-dark\" (click)=\"setFilter('hot')\"\n                    [ngClass]=\"{'btn-dark': selectedFilter !== 'hot', 'btn-light': selectedFilter === 'hot'}\" >Hot</button>\n            <button type=\"button\" class=\"btn btn-dark\" (click)=\"setFilter('fav')\"\n                    [ngClass]=\"{'btn-dark': selectedFilter !== 'fav', 'btn-light': selectedFilter === 'fav'}\" >Fav</button>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\"></div>\n    </div>\n  </div>\n\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"panel\">\n          <div class=\"panel-body\">\n\n            <div class=\"marketing\">\n              <div class=\"row\"  style=\"text-align: center; align-content: center\" >\n                <div *ngFor=\"let recipe of selectedRecipeList\" class=\"col-lg-4\" style=\"padding-top: 20px\">\n                  <app-recipe (favoriteEvent)=\"favEvent()\" [userId]=\"userId\" [recipe]=\"recipe\"></app-recipe>\n                </div>\n                </div><!-- /.row -->\n            <!-- </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>  -->\n\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/login/login.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/login/login.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main role=\"main\">\n\n  <div class=\"container\" style=\"padding-bottom: 30px\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"well well-lg\">\n            <div class=\"row\">\n              <div class=\"col-sm-12 text-center\">\n               <h1>Sign In</h1>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <hr>\n    <div class=\"row\">\n<div class=\"col-md-4\"></div>\n<div class=\"col-md-4\">\n  <form #signInForm=\"ngForm\">\n    <div class=\"form-group\">\n      <!-- <div *ngIf=\"message\" class=\"alert alert-danger\"> -->\n        <div *ngIf=\"message\" class=\"alert alert-danger alert-dismissible fade show\">\n            <span style=\"padding-left: 45px\">{{message}}</span>\n            <button type=\"button\" class=\"close\" (click)=\"clearMessage()\" data-dismiss=\"alert\">&times;</button>\n        </div>\n        <!-- <em>{{message}}</em> -->\n      <!-- </div> -->\n      <label for=\"username\">Username</label>\n      <input style=\"width: 100%\" class=\"form-control\" [(ngModel)]=\"userInfo.username\"\n             type=\"text\" name=\"username\" id=\"username\" #usernameField=\"ngModel\">\n      <br>\n      <label for=\"password\">Password</label>\n      <input style=\"width: 100%\" class=\"form-control\" [(ngModel)]=\"userInfo.password\"\n             type=\"password\" name=\"password\" id=\"password\" #passwordField=\"ngModel\">\n      <br>\n      <p class=\"register-text\">Don't have an account?\n        <a routerLink=\"/register\">Register Here</a>\n      </p>\n      <button [disabled]=\"!(passwordField.value && usernameField.value)\" class=\"btn btn-outline-primary\" (click)=\"login()\">Login</button>\n    </div>\n  </form>\n</div>\n<div class=\"col-md-4\"></div>\n</div>\n</div>\n\n\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/login/register.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/login/register.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main role=\"main\">\n\n<div class=\"container\" style=\"padding-bottom: 30px\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"well well-lg\">\n        <div class=\"row\">\n          <div class=\"col-sm-12 text-center\">\n           <h1>Create an Account</h1>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <hr>\n\n  <div class=\"row\">\n    <div class=\"col-md-4\"></div>\n    <div class=\"col-md-4\">\n      <form #signUpForm=\"ngForm\">\n        <div class=\"form-group\">\n          <div *ngIf=\"message\" class=\"alert alert-danger alert-dismissible fade show\">\n              <span style=\"padding-left: 45px\">{{message}}</span>\n              <button type=\"button\" class=\"close\" (click)=\"clearMessage()\" data-dismiss=\"alert\">&times;</button>\n          </div>\n          <div *ngIf=\"passwordMessage\" class=\"alert alert-danger alert-dismissible fade show\">\n              <span style=\"padding-left: 45px\">{{passwordMessage}}</span>\n              <button type=\"button\" class=\"close\" (click)=\"clearMessage()\" data-dismiss=\"alert\">&times;</button>\n          </div>\n\n          <label for=\"username\">Username</label>\n          <input style=\"width: 100%\" class=\"form-control\" [(ngModel)]=\"userInfo.username\"\n                type=\"text\" name=\"username\" id=\"username\" #usernameField=\"ngModel\">\n          <br>\n          <label for=\"password\">Password</label>\n          <input style=\"width: 100%\" class=\"form-control\" [(ngModel)]=\"userInfo.password\"\n                type=\"password\" name=\"password\" id=\"password\" #passwordField=\"ngModel\">\n          <br>\n\n          <label for=\"confirmPassword\">Confirm Password</label>\n          <input style=\"width: 100%\" class=\"form-control\" [(ngModel)]=\"confirmPassword\"\n                type=\"password\" name=\"confirmPassword\" id=\"confirmPassword\" #confirmPasswordField=\"ngModel\">\n          <br>\n\n          <button [disabled]=\"!(passwordField.value && usernameField.value)\" class=\"btn btn-outline-primary\" (click)=\"register()\">Sign Up</button>\n          <!-- <button (click)=\"register()\">Sign up</button> -->\n        </div>\n      </form>\n    </div>\n    <div class=\"col-md-4\"></div>\n  </div>\n</div>\n\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/navbar/navbar.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\n    <nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-dark\">\n      <div class=\"navbar-brand\"><a class=\"homeLink pointable\" (click)=\"navigateHome()\">Recipe App</a></div>\n      <!-- <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button> -->\n      <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li *ngIf=\"session.isAuthenticated\" class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\" (click)=\"clearSearch()\">Home<span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li *ngIf=\"session.isAuthenticated\" class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/recipe/list\" (click)=\"clearSearch()\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact : true}\">Recipes</a>\n          </li>\n          <li *ngIf=\"session.isAuthenticated\" class=\"nav-item dropdown\">\n              <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Services</a>\n              <div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\n                <a class=\"dropdown-item\" [routerLink]=\"['/recipe', 0, 'edit']\" (click)=\"clearSearch()\">Add Recipe</a>\n                <a class=\"dropdown-item\" href=\"#\">Edit Profile</a>\n                <a *ngIf=\"session.isAdmin\" class=\"dropdown-item\" (click)=\"clearSearch()\" [routerLink]=\"['/admin/editUserList']\">Edit Users</a>\n                <a *ngIf=\"session.isAdmin\" class=\"dropdown-item\" (click)=\"clearSearch()\" [routerLink]=\"['/admin/editRecipeList']\">Edit Recipes</a>\n                <a *ngIf=\"session.isAdmin\" class=\"dropdown-item\" (click)=\"clearSearch()\" [routerLink]=\"['/admin/approve']\">Approve Recipes</a>\n              </div>\n          </li>\n        </ul>\n        <ul *ngIf=\"session.isAuthenticated\" style=\"padding-right: 15em\" class=\"navbar-nav\">\n          <li>\n              <input [(ngModel)]=\"searchString\" class=\"mr-sm-2\" type=\"text\" placeholder=\"Search Recipes\" aria-label=\"Search\">\n              <button class=\"btn btn-outline-success my-2 my-sm-0\" (click)=\"search()\">Search</button>\n          </li>\n        </ul>\n        <ul class=\"navbar-nav ml-auto\">\n          <li class=\"nav-item\">\n            <a (click)=\"clearSearch()\" class=\"nav-link\" *ngIf=\"!session.isAuthenticated\" routerLink=\"/login\" routerLinkActive=\"active\">\n              <i class=\"fa fa-lock\" aria-hidden=\"true\"></i> Login\n            </a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" *ngIf=\"session.isAuthenticated\" (click)=\"logout()\"\n              style=\"cursor: pointer\" >\n              <i class=\"fa fa-unlock\" aria-hidden=\"true\"></i> Logout\n            </a>\n          </li>\n        </ul>\n        <!-- <form class=\"form-inline mt-2 mt-md-0\">\n          <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\n          <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n        </form> -->\n      </div>\n    </nav>\n  </header>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/page-not-found/page-not-found.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/public/page-not-found/page-not-found.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  We're sorry we couldn't find the page you're looking for!\n</p>\n<button class=\"btn btn-outline-primary\" [routerLink]=\"['/home']\" >Take Me Home</button>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/collapsible-well/collapsible-well.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/collapsible-well/collapsible-well.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"well card\">\n  <div class=\"card-header text-center\">\n      <span (click)=\"toggleContent()\" class=\"pointable pull-left fa fa-xs\"\n      [ngClass]=\"{'fa-minus': visible, 'fa-plus': !visible}\" aria-hidden=\"true\"></span>\n    <h4>\n      <ng-content select=\"[well-title]\"></ng-content>\n    </h4>\n  </div>\n  <div *ngIf=\"visible\" class=\"card-body\">\n    <ng-content select=\"[well-body]\"></ng-content>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/star/star.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/star/star.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"crop\"\n     [style.width.px]=\"starWidth\"\n     [title]=\"'Average User Rating: ' + rating.toFixed(2)\">\n  <div style=\"width: 75px\">\n    <span class=\"fa fa-star\"></span>\n    <span class=\"fa fa-star\"></span>\n    <span class=\"fa fa-star\"></span>\n    <span class=\"fa fa-star\"></span>\n    <span class=\"fa fa-star\"></span>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"src/app/admin/admin.module": [
		"./src/app/admin/admin.module.ts",
		"src-app-admin-admin-module"
	],
	"src/app/recipes/recipe.module": [
		"./src/app/recipes/recipe.module.ts",
		"src-app-recipes-recipe-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_guards_admin_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/guards/admin.guard */ "./src/app/core/guards/admin.guard.ts");
/* harmony import */ var _core_guards_route_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/guards/route.guard */ "./src/app/core/guards/route.guard.ts");
/* harmony import */ var _core_guards_index_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/guards/index.guard */ "./src/app/core/guards/index.guard.ts");
/* harmony import */ var _core_strategies_selective_strategy_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/strategies/selective-strategy.service */ "./src/app/core/strategies/selective-strategy.service.ts");
/* harmony import */ var _public_home_user_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./public/home/user-home.component */ "./src/app/public/home/user-home.component.ts");
/* harmony import */ var _public_login_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./public/login/register.component */ "./src/app/public/login/register.component.ts");
/* harmony import */ var _public_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./public/login/login.component */ "./src/app/public/login/login.component.ts");
/* harmony import */ var _public_login_logout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./public/login/logout.component */ "./src/app/public/login/logout.component.ts");
/* harmony import */ var _public_home_splash_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./public/home/splash-page.component */ "./src/app/public/home/splash-page.component.ts");
/* harmony import */ var _public_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./public/page-not-found/page-not-found.component */ "./src/app/public/page-not-found/page-not-found.component.ts");
/* harmony import */ var _public_error_error_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./public/error/error.component */ "./src/app/public/error/error.component.ts");














var routes = [
    { path: 'index', component: _public_home_splash_page_component__WEBPACK_IMPORTED_MODULE_11__["SplashPageComponent"], canActivate: [_core_guards_index_guard__WEBPACK_IMPORTED_MODULE_5__["IndexGuard"]] },
    { path: 'home', component: _public_home_user_home_component__WEBPACK_IMPORTED_MODULE_7__["UserHomeComponent"], canActivate: [_core_guards_route_guard__WEBPACK_IMPORTED_MODULE_4__["RouteGuard"]] },
    {
        path: 'recipe',
        loadChildren: 'src/app/recipes/recipe.module#RecipeModule',
        canActivate: [_core_guards_route_guard__WEBPACK_IMPORTED_MODULE_4__["RouteGuard"]],
        data: { preload: true }
    },
    {
        path: 'admin',
        loadChildren: 'src/app/admin/admin.module#AdminModule',
        canLoad: [_core_guards_admin_guard__WEBPACK_IMPORTED_MODULE_3__["AdminGuard"]],
        canActivate: [_core_guards_admin_guard__WEBPACK_IMPORTED_MODULE_3__["AdminGuard"]],
        data: { preload: false }
    },
    { path: 'register',
        component: _public_login_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
        canActivate: [_core_guards_route_guard__WEBPACK_IMPORTED_MODULE_4__["RouteGuard"]], canDeactivate: [_core_guards_route_guard__WEBPACK_IMPORTED_MODULE_4__["RouteGuard"]],
        data: { context: 'register' }
    },
    { path: 'login', component: _public_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], canActivate: [_core_guards_index_guard__WEBPACK_IMPORTED_MODULE_5__["IndexGuard"]] },
    { path: 'logout', component: _public_login_logout_component__WEBPACK_IMPORTED_MODULE_10__["LogoutComponent"] },
    { path: '', pathMatch: 'full', redirectTo: 'index' },
    { path: 'error', component: _public_error_error_component__WEBPACK_IMPORTED_MODULE_13__["ErrorComponent"] },
    { path: '**', component: _public_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { preloadingStrategy: _core_strategies_selective_strategy_service__WEBPACK_IMPORTED_MODULE_6__["SelectiveStrategy"] })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".spinner {\n  font-size: 300%;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  z-index: 10;\n  color: green; }\n\n.fa-spinner {\n  -webkit-animation: spin 1000ms infinite linear;\n  animation: spin 1000ms infinite linear; }\n\n@-webkit-keyframes spin {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(359deg); } }\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(359deg); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9oZGQvUHJvZ3JhbW1pbmcvUHJvamVjdHMvcmVjaXBlLWFwcC1uZy9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRQTtFQUNFLGVBQWM7RUFDZCxlQUFjO0VBQ2QsUUFBUTtFQUNSLFNBQVM7RUFDVCxXQUFVO0VBQ1YsWUFBWSxFQUFBOztBQUdkO0VBQ0ksOENBQThDO0VBQzlDLHNDQUFzQyxFQUFBOztBQUUxQztFQUNJO0lBRUksdUJBQXVCLEVBQUE7RUFFM0I7SUFFSSx5QkFBeUIsRUFBQSxFQUFBOztBQUdqQztFQUNJO0lBRUksdUJBQXVCLEVBQUE7RUFFM0I7SUFFSSx5QkFBeUIsRUFBQSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaHRtbCB7XG4vLyAgIGJhY2tncm91bmQ6IHVybChodHRwczovL3VzLjEyM3JmLmNvbS80NTB3bS9rYXJhbmRhZXYva2FyYW5kYWV2MTcwMS9rYXJhbmRhZXYxNzAxMDAyNjAvNjk1OTg2NTgtY29va2luZy10YWJsZS13aXRoLWhlcmJzLXNwaWNlcy1hbmQtdXRlbnNpbHMtdG9wLXZpZXctd2l0aC1jb3B5LXNwYWNlLmpwZz92ZXI9Nikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XG4vLyAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbi8vICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuLy8gICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuLy8gICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuLy8gfVxuXG4uc3Bpbm5lciB7XG4gIGZvbnQtc2l6ZTozMDAlO1xuICBwb3NpdGlvbjpmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgei1pbmRleDoxMDtcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uZmEtc3Bpbm5lciB7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMTAwMG1zIGluZmluaXRlIGxpbmVhcjtcbiAgICBhbmltYXRpb246IHNwaW4gMTAwMG1zIGluZmluaXRlIGxpbmVhcjtcbn1cbkAtd2Via2l0LWtleWZyYW1lcyBzcGluIHtcbiAgICAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNTlkZWcpO1xuICAgIH1cbn1cbkBrZXlmcmFtZXMgc3BpbiB7XG4gICAgMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzU5ZGVnKTtcbiAgICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/services/session.service */ "./src/app/core/services/session.service.ts");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/services/auth.service */ "./src/app/core/services/auth.service.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(sessionService, authService, router) {
        this.sessionService = sessionService;
        this.authService = authService;
        this.router = router;
        this.title = 'Recipe Application';
        this.loading = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (routerEvent) {
            _this.checkRouterEvent(routerEvent);
        });
        // application reloaded or user refreshed before logging out, persist user data to new instance of application
        if (!this.sessionService.getUser && this.sessionService.isAuthenticated) {
            this.authService.getUserData().subscribe(function (res) {
                _this.sessionService.setUser(res.user);
            }, function (err) {
                console.error("ERR GETTING USER FROM APP COMPONENT ONINIT METHOD: " + JSON.stringify(err));
                _this.sessionService.logout();
            });
        }
    };
    AppComponent.prototype.checkRouterEvent = function (routerEvent) {
        if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
            this.loading = true;
        }
        if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] ||
            routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"] ||
            routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
            this.loading = false;
        }
    };
    AppComponent.ctorParameters = function () { return [
        { type: _core_services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"] },
        { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"],
            _core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _public_public_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./public/public.module */ "./src/app/public/public.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _public_public_module__WEBPACK_IMPORTED_MODULE_6__["PublicModule"]
            ],
            providers: [],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_api_recipe_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/api/recipe-api.service */ "./src/app/core/services/api/recipe-api.service.ts");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/session.service */ "./src/app/core/services/session.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _interceptors_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./interceptors/auth-interceptor.service */ "./src/app/core/interceptors/auth-interceptor.service.ts");
/* harmony import */ var _services_logger_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/logger.service */ "./src/app/core/services/logger.service.ts");
/* harmony import */ var _module_import_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./module-import-guard */ "./src/app/core/module-import-guard.ts");
/* harmony import */ var _services_toastr_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/toastr.service */ "./src/app/core/services/toastr.service.ts");
/* harmony import */ var _services_jQuery_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/jQuery.service */ "./src/app/core/services/jQuery.service.ts");
/* harmony import */ var _resolvers_recipe_resolver_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./resolvers/recipe-resolver.service */ "./src/app/core/resolvers/recipe-resolver.service.ts");
/* harmony import */ var _services_api_graphql_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/api/graphql.service */ "./src/app/core/services/api/graphql.service.ts");
/* harmony import */ var _guards_index_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./guards/index.guard */ "./src/app/core/guards/index.guard.ts");
/* harmony import */ var _guards_route_guard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./guards/route.guard */ "./src/app/core/guards/route.guard.ts");
/* harmony import */ var _strategies_selective_strategy_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./strategies/selective-strategy.service */ "./src/app/core/strategies/selective-strategy.service.ts");

















var toastr = window['toastr'];
var jQuery = window['$'];
var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        Object(_module_import_guard__WEBPACK_IMPORTED_MODULE_9__["throwIfAlreadyLoaded"])(parentModule, 'CoreModule');
    }
    CoreModule.ctorParameters = function () { return [
        { type: CoreModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] }
    ]; };
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [
                _services_api_recipe_api_service__WEBPACK_IMPORTED_MODULE_4__["RecipeApiService"],
                _services_api_graphql_service__WEBPACK_IMPORTED_MODULE_13__["GraphqlService"],
                _resolvers_recipe_resolver_service__WEBPACK_IMPORTED_MODULE_12__["RecipeResolverService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
                _services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"],
                _services_logger_service__WEBPACK_IMPORTED_MODULE_8__["LoggerService"],
                _strategies_selective_strategy_service__WEBPACK_IMPORTED_MODULE_16__["SelectiveStrategy"],
                _guards_index_guard__WEBPACK_IMPORTED_MODULE_14__["IndexGuard"],
                _guards_route_guard__WEBPACK_IMPORTED_MODULE_15__["RouteGuard"],
                {
                    provide: _services_toastr_service__WEBPACK_IMPORTED_MODULE_10__["TOASTR_TOKEN"],
                    useValue: toastr
                },
                {
                    provide: _services_jQuery_service__WEBPACK_IMPORTED_MODULE_11__["JQ_TOKEN"],
                    useValue: jQuery
                },
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"],
                    useClass: _interceptors_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_7__["AuthInterceptorService"],
                    multi: true
                }
            ],
            declarations: [],
            exports: []
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/guards/admin.guard.ts":
/*!********************************************!*\
  !*** ./src/app/core/guards/admin.guard.ts ***!
  \********************************************/
/*! exports provided: AdminGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminGuard", function() { return AdminGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/session.service */ "./src/app/core/services/session.service.ts");




var AdminGuard = /** @class */ (function () {
    function AdminGuard(sessionService, router) {
        this.sessionService = sessionService;
        this.router = router;
    }
    AdminGuard.prototype.canLoad = function (route, segments) {
        var _this = this;
        // user is authenticated but no user data in session, generated new instance of app by either
        // entering direct URL or refreshing the app. Wait a bit for session service to retrieve userdata
        if (this.sessionService.isAuthenticated && !this.sessionService.getUser) {
            setTimeout(function () {
                if (_this.sessionService.getUser && _this.sessionService.getUser.isAdmin) {
                    var redirectUrl = 'admin';
                    if (segments.length > 2) {
                        redirectUrl += ('/' + segments[1]);
                        redirectUrl += ('/' + segments[2]);
                    }
                    else {
                        redirectUrl += ('/' + segments[1]);
                    }
                    console.log('returning true in timeout');
                    console.log("RedirectUrl: " + redirectUrl);
                    _this.router.navigate([redirectUrl]);
                    return true;
                }
                else {
                    console.log('returning false');
                    _this.router.navigate(['home']);
                    return false;
                }
            }, 400);
        }
        else {
            if (this.sessionService.isAdmin) {
                return true;
            }
            else {
                this.router.navigate(['/index']);
                return false;
            }
        }
    };
    AdminGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        console.log('in admin guard');
        // user is authenticated but no user data in session, generated new instance of app by either
        // entering direct URL or refreshing the app. Wait a bit for session service to retrieve userdata
        if (this.sessionService.isAuthenticated && !this.sessionService.getUser) {
            setTimeout(function () {
                if (_this.sessionService.getUser && _this.sessionService.getUser.isAdmin) {
                    // console.log('returning true');
                    // console.log('state url: ' + state.url);
                    _this.router.navigate([state.url]);
                    return true;
                }
                else {
                    // console.log('returning false');
                    _this.router.navigate(['home']);
                    return false;
                }
            }, 400);
        }
        else {
            if (this.sessionService.isAdmin) {
                return true;
            }
            else {
                this.router.navigate(['home']);
                return false;
            }
        }
    };
    AdminGuard.ctorParameters = function () { return [
        { type: _services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AdminGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminGuard);
    return AdminGuard;
}());



/***/ }),

/***/ "./src/app/core/guards/index.guard.ts":
/*!********************************************!*\
  !*** ./src/app/core/guards/index.guard.ts ***!
  \********************************************/
/*! exports provided: IndexGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexGuard", function() { return IndexGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/session.service */ "./src/app/core/services/session.service.ts");




var IndexGuard = /** @class */ (function () {
    function IndexGuard(sessionService, router) {
        this.sessionService = sessionService;
        this.router = router;
    }
    IndexGuard.prototype.canActivate = function (route, state) {
        if (this.sessionService.isAuthenticated) {
            this.router.navigate(['home']);
            return false;
        }
        else {
            return true;
        }
    };
    IndexGuard.ctorParameters = function () { return [
        { type: _services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    IndexGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(
        // { providedIn: 'root' }
        ),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], IndexGuard);
    return IndexGuard;
}());



/***/ }),

/***/ "./src/app/core/guards/route.guard.ts":
/*!********************************************!*\
  !*** ./src/app/core/guards/route.guard.ts ***!
  \********************************************/
/*! exports provided: RouteGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteGuard", function() { return RouteGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/session.service */ "./src/app/core/services/session.service.ts");
/* harmony import */ var _services_logger_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/logger.service */ "./src/app/core/services/logger.service.ts");





var RouteGuard = /** @class */ (function () {
    function RouteGuard(router, loggerService, sessionService) {
        this.router = router;
        this.loggerService = loggerService;
        this.sessionService = sessionService;
    }
    RouteGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        var slices = state.url.split('/');
        // console.log(slices);
        if (slices[slices.length - 1] === 'edit') {
            var recipeId = route.params.id;
            // editing existing recipe
            if (recipeId !== '0') {
                // handling routing on refresh/directly entered URL
                if (this.sessionService.token && !this.sessionService.getUser) {
                    setTimeout(function () {
                        if (_this.sessionService.isAdmin) {
                            _this.router.navigate(['/recipe', slices[2], 'edit']);
                            return true;
                        }
                        else {
                            _this.router.navigate(['home']);
                            return false;
                        }
                    }, 400);
                }
                else {
                    if (this.sessionService.isAdmin) {
                        return true;
                    }
                    else {
                        this.router.navigate(['home']);
                        return false;
                    }
                }
            }
            else { // adding new recipe
                return true;
            }
        }
        // console.log(state.url);
        // if (state.url === '/register') {
        if (slices[1] && slices[1] === 'register') {
            if (this.sessionService.isAuthenticated) {
                console.log('user is logged in an attempting to access register page');
                this.router.navigate(['home']);
                return false;
            }
            else {
                return true;
            }
        }
        // return true;
        // handle all other routes besides edit recipe and register
        if (slices[slices.length - 1] !== 'edit') {
            if (this.sessionService.isAuthenticated) {
                console.log('in route guard, and user is auth');
                return true;
            }
            else {
                this.loggerService.consoleLog('user is not auth, forwarding to login page and saving url');
                this.loggerService.consoleLog("Route Path: " + state.url);
                this.sessionService.setRedirectUrl = state.url;
                // console.log('in route guard and user is not auth');
                this.router.navigate(['login']);
                return false;
            }
        }
    };
    RouteGuard.prototype.canDeactivate = function (component, route) {
        var context = route.data.context;
        var tempComponent;
        if (context === 'editRecipe') {
            tempComponent = component;
            if (tempComponent.recipeForm.dirty && !tempComponent.submitted) {
                var recipeName = tempComponent.recipeForm.get('title').value || 'New Recipe';
                return confirm("Navigate away and lose all changes to " + recipeName + "?");
            }
            return true;
        }
        else if (context === 'register') {
            tempComponent = component;
            if (tempComponent.submitted === false && (tempComponent.userInfo.username !== ''
                || tempComponent.userInfo.password !== '' || tempComponent.confirmPassword)) {
                console.log('username or password(s) fields have been touched');
                return confirm('Navigate away and lose all changes to new profile?');
            }
            else {
                return true;
            }
        }
    };
    RouteGuard.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"] },
        { type: _services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"] }
    ]; };
    RouteGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(
        // { providedIn: 'root' }
        ),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_logger_service__WEBPACK_IMPORTED_MODULE_4__["LoggerService"],
            _services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]])
    ], RouteGuard);
    return RouteGuard;
}());



/***/ }),

/***/ "./src/app/core/interceptors/auth-interceptor.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/interceptors/auth-interceptor.service.ts ***!
  \***************************************************************/
/*! exports provided: AuthInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptorService", function() { return AuthInterceptorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/logger.service */ "./src/app/core/services/logger.service.ts");
/* harmony import */ var _services_session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/session.service */ "./src/app/core/services/session.service.ts");




var AuthInterceptorService = /** @class */ (function () {
    function AuthInterceptorService(injector, loggerService) {
        this.injector = injector;
        this.loggerService = loggerService;
    }
    AuthInterceptorService.prototype.intercept = function (req, next) {
        var session = this.injector.get(_services_session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]);
        var authRequest = req.clone({
            headers: req.headers.set('Authorization', 'token ' + session.token),
            withCredentials: true
        });
        return next.handle(authRequest);
    };
    AuthInterceptorService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _services_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"] }
    ]; };
    AuthInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _services_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"]])
    ], AuthInterceptorService);
    return AuthInterceptorService;
}());



/***/ }),

/***/ "./src/app/core/module-import-guard.ts":
/*!*********************************************!*\
  !*** ./src/app/core/module-import-guard.ts ***!
  \*********************************************/
/*! exports provided: throwIfAlreadyLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "throwIfAlreadyLoaded", function() { return throwIfAlreadyLoaded; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function throwIfAlreadyLoaded(parentModule, moduleName) {
    if (parentModule) {
        throw new Error(moduleName + " has already been loaded. Import Core module in the AppModule only. ");
    }
}


/***/ }),

/***/ "./src/app/core/resolvers/recipe-resolver.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/resolvers/recipe-resolver.service.ts ***!
  \***********************************************************/
/*! exports provided: RecipeResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeResolverService", function() { return RecipeResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_api_recipe_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api/recipe-api.service */ "./src/app/core/services/api/recipe-api.service.ts");





var RecipeResolverService = /** @class */ (function () {
    function RecipeResolverService(recipeApiService) {
        this.recipeApiService = recipeApiService;
    }
    RecipeResolverService.prototype.resolve = function (route, state) {
        var _a = route.data, context = _a.context, multipleRecipes = _a.multipleRecipes;
        if (multipleRecipes) {
            if (context === 'list') {
                return this.recipeApiService.getRecipeList()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (graphQLRes) { return ({ recipes: graphQLRes.data.recipes }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
                    console.error(error);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ recipes: null, error: error });
                }));
            }
            else if (context === 'edit') {
                return this.recipeApiService.getRecipeEditList()
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (graphQLRes) { return ({ recipes: graphQLRes.data.recipes }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
                    console.error(error);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ recipes: null, error: error });
                }));
            }
            // return this.recipeApiService.getRecipeList()
            //   .pipe(map(recipes => ({recipes})),
            //   catchError(error => {
            //     console.error(error);
            //     return of ({recipes: null, error});
            //   })
            // );
        }
        else {
            var id = route.params.id;
            // user is adding new recipe
            if (id === '0') {
                return { recipe: null, error: null };
            }
            return this.recipeApiService.getRecipe(id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (recipe) { return ({ recipe: recipe }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
                // console.error(error);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ recipe: null, error: error });
            }));
        }
    };
    RecipeResolverService.ctorParameters = function () { return [
        { type: _services_api_recipe_api_service__WEBPACK_IMPORTED_MODULE_4__["RecipeApiService"] }
    ]; };
    RecipeResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(
        // { providedIn: 'root' }
        ),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_api_recipe_api_service__WEBPACK_IMPORTED_MODULE_4__["RecipeApiService"]])
    ], RecipeResolverService);
    return RecipeResolverService;
}());



/***/ }),

/***/ "./src/app/core/services/api/graphql.service.ts":
/*!******************************************************!*\
  !*** ./src/app/core/services/api/graphql.service.ts ***!
  \******************************************************/
/*! exports provided: GraphqlService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphqlService", function() { return GraphqlService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




var GraphqlService = /** @class */ (function () {
    function GraphqlService(httpClient) {
        this.httpClient = httpClient;
        this.uri = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].path;
    }
    GraphqlService.prototype.getRecipeList = function () {
        var query = '{recipes{_id,title,producer,favoriters,imgDir,nutritionValues{calories},raters{keys,values}}}';
        return this.httpClient.get(this.uri + "recipes?query=" + query, { responseType: 'json' });
    };
    GraphqlService.prototype.getRecipeEditList = function () {
        var query = '{recipes{_id,title}}';
        return this.httpClient.get(this.uri + "recipes?query=" + query, { responseType: 'json' });
    };
    GraphqlService.prototype.getApprovalList = function () {
        var query = '{recipes{_id,title}}';
        return this.httpClient.get(this.uri + "admin/approval?query=" + query, { responseType: 'json' });
    };
    GraphqlService.prototype.getUserList = function () {
        var query = '{users{_id,username,isAdmin}}';
        return this.httpClient.get(this.uri + "admin/getUsers?query=" + query, { responseType: 'json' });
    };
    GraphqlService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    GraphqlService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(
        // { providedIn: 'root' }
        ),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GraphqlService);
    return GraphqlService;
}());



/***/ }),

/***/ "./src/app/core/services/api/recipe-api.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/services/api/recipe-api.service.ts ***!
  \*********************************************************/
/*! exports provided: RecipeApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeApiService", function() { return RecipeApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _graphql_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./graphql.service */ "./src/app/core/services/api/graphql.service.ts");






var RecipeApiService = /** @class */ (function () {
    function RecipeApiService(httpClient, graphQLService) {
        this.httpClient = httpClient;
        this.graphQLService = graphQLService;
        this.uri = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].path + 'recipes';
    }
    RecipeApiService.prototype.getRecipeList = function () {
        // return this.httpClient.get<IRecipe[]>(`${this.uri}`, {responseType: 'json'});
        return this.graphQLService.getRecipeList();
        // .pipe(catchError(this.handleError<IRecipe[]>('getRecipeList', [])));
    };
    RecipeApiService.prototype.getRecipeEditList = function () {
        return this.graphQLService.getRecipeEditList();
    };
    RecipeApiService.prototype.getRecipe = function (recipeId) {
        return this.httpClient.get(this.uri + "/" + recipeId, { responseType: 'json' });
        // .pipe(catchError(this.handleError<IRecipe>('getRecipe')));
    };
    RecipeApiService.prototype.submitRecipeForApproval = function (recipe) {
        var data = { recipe: recipe };
        return this.httpClient.post(this.uri + "/submit", data, { responseType: 'text' });
    };
    RecipeApiService.prototype.addRecipe = function (recipe, approvalId) {
        var data = {
            recipe: recipe,
            approvalId: approvalId
        };
        return this.httpClient.post(this.uri + "/add", data, { responseType: 'json' });
    };
    RecipeApiService.prototype.updateRecipe = function (recipe) {
        var data = { recipe: recipe };
        return this.httpClient.patch(this.uri + "/update", data, { responseType: 'text' });
    };
    RecipeApiService.prototype.deleteRecipe = function (recipeId) {
        return this.httpClient.delete(this.uri + "/delete/" + recipeId, { responseType: 'text' });
    };
    RecipeApiService.prototype.rejectRecipe = function (recipeId) {
        return this.httpClient.delete(this.uri + "/reject/" + recipeId, { responseType: 'text' });
    };
    RecipeApiService.prototype.favoriteRecipe = function (recipe) {
        return this.httpClient.post(this.uri + "/favorite", recipe, { responseType: 'text' });
    };
    RecipeApiService.prototype.rateRecipe = function (recipe) {
        return this.httpClient.post(this.uri + "/rate", recipe, { responseType: 'text' });
    };
    RecipeApiService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    RecipeApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _graphql_service__WEBPACK_IMPORTED_MODULE_5__["GraphqlService"] }
    ]; };
    RecipeApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(
        // { providedIn: 'root' }
        ),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _graphql_service__WEBPACK_IMPORTED_MODULE_5__["GraphqlService"]])
    ], RecipeApiService);
    return RecipeApiService;
}());



/***/ }),

/***/ "./src/app/core/services/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





var AuthService = /** @class */ (function () {
    function AuthService(httpClient) {
        this.httpClient = httpClient;
        this.uri = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].path + 'auth';
    }
    AuthService.prototype.signUp = function (newUser) {
        // const options = { headers: new HttpHeaders( { 'Content-Type': '/application/json'} )};
        return this.httpClient.post(this.uri + "/signUp", newUser, { responseType: 'json' });
        // .pipe(catchError(this.handleError('signUp')));
    };
    AuthService.prototype.signIn = function (userInfo) {
        return this.httpClient.post(this.uri + "/signIn", userInfo, { responseType: 'json' });
        // .pipe(catchError(this.handleError('signIn')));
    };
    AuthService.prototype.signOut = function () {
        return this.httpClient.get(this.uri + "/signOut", { responseType: 'text' });
    };
    AuthService.prototype.getUserData = function () {
        return this.httpClient.get(this.uri + "/getUserData", { responseType: 'json' });
    };
    AuthService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(
        // { providedIn: 'root' }
        ),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/services/jQuery.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/jQuery.service.ts ***!
  \*************************************************/
/*! exports provided: JQ_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JQ_TOKEN", function() { return JQ_TOKEN; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JQ_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('jQuery');


/***/ }),

/***/ "./src/app/core/services/logger.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/logger.service.ts ***!
  \*************************************************/
/*! exports provided: LoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return LoggerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoggerService = /** @class */ (function () {
    function LoggerService() {
    }
    LoggerService.prototype.consoleLog = function (message) {
        console.log(message);
    };
    LoggerService.prototype.consoleError = function (message) {
        console.error(message);
    };
    LoggerService.prototype.fileLog = function (message) {
        // implement logging to a file
    };
    LoggerService.prototype.fileError = function (message) {
        // implement logging to an error file
    };
    LoggerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(
        // { providedIn: 'root' }
        ),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoggerService);
    return LoggerService;
}());



/***/ }),

/***/ "./src/app/core/services/session.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/services/session.service.ts ***!
  \**************************************************/
/*! exports provided: SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SessionService = /** @class */ (function () {
    function SessionService() {
        this.admin = false;
    }
    SessionService.prototype.logout = function () {
        if (localStorage.getItem('token')) {
            localStorage.removeItem('token');
            this.userData = null;
            return true;
        }
        else {
            return false;
        }
    };
    Object.defineProperty(SessionService.prototype, "getRedirectUrl", {
        get: function () {
            return this.redirectUrl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionService.prototype, "setRedirectUrl", {
        set: function (url) {
            this.redirectUrl = url;
        },
        enumerable: true,
        configurable: true
    });
    SessionService.prototype.setUser = function (user) {
        this.userData = user;
        this.setAdminStatus(user.isAdmin);
    };
    Object.defineProperty(SessionService.prototype, "getUser", {
        get: function () {
            return this.userData;
        },
        enumerable: true,
        configurable: true
    });
    SessionService.prototype.setAdminStatus = function (isAdmin) {
        this.admin = isAdmin;
    };
    Object.defineProperty(SessionService.prototype, "isAdmin", {
        get: function () {
            if (this.userData) {
                return this.userData.isAdmin;
            }
            else {
                return this.admin;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionService.prototype, "token", {
        get: function () {
            return localStorage.getItem('token');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SessionService.prototype, "isAuthenticated", {
        get: function () {
            return !!localStorage.getItem('token');
        },
        enumerable: true,
        configurable: true
    });
    SessionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(
        // { providedIn: 'root' }
        ),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SessionService);
    return SessionService;
}());



/***/ }),

/***/ "./src/app/core/services/toastr.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/toastr.service.ts ***!
  \*************************************************/
/*! exports provided: TOASTR_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOASTR_TOKEN", function() { return TOASTR_TOKEN; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TOASTR_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('toastr');


/***/ }),

/***/ "./src/app/core/strategies/selective-strategy.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/strategies/selective-strategy.service.ts ***!
  \***************************************************************/
/*! exports provided: SelectiveStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectiveStrategy", function() { return SelectiveStrategy; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var SelectiveStrategy = /** @class */ (function () {
    function SelectiveStrategy() {
    }
    // tslint:disable-next-line:ban-types
    SelectiveStrategy.prototype.preload = function (route, load) {
        if (route.data && route.data.preload) {
            return load();
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
    };
    SelectiveStrategy = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(
        // { providedIn: 'root' }
        )
    ], SelectiveStrategy);
    return SelectiveStrategy;
}());



/***/ }),

/***/ "./src/app/public/error/error.component.scss":
/*!***************************************************!*\
  !*** ./src/app/public/error/error.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9lcnJvci9lcnJvci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/public/error/error.component.ts":
/*!*************************************************!*\
  !*** ./src/app/public/error/error.component.ts ***!
  \*************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/error/error.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./error.component.scss */ "./src/app/public/error/error.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/public/home/splash-page.component.scss":
/*!********************************************************!*\
  !*** ./src/app/public/home/splash-page.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-toolbar {\n  justify-content: center; }\n\n/* GLOBAL STYLES\n-------------------------------------------------- */\n\n/* Padding below the footer and lighter body text */\n\nbody {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n  color: #5a5a5a; }\n\nh2 {\n  color: white; }\n\nmain {\n  background-color: #343a40;\n  height: 100%; }\n\n/* CUSTOMIZE THE CAROUSEL\n-------------------------------------------------- */\n\n/* Carousel base class */\n\n.carousel {\n  margin-bottom: 4rem; }\n\n/* Since positioning the image, we need to help out the caption */\n\n.carousel-caption {\n  bottom: 3rem;\n  z-index: 10; }\n\n/* Declare heights because of positioning of img element */\n\n.carousel-item {\n  height: 32rem; }\n\n.carousel-item > img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  min-width: 100%;\n  height: 32rem; }\n\n/* MARKETING CONTENT\n-------------------------------------------------- */\n\n/* Center align the text within the three columns below the carousel */\n\n.marketing .col-lg-4 {\n  margin-bottom: 1.5rem;\n  text-align: center; }\n\n.marketing h2 {\n  font-weight: 400; }\n\n.marketing .col-lg-4 p {\n  margin-right: .75rem;\n  margin-left: .75rem; }\n\n/* Featurettes\n------------------------- */\n\n.featurette-divider {\n  margin: 5rem 0;\n  /* Space out the Bootstrap <hr> more */ }\n\n/* Thin out the marketing headings */\n\n.featurette-heading {\n  font-weight: 300;\n  line-height: 1;\n  letter-spacing: -.05rem; }\n\n/* RESPONSIVE CSS\n-------------------------------------------------- */\n\n@media (min-width: 40em) {\n  /* Bump up size of carousel content */\n  .carousel-caption p {\n    margin-bottom: 1.25rem;\n    font-size: 1.25rem;\n    line-height: 1.4; }\n  .featurette-heading {\n    font-size: 50px; } }\n\n@media (min-width: 62em) {\n  .featurette-heading {\n    margin-top: 7rem; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9oZGQvUHJvZ3JhbW1pbmcvUHJvamVjdHMvcmVjaXBlLWFwcC1uZy9zcmMvYXBwL3B1YmxpYy9ob21lL3NwbGFzaC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wdWJsaWMvaG9tZS9zcGxhc2gtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUF1QixFQUFBOztBQUd6QjtvRENBb0Q7O0FERXBELG1EQUFBOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVksRUFBQTs7QUFHZDtvRENKb0Q7O0FET3BELHdCQUFBOztBQUNBO0VBQ0UsbUJBQW1CLEVBQUE7O0FBRXJCLGlFQUFBOztBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHYiwwREFBQTs7QUFDQTtFQUNFLGFBQWEsRUFBQTs7QUFFZjtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLGVBQWU7RUFDZixhQUFhLEVBQUE7O0FBSWY7b0RDUm9EOztBRFdwRCxzRUFBQTs7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0IsRUFBQTs7QUFFcEI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CLEVBQUE7O0FBSXJCOzJCQ1gyQjs7QURjM0I7RUFDRSxjQUFjO0VBQUUsc0NBQUEsRUFBdUM7O0FBR3pELG9DQUFBOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCx1QkFBdUIsRUFBQTs7QUFJekI7b0RDZG9EOztBRGlCcEQ7RUFDRSxxQ0FBQTtFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixnQkFBZ0IsRUFBQTtFQUdsQjtJQUNFLGVBQWUsRUFBQSxFQUNoQjs7QUFHSDtFQUNFO0lBQ0UsZ0JBQWdCLEVBQUEsRUFDakIiLCJmaWxlIjoic3JjL2FwcC9wdWJsaWMvaG9tZS9zcGxhc2gtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tdG9vbGJhciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4vKiBHTE9CQUwgU1RZTEVTXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogUGFkZGluZyBiZWxvdyB0aGUgZm9vdGVyIGFuZCBsaWdodGVyIGJvZHkgdGV4dCAqL1xuXG5ib2R5IHtcbiAgcGFkZGluZy10b3A6IDNyZW07XG4gIHBhZGRpbmctYm90dG9tOiAzcmVtO1xuICBjb2xvcjogIzVhNWE1YTtcbn1cblxuaDIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbm1haW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi8qIENVU1RPTUlaRSBUSEUgQ0FST1VTRUxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qIENhcm91c2VsIGJhc2UgY2xhc3MgKi9cbi5jYXJvdXNlbCB7XG4gIG1hcmdpbi1ib3R0b206IDRyZW07XG59XG4vKiBTaW5jZSBwb3NpdGlvbmluZyB0aGUgaW1hZ2UsIHdlIG5lZWQgdG8gaGVscCBvdXQgdGhlIGNhcHRpb24gKi9cbi5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgYm90dG9tOiAzcmVtO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLyogRGVjbGFyZSBoZWlnaHRzIGJlY2F1c2Ugb2YgcG9zaXRpb25pbmcgb2YgaW1nIGVsZW1lbnQgKi9cbi5jYXJvdXNlbC1pdGVtIHtcbiAgaGVpZ2h0OiAzMnJlbTtcbn1cbi5jYXJvdXNlbC1pdGVtID4gaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMnJlbTtcbn1cblxuXG4vKiBNQVJLRVRJTkcgQ09OVEVOVFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyogQ2VudGVyIGFsaWduIHRoZSB0ZXh0IHdpdGhpbiB0aGUgdGhyZWUgY29sdW1ucyBiZWxvdyB0aGUgY2Fyb3VzZWwgKi9cbi5tYXJrZXRpbmcgLmNvbC1sZy00IHtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWFya2V0aW5nIGgyIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5tYXJrZXRpbmcgLmNvbC1sZy00IHAge1xuICBtYXJnaW4tcmlnaHQ6IC43NXJlbTtcbiAgbWFyZ2luLWxlZnQ6IC43NXJlbTtcbn1cblxuXG4vKiBGZWF0dXJldHRlc1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4uZmVhdHVyZXR0ZS1kaXZpZGVyIHtcbiAgbWFyZ2luOiA1cmVtIDA7IC8qIFNwYWNlIG91dCB0aGUgQm9vdHN0cmFwIDxocj4gbW9yZSAqL1xufVxuXG4vKiBUaGluIG91dCB0aGUgbWFya2V0aW5nIGhlYWRpbmdzICovXG4uZmVhdHVyZXR0ZS1oZWFkaW5nIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGxldHRlci1zcGFjaW5nOiAtLjA1cmVtO1xufVxuXG5cbi8qIFJFU1BPTlNJVkUgQ1NTXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5AbWVkaWEgKG1pbi13aWR0aDogNDBlbSkge1xuICAvKiBCdW1wIHVwIHNpemUgb2YgY2Fyb3VzZWwgY29udGVudCAqL1xuICAuY2Fyb3VzZWwtY2FwdGlvbiBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS40O1xuICB9XG5cbiAgLmZlYXR1cmV0dGUtaGVhZGluZyB7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA2MmVtKSB7XG4gIC5mZWF0dXJldHRlLWhlYWRpbmcge1xuICAgIG1hcmdpbi10b3A6IDdyZW07XG4gIH1cbn1cbiIsIi5idG4tdG9vbGJhciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG5cbi8qIEdMT0JBTCBTVFlMRVNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiBQYWRkaW5nIGJlbG93IHRoZSBmb290ZXIgYW5kIGxpZ2h0ZXIgYm9keSB0ZXh0ICovXG5ib2R5IHtcbiAgcGFkZGluZy10b3A6IDNyZW07XG4gIHBhZGRpbmctYm90dG9tOiAzcmVtO1xuICBjb2xvcjogIzVhNWE1YTsgfVxuXG5oMiB7XG4gIGNvbG9yOiB3aGl0ZTsgfVxuXG5tYWluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcbiAgaGVpZ2h0OiAxMDAlOyB9XG5cbi8qIENVU1RPTUlaRSBUSEUgQ0FST1VTRUxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiBDYXJvdXNlbCBiYXNlIGNsYXNzICovXG4uY2Fyb3VzZWwge1xuICBtYXJnaW4tYm90dG9tOiA0cmVtOyB9XG5cbi8qIFNpbmNlIHBvc2l0aW9uaW5nIHRoZSBpbWFnZSwgd2UgbmVlZCB0byBoZWxwIG91dCB0aGUgY2FwdGlvbiAqL1xuLmNhcm91c2VsLWNhcHRpb24ge1xuICBib3R0b206IDNyZW07XG4gIHotaW5kZXg6IDEwOyB9XG5cbi8qIERlY2xhcmUgaGVpZ2h0cyBiZWNhdXNlIG9mIHBvc2l0aW9uaW5nIG9mIGltZyBlbGVtZW50ICovXG4uY2Fyb3VzZWwtaXRlbSB7XG4gIGhlaWdodDogMzJyZW07IH1cblxuLmNhcm91c2VsLWl0ZW0gPiBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMycmVtOyB9XG5cbi8qIE1BUktFVElORyBDT05URU5UXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogQ2VudGVyIGFsaWduIHRoZSB0ZXh0IHdpdGhpbiB0aGUgdGhyZWUgY29sdW1ucyBiZWxvdyB0aGUgY2Fyb3VzZWwgKi9cbi5tYXJrZXRpbmcgLmNvbC1sZy00IHtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLm1hcmtldGluZyBoMiB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7IH1cblxuLm1hcmtldGluZyAuY29sLWxnLTQgcCB7XG4gIG1hcmdpbi1yaWdodDogLjc1cmVtO1xuICBtYXJnaW4tbGVmdDogLjc1cmVtOyB9XG5cbi8qIEZlYXR1cmV0dGVzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4uZmVhdHVyZXR0ZS1kaXZpZGVyIHtcbiAgbWFyZ2luOiA1cmVtIDA7XG4gIC8qIFNwYWNlIG91dCB0aGUgQm9vdHN0cmFwIDxocj4gbW9yZSAqLyB9XG5cbi8qIFRoaW4gb3V0IHRoZSBtYXJrZXRpbmcgaGVhZGluZ3MgKi9cbi5mZWF0dXJldHRlLWhlYWRpbmcge1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0uMDVyZW07IH1cblxuLyogUkVTUE9OU0lWRSBDU1Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5AbWVkaWEgKG1pbi13aWR0aDogNDBlbSkge1xuICAvKiBCdW1wIHVwIHNpemUgb2YgY2Fyb3VzZWwgY29udGVudCAqL1xuICAuY2Fyb3VzZWwtY2FwdGlvbiBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS40OyB9XG4gIC5mZWF0dXJldHRlLWhlYWRpbmcge1xuICAgIGZvbnQtc2l6ZTogNTBweDsgfSB9XG5cbkBtZWRpYSAobWluLXdpZHRoOiA2MmVtKSB7XG4gIC5mZWF0dXJldHRlLWhlYWRpbmcge1xuICAgIG1hcmdpbi10b3A6IDdyZW07IH0gfVxuIl19 */");

/***/ }),

/***/ "./src/app/public/home/splash-page.component.ts":
/*!******************************************************!*\
  !*** ./src/app/public/home/splash-page.component.ts ***!
  \******************************************************/
/*! exports provided: SplashPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashPageComponent", function() { return SplashPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SplashPageComponent = /** @class */ (function () {
    function SplashPageComponent() {
    }
    SplashPageComponent.prototype.ngOnInit = function () {
    };
    SplashPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-splash',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./splash-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/home/splash-page.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./splash-page.component.scss */ "./src/app/public/home/splash-page.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SplashPageComponent);
    return SplashPageComponent;
}());



/***/ }),

/***/ "./src/app/public/home/user-home.component.scss":
/*!******************************************************!*\
  !*** ./src/app/public/home/user-home.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn-toolbar {\n  justify-content: center; }\n\n/* GLOBAL STYLES\n-------------------------------------------------- */\n\n/* Padding below the footer and lighter body text */\n\nbody {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n  color: #5a5a5a; }\n\nh2 {\n  color: white; }\n\nmain {\n  background-color: #343a40;\n  height: 100%; }\n\n/* CUSTOMIZE THE CAROUSEL\n-------------------------------------------------- */\n\n/* Carousel base class */\n\n.carousel {\n  margin-bottom: 4rem; }\n\n/* Since positioning the image, we need to help out the caption */\n\n.carousel-caption {\n  bottom: 3rem;\n  z-index: 10; }\n\n/* Declare heights because of positioning of img element */\n\n.carousel-item {\n  height: 32rem; }\n\n.carousel-item > img {\n  position: absolute;\n  top: 0;\n  left: 0;\n  min-width: 100%;\n  height: 32rem; }\n\n/* MARKETING CONTENT\n-------------------------------------------------- */\n\n/* Center align the text within the three columns below the carousel */\n\n.marketing .col-lg-4 {\n  margin-bottom: 1.5rem;\n  text-align: center; }\n\n.marketing h2 {\n  font-weight: 400; }\n\n.marketing .col-lg-4 p {\n  margin-right: .75rem;\n  margin-left: .75rem; }\n\n/* Featurettes\n------------------------- */\n\n.featurette-divider {\n  margin: 5rem 0;\n  /* Space out the Bootstrap <hr> more */ }\n\n/* Thin out the marketing headings */\n\n.featurette-heading {\n  font-weight: 300;\n  line-height: 1;\n  letter-spacing: -.05rem; }\n\n/* RESPONSIVE CSS\n-------------------------------------------------- */\n\n@media (min-width: 40em) {\n  /* Bump up size of carousel content */\n  .carousel-caption p {\n    margin-bottom: 1.25rem;\n    font-size: 1.25rem;\n    line-height: 1.4; }\n  .featurette-heading {\n    font-size: 50px; } }\n\n@media (min-width: 62em) {\n  .featurette-heading {\n    margin-top: 7rem; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9oZGQvUHJvZ3JhbW1pbmcvUHJvamVjdHMvcmVjaXBlLWFwcC1uZy9zcmMvYXBwL3B1YmxpYy9ob21lL3VzZXItaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHVibGljL2hvbWUvdXNlci1ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCLEVBQUE7O0FBR3pCO29EQ0FvRDs7QURFcEQsbURBQUE7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSx5QkFBeUI7RUFDekIsWUFBWSxFQUFBOztBQUdkO29EQ0pvRDs7QURPcEQsd0JBQUE7O0FBQ0E7RUFDRSxtQkFBbUIsRUFBQTs7QUFFckIsaUVBQUE7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUdiLDBEQUFBOztBQUNBO0VBQ0UsYUFBYSxFQUFBOztBQUVmO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsZUFBZTtFQUNmLGFBQWEsRUFBQTs7QUFJZjtvRENSb0Q7O0FEV3BELHNFQUFBOztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLG9CQUFvQjtFQUNwQixtQkFBbUIsRUFBQTs7QUFJckI7MkJDWDJCOztBRGMzQjtFQUNFLGNBQWM7RUFBRSxzQ0FBQSxFQUF1Qzs7QUFHekQsb0NBQUE7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHVCQUF1QixFQUFBOztBQUl6QjtvRENkb0Q7O0FEaUJwRDtFQUNFLHFDQUFBO0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGdCQUFnQixFQUFBO0VBR2xCO0lBQ0UsZUFBZSxFQUFBLEVBQ2hCOztBQUdIO0VBQ0U7SUFDRSxnQkFBZ0IsRUFBQSxFQUNqQiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9ob21lL3VzZXItaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tdG9vbGJhciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4vKiBHTE9CQUwgU1RZTEVTXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogUGFkZGluZyBiZWxvdyB0aGUgZm9vdGVyIGFuZCBsaWdodGVyIGJvZHkgdGV4dCAqL1xuXG5ib2R5IHtcbiAgcGFkZGluZy10b3A6IDNyZW07XG4gIHBhZGRpbmctYm90dG9tOiAzcmVtO1xuICBjb2xvcjogIzVhNWE1YTtcbn1cblxuaDIge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbm1haW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzYTQwO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi8qIENVU1RPTUlaRSBUSEUgQ0FST1VTRUxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbi8qIENhcm91c2VsIGJhc2UgY2xhc3MgKi9cbi5jYXJvdXNlbCB7XG4gIG1hcmdpbi1ib3R0b206IDRyZW07XG59XG4vKiBTaW5jZSBwb3NpdGlvbmluZyB0aGUgaW1hZ2UsIHdlIG5lZWQgdG8gaGVscCBvdXQgdGhlIGNhcHRpb24gKi9cbi5jYXJvdXNlbC1jYXB0aW9uIHtcbiAgYm90dG9tOiAzcmVtO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLyogRGVjbGFyZSBoZWlnaHRzIGJlY2F1c2Ugb2YgcG9zaXRpb25pbmcgb2YgaW1nIGVsZW1lbnQgKi9cbi5jYXJvdXNlbC1pdGVtIHtcbiAgaGVpZ2h0OiAzMnJlbTtcbn1cbi5jYXJvdXNlbC1pdGVtID4gaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMnJlbTtcbn1cblxuXG4vKiBNQVJLRVRJTkcgQ09OVEVOVFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuLyogQ2VudGVyIGFsaWduIHRoZSB0ZXh0IHdpdGhpbiB0aGUgdGhyZWUgY29sdW1ucyBiZWxvdyB0aGUgY2Fyb3VzZWwgKi9cbi5tYXJrZXRpbmcgLmNvbC1sZy00IHtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWFya2V0aW5nIGgyIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5tYXJrZXRpbmcgLmNvbC1sZy00IHAge1xuICBtYXJnaW4tcmlnaHQ6IC43NXJlbTtcbiAgbWFyZ2luLWxlZnQ6IC43NXJlbTtcbn1cblxuXG4vKiBGZWF0dXJldHRlc1xuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4uZmVhdHVyZXR0ZS1kaXZpZGVyIHtcbiAgbWFyZ2luOiA1cmVtIDA7IC8qIFNwYWNlIG91dCB0aGUgQm9vdHN0cmFwIDxocj4gbW9yZSAqL1xufVxuXG4vKiBUaGluIG91dCB0aGUgbWFya2V0aW5nIGhlYWRpbmdzICovXG4uZmVhdHVyZXR0ZS1oZWFkaW5nIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGxldHRlci1zcGFjaW5nOiAtLjA1cmVtO1xufVxuXG5cbi8qIFJFU1BPTlNJVkUgQ1NTXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5AbWVkaWEgKG1pbi13aWR0aDogNDBlbSkge1xuICAvKiBCdW1wIHVwIHNpemUgb2YgY2Fyb3VzZWwgY29udGVudCAqL1xuICAuY2Fyb3VzZWwtY2FwdGlvbiBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS40O1xuICB9XG5cbiAgLmZlYXR1cmV0dGUtaGVhZGluZyB7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA2MmVtKSB7XG4gIC5mZWF0dXJldHRlLWhlYWRpbmcge1xuICAgIG1hcmdpbi10b3A6IDdyZW07XG4gIH1cbn1cbiIsIi5idG4tdG9vbGJhciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG5cbi8qIEdMT0JBTCBTVFlMRVNcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiBQYWRkaW5nIGJlbG93IHRoZSBmb290ZXIgYW5kIGxpZ2h0ZXIgYm9keSB0ZXh0ICovXG5ib2R5IHtcbiAgcGFkZGluZy10b3A6IDNyZW07XG4gIHBhZGRpbmctYm90dG9tOiAzcmVtO1xuICBjb2xvcjogIzVhNWE1YTsgfVxuXG5oMiB7XG4gIGNvbG9yOiB3aGl0ZTsgfVxuXG5tYWluIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0M2E0MDtcbiAgaGVpZ2h0OiAxMDAlOyB9XG5cbi8qIENVU1RPTUlaRSBUSEUgQ0FST1VTRUxcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4vKiBDYXJvdXNlbCBiYXNlIGNsYXNzICovXG4uY2Fyb3VzZWwge1xuICBtYXJnaW4tYm90dG9tOiA0cmVtOyB9XG5cbi8qIFNpbmNlIHBvc2l0aW9uaW5nIHRoZSBpbWFnZSwgd2UgbmVlZCB0byBoZWxwIG91dCB0aGUgY2FwdGlvbiAqL1xuLmNhcm91c2VsLWNhcHRpb24ge1xuICBib3R0b206IDNyZW07XG4gIHotaW5kZXg6IDEwOyB9XG5cbi8qIERlY2xhcmUgaGVpZ2h0cyBiZWNhdXNlIG9mIHBvc2l0aW9uaW5nIG9mIGltZyBlbGVtZW50ICovXG4uY2Fyb3VzZWwtaXRlbSB7XG4gIGhlaWdodDogMzJyZW07IH1cblxuLmNhcm91c2VsLWl0ZW0gPiBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMycmVtOyB9XG5cbi8qIE1BUktFVElORyBDT05URU5UXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuLyogQ2VudGVyIGFsaWduIHRoZSB0ZXh0IHdpdGhpbiB0aGUgdGhyZWUgY29sdW1ucyBiZWxvdyB0aGUgY2Fyb3VzZWwgKi9cbi5tYXJrZXRpbmcgLmNvbC1sZy00IHtcbiAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLm1hcmtldGluZyBoMiB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7IH1cblxuLm1hcmtldGluZyAuY29sLWxnLTQgcCB7XG4gIG1hcmdpbi1yaWdodDogLjc1cmVtO1xuICBtYXJnaW4tbGVmdDogLjc1cmVtOyB9XG5cbi8qIEZlYXR1cmV0dGVzXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG4uZmVhdHVyZXR0ZS1kaXZpZGVyIHtcbiAgbWFyZ2luOiA1cmVtIDA7XG4gIC8qIFNwYWNlIG91dCB0aGUgQm9vdHN0cmFwIDxocj4gbW9yZSAqLyB9XG5cbi8qIFRoaW4gb3V0IHRoZSBtYXJrZXRpbmcgaGVhZGluZ3MgKi9cbi5mZWF0dXJldHRlLWhlYWRpbmcge1xuICBmb250LXdlaWdodDogMzAwO1xuICBsaW5lLWhlaWdodDogMTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0uMDVyZW07IH1cblxuLyogUkVTUE9OU0lWRSBDU1Ncbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5AbWVkaWEgKG1pbi13aWR0aDogNDBlbSkge1xuICAvKiBCdW1wIHVwIHNpemUgb2YgY2Fyb3VzZWwgY29udGVudCAqL1xuICAuY2Fyb3VzZWwtY2FwdGlvbiBwIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS40OyB9XG4gIC5mZWF0dXJldHRlLWhlYWRpbmcge1xuICAgIGZvbnQtc2l6ZTogNTBweDsgfSB9XG5cbkBtZWRpYSAobWluLXdpZHRoOiA2MmVtKSB7XG4gIC5mZWF0dXJldHRlLWhlYWRpbmcge1xuICAgIG1hcmdpbi10b3A6IDdyZW07IH0gfVxuIl19 */");

/***/ }),

/***/ "./src/app/public/home/user-home.component.ts":
/*!****************************************************!*\
  !*** ./src/app/public/home/user-home.component.ts ***!
  \****************************************************/
/*! exports provided: UserHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHomeComponent", function() { return UserHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UserHomeComponent = /** @class */ (function () {
    function UserHomeComponent() {
    }
    UserHomeComponent.prototype.ngOnInit = function () { };
    UserHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-home',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/home/user-home.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-home.component.scss */ "./src/app/public/home/user-home.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserHomeComponent);
    return UserHomeComponent;
}());



/***/ }),

/***/ "./src/app/public/login/login.component.scss":
/*!***************************************************!*\
  !*** ./src/app/public/login/login.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-group {\n  text-align: center; }\n\n.btn {\n  align-content: center;\n  width: 50%; }\n\n.register-text {\n  font-size: 13px;\n  font-style: italic; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9oZGQvUHJvZ3JhbW1pbmcvUHJvamVjdHMvcmVjaXBlLWFwcC1uZy9zcmMvYXBwL3B1YmxpYy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLHFCQUFxQjtFQUNyQixVQUFVLEVBQUE7O0FBR1o7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wdWJsaWMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1ncm91cCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0biB7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLnJlZ2lzdGVyLXRleHQge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/public/login/login.component.ts":
/*!*************************************************!*\
  !*** ./src/app/public/login/login.component.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _core_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/toastr.service */ "./src/app/core/services/toastr.service.ts");
/* harmony import */ var _core_services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/session.service */ "./src/app/core/services/session.service.ts");






// import {CookieService} from 'ngx-cookie-service';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(auth, toastr, sessionService, 
    // private cookieService: CookieService,
    router) {
        this.auth = auth;
        this.toastr = toastr;
        this.sessionService = sessionService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.userInfo = {
            username: '',
            password: '',
            isAdmin: false,
            _id: 0
        };
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log('Logging in..');
        this.auth.signIn(this.userInfo).subscribe(function (res) {
            var tempRes;
            tempRes = res;
            if (tempRes && tempRes.token) {
                // console.log('Response Token: ' + tempRes.token);
                localStorage.setItem('token', tempRes.token);
                // console.log('User: ' + JSON.stringify(tempRes.user));
                _this.sessionService.setUser(tempRes.user);
                _this.toastr.success('Successfully Logged In');
                if (_this.sessionService.getRedirectUrl) {
                    _this.router.navigate([_this.sessionService.getRedirectUrl]);
                }
                else {
                    _this.router.navigate(['home']);
                }
            }
        }, function (err) {
            console.log('ERROR Obj: ' + JSON.stringify(err));
            console.log('\nERROR LOGGING IN: \n' + err.status);
            console.log('Error Message: ' + err.error.ErrMessage);
            _this.toastr.error('Error logging in');
            _this.message = err.error.ErrMessage;
        });
    };
    LoginComponent.prototype.clearMessage = function () {
        this.message = '';
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_core_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__["TOASTR_TOKEN"],] }] },
        { type: _core_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/login/login.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/public/login/login.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_core_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__["TOASTR_TOKEN"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], Object, _core_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/public/login/logout.component.ts":
/*!**************************************************!*\
  !*** ./src/app/public/login/logout.component.ts ***!
  \**************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LogoutComponent = /** @class */ (function () {
    function LogoutComponent() {
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logout',
            template: "\n  <div class=\"container\" style=\"padding-bottom: 30px\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"well well-lg\">\n          <div class=\"row\">\n            <div class=\"col-sm-12 text-center\">\n            <h1>You have been logged out.</h1>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <hr>\n  </div>\n",
            styles: [""]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/public/login/register.component.scss":
/*!******************************************************!*\
  !*** ./src/app/public/login/register.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-group {\n  text-align: center; }\n\n.btn {\n  align-content: center;\n  width: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9oZGQvUHJvZ3JhbW1pbmcvUHJvamVjdHMvcmVjaXBlLWFwcC1uZy9zcmMvYXBwL3B1YmxpYy9sb2dpbi9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLHFCQUFxQjtFQUNyQixVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wdWJsaWMvbG9naW4vcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1ncm91cCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ0biB7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDUwJTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/public/login/register.component.ts":
/*!****************************************************!*\
  !*** ./src/app/public/login/register.component.ts ***!
  \****************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_services_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/session.service */ "./src/app/core/services/session.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _core_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/toastr.service */ "./src/app/core/services/toastr.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(auth, toastr, router, sessionService) {
        this.auth = auth;
        this.toastr = toastr;
        this.router = router;
        this.sessionService = sessionService;
        this.submitted = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.userInfo = {
            username: '',
            password: '',
            isAdmin: false,
            _id: 0
        };
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.userInfo.password !== this.confirmPassword) {
            this.passwordMessage = 'Passwords do not match.';
            this.message = '';
            return;
        }
        else {
            this.passwordMessage = '';
            this.auth.signUp(this.userInfo).subscribe(function (res) {
                var tempRes;
                tempRes = res;
                _this.submitted = true;
                if (!res) {
                    console.error('Error creating new user');
                }
                else {
                    _this.sessionService.setUser(res.user);
                    localStorage.setItem('token', tempRes.token);
                    _this.toastr.success('Profile Successfully Created');
                    _this.router.navigate(['home']);
                }
            }, function (err) {
                console.error('Err: ' + JSON.stringify(err));
                _this.message = err.error.ErrMessage;
                _this.toastr.error(err.error.ErrMessage);
            });
        }
    };
    RegisterComponent.prototype.clearMessage = function () {
        this.message = '';
        this.passwordMessage = '';
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_core_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__["TOASTR_TOKEN"],] }] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _core_services_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"] }
    ]; };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-register',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/login/register.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.scss */ "./src/app/public/login/register.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_core_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__["TOASTR_TOKEN"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], Object, _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _core_services_session_service__WEBPACK_IMPORTED_MODULE_1__["SessionService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/public/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/public/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("header {\n  padding-bottom: 60px;\n  background-color: #343a40; }\n\n.homeLink:hover {\n  text-decoration: none; }\n\n.homeLink {\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9oZGQvUHJvZ3JhbW1pbmcvUHJvamVjdHMvcmVjaXBlLWFwcC1uZy9zcmMvYXBwL3B1YmxpYy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0Usb0JBQW9CO0VBQ3BCLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbWFpbiA+IC5jb250YWluZXIge1xuLy8gICBwYWRkaW5nLXRvcDogNjBweDtcbi8vIH1cblxuaGVhZGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDYwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzNDNhNDA7XG59XG5cbi5ob21lTGluazpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmhvbWVMaW5rIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/public/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/public/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _core_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/toastr.service */ "./src/app/core/services/toastr.service.ts");
/* harmony import */ var _core_services_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/session.service */ "./src/app/core/services/session.service.ts");






var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(session, toastr, auth, router) {
        this.session = session;
        this.toastr = toastr;
        this.auth = auth;
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.searchString = '';
    };
    NavbarComponent.prototype.search = function () {
        if (this.searchString !== '') {
            console.log('user has actually entered something to search \nSearching...');
            this.router.navigate(['/recipe/search'], { queryParams: { searchString: this.searchString } });
        }
        else {
            console.log('nothing to search...');
        }
    };
    NavbarComponent.prototype.logout = function () {
        var _this = this;
        if (this.session.logout()) {
            if (this.session.isAdmin) {
                this.session.setAdminStatus(false);
            }
        }
        this.clearSearch();
        this.auth.signOut().subscribe(function (res) {
            _this.toastr.success('You have successfully logged out');
            _this.router.navigate(['logout']);
        }, function (err) {
            console.error('Error destroying session from backend');
            _this.toastr.error('Error ending session with backend');
            _this.router.navigate(['logout']);
            // TO-DO: implement logging out of front end and hiding error from user
        });
    };
    NavbarComponent.prototype.navigateHome = function () {
        this.clearSearch();
        if (this.session.getUser) {
            this.router.navigate(['home']);
        }
        else {
            this.router.navigate(['index']);
        }
    };
    // For testing; remove eventually
    NavbarComponent.prototype.getUserData = function () {
        this.auth.getUserData().subscribe(function (res) {
            console.log('RES FROM GET USERDATA: ' + JSON.stringify(res));
        });
    };
    NavbarComponent.prototype.clearSearch = function () {
        this.searchString = '';
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _core_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_core_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__["TOASTR_TOKEN"],] }] },
        { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/navbar/navbar.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.scss */ "./src/app/public/navbar/navbar.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_core_services_toastr_service__WEBPACK_IMPORTED_MODULE_4__["TOASTR_TOKEN"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_services_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"], Object, src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/public/page-not-found/page-not-found.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/public/page-not-found/page-not-found.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/public/page-not-found/page-not-found.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/public/page-not-found/page-not-found.component.ts ***!
  \*******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/public/page-not-found/page-not-found.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/public/page-not-found/page-not-found.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/public/public.module.ts":
/*!*****************************************!*\
  !*** ./src/app/public/public.module.ts ***!
  \*****************************************/
/*! exports provided: PublicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicModule", function() { return PublicModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/public/navbar/navbar.component.ts");
/* harmony import */ var _login_logout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/logout.component */ "./src/app/public/login/logout.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/public/login/login.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/public/page-not-found/page-not-found.component.ts");
/* harmony import */ var _login_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/register.component */ "./src/app/public/login/register.component.ts");
/* harmony import */ var _home_user_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/user-home.component */ "./src/app/public/home/user-home.component.ts");
/* harmony import */ var _home_splash_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/splash-page.component */ "./src/app/public/home/splash-page.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./error/error.component */ "./src/app/public/error/error.component.ts");














var PublicModule = /** @class */ (function () {
    function PublicModule() {
    }
    PublicModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_12__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
            ],
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _login_logout_component__WEBPACK_IMPORTED_MODULE_6__["LogoutComponent"],
                _login_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"],
                _home_user_home_component__WEBPACK_IMPORTED_MODULE_10__["UserHomeComponent"],
                _home_splash_page_component__WEBPACK_IMPORTED_MODULE_11__["SplashPageComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_13__["ErrorComponent"]
            ],
            exports: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _login_logout_component__WEBPACK_IMPORTED_MODULE_6__["LogoutComponent"],
                _login_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"],
                _home_user_home_component__WEBPACK_IMPORTED_MODULE_10__["UserHomeComponent"],
                _home_splash_page_component__WEBPACK_IMPORTED_MODULE_11__["SplashPageComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_13__["ErrorComponent"]
            ]
        })
    ], PublicModule);
    return PublicModule;
}());



/***/ }),

/***/ "./src/app/shared/components/collapsible-well/collapsible-well.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/collapsible-well/collapsible-well.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fa {\n  padding-top: .5em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9oZGQvUHJvZ3JhbW1pbmcvUHJvamVjdHMvcmVjaXBlLWFwcC1uZy9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2NvbGxhcHNpYmxlLXdlbGwvY29sbGFwc2libGUtd2VsbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29sbGFwc2libGUtd2VsbC9jb2xsYXBzaWJsZS13ZWxsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhIHtcbiAgcGFkZGluZy10b3A6IC41ZW07XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/shared/components/collapsible-well/collapsible-well.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/collapsible-well/collapsible-well.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CollapsibleWellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapsibleWellComponent", function() { return CollapsibleWellComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CollapsibleWellComponent = /** @class */ (function () {
    function CollapsibleWellComponent() {
        this.visible = true;
    }
    CollapsibleWellComponent.prototype.ngOnInit = function () {
    };
    CollapsibleWellComponent.prototype.toggleContent = function () {
        this.visible = !this.visible;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CollapsibleWellComponent.prototype, "title", void 0);
    CollapsibleWellComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-collapsible-well',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./collapsible-well.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/collapsible-well/collapsible-well.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./collapsible-well.component.scss */ "./src/app/shared/components/collapsible-well/collapsible-well.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CollapsibleWellComponent);
    return CollapsibleWellComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/star/star.component.scss":
/*!************************************************************!*\
  !*** ./src/app/shared/components/star/star.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".crop {\n  overflow: hidden; }\n\n.fa-star {\n  color: gold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9oZGQvUHJvZ3JhbW1pbmcvUHJvamVjdHMvcmVjaXBlLWFwcC1uZy9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3N0YXIvc3Rhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQixFQUFBOztBQUtsQjtFQUNFLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3N0YXIvc3Rhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jcm9wIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi8vIGRpdiB7XG4vLyAgIGN1cnNvcjogcG9pbnRlcjtcbi8vIH1cbi5mYS1zdGFyIHtcbiAgY29sb3I6IGdvbGQ7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/shared/components/star/star.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/components/star/star.component.ts ***!
  \**********************************************************/
/*! exports provided: StarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarComponent", function() { return StarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StarComponent = /** @class */ (function () {
    function StarComponent() {
        this.rating = 0;
        this.starWidth = 0;
    }
    StarComponent.prototype.ngOnChanges = function () {
        this.starWidth = this.rating * 75 / 5;
    };
    StarComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], StarComponent.prototype, "rating", void 0);
    StarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-star',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./star.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/star/star.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./star.component.scss */ "./src/app/shared/components/star/star.component.scss")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StarComponent);
    return StarComponent;
}());



/***/ }),

/***/ "./src/app/shared/pipes/filter-by.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/shared/pipes/filter-by.pipe.ts ***!
  \************************************************/
/*! exports provided: FilterByPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterByPipe", function() { return FilterByPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterByPipe = /** @class */ (function () {
    function FilterByPipe() {
        this.topFilter = '';
        this.botFilter = '';
        this.userId = 0;
    }
    FilterByPipe.prototype.transform = function (value) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this.topFilter = !!args[0] ? args[0] : '';
        this.botFilter = !!args[1] ? args[1] : '';
        this.userId = !!args[2] ? args[2] : 0;
        if (this.topFilter === '' && this.botFilter === '') {
            return value;
        }
        this.selectedRecipeList = [];
        if (this.topFilter === 'new') {
            this.selectedRecipeList = value.slice((value.length - 6), (value.length));
        }
        else if (this.topFilter === 'hot') {
            var tempList = void 0;
            tempList = value.slice(0);
            tempList.sort(function (a, b) {
                var aAvg = 0;
                var bAvg = 0;
                var counter = 0;
                for (var _i = 0, _a = Object.values(a.raters); _i < _a.length; _i++) {
                    var rate = _a[_i];
                    aAvg += Number(rate);
                    counter++;
                }
                aAvg /= counter;
                counter = 0;
                for (var _b = 0, _c = Object.values(b.raters); _b < _c.length; _b++) {
                    var rate = _c[_b];
                    bAvg += Number(rate);
                    counter++;
                }
                bAvg /= counter;
                if (isNaN(aAvg)) {
                    aAvg = 0;
                }
                if (isNaN(bAvg)) {
                    bAvg = 0;
                }
                if (aAvg > bAvg) {
                    return -1;
                }
                else {
                    return 1;
                }
            });
            for (var i = 0; i < 12; i++) {
                if (Object.values(tempList[i].raters).length > 0) {
                    this.selectedRecipeList.push(tempList[i]);
                }
            }
        }
        else if (this.topFilter === 'fav') {
            this.selectedRecipeList = value.filter(function (recipe) {
                return (recipe.favoriters.indexOf('' + _this.userId) > -1);
            });
        }
        // set selectedRecipeList to value if it wasn't already set above with top filters
        this.selectedRecipeList = this.topFilter === '' ? value : this.selectedRecipeList;
        if (this.botFilter === 'Hello Fresh') {
            this.selectedRecipeList = this.selectedRecipeList.filter(function (recipe) {
                return (recipe.producer === 'Hello Fresh');
            });
        }
        else if (this.botFilter === 'Home Chef') {
            this.selectedRecipeList = this.selectedRecipeList.filter(function (recipe) {
                return (recipe.producer === 'Home Chef');
            });
        }
        else if (this.botFilter === 'Blue Apron') {
            this.selectedRecipeList = this.selectedRecipeList.filter(function (recipe) {
                return (recipe.producer === 'Blue Apron');
            });
        }
        return this.selectedRecipeList;
    };
    FilterByPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filterBy'
        })
    ], FilterByPipe);
    return FilterByPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/ingredients.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/pipes/ingredients.pipe.ts ***!
  \**************************************************/
/*! exports provided: IngredientsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientsPipe", function() { return IngredientsPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IngredientsPipe = /** @class */ (function () {
    function IngredientsPipe() {
    }
    IngredientsPipe.prototype.transform = function (value) {
        var newArray = [];
        var counter = 0;
        value.forEach(function (element) {
            newArray.push([]);
            var tempVar = element.split(' | ');
            tempVar[0] += ':';
            // console.log('tempVar: ' + tempVar);
            newArray[counter].push(tempVar[0]);
            newArray[counter].push(tempVar[1]);
            counter++;
        });
        return newArray;
    };
    IngredientsPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'ingredientsPipe'
        })
    ], IngredientsPipe);
    return IngredientsPipe;
}());



/***/ }),

/***/ "./src/app/shared/pipes/order-by.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/pipes/order-by.pipe.ts ***!
  \***********************************************/
/*! exports provided: OrderByPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderByPipe", function() { return OrderByPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderByPipe = /** @class */ (function () {
    function OrderByPipe() {
        this.sortFilter = '';
        this.sortDirection = '';
    }
    OrderByPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this.sortFilter = !!args[0] ? args[0] : '';
        this.sortDirection = !!args[1] ? args[1] : '';
        if (this.sortDirection === '' && this.sortFilter === '') {
            // sort by original ordering if no sort filter/direction present
            return value.sort(function (a, b) {
                if (a._id > b._id) {
                    return 1;
                }
                else {
                    return -1;
                }
            });
        }
        this.selectedRecipeList = value;
        if (this.sortDirection === 'up') {
            if (this.sortFilter === 'calories') {
                this.selectedRecipeList.sort(function (a, b) { return (a.nutritionValues.calories > b.nutritionValues.calories ? 1 : -1); });
            }
            else if (this.sortFilter === 'rating') {
                this.selectedRecipeList.sort(function (a, b) {
                    var aAvg = 0;
                    var bAvg = 0;
                    var counter = 0;
                    for (var _i = 0, _a = Object.values(a.raters); _i < _a.length; _i++) {
                        var rate = _a[_i];
                        aAvg += Number(rate);
                        counter++;
                    }
                    aAvg /= counter;
                    counter = 0;
                    for (var _b = 0, _c = Object.values(b.raters); _b < _c.length; _b++) {
                        var rate = _c[_b];
                        bAvg += Number(rate);
                        counter++;
                    }
                    bAvg /= counter;
                    // console.log(`Avg of recipeA(${a.title}): ${aAvg} compared to avg of recipeB(${b.title}): ${bAvg}`);
                    if (isNaN(aAvg)) {
                        aAvg = 0;
                    }
                    if (isNaN(bAvg)) {
                        bAvg = 0;
                    }
                    if (aAvg > bAvg) {
                        return 1;
                    }
                    else {
                        return -1;
                    }
                });
            }
            else if (this.sortFilter === 'title') {
                this.selectedRecipeList.sort(function (a, b) { return (a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1); });
            }
        }
        else if (this.sortDirection === 'down') {
            if (this.sortFilter === 'calories') {
                this.selectedRecipeList.sort(function (a, b) { return (a.nutritionValues.calories > b.nutritionValues.calories ? -1 : 1); });
            }
            else if (this.sortFilter === 'rating') {
                this.selectedRecipeList.sort(function (a, b) {
                    var aAvg = 0;
                    var bAvg = 0;
                    var counter = 0;
                    for (var _i = 0, _a = Object.values(a.raters); _i < _a.length; _i++) {
                        var rate = _a[_i];
                        aAvg += Number(rate);
                        counter++;
                    }
                    aAvg /= counter;
                    counter = 0;
                    for (var _b = 0, _c = Object.values(b.raters); _b < _c.length; _b++) {
                        var rate = _c[_b];
                        bAvg += Number(rate);
                        counter++;
                    }
                    bAvg /= counter;
                    // console.log(`Avg of recipeA(${a.title}): ${aAvg} compared to avg of recipeB(${b.title}): ${bAvg}`);
                    if (isNaN(aAvg)) {
                        aAvg = 0;
                    }
                    if (isNaN(bAvg)) {
                        bAvg = 0;
                    }
                    if (aAvg > bAvg) {
                        return -1;
                    }
                    else {
                        return 1;
                    }
                });
            }
            else if (this.sortFilter === 'title') {
                this.selectedRecipeList.sort(function (a, b) { return (a.title.toLowerCase() > b.title.toLowerCase() ? -1 : 1); });
            }
        }
        return this.selectedRecipeList;
    };
    OrderByPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'orderBy'
        })
    ], OrderByPipe);
    return OrderByPipe;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_star_star_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/star/star.component */ "./src/app/shared/components/star/star.component.ts");
/* harmony import */ var _components_collapsible_well_collapsible_well_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/collapsible-well/collapsible-well.component */ "./src/app/shared/components/collapsible-well/collapsible-well.component.ts");
/* harmony import */ var _pipes_ingredients_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pipes/ingredients.pipe */ "./src/app/shared/pipes/ingredients.pipe.ts");
/* harmony import */ var _pipes_order_by_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pipes/order-by.pipe */ "./src/app/shared/pipes/order-by.pipe.ts");
/* harmony import */ var _pipes_filter_by_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pipes/filter-by.pipe */ "./src/app/shared/pipes/filter-by.pipe.ts");








var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            providers: [],
            declarations: [
                _components_star_star_component__WEBPACK_IMPORTED_MODULE_3__["StarComponent"],
                _components_collapsible_well_collapsible_well_component__WEBPACK_IMPORTED_MODULE_4__["CollapsibleWellComponent"],
                _pipes_ingredients_pipe__WEBPACK_IMPORTED_MODULE_5__["IngredientsPipe"],
                _pipes_order_by_pipe__WEBPACK_IMPORTED_MODULE_6__["OrderByPipe"],
                _pipes_filter_by_pipe__WEBPACK_IMPORTED_MODULE_7__["FilterByPipe"]
            ],
            exports: [
                _components_star_star_component__WEBPACK_IMPORTED_MODULE_3__["StarComponent"],
                _components_collapsible_well_collapsible_well_component__WEBPACK_IMPORTED_MODULE_4__["CollapsibleWellComponent"],
                _pipes_ingredients_pipe__WEBPACK_IMPORTED_MODULE_5__["IngredientsPipe"],
                _pipes_order_by_pipe__WEBPACK_IMPORTED_MODULE_6__["OrderByPipe"],
                _pipes_filter_by_pipe__WEBPACK_IMPORTED_MODULE_7__["FilterByPipe"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false,
    // Local
    path: 'http://localhost:3000/api/'
    // path: 'https://localhost:3000/api/'
    // Static Local Pi Address
    // path: 'http://192.168.1.5:3000/api/'
    // Static Local desktop address, used for testing cross domain functionality between angular & node server
    // path: 'http://192.168.1.7:3000/api/'
    // Heroku hosted uri of recipe-app
    // path: 'https://delicious-recipe-app.herokuapp.com/api/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /hdd/Programming/Projects/recipe-app-ng/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map