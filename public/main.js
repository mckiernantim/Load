(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n  <app-navbar></app-navbar>\n\n  <div class=\"container\">\n    <router-outlet></router-outlet>\n    <flash-messages></flash-messages>\n </div>\n  \n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Loadout-src';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _token_interceptor_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token-interceptor.service */ "./src/app/token-interceptor.service.ts");
/* harmony import */ var _components_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/auth.service */ "./src/app/components/auth.service.ts");
/* harmony import */ var _components_validate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/validate.service */ "./src/app/components/validate.service.ts");
/* harmony import */ var _components_post_electrical_cables_cables_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/post/electrical/cables/cables.component */ "./src/app/components/post/electrical/cables/cables.component.ts");
/* harmony import */ var _components_register_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/register.service */ "./src/app/components/register.service.ts");
/* harmony import */ var _components_post_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/post.service */ "./src/app/components/post.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./material */ "./src/app/material.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_post_post_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/post/post.component */ "./src/app/components/post/post.component.ts");
/* harmony import */ var _components_post_carpenrtry_carpenrtry_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/post/carpenrtry/carpenrtry.component */ "./src/app/components/post/carpenrtry/carpenrtry.component.ts");
/* harmony import */ var _components_post_electrical_electrical_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/post/electrical/electrical.component */ "./src/app/components/post/electrical/electrical.component.ts");
/* harmony import */ var _components_post_tools_tools_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/post/tools/tools.component */ "./src/app/components/post/tools/tools.component.ts");
/* harmony import */ var _components_post_material_material_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/post/material/material.component */ "./src/app/components/post/material/material.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var appRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__["DashboardComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_21__["ProfileComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]] },
    { path: 'post', component: _components_post_post_component__WEBPACK_IMPORTED_MODULE_22__["PostComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_11__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_16__["NavbarComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_19__["HomeComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_20__["DashboardComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_21__["ProfileComponent"],
                _components_post_post_component__WEBPACK_IMPORTED_MODULE_22__["PostComponent"],
                _components_post_carpenrtry_carpenrtry_component__WEBPACK_IMPORTED_MODULE_23__["CarpenrtryComponent"],
                _components_post_electrical_electrical_component__WEBPACK_IMPORTED_MODULE_24__["ElectricalComponent"],
                _components_post_tools_tools_component__WEBPACK_IMPORTED_MODULE_25__["ToolsComponent"],
                _components_post_material_material_component__WEBPACK_IMPORTED_MODULE_26__["MaterialComponent"],
                _components_post_electrical_cables_cables_component__WEBPACK_IMPORTED_MODULE_4__["CablesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["BrowserModule"],
                _material__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_12__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forRoot(appRoutes),
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_8__["FlashMessagesModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientModule"],
            ],
            providers: [_components_post_service__WEBPACK_IMPORTED_MODULE_6__["PostService"], _components_register_service__WEBPACK_IMPORTED_MODULE_5__["RegisterService"], _components_validate_service__WEBPACK_IMPORTED_MODULE_3__["ValidateService"], _components_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientModule"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HTTP_INTERCEPTORS"],
                    useClass: _token_interceptor_service__WEBPACK_IMPORTED_MODULE_1__["TokenInterceptorService"],
                    multi: true
                }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_15__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/auth.service.ts":
/*!********************************************!*\
  !*** ./src/app/components/auth.service.ts ***!
  \********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var loginResponse;
        console.log(user + "passed into registerUser");
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set("Content-Type", "application/json");
        return this.http.post('http://localhost:3000/users/register', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return loginResponse = data; }));
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('id_token');
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
        console.log(this.authToken + " got the token from the headers");
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
        console.log("auth token " + this.authToken);
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set("Content-Type", "application/json");
        console.log(headers);
        return this.http.post('http://localhost:3000/users/authenticate', user, { headers: headers });
    };
    ;
    AuthService.prototype.getProfile = function () {
        this.loadToken();
        console.log("this is the loaded token to log in " + this.authToken);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set("Authorization", this.authToken).set("Content-Type", "application/json");
        console.log(headers);
        return this.http.get('http://localhost:3000/users/profile', { headers: headers });
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.loggedIn = function () {
        return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_3__["tokenNotExpired"])('id_token');
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>Welcome to the home page</div>\n\n<mat-grid-list cols=\"3\" rowHeight=\"3:1\">\n        <mat-grid-tile><H1>welcome to Loadout - Register up.</H1></mat-grid-tile>\n        <mat-grid-tile><h1>Join the group to find stuff</h1></mat-grid-tile>\n        <mat-grid-tile><h1>Its got everything you need</h1></mat-grid-tile>\n</mat-grid-list>\n\n <a mat-raised-button [routerLink]=\"['/register']\">register</a>\n\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"register-container\">\n    <form (submit) = \"onLoginSubmit()\">\n      <mat-form-field>\n        <mat-label>Enter Username</mat-label>\n        <input matInput placeholder=\"Input\" [(ngModel)]=\"username\" name=\"username\">\n      </mat-form-field>\n    \n      <mat-form-field>\n          <mat-label>Enter Passsword</mat-label>\n          <input matInput placeholder=\"Input\" [(ngModel)]=\"password\" name=\"password\">\n        </mat-form-field>\n        <button matbutton class=\"submit-btn\" type=\"submit\" value=\"Login\" >Login</button>\n    </form>\n    </div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../auth.service */ "./src/app/components/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        console.log(this.username);
        this.authService.authenticateUser(user).subscribe(function (data) {
            console.log(data + "$$$$$$$$$$$$$$$");
            if (data['success']) {
                _this.authService.storeUserData(data['token'], data['user']);
                _this.flashMessage.show("You're logged in", {
                    cssClass: 'alert-success',
                    timeout: 5000,
                });
                _this.router.navigate(["/dashboard"]);
            }
            else {
                _this.flashMessage.show(data['msg'], {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_0__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <span class=\"fill-remaining-space\"></span>\n    <span>Loadout!</span>\n  <span class=\"fill-remaining-space\"></span>\n  \n  \n    <span class=\"example-spacer\"></span>\n    <div fxShow=\"true\" fxHide.lt-md=\"true\">\n  \n    <a mat-button [routerLink]=\"['/']\">home</a>\n  \n    <a mat-button [routerLink]=\"['/post']\">post</a>\n    <a *ngIf= \"authService.loggedIn()\" mat-button [routerLink]=\"['/dashboard']\">dashboard</a>\n  \n    <a *ngIf= \"authService.loggedIn()\" mat-button [routerLink]=\"['/profile']\">profile</a>\n    <a *ngIf= \"!authService.loggedIn()\"mat-button [routerLink]=\"['/login']\">login</a>\n  \n    <a mat-button [routerLink]=\"['/register']\">register</a>\n    <a mat-button hre=\"#\" (click) = \"onLogoutClick()\">Logout</a>\n  \n  </div>\n \n\n  \n  </mat-toolbar>\n\n "

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../auth.service */ "./src/app/components/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show("You've logged out", {
            cssClass: 'alert-success',
            timeout: 3000,
        });
        this.router.navigate(["/login"]);
        return false;
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_0__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/post.service.ts":
/*!********************************************!*\
  !*** ./src/app/components/post.service.ts ***!
  \********************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostService = /** @class */ (function () {
    function PostService(http) {
        this.http = http;
        // let headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        // return this.http.post('http://localhost300/posts')
    }
    PostService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/components/post/carpenrtry/carpenrtry.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/post/carpenrtry/carpenrtry.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/post/carpenrtry/carpenrtry.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/post/carpenrtry/carpenrtry.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  carpenrtry works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/post/carpenrtry/carpenrtry.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/post/carpenrtry/carpenrtry.component.ts ***!
  \********************************************************************/
/*! exports provided: CarpenrtryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarpenrtryComponent", function() { return CarpenrtryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarpenrtryComponent = /** @class */ (function () {
    function CarpenrtryComponent() {
    }
    CarpenrtryComponent.prototype.ngOnInit = function () {
    };
    CarpenrtryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-carpenrtry',
            template: __webpack_require__(/*! ./carpenrtry.component.html */ "./src/app/components/post/carpenrtry/carpenrtry.component.html"),
            styles: [__webpack_require__(/*! ./carpenrtry.component.css */ "./src/app/components/post/carpenrtry/carpenrtry.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarpenrtryComponent);
    return CarpenrtryComponent;
}());



/***/ }),

/***/ "./src/app/components/post/electrical/cables/cables.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/post/electrical/cables/cables.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/post/electrical/cables/cables.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/post/electrical/cables/cables.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown\">\n\n    <select class=\"form-control\" id=\"material\" (change)='selectSubCategory($event)'>\n     \n      <option>Select Material</option>\n      <option value=0>Source_4</option>\n      <option value=1>Fresnel</option>\n      <option value=2>Pars</option>\n      <option value=3>Strips</option>\n      <option value=4>Other</option>\n\n    </select>\n    <div *ngIf=\"this.displayedSubCategory==='Source_4'\">\n   \n    </div>\n    <div *ngIf=\"this.displayedSubCategory==='Fresnel'\">\n \n    </div>\n    <div *ngIf=\"this.displayedSubCategory==='Pars'\">\n  \n    </div>\n    <div *ngIf=\"this.displayedSubCategory==='Strips'\">\n      \n    </div>\n    <div *ngIf=\"this.displayedSubCategory==='Other'\">\n      \n    </div>\n    \n  </div>\n"

/***/ }),

/***/ "./src/app/components/post/electrical/cables/cables.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/post/electrical/cables/cables.component.ts ***!
  \***********************************************************************/
/*! exports provided: CablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CablesComponent", function() { return CablesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CablesComponent = /** @class */ (function () {
    function CablesComponent() {
        this.displayedSubCategory = "";
        this.subCategories = [
            "Source_4",
            "Fresnel",
            "Pars",
            "Strips",
            "Other"
        ];
    }
    CablesComponent.prototype.selectSubCategory = function (event, subCategories) {
        var userSelect = event.target.value;
        console.log(userSelect + "%%%%%%%%%%%%");
        this.displayedSubCategory = subCategories[userSelect];
        console.log(this.displayedSubCategory + "$$$$$$$$$$$$$");
    };
    CablesComponent.prototype.ngOnInit = function () {
    };
    CablesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cables',
            template: __webpack_require__(/*! ./cables.component.html */ "./src/app/components/post/electrical/cables/cables.component.html"),
            styles: [__webpack_require__(/*! ./cables.component.css */ "./src/app/components/post/electrical/cables/cables.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CablesComponent);
    return CablesComponent;
}());



/***/ }),

/***/ "./src/app/components/post/electrical/electrical.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/post/electrical/electrical.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/post/electrical/electrical.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/post/electrical/electrical.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n  <label class=\"col-md-2 control-label\">Electric</label>\n  <div class=\"col-md-8\">\n\n    <div class=\"dropdown\">\n\n      <select class=\"form-control\" id=\"sub-category\" (change)='selectSubCategory($event, this.subCategories)'>\n        <option value=0>Instruments</option>\n\n        <option value=0>Cable</option>\n        <option value=1>Hardware</option>\n        <option value=2>Accessories</option>\n        <option value=3>Consumables</option>\n        <option value=4>Misc</option>\n\n      </select>\n      <div>\n        <app-cables></app-cables>\n      </div>\n      \n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/post/electrical/electrical.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/post/electrical/electrical.component.ts ***!
  \********************************************************************/
/*! exports provided: ElectricalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectricalComponent", function() { return ElectricalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ElectricalComponent = /** @class */ (function () {
    function ElectricalComponent() {
        this.displayedSubCategory = "";
        this.subCategories = [
            "Cable",
            "Hardware",
            "Accessories",
            "Consumables",
            "Misc"
        ];
    }
    ElectricalComponent.prototype.selectSubCategory = function (event, subCategories) {
        var userSelect = event.target.value;
        console.log(userSelect + "%%%%%%%%%%%%");
        this.displayedSubCategory = subCategories[userSelect];
        console.log(this.displayedSubCategory + "$$$$$$$$$$$$$");
    };
    ElectricalComponent.prototype.ngOnInit = function () {
    };
    ElectricalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-electrical',
            template: __webpack_require__(/*! ./electrical.component.html */ "./src/app/components/post/electrical/electrical.component.html"),
            styles: [__webpack_require__(/*! ./electrical.component.css */ "./src/app/components/post/electrical/electrical.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ElectricalComponent);
    return ElectricalComponent;
}());



/***/ }),

/***/ "./src/app/components/post/material/material.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/components/post/material/material.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/post/material/material.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/post/material/material.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  material works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/post/material/material.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/post/material/material.component.ts ***!
  \****************************************************************/
/*! exports provided: MaterialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialComponent", function() { return MaterialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MaterialComponent = /** @class */ (function () {
    function MaterialComponent() {
    }
    MaterialComponent.prototype.ngOnInit = function () {
    };
    MaterialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-material',
            template: __webpack_require__(/*! ./material.component.html */ "./src/app/components/post/material/material.component.html"),
            styles: [__webpack_require__(/*! ./material.component.css */ "./src/app/components/post/material/material.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MaterialComponent);
    return MaterialComponent;
}());



/***/ }),

/***/ "./src/app/components/post/post.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/post/post.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/post/post.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/post/post.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"form-horizontal\">\n    <div class=\"panel panel-primary\">\n        <div class=\"panel-heading\">\n            <h3 class=\"panel-title\">Create Post</h3>\n        </div>\n    </div>\n    <div class=\"panel-body\">\n      \n      \n     <div class=\"dropdown\">\n\n                    <select class=\"form-control\" id=\"carpentry\"(change)=\"toggleCategory($event)\">\n                        <option>carpentry</option>\n                        <option>electrical</option>\n                        <option>material</option>\n                        <option>etc</option>\n                    </select>\n                    <div *ngIf=\"this.selected === 'carpentry'\">\n                            <app-carpenrtry>CARPENTRY IS THE CATEGORY</app-carpenrtry>\n                            <button (click)=\"closeCategory()\">Reset Category</button>\n                    </div>\n                  \n                    <div *ngIf=\"this.selected === 'electrical'\">\n                        <app-electrical>\n                     \n                        </app-electrical>\n                    </div>\n                    <div *ngIf=\"this.selected === 'material'\">\n                    <app-material></app-material>\n                    </div>\n                </div>\n            </div>\n</form>"

/***/ }),

/***/ "./src/app/components/post/post.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/post/post.component.ts ***!
  \***************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostComponent = /** @class */ (function () {
    function PostComponent(fb) {
        this.fb = fb;
        this.selections = [{
                department: "Electrics",
                children: [
                    {
                        title: "instruments",
                        subcategories: [
                            {
                                subTitle: "Source4",
                                specifics: "description"
                            },
                            {
                                subTitle: "Fresnel",
                                specifics: "description"
                            },
                            {
                                subTitle: "Pars",
                                specifics: "description"
                            },
                            {
                                subTitle: "Strips",
                                specifics: "description"
                            },
                            {
                                subTitle: "Other",
                                specifics: "description"
                            },
                        ]
                    },
                    {
                        title: "cables",
                        subcategories: [
                            {
                                subTitle: "edison",
                                specifics: ["specify length"]
                            },
                            {
                                subTitle: "stage pin",
                                specifics: ["specify length"]
                            },
                            {
                                subTitle: "dmx",
                                specifics: ["specify length, specify pin"]
                            },
                            {
                                subTitle: "other",
                                specifics: ["length"]
                            },
                        ]
                    },
                    {
                        title: "hardware",
                        subcategories: [
                            {
                                subTitle: "Cheesegoroughs",
                                specifics: [{
                                        options: [{
                                                type: "swivel",
                                                materials: ["steel", "aluminum"]
                                            },
                                            {
                                                type: "Rigid",
                                                materials: ["steel", "aluminum"]
                                            },
                                            {
                                                type: "HalfBoro",
                                                materials: ["steel", "aluminum"]
                                            },
                                        ],
                                    }]
                            },
                            {
                                subTitle: 'schedule40',
                                specifics: ["specify length"]
                            },
                            {
                                subTitle: "boomBase",
                                specifics: []
                            },
                            {
                                subTitle: "sideArms",
                                specifics: []
                            },
                            {
                                subTitle: "cClamps",
                                specifics: []
                            },
                            {
                                subTitle: "safetyCables",
                                specifics: []
                            },
                            {
                                subTitle: "other",
                                specifics: []
                            },
                        ]
                    }
                ]
            }
        ];
        this.selected = "";
        this.rForm = fb.group({
            'title': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'description': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)])],
            'category': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            "subCategory": [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            "item": [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'deathDate': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            'specifics': [null],
            'validate': '',
        });
    }
    PostComponent.prototype.addPost = function (post) {
        this.title = post.title;
        this.description = post.description;
        this.category = post.catagory;
        this.subCategory = post.subCategory;
        this.item = post.item;
        this.deathDate = post.deathDate;
        this.specifics = post.specifics;
    };
    PostComponent.prototype.ngOnInit = function () {
    };
    PostComponent.prototype.toggleCategory = function (event) {
        this.selected = (event.target.value);
    };
    PostComponent.prototype.closeCategory = function () {
        this.selected = "";
    };
    PostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/components/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/components/post/post.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/components/post/tools/tools.component.css":
/*!***********************************************************!*\
  !*** ./src/app/components/post/tools/tools.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/post/tools/tools.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/post/tools/tools.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  tools works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/post/tools/tools.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/post/tools/tools.component.ts ***!
  \**********************************************************/
/*! exports provided: ToolsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolsComponent", function() { return ToolsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolsComponent = /** @class */ (function () {
    function ToolsComponent() {
    }
    ToolsComponent.prototype.ngOnInit = function () {
    };
    ToolsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tools',
            template: __webpack_require__(/*! ./tools.component.html */ "./src/app/components/post/tools/tools.component.html"),
            styles: [__webpack_require__(/*! ./tools.component.css */ "./src/app/components/post/tools/tools.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ToolsComponent);
    return ToolsComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf= \"user\">\n  <p>profile works </p>\n  <h2>{{user.name}}</h2>\n  <ul>\n    <li>Username: {{user.username}}</li>\n    <li>Email: {{user.email}}</li>\n  </ul>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../auth.service */ "./src/app/components/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            console.log(_this.user + "called from ngOnInit and getProfile");
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ;
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register.service.ts":
/*!************************************************!*\
  !*** ./src/app/components/register.service.ts ***!
  \************************************************/
/*! exports provided: RegisterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterService", function() { return RegisterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterService = /** @class */ (function () {
    function RegisterService() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            $key: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            createdAt: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            occupation: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
    }
    RegisterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], RegisterService);
    return RegisterService;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"register-container\">\n  <form (submit) = \"onRegisterSubmit()\">\n    <mat-form-field>\n      <mat-label>Enter Username</mat-label>\n      <input matInput placeholder=\"Input\" [(ngModel)]=\"username\" name=\"username\">\n    </mat-form-field>\n  \n    <mat-form-field>\n        <mat-label>Enter Passsword</mat-label>\n        <input matInput placeholder=\"Input\" [(ngModel)]=\"password\" name=\"password\">\n      </mat-form-field>\n      <mat-form-field>\n          <mat-label>Enter Email</mat-label>\n          <input matInput placeholder=\"Input\" [(ngModel)]=\"email\" name=\"email\">\n        </mat-form-field>\n\n    <mat-form-field>\n        <mat-label>Choose Your Proffesion</mat-label>\n      <mat-select placeholder=\"Select\" [(ngModel)]=\"user_title\" name = \"title\" >\n        <mat-option *ngFor=\"let title of titles\"  name = \"titles\" value= {{title.value}} >{{title.value}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <button matbutton class=\"submit-btn\" type=\"submit\">Register</button>\n  </form>\n  </div>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth.service */ "./src/app/components/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _validate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../validate.service */ "./src/app/components/validate.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _register_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../register.service */ "./src/app/components/register.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(form, validateService, flashMessage, router, authService) {
        this.form = form;
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.authService = authService;
        this.titles = [
            { id: 1, value: "Technical Director" },
            { id: 2, value: "Costume Designer" },
            { id: 3, value: "Lighting Designer" },
            { id: 4, value: "Director" },
            { id: 5, value: "Producer" },
            { id: 6, value: "Electrician" },
            { id: 7, value: "Carpenter" },
        ];
        this.selected = "worker";
        this.currentName = "newGuy ";
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            password: this.password,
            username: this.username,
            email: this.email,
            title: this.user_title
        };
        console.log(user);
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show("Please use a valid email", { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show("Please fill all fields", { cssClass: 'alert-danger', timeout: 3000 });
            return false;
        }
        this.authService.registerUser(user)
            .subscribe(function (data) {
            var thisResponse = data;
            console.log(data);
            if (data['success']) {
                _this.flashMessage.show("Registration success", { cssClass: 'alert-success', timeout: 3000 });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessage.show("uhohs something went wrong....", { cssClass: 'alert-danger', timeout: 3000 });
            }
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_register_service__WEBPACK_IMPORTED_MODULE_5__["RegisterService"],
            _validate_service__WEBPACK_IMPORTED_MODULE_3__["ValidateService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"],
            _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/validate.service.ts":
/*!************************************************!*\
  !*** ./src/app/components/validate.service.ts ***!
  \************************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.email == undefined || user.username == undefined || user.password == undefined) {
            console.log("validation failed)");
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _components_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../components/auth.service */ "./src/app/components/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_components_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/material.ts":
/*!*****************************!*\
  !*** ./src/app/material.ts ***!
  \*****************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatNativeDateModule"]],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatNativeDateModule"]],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/token-interceptor.service.ts":
/*!**********************************************!*\
  !*** ./src/app/token-interceptor.service.ts ***!
  \**********************************************/
/*! exports provided: TokenInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function() { return TokenInterceptorService; });
/* harmony import */ var _components_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/auth.service */ "./src/app/components/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenInterceptorService = /** @class */ (function () {
    function TokenInterceptorService(injector) {
        this.injector = injector;
    }
    TokenInterceptorService.prototype.intercept = function (req, next) {
        var authService = this.injector.get(_components_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]);
        var tokenizedReq = req.clone({
            setHeaders: {
                Authorization: "Bearer " + authService.getToken()
            }
        });
        return next.handle(tokenizedReq);
    };
    TokenInterceptorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], TokenInterceptorService);
    return TokenInterceptorService;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/timmckiernan/Desktop/Loadout2/Loadout-src/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map