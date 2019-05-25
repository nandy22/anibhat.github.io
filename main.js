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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/login/login.component */ "./src/app/modules/login/login.component.ts");
/* harmony import */ var _modules_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/register/register.component */ "./src/app/modules/register/register.component.ts");
/* harmony import */ var _service_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/auth-guard/auth.guard */ "./src/app/service/auth-guard/auth.guard.ts");
/* harmony import */ var _core_app_main_app_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/app-main/app-main.component */ "./src/app/core/app-main/app-main.component.ts");
/* harmony import */ var _modules_track_track_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/track/track.component */ "./src/app/modules/track/track.component.ts");
/* harmony import */ var _modules_vehicle_details_vehicle_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/vehicle-details/vehicle-details.component */ "./src/app/modules/vehicle-details/vehicle-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    {
        path: '', component: _core_app_main_app_main_component__WEBPACK_IMPORTED_MODULE_5__["AppMainComponent"], canActivate: [_service_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]], children: [
            { path: '', component: _modules_track_track_component__WEBPACK_IMPORTED_MODULE_6__["TrackComponent"] },
            { path: 'track/track', component: _modules_track_track_component__WEBPACK_IMPORTED_MODULE_6__["TrackComponent"] },
            { path: 'reports/dashboard', component: _modules_vehicle_details_vehicle_details_component__WEBPACK_IMPORTED_MODULE_7__["VehicleDetailsComponent"] },
        ]
    },
    { path: 'login', component: _modules_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"] },
    { path: 'register', component: _modules_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: '**', component: _core_app_main_app_main_component__WEBPACK_IMPORTED_MODULE_5__["AppMainComponent"], children: [
            { path: '', component: _modules_track_track_component__WEBPACK_IMPORTED_MODULE_6__["TrackComponent"] },
        ] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n<div class=\"wrapper\">\n  <app-left-nav></app-left-nav>\n  <div class=\"content\">\n    <app-alert></app-alert>\n    <div class=\"content-fixed-footer\">\n      <header class=\"app-header\"><app-header></app-header></header>\n      <main class=\"app-main\"><router-outlet></router-outlet></main>\n    </div>\n    <footer class=\"app-footer\"><app-footer></app-footer></footer>\n  </div>\n</div>\n-->\n\n<div>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*******transition*********/\n/**********colors**************/\n/******heigt/padding/margin*******/\n"

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
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/tooltip */ "./node_modules/ngx-bootstrap/tooltip/fesm5/ngx-bootstrap-tooltip.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_app_main_app_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/app-main/app-main.component */ "./src/app/core/app-main/app-main.component.ts");
/* harmony import */ var _core_app_content_app_content_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/app-content/app-content.component */ "./src/app/core/app-content/app-content.component.ts");
/* harmony import */ var _core_header_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony import */ var _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/footer/footer.component */ "./src/app/core/footer/footer.component.ts");
/* harmony import */ var _core_left_nav_left_nav_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/left-nav/left-nav.component */ "./src/app/core/left-nav/left-nav.component.ts");
/* harmony import */ var _core_alert_alert_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./core/alert/alert.component */ "./src/app/core/alert/alert.component.ts");
/* harmony import */ var _core_notification_notification_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./core/notification/notification.component */ "./src/app/core/notification/notification.component.ts");
/* harmony import */ var _core_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./core/page-not-found/page-not-found.component */ "./src/app/core/page-not-found/page-not-found.component.ts");
/* harmony import */ var _modules_login_login_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/login/login.component */ "./src/app/modules/login/login.component.ts");
/* harmony import */ var _modules_register_register_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modules/register/register.component */ "./src/app/modules/register/register.component.ts");
/* harmony import */ var _service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./service/auth-service/auth.service */ "./src/app/service/auth-service/auth.service.ts");
/* harmony import */ var _service_auth_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./service/auth-service/auth-guard.service */ "./src/app/service/auth-service/auth-guard.service.ts");
/* harmony import */ var _service_alert_service_alert_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./service/alert-service/alert.service */ "./src/app/service/alert-service/alert.service.ts");
/* harmony import */ var _service_nav_service_nav_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./service/nav-service/nav.service */ "./src/app/service/nav-service/nav.service.ts");
/* harmony import */ var _service_login_service_login_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./service/login-service/login.service */ "./src/app/service/login-service/login.service.ts");
/* harmony import */ var _service_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./service/auth-guard/auth.guard */ "./src/app/service/auth-guard/auth.guard.ts");
/* harmony import */ var _modules_track_track_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./modules/track/track.component */ "./src/app/modules/track/track.component.ts");
/* harmony import */ var _modules_events_events_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./modules/events/events.component */ "./src/app/modules/events/events.component.ts");
/* harmony import */ var _service_auth_service_authentication_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./service/auth-service/authentication.service */ "./src/app/service/auth-service/authentication.service.ts");
/* harmony import */ var _modules_reports_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./modules/reports/dashboard/dashboard.component */ "./src/app/modules/reports/dashboard/dashboard.component.ts");
/* harmony import */ var _modules_map_map_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./modules/map/map.component */ "./src/app/modules/map/map.component.ts");
/* harmony import */ var _modules_vehicle_details_vehicle_details_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./modules/vehicle-details/vehicle-details.component */ "./src/app/modules/vehicle-details/vehicle-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { routing } from './app.routing';


// import { ReactiveFormsModule } from '@angular/forms';





// import { GalleryModule } from '@/modules/gallery-module';






// import { HomeComponent } from './modules/home/home.component';















// import { HeaderNavComponent } from './core/header-nav/header-nav.component';
// import { NewCollectionComponent } from './modules/home/new-collection';
// import { DealOfDayComponent } from './modules/home/deal-of-day';
// import { HotDealsComponent } from './modules/home/hot-deals';
// import { ProductDetailComponent } from './modules/product-detail/product-detail';
// import { ListGridComponent } from './modules/list-grid/list-grid';
// import { CheckoutComponent } from './modules/checkout/checkout';


// import { VehicleDetailsService } from './modules/vehicle-details/vehicle-details.service';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _core_header_header_component__WEBPACK_IMPORTED_MODULE_12__["HeaderComponent"],
                _core_footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                _core_alert_alert_component__WEBPACK_IMPORTED_MODULE_15__["AlertComponent"],
                _core_notification_notification_component__WEBPACK_IMPORTED_MODULE_16__["NotificationComponent"],
                _core_left_nav_left_nav_component__WEBPACK_IMPORTED_MODULE_14__["LeftNavComponent"],
                _core_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_17__["PageNotFoundComponent"],
                _modules_register_register_component__WEBPACK_IMPORTED_MODULE_19__["RegisterComponent"],
                _modules_login_login_component__WEBPACK_IMPORTED_MODULE_18__["LoginComponent"],
                _core_app_main_app_main_component__WEBPACK_IMPORTED_MODULE_10__["AppMainComponent"],
                _core_app_content_app_content_component__WEBPACK_IMPORTED_MODULE_11__["AppContentComponent"],
                _modules_track_track_component__WEBPACK_IMPORTED_MODULE_26__["TrackComponent"],
                _modules_events_events_component__WEBPACK_IMPORTED_MODULE_27__["EventsComponent"],
                _modules_map_map_component__WEBPACK_IMPORTED_MODULE_30__["MapComponent"],
                _modules_vehicle_details_vehicle_details_component__WEBPACK_IMPORTED_MODULE_31__["VehicleDetailsComponent"],
                _modules_reports_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_29__["DashboardComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["NoopAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_6__["TableModule"],
                ngx_bootstrap_tooltip__WEBPACK_IMPORTED_MODULE_7__["TooltipModule"].forRoot(),
                _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyDMBfG_KAED_HUd6eci5U6bGXORfaO0r7s'
                }),
            ],
            exports: [],
            providers: [
                _service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_20__["AuthService"],
                _service_auth_service_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuardService"],
                _service_alert_service_alert_service__WEBPACK_IMPORTED_MODULE_22__["AlertService"],
                _service_nav_service_nav_service__WEBPACK_IMPORTED_MODULE_23__["NavService"],
                _service_login_service_login_service__WEBPACK_IMPORTED_MODULE_24__["LoginService"],
                _service_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_25__["AuthGuard"],
                _service_auth_service_authentication_service__WEBPACK_IMPORTED_MODULE_28__["AuthenticationService"],
                _agm_core__WEBPACK_IMPORTED_MODULE_8__["GoogleMapsAPIWrapper"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/alert/alert.component.html":
/*!*************************************************!*\
  !*** ./src/app/core/alert/alert.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"message\" [ngClass]=\"{'alert': message, 'alert-success': message.type === 'success', 'alert-danger': mesage.type === 'error'}\">{{message.text}}</div>\n"

/***/ }),

/***/ "./src/app/core/alert/alert.component.scss":
/*!*************************************************!*\
  !*** ./src/app/core/alert/alert.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/alert/alert.component.ts":
/*!***********************************************!*\
  !*** ./src/app/core/alert/alert.component.ts ***!
  \***********************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_alert_service_alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/alert-service/alert.service */ "./src/app/service/alert-service/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/core/alert/alert.component.html"),
            styles: [__webpack_require__(/*! ./alert.component.scss */ "./src/app/core/alert/alert.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_alert_service_alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/core/app-content/app-content.component.html":
/*!*************************************************************!*\
  !*** ./src/app/core/app-content/app-content.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-content-container\">\n  <div class=\"app-content-shadow\"><router-outlet></router-outlet></div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/core/app-content/app-content.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/core/app-content/app-content.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-content-container {\n  padding: 15px;\n  background-color: #f1f5f8; }\n  .app-content-container .app-content-shadow {\n    position: relative;\n    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset; }\n  .app-content-container .app-content-shadow :before, .app-content-container .app-content-shadow :after {\n    content: \"\";\n    position: absolute;\n    z-index: -1;\n    box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);\n    top: 10px;\n    bottom: 10px;\n    left: 0;\n    right: 0;\n    border-radius: 100px / 10px; }\n  .app-content-container .app-content-shadow :after {\n    right: 10px;\n    left: auto;\n    -webkit-transform: skew(8deg) rotate(3deg);\n    transform: skew(8deg) rotate(3deg); }\n"

/***/ }),

/***/ "./src/app/core/app-content/app-content.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/app-content/app-content.component.ts ***!
  \***********************************************************/
/*! exports provided: AppContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContentComponent", function() { return AppContentComponent; });
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

var AppContentComponent = /** @class */ (function () {
    function AppContentComponent() {
    }
    AppContentComponent.prototype.ngOnInit = function () {
    };
    AppContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-app-content',
            template: __webpack_require__(/*! ./app-content.component.html */ "./src/app/core/app-content/app-content.component.html"),
            styles: [__webpack_require__(/*! ./app-content.component.scss */ "./src/app/core/app-content/app-content.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppContentComponent);
    return AppContentComponent;
}());



/***/ }),

/***/ "./src/app/core/app-main/app-main.component.html":
/*!*******************************************************!*\
  !*** ./src/app/core/app-main/app-main.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"wrapper\">\n    <!-- Left Navigation -->\n    <app-left-nav></app-left-nav>\n    <!-- Page Content  -->\n    <div class=\"content\">\n        <app-alert></app-alert>\n        <header class=\"app-header\"><app-header></app-header></header>\n        <main class=\"app-main\"><app-app-content></app-app-content></main>\n        <!-- <div class=\"content-fixed-footer\">\n\n        </div>\n        <footer class=\"app-footer\"><app-footer></app-footer></footer> -->\n      </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/core/app-main/app-main.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/core/app-main/app-main.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/app-main/app-main.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/app-main/app-main.component.ts ***!
  \*****************************************************/
/*! exports provided: AppMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMainComponent", function() { return AppMainComponent; });
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

var AppMainComponent = /** @class */ (function () {
    function AppMainComponent() {
    }
    AppMainComponent.prototype.ngOnInit = function () {
    };
    AppMainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-app-main',
            template: __webpack_require__(/*! ./app-main.component.html */ "./src/app/core/app-main/app-main.component.html"),
            styles: [__webpack_require__(/*! ./app-main.component.scss */ "./src/app/core/app-main/app-main.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppMainComponent);
    return AppMainComponent;
}());



/***/ }),

/***/ "./src/app/core/footer/footer.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/footer/footer.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/footer/footer.component.scss":
/*!***************************************************!*\
  !*** ./src/app/core/footer/footer.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
        /*
        $(document).ready(function() {
          $('#querySelect').click(function() {
              const div = $('#querySelect');
              div.animate({left: '100px'}, 'slow');
              div.animate({fontSize: '5em'}, 'slow');
          });
        });
        */
        /*
        ----- Also works without document.ready -----
        $('#querySelect').click(function() {
          const div = $('#querySelect');
          div.animate({left: '100px'}, 'slow');
          div.animate({fontSize: '5em'}, 'slow');
        });
        */
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/core/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/core/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/core/header/header.component.html":
/*!***************************************************!*\
  !*** ./src/app/core/header/header.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<header class=\"main-header\">\n    <!-- <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n        <div class=\"container-fluid\">\n\n        </div>\n    </nav> -->\n    <div class=\"header-bar verticle-center-parent\">\n      <div class=\"header-container pull-left\">\n          <h4 class=\"header-title verticle-center-element\">Page Title</h4>\n      </div>\n      <div class=\"header-container pull-right\">\n        <ul class=\"navbar-nav flex-direction-row\">\n            <li class=\"nav-item active\">\n              <a class=\"nav-link nav-link-custom\" href=\"#\"><i class=\"fa fa-neuter rotate-minus-45 font-size-16 \" aria-hidden=\"true\"></i></a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link nav-link-custom\" href=\"#\"><i class=\"fa fa-envelope-o font-size-16 \" aria-hidden=\"true\"></i></a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link nav-link-custom\" href=\"#\"><i class=\"fa fa-bell-o font-size-16 \" aria-hidden=\"true\"></i></a>\n            </li>\n            <li class=\"nav-item dropdown\">\n              <a class=\"nav-link nav-link-custom dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                {{'Prasanna'}}\n              </a>\n              <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n                <a class=\"dropdown-item\" href=\"#\">Profile</a>\n                <a class=\"dropdown-item\" href=\"#\" (click)=\"userLogout()\">Log Out</a>\n              </div>\n            </li>\n          </ul>\n      </div>\n\n      <!--<div class=\"pull-right clearAfter\">\n         <a routerLink=\"/adminPannel\">C-pannel</a> |\n        <a routerLink=\"/webStore\" href=\"\">Web-store</a>\n        <a routerLink=\"/adminPannel\">C-pannel</a> |\n        <a routerLink=\"/webstore\">Web-store</a>\n      </div>\n      -->\n      <!-- <div class=\"pull-right clearAfter\">\n        <div class=\"header-top-icons\">\n          <ul class=\"list-line-li\">\n            <li><i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i></li>\n            <li><a routerLink=\"/notification/hello\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i></a></li>\n            <li><a [routerLink]=\"['/notification', 'edit']\" [queryParams]=\"{allowEdit: '1', status: true}\" fragment=\"loading\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i></a></li>\n            <li><a (click)=\"goToNavigationPage()\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i></a></li>\n            <li><a [routerLink]=\"['/settings', 2, 'Sharath']\"><i class=\"fa fa-address-card\" aria-hidden=\"true\"></i></a></li>\n          </ul>\n        </div>\n      </div> -->\n\n    </div>\n\n  </header>\n  <!-- (click)=\"userLogout()\" -->\n\n  <!--\n<ul class=\"navbar-nav\">\n            <li class=\"nav-item active\">\n              <a class=\"nav-link nav-link-custom\" href=\"#\"><i class=\"fa fa-neuter rotate-minus-45 font-size-16 \" aria-hidden=\"true\"></i></a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link nav-link-custom\" href=\"#\"><i class=\"fa fa-envelope-o font-size-16 \" aria-hidden=\"true\"></i></a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link nav-link-custom\" href=\"#\"><i class=\"fa fa-bell-o font-size-16 \" aria-hidden=\"true\"></i></a>\n            </li>\n            <li class=\"nav-item dropdown\">\n              <a class=\"nav-link nav-link-custom dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                {{'Prasanna'}}\n              </a>\n              <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n                <a class=\"dropdown-item\" href=\"#\">Profile</a>\n                <a class=\"dropdown-item\" href=\"#\" (click)=\"userLogout()\">Log Out</a>\n              </div>\n            </li>\n          </ul>\n   -->\n"

/***/ }),

/***/ "./src/app/core/header/header.component.scss":
/*!***************************************************!*\
  !*** ./src/app/core/header/header.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-bar {\n  background-color: #333;\n  height: 66px;\n  padding: 15px; }\n  .header-bar .header-container .navbar-nav .nav-link-custom {\n    padding: 5px 20px;\n    border-left: 1px solid #6f6f6f; }\n  .header-bar .header-container .navbar-nav .nav-item .dropdown-menu {\n    top: 144%;\n    left: -46px;\n    padding: 10px;\n    background-color: #e3e9ee; }\n  .header-bar .header-container .navbar-nav .nav-item .dropdown-menu .dropdown-item {\n      color: #4a4848;\n      display: inline-block;\n      width: 100%;\n      text-align: right;\n      font-weight: 500;\n      padding: 5px 0; }\n  .header-title {\n  margin: 0;\n  padding: 0 0 0 45px;\n  font-size: 20px;\n  color: #fff;\n  display: inline-block;\n  font-weight: 500; }\n  .header-top-icons {\n  margin-right: 20px; }\n  .header-top-icons ul li {\n    font-size: 18px;\n    padding: 5px;\n    width: 40px;\n    text-align: center; }\n  .header-top-icons ul li i {\n      color: #fff; }\n  .rotate-minus-45 {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg); }\n"

/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_auth_service_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/auth-service/authentication.service */ "./src/app/service/auth-service/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.userLogout = function (values) {
        // this.LoginService.processLogout();
        // this.navService.userSession.next({storeId: 'web-store', navId: 'guest'});
        // this.authService.logout();
        this.authenticationService.logout();
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/core/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/core/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _service_auth_service_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/left-nav/left-nav.component.html":
/*!*******************************************************!*\
  !*** ./src/app/core/left-nav/left-nav.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"sidebar\" class=\"position-relative\">\n  <div class=\"vertical-height\">\n  <div class=\"sidebar-header verticle-center-parent\">\n    <h3 class=\"verticle-center-element\">Fleet Track</h3>\n    <strong class=\"verticle-center-element\">FT</strong>\n  </div>\n  <span id=\"sidebarCollapse\" class=\"slidebar-icon slidebar-position\">\n    <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\n  </span>\n  <div class=\"nav-bar-container\">\n    <ul class=\"nav-bar-container-ul\">\n        <li class=\"nav-bar-container-item\" *ngFor=\"let level1 of navData\">\n          <div class=\"nav-list-dropdown\" [ngClass]=\"[level1.isOpen ? 'level-active' : '']\">\n            <span class=\"nav-main-icon\" (click)=\"showContent(level1)\"><i [ngClass]=\"['fa', level1.icon]\" aria-hidden=\"true\"></i></span>\n            <span class=\"nav-main-text\">{{level1.text}}</span>\n            <i class=\"menu-toggle-icon\" (click)=\"showContent(level1)\" [ngClass]=\"[level1.isOpen ? 'fa fa-angle-down' : 'fa fa-angle-left']\"></i>\n          </div>\n          <ul class=\"nav-bar-container-ul-level2\" [hidden]=\"!level1.isOpen\">\n            <li class=\"nav-bar-container-item-level2\" *ngFor=\"let level2 of level1.children\">\n              <a class=\"anchor-link\" [routerLink]=\"level2.route\">{{level2.text}}</a>\n            </li>\n          </ul>\n        </li>\n      </ul>\n  </div>\n\n  <!-- <ul class=\"list-unstyled components\">\n    <li><a routerLink=\"/register/test\">Test Component</a></li>\n    <li><a routerLink=\"/webstore/organization\">Web store - organization</a></li>\n    <li><a routerLink=\"/webstore/user-mgmt\">Web store - User Mgmt</a></li>\n    <li><a routerLink=\"/adminPannel/organization\">Admin Pannel - organization</a></li>\n    <li><a routerLink=\"/adminPannel/user-mgmt\">Admin Pannel - User Mgmt</a></li>\n  </ul> -->\n\n  <!-- <ul class=\"list-unstyled components\">\n      <li *ngFor=\"let level1 of navData\">\n        <a>{{item.text}}</a>\n        <ul class=\"collapse list-unstyled\">\n          <li *ngFor=\"let level2 of level1.children\">\n            <a [routerLink]=\"level2.route\">{{level2.text}}</a>\n          </li>\n        </ul>\n      </li>\n    </ul> -->\n</div>\n</nav>\n"

/***/ }),

/***/ "./src/app/core/left-nav/left-nav.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/core/left-nav/left-nav.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#sidebar {\n  min-width: 250px;\n  max-width: 250px;\n  transition: all 0.3s;\n  font-weight: 500;\n  background: #e3e9ee;\n  color: #4b4b4b;\n  box-shadow: 0 2px 12px 0 #dfe3eb;\n  /* border-right: 1px solid #cdd5dc; */ }\n\n/* Shrinking the sidebar from 250px to 80px and center aligining its content*/\n\n#sidebar.active {\n  min-width: 80px;\n  max-width: 80px;\n  text-align: center; }\n\n.slidebar-icon {\n  color: #fff;\n  font-size: 21px;\n  display: inline-block;\n  cursor: pointer;\n  z-index: 1; }\n\n.slidebar-position {\n  position: absolute;\n  right: -38px;\n  top: 19px; }\n\n/* Toggling the sidebar header content, hide the big heading [h3] and showing the small heading [strong] and vice versa*/\n\n.sidebar-header {\n  height: 66px;\n  background: #333;\n  box-shadow: 0px 2px 4px #752f2f;\n  border-right: 1px solid #444; }\n\n.sidebar-header h3 {\n  color: #fff;\n  width: 100%;\n  text-align: center; }\n\n.sidebar-header strong {\n  font-size: 20px;\n  width: 100%;\n  text-align: center; }\n\n#sidebar .sidebar-header strong {\n  display: none;\n  color: #fff; }\n\n#sidebar.active .sidebar-header h3 {\n  display: none;\n  color: #fff; }\n\n#sidebar.active .sidebar-header strong {\n  display: block;\n  color: #fff; }\n\n#sidebar.active .nav-bar-container .nav-bar-container-ul .nav-bar-container-item .nav-list-dropdown .nav-main-text {\n  display: none; }\n\n#sidebar.active .nav-bar-container .nav-bar-container-ul .nav-bar-container-item .nav-list-dropdown .menu-toggle-icon {\n  display: none; }\n\n#sidebar ul li a {\n  text-align: left; }\n\n#sidebar.active ul li a {\n  padding: 20px 10px;\n  text-align: center;\n  font-size: 0.85em; }\n\n#sidebar.active ul li a i {\n  margin-right: 0;\n  display: block;\n  font-size: 1.8em;\n  margin-bottom: 5px; }\n\n/* Same dropdown links padding*/\n\n#sidebar.active ul ul a {\n  padding: 10px !important; }\n\n#sidebar .nav-bar-container {\n  border-right: 1px solid #cdd5dc; }\n\n.nav-bar-container .nav-bar-container-ul .nav-bar-container-item {\n  border-bottom: 1px solid #cdd5dc;\n  position: relative; }\n\n.nav-bar-container .nav-bar-container-ul .nav-bar-container-item .nav-list-dropdown {\n    padding: 10px;\n    display: flex;\n    justify-content: center; }\n\n.nav-bar-container .nav-bar-container-ul .nav-bar-container-item .nav-list-dropdown .nav-main-icon {\n      font-size: 22px;\n      width: 30px;\n      display: inline-block;\n      text-align: center; }\n\n.nav-bar-container .nav-bar-container-ul .nav-bar-container-item .nav-list-dropdown .nav-main-text {\n      width: calc(100% - 55px);\n      display: inline-block;\n      line-height: 31px;\n      font-size: 16px;\n      margin-left: 10px; }\n\n.nav-bar-container .nav-bar-container-ul .nav-bar-container-item .nav-bar-container-ul-level2 {\n    background-color: #e3e9ee;\n    overflow: hidden; }\n\n.nav-bar-container .nav-bar-container-ul .nav-bar-container-item .nav-bar-container-ul-level2 .nav-bar-container-item-level2 {\n      padding: 0 15px 0 25px;\n      font-size: 14px; }\n\n.nav-bar-container .nav-bar-container-ul .nav-bar-container-item .nav-bar-container-ul-level2 .nav-bar-container-item-level2 .anchor-link {\n        padding: 7px 0;\n        display: flex; }\n\n#sidebar.active .nav-bar-container .nav-bar-container-ul .nav-bar-container-item .nav-bar-container-ul-level2 {\n  position: absolute;\n  top: 2px;\n  left: 81px;\n  transition: all 0.5s;\n  border: 1px solid #cdd5dc;\n  border-radius: 3px;\n  z-index: 1; }\n\n#sidebar.active .nav-bar-container .nav-bar-container-ul .nav-bar-container-item .nav-bar-container-ul-level2 .nav-bar-container-item-level2 {\n    padding: 0 5px;\n    width: 180px; }\n\n#sidebar.active .nav-bar-container .nav-bar-container-ul .nav-bar-container-item .nav-bar-container-ul-level2 .nav-bar-container-item-level2 .anchor-link {\n      padding: 10px 5px !important;\n      border-bottom: 1px solid #cdd5dc; }\n\n/* Changing the arrow position to bottom center position,\n translateX(50%) works with right: 50%\n to accurately  center the arrow */\n\n#sidebar.active .dropdown-toggle::after {\n  top: auto;\n  bottom: 10px;\n  right: 50%;\n  -webkit-transform: translateX(50%);\n  transform: translateX(50%); }\n\n@media (max-width: 768px) {\n  /* 80px and its content aligned to centre. Pushing it off the screen with the\n     negative left margin\n  */\n  #sidebar.active {\n    min-width: 80px;\n    max-width: 80px;\n    text-align: center;\n    margin-left: -80px !important; }\n  /* Reappearing the sidebar on toggle button click */\n  #sidebar {\n    margin-left: 0; }\n  /* Toggling the sidebar header content,\n     hide the big heading [h3] and showing the small heading [strong] and vice versa\n  */\n  #sidebar .sidebar-header strong {\n    display: none; }\n  #sidebar.active .sidebar-header h3 {\n    display: none; }\n  #sidebar.active .sidebar-header strong {\n    display: block; }\n  #sidebar.active .nav-bar-container .nav-bar-container-ul .nav-bar-container-item .nav-list-dropdown .nav-main-text {\n    display: none; }\n  #sidebar.active .menu-toggle-icon {\n    display: none; }\n  /* Downsize the navigation links font size */\n  #sidebar.active ul li a {\n    padding: 20px 10px;\n    font-size: 0.85em; }\n  #sidebar.active ul li a i {\n    margin-right: 0;\n    display: block;\n    font-size: 1.8em;\n    margin-bottom: 5px; }\n  /* Adjust the dropdown links padding*/\n  #sidebar.active ul ul a {\n    padding: 10px !important; }\n  /* Changing the arrow position to bottom center position,\n    translateX(50%) works with right: 50%\n    to accurately  center the arrow */\n  .dropdown-toggle::after {\n    top: auto;\n    bottom: 10px;\n    right: 50%;\n    -webkit-transform: translateX(50%);\n    transform: translateX(50%); } }\n\n.menu-toggle-icon {\n  padding: 3px;\n  cursor: pointer;\n  font-size: 20px; }\n\n.nav-list-dropdown {\n  transition: 0.9s; }\n"

/***/ }),

/***/ "./src/app/core/left-nav/left-nav.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/left-nav/left-nav.component.ts ***!
  \*****************************************************/
/*! exports provided: LeftNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftNavComponent", function() { return LeftNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _service_nav_service_nav_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/nav-service/nav.service */ "./src/app/service/nav-service/nav.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var LeftNavComponent = /** @class */ (function () {
    function LeftNavComponent(document, navService) {
        this.navService = navService;
    }
    LeftNavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navService.navTree.subscribe(function (data) {
            _this.navData = data;
        });
    };
    LeftNavComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.sidebarCollapse = document.getElementById('sidebarCollapse');
        this.sidebar = document.getElementById('sidebar');
        this.sidebarCollapse.addEventListener('click', function (e, test) {
            if (test === void 0) { test = 'demo'; }
            _this.slideLeftNav(e, test);
        });
    };
    LeftNavComponent.prototype.slideLeftNav = function (e, test) {
        e.preventDefault();
        e.stopPropagation();
        var sidebarElement = this.sidebar;
        if (sidebarElement.classList.contains('active')) {
            sidebarElement.classList.remove('active');
        }
        else {
            sidebarElement.classList.add('active');
            this.closeAllLevels();
        }
    };
    LeftNavComponent.prototype.showContent = function (level) {
        if (!level.isOpen) {
            this.closeAllLevels();
        }
        level.isOpen = !level.isOpen;
    };
    LeftNavComponent.prototype.closeAllLevels = function () {
        this.navData.forEach(function (level) {
            level.isOpen = false;
        });
    };
    LeftNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-left-nav',
            template: __webpack_require__(/*! ./left-nav.component.html */ "./src/app/core/left-nav/left-nav.component.html"),
            styles: [__webpack_require__(/*! ./left-nav.component.scss */ "./src/app/core/left-nav/left-nav.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [Object, _service_nav_service_nav_service__WEBPACK_IMPORTED_MODULE_2__["NavService"]])
    ], LeftNavComponent);
    return LeftNavComponent;
}());



/***/ }),

/***/ "./src/app/core/notification/notification.component.html":
/*!***************************************************************!*\
  !*** ./src/app/core/notification/notification.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  notification works!\n</p>\n"

/***/ }),

/***/ "./src/app/core/notification/notification.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/core/notification/notification.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/notification/notification.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/core/notification/notification.component.ts ***!
  \*************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationComponent = /** @class */ (function () {
    function NotificationComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.status = { queryParams: null, fragment: '' };
    }
    NotificationComponent.prototype.ngOnInit = function () {
        // console.log(this.activatedRoute.snapshot.queryParams);
        // console.log(this.activatedRoute.snapshot.fragment);
        this.activatedRoute.queryParams.subscribe(function (queryParams) {
            console.log(queryParams);
        });
        this.activatedRoute.fragment.subscribe(function (fragment) {
            console.log(fragment);
        });
    };
    NotificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notification',
            template: __webpack_require__(/*! ./notification.component.html */ "./src/app/core/notification/notification.component.html"),
            styles: [__webpack_require__(/*! ./notification.component.scss */ "./src/app/core/notification/notification.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/core/page-not-found/page-not-found.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/core/page-not-found/page-not-found.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  This page was not found.\n</p>\n"

/***/ }),

/***/ "./src/app/core/page-not-found/page-not-found.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/core/page-not-found/page-not-found.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/core/page-not-found/page-not-found.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/page-not-found/page-not-found.component.ts ***!
  \*****************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
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

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/core/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/core/page-not-found/page-not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/modules/events/events.component.html":
/*!******************************************************!*\
  !*** ./src/app/modules/events/events.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  events works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/events/events.component.scss":
/*!******************************************************!*\
  !*** ./src/app/modules/events/events.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/events/events.component.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/events/events.component.ts ***!
  \****************************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
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

var EventsComponent = /** @class */ (function () {
    function EventsComponent() {
    }
    EventsComponent.prototype.ngOnInit = function () {
    };
    EventsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-events',
            template: __webpack_require__(/*! ./events.component.html */ "./src/app/modules/events/events.component.html"),
            styles: [__webpack_require__(/*! ./events.component.scss */ "./src/app/modules/events/events.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "./src/app/modules/login/login.component.html":
/*!****************************************************!*\
  !*** ./src/app/modules/login/login.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--\n<h2>Login</h2>\n<form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit(loginForm.value)\">\n    <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n        <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.username.errors.required\">Username is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <button [disabled]=\"loading\" type=\"submit\" class=\"btn btn-primary\">Login</button>\n        <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n        <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a>\n    </div>\n</form>\n<br>\n<br>\n-->\n<!--\n<p>Super Incharge login <button class=\"btn btn-primary\" (click)=\"userLogin('web-store', 'super-incharge')\">Login</button></p>\n<p>Super Incharge logout <button class=\"btn btn-primary\" (click)=\"userLogout()\">Logout</button></p>\n<br><br>\n\n<p>Incharge login <button class=\"btn btn-primary\" (click)=\"userLogin('web-store', 'incharge')\">Login</button></p>\n<p>Incharge logout <button class=\"btn btn-primary\" (click)=\"userLogout()\">Logout</button></p>\n<br><br>\n\n<p>End User login <button class=\"btn btn-primary\" (click)=\"userLogin('web-store', 'end-user')\">Login</button></p>\n<p>End User logout <button class=\"btn btn-primary\" (click)=\"userLogout()\">Logout</button></p>\n<br><br> -->\n<div [ngClass]=\"{'right-panel-active': signupClicked}\" class=\"container\" id=\"container\">\n  <div class=\"form-container sign-up-container\">\n      <!-- Sign Up form code goes here -->\n    <form action=\"#\">\n      <h1>Create Account</h1>\n      <!-- <div class=\"social-container\">\n          <a href=\"#\" class=\"social\"><i class=\"fab fa-facebook-f\"></i></a>\n          <a href=\"#\" class=\"social\"><i class=\"fab fa-google-plus-g\"></i></a>\n          <a href=\"#\" class=\"social\"><i class=\"fab fa-linkedin-in\"></i></a>\n      </div> -->\n      <span>or use your email for registration</span>\n      <input type=\"text\" placeholder=\"Name\" />\n      <input type=\"email\" placeholder=\"Email\" />\n      <input type=\"password\" placeholder=\"Password\" />\n      <button>Sign Up</button>\n  </form>\n</div>\n  <div class=\"form-container sign-in-container\">\n      <!-- Sign In form code goes here -->\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit(loginForm.value)\">\n      <h1>Sign in</h1>\n      <!-- <div class=\"social-container\">\n          <a href=\"#\" class=\"social\"><i class=\"fab fa-facebook-f\"></i></a>\n          <a href=\"#\" class=\"social\"><i class=\"fab fa-google-plus-g\"></i></a>\n          <a href=\"#\" class=\"social\"><i class=\"fab fa-linkedin-in\"></i></a>\n      </div> -->\n      <span>or use your account</span>\n      <input type=\"email\" formControlName=\"username\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" placeholder=\"Email\" />\n      <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.username.errors.required\">Username is required</div>\n      </div>\n      <input type=\"password\" formControlName=\"password\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" placeholder=\"Password\" />\n      <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n          <div *ngIf=\"f.password.errors.required\">Password is required</div>\n      </div>\n      <a href=\"#\">Forgot your password?</a>\n      <button [disabled]=\"loading\" type=\"submit\">Sign In</button>\n    </form>\n  </div>\n  <div class=\"overlay-container\">\n      <!-- The overlay code goes here -->\n    <div class=\"overlay\">\n      <div class=\"overlay-panel overlay-left\">\n          <h1>Welcome Back!</h1>\n          <p>\n              To keep connected with us please login\n          </p>\n          <button (click)=\"onSignInClick()\" class=\"ghost\" id=\"signIn\">Sign In</button>\n      </div>\n      <div class=\"overlay-panel overlay-right\">\n          <h1>Hello, User!</h1>\n          <p>Enter your personal details to create an account</p>\n          <button (click)=\"onSignUpClick()\" class=\"ghost\" id=\"signUp\">Sign Up</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/login/login.component.scss":
/*!****************************************************!*\
  !*** ./src/app/modules/login/login.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n  font-weight: bold;\n  margin: 0; }\n\np {\n  font-size: 14px;\n  font-weight: 100;\n  line-height: 20px;\n  letter-spacing: 0.5px;\n  margin: 20px 0 30px; }\n\nspan {\n  font-size: 12px; }\n\na {\n  color: #333;\n  font-size: 14px;\n  text-decoration: none;\n  margin: 15px 0; }\n\nbutton {\n  border-radius: 20px;\n  border: 1px solid #FF4B2B;\n  background-color: #FF4B2B;\n  color: #ffffff;\n  font-size: 12px;\n  font-weight: bold;\n  padding: 12px 45px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  transition: -webkit-transform 80ms ease-in;\n  transition: transform 80ms ease-in;\n  transition: transform 80ms ease-in, -webkit-transform 80ms ease-in; }\n\nbutton:active {\n  -webkit-transform: scale(0.95);\n          transform: scale(0.95); }\n\nbutton:focus {\n  outline: none; }\n\nbutton.ghost {\n  background-color: transparent;\n  border-color: #ffffff; }\n\nform {\n  background-color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 0 50px;\n  height: 100%;\n  text-align: center; }\n\ninput {\n  background-color: #eee;\n  border: none;\n  padding: 12px 15px;\n  margin: 8px 0;\n  width: 100%; }\n\n.social-container {\n  margin: 20px 0; }\n\n.social-container a {\n  border: 1px solid #dddddd;\n  border-radius: 50%;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 5px;\n  height: 40px;\n  width: 40px; }\n\n.container {\n  /*\n  margin: 5% auto;\n  background-color: #ffffff;\n  border-radius: 5px;\n  box-shadow: 0 0 3px 2px rgba(0,0,0,.05);\n  position: relative;\n  overflow: hidden;\n  font-family: \"Open Sans\";\n  min-height: 480px;\n  */\n  background-color: #fff;\n  border-radius: 10px;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n  overflow: hidden;\n  width: 768px;\n  max-width: 100%;\n  min-height: 480px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.form-container {\n  position: absolute;\n  top: 0;\n  height: 100%;\n  transition: all 0.6s ease-in-out; }\n\n.sign-in-container {\n  left: 0;\n  width: 50%;\n  z-index: 2; }\n\n.sign-up-container {\n  left: 0;\n  width: 50%;\n  opacity: 0;\n  z-index: 1; }\n\n.container.right-panel-active .sign-in-container {\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%); }\n\n.container.right-panel-active .sign-up-container {\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%);\n  opacity: 1;\n  z-index: 5;\n  -webkit-animation: show 0.6s;\n          animation: show 0.6s; }\n\n@-webkit-keyframes show {\n  0%,\n  49.99% {\n    opacity: 0;\n    z-index: 1; }\n  50%,\n  100% {\n    opacity: 1;\n    z-index: 5; } }\n\n@keyframes show {\n  0%,\n  49.99% {\n    opacity: 0;\n    z-index: 1; }\n  50%,\n  100% {\n    opacity: 1;\n    z-index: 5; } }\n\n/*--------------------------------------*/\n\n.overlay-container {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  width: 50%;\n  height: 100%;\n  overflow: hidden;\n  transition: -webkit-transform 0.6s ease-in-out;\n  transition: transform 0.6s ease-in-out;\n  transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out;\n  z-index: 100; }\n\n.container.right-panel-active .overlay-container {\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%); }\n\n.overlay {\n  background: #FF416C;\n  background: linear-gradient(to right, #FF4B2B, #FF416C);\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 0 0;\n  color: #FFFFFF;\n  position: relative;\n  left: -100%;\n  height: 100%;\n  width: 200%;\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n  transition: -webkit-transform 0.6s ease-in-out;\n  transition: transform 0.6s ease-in-out;\n  transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out; }\n\n.container.right-panel-active .overlay {\n  -webkit-transform: translateX(50%);\n          transform: translateX(50%); }\n\n.overlay-panel {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 0 40px;\n  text-align: center;\n  top: 0;\n  height: 100%;\n  width: 50%;\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n  transition: -webkit-transform 0.6s ease-in-out;\n  transition: transform 0.6s ease-in-out;\n  transition: transform 0.6s ease-in-out, -webkit-transform 0.6s ease-in-out; }\n\n.overlay-left {\n  -webkit-transform: translateX(-20%);\n          transform: translateX(-20%); }\n\n.container.right-panel-active .overlay-left {\n  -webkit-transform: translateX(0);\n          transform: translateX(0); }\n\n.overlay-right {\n  right: 0;\n  -webkit-transform: translateX(0);\n          transform: translateX(0); }\n\n.container.right-panel-active .overlay-right {\n  -webkit-transform: translateX(20%);\n          transform: translateX(20%); }\n"

/***/ }),

/***/ "./src/app/modules/login/login.component.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/login/login.component.ts ***!
  \**************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/auth-service/auth.service */ "./src/app/service/auth-service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _service_alert_service_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/alert-service/alert.service */ "./src/app/service/alert-service/alert.service.ts");
/* harmony import */ var _service_nav_service_nav_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../service/nav-service/nav.service */ "./src/app/service/nav-service/nav.service.ts");
/* harmony import */ var _service_login_service_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../service/login-service/login.service */ "./src/app/service/login-service/login.service.ts");
/* harmony import */ var _service_auth_service_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../service/auth-service/authentication.service */ "./src/app/service/auth-service/authentication.service.ts");
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
    function LoginComponent(navService, authService, formBuilder, route, router, loginService, alertService, authenticationService) {
        this.navService = navService;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.loginService = loginService;
        this.alertService = alertService;
        this.authenticationService = authenticationService;
        this.signupClicked = false;
        this.loading = false;
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.userLogout = function (values) {
        // this.LoginService.processLogout();
        // this.navService.userSession.next({storeId: 'web-store', navId: 'guest'});
        // this.authService.logout();
        this.authenticationService.logout();
    };
    LoginComponent.prototype.onSubmit = function (values) {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(values['username'], values['password'])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    LoginComponent.prototype.onSignInClick = function () {
        this.signupClicked = false;
        console.log('Sign in clicked ' + this.signupClicked);
    };
    LoginComponent.prototype.onSignUpClick = function () {
        this.signupClicked = true;
        console.log('Sign up clicked ' + this.signupClicked);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/modules/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/modules/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_nav_service_nav_service__WEBPACK_IMPORTED_MODULE_6__["NavService"],
            _service_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _service_login_service_login_service__WEBPACK_IMPORTED_MODULE_7__["LoginService"],
            _service_alert_service_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            _service_auth_service_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/modules/map/map.component.html":
/*!************************************************!*\
  !*** ./src/app/modules/map/map.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  map works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/map/map.component.scss":
/*!************************************************!*\
  !*** ./src/app/modules/map/map.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/map/map.component.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/map/map.component.ts ***!
  \**********************************************/
/*! exports provided: MapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapComponent", function() { return MapComponent; });
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

var MapComponent = /** @class */ (function () {
    function MapComponent() {
    }
    MapComponent.prototype.ngOnInit = function () {
    };
    MapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.component.html */ "./src/app/modules/map/map.component.html"),
            styles: [__webpack_require__(/*! ./map.component.scss */ "./src/app/modules/map/map.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "./src/app/modules/register/register.component.html":
/*!**********************************************************!*\
  !*** ./src/app/modules/register/register.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br><br>\n<p>\n  register works!\n</p>\n<br>\n"

/***/ }),

/***/ "./src/app/modules/register/register.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/modules/register/register.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/register/register.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/register/register.component.ts ***!
  \********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
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

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/modules/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/modules/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/modules/reports/dashboard/dashboard.component.html":
/*!********************************************************************!*\
  !*** ./src/app/modules/reports/dashboard/dashboard.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  Dashboard Component\n</div>\n"

/***/ }),

/***/ "./src/app/modules/reports/dashboard/dashboard.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/modules/reports/dashboard/dashboard.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/reports/dashboard/dashboard.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/reports/dashboard/dashboard.component.ts ***!
  \******************************************************************/
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
    // @Input() modalData: [];
    // @ViewChild('childModal') childModal: NgbModal;
    // constructor(private modal: NgbModal, private httpClient: HttpClient) { }
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/modules/reports/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/modules/reports/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/modules/track/track.component.html":
/*!****************************************************!*\
  !*** ./src/app/modules/track/track.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <agm-map class=\"map-height\" [latitude]=\"location.lat\" [longitude]=\"location.lng\" [fitBounds]=\"true\">\n    <agm-marker *ngFor=\"let data of location.marker; let i = index\" [iconUrl]=\"markerCar\" [latitude]=\"data.lat\" [longitude]=\"data.lng\"\n      [agmFitBounds]=\"true\">\n    </agm-marker>\n  </agm-map>\n</div>\n\n<!-- <div class=\"col-12\">\n  <agm-map [zoom]=\"location.zoom\" [latitude]=\"location.latitude\" [longitude]=\"location.longitude\" [fitBounds]=\"true\">\n      <agm-marker *ngFor=\"let data of positionData; let i = index\" [iconUrl]=\"markerCar\" [latitude]=\"data.latitude\" [longitude]=\"data.longitude\"\n      [agmFitBounds]=\"true\">\n      </agm-marker>\n  </agm-map>\n</div> -->\n"

/***/ }),

/***/ "./src/app/modules/track/track.component.scss":
/*!****************************************************!*\
  !*** ./src/app/modules/track/track.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map-height {\n  height: calc(100vh - 115px); }\n"

/***/ }),

/***/ "./src/app/modules/track/track.component.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/track/track.component.ts ***!
  \**************************************************/
/*! exports provided: TrackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackComponent", function() { return TrackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _agm_core_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @agm/core/services */ "./node_modules/@agm/core/services.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TrackComponent = /** @class */ (function () {
    function TrackComponent(mapsApiLoader, zone, wrapper) {
        var _this = this;
        this.mapsApiLoader = mapsApiLoader;
        this.zone = zone;
        this.wrapper = wrapper;
        this.location = {
            lat: 51.678418,
            lng: 7.809007,
            marker: [
                {
                    lat: 51.678418,
                    lng: 7.809007,
                    draggable: false
                },
                {
                    lat: 12.299125,
                    lng: 76.642777,
                    draggable: false
                },
            ]
        };
        // markerCar = '../../../assets/imgages/marker-car.png';
        this.markerCar = '../../../assets/images/marker-car.png';
        this.mapsApiLoader = mapsApiLoader;
        this.zone = zone;
        this.wrapper = wrapper;
        this.mapsApiLoader.load().then(function () {
            _this.geocoder = new google.maps.Geocoder();
        });
    }
    TrackComponent.prototype.ngOnInit = function () {
        // this.location.marker.draggable = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_agm_core__WEBPACK_IMPORTED_MODULE_1__["AgmMap"]),
        __metadata("design:type", _agm_core__WEBPACK_IMPORTED_MODULE_1__["AgmMap"])
    ], TrackComponent.prototype, "map", void 0);
    TrackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-track',
            template: __webpack_require__(/*! ./track.component.html */ "./src/app/modules/track/track.component.html"),
            styles: [__webpack_require__(/*! ./track.component.scss */ "./src/app/modules/track/track.component.scss")]
        }),
        __metadata("design:paramtypes", [_agm_core__WEBPACK_IMPORTED_MODULE_1__["MapsAPILoader"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _agm_core_services__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsAPIWrapper"]])
    ], TrackComponent);
    return TrackComponent;
}());



/***/ }),

/***/ "./src/app/modules/vehicle-details/vehicle-details.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modules/vehicle-details/vehicle-details.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n      <div class=\"col-12\">\n        <p-table [value]=\"cars\">\n          <ng-template pTemplate=\"header\">\n              <tr>\n                  <th>Name</th>\n                  <th>Status</th>\n                  <th>Last Update</th>\n                  <th>Phone</th>\n                  <th>Model</th>\n                  <th>Contact</th>\n                  <th>Identifier</th>\n              </tr>\n          </ng-template>\n          <ng-template pTemplate=\"body\" let-car>\n              <tr>\n                  <td>{{car.name}}</td>\n                  <td>{{car.status}}</td>\n                  <td>{{car.lastUpdate}}</td>\n                  <td>{{car.phone}}</td>\n                  <td>{{car.model}}</td>\n                  <td>{{car.contact}}</td>\n                  <td>{{car.uniqueId}}</td>\n              </tr>\n          </ng-template>\n      </p-table>\n      </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/vehicle-details/vehicle-details.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/modules/vehicle-details/vehicle-details.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  height: 193px;\n  padding-top: 20px; }\n"

/***/ }),

/***/ "./src/app/modules/vehicle-details/vehicle-details.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/vehicle-details/vehicle-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: VehicleDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleDetailsComponent", function() { return VehicleDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { VehicleDetailsService } from './vehicle-details.service';
var VehicleDetailsComponent = /** @class */ (function () {
    function VehicleDetailsComponent(httpClient) {
        this.httpClient = httpClient;
        this.vehiclesSummaryApi = 'http://gps2.ltlindia.com:8082/api/positions';
        this.tableData = [];
        this.cols = [
            { field: 'name', header: 'Name' },
            { field: 'status', header: 'Status' },
            { field: 'lastUpdate', header: 'Last Update' },
            { field: 'phone', header: 'Phone' },
            { field: 'model', header: 'Model' },
            { field: 'contact', header: 'Contact' },
            { field: 'uniqueId', header: 'Identifier' }
        ];
        /*tslint:disable*/
        this.cars = [
            {
                "id": 103,
                "attributes": {},
                "name": "KA09 C0377",
                "uniqueId": "864547033160461",
                "status": "offline",
                "lastUpdate": "2019-03-28T14:40:10.000+0000",
                "busy": false,
                "positionId": 21750927,
                "groupId": 0,
                "geofenceIds": null,
                "phone": "7624998176",
                "model": "Autograde",
                "contact": "9880165946",
                "category": "pickup"
            },
            {
                "id": 104,
                "attributes": {},
                "name": "KA09 C0378",
                "uniqueId": "864547033160461",
                "status": "offline",
                "lastUpdate": "2019-03-27T14:36:30.000+0000",
                "busy": false,
                "positionId": 0,
                "groupId": 0,
                "geofenceIds": null,
                "phone": "7624998176",
                "model": "Autograde",
                "contact": "9880165946",
                "category": "pickup"
            }
        ];
    }
    VehicleDetailsComponent.prototype.ngOnInit = function () {
        // this.tableData = this.vehicleDetailsService.fetchData();
    };
    VehicleDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vehicle-details',
            template: __webpack_require__(/*! ./vehicle-details.component.html */ "./src/app/modules/vehicle-details/vehicle-details.component.html"),
            styles: [__webpack_require__(/*! ./vehicle-details.component.scss */ "./src/app/modules/vehicle-details/vehicle-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], VehicleDetailsComponent);
    return VehicleDetailsComponent;
}());



/***/ }),

/***/ "./src/app/service/alert-service/alert.service.ts":
/*!********************************************************!*\
  !*** ./src/app/service/alert-service/alert.service.ts ***!
  \********************************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = true;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/service/auth-guard/auth.guard.ts":
/*!**************************************************!*\
  !*** ./src/app/service/auth-guard/auth.guard.ts ***!
  \**************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (sessionStorage.getItem('accessToken')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/service/auth-service/auth-guard.service.ts":
/*!************************************************************!*\
  !*** ./src/app/service/auth-service/auth-guard.service.ts ***!
  \************************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/service/auth-service/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// @Injectable({
//   providedIn: 'root'
// })
var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    // this method will be executed by angular before the route is loaded
    // Observable<boolean> | Promise<boolean> | boolean
    AuthGuardService.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.authService.isAuthenticated()
            .then(function (authenticated) {
            if (authenticated) {
                return true;
            }
            else {
                _this.router.navigate(['/']);
            }
        });
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());

/*
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.authService.loginState.subscribe((data: any) => {
      if (data === true) {
        console.log('-data if block: ', data);
        return true;
      } else {
        // this.router.navigate(['/']);  // Absolute path
        console.log('-data else block: ', data);
        return false;
      }
    });
  }
*/


/***/ }),

/***/ "./src/app/service/auth-service/auth.service.ts":
/*!******************************************************!*\
  !*** ./src/app/service/auth-service/auth.service.ts ***!
  \******************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
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

// @Injectable({
//   providedIn: 'root'
// })
var AuthService = /** @class */ (function () {
    function AuthService() {
        this.loginState = false;
    }
    AuthService.prototype.isAuthenticated = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(_this.loginState);
            }, 800);
        });
        return promise;
    };
    AuthService.prototype.login = function () {
        this.loginState = true; // true
    };
    AuthService.prototype.logout = function () {
        this.loginState = false; // false
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/service/auth-service/authentication.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/service/auth-service/authentication.service.ts ***!
  \****************************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
        this.apiServer = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiServer + '/api/login';
    }
    AuthenticationService.prototype.login = function (username, password) {
        return this.http.post("" + this.apiServer, { userName: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                sessionStorage.setItem('accessToken', JSON.stringify(user));
            }
            return user;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        sessionStorage.removeItem('accessToken');
        this.router.navigate(['/login']);
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/service/login-service/login.service.ts":
/*!********************************************************!*\
  !*** ./src/app/service/login-service/login.service.ts ***!
  \********************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.processUserLogin = function () {
    };
    LoginService.prototype.processLogout = function () {
    };
    LoginService.prototype.login = function (username, password) {
        return this.http.post("/users/authenticate", { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        }));
    };
    LoginService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/service/nav-service/nav.data.ts":
/*!*************************************************!*\
  !*** ./src/app/service/nav-service/nav.data.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var NavItems = [
    {
        storeId: 'c-pannel',
        accessType: [
            {
                navId: 'super-user',
                navTree: [{
                        navId: 'organization',
                        color: '#fda348',
                        icon: 'menu',
                        text: 'Organization',
                        children: [
                            {
                                navId: 'addOrganization',
                                icon: 'org',
                                color: '#ccc',
                                text: 'Add an Organization',
                                route: '/m/feature/access-rules/ar'
                            },
                            {
                                navId: 'updateOrgInfo',
                                icon: 'org',
                                color: '#ccc',
                                text: 'Updating Organization Information',
                                route: '/m/feature/access-rules/ar'
                            },
                            {
                                navId: 'addOrgBranch',
                                icon: 'org',
                                color: '#ccc',
                                text: 'Add a branch',
                                route: '/m/feature/access-rules/ar'
                            },
                            {
                                navId: 'leavesOrgConfig',
                                icon: 'org',
                                color: '#ccc',
                                text: 'Leaves Configuration',
                                route: '/m/feature/access-rules/ar'
                            }
                        ]
                    }, {
                        navId: 'employee',
                        color: '#fda348',
                        icon: 'menu',
                        text: 'Employee Information',
                        children: [
                            {
                                navId: 'newEmployee',
                                icon: 'emp',
                                color: '#ccc',
                                text: 'Add New Employee',
                                route: '/m/feature/access-rules/ar'
                            },
                            {
                                navId: 'updateOrgInfo',
                                icon: 'org',
                                color: '#ccc',
                                text: 'Updating Organization Information',
                                route: '/m/feature/access-rules/ar'
                            },
                            {
                                navId: 'addOrgBranch',
                                icon: 'org',
                                color: '#ccc',
                                text: 'Add a branch',
                                route: '/m/feature/access-rules/ar'
                            },
                            {
                                navId: 'leavesOrgConfig',
                                icon: 'org',
                                color: '#ccc',
                                text: 'Leaves Configuration',
                                route: '/m/feature/access-rules/ar'
                            }
                        ]
                    }]
            }, {
                navId: 'admin-user',
                navTree: [{
                        navId: 'organization',
                        color: '#fda348',
                        icon: 'menu',
                        text: 'Organization',
                        children: [
                            {
                                navId: 'addOrganization',
                                icon: 'org',
                                color: '#ccc',
                                text: 'Add an Organization',
                                route: '/m/feature/access-rules/ar'
                            },
                            {
                                navId: 'updateOrgInfo',
                                icon: 'org',
                                color: '#ccc',
                                text: 'Updating Organization Information',
                                route: '/m/feature/access-rules/ar'
                            },
                            {
                                navId: 'addOrgBranch',
                                icon: 'org',
                                color: '#ccc',
                                text: 'Add a branch',
                                route: '/m/feature/access-rules/ar'
                            },
                            {
                                navId: 'leavesOrgConfig',
                                icon: 'org',
                                color: '#ccc',
                                text: 'Leaves Configuration',
                                route: '/m/feature/access-rules/ar'
                            }
                        ]
                    }, {
                        navId: 'employee',
                        color: '#fda348',
                        icon: 'menu',
                        text: 'Employee Information',
                        children: [
                            {
                                navId: 'newEmployee',
                                icon: 'emp',
                                color: '#ccc',
                                text: 'Add New Employee',
                                route: '/m/feature/access-rules/ar'
                            },
                            {
                                navId: 'updateOrgInfo',
                                icon: 'org',
                                color: '#ccc',
                                text: 'Updating Organization Information',
                                route: '/m/feature/access-rules/ar'
                            },
                            {
                                navId: 'addOrgBranch',
                                icon: 'org',
                                color: '#ccc',
                                text: 'Add a branch',
                                route: '/m/feature/access-rules/ar'
                            },
                            {
                                navId: 'leavesOrgConfig',
                                icon: 'org',
                                color: '#ccc',
                                text: 'Leaves Configuration',
                                route: '/m/feature/access-rules/ar'
                            }
                        ]
                    }]
            }
        ]
    }, {
        storeId: 'web-store',
        accessType: [
            {
                navId: 'general_user',
                navTree: [{
                        navId: 'tracking',
                        color: '#fda348',
                        icon: 'fa-map-marker',
                        text: 'Tracking',
                        children: [
                            {
                                navId: 'track_track',
                                icon: 'org',
                                color: '#ccc',
                                text: 'Track',
                                route: '/track/track'
                            }, {
                                navId: 'track_history',
                                icon: 'org',
                                color: '#ccc',
                                text: 'History',
                                route: '/track/history'
                            }, {
                                navId: 'track_single_track',
                                icon: 'org',
                                color: '#ccc',
                                text: 'Single Track',
                                route: '/track/single-track'
                            }, {
                                navId: 'track_multi_track',
                                icon: 'org',
                                color: '#ccc',
                                text: 'Multi Track',
                                route: '/track/multi-track'
                            }, {
                                navId: 'track_geo_fence',
                                icon: 'org',
                                color: '#ccc',
                                text: 'Addsites/Geo Fence',
                                route: '/track/geo-fence'
                            },
                        ]
                    }, {
                        navId: 'reports',
                        color: '#fda348',
                        icon: 'fa-file-text-o',
                        text: 'Reports',
                        children: [
                            {
                                navId: 'reports_dashboard',
                                icon: 'emp',
                                color: '#ccc',
                                text: 'Dashboard',
                                route: '/reports/dashboard'
                            }, {
                                navId: 'reports_vehicles_consolidated',
                                icon: 'emp',
                                color: '#ccc',
                                text: 'Vehicles Consolidated',
                                route: '/reports/vehicles-consolidated'
                            }, {
                                navId: 'reports_consolidated_site_location',
                                icon: 'emp',
                                color: '#ccc',
                                text: 'Consolidated Site & Location',
                                route: '/reports/consolidated-site-location'
                            }, {
                                navId: 'reports_consolidated_overspeed',
                                icon: 'emp',
                                color: '#ccc',
                                text: 'Consolidated Overspeed',
                                route: '/reports/consolidated-overspeed'
                            }, {
                                navId: 'reports_tollgate_report',
                                icon: 'emp',
                                color: '#ccc',
                                text: 'Tollgate Report',
                                route: '/reports/tollgate-report'
                            }, {
                                navId: 'reports_employee_attendance',
                                icon: 'emp',
                                color: '#ccc',
                                text: 'employee attendance',
                                route: '/reports/employee attendance'
                            }
                        ]
                    }, {
                        navId: 'statistics',
                        color: '#fda348',
                        icon: 'fa-pie-chart',
                        text: 'Statistics',
                        children: [
                            {
                                navId: 'statistics_vehiclewise_performance',
                                icon: 'emp',
                                color: '#ccc',
                                text: 'Vehiclewise Performance',
                                route: '/statistics/vehiclewise-performance'
                            }, {
                                navId: 'statistics_poi',
                                icon: 'emp',
                                color: '#ccc',
                                text: 'POI',
                                route: '/statistics/poi'
                            }, {
                                navId: 'statistics_consolidated',
                                icon: 'emp',
                                color: '#ccc',
                                text: 'Consolidated',
                                route: '/statistics/consolidated'
                            }, {
                                navId: 'statistics_executive_fuel',
                                icon: 'emp',
                                color: '#ccc',
                                text: 'Executive Fuel',
                                route: '/statistics/executive-fuel'
                            }, {
                                navId: 'statistics_monthly_dist',
                                icon: 'emp',
                                color: '#ccc',
                                text: 'Monthly Dist',
                                route: '/statistics/monthly-dist'
                            }, {
                                navId: 'statistics_monthly_dist_fuel',
                                icon: 'emp',
                                color: '#ccc',
                                text: 'Monthly Dist & Fuel',
                                route: '/statistics/monthly-dist-fuel'
                            }
                        ]
                    }, {
                        navId: 'sensor',
                        color: '#fda348',
                        icon: 'fa-thermometer-half',
                        text: 'Sensor',
                        children: [
                            {
                                navId: 'sensor_ac',
                                icon: 'emp',
                                color: '#ccc',
                                text: 'AC',
                                route: '/sensor/ac'
                            }, {
                                navId: 'sensor_idle_wastage',
                                icon: 'emp',
                                color: '#ccc',
                                text: 'Idle Wastage',
                                route: '/sensor/idle-wastage'
                            }, {
                                navId: 'sensor_primary_engine_on',
                                icon: 'emp',
                                color: '#ccc',
                                text: 'Primary Engine On',
                                route: '/sensor/primary-engine-on'
                            }, {
                                navId: 'sensor_secondary_engine_on',
                                icon: 'emp',
                                color: '#ccc',
                                text: 'Secondary Engine On',
                                route: '/sensor/secondary-engine-on'
                            }, {
                                navId: 'sensor_temperature',
                                icon: 'emp',
                                color: '#ccc',
                                text: 'Temperature',
                                route: '/sensor/temperature'
                            }, {
                                navId: 'sensor_fuel_analytics',
                                icon: 'emp',
                                color: '#ccc',
                                text: 'Fuel Analytics',
                                route: '/sensor/fuel-analytics'
                            }, {
                                navId: 'sensor_camera',
                                icon: 'emp',
                                color: '#ccc',
                                text: 'Camera',
                                route: '/sensor/camera'
                            }
                        ]
                    }, {
                        navId: 'performance',
                        color: '#fda348',
                        icon: 'fa-tachometer',
                        text: 'performance',
                        children: [
                            {
                                navId: 'performance_daily_performance',
                                icon: 'emp',
                                color: '#ccc',
                                text: 'Daily Performance',
                                route: '/performance/daily-performance'
                            }, {
                                navId: 'performance_monthly_performance',
                                icon: 'emp',
                                color: '#ccc',
                                text: 'Monthly Performance',
                                route: '/performance/monthly-performance'
                            }
                        ]
                    }, {
                        navId: 'schedule',
                        color: '#fda348',
                        icon: 'fa-clock-o',
                        text: 'Schedule',
                        children: [
                            {
                                navId: 'schedule_daily',
                                icon: 'emp',
                                color: '#ccc',
                                text: 'Daily Schedule',
                                route: '/schedule/daily'
                            }, {
                                navId: 'schedule_monthly',
                                icon: 'emp',
                                color: '#ccc',
                                text: 'Monthly Schedule',
                                route: '/schedule/monthly'
                            }
                        ]
                    }, {
                        navId: 'logout',
                        color: '#fda348',
                        icon: 'fa-power-off',
                        text: 'Logout',
                        children: [
                            {
                                navId: 'logout_out',
                                icon: 'emp',
                                color: '#ccc',
                                text: 'Logout',
                                route: '/schedule/logout'
                            }
                        ]
                    }]
            }, {
                navId: 'super-incharge',
                navTree: [{
                        navId: 'organization',
                        color: '#fda348',
                        icon: 'menu',
                        text: 'Organization',
                        children: [
                            {
                                navId: 'addOrganization',
                                icon: 'org',
                                color: '#ccc',
                                text: 'Add an Organization',
                                route: '/webstore/organization/add-organization'
                            },
                            {
                                navId: 'updateOrgInfo',
                                icon: 'org',
                                color: '#ccc',
                                text: 'Updating Organization Information',
                                route: '/m/feature/access-rules/ar'
                            },
                            {
                                navId: 'addOrgBranch',
                                icon: 'org',
                                color: '#ccc',
                                text: 'Add a branch',
                                route: '/m/feature/access-rules/ar'
                            },
                            {
                                navId: 'leavesOrgConfig',
                                icon: 'org',
                                color: '#ccc',
                                text: 'Leaves Configuration',
                                route: '/m/feature/access-rules/ar'
                            }
                        ]
                    }, {
                        navId: 'employee',
                        color: '#fda348',
                        icon: 'menu',
                        text: 'Employee Information',
                        children: [
                            {
                                navId: 'newEmployee',
                                icon: 'emp',
                                color: '#ccc',
                                text: 'Add New Employee',
                                route: '/m/feature/access-rules/ar'
                            },
                            {
                                navId: 'updateOrgInfo',
                                icon: 'org',
                                color: '#ccc',
                                text: 'Updating Organization Information',
                                route: '/m/feature/access-rules/ar'
                            },
                            {
                                navId: 'addOrgBranch',
                                icon: 'org',
                                color: '#ccc',
                                text: 'Add a branch',
                                route: '/m/feature/access-rules/ar'
                            },
                            {
                                navId: 'leavesOrgConfig',
                                icon: 'org',
                                color: '#ccc',
                                text: 'Leaves Configuration',
                                route: '/m/feature/access-rules/ar'
                            }
                        ]
                    }]
            }, {
                navId: 'incharge',
                navTree: [{
                        navId: 'organization',
                        color: '#fda348',
                        icon: 'menu',
                        text: 'Organization',
                        children: [
                            {
                                navId: 'addOrganization',
                                icon: 'org',
                                color: '#ccc',
                                text: 'Add an Organization',
                                route: '/m/feature/access-rules/ar'
                            },
                            {
                                navId: 'updateOrgInfo',
                                icon: 'org',
                                color: '#ccc',
                                text: 'Updating Organization Information',
                                route: '/m/feature/access-rules/ar'
                            },
                            {
                                navId: 'addOrgBranch',
                                icon: 'org',
                                color: '#ccc',
                                text: 'Add a branch',
                                route: '/m/feature/access-rules/ar'
                            },
                            {
                                navId: 'leavesOrgConfig',
                                icon: 'org',
                                color: '#ccc',
                                text: 'Leaves Configuration',
                                route: '/m/feature/access-rules/ar'
                            }
                        ]
                    }, {
                        navId: 'employee',
                        color: '#fda348',
                        icon: 'menu',
                        text: 'Employee Information',
                        children: [
                            {
                                navId: 'newEmployee',
                                icon: 'emp',
                                color: '#ccc',
                                text: 'Add New Employee',
                                route: '/m/feature/access-rules/ar'
                            },
                            {
                                navId: 'updateOrgInfo',
                                icon: 'org',
                                color: '#ccc',
                                text: 'Updating Organization Information',
                                route: '/m/feature/access-rules/ar'
                            },
                            {
                                navId: 'addOrgBranch',
                                icon: 'org',
                                color: '#ccc',
                                text: 'Add a branch',
                                route: '/m/feature/access-rules/ar'
                            },
                            {
                                navId: 'leavesOrgConfig',
                                icon: 'org',
                                color: '#ccc',
                                text: 'Leaves Configuration',
                                route: '/m/feature/access-rules/ar'
                            }
                        ]
                    }]
            }, {
                navId: 'end-user',
                navTree: [{
                        navId: 'organization',
                        color: '#fda348',
                        icon: 'menu',
                        text: 'Organization',
                        children: [
                            {
                                navId: 'addOrganization',
                                icon: 'org',
                                color: '#ccc',
                                text: 'Add an Organization',
                                route: '/m/feature/access-rules/ar'
                            },
                            {
                                navId: 'updateOrgInfo',
                                icon: 'org',
                                color: '#ccc',
                                text: 'Updating Organization Information',
                                route: '/m/feature/access-rules/ar'
                            },
                            {
                                navId: 'addOrgBranch',
                                icon: 'org',
                                color: '#ccc',
                                text: 'Add a branch',
                                route: '/m/feature/access-rules/ar'
                            },
                            {
                                navId: 'leavesOrgConfig',
                                icon: 'org',
                                color: '#ccc',
                                text: 'Leaves Configuration',
                                route: '/m/feature/access-rules/ar'
                            }
                        ]
                    }, {
                        navId: 'employee',
                        color: '#fda348',
                        icon: 'menu',
                        text: 'Employee Information',
                        children: [
                            {
                                navId: 'newEmployee',
                                icon: 'emp',
                                color: '#ccc',
                                text: 'Add New Employee',
                                route: '/m/feature/access-rules/ar'
                            },
                            {
                                navId: 'updateOrgInfo',
                                icon: 'org',
                                color: '#ccc',
                                text: 'Updating Organization Information',
                                route: '/m/feature/access-rules/ar'
                            },
                            {
                                navId: 'addOrgBranch',
                                icon: 'org',
                                color: '#ccc',
                                text: 'Add a branch',
                                route: '/m/feature/access-rules/ar'
                            },
                            {
                                navId: 'leavesOrgConfig',
                                icon: 'org',
                                color: '#ccc',
                                text: 'Leaves Configuration',
                                route: '/m/feature/access-rules/ar'
                            }
                        ]
                    }]
            }
        ]
    }
];
/* harmony default export */ __webpack_exports__["default"] = (NavItems);


/***/ }),

/***/ "./src/app/service/nav-service/nav.service.ts":
/*!****************************************************!*\
  !*** ./src/app/service/nav-service/nav.service.ts ***!
  \****************************************************/
/*! exports provided: NavService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavService", function() { return NavService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _nav_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav.data */ "./src/app/service/nav-service/nav.data.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavService = /** @class */ (function () {
    // public storeId = 'c-pannel';
    // public navId = 'super-user';
    function NavService() {
        var _this = this;
        this.testString = 'Hi';
        this.navItems = _nav_data__WEBPACK_IMPORTED_MODULE_1__["default"];
        // public storeId = new BehaviorSubject<string>('web-store');
        // public navId = new BehaviorSubject<string>('guest');
        // public storeId = new BehaviorSubject<string>('web-store');
        // public navId = new BehaviorSubject<string>('incharge');
        this.userSession = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({ storeId: 'web-store', navId: 'general_user' });
        this.navTree = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.userSession.subscribe(function (data) {
            return _this.navData(data); // optimise the code to return a observable of left menu data.
        });
    }
    NavService.prototype.ngOnInit = function () {
        // Note ngOnInit is not executed, means what ever we have written in the constructor, if we write here then it will not work.
        // This is a scenario & usecase why we need to define some things in the constructor rather than defining in ngOnInit
    };
    NavService.prototype.navData = function (userSessionData) {
        var storeId = userSessionData['storeId'];
        var navId = userSessionData['navId'];
        var storeObject = this.navItems.find(function (item) { return (item.storeId === storeId); });
        var userObject = storeObject.accessType.find(function (item) { return (item.navId === navId); });
        this.navTree.next(userObject ? userObject.navTree : []);
    };
    NavService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], NavService);
    return NavService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiServer: 'http://gps2.ltlindia.com:8082'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\SBoregowda\Documents\HRMS\GPS_revisit\Development_custom_theme\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map