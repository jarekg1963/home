(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about/about.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>about works! ale jak drugi   </p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <img class=\"fullBg\" fullpage [src]=\"page.image\"> -->\n\n\n\n\n<mat-toolbar color=\"primary\">\n\n  <div class=\"container\" style=\"width: fit-content;\">\n\n  <button mat-raised-button [matMenuTriggerFor]=\"menu\" class=\"btn-block btn-blue\"  *ngIf=\"uzytkownik !null \">\n      <mat-icon>more_vert</mat-icon>\n  </button>\n\n  <mat-menu #menu=\"matMenu\" >\n    <button mat-menu-item (click)=openFirst()>\n      <mat-icon>unarchive</mat-icon>\n      <span>First</span>\n    </button>\n    <button mat-menu-item>\n      <mat-icon>file_copy</mat-icon>\n      <span>Second</span>\n    </button>\n  </mat-menu>\n  </div>\n\n  <a class=\"navbar-brand\" href=\"#\">\n    <span class=\"logo logo-left\">J</span>\n    <span class=\"logo logo-right\">G</span>\n  </a>\n\n  <a mat-button  *ngIf=\"uzytkownik !null \"> User: {{ uzytkownik}}   </a>\n\n\n  <span class=\"spacer\"></span>\n\n  <a mat-button\n  [routerLink]=\"['home']\"\n  routerLinkActive=\"active\"> <mat-icon aria-hidden=\"false\" md-16 aria-label=\"Example home icon\">home</mat-icon>Home</a>\n  <a mat-button\n  [routerLink]=\"['about']\"\n  routerLinkActive=\"active\"><mat-icon>face</mat-icon>About</a>\n  <a mat-button\n  [routerLink]=\"['contact']\"\n  routerLinkActive=\"active\"><mat-icon>contact_support</mat-icon>Contact</a>\n  <a mat-button\n  (click)=\"login()\"\n  routerLinkActive=\"active\"><mat-icon>toll</mat-icon>Login</a>\n</mat-toolbar>\n\n\n\n\n<app-page></app-page>\n\n<app-footer></app-footer>\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contact/contact.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact/contact.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>contact works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/footer/footer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>footer works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>home works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h2 mat-dialog-title>Login </h2>\n<mat-dialog-content [formGroup]=\"ngForm\">\n<mat-form-field>\n  <input matInput placeholder=\"User name \" formControlName=\"FullName\">\n</mat-form-field>\n<mat-form-field>\n  <input matInput placeholder=\"password\" formControlName=\"Password\">\n</mat-form-field>\n</mat-dialog-content>\n<mat-dialog-actions>\n<button class=\"mat-raised-button\"(click)=\"close()\">Close</button>\n<button class=\"mat-raised-button mat-primary\"(click)=\"save()\">Save</button>\n</mat-dialog-actions>\n -->\n\n\n\n\n\n  <form [formGroup]=\"ngForm\" autocomplete=\"off\" novalidate>\n\n  <mat-grid-list cols=\"1\" row=\"4\" [style.background]=\"'white'\" rowHeight=\"130px\">\n\n  <mat-grid-tile>\n    <mat-form-field appearance=\"standard\" style=\"width: 400px;\" floatlabel=\"never\">\n      <mat-label>FullName</mat-label>\n      <input matInput placeholder=\"FullName\" required [formControl]=\"FullName\">\n    </mat-form-field>\n  </mat-grid-tile>\n\n  <mat-grid-tile>\n    <mat-form-field appearance=\"standard\" style=\"width: 400px;\" floatlabel=\"never\">\n      <mat-label>password</mat-label>\n      <input matInput placeholder=\"Password\" required [formControl]=\"Password\" [type]=\"hide ? 'password' : 'text'\">\n      <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n        <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n        </button>\n    </mat-form-field>\n  </mat-grid-tile>\n\n\n\n  </mat-grid-list>\n\n    <button class=\"btn btn-lg btn-primary btn-block\"  (click)=\"save()\">Sign in</button>\n\n    <button class=\"btn btn-lg btn-primary btn-block\" (click)=\"close()\">Close</button>\n\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/menuPages/first/first.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/menuPages/first/first.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 user-container\">\n\n  <table class=\"table table-striped\">\n\n    <thead>\n      <tr>\n        <th class=\"hidden\">Id</th>\n        <th>Date</th>\n        <th>TemperatureC</th>\n        <th>TemperatureF</th>\n        <th>summary</th>\n      </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let user of rowData\">\n\n        <td>{{ user.date}}</td>\n          <td>{{user.summary}}</td>\n        <td>{{ user.temperatureC}}</td>\n        <td>{{ user.temperatureF}}</td>\n           </tr>\n        </tbody>\n  </table>\n</div>\n<button class=\"btn btn-lg btn-primary btn-block\" (click)=\"close()\">Close</button>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/page/page.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page/page.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <img class=\"fullBg\" fullpage [src]=\"page.image\"> -->\n\n<mat-card>\n<mat-card-header>\n<mat-card-title><h1>{{page.title}}</h1></mat-card-title>\n<mat-card-subtitle>{{page.subtitle}}</mat-card-subtitle>\n</mat-card-header>\n<mat-card-content>\n<!-- <app-router-outlet></app-router-outlet> -->\n\n<router-outlet></router-outlet>\n</mat-card-content>\n</mat-card>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/sidebar/sidebar.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/sidebar/sidebar.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>sidebar works!</p>\n"

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html"),
        styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
    })
], AboutComponent);



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
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");






// const routes: Routes = [
//   {path: '', redirectTo: '/home', pathMatch: 'full'},
//   {path: 'home', component: PageComponent, data: {
//     page: 'home'
//   }},
//   {path: 'about', component: PageComponent, data: {
//     page: 'about'
//   }},
//   {path: 'contact', component: PageComponent, data: {
//     page: 'contact'
//   }},
//   {path: '**', redirectTo: '/home', pathMatch: 'full'}
// ];
const routes = [
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_1__["AboutComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"] },
    { path: '', redirectTo: '/#', pathMatch: 'full' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\nmat-toolbar {\n  position: relative;\n  z-index: 1;\n  overflow-x: auto;\n}\n\nmat-toolbar-row {\n  -webkit-box-pack:justify;\n          justify-content:space-between;\n}\n\n.spacer {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\na.active {\n  background-color: rgba(0,0,0, 0.3);\n}\n\nh1 {\n  margin: 0;\n}\n\nh1 .light {\n  font-weight: 100;\n}\n\n.logo{\n  color: #fff;\n  font-weight: bold;\n  font-size: 1.4em;\n}\n\n.logo-left{\n  background-color: #58a198;\n  padding: 3px 5px 3px 8px;\n  border-radius: 4px;\n}\n\n.logo-right{\n  background-color: #58a198;\n  padding: 3px 8px 3px 3px;\n  margin-left: -5px;\n  border-radius: 4px;\n}\n\n.fullBg {\n  z-index:0;\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usd0JBQTZCO1VBQTdCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLG1CQUFjO1VBQWQsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBR0E7RUFDRSxTQUFTO0VBQ1QsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0FBQ1QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5tYXQtdG9vbGJhciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbn1cblxubWF0LXRvb2xiYXItcm93IHtcbiAganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47XG59XG5cbi5zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuYS5hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLCAwLjMpO1xufVxuXG5oMSB7XG4gIG1hcmdpbjogMDtcbn1cblxuaDEgLmxpZ2h0IHtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuLmxvZ297XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjRlbTtcbn1cblxuLmxvZ28tbGVmdHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU4YTE5ODtcbiAgcGFkZGluZzogM3B4IDVweCAzcHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5sb2dvLXJpZ2h0e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNThhMTk4O1xuICBwYWRkaW5nOiAzcHggOHB4IDNweCAzcHg7XG4gIG1hcmdpbi1sZWZ0OiAtNXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cblxuLmZ1bGxCZyB7XG4gIHotaW5kZXg6MDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG5cblxuXG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _authservis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./authservis.service */ "./src/app/authservis.service.ts");
/* harmony import */ var _menuPages_first_first_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menuPages/first/first.component */ "./src/app/menuPages/first/first.component.ts");







let AppComponent = class AppComponent {
    constructor(dialog, atuthService) {
        this.dialog = dialog;
        this.atuthService = atuthService;
        this.title = "homepage";
        this.page = {
            title: "Home",
            subtitle: "Welcome Home!",
            content: "Some home content.",
            image: "assets/bg00.jpg"
        };
        // shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h =>
        //   h.test(window.location.host)
        // );
        this.mode = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("over");
    }
    ngOnInit() {
        document.body.classList.add('bg-img');
        if (this.atuthService.zalogowany) {
            console.log('Zalogowany z app');
        }
        else {
            console.log('NIE !!!!!!! Zalogowany z app');
        }
    }
    login() {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "550px";
        dialogConfig.height = "450px";
        dialogConfig.data = { FullName: "", Password: "" };
        const dialogRef = this.dialog.open(_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], dialogConfig);
        dialogRef.afterClosed().subscribe(data => {
            this.uzytkownik = data.FullName;
        });
    }
    openFirst() {
        const dialogConfig = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "1050px";
        dialogConfig.height = "650px";
        const dialogRef = this.dialog.open(_menuPages_first_first_component__WEBPACK_IMPORTED_MODULE_6__["FirstComponent"], dialogConfig);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _authservis_service__WEBPACK_IMPORTED_MODULE_5__["AuthservisService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-root",
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _page_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page/page.component */ "./src/app/page/page.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _shared_services_content_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/services/content.service */ "./src/app/shared/services/content.service.ts");
/* harmony import */ var _shared_directives_fullpage_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/directives/fullpage.directive */ "./src/app/shared/directives/fullpage.directive.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
/* harmony import */ var _menuPages_first_first_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./menuPages/first/first.component */ "./src/app/menuPages/first/first.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _page_page_component__WEBPACK_IMPORTED_MODULE_6__["PageComponent"],
            _shared_directives_fullpage_directive__WEBPACK_IMPORTED_MODULE_9__["FullpageDirective"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
            _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_12__["SidebarComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
            _menuPages_first_first_component__WEBPACK_IMPORTED_MODULE_18__["FirstComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_17__["ToastrModule"].forRoot(),
        ],
        providers: [_shared_services_content_service__WEBPACK_IMPORTED_MODULE_8__["ContentService"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["DatePipe"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        entryComponents: [_login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"], _menuPages_first_first_component__WEBPACK_IMPORTED_MODULE_18__["FirstComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/authservis.service.ts":
/*!***************************************!*\
  !*** ./src/app/authservis.service.ts ***!
  \***************************************/
/*! exports provided: AuthservisService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthservisService", function() { return AuthservisService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/index.js");



const jwtHelper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelperService"]();
let AuthservisService = class AuthservisService {
    constructor() { }
    loginUser(username, password) {
        if (username === 'Jarek' && password === 'password') {
            let user = {
                role: 'admin',
                id: 'Jarek'
            };
            localStorage.setItem('user', JSON.stringify(user));
            // console.log("kom z serwisu prwada");
            return true;
        }
        else {
            localStorage.removeItem("user");
            // console.log("kom z serwisu false");
            return false;
        }
    }
    zalogowany() {
        const token = localStorage.getItem("user");
        console.log("token z serwisu " + token);
        if (token) {
            return true;
        }
        else {
            return false;
        }
    }
};
AuthservisService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthservisService);



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactComponent = class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/contact/contact.component.html"),
        styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _authservis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authservis.service */ "./src/app/authservis.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");






let LoginComponent = class LoginComponent {
    constructor(dialogRef, loginService, data, toastr) {
        this.dialogRef = dialogRef;
        this.loginService = loginService;
        this.data = data;
        this.toastr = toastr;
        this.hide = true;
    }
    ngOnInit() {
        this.ngForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            FullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            Password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.ngForm.patchValue({
            FullName: "Jarek",
            Password: "passwor",
        });
    }
    get FullName() {
        return this.ngForm.get("FullName");
    }
    get Password() {
        return this.ngForm.get("Password");
    }
    getErrorMessagePassword() {
        return this.Password.hasError("required") ? "You must enter a value" : "";
    }
    save() {
        if (this.loginService.loginUser(this.FullName.value, this.Password.value)) {
            this.toastr.success("OK", 'User logged');
        }
        else {
            this.toastr.error("Wrong pass or usrename", 'Try again');
            this.ngForm.patchValue({
                FullName: "",
                Password: "",
            });
        }
        this.dialogRef.close(this.ngForm.value);
    }
    close() {
        this.ngForm.patchValue({
            FullName: "",
            Password: "",
        });
        this.dialogRef.close(this.ngForm.value);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
    { type: _authservis_service__WEBPACK_IMPORTED_MODULE_4__["AuthservisService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], LoginComponent);



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");










// import { MAT_LABEL_GLOBAL_OPTIONS } from '@angular/material/core';









let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__["MatDividerModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"]
        ],
        exports: [
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_13__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_14__["MatSidenavModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__["MatDividerModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"]
        ],
        providers: [
            {
                provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"],
                useValue: {}
            },
        ],
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/menuPages/first/first.component.css":
/*!*****************************************************!*\
  !*** ./src/app/menuPages/first/first.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnVQYWdlcy9maXJzdC9maXJzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/menuPages/first/first.component.ts":
/*!****************************************************!*\
  !*** ./src/app/menuPages/first/first.component.ts ***!
  \****************************************************/
/*! exports provided: FirstComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirstComponent", function() { return FirstComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_services_testwhether_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/testwhether.service */ "./src/app/shared/services/testwhether.service.ts");




let FirstComponent = class FirstComponent {
    constructor(dialogRef, dataService) {
        this.dialogRef = dialogRef;
        this.dataService = dataService;
    }
    ngOnInit() {
        this.getPogoda();
    }
    close() {
        this.dialogRef.close();
    }
    getPogoda() {
        this.dataService.getTestwhether().subscribe(res => {
            this.rowData = res;
            console.log(res);
        });
    }
};
FirstComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: src_app_shared_services_testwhether_service__WEBPACK_IMPORTED_MODULE_3__["TestwhetherService"] }
];
FirstComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-first',
        template: __webpack_require__(/*! raw-loader!./first.component.html */ "./node_modules/raw-loader/index.js!./src/app/menuPages/first/first.component.html"),
        styles: [__webpack_require__(/*! ./first.component.css */ "./src/app/menuPages/first/first.component.css")]
    })
], FirstComponent);



/***/ }),

/***/ "./src/app/page/page.component.css":
/*!*****************************************!*\
  !*** ./src/app/page/page.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n:host {\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\nmat-card {\n  width:500px;\n  background: rgba(255,255,255,0.9);\n}\n\nmat-card-header {\n  color: #3f51b5;\n}\n\nmat-card-content {\n  padding: 8px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsWUFBWTtFQUNaLHlCQUFtQjtVQUFuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG46aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxubWF0LWNhcmQge1xuICB3aWR0aDo1MDBweDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjkpO1xufVxuXG5tYXQtY2FyZC1oZWFkZXIge1xuICBjb2xvcjogIzNmNTFiNTtcbn1cblxubWF0LWNhcmQtY29udGVudCB7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/page/page.component.ts":
/*!****************************************!*\
  !*** ./src/app/page/page.component.ts ***!
  \****************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_services_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/content.service */ "./src/app/shared/services/content.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let PageComponent = class PageComponent {
    constructor(contentService, route) {
        this.contentService = contentService;
        this.route = route;
        this.page = {
            title: 'Home',
            subtitle: 'Welcome Home!',
            content: 'Some home content.',
            image: 'assets/bg00.jpg'
        };
    }
    ngOnInit() {
        // const pageData = this.route.snapshot.data['page'];
        //  this.page = this.contentService.pages[pageData];
    }
};
PageComponent.ctorParameters = () => [
    { type: _shared_services_content_service__WEBPACK_IMPORTED_MODULE_2__["ContentService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
PageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-page',
        template: __webpack_require__(/*! raw-loader!./page.component.html */ "./node_modules/raw-loader/index.js!./src/app/page/page.component.html"),
        styles: [__webpack_require__(/*! ./page.component.css */ "./src/app/page/page.component.css")]
    })
], PageComponent);



/***/ }),

/***/ "./src/app/shared/directives/fullpage.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/directives/fullpage.directive.ts ***!
  \*********************************************************/
/*! exports provided: FullpageDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullpageDirective", function() { return FullpageDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FullpageDirective = class FullpageDirective {
    constructor(element) {
        this.element = element;
    }
    onResize(event) {
        this.resize();
    }
    onLoad(event) {
        this.resize();
    }
    resize() {
        let bgwidth = this.element.nativeElement.width;
        let bgheight = this.element.nativeElement.height;
        let winwidth = window.innerWidth;
        let winheight = window.innerHeight;
        let widthratio = winwidth / bgwidth;
        let heightratio = winheight / bgheight;
        let widthdiff = heightratio * bgwidth;
        let heightdiff = widthratio * bgheight;
        if (heightdiff > winheight) {
            this.element.nativeElement.width = winwidth;
            this.element.nativeElement.height = heightdiff;
        }
        else {
            this.element.nativeElement.width = widthdiff;
            this.element.nativeElement.height = winheight;
        }
    }
};
FullpageDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
], FullpageDirective.prototype, "onResize", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('load', ['$event'])
], FullpageDirective.prototype, "onLoad", null);
FullpageDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appFullpage]'
    })
], FullpageDirective);



/***/ }),

/***/ "./src/app/shared/services/content.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/content.service.ts ***!
  \****************************************************/
/*! exports provided: ContentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentService", function() { return ContentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContentService = class ContentService {
    constructor() {
        this.pages = {
            'home': { title: 'Home', subtitle: 'Welcome Home!', content: 'Some home content.', image: 'assets/bg00.jpg' },
            'about': { title: 'About', subtitle: 'About Us', content: 'Some content about us.', image: 'assets/bg01.jpg' },
            'contact': { title: 'Contact', subtitle: 'Contact Us', content: 'How to contact us.', image: 'assets/bg02.jpg' }
        };
    }
};
ContentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ContentService);



/***/ }),

/***/ "./src/app/shared/services/testwhether.service.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/services/testwhether.service.ts ***!
  \********************************************************/
/*! exports provided: TestwhetherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestwhetherService", function() { return TestwhetherService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let TestwhetherService = class TestwhetherService {
    constructor(_http) {
        this._http = _http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    }
    getTestwhether() {
        return this._http.get('./WeatherForecast');
    }
    errorHandl(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
};
TestwhetherService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TestwhetherService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TestwhetherService);



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SidebarComponent = class SidebarComponent {
    constructor() { }
    ngOnInit() {
    }
};
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/sidebar/sidebar.component.html"),
        styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
    })
], SidebarComponent);



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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\programowanie\home\homePage\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map