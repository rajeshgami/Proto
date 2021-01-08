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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/admin/admin.component */ "./src/app/layout/admin/admin.component.ts");
/* harmony import */ var _layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/auth/auth.component */ "./src/app/layout/auth/auth.component.ts");






const routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }, {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-auth-login-basic-login-basic-login-module */ "login-basic-login-basic-login-module").then(__webpack_require__.bind(null, /*! ./pages/auth/login/basic-login/basic-login.module */ "./src/app/pages/auth/login/basic-login/basic-login.module.ts")).then(m => m.BasicLoginModule)
    },
    {
        path: '',
        component: _layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"],
        children: [
            // {
            //   path: '',
            //   redirectTo: 'login',
            //   pathMatch: 'full'
            // },
            // {
            //   path: 'login',
            //   loadChildren: () => import('./pages/auth/login/basic-login/basic-login.module').then(m => m.BasicLoginModule)
            // },
            {
                path: 'dashboard',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-dashboard-dashboard-default-dashboard-default-module */ "pages-dashboard-dashboard-default-dashboard-default-module").then(__webpack_require__.bind(null, /*! ./pages/dashboard/dashboard-default/dashboard-default.module */ "./src/app/pages/dashboard/dashboard-default/dashboard-default.module.ts")).then(m => m.DashboardDefaultModule)
            },
            {
                path: 'master',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-item-master-item-master-module */ "pages-item-master-item-master-module").then(__webpack_require__.bind(null, /*! ./pages/item-master/item-master.module */ "./src/app/pages/item-master/item-master.module.ts")).then(m => m.ItemMasterModule)
            },
            {
                path: 'basic',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-ui-elements-basic-basic-module */ "pages-ui-elements-basic-basic-module").then(__webpack_require__.bind(null, /*! ./pages/ui-elements/basic/basic.module */ "./src/app/pages/ui-elements/basic/basic.module.ts")).then(m => m.BasicModule)
            },
            {
                path: 'notifications',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-ui-elements-advance-notifications-notifications-module */ "pages-ui-elements-advance-notifications-notifications-module").then(__webpack_require__.bind(null, /*! ./pages/ui-elements/advance/notifications/notifications.module */ "./src/app/pages/ui-elements/advance/notifications/notifications.module.ts")).then(m => m.NotificationsModule)
            },
            {
                path: 'bootstrap-table',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-ui-elements-tables-bootstrap-table-basic-bootstrap-basic-bootstrap-module */ "pages-ui-elements-tables-bootstrap-table-basic-bootstrap-basic-bootstrap-module").then(__webpack_require__.bind(null, /*! ./pages/ui-elements/tables/bootstrap-table/basic-bootstrap/basic-bootstrap.module */ "./src/app/pages/ui-elements/tables/bootstrap-table/basic-bootstrap/basic-bootstrap.module.ts")).then(m => m.BasicBootstrapModule),
            },
            // {
            //   path: 'map',
            //   loadChildren: () => import('./pages/map/google-map/google-map.module').then(m => m.GoogleMapModule),
            // },
            {
                path: 'user',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-user-profile-profile-module */ "pages-user-profile-profile-module").then(__webpack_require__.bind(null, /*! ./pages/user/profile/profile.module */ "./src/app/pages/user/profile/profile.module.ts")).then(m => m.ProfileModule)
            }, {
                path: 'simple-page',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-simple-page-simple-page-module */ "pages-simple-page-simple-page-module").then(__webpack_require__.bind(null, /*! ./pages/simple-page/simple-page.module */ "./src/app/pages/simple-page/simple-page.module.ts")).then(m => m.SimplePageModule)
            }
        ]
    },
    {
        path: '',
        component: _layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"],
        children: [
            {
                path: 'authentication',
                loadChildren: () => __webpack_require__.e(/*! import() | pages-auth-auth-module */ "pages-auth-auth-module").then(__webpack_require__.bind(null, /*! ./pages/auth/auth.module */ "./src/app/pages/auth/auth.module.ts")).then(m => m.AuthModule)
            }
        ]
    }
    // {
    //   path: '',
    //   redirectTo: 'dashboard',
    //   pathMatch: 'full'
    // },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/spinner/spinner.component */ "./src/app/shared/spinner/spinner.component.ts");





class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'Welcome ! Admin';
    }
    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


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
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var ng_select2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-select2 */ "./node_modules/ng-select2/__ivy_ngcc__/fesm2015/ng-select2.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/admin/admin.component */ "./src/app/layout/admin/admin.component.ts");
/* harmony import */ var _layout_admin_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/admin/breadcrumbs/breadcrumbs.component */ "./src/app/layout/admin/breadcrumbs/breadcrumbs.component.ts");
/* harmony import */ var _layout_admin_title_title_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/admin/title/title.component */ "./src/app/layout/admin/title/title.component.ts");
/* harmony import */ var _layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/auth/auth.component */ "./src/app/layout/auth/auth.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var angular_9_datatable__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-9-datatable */ "./node_modules/angular-9-datatable/__ivy_ngcc__/fesm2015/angular-9-datatable.js");














// import { AddEditItemComponent } from './pages/item-master/add-edit-item/add-edit-item.component';
// import { ItemListComponent } from './pages/item-master/item-list/item-list.component';
// import { ItemListComponent } from './pages/item-master/item-list/item-list.component';



// import {TableModule} from 'primeng/table';
// import {CalendarModule} from 'primeng/calendar';
// import {SliderModule} from 'primeng/slider';
// import {DialogModule} from 'primeng/dialog';
// import {MultiSelectModule} from 'primeng/multiselect';
// import {ContextMenuModule} from 'primeng/contextmenu';
// import {ButtonModule} from 'primeng/button';
// import {ToastModule} from 'primeng/toast';
// import {InputTextModule} from 'primeng/inputtext';
// import {ProgressBarModule} from 'primeng/progressbar';
// import {DropdownModule} from 'primeng/dropdown';
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
            ng_select2__WEBPACK_IMPORTED_MODULE_1__["NgSelect2Module"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_0__["NgSelectModule"],
            angular_9_datatable__WEBPACK_IMPORTED_MODULE_15__["NgxDataTableModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"],
        _layout_admin_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbsComponent"],
        _layout_admin_title_title_component__WEBPACK_IMPORTED_MODULE_8__["TitleComponent"],
        _layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_9__["AuthComponent"]
        // ItemListComponent,
        // AddEditItemComponent
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
        ng_select2__WEBPACK_IMPORTED_MODULE_1__["NgSelect2Module"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_0__["NgSelectModule"],
        angular_9_datatable__WEBPACK_IMPORTED_MODULE_15__["NgxDataTableModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _layout_admin_admin_component__WEBPACK_IMPORTED_MODULE_6__["AdminComponent"],
                    _layout_admin_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_7__["BreadcrumbsComponent"],
                    _layout_admin_title_title_component__WEBPACK_IMPORTED_MODULE_8__["TitleComponent"],
                    _layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_9__["AuthComponent"]
                    // ItemListComponent,
                    // AddEditItemComponent
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_13__["NgbModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                    ng_select2__WEBPACK_IMPORTED_MODULE_1__["NgSelect2Module"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_0__["NgSelectModule"],
                    angular_9_datatable__WEBPACK_IMPORTED_MODULE_15__["NgxDataTableModule"],
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["NO_ERRORS_SCHEMA"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/layout/admin/admin.component.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/admin/admin.component.ts ***!
  \*************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/menu-items/menu-items */ "./src/app/shared/menu-items/menu-items.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-click-outside */ "./node_modules/ng-click-outside/__ivy_ngcc__/lib/index.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng_click_outside__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shared_fullscreen_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/fullscreen/toggle-fullscreen.directive */ "./src/app/shared/fullscreen/toggle-fullscreen.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
/* harmony import */ var _shared_accordion_accordion_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/accordion/accordion.directive */ "./src/app/shared/accordion/accordion.directive.ts");
/* harmony import */ var _title_title_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./title/title.component */ "./src/app/layout/admin/title/title.component.ts");
/* harmony import */ var _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./breadcrumbs/breadcrumbs.component */ "./src/app/layout/admin/breadcrumbs/breadcrumbs.component.ts");
/* harmony import */ var _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/spinner/spinner.component */ "./src/app/shared/spinner/spinner.component.ts");
/* harmony import */ var _shared_accordion_accordionlink_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/accordion/accordionlink.directive */ "./src/app/shared/accordion/accordionlink.directive.ts");
/* harmony import */ var _shared_accordion_accordionanchor_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/accordion/accordionanchor.directive */ "./src/app/shared/accordion/accordionanchor.directive.ts");
















const _c0 = ["searchFriends"];
function AdminComponent_div_147_ul_3_li_1_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asideBadge_r671 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("pcoded-badge label label-", asideBadge_r671.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideBadge_r671.value);
} }
const _c1 = function () { return ["active"]; };
function AdminComponent_div_147_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AdminComponent_div_147_ul_3_li_1_span_8_Template, 2, 4, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asideItem_r666 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("group", asideItem_r666.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", asideItem_r666.external, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("target", asideItem_r666.target ? "_blank" : "_self");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](asideItem_r666.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideItem_r666.short_label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideItem_r666.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", asideItem_r666.badge);
} }
function AdminComponent_div_147_ul_3_li_2_a_1_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asideBadge_r677 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("pcoded-badge label label-", asideBadge_r677.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideBadge_r677.value);
} }
const _c2 = function (a1, a2) { return ["/", a1, a2]; };
function AdminComponent_div_147_ul_3_li_2_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AdminComponent_div_147_ul_3_li_2_a_1_span_7_Template, 2, 4, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asideItem_r666 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("target", asideItem_r666.target ? "_blank" : "_self");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](8, _c2, asideItem_r666.main_state, asideItem_r666.state));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](asideItem_r666.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideItem_r666.short_label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideItem_r666.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", asideItem_r666.badge);
} }
function AdminComponent_div_147_ul_3_li_2_ng_template_2_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asideBadge_r680 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("pcoded-badge label label-", asideBadge_r680.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideBadge_r680.value);
} }
const _c3 = function (a1) { return ["/", a1]; };
function AdminComponent_div_147_ul_3_li_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AdminComponent_div_147_ul_3_li_2_ng_template_2_span_7_Template, 2, 4, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asideItem_r666 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("target", asideItem_r666.target ? "_blank" : "_self");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c3, asideItem_r666.state));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](asideItem_r666.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideItem_r666.short_label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideItem_r666.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", asideItem_r666.badge);
} }
function AdminComponent_div_147_ul_3_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminComponent_div_147_ul_3_li_2_a_1_Template, 9, 11, "a", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdminComponent_div_147_ul_3_li_2_ng_template_2_Template, 9, 10, "ng-template", null, 100, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r674 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const asideItem_r666 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("group", asideItem_r666.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", asideItem_r666.main_state)("ngIfElse", _r674);
} }
function AdminComponent_div_147_ul_3_li_3_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asideBadge_r685 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("pcoded-badge label label-", asideBadge_r685.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideBadge_r685.value);
} }
function AdminComponent_div_147_ul_3_li_3_ng_template_11_li_0_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asideChildrenBadge_r690 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("pcoded-badge label label-", asideChildrenBadge_r690.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideChildrenBadge_r690.value);
} }
function AdminComponent_div_147_ul_3_li_3_ng_template_11_li_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AdminComponent_div_147_ul_3_li_3_ng_template_11_li_0_span_6_Template, 2, 4, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asideChildren_r686 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const asideItem_r666 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("target", asideChildren_r686.target ? "_blank" : "_self");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c2, asideItem_r666.state, asideChildren_r686.state));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", asideChildren_r686.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", asideChildren_r686.badge);
} }
function AdminComponent_div_147_ul_3_li_3_ng_template_11_li_1_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asideChildrenBadge_r695 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("pcoded-badge label label-", asideChildrenBadge_r695.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideChildrenBadge_r695.value);
} }
function AdminComponent_div_147_ul_3_li_3_ng_template_11_li_1_ng_template_9_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asideChildrenSubBadge_r698 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("pcoded-badge label label-", asideChildrenSubBadge_r698.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideChildrenSubBadge_r698.value);
} }
const _c4 = function (a1, a2, a3) { return ["/", a1, a2, a3]; };
function AdminComponent_div_147_ul_3_li_3_ng_template_11_li_1_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AdminComponent_div_147_ul_3_li_3_ng_template_11_li_1_ng_template_9_span_6_Template, 2, 4, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asideChildrenSub_r696 = ctx.$implicit;
    const asideChildren_r686 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const asideItem_r666 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("target", asideChildrenSub_r696.target ? "_blank" : "_self");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](6, _c4, asideItem_r666.state, asideChildren_r686.state, asideChildrenSub_r696.state));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideChildrenSub_r696.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", asideChildrenSub_r696.badge);
} }
function AdminComponent_div_147_ul_3_li_3_ng_template_11_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AdminComponent_div_147_ul_3_li_3_ng_template_11_li_1_span_6_Template, 2, 4, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AdminComponent_div_147_ul_3_li_3_ng_template_11_li_1_ng_template_9_Template, 8, 10, "ng-template", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asideChildren_r686 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r688 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("dropdown-icon", ctx_r688.dropDownIcon)("subitem-icon", ctx_r688.subItemIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideChildren_r686.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", asideChildren_r686.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", asideChildren_r686.children);
} }
function AdminComponent_div_147_ul_3_li_3_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AdminComponent_div_147_ul_3_li_3_ng_template_11_li_0_Template, 8, 9, "li", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminComponent_div_147_ul_3_li_3_ng_template_11_li_1_Template, 10, 7, "li", 107);
} if (rf & 2) {
    const asideChildren_r686 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", asideChildren_r686.type !== "sub");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", asideChildren_r686.type === "sub");
} }
function AdminComponent_div_147_ul_3_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AdminComponent_div_147_ul_3_li_3_span_8_Template, 2, 4, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AdminComponent_div_147_ul_3_li_3_ng_template_11_Template, 2, 2, "ng-template", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asideItem_r666 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r669 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("group", asideItem_r666.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("dropdown-icon", ctx_r669.dropDownIcon)("subitem-icon", ctx_r669.subItemIcon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](asideItem_r666.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideItem_r666.short_label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideItem_r666.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", asideItem_r666.badge);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", asideItem_r666.children);
} }
function AdminComponent_div_147_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdminComponent_div_147_ul_3_li_1_Template, 10, 11, "li", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AdminComponent_div_147_ul_3_li_2_Template, 4, 5, "li", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AdminComponent_div_147_ul_3_li_3_Template, 12, 14, "li", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asideItem_r666 = ctx.$implicit;
    const ctx_r665 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("group", asideItem_r666.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("item-border", ctx_r665.itemBorder)("item-border-style", ctx_r665.itemBorderStyle)("subitem-border", ctx_r665.subItemBorder);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", asideItem_r666.type === "external");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", asideItem_r666.type === "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", asideItem_r666.type === "sub");
} }
function AdminComponent_div_147_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AdminComponent_div_147_ul_3_Template, 4, 7, "ul", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const asideItems_r664 = ctx.$implicit;
    const ctx_r663 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("menu-title-theme", ctx_r663.menuTitleTheme);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](asideItems_r664.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", asideItems_r664.main);
} }
const _c5 = function () { return ["/dashboard"]; };
class AdminComponent {
    constructor(menuItems, _router) {
        this.menuItems = menuItems;
        this._router = _router;
        this.navType = 'st5';
        this.themeLayout = 'vertical';
        this.vNavigationView = 'view1';
        this.verticalPlacement = 'left';
        this.verticalLayout = 'wide';
        this.deviceType = 'desktop';
        this.verticalNavType = 'expanded';
        this.verticalEffect = 'shrink';
        this.pcodedHeaderPosition = 'fixed';
        this.pcodedSidebarPosition = 'fixed';
        this.headerTheme = 'theme1';
        this.logoTheme = 'theme1';
        this.toggleOn = true;
        this.headerFixedMargin = '80px';
        this.navBarTheme = 'themelight1';
        this.activeItemTheme = 'theme4';
        this.isCollapsedMobile = 'no-block';
        this.isCollapsedSideBar = 'no-block';
        this.chatToggle = 'out';
        this.chatToggleInverse = 'in';
        this.chatInnerToggle = 'off';
        this.chatInnerToggleInverse = 'on';
        this.menuTitleTheme = 'theme5';
        this.itemBorder = true;
        this.itemBorderStyle = 'none';
        this.subItemBorder = true;
        this.subItemIcon = 'style6';
        this.dropDownIcon = 'style1';
        this.isSidebarChecked = true;
        this.isHeaderChecked = true;
        const scrollHeight = window.screen.height - 150;
        this.innerHeight = scrollHeight + 'px';
        this.windowWidth = window.innerWidth;
        this.setMenuAttributes(this.windowWidth);
        // dark
        /*this.setLayoutType('dark');
        this.headerTheme = 'theme5';
        this.logoTheme = 'theme5';*/
        // light-dark
        /*this.setLayoutType('dark');
        this.setNavBarTheme('themelight1');
        this.navType = 'st2';*/
        // dark-light
        // this.setNavBarTheme('theme1');
        // this.navType = 'st3';
    }
    ngOnInit() {
        let isLogin = localStorage.getItem('userId');
        this.userName = localStorage.getItem('userName');
        this.userType = localStorage.getItem('userType');
        if (isLogin != null) {
            this.setBackgroundPattern('pattern2');
        }
        else {
            this._router.navigate(['/login']);
        }
    }
    logout() {
        localStorage.clear();
        this._router.navigate(['/login']);
    }
    onResize(event) {
        this.innerHeight = event.target.innerHeight + 'px';
        /* menu responsive */
        this.windowWidth = event.target.innerWidth;
        let reSizeFlag = true;
        if (this.deviceType === 'tablet' && this.windowWidth >= 768 && this.windowWidth <= 1024) {
            reSizeFlag = false;
        }
        else if (this.deviceType === 'mobile' && this.windowWidth < 768) {
            reSizeFlag = false;
        }
        /* for check device */
        if (reSizeFlag) {
            this.setMenuAttributes(this.windowWidth);
        }
    }
    setMenuAttributes(windowWidth) {
        if (windowWidth >= 768 && windowWidth <= 1024) {
            this.deviceType = 'tablet';
            this.verticalNavType = 'offcanvas';
            this.verticalEffect = 'push';
        }
        else if (windowWidth < 768) {
            this.deviceType = 'mobile';
            this.verticalNavType = 'offcanvas';
            this.verticalEffect = 'overlay';
        }
        else {
            this.deviceType = 'desktop';
            this.verticalNavType = 'expanded';
            this.verticalEffect = 'shrink';
        }
    }
    toggleOpened() {
        if (this.windowWidth < 768) {
            this.toggleOn = this.verticalNavType === 'offcanvas' ? true : this.toggleOn;
        }
        this.verticalNavType = this.verticalNavType === 'expanded' ? 'offcanvas' : 'expanded';
    }
    onClickedOutside(e) {
        if (this.windowWidth < 768 && this.toggleOn && this.verticalNavType !== 'offcanvas') {
            this.toggleOn = true;
            this.verticalNavType = 'offcanvas';
        }
    }
    onMobileMenu() {
        this.isCollapsedMobile = this.isCollapsedMobile === 'yes-block' ? 'no-block' : 'yes-block';
    }
    toggleChat() {
        this.chatToggle = this.chatToggle === 'out' ? 'in' : 'out';
        this.chatToggleInverse = this.chatToggleInverse === 'out' ? 'in' : 'out';
        this.chatInnerToggle = 'off';
        this.chatInnerToggleInverse = 'off';
    }
    toggleChatInner() {
        this.chatInnerToggle = this.chatInnerToggle === 'off' ? 'on' : 'off';
        this.chatInnerToggleInverse = this.chatInnerToggleInverse === 'off' ? 'on' : 'off';
    }
    searchFriendList(e) {
        const search = (this.search_friends.nativeElement.value).toLowerCase();
        let search_input;
        let search_parent;
        const friendList = document.querySelectorAll('.userlist-box .media-body .chat-header');
        Array.prototype.forEach.call(friendList, function (elements, index) {
            search_input = (elements.innerHTML).toLowerCase();
            search_parent = (elements.parentNode).parentNode;
            if (search_input.indexOf(search) !== -1) {
                search_parent.classList.add('show');
                search_parent.classList.remove('hide');
            }
            else {
                search_parent.classList.add('hide');
                search_parent.classList.remove('show');
            }
        });
    }
    toggleOpenedSidebar() {
        this.isCollapsedSideBar = this.isCollapsedSideBar === 'yes-block' ? 'no-block' : 'yes-block';
    }
    toggleRightbar() {
        this.configOpenRightBar = this.configOpenRightBar === 'open' ? '' : 'open';
    }
    setSidebarPosition() {
        this.isSidebarChecked = !this.isSidebarChecked;
        this.pcodedSidebarPosition = this.isSidebarChecked === true ? 'fixed' : 'absolute';
    }
    setHeaderPosition() {
        this.isHeaderChecked = !this.isHeaderChecked;
        this.pcodedHeaderPosition = this.isHeaderChecked === true ? 'fixed' : 'relative';
        this.headerFixedMargin = this.isHeaderChecked === true ? '80px' : '';
    }
    setBackgroundPattern(pattern) {
        document.querySelector('body').setAttribute('themebg-pattern', pattern);
    }
    setLayoutType(type) {
        this.layoutType = type;
        if (type === 'dark') {
            this.headerTheme = 'theme6';
            this.navBarTheme = 'theme1';
            this.logoTheme = 'theme6';
            document.querySelector('body').classList.add('dark');
        }
        else {
            this.headerTheme = 'theme1';
            this.navBarTheme = 'themelight1';
            this.logoTheme = 'theme1';
            document.querySelector('body').classList.remove('dark');
        }
    }
    setNavBarTheme(theme) {
        if (theme === 'themelight1') {
            this.navBarTheme = 'themelight1';
        }
        else {
            this.navBarTheme = 'theme1';
        }
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_2__["MenuItems"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], viewQuery: function AdminComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.search_friends = _t.first);
    } }, decls: 157, vars: 47, consts: [[1, "pcoded", 3, "resize"], [1, "pcoded-overlay-box"], [1, "pcoded-container", "navbar-wrapper"], [1, "navbar", "header-navbar", "pcoded-header"], [1, "navbar-wrapper"], [1, "navbar-logo"], ["id", "mobile-collapse", "href", "javascript:;", 1, "mobile-menu", 3, "exclude", "click", "clickOutside"], [1, "ti-menu"], [3, "routerLink"], [1, "mobile-options", 3, "click"], [1, "ti-more"], [1, "navbar-container"], [1, "nav-left"], [1, "sidebar_toggle"], ["href", "javascript:;", 3, "click"], [1, "ti-menu", "f-18"], ["href", "javascript:;", "appToggleFullScreen", ""], [1, "ti-fullscreen"], [1, "nav-right", 3, "ngClass"], [1, "user-profile", "header-notification"], ["src", "assets/images/user3.png", "alt", "User-Profile-Image", 1, "img-radius"], [1, "camel-case"], [1, "ti-angle-down"], [1, "show-notification", "profile-notification"], [1, "cursor-pointer", 3, "click"], [1, "ti-layout-sidebar-left"], ["id", "sidebar", 1, "users", "p-chat-user"], [1, "had-container"], [1, "card", "card_main", "p-fixed", "users-main"], [1, "user-box"], [1, "card-body"], [1, "right-icon-control"], ["placeholder", "Search Friend", "id", "search-friends", 1, "form-control", "search-text", 3, "keyup"], ["searchFriends", ""], [1, "form-icon"], [1, "icofont", "icofont-search"], [1, "main-friend-list", "scroll-window"], [3, "config"], ["data-id", "1", "placement", "left", "ngbTooltip", "Josephin Doe", 1, "media", "userlist-box", 3, "click"], ["href", "javascript:;", 1, "media-left"], ["src", "assets/images/avatar-2.jpg", "alt", "Generic placeholder image", 1, "media-object"], [1, "live-status", "bg-success"], [1, "media-body"], [1, "f-13", "chat-header"], ["data-id", "2", "data-status", "online", "data-username", "Lary Doe", "placement", "left", "ngbTooltip", "Lary Doe", 1, "media", "userlist-box", 3, "click"], ["src", "assets/images/avatar-3.jpg", "alt", "Generic placeholder image", 1, "media-object"], ["data-id", "3", "data-status", "online", "data-username", "Alice", "placement", "left", "ngbTooltip", "Alice", 1, "media", "userlist-box", 3, "click"], ["src", "assets/images/avatar-5.jpg", "alt", "Generic placeholder image", 1, "media-object"], ["data-id", "4", "data-status", "offline", "data-username", "Alia", "placement", "left", "ngbTooltip", "Alia", 1, "media", "userlist-box", 3, "click"], [1, "live-status", "bg-danger"], ["data-id", "5", "data-status", "online", "data-username", "Suzen", "placement", "left", "ngbTooltip", "Suzen", 1, "media", "userlist-box", 3, "click"], ["data-id", "6", "data-status", "offline", "data-username", "Michael Scofield", "placement", "left", "ngbTooltip", "Michael Scofield", 1, "media", "userlist-box", 3, "click"], [1, "card", "card_main", "showChat_inner"], [1, "media", "chat-inner-header"], [1, "back_chatBox", 3, "click"], [1, "icofont", "icofont-rounded-left"], [1, "media", "chat-messages"], ["href", "javascript:;", 1, "media-left", "photo-table"], ["src", "assets/images/avatar-1.jpg", "alt", "Generic placeholder image", 1, "media-object", "m-t-5"], [1, "media-body", "chat-menu-content"], [1, ""], [1, "chat-cont"], [1, "chat-time"], [1, "media-body", "chat-menu-reply"], [1, "media-right", "photo-table"], ["href", "javascript:;"], ["src", "assets/images/user3.png", "alt", "Generic placeholder image", 1, "media-object", "m-t-5"], [1, "chat-reply-box", "p-b-20"], ["type", "text", "placeholder", "Share Your Thoughts", 1, "form-control", "search-text"], [1, "icofont", "icofont-paper-plane"], [1, "pcoded-main-container"], [1, "pcoded-wrapper"], ["id", "main_navbar", "sub-item-theme", "theme2", "active-item-style", "style0", 1, "pcoded-navbar", 3, "exclude", "clickOutside"], [1, "icon-close", "icons"], ["appAccordion", "", 1, "pcoded-inner-navbar", "main-menu"], [1, "main-menu-header"], ["src", "assets/images/user3.png", "alt", "User-Profile-Image", 1, "img-40", "img-radius"], [1, "user-details"], ["id", "more-details", 3, "click"], [1, "main-menu-content"], [1, "more-details", 3, "ngClass"], ["class", "d-color", 4, "ngFor", "ngForOf"], [1, "pcoded-content"], [1, "pcoded-inner-content"], [1, "main-body"], [1, "page-wrapper"], [1, "page-body"], [1, "d-color"], [1, "pcoded-navigatio-lavel"], ["class", "pcoded-item pcoded-left-item", "appAccordionLink", "", 3, "group", 4, "ngFor", "ngForOf"], ["appAccordionLink", "", 1, "pcoded-item", "pcoded-left-item", 3, "group"], ["appAccordionLink", "", 3, "routerLinkActive", "group", 4, "ngIf"], ["class", "pcoded-hasmenu", "appAccordionLink", "", 3, "routerLinkActive", "group", 4, "ngIf"], ["appAccordionLink", "", 3, "routerLinkActive", "group"], ["appAccordionToggle", "", 3, "href", "target"], [1, "pcoded-micon"], [1, "pcoded-mtext"], [3, "class", 4, "ngFor", "ngForOf"], [1, "pcoded-mcaret"], ["appAccordionToggle", "", 3, "routerLink", "target", 4, "ngIf", "ngIfElse"], ["mainContent", ""], ["appAccordionToggle", "", 3, "routerLink", "target"], ["appAccordionLink", "", 1, "pcoded-hasmenu", 3, "routerLinkActive", "group"], ["href", "javascript:;", "appAccordionToggle", "", 3, "routerLinkActive"], [1, "pcoded-submenu"], ["ngFor", "", 3, "ngForOf"], [3, "routerLinkActive", 4, "ngIf"], ["class", "pcoded-hasmenu", "appAccordionLink", "", "group", "sub-toggled", 3, "routerLinkActive", 4, "ngIf"], [3, "routerLinkActive"], [3, "routerLink", "target"], [1, "ti-angle-right"], ["appAccordionLink", "", "group", "sub-toggled", 1, "pcoded-hasmenu", 3, "routerLinkActive"], ["href", "javascript:;", "appAccordionToggle", ""], [1, "ti-direction-alt"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function AdminComponent_Template_div_resize_0_listener($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_a_click_6_listener() { return ctx.toggleOpened(); })("clickOutside", function AdminComponent_Template_a_clickOutside_6_listener($event) { return ctx.onClickedOutside($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "P");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "roto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "T");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "ype");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_a_click_16_listener() { return ctx.onMobileMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_a_click_23_listener() { return ctx.toggleOpened(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ul", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_a_click_37_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "input", 32, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function AdminComponent_Template_input_keyup_46_listener($event) { return ctx.searchFriendList($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "perfect-scrollbar", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_div_click_52_listener() { return ctx.toggleChatInner(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Josephin Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_div_click_59_listener() { return ctx.toggleChatInner(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Lary Doe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_div_click_66_listener() { return ctx.toggleChatInner(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Alice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_div_click_73_listener() { return ctx.toggleChatInner(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Alia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_div_click_80_listener() { return ctx.toggleChatInner(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Suzen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_div_click_87_listener() { return ctx.toggleChatInner(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Michael Scofield");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_a_click_96_listener() { return ctx.toggleChatInner(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " Josephin Doe ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "perfect-scrollbar", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "I'm just looking around. Will you tell me something about yourself?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "8:20 a.m.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "I'm just looking around. Will you tell me something about yourself?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "p", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "8:20 a.m.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "img", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "input", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "i", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "nav", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOutside", function AdminComponent_Template_nav_clickOutside_126_listener($event) { return ctx.onClickedOutside($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "i", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "img", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "span", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_span_click_137_listener() { return ctx.toggleOpenedSidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "li", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_Template_a_click_143_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "perfect-scrollbar", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](147, AdminComponent_div_147_Template, 4, 3, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "app-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "app-breadcrumbs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "app-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("nav-type", ctx.navType)("theme-layout", ctx.themeLayout)("layout-type", ctx.layoutType)("vertical-placement", ctx.verticalPlacement)("vertical-layout", ctx.verticalLayout)("pcoded-device-type", ctx.deviceType)("vertical-nav-type", ctx.verticalNavType)("vertical-effect", ctx.verticalEffect)("vnavigation-view", ctx.vNavigationView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("pcoded-header-position", ctx.pcodedHeaderPosition)("header-theme", ctx.headerTheme);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("logo-theme", ctx.logoTheme);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("exclude", "#main_navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](45, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@mobileMenuTop", ctx.isCollapsedMobile)("ngClass", ctx.isCollapsedMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](46, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@slideInOut", ctx.verticalPlacement === "right" ? ctx.chatToggleInverse : ctx.chatToggle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-width", "100%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@slideOnOff", ctx.verticalPlacement === "right" ? ctx.chatInnerToggleInverse : ctx.chatInnerToggle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-width", "100%")("max-height", "calc(100vh - 230px)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-top", ctx.headerFixedMargin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("exclude", "#mobile-collapse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("pcoded-header-position", ctx.pcodedHeaderPosition)("navbar-theme", ctx.navBarTheme)("active-item-theme", ctx.activeItemTheme)("pcoded-navbar-position", ctx.pcodedSidebarPosition);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.userType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@mobileMenuTop", ctx.isCollapsedSideBar)("ngClass", ctx.isCollapsedSideBar);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("max-width", "100%")("max-height", "calc(100vh - 230px)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuItems.getAll());
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbNavbar"], ng_click_outside__WEBPACK_IMPORTED_MODULE_5__["ClickOutsideDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _shared_fullscreen_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_6__["ToggleFullScreenDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbTooltip"], _shared_accordion_accordion_directive__WEBPACK_IMPORTED_MODULE_9__["AccordionDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _title_title_component__WEBPACK_IMPORTED_MODULE_10__["TitleComponent"], _breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_11__["BreadcrumbsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_12__["SpinnerComponent"], _shared_accordion_accordionlink_directive__WEBPACK_IMPORTED_MODULE_13__["AccordionLinkDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _shared_accordion_accordionanchor_directive__WEBPACK_IMPORTED_MODULE_14__["AccordionAnchorDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2NzcyJ9 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('mobileMenuTop', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('no-block, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    overflow: 'hidden',
                    height: '0px',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('yes-block', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    height: _angular_animations__WEBPACK_IMPORTED_MODULE_1__["AUTO_STYLE"],
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('no-block <=> yes-block', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out')
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideInOut', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    transform: 'translate3d(0, 0, 0)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    transform: 'translate3d(100%, 0, 0)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('in => out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('out => in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out'))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideOnOff', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('on', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    transform: 'translate3d(0, 0, 0)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('off', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                    transform: 'translate3d(100%, 0, 0)'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('on => off', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('off => on', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out'))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeInOutTranslate', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translate(0)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }))
                ])
            ])
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin',
                templateUrl: './admin.component.html',
                styleUrls: ['./admin.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('mobileMenuTop', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('no-block, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            overflow: 'hidden',
                            height: '0px',
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('yes-block', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            height: _angular_animations__WEBPACK_IMPORTED_MODULE_1__["AUTO_STYLE"],
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('no-block <=> yes-block', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out')
                        ])
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideInOut', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: 'translate3d(0, 0, 0)'
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: 'translate3d(100%, 0, 0)'
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('in => out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out')),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('out => in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out'))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('slideOnOff', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('on', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: 'translate3d(0, 0, 0)'
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('off', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: 'translate3d(100%, 0, 0)'
                        })),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('on => off', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out')),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('off => on', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out'))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fadeInOutTranslate', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ transform: 'translate(0)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }))
                        ])
                    ])
                ]
            }]
    }], function () { return [{ type: _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_2__["MenuItems"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { search_friends: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['searchFriends', /* TODO: add static flag */ { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/layout/admin/breadcrumbs/breadcrumbs.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/layout/admin/breadcrumbs/breadcrumbs.component.ts ***!
  \*******************************************************************/
/*! exports provided: BreadcrumbsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbsComponent", function() { return BreadcrumbsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function BreadcrumbsComponent_div_0_div_1_div_1_span_3_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i");
} if (rf & 2) {
    const breadcrumb_r755 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icofont ", breadcrumb_r755.icon, "");
} }
function BreadcrumbsComponent_div_0_div_1_div_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbsComponent_div_0_div_1_div_1_span_3_i_1_Template, 1, 3, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const last_r756 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", last_r756);
} }
function BreadcrumbsComponent_div_0_div_1_div_1_span_5_h4_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const breadcrumb_r759 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](breadcrumb_r759.label);
} }
function BreadcrumbsComponent_div_0_div_1_div_1_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbsComponent_div_0_div_1_div_1_span_5_h4_1_Template, 2, 1, "h4", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const last_r760 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", last_r760);
} }
function BreadcrumbsComponent_div_0_div_1_div_1_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const breadcrumb_r747 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](breadcrumb_r747.caption);
} }
function BreadcrumbsComponent_div_0_div_1_div_1_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const breadcrumb_r764 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", breadcrumb_r764.status === false ? "not-active" : "")("routerLink", breadcrumb_r764.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](breadcrumb_r764.label);
} }
function BreadcrumbsComponent_div_0_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BreadcrumbsComponent_div_0_div_1_div_1_span_3_Template, 2, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BreadcrumbsComponent_div_0_div_1_div_1_span_5_Template, 2, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BreadcrumbsComponent_div_0_div_1_div_1_span_6_Template, 2, 1, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, BreadcrumbsComponent_div_0_div_1_div_1_li_13_Template, 3, 3, "li", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const breadcrumb_r747 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r750 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r750.breadcrumbs);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r750.breadcrumbs);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", breadcrumb_r747.caption);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r750.breadcrumbs);
} }
function BreadcrumbsComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbsComponent_div_0_div_1_div_1_Template, 14, 5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const last_r748 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", last_r748);
} }
function BreadcrumbsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BreadcrumbsComponent_div_0_div_1_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const breadcrumb_r747 = ctx.$implicit;
    const last_r748 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", breadcrumb_r747.status && last_r748);
} }
class BreadcrumbsComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.tempState = [];
        this.router.events
            .filter(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])
            .subscribe(() => {
            this.breadcrumbs = [];
            this.tempState = [];
            let currentRoute = this.route.root, url = '';
            do {
                const childrenRoutes = currentRoute.children;
                currentRoute = null;
                childrenRoutes.forEach(routes => {
                    if (routes.outlet === 'primary') {
                        const routeSnapshot = routes.snapshot;
                        url += '/' + routeSnapshot.url.map(segment => segment.path).join('/');
                        if (routes.snapshot.data.breadcrumb !== undefined) {
                            let status = true;
                            if (routes.snapshot.data.status !== undefined) {
                                status = routes.snapshot.data.status;
                            }
                            let icon = false;
                            if (routes.snapshot.data.icon !== undefined) {
                                icon = routes.snapshot.data.icon;
                            }
                            let breadcrumb_caption = false;
                            if (routes.snapshot.data.breadcrumb_caption !== undefined) {
                                breadcrumb_caption = routes.snapshot.data.breadcrumb_caption;
                            }
                            if (!this.tempState.includes(routes.snapshot.data.breadcrumb)) {
                                this.tempState.push(routes.snapshot.data.breadcrumb);
                                this.breadcrumbs.push({
                                    label: routes.snapshot.data.breadcrumb,
                                    icon: icon,
                                    caption: breadcrumb_caption,
                                    status: status,
                                    url: url
                                });
                            }
                        }
                        currentRoute = routes;
                    }
                });
            } while (currentRoute);
        });
    }
    ngOnInit() {
    }
}
BreadcrumbsComponent.ɵfac = function BreadcrumbsComponent_Factory(t) { return new (t || BreadcrumbsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
BreadcrumbsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BreadcrumbsComponent, selectors: [["app-breadcrumbs"]], decls: 1, vars: 1, consts: [["class", "", 4, "ngFor", "ngForOf"], [1, ""], ["class", "page-header card", 4, "ngIf"], [1, "page-header", "card"], ["class", "row align-items-end", 4, "ngIf"], [1, "row", "align-items-end"], [1, "col-lg-8"], [1, "page-header-title"], [4, "ngFor", "ngForOf"], [1, "d-inline"], ["class", "d-block", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "col-lg-4"], [1, "page-header-breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item"], [3, "routerLink"], [1, "icofont", "icofont-home"], ["class", "breadcrumb-item", 4, "ngFor", "ngForOf"], [3, "class", 4, "ngIf"], [1, "d-block"], [3, "ngClass", "routerLink"]], template: function BreadcrumbsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BreadcrumbsComponent_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.breadcrumbs);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".not-active[_ngcontent-%COMP%] {\n  pointer-events: none;\n  cursor: default;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2FkbWluL2JyZWFkY3J1bWJzL0Q6XFxSQUpFU0hcXEFuZ3VsYXJfUHJvamVjdFxcVmF5dmFTZXRBZG1pbi9zcmNcXGFwcFxcbGF5b3V0XFxhZG1pblxcYnJlYWRjcnVtYnNcXGJyZWFkY3J1bWJzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvYWRtaW4vYnJlYWRjcnVtYnMvYnJlYWRjcnVtYnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUNBLGVBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hZG1pbi9icmVhZGNydW1icy9icmVhZGNydW1icy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3QtYWN0aXZlIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBjdXJzb3I6IGRlZmF1bHQ7XHJcbn1cclxuIiwiLm5vdC1hY3RpdmUge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreadcrumbsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-breadcrumbs',
                templateUrl: './breadcrumbs.component.html',
                styleUrls: ['./breadcrumbs.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/layout/admin/title/title.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/admin/title/title.component.ts ***!
  \*******************************************************/
/*! exports provided: TitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleComponent", function() { return TitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");





class TitleComponent {
    constructor(router, route, titleService) {
        this.router = router;
        this.route = route;
        this.titleService = titleService;
        this.router.events
            .filter(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])
            .subscribe(() => {
            let currentRoute = this.route.root;
            let title = '';
            do {
                const childrenRoutes = currentRoute.children;
                currentRoute = null;
                childrenRoutes.forEach(routes => {
                    if (routes.outlet === 'primary') {
                        title = routes.snapshot.data.breadcrumb;
                        currentRoute = routes;
                    }
                });
            } while (currentRoute);
            // debugger;
            this.titleService.setTitle(title + ' | ProtoType');
        });
    }
    ngOnInit() {
    }
}
TitleComponent.ɵfac = function TitleComponent_Factory(t) { return new (t || TitleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"])); };
TitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TitleComponent, selectors: [["app-title"]], decls: 1, vars: 0, template: function TitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "span");
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TitleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-title',
                template: '<span></span>'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }]; }, null); })();


/***/ }),

/***/ "./src/app/layout/auth/auth.component.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/auth/auth.component.ts ***!
  \***********************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/spinner/spinner.component */ "./src/app/shared/spinner/spinner.component.ts");




class AuthComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(); };
AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["app-auth"]], decls: 2, vars: 0, template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hdXRoL2F1dGguY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-auth',
                templateUrl: './auth.component.html',
                styleUrls: ['./auth.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/accordion/accordion.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/accordion/accordion.directive.ts ***!
  \*********************************************************/
/*! exports provided: AccordionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionDirective", function() { return AccordionDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm2015/add/operator/filter.js");





class AccordionDirective {
    constructor(router) {
        this.router = router;
        this.navlinks = [];
        this.countState = 1;
    }
    closeOtherLinks(openLink) {
        this.countState++;
        if ((openLink.group !== 'sub-toggled' || openLink.group !== 'main-toggled') && this.countState === 1) {
            if (window.innerWidth < 768 || (window.innerWidth >= 768 && window.innerWidth <= 1024)) {
                const toggled_element = document.querySelector('#mobile-collapse');
                toggled_element.click();
            }
        }
        this.navlinks.forEach((link) => {
            if (link !== openLink && (link.group === 'sub-toggled' || openLink.group !== 'sub-toggled')) {
                link.open = false;
            }
        });
    }
    addLink(link) {
        this.navlinks.push(link);
    }
    removeGroup(link) {
        const index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    }
    getUrl() {
        return this.router.url;
    }
    ngOnInit() {
        this._router = this.router.events.filter(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]).subscribe((event) => {
            this.countState = 0;
            this.navlinks.forEach((link) => {
                if (link.group) {
                    const routeUrl = this.getUrl();
                    const currentUrl = routeUrl.split('/');
                    if (currentUrl.indexOf(link.group) > 0) {
                        link.open = true;
                        this.closeOtherLinks(link);
                    }
                }
            });
        });
    }
}
AccordionDirective.ɵfac = function AccordionDirective_Factory(t) { return new (t || AccordionDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AccordionDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AccordionDirective, selectors: [["", "appAccordion", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appAccordion]',
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/accordion/accordionanchor.directive.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/accordion/accordionanchor.directive.ts ***!
  \***************************************************************/
/*! exports provided: AccordionAnchorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionAnchorDirective", function() { return AccordionAnchorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordionlink.directive */ "./src/app/shared/accordion/accordionlink.directive.ts");




class AccordionAnchorDirective {
    constructor(navlink) {
        this.navlink = navlink;
    }
    onClick(e) {
        this.navlink.toggle();
    }
}
AccordionAnchorDirective.ɵfac = function AccordionAnchorDirective_Factory(t) { return new (t || AccordionAnchorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"])); };
AccordionAnchorDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AccordionAnchorDirective, selectors: [["", "appAccordionToggle", ""]], hostBindings: function AccordionAnchorDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AccordionAnchorDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionAnchorDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appAccordionToggle]'
            }]
    }], function () { return [{ type: _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"]]
            }] }]; }, { onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/accordion/accordionlink.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/accordion/accordionlink.directive.ts ***!
  \*************************************************************/
/*! exports provided: AccordionLinkDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionLinkDirective", function() { return AccordionLinkDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordion.directive */ "./src/app/shared/accordion/accordion.directive.ts");




class AccordionLinkDirective {
    constructor(nav) {
        this.nav = nav;
    }
    get open() {
        return this._open;
    }
    set open(value) {
        this._open = value;
        /*for slimscroll on and off*/
        document.querySelector('.pcoded-inner-navbar').classList.toggle('scroll-sidebar');
        if (value) {
            this.nav.closeOtherLinks(this);
        }
    }
    ngOnInit() {
        this.nav.addLink(this);
    }
    ngOnDestroy() {
        this.nav.removeGroup(this);
    }
    toggle() {
        /*for slimscroll on and off*/
        document.querySelector('.pcoded-inner-navbar').classList.add('scroll-sidebar');
        this.open = !this.open;
    }
}
AccordionLinkDirective.ɵfac = function AccordionLinkDirective_Factory(t) { return new (t || AccordionLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_accordion_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionDirective"])); };
AccordionLinkDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AccordionLinkDirective, selectors: [["", "appAccordionLink", ""]], hostVars: 2, hostBindings: function AccordionLinkDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("pcoded-trigger", ctx.open);
    } }, inputs: { group: "group", open: "open" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccordionLinkDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appAccordionLink]'
            }]
    }], function () { return [{ type: _accordion_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionDirective"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_accordion_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionDirective"]]
            }] }]; }, { group: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], open: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.pcoded-trigger']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/accordion/index.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/accordion/index.ts ***!
  \*******************************************/
/*! exports provided: AccordionAnchorDirective, AccordionLinkDirective, AccordionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordionanchor.directive */ "./src/app/shared/accordion/accordionanchor.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionAnchorDirective", function() { return _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_0__["AccordionAnchorDirective"]; });

/* harmony import */ var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordionlink.directive */ "./src/app/shared/accordion/accordionlink.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionLinkDirective", function() { return _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__["AccordionLinkDirective"]; });

/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion.directive */ "./src/app/shared/accordion/accordion.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccordionDirective", function() { return _accordion_directive__WEBPACK_IMPORTED_MODULE_2__["AccordionDirective"]; });






/***/ }),

/***/ "./src/app/shared/card/card-animation.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/card/card-animation.ts ***!
  \***********************************************/
/*! exports provided: cardToggle, cardClose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardToggle", function() { return cardToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardClose", function() { return cardClose; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const cardToggle = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('cardToggle', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        overflow: 'hidden',
        height: '0px',
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        height: _angular_animations__WEBPACK_IMPORTED_MODULE_0__["AUTO_STYLE"],
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('collapsed <=> expanded', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms ease-in-out')
    ])
]);
const cardClose = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('cardClose', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 1
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
        opacity: 0,
        display: 'none'
    })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('open <=> closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('400ms')),
]);


/***/ }),

/***/ "./src/app/shared/card/card-refresh.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/card/card-refresh.directive.ts ***!
  \*******************************************************/
/*! exports provided: CardRefreshDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardRefreshDirective", function() { return CardRefreshDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CardRefreshDirective {
    constructor(el) {
        this.el = el;
    }
    open() {
        this.el.nativeElement.classList.add('rotate-refresh');
    }
    close() {
        this.el.nativeElement.classList.remove('rotate-refresh');
    }
}
CardRefreshDirective.ɵfac = function CardRefreshDirective_Factory(t) { return new (t || CardRefreshDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
CardRefreshDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CardRefreshDirective, selectors: [["", "appCardRefresh", ""]], hostBindings: function CardRefreshDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function CardRefreshDirective_mouseenter_HostBindingHandler() { return ctx.open(); })("mouseleave", function CardRefreshDirective_mouseleave_HostBindingHandler() { return ctx.close(); });
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardRefreshDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appCardRefresh]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { open: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseenter']
        }], close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseleave']
        }] }); })();


/***/ }),

/***/ "./src/app/shared/card/card-toggle.directive.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/card/card-toggle.directive.ts ***!
  \******************************************************/
/*! exports provided: CardToggleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardToggleDirective", function() { return CardToggleDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class CardToggleDirective {
    constructor(el) {
        this.el = el;
    }
    onToggle($event) {
        $event.preventDefault();
        this.el.nativeElement.classList.toggle('icon-up');
    }
}
CardToggleDirective.ɵfac = function CardToggleDirective_Factory(t) { return new (t || CardToggleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
CardToggleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: CardToggleDirective, selectors: [["", "appCardToggleEvent", ""]], hostBindings: function CardToggleDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardToggleDirective_click_HostBindingHandler($event) { return ctx.onToggle($event); });
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardToggleDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appCardToggleEvent]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { onToggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/card/card.component.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/card/card.component.ts ***!
  \***********************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _card_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card-animation */ "./src/app/shared/card/card-animation.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _card_toggle_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card-toggle.directive */ "./src/app/shared/card/card-toggle.directive.ts");





function CardComponent_div_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r635 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r635.headerContent);
} }
function CardComponent_div_1_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardComponent_div_1_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r644 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_div_1_li_7_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r644); const ctx_r643 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r643.isCardToggled = !ctx_r643.isCardToggled; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardComponent_div_1_li_8_Template(rf, ctx) { if (rf & 1) {
    const _r646 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_div_1_li_8_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r646); const ctx_r645 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r645.isCardToggled = !ctx_r645.isCardToggled; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardComponent_div_1_li_9_Template(rf, ctx) { if (rf & 1) {
    const _r648 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_div_1_li_9_Template_i_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r648); const ctx_r647 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r647.fullScreen($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r639 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("icofont icofont-maximize ", ctx_r639.fullCardIcon, " full-card");
} }
function CardComponent_div_1_li_10_Template(rf, ctx) { if (rf & 1) {
    const _r650 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_div_1_li_10_Template_i_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r650); const ctx_r649 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r649.toggleCard($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardComponent_div_1_li_11_Template(rf, ctx) { if (rf & 1) {
    const _r652 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_div_1_li_11_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r652); const ctx_r651 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r651.appCardRefresh(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardComponent_div_1_li_12_Template(rf, ctx) { if (rf & 1) {
    const _r654 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComponent_div_1_li_12_Template_i_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r654); const ctx_r653 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r653.closeCard($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CardComponent_div_1_span_3_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CardComponent_div_1_span_4_Template, 2, 0, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CardComponent_div_1_li_7_Template, 2, 0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CardComponent_div_1_li_8_Template, 2, 0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CardComponent_div_1_li_9_Template, 2, 3, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CardComponent_div_1_li_10_Template, 2, 0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CardComponent_div_1_li_11_Template, 2, 0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CardComponent_div_1_li_12_Template, 2, 0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r633 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r633.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r633.classHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r633.classHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r633.isCardToggled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r633.isCardToggled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r633.isCardToggled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r633.isCardToggled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r633.isCardToggled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r633.isCardToggled);
} }
function CardComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = ["*", [["", 8, "code-header"]]];
const _c1 = ["*", ".code-header"];
class CardComponent {
    constructor() {
        this.classHeader = false;
        this.cardToggle = 'expanded';
        this.cardClose = 'open';
        this.loadCard = false;
        this.isCardToggled = false;
    }
    ngOnInit() {
    }
    toggleCard(event) {
        this.cardToggle = this.cardToggle === 'collapsed' ? 'expanded' : 'collapsed';
    }
    closeCard(event) {
        this.cardClose = this.cardClose === 'closed' ? 'open' : 'closed';
    }
    fullScreen(event) {
        this.fullCard = this.fullCard === 'full-card' ? '' : 'full-card';
        this.fullCardIcon = this.fullCardIcon === 'icofont-resize' ? '' : 'icofont-resize';
    }
    appCardRefresh() {
        this.loadCard = true;
        this.cardLoad = 'card-load';
        setTimeout(() => {
            this.cardLoad = '';
            this.loadCard = false;
        }, 3000);
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { headerContent: "headerContent", title: "title", blockClass: "blockClass", cardClass: "cardClass", classHeader: "classHeader" }, ngContentSelectors: _c1, decls: 6, vars: 10, consts: [[3, "ngClass"], ["class", "card-header", 4, "ngIf"], [1, "card-body", 3, "ngClass"], ["class", "card-loader", 4, "ngIf"], [1, "card-header"], [4, "ngIf"], [1, "card-header-right"], [1, "list-unstyled", "card-option"], [3, "click", 4, "ngIf"], [3, "click"], [1, "icofont", "icofont-simple-left"], [1, "icofont", "icofont-simple-right"], ["appCardToggleEvent", "", 1, "icofont", "icofont-minus", "minimize-card", 3, "click"], [1, "icofont", "icofont-refresh", "reload-card", 3, "click"], [1, "icofont", "icofont-error", "close-card", 3, "click"], [1, "card-loader"], [1, "icofont", "icofont-refresh", "rotate-refresh"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardComponent_div_1_Template, 13, 9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CardComponent_div_5_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate2"]("card ", ctx.fullCard, " ", ctx.cardLoad, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@cardClose", ctx.cardClose)("ngClass", ctx.cardClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@cardToggle", ctx.cardToggle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.blockClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loadCard);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _card_toggle_directive__WEBPACK_IMPORTED_MODULE_3__["CardToggleDirective"]], styles: [".card-header-right {\r\n    z-index: 999;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NhcmQvY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jYXJkL2NhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWhlYWRlci1yaWdodCB7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbn0iXX0= */"], encapsulation: 2, data: { animation: [_card_animation__WEBPACK_IMPORTED_MODULE_1__["cardToggle"], _card_animation__WEBPACK_IMPORTED_MODULE_1__["cardClose"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.css'],
                animations: [_card_animation__WEBPACK_IMPORTED_MODULE_1__["cardToggle"], _card_animation__WEBPACK_IMPORTED_MODULE_1__["cardClose"]],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, { headerContent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], blockClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], cardClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], classHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/element/data-filter.pipe.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/element/data-filter.pipe.ts ***!
  \****************************************************/
/*! exports provided: DataFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataFilterPipe", function() { return DataFilterPipe; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



class DataFilterPipe {
    transform(array, query) {
        if (query) {
            return lodash__WEBPACK_IMPORTED_MODULE_0__["filter"](array, row => row.name.indexOf(query) > -1);
        }
        return array;
    }
}
DataFilterPipe.ɵfac = function DataFilterPipe_Factory(t) { return new (t || DataFilterPipe)(); };
DataFilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({ name: "dataFilter", type: DataFilterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataFilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"],
        args: [{
                name: 'dataFilter'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/element/parent-remove.directive.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/element/parent-remove.directive.ts ***!
  \***********************************************************/
/*! exports provided: ParentRemoveDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentRemoveDirective", function() { return ParentRemoveDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ParentRemoveDirective {
    constructor(elements) {
        this.elements = elements;
    }
    onToggle($event) {
        $event.preventDefault();
        this.alert_parent = (this.elements).nativeElement.parentElement;
        this.alert_parent.remove();
    }
}
ParentRemoveDirective.ɵfac = function ParentRemoveDirective_Factory(t) { return new (t || ParentRemoveDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ParentRemoveDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ParentRemoveDirective, selectors: [["", "appParentRemove", ""]], hostBindings: function ParentRemoveDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ParentRemoveDirective_click_HostBindingHandler($event) { return ctx.onToggle($event); });
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParentRemoveDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appParentRemove]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { onToggle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/fullscreen/toggle-fullscreen.directive.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/fullscreen/toggle-fullscreen.directive.ts ***!
  \******************************************************************/
/*! exports provided: ToggleFullScreenDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleFullScreenDirective", function() { return ToggleFullScreenDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_1__);



class ToggleFullScreenDirective {
    onClick() {
        if (screenfull__WEBPACK_IMPORTED_MODULE_1__["isEnabled"]) {
            screenfull__WEBPACK_IMPORTED_MODULE_1__["toggle"]();
        }
    }
}
ToggleFullScreenDirective.ɵfac = function ToggleFullScreenDirective_Factory(t) { return new (t || ToggleFullScreenDirective)(); };
ToggleFullScreenDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ToggleFullScreenDirective, selectors: [["", "appToggleFullScreen", ""]], hostBindings: function ToggleFullScreenDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToggleFullScreenDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToggleFullScreenDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appToggleFullScreen]'
            }]
    }], null, { onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }] }); })();


/***/ }),

/***/ "./src/app/shared/menu-items/menu-items.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/menu-items/menu-items.ts ***!
  \*************************************************/
/*! exports provided: MenuItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuItems", function() { return MenuItems; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const MENUITEMS = [
    {
        label: 'Navigation',
        main: [
            {
                state: 'dashboard',
                short_label: 'D',
                name: 'Dashboard',
                type: 'link',
                icon: 'ti-home'
            },
            {
                state: 'master',
                short_label: 'MS',
                name: 'Master',
                type: 'sub',
                icon: 'ti-crown',
                children: [
                    {
                        state: 'item-master',
                        name: 'Item Master'
                    },
                ]
            },
        ],
    },
];
class MenuItems {
    getAll() {
        return MENUITEMS;
    }
}
MenuItems.ɵfac = function MenuItems_Factory(t) { return new (t || MenuItems)(); };
MenuItems.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MenuItems, factory: MenuItems.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuItems, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/modal-animation/modal-animation.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/modal-animation/modal-animation.component.ts ***!
  \*********************************************************************/
/*! exports provided: ModalAnimationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalAnimationComponent", function() { return ModalAnimationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function ModalAnimationComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 4);
} }
function ModalAnimationComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r659 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalAnimationComponent_ng_template_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r659); const ctx_r658 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r658.close(ctx_r658.modalID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = ["*"];
class ModalAnimationComponent {
    constructor() {
        this.backDrop = false;
    }
    ngOnInit() {
    }
    close(event) {
        document.querySelector('#' + event).classList.remove('md-show');
    }
}
ModalAnimationComponent.ɵfac = function ModalAnimationComponent_Factory(t) { return new (t || ModalAnimationComponent)(); };
ModalAnimationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalAnimationComponent, selectors: [["app-modal-animation"]], inputs: { modalClass: "modalClass", contentClass: "contentClass", modalID: "modalID", backDrop: "backDrop" }, ngContentSelectors: _c0, decls: 6, vars: 5, consts: [[1, "md-modal", 3, "ngClass", "id"], [1, "md-content", 3, "ngClass"], ["class", "md-overlay", 4, "ngIf", "ngIfElse"], ["backDropOver", ""], [1, "md-overlay"], [1, "md-overlay", 3, "click"]], template: function ModalAnimationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ModalAnimationComponent_div_3_Template, 1, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ModalAnimationComponent_ng_template_4_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r656 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.modalID);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.modalClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.contentClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.backDrop)("ngIfElse", _r656);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".md-close-btn {\r\n    border: 0;\r\n    background: none;\r\n    color: #ffffff;\r\n    position: absolute;\r\n    top: 21px;\r\n    right: 16px;\r\n    font-size: 1.2em;\r\n    cursor: pointer;\r\n}\r\n\r\n.md-perspective,\r\n.md-perspective body {\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n.md-perspective body  {\r\n    background: #222;\r\n    perspective: 600px;\r\n}\r\n\r\n.container {\r\n    min-height: 100%;\r\n}\r\n\r\n.md-modal {\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    width: 50%;\r\n    max-width: 630px;\r\n    min-width: 320px;\r\n    height: auto;\r\n    z-index: 2000;\r\n    visibility: hidden;\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n    transform: translateX(-50%) translateY(-50%);\r\n}\r\n\r\n.md-show {\r\n    visibility: visible;\r\n}\r\n\r\n.md-overlay {\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    visibility: hidden;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 1100;\r\n    opacity: 0;\r\n    background: rgba(55, 58, 60, 0.65);\r\n    transition: all 0.3s;\r\n}\r\n\r\n.md-show ~ .md-overlay {\r\n    opacity: 1;\r\n    visibility: visible;\r\n}\r\n\r\n.md-content {\r\n    color: #666666;\r\n    background: #fff;\r\n    position: relative;\r\n    border-radius: 3px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.md-content h3 {\r\n    color: #fff;\r\n    margin: 0;\r\n    padding: 0.4em;\r\n    text-align: center;\r\n    font-size: 2.4em;\r\n    font-weight: 300;\r\n    opacity: 0.8;\r\n    background: rgba(0, 115, 170, 0.93);\r\n    border-radius: 3px 3px 0 0;\r\n}\r\n\r\n.md-content > div {\r\n    padding: 15px 40px 30px;\r\n    margin: 0;\r\n    font-weight: 300;\r\n    font-size: 1.15em;\r\n}\r\n\r\n.md-content > div p {\r\n    margin: 0;\r\n    padding: 10px 0;\r\n}\r\n\r\n.md-content > div ul {\r\n    margin: 0;\r\n    padding: 0 0 30px 20px;\r\n}\r\n\r\n.md-content > div ul li {\r\n    padding: 5px 0;\r\n}\r\n\r\n.md-content button {\r\n    display: block;\r\n    margin: 0 auto;\r\n    font-size: 0.8em;\r\n}\r\n\r\n/* Effect 1: Fade in and scale up */\r\n\r\n.md-effect-1 .md-content {\r\n    transform: scale(0.7);\r\n    opacity: 0;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.md-show.md-effect-1 .md-content {\r\n    transform: scale(1);\r\n    opacity: 1;\r\n}\r\n\r\n/* Effect 2: Slide from the right */\r\n\r\n.md-effect-2 .md-content {\r\n    transform: translateX(20%);\r\n    opacity: 0;\r\n    transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);\r\n}\r\n\r\n.md-show.md-effect-2 .md-content {\r\n    transform: translateX(0);\r\n    opacity: 1;\r\n}\r\n\r\n/* Effect 3: Slide from the bottom */\r\n\r\n.md-effect-3 .md-content {\r\n    transform: translateY(20%);\r\n    opacity: 0;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.md-show.md-effect-3 .md-content {\r\n    transform: translateY(0);\r\n    opacity: 1;\r\n}\r\n\r\n/* Effect 4: Newspaper */\r\n\r\n.md-effect-4 .md-content {\r\n    transform: scale(0) rotate(720deg);\r\n    opacity: 0;\r\n}\r\n\r\n.md-show.md-effect-4 ~ .md-overlay,\r\n.md-effect-4 .md-content {\r\n    transition: all 0.5s;\r\n}\r\n\r\n.md-show.md-effect-4 .md-content {\r\n    transform: scale(1) rotate(0deg);\r\n    opacity: 1;\r\n}\r\n\r\n/* Effect 5: fall */\r\n\r\n.md-effect-5.md-modal {\r\n    perspective: 1300px;\r\n}\r\n\r\n.md-effect-5 .md-content {\r\n    transform-style: preserve-3d;\r\n    transform: translateZ(600px) rotateX(20deg);\r\n    opacity: 0;\r\n}\r\n\r\n.md-show.md-effect-5 .md-content {\r\n    transition: all 0.3s ease-in;\r\n    transform: translateZ(0px) rotateX(0deg);\r\n    opacity: 1;\r\n}\r\n\r\n/* Effect 6: side fall */\r\n\r\n.md-effect-6.md-modal {\r\n    perspective: 1300px;\r\n}\r\n\r\n.md-effect-6 .md-content {\r\n    transform-style: preserve-3d;\r\n    transform: translate(30%) translateZ(600px) rotate(10deg);\r\n    opacity: 0;\r\n}\r\n\r\n.md-show.md-effect-6 .md-content {\r\n    transition: all 0.3s ease-in;\r\n    transform: translate(0%) translateZ(0) rotate(0deg);\r\n    opacity: 1;\r\n}\r\n\r\n/* Effect 7:  slide and stick to top */\r\n\r\n.md-effect-7{\r\n    top: 0;\r\n    transform: translateX(-50%);\r\n}\r\n\r\n.md-effect-7 .md-content {\r\n    transform: translateY(-200%);\r\n    transition: all .3s;\r\n    opacity: 0;\r\n}\r\n\r\n.md-show.md-effect-7 .md-content {\r\n    transform: translateY(0%);\r\n    border-radius: 0 0 3px 3px;\r\n    opacity: 1;\r\n}\r\n\r\n/* Effect 8: 3D flip horizontal */\r\n\r\n.md-effect-8.md-modal {\r\n    perspective: 1300px;\r\n}\r\n\r\n.md-effect-8 .md-content {\r\n    transform-style: preserve-3d;\r\n    transform: rotateY(-70deg);\r\n    transition: all 0.3s;\r\n    opacity: 0;\r\n}\r\n\r\n.md-show.md-effect-8 .md-content {\r\n    transform: rotateY(0deg);\r\n    opacity: 1;\r\n}\r\n\r\n/* Effect 9: 3D flip vertical */\r\n\r\n.md-effect-9.md-modal {\r\n    perspective: 1300px;\r\n}\r\n\r\n.md-effect-9 .md-content {\r\n    transform-style: preserve-3d;\r\n    transform: rotateX(-70deg);\r\n    transition: all 0.3s;\r\n    opacity: 0;\r\n}\r\n\r\n.md-show.md-effect-9 .md-content {\r\n    transform: rotateX(0deg);\r\n    opacity: 1;\r\n}\r\n\r\n/* Effect 10: 3D sign */\r\n\r\n.md-effect-10.md-modal {\r\n    perspective: 1300px;\r\n}\r\n\r\n.md-effect-10 .md-content {\r\n    transform-style: preserve-3d;\r\n    transform: rotateX(-60deg);\r\n    transform-origin: 50% 0;\r\n    opacity: 0;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.md-show.md-effect-10 .md-content {\r\n    transform: rotateX(0deg);\r\n    opacity: 1;\r\n}\r\n\r\n/* Effect 11: Super scaled */\r\n\r\n.md-effect-11 .md-content {\r\n    transform: scale(2);\r\n    opacity: 0;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.md-show.md-effect-11 .md-content {\r\n    transform: scale(1);\r\n    opacity: 1;\r\n}\r\n\r\n/* Effect 12:  Just me */\r\n\r\n.md-effect-12 .md-content {\r\n    transform: scale(0.8);\r\n    opacity: 0;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.md-show.md-effect-12 ~ .md-overlay {\r\n    background: #0073aa;\r\n}\r\n\r\n.md-effect-12 .md-content h3,\r\n.md-effect-12 .md-content {\r\n    color: #fff;\r\n    background: transparent;\r\n}\r\n\r\n.md-show.md-effect-12 .md-content {\r\n    transform: scale(1);\r\n    opacity: 1;\r\n    border: 1px solid #fff;\r\n}\r\n\r\n/* Effect 13: 3D slit */\r\n\r\n.md-effect-13.md-modal {\r\n    perspective: 1300px;\r\n}\r\n\r\n.md-effect-13 .md-content {\r\n    transform-style: preserve-3d;\r\n    transform: translateZ(-3000px) rotateY(90deg);\r\n    opacity: 0;\r\n}\r\n\r\n.md-show.md-effect-13 .md-content {\r\n    -webkit-animation: slit .7s forwards ease-out;\r\n    animation: slit .7s forwards ease-out;\r\n}\r\n\r\n@-webkit-keyframes slit {\r\n    50% { -webkit-transform: translateZ(-250px) rotateY(89deg); opacity: .5; -webkit-animation-timing-function: ease-out;}\r\n    100% { -webkit-transform: translateZ(0) rotateY(0deg); opacity: 1; }\r\n}\r\n\r\n@keyframes slit {\r\n    50% { transform: translateZ(-250px) rotateY(89deg); opacity: 1; -webkit-animation-timing-function: ease-in; animation-timing-function: ease-in;}\r\n    100% { transform: translateZ(0) rotateY(0deg); opacity: 1; }\r\n}\r\n\r\n/* Effect 14:  3D Rotate from bottom */\r\n\r\n.md-effect-14.md-modal {\r\n    perspective: 1300px;\r\n}\r\n\r\n.md-effect-14 .md-content {\r\n    transform-style: preserve-3d;\r\n    transform: translateY(100%) rotateX(90deg);\r\n    transform-origin: 0 100%;\r\n    opacity: 0;\r\n    transition: all 0.3s ease-out;\r\n}\r\n\r\n.md-show.md-effect-14 .md-content {\r\n    transform: translateY(0%) rotateX(0deg);\r\n    opacity: 1;\r\n}\r\n\r\n/* Effect 15:  3D Rotate in from left */\r\n\r\n.md-effect-15.md-modal {\r\n    perspective: 1300px;\r\n}\r\n\r\n.md-effect-15 .md-content {\r\n    transform-style: preserve-3d;\r\n    transform: translateZ(100px) translateX(-30%) rotateY(90deg);\r\n    transform-origin: 0 100%;\r\n    opacity: 0;\r\n    transition: all 0.3s;\r\n}\r\n\r\n.md-show.md-effect-15 .md-content {\r\n    transform: translateZ(0px) translateX(0%) rotateY(0deg);\r\n    opacity: 1;\r\n}\r\n\r\n/* Effect 16:  Blur */\r\n\r\n.md-show.md-effect-16 ~ .md-overlay {\r\n    background: rgba(180,46,32,0.5);\r\n}\r\n\r\n.md-show.md-effect-16 ~ .container {\r\n    -moz-filter: blur(3px);\r\n    filter: blur(3px);\r\n}\r\n\r\n.md-effect-16 .md-content {\r\n    transform: translateY(-5%);\r\n    opacity: 0;\r\n}\r\n\r\n.md-show.md-effect-16 ~ .container,\r\n.md-effect-16 .md-content {\r\n    transition: all 0.3s;\r\n}\r\n\r\n.md-show.md-effect-16 .md-content {\r\n    transform: translateY(0);\r\n    opacity: 1;\r\n}\r\n\r\n/* Effect 17:  Slide in from bottom with perspective on container */\r\n\r\n.md-show.md-effect-17 ~ .container {\r\n    height: 100%;\r\n    overflow: hidden;\r\n    transition: transform 0.3s;\r\n}\r\n\r\n.md-show.md-effect-17 ~ .container,\r\n.md-show.md-effect-17 ~ .md-overlay  {\r\n    transform: rotateX(-2deg);\r\n    transform-origin: 50% 0%;\r\n    transform-style: preserve-3d;\r\n}\r\n\r\n.md-effect-17 .md-content {\r\n    opacity: 0;\r\n    transform: translateY(200%);\r\n}\r\n\r\n.md-show.md-effect-17 .md-content {\r\n    transform: translateY(0);\r\n    opacity: 1;\r\n    transition: all 0.3s 0.2s;\r\n}\r\n\r\n/* Effect 18:  Slide from right with perspective on container */\r\n\r\n.md-show.md-effect-18 ~ .container {\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n.md-show.md-effect-18 ~ .md-overlay {\r\n    background: rgba(143,27,15,0.8);\r\n    transition: all 0.5s;\r\n}\r\n\r\n.md-show.md-effect-18 ~ .container,\r\n.md-show.md-effect-18 ~ .md-overlay {\r\n    -webkit-transform-style: preserve-3d;\r\n    -webkit-transform-origin: 0% 50%;\r\n    -webkit-animation: rotateRightSideFirst 0.5s forwards ease-in;\r\n    -moz-transform-style: preserve-3d;\r\n    -moz-transform-origin: 0% 50%;\r\n    -moz-animation: rotateRightSideFirst 0.5s forwards ease-in;\r\n    transform-style: preserve-3d;\r\n    transform-origin: 0% 50%;\r\n    animation: rotateRightSideFirst 0.5s forwards ease-in;\r\n}\r\n\r\n@-webkit-keyframes rotateRightSideFirst {\r\n    50% { -webkit-transform: translateZ(-50px) rotateY(5deg); -webkit-animation-timing-function: ease-out; }\r\n    100% { -webkit-transform: translateZ(-200px); }\r\n}\r\n\r\n@keyframes rotateRightSideFirst {\r\n    50% { transform: translateZ(-50px) rotateY(5deg); -webkit-animation-timing-function: ease-out; animation-timing-function: ease-out; }\r\n    100% { transform: translateZ(-200px); }\r\n}\r\n\r\n.md-effect-18 .md-content {\r\n    transform: translateX(200%);\r\n    opacity: 0;\r\n}\r\n\r\n.md-show.md-effect-18 .md-content {\r\n    transform: translateX(0);\r\n    opacity: 1;\r\n    transition: all 0.5s 0.1s;\r\n}\r\n\r\n/* Effect 19:  Slip in from the top with perspective on container */\r\n\r\n.md-show.md-effect-19 ~ .container {\r\n    height: 100%;\r\n    overflow: hidden;\r\n}\r\n\r\n.md-show.md-effect-19 ~ .md-overlay {\r\n    transition: all 0.5s;\r\n}\r\n\r\n.md-show.md-effect-19 ~ .container,\r\n.md-show.md-effect-19 ~ .md-overlay {\r\n    -webkit-transform-style: preserve-3d;\r\n    -webkit-transform-origin: 50% 100%;\r\n    -webkit-animation: OpenTop 0.5s forwards ease-in;\r\n    -moz-transform-style: preserve-3d;\r\n    -moz-transform-origin: 50% 100%;\r\n    -moz-animation: OpenTop 0.5s forwards ease-in;\r\n    transform-style: preserve-3d;\r\n    transform-origin: 50% 100%;\r\n    animation: OpenTop 0.5s forwards ease-in;\r\n}\r\n\r\n@-webkit-keyframes OpenTop {\r\n    50% {\r\n        -webkit-transform: rotateX(10deg);\r\n        -webkit-animation-timing-function: ease-out;\r\n    }\r\n}\r\n\r\n@keyframes OpenTop {\r\n    50% {\r\n        transform: rotateX(10deg);\r\n        -webkit-animation-timing-function: ease-out;\r\n                animation-timing-function: ease-out;\r\n    }\r\n}\r\n\r\n.md-effect-19 .md-content {\r\n    transform: translateY(-200%);\r\n    opacity: 0;\r\n}\r\n\r\n.md-show.md-effect-19 .md-content {\r\n    transform: translateY(0);\r\n    opacity: 1;\r\n    transition: all 0.5s 0.1s;\r\n}\r\n\r\n@media screen and (max-width: 32em) {\r\n    body { font-size: 75%; }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21vZGFsLWFuaW1hdGlvbi9tb2RhbC1hbmltYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBOztJQUVJLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFHaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFFBQVE7SUFDUixTQUFTO0lBQ1QsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsbUNBQW1DO0lBRW5DLDJCQUEyQjtJQUkzQiw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxhQUFhO0lBQ2IsVUFBVTtJQUNWLGtDQUFrQztJQUdsQyxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsU0FBUztJQUNULGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osbUNBQW1DO0lBQ25DLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksU0FBUztJQUNULHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQSxtQ0FBbUM7O0FBQ25DO0lBSUkscUJBQXFCO0lBQ3JCLFVBQVU7SUFHVixvQkFBb0I7QUFDeEI7O0FBRUE7SUFJSSxtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBLG1DQUFtQzs7QUFDbkM7SUFJSSwwQkFBMEI7SUFDMUIsVUFBVTtJQUdWLHNEQUFzRDtBQUMxRDs7QUFFQTtJQUlJLHdCQUF3QjtJQUN4QixVQUFVO0FBQ2Q7O0FBRUEsb0NBQW9DOztBQUNwQztJQUlJLDBCQUEwQjtJQUMxQixVQUFVO0lBR1Ysb0JBQW9CO0FBQ3hCOztBQUVBO0lBSUksd0JBQXdCO0lBQ3hCLFVBQVU7QUFDZDs7QUFFQSx3QkFBd0I7O0FBQ3hCO0lBSUksa0NBQWtDO0lBQ2xDLFVBQVU7QUFDZDs7QUFFQTs7SUFJSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFJSSxnQ0FBZ0M7SUFDaEMsVUFBVTtBQUNkOztBQUVBLG1CQUFtQjs7QUFDbkI7SUFHSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFHSSw0QkFBNEI7SUFJNUIsMkNBQTJDO0lBQzNDLFVBQVU7QUFDZDs7QUFFQTtJQUdJLDRCQUE0QjtJQUk1Qix3Q0FBd0M7SUFDeEMsVUFBVTtBQUNkOztBQUVBLHdCQUF3Qjs7QUFDeEI7SUFHSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFHSSw0QkFBNEI7SUFJNUIseURBQXlEO0lBQ3pELFVBQVU7QUFDZDs7QUFFQTtJQUdJLDRCQUE0QjtJQUk1QixtREFBbUQ7SUFDbkQsVUFBVTtBQUNkOztBQUVBLHNDQUFzQzs7QUFDdEM7SUFDSSxNQUFNO0lBSU4sMkJBQTJCO0FBQy9COztBQUVBO0lBSUksNEJBQTRCO0lBRzVCLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFJSSx5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLFVBQVU7QUFDZDs7QUFFQSxpQ0FBaUM7O0FBQ2pDO0lBR0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBR0ksNEJBQTRCO0lBSTVCLDBCQUEwQjtJQUcxQixvQkFBb0I7SUFDcEIsVUFBVTtBQUNkOztBQUVBO0lBSUksd0JBQXdCO0lBQ3hCLFVBQVU7QUFDZDs7QUFFQSwrQkFBK0I7O0FBQy9CO0lBR0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBR0ksNEJBQTRCO0lBSTVCLDBCQUEwQjtJQUcxQixvQkFBb0I7SUFDcEIsVUFBVTtBQUNkOztBQUVBO0lBSUksd0JBQXdCO0lBQ3hCLFVBQVU7QUFDZDs7QUFFQSx1QkFBdUI7O0FBQ3ZCO0lBR0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBR0ksNEJBQTRCO0lBSTVCLDBCQUEwQjtJQUcxQix1QkFBdUI7SUFDdkIsVUFBVTtJQUdWLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUlJLHdCQUF3QjtJQUN4QixVQUFVO0FBQ2Q7O0FBRUEsNEJBQTRCOztBQUM1QjtJQUlJLG1CQUFtQjtJQUNuQixVQUFVO0lBR1Ysb0JBQW9CO0FBQ3hCOztBQUVBO0lBSUksbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQSx3QkFBd0I7O0FBQ3hCO0lBSUkscUJBQXFCO0lBQ3JCLFVBQVU7SUFHVixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7O0lBRUksV0FBVztJQUNYLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUlJLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1Ysc0JBQXNCO0FBQzFCOztBQUVBLHVCQUF1Qjs7QUFDdkI7SUFHSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFHSSw0QkFBNEI7SUFJNUIsNkNBQTZDO0lBQzdDLFVBQVU7QUFDZDs7QUFFQTtJQUNJLDZDQUE2QztJQUU3QyxxQ0FBcUM7QUFDekM7O0FBRUE7SUFDSSxNQUFNLG9EQUFvRCxFQUFFLFdBQVcsRUFBRSwyQ0FBMkMsQ0FBQztJQUNySCxPQUFPLDhDQUE4QyxFQUFFLFVBQVUsRUFBRTtBQUN2RTs7QUFPQTtJQUNJLE1BQU0sNENBQTRDLEVBQUUsVUFBVSxFQUFFLDBDQUFrQyxFQUFsQyxrQ0FBa0MsQ0FBQztJQUNuRyxPQUFPLHNDQUFzQyxFQUFFLFVBQVUsRUFBRTtBQUMvRDs7QUFFQSxzQ0FBc0M7O0FBQ3RDO0lBR0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBR0ksNEJBQTRCO0lBSTVCLDBDQUEwQztJQUcxQyx3QkFBd0I7SUFDeEIsVUFBVTtJQUdWLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUlJLHVDQUF1QztJQUN2QyxVQUFVO0FBQ2Q7O0FBRUEsdUNBQXVDOztBQUN2QztJQUdJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUdJLDRCQUE0QjtJQUk1Qiw0REFBNEQ7SUFHNUQsd0JBQXdCO0lBQ3hCLFVBQVU7SUFHVixvQkFBb0I7QUFDeEI7O0FBRUE7SUFJSSx1REFBdUQ7SUFDdkQsVUFBVTtBQUNkOztBQUVBLHFCQUFxQjs7QUFDckI7SUFDSSwrQkFBK0I7QUFDbkM7O0FBRUE7SUFFSSxzQkFBc0I7SUFDdEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBSUksMEJBQTBCO0lBQzFCLFVBQVU7QUFDZDs7QUFFQTs7SUFJSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFJSSx3QkFBd0I7SUFDeEIsVUFBVTtBQUNkOztBQUVBLG1FQUFtRTs7QUFDbkU7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBR2hCLDBCQUEwQjtBQUM5Qjs7QUFFQTs7SUFLSSx5QkFBeUI7SUFHekIsd0JBQXdCO0lBR3hCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFVBQVU7SUFJViwyQkFBMkI7QUFDL0I7O0FBRUE7SUFJSSx3QkFBd0I7SUFDeEIsVUFBVTtJQUdWLHlCQUF5QjtBQUM3Qjs7QUFFQSwrREFBK0Q7O0FBQy9EO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLCtCQUErQjtJQUcvQixvQkFBb0I7QUFDeEI7O0FBRUE7O0lBRUksb0NBQW9DO0lBQ3BDLGdDQUFnQztJQUNoQyw2REFBNkQ7SUFDN0QsaUNBQWlDO0lBQ2pDLDZCQUE2QjtJQUM3QiwwREFBMEQ7SUFDMUQsNEJBQTRCO0lBQzVCLHdCQUF3QjtJQUN4QixxREFBcUQ7QUFDekQ7O0FBRUE7SUFDSSxNQUFNLGtEQUFrRCxFQUFFLDJDQUEyQyxFQUFFO0lBQ3ZHLE9BQU8scUNBQXFDLEVBQUU7QUFDbEQ7O0FBT0E7SUFDSSxNQUFNLDBDQUEwQyxFQUFFLDJDQUFtQyxFQUFuQyxtQ0FBbUMsRUFBRTtJQUN2RixPQUFPLDZCQUE2QixFQUFFO0FBQzFDOztBQUVBO0lBSUksMkJBQTJCO0lBQzNCLFVBQVU7QUFDZDs7QUFFQTtJQUlJLHdCQUF3QjtJQUN4QixVQUFVO0lBR1YseUJBQXlCO0FBQzdCOztBQUVBLG1FQUFtRTs7QUFDbkU7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBR0ksb0JBQW9CO0FBQ3hCOztBQUVBOztJQUVJLG9DQUFvQztJQUNwQyxrQ0FBa0M7SUFDbEMsZ0RBQWdEO0lBQ2hELGlDQUFpQztJQUNqQywrQkFBK0I7SUFDL0IsNkNBQTZDO0lBQzdDLDRCQUE0QjtJQUM1QiwwQkFBMEI7SUFDMUIsd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0k7UUFDSSxpQ0FBaUM7UUFDakMsMkNBQTJDO0lBQy9DO0FBQ0o7O0FBU0E7SUFDSTtRQUNJLHlCQUF5QjtRQUN6QiwyQ0FBbUM7Z0JBQW5DLG1DQUFtQztJQUN2QztBQUNKOztBQUVBO0lBSUksNEJBQTRCO0lBQzVCLFVBQVU7QUFDZDs7QUFFQTtJQUlJLHdCQUF3QjtJQUN4QixVQUFVO0lBR1YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksT0FBTyxjQUFjLEVBQUU7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbW9kYWwtYW5pbWF0aW9uL21vZGFsLWFuaW1hdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1kLWNsb3NlLWJ0biB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDIxcHg7XHJcbiAgICByaWdodDogMTZweDtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5tZC1wZXJzcGVjdGl2ZSxcclxuLm1kLXBlcnNwZWN0aXZlIGJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLm1kLXBlcnNwZWN0aXZlIGJvZHkgIHtcclxuICAgIGJhY2tncm91bmQ6ICMyMjI7XHJcbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlOiA2MDBweDtcclxuICAgIC1tb3otcGVyc3BlY3RpdmU6IDYwMHB4O1xyXG4gICAgcGVyc3BlY3RpdmU6IDYwMHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5tZC1tb2RhbCB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXgtd2lkdGg6IDYzMHB4O1xyXG4gICAgbWluLXdpZHRoOiAzMjBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHotaW5kZXg6IDIwMDA7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIC1tb3otYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG5cclxuLm1kLXNob3cge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuLm1kLW92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMTEwMDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDU1LCA1OCwgNjAsIDAuNjUpO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG5cclxuLm1kLXNob3cgfiAubWQtb3ZlcmxheSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuLm1kLWNvbnRlbnQge1xyXG4gICAgY29sb3I6ICM2NjY2NjY7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5tZC1jb250ZW50IGgzIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMC40ZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDIuNGVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMTE1LCAxNzAsIDAuOTMpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4IDNweCAwIDA7XHJcbn1cclxuXHJcbi5tZC1jb250ZW50ID4gZGl2IHtcclxuICAgIHBhZGRpbmc6IDE1cHggNDBweCAzMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogMS4xNWVtO1xyXG59XHJcblxyXG4ubWQtY29udGVudCA+IGRpdiBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxufVxyXG5cclxuLm1kLWNvbnRlbnQgPiBkaXYgdWwge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMCAwIDMwcHggMjBweDtcclxufVxyXG5cclxuLm1kLWNvbnRlbnQgPiBkaXYgdWwgbGkge1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcbn1cclxuXHJcbi5tZC1jb250ZW50IGJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxufVxyXG5cclxuLyogRWZmZWN0IDE6IEZhZGUgaW4gYW5kIHNjYWxlIHVwICovXHJcbi5tZC1lZmZlY3QtMSAubWQtY29udGVudCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC43KTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC43KTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMSAubWQtY29udGVudCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgMjogU2xpZGUgZnJvbSB0aGUgcmlnaHQgKi9cclxuLm1kLWVmZmVjdC0yIC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwJSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMCUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwJSk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBjdWJpYy1iZXppZXIoMC4yNSwgMC41LCAwLjUsIDAuOSk7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjUsIDAuNSwgMC45KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGN1YmljLWJlemllcigwLjI1LCAwLjUsIDAuNSwgMC45KTtcclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTIgLm1kLWNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgMzogU2xpZGUgZnJvbSB0aGUgYm90dG9tICovXHJcbi5tZC1lZmZlY3QtMyAubWQtY29udGVudCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMCUpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAlKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMCUpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC0zIC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLyogRWZmZWN0IDQ6IE5ld3NwYXBlciAqL1xyXG4ubWQtZWZmZWN0LTQgLm1kLWNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSg3MjBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSg3MjBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMCkgcm90YXRlKDcyMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSg3MjBkZWcpO1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTQgfiAubWQtb3ZlcmxheSxcclxuLm1kLWVmZmVjdC00IC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC00IC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoMGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoMGRlZyk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgNTogZmFsbCAqL1xyXG4ubWQtZWZmZWN0LTUubWQtbW9kYWwge1xyXG4gICAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gICAgLW1vei1wZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gICAgcGVyc3BlY3RpdmU6IDEzMDBweDtcclxufVxyXG5cclxuLm1kLWVmZmVjdC01IC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWig2MDBweCkgcm90YXRlWCgyMGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWig2MDBweCkgcm90YXRlWCgyMGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDYwMHB4KSByb3RhdGVYKDIwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWig2MDBweCkgcm90YXRlWCgyMGRlZyk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtNSAubWQtY29udGVudCB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSByb3RhdGVYKDBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSByb3RhdGVYKDBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpIHJvdGF0ZVgoMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMHB4KSByb3RhdGVYKDBkZWcpO1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLyogRWZmZWN0IDY6IHNpZGUgZmFsbCAqL1xyXG4ubWQtZWZmZWN0LTYubWQtbW9kYWwge1xyXG4gICAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gICAgLW1vei1wZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gICAgcGVyc3BlY3RpdmU6IDEzMDBweDtcclxufVxyXG5cclxuLm1kLWVmZmVjdC02IC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDMwJSkgdHJhbnNsYXRlWig2MDBweCkgcm90YXRlKDEwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzAlKSB0cmFuc2xhdGVaKDYwMHB4KSByb3RhdGUoMTBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDMwJSkgdHJhbnNsYXRlWig2MDBweCkgcm90YXRlKDEwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDMwJSkgdHJhbnNsYXRlWig2MDBweCkgcm90YXRlKDEwZGVnKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC02IC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlKSB0cmFuc2xhdGVaKDApIHJvdGF0ZSgwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUpIHRyYW5zbGF0ZVooMCkgcm90YXRlKDBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAlKSB0cmFuc2xhdGVaKDApIHJvdGF0ZSgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlKSB0cmFuc2xhdGVaKDApIHJvdGF0ZSgwZGVnKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIEVmZmVjdCA3OiAgc2xpZGUgYW5kIHN0aWNrIHRvIHRvcCAqL1xyXG4ubWQtZWZmZWN0LTd7XHJcbiAgICB0b3A6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxufVxyXG5cclxuLm1kLWVmZmVjdC03IC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAlKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAlKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAlKTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIC4zcztcclxuICAgIHRyYW5zaXRpb246IGFsbCAuM3M7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtNyAubWQtY29udGVudCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDAgM3B4IDNweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIEVmZmVjdCA4OiAzRCBmbGlwIGhvcml6b250YWwgKi9cclxuLm1kLWVmZmVjdC04Lm1kLW1vZGFsIHtcclxuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIC1tb3otcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIHBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbn1cclxuXHJcbi5tZC1lZmZlY3QtOCAubWQtY29udGVudCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVkoLTcwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKC03MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGVZKC03MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoLTcwZGVnKTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtOCAubWQtY29udGVudCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGVZKDBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgwZGVnKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIEVmZmVjdCA5OiAzRCBmbGlwIHZlcnRpY2FsICovXHJcbi5tZC1lZmZlY3QtOS5tZC1tb2RhbCB7XHJcbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgICAtbW96LXBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgICBwZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG59XHJcblxyXG4ubWQtZWZmZWN0LTkgLm1kLWNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC03MGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCgtNzBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlWCgtNzBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKC03MGRlZyk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTkgLm1kLWNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgMTA6IDNEIHNpZ24gKi9cclxuLm1kLWVmZmVjdC0xMC5tZC1tb2RhbCB7XHJcbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgICAtbW96LXBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgICBwZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG59XHJcblxyXG4ubWQtZWZmZWN0LTEwIC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgtNjBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZVgoLTYwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoLTYwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlWCgtNjBkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcclxuICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogNTAlIDA7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTAgLm1kLWNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCgwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVgoMGRlZyk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgMTE6IFN1cGVyIHNjYWxlZCAqL1xyXG4ubWQtZWZmZWN0LTExIC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgyKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgyKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDIpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgyKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTEgLm1kLWNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5cclxuLyogRWZmZWN0IDEyOiAgSnVzdCBtZSAqL1xyXG4ubWQtZWZmZWN0LTEyIC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjgpO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC0xMiB+IC5tZC1vdmVybGF5IHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDczYWE7XHJcbn1cclxuXHJcbi5tZC1lZmZlY3QtMTIgLm1kLWNvbnRlbnQgaDMsXHJcbi5tZC1lZmZlY3QtMTIgLm1kLWNvbnRlbnQge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTEyIC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgMTM6IDNEIHNsaXQgKi9cclxuLm1kLWVmZmVjdC0xMy5tZC1tb2RhbCB7XHJcbiAgICAtd2Via2l0LXBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgICAtbW96LXBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbiAgICBwZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG59XHJcblxyXG4ubWQtZWZmZWN0LTEzIC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC1tb3otdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMzAwMHB4KSByb3RhdGVZKDkwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0zMDAwcHgpIHJvdGF0ZVkoOTBkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMzAwMHB4KSByb3RhdGVZKDkwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMzAwMHB4KSByb3RhdGVZKDkwZGVnKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC0xMyAubWQtY29udGVudCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2xpdCAuN3MgZm9yd2FyZHMgZWFzZS1vdXQ7XHJcbiAgICAtbW96LWFuaW1hdGlvbjogc2xpdCAuN3MgZm9yd2FyZHMgZWFzZS1vdXQ7XHJcbiAgICBhbmltYXRpb246IHNsaXQgLjdzIGZvcndhcmRzIGVhc2Utb3V0O1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2xpdCB7XHJcbiAgICA1MCUgeyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjUwcHgpIHJvdGF0ZVkoODlkZWcpOyBvcGFjaXR5OiAuNTsgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDt9XHJcbiAgICAxMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCkgcm90YXRlWSgwZGVnKTsgb3BhY2l0eTogMTsgfVxyXG59XHJcblxyXG5ALW1vei1rZXlmcmFtZXMgc2xpdCB7XHJcbiAgICA1MCUgeyAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjUwcHgpIHJvdGF0ZVkoODlkZWcpOyBvcGFjaXR5OiAuNTsgLW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDt9XHJcbiAgICAxMDAlIHsgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCkgcm90YXRlWSgwZGVnKTsgb3BhY2l0eTogMTsgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNsaXQge1xyXG4gICAgNTAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yNTBweCkgcm90YXRlWSg4OWRlZyk7IG9wYWNpdHk6IDE7IGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47fVxyXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKSByb3RhdGVZKDBkZWcpOyBvcGFjaXR5OiAxOyB9XHJcbn1cclxuXHJcbi8qIEVmZmVjdCAxNDogIDNEIFJvdGF0ZSBmcm9tIGJvdHRvbSAqL1xyXG4ubWQtZWZmZWN0LTE0Lm1kLW1vZGFsIHtcclxuICAgIC13ZWJraXQtcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIC1tb3otcGVyc3BlY3RpdmU6IDEzMDBweDtcclxuICAgIHBlcnNwZWN0aXZlOiAxMzAwcHg7XHJcbn1cclxuXHJcbi5tZC1lZmZlY3QtMTQgLm1kLWNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpIHJvdGF0ZVgoOTBkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSkgcm90YXRlWCg5MGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpIHJvdGF0ZVgoOTBkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpIHJvdGF0ZVgoOTBkZWcpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwIDEwMCU7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTQgLm1kLWNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpIHJvdGF0ZVgoMGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwJSkgcm90YXRlWCgwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpIHJvdGF0ZVgoMGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpIHJvdGF0ZVgoMGRlZyk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgMTU6ICAzRCBSb3RhdGUgaW4gZnJvbSBsZWZ0ICovXHJcbi5tZC1lZmZlY3QtMTUubWQtbW9kYWwge1xyXG4gICAgLXdlYmtpdC1wZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gICAgLW1vei1wZXJzcGVjdGl2ZTogMTMwMHB4O1xyXG4gICAgcGVyc3BlY3RpdmU6IDEzMDBweDtcclxufVxyXG5cclxuLm1kLWVmZmVjdC0xNSAubWQtY29udGVudCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMTAwcHgpIHRyYW5zbGF0ZVgoLTMwJSkgcm90YXRlWSg5MGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigxMDBweCkgdHJhbnNsYXRlWCgtMzAlKSByb3RhdGVZKDkwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMTAwcHgpIHRyYW5zbGF0ZVgoLTMwJSkgcm90YXRlWSg5MGRlZyk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMTAwcHgpIHRyYW5zbGF0ZVgoLTMwJSkgcm90YXRlWSg5MGRlZyk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDAgMTAwJTtcclxuICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCAxMDAlO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC0xNSAubWQtY29udGVudCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpIHRyYW5zbGF0ZVgoMCUpIHJvdGF0ZVkoMGRlZyk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpIHRyYW5zbGF0ZVgoMCUpIHJvdGF0ZVkoMGRlZyk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDBweCkgdHJhbnNsYXRlWCgwJSkgcm90YXRlWSgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwcHgpIHRyYW5zbGF0ZVgoMCUpIHJvdGF0ZVkoMGRlZyk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgMTY6ICBCbHVyICovXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC0xNiB+IC5tZC1vdmVybGF5IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTgwLDQ2LDMyLDAuNSk7XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC0xNiB+IC5jb250YWluZXIge1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoM3B4KTtcclxuICAgIC1tb3otZmlsdGVyOiBibHVyKDNweCk7XHJcbiAgICBmaWx0ZXI6IGJsdXIoM3B4KTtcclxufVxyXG5cclxuLm1kLWVmZmVjdC0xNiAubWQtY29udGVudCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNSUpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUlKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNSUpO1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTE2IH4gLmNvbnRhaW5lcixcclxuLm1kLWVmZmVjdC0xNiAubWQtY29udGVudCB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTYgLm1kLWNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgMTc6ICBTbGlkZSBpbiBmcm9tIGJvdHRvbSB3aXRoIHBlcnNwZWN0aXZlIG9uIGNvbnRhaW5lciAqL1xyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTcgfiAuY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuM3M7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTE3IH4gLmNvbnRhaW5lcixcclxuLm1kLXNob3cubWQtZWZmZWN0LTE3IH4gLm1kLW92ZXJsYXkgIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGVYKC0yZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGVYKC0yZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZVgoLTJkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVYKC0yZGVnKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMCU7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG59XHJcblxyXG4ubWQtZWZmZWN0LTE3IC5tZC1jb250ZW50IHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDAlKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDIwMCUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgyMDAlKTtcclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTE3IC5tZC1jb250ZW50IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgMC4ycztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgMC4ycztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIDAuMnM7XHJcbn1cclxuXHJcbi8qIEVmZmVjdCAxODogIFNsaWRlIGZyb20gcmlnaHQgd2l0aCBwZXJzcGVjdGl2ZSBvbiBjb250YWluZXIgKi9cclxuLm1kLXNob3cubWQtZWZmZWN0LTE4IH4gLmNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTggfiAubWQtb3ZlcmxheSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE0MywyNywxNSwwLjgpO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxufVxyXG5cclxuLm1kLXNob3cubWQtZWZmZWN0LTE4IH4gLmNvbnRhaW5lcixcclxuLm1kLXNob3cubWQtZWZmZWN0LTE4IH4gLm1kLW92ZXJsYXkge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAwJSA1MCU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogcm90YXRlUmlnaHRTaWRlRmlyc3QgMC41cyBmb3J3YXJkcyBlYXNlLWluO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiAwJSA1MCU7XHJcbiAgICAtbW96LWFuaW1hdGlvbjogcm90YXRlUmlnaHRTaWRlRmlyc3QgMC41cyBmb3J3YXJkcyBlYXNlLWluO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAlIDUwJTtcclxuICAgIGFuaW1hdGlvbjogcm90YXRlUmlnaHRTaWRlRmlyc3QgMC41cyBmb3J3YXJkcyBlYXNlLWluO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlUmlnaHRTaWRlRmlyc3Qge1xyXG4gICAgNTAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTUwcHgpIHJvdGF0ZVkoNWRlZyk7IC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7IH1cclxuICAgIDEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtMjAwcHgpOyB9XHJcbn1cclxuXHJcbkAtbW96LWtleWZyYW1lcyByb3RhdGVSaWdodFNpZGVGaXJzdCB7XHJcbiAgICA1MCUgeyAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigtNTBweCkgcm90YXRlWSg1ZGVnKTsgLW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDsgfVxyXG4gICAgMTAwJSB7IC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMDBweCk7IH1cclxufVxyXG5cclxuQGtleWZyYW1lcyByb3RhdGVSaWdodFNpZGVGaXJzdCB7XHJcbiAgICA1MCUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTUwcHgpIHJvdGF0ZVkoNWRlZyk7IGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0OyB9XHJcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0yMDBweCk7IH1cclxufVxyXG5cclxuLm1kLWVmZmVjdC0xOCAubWQtY29udGVudCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAlKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwMCUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDAlKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC0xOCAubWQtY29udGVudCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIDAuMXM7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIDAuMXM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyAwLjFzO1xyXG59XHJcblxyXG4vKiBFZmZlY3QgMTk6ICBTbGlwIGluIGZyb20gdGhlIHRvcCB3aXRoIHBlcnNwZWN0aXZlIG9uIGNvbnRhaW5lciAqL1xyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTkgfiAuY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC0xOSB+IC5tZC1vdmVybGF5IHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbn1cclxuXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC0xOSB+IC5jb250YWluZXIsXHJcbi5tZC1zaG93Lm1kLWVmZmVjdC0xOSB+IC5tZC1vdmVybGF5IHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDEwMCU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogT3BlblRvcCAwLjVzIGZvcndhcmRzIGVhc2UtaW47XHJcbiAgICAtbW96LXRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xyXG4gICAgLW1vei1hbmltYXRpb246IE9wZW5Ub3AgMC41cyBmb3J3YXJkcyBlYXNlLWluO1xyXG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xyXG4gICAgYW5pbWF0aW9uOiBPcGVuVG9wIDAuNXMgZm9yd2FyZHMgZWFzZS1pbjtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIE9wZW5Ub3Age1xyXG4gICAgNTAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlWCgxMGRlZyk7XHJcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgIH1cclxufVxyXG5cclxuQC1tb3ota2V5ZnJhbWVzIE9wZW5Ub3Age1xyXG4gICAgNTAlIHtcclxuICAgICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlWCgxMGRlZyk7XHJcbiAgICAgICAgLW1vei1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBPcGVuVG9wIHtcclxuICAgIDUwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVYKDEwZGVnKTtcclxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgIH1cclxufVxyXG5cclxuLm1kLWVmZmVjdC0xOSAubWQtY29udGVudCB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4ubWQtc2hvdy5tZC1lZmZlY3QtMTkgLm1kLWNvbnRlbnQge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC41cyAwLjFzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyAwLjFzO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgMC4xcztcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzJlbSkge1xyXG4gICAgYm9keSB7IGZvbnQtc2l6ZTogNzUlOyB9XHJcbn1cclxuIl19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalAnimationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal-animation',
                templateUrl: './modal-animation.component.html',
                styleUrls: ['./modal-animation.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, { modalClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], contentClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], modalID: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], backDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/modal-basic/modal-basic.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/modal-basic/modal-basic.component.ts ***!
  \*************************************************************/
/*! exports provided: ModalBasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBasicComponent", function() { return ModalBasicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



function ModalBasicComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModalBasicComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = [[["", 8, "app-modal-body"]], [["", 8, "app-modal-header"]], [["", 8, "app-modal-footer"]]];
const _c1 = function (a0) { return { "in": a0 }; };
const _c2 = function (a0, a1) { return { "display": a0, "opacity": a1 }; };
const _c3 = [".app-modal-body", ".app-modal-header", ".app-modal-footer"];
class ModalBasicComponent {
    constructor() {
        this.hideHeader = false;
        this.hideFooter = false;
        this.visible = false;
        this.visibleAnimate = false;
    }
    ngOnInit() {
    }
    show() {
        this.visible = true;
        setTimeout(() => this.visibleAnimate = true, 100);
    }
    hide() {
        this.visibleAnimate = false;
        setTimeout(() => this.visible = false, 300);
    }
    onContainerClicked(event) {
        if (event.target.classList.contains('modal')) {
            this.hide();
        }
    }
}
ModalBasicComponent.ɵfac = function ModalBasicComponent_Factory(t) { return new (t || ModalBasicComponent)(); };
ModalBasicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalBasicComponent, selectors: [["app-modal-basic"]], inputs: { dialogClass: "dialogClass", hideHeader: "hideHeader", hideFooter: "hideFooter" }, ngContentSelectors: _c3, decls: 7, vars: 10, consts: [["tabindex", "-1", 1, "basic", "modal", "fade", 3, "ngClass", "ngStyle", "click"], [1, "modal-dialog", 3, "ngClass"], [1, "modal-content"], ["class", "modal-header", 4, "ngIf"], [1, "modal-body"], ["class", "modal-footer", 4, "ngIf"], [1, "modal-header"], [1, "modal-footer"]], template: function ModalBasicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalBasicComponent_Template_div_click_0_listener($event) { return ctx.onContainerClicked($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ModalBasicComponent_div_3_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ModalBasicComponent_div_6_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx.visibleAnimate))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c2, ctx.visible ? "block" : "none", ctx.visibleAnimate ? 1 : 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.dialogClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hideHeader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hideFooter);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".basic.modal {\r\n    background: rgba(0,0,0,0.6);\r\n    position: fixed;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 1050;\r\n    display: none;\r\n    overflow: hidden;\r\n    -webkit-overflow-scrolling: touch;\r\n    outline: 0;\r\n}\r\n\r\n.basic.fade {\r\n    opacity: 0;\r\n    transition: opacity .15s linear;\r\n}\r\n\r\n.basic.fade.in {\r\n    opacity: 1;\r\n}\r\n\r\n.basic.modal.fade.in .modal-dialog {\r\n    transform: translate(0,0);\r\n}\r\n\r\n.basic.modal.fade .modal-dialog {\r\n    transition: all .3s ease-out;\r\n    transform: translate(0,-25%);\r\n}\r\n\r\n.basic .basic-close {\r\n    position: absolute;\r\n    top: 20px;\r\n    right: 20px;\r\n    font-size: 16px;\r\n    color: #292b2c;\r\n}\r\n\r\n.basic .basic-close-light-box {\r\n    position: absolute;\r\n    top: -31px;\r\n    right: -20px;\r\n    font-size: 30px;\r\n    color: rgb(255, 255, 255);\r\n    text-shadow: none;\r\n}\r\n\r\n.basic h5 {\r\n    margin-bottom: 0;\r\n    color: #757575;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    text-transform: uppercase;\r\n    display: inline-block;\r\n    margin-right: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21vZGFsLWJhc2ljL21vZGFsLWJhc2ljLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7SUFDM0IsZUFBZTtJQUNmLE1BQU07SUFDTixRQUFRO0lBQ1IsU0FBUztJQUNULE9BQU87SUFDUCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixpQ0FBaUM7SUFDakMsVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtJQUdWLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUlJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUdJLDRCQUE0QjtJQUk1Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxlQUFlO0lBQ2YsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsWUFBWTtJQUNaLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsaUJBQWlCO0FBQ3JCOztBQUlBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL21vZGFsLWJhc2ljL21vZGFsLWJhc2ljLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFzaWMubW9kYWwge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjYpO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMTA1MDtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG4gICAgb3V0bGluZTogMDtcclxufVxyXG5cclxuLmJhc2ljLmZhZGUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAuMTVzIGxpbmVhcjtcclxuICAgIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgLjE1cyBsaW5lYXI7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4xNXMgbGluZWFyO1xyXG59XHJcblxyXG4uYmFzaWMuZmFkZS5pbiB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uYmFzaWMubW9kYWwuZmFkZS5pbiAubW9kYWwtZGlhbG9nIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwwKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLDApO1xyXG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsMCk7XHJcbn1cclxuXHJcbi5iYXNpYy5tb2RhbC5mYWRlIC5tb2RhbC1kaWFsb2cge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2Utb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1vdXQ7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsLTI1JSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwtMjUlKTtcclxuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsLTI1JSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLC0yNSUpO1xyXG59XHJcblxyXG4uYmFzaWMgLmJhc2ljLWNsb3NlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjBweDtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6ICMyOTJiMmM7XHJcbn1cclxuXHJcbi5iYXNpYyAuYmFzaWMtY2xvc2UtbGlnaHQtYm94IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTMxcHg7XHJcbiAgICByaWdodDogLTIwcHg7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcblxyXG5cclxuLmJhc2ljIGg1IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59Il19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalBasicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal-basic',
                templateUrl: './modal-basic.component.html',
                styleUrls: ['./modal-basic.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return []; }, { dialogClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hideHeader: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hideFooter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accordion */ "./src/app/shared/accordion/index.ts");
/* harmony import */ var _fullscreen_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fullscreen/toggle-fullscreen.directive */ "./src/app/shared/fullscreen/toggle-fullscreen.directive.ts");
/* harmony import */ var _card_card_refresh_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./card/card-refresh.directive */ "./src/app/shared/card/card-refresh.directive.ts");
/* harmony import */ var _card_card_toggle_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card/card-toggle.directive */ "./src/app/shared/card/card-toggle.directive.ts");
/* harmony import */ var _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./spinner/spinner.component */ "./src/app/shared/spinner/spinner.component.ts");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./card/card.component */ "./src/app/shared/card/card.component.ts");
/* harmony import */ var _modal_animation_modal_animation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modal-animation/modal-animation.component */ "./src/app/shared/modal-animation/modal-animation.component.ts");
/* harmony import */ var _modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modal-basic/modal-basic.component */ "./src/app/shared/modal-basic/modal-basic.component.ts");
/* harmony import */ var _element_data_filter_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./element/data-filter.pipe */ "./src/app/shared/element/data-filter.pipe.ts");
/* harmony import */ var _menu_items_menu_items__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./menu-items/menu-items */ "./src/app/shared/menu-items/menu-items.ts");
/* harmony import */ var _element_parent_remove_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./element/parent-remove.directive */ "./src/app/shared/element/parent-remove.directive.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-click-outside */ "./node_modules/ng-click-outside/__ivy_ngcc__/lib/index.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ng_click_outside__WEBPACK_IMPORTED_MODULE_15__);

















const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [
        _menu_items_menu_items__WEBPACK_IMPORTED_MODULE_12__["MenuItems"],
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__["PERFECT_SCROLLBAR_CONFIG"],
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__["PerfectScrollbarModule"],
            ng_click_outside__WEBPACK_IMPORTED_MODULE_15__["ClickOutsideModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"]
        ],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__["PerfectScrollbarModule"],
        ng_click_outside__WEBPACK_IMPORTED_MODULE_15__["ClickOutsideModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionAnchorDirective"],
        _accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionLinkDirective"],
        _accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionDirective"],
        _fullscreen_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_4__["ToggleFullScreenDirective"],
        _card_card_refresh_directive__WEBPACK_IMPORTED_MODULE_5__["CardRefreshDirective"],
        _card_card_toggle_directive__WEBPACK_IMPORTED_MODULE_6__["CardToggleDirective"],
        _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__["SpinnerComponent"],
        _card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"],
        _modal_animation_modal_animation_component__WEBPACK_IMPORTED_MODULE_9__["ModalAnimationComponent"],
        _modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_10__["ModalBasicComponent"],
        _element_data_filter_pipe__WEBPACK_IMPORTED_MODULE_11__["DataFilterPipe"],
        _element_parent_remove_directive__WEBPACK_IMPORTED_MODULE_13__["ParentRemoveDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__["PerfectScrollbarModule"],
        ng_click_outside__WEBPACK_IMPORTED_MODULE_15__["ClickOutsideModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"]], exports: [_accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionAnchorDirective"],
        _accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionLinkDirective"],
        _accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionDirective"],
        _fullscreen_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_4__["ToggleFullScreenDirective"],
        _card_card_refresh_directive__WEBPACK_IMPORTED_MODULE_5__["CardRefreshDirective"],
        _card_card_toggle_directive__WEBPACK_IMPORTED_MODULE_6__["CardToggleDirective"],
        _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__["SpinnerComponent"],
        _card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"],
        _modal_animation_modal_animation_component__WEBPACK_IMPORTED_MODULE_9__["ModalAnimationComponent"],
        _modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_10__["ModalBasicComponent"],
        _element_data_filter_pipe__WEBPACK_IMPORTED_MODULE_11__["DataFilterPipe"],
        _element_parent_remove_directive__WEBPACK_IMPORTED_MODULE_13__["ParentRemoveDirective"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__["PerfectScrollbarModule"],
        ng_click_outside__WEBPACK_IMPORTED_MODULE_15__["ClickOutsideModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__["PerfectScrollbarModule"],
                    ng_click_outside__WEBPACK_IMPORTED_MODULE_15__["ClickOutsideModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"]
                ],
                declarations: [
                    _accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionAnchorDirective"],
                    _accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionLinkDirective"],
                    _accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionDirective"],
                    _fullscreen_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_4__["ToggleFullScreenDirective"],
                    _card_card_refresh_directive__WEBPACK_IMPORTED_MODULE_5__["CardRefreshDirective"],
                    _card_card_toggle_directive__WEBPACK_IMPORTED_MODULE_6__["CardToggleDirective"],
                    _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__["SpinnerComponent"],
                    _card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"],
                    _modal_animation_modal_animation_component__WEBPACK_IMPORTED_MODULE_9__["ModalAnimationComponent"],
                    _modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_10__["ModalBasicComponent"],
                    _element_data_filter_pipe__WEBPACK_IMPORTED_MODULE_11__["DataFilterPipe"],
                    _element_parent_remove_directive__WEBPACK_IMPORTED_MODULE_13__["ParentRemoveDirective"]
                ],
                exports: [
                    _accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionAnchorDirective"],
                    _accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionLinkDirective"],
                    _accordion__WEBPACK_IMPORTED_MODULE_3__["AccordionDirective"],
                    _fullscreen_toggle_fullscreen_directive__WEBPACK_IMPORTED_MODULE_4__["ToggleFullScreenDirective"],
                    _card_card_refresh_directive__WEBPACK_IMPORTED_MODULE_5__["CardRefreshDirective"],
                    _card_card_toggle_directive__WEBPACK_IMPORTED_MODULE_6__["CardToggleDirective"],
                    _spinner_spinner_component__WEBPACK_IMPORTED_MODULE_7__["SpinnerComponent"],
                    _card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"],
                    _modal_animation_modal_animation_component__WEBPACK_IMPORTED_MODULE_9__["ModalAnimationComponent"],
                    _modal_basic_modal_basic_component__WEBPACK_IMPORTED_MODULE_10__["ModalBasicComponent"],
                    _element_data_filter_pipe__WEBPACK_IMPORTED_MODULE_11__["DataFilterPipe"],
                    _element_parent_remove_directive__WEBPACK_IMPORTED_MODULE_13__["ParentRemoveDirective"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__["PerfectScrollbarModule"],
                    ng_click_outside__WEBPACK_IMPORTED_MODULE_15__["ClickOutsideModule"]
                ],
                providers: [
                    _menu_items_menu_items__WEBPACK_IMPORTED_MODULE_12__["MenuItems"],
                    {
                        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_14__["PERFECT_SCROLLBAR_CONFIG"],
                        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                    }
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/spinner/spinkits.ts":
/*!********************************************!*\
  !*** ./src/app/shared/spinner/spinkits.ts ***!
  \********************************************/
/*! exports provided: Spinkit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spinkit", function() { return Spinkit; });
const Spinkit = {
    skChasingDots: 'sk-chasing-dots',
    skCubeGrid: 'sk-cube-grid',
    skDoubleBounce: 'sk-double-bounce',
    skRotatingPlane: 'sk-rotationg-plane',
    skSpinnerPulse: 'sk-spinner-pulse',
    skThreeBounce: 'sk-three-bounce',
    skWanderingCubes: 'sk-wandering-cubes',
    skWave: 'sk-wave',
    skLine: 'sk-line-material'
};


/***/ }),

/***/ "./src/app/shared/spinner/spinner.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/spinner/spinner.component.ts ***!
  \*****************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _spinkits__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spinkits */ "./src/app/shared/spinner/spinkits.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function SpinnerComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r624 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("colored", !ctx_r624.backgroundColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r624.backgroundColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r624.backgroundColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r624.backgroundColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r624.backgroundColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r624.backgroundColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r624.backgroundColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r624.backgroundColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r624.backgroundColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r624.backgroundColor);
} }
function SpinnerComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 22);
} if (rf & 2) {
    const ctx_r625 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r625.backgroundColor);
} }
function SpinnerComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r626 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("colored", !ctx_r626.backgroundColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r626.backgroundColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r626.backgroundColor);
} }
function SpinnerComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r627 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("colored", !ctx_r627.backgroundColor);
} }
function SpinnerComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r628 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("colored", !ctx_r628.backgroundColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r628.backgroundColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r628.backgroundColor);
} }
function SpinnerComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 32);
} if (rf & 2) {
    const ctx_r629 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r629.backgroundColor);
} }
function SpinnerComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r630 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("colored", !ctx_r630.backgroundColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r630.backgroundColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r630.backgroundColor);
} }
function SpinnerComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r631 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("colored", !ctx_r631.backgroundColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r631.backgroundColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r631.backgroundColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r631.backgroundColor);
} }
function SpinnerComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r632 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("colored", !ctx_r632.backgroundColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r632.backgroundColor);
} }
function SpinnerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SpinnerComponent_div_0_div_2_Template, 10, 20, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SpinnerComponent_div_0_div_3_Template, 1, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SpinnerComponent_div_0_div_4_Template, 3, 6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SpinnerComponent_div_0_div_5_Template, 23, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SpinnerComponent_div_0_div_6_Template, 3, 6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SpinnerComponent_div_0_div_7_Template, 1, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SpinnerComponent_div_0_div_8_Template, 3, 6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SpinnerComponent_div_0_div_9_Template, 4, 8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SpinnerComponent_div_0_div_10_Template, 2, 4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r623 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r623.spinner === ctx_r623.Spinkit.skCubeGrid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r623.spinner === ctx_r623.Spinkit.skRotatingPlane);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r623.spinner === ctx_r623.Spinkit.skDoubleBounce);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r623.spinner === ctx_r623.Spinkit.skWave);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r623.spinner === ctx_r623.Spinkit.skWanderingCubes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r623.spinner === ctx_r623.Spinkit.skSpinnerPulse);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r623.spinner === ctx_r623.Spinkit.skChasingDots);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r623.spinner === ctx_r623.Spinkit.skThreeBounce);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r623.spinner === ctx_r623.Spinkit.skLine);
} }
class SpinnerComponent {
    constructor(router, document) {
        this.router = router;
        this.document = document;
        this.isSpinnerVisible = true;
        this.Spinkit = _spinkits__WEBPACK_IMPORTED_MODULE_1__["Spinkit"];
        this.backgroundColor = 'rgba(70, 128, 255, 0.69)';
        this.spinner = _spinkits__WEBPACK_IMPORTED_MODULE_1__["Spinkit"].skLine;
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                this.isSpinnerVisible = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]) {
                this.isSpinnerVisible = false;
            }
        }, () => {
            this.isSpinnerVisible = false;
        });
    }
    ngOnDestroy() {
        this.isSpinnerVisible = false;
    }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])); };
SpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["app-spinner"]], inputs: { backgroundColor: "backgroundColor", spinner: "spinner" }, decls: 1, vars: 1, consts: [["id", "http-loader", 4, "ngIf"], ["id", "http-loader"], [1, "loader-bg"], ["class", "sk-cube-grid", 3, "colored", 4, "ngIf"], ["class", "sk-rotating-plane colored-parent", 3, "background-color", 4, "ngIf"], ["class", "sk-double-bounce", 3, "colored", 4, "ngIf"], ["class", "theme-loader", 3, "colored", 4, "ngIf"], ["class", "sk-wandering-cubes", 3, "colored", 4, "ngIf"], ["class", "sk-spinner sk-spinner-pulse colored-parent", 3, "background-color", 4, "ngIf"], ["class", "sk-chasing-dots", 3, "colored", 4, "ngIf"], ["class", "sk-three-bounce", 3, "colored", 4, "ngIf"], ["class", "sk-line-material", 3, "colored", 4, "ngIf"], [1, "sk-cube-grid"], [1, "sk-cube", "sk-cube1"], [1, "sk-cube", "sk-cube2"], [1, "sk-cube", "sk-cube3"], [1, "sk-cube", "sk-cube4"], [1, "sk-cube", "sk-cube5"], [1, "sk-cube", "sk-cube6"], [1, "sk-cube", "sk-cube7"], [1, "sk-cube", "sk-cube8"], [1, "sk-cube", "sk-cube9"], [1, "sk-rotating-plane", "colored-parent"], [1, "sk-double-bounce"], [1, "double-bounce1"], [1, "double-bounce2"], [1, "theme-loader"], [1, "ball-scale"], [1, "contain"], [1, "ring"], [1, "frame"], [1, "sk-wandering-cubes"], [1, "sk-spinner", "sk-spinner-pulse", "colored-parent"], [1, "sk-chasing-dots"], [1, "sk-child", "sk-dot1"], [1, "sk-child", "sk-dot2"], [1, "sk-three-bounce"], [1, "sk-child", "sk-bounce1"], [1, "sk-child", "sk-bounce2"], [1, "sk-child", "sk-bounce3"], [1, "sk-line-material"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SpinnerComponent_div_0_Template, 11, 9, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSpinnerVisible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["#http-loader {\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    position: fixed;\n    z-index: 9999;\n}\n\n.loader-bg {\n    height: 100%;\n    width: 100%;\n    position: absolute;\n    filter: alpha(opacity=70);\n    opacity: .7;\n    background-color: #f1f1f1;\n}\n\n.colored-parent, .colored > div {\n    background-color: #333;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksTUFBTTtJQUNOLE9BQU87SUFDUCxZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaHR0cC1sb2FkZXIge1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogOTk5OTtcbn1cblxuLmxvYWRlci1iZyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NzApO1xuICAgIG9wYWNpdHk6IC43O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG59XG5cbi5jb2xvcmVkLXBhcmVudCwgLmNvbG9yZWQgPiBkaXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG59XG4iXX0= */", ".sk-double-bounce {\n    top: 50%;\n    width: 40px;\n    height: 40px;\n    position: relative;\n    margin: auto;\n}\n\n.double-bounce1, .double-bounce2 {\n    width: 100%;\n    height: 100%;\n    border-radius: 50%;\n    opacity: 0.6;\n    position: absolute;\n    top: 0;\n    left: 0;\n    -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n    animation: sk-bounce 2.0s infinite ease-in-out;\n}\n\n.double-bounce2 {\n    -webkit-animation-delay: -1.0s;\n    animation-delay: -1.0s;\n}\n\n@-webkit-keyframes sk-bounce {\n    0%, 100% {\n        -webkit-transform: scale(0.0)\n    }\n    50% {\n        -webkit-transform: scale(1.0)\n    }\n}\n\n@keyframes sk-bounce {\n    0%, 100% {\n        transform: scale(0.0);\n        -webkit-transform: scale(0.0);\n    }\n    50% {\n        transform: scale(1.0);\n        -webkit-transform: scale(1.0);\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NwaW5uZXIvc3BpbmtpdC1jc3Mvc2stZG91YmxlLWJvdW5jZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxRQUFRO0lBQ1IsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxzREFBc0Q7SUFDdEQsOENBQThDO0FBQ2xEOztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJO1FBQ0k7SUFDSjtJQUNBO1FBQ0k7SUFDSjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxxQkFBcUI7UUFDckIsNkJBQTZCO0lBQ2pDO0lBQ0E7UUFDSSxxQkFBcUI7UUFDckIsNkJBQTZCO0lBQ2pDO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvc3Bpbm5lci9zcGlua2l0LWNzcy9zay1kb3VibGUtYm91bmNlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zay1kb3VibGUtYm91bmNlIHtcbiAgICB0b3A6IDUwJTtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLmRvdWJsZS1ib3VuY2UxLCAuZG91YmxlLWJvdW5jZTIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgb3BhY2l0eTogMC42O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stYm91bmNlIDIuMHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gICAgYW5pbWF0aW9uOiBzay1ib3VuY2UgMi4wcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbn1cblxuLmRvdWJsZS1ib3VuY2UyIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTEuMHM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMS4wcztcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLWJvdW5jZSB7XG4gICAgMCUsIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4wKVxuICAgIH1cbiAgICA1MCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKVxuICAgIH1cbn1cblxuQGtleWZyYW1lcyBzay1ib3VuY2Uge1xuICAgIDAlLCAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjApO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4wKTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjApO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wKTtcbiAgICB9XG59XG4iXX0= */", ".sk-chasing-dots {\n    top: 50%;\n    margin: auto;\n    width: 40px;\n    height: 40px;\n    position: relative;\n    text-align: center;\n    -webkit-animation: sk-chasingDotsRotate 2s infinite linear;\n    animation: sk-chasingDotsRotate 2s infinite linear;\n}\n\n.sk-chasing-dots .sk-child {\n    width: 60%;\n    height: 60%;\n    display: inline-block;\n    position: absolute;\n    top: 0;\n    border-radius: 100%;\n    -webkit-animation: sk-chasingDotsBounce 2s infinite ease-in-out;\n    animation: sk-chasingDotsBounce 2s infinite ease-in-out;\n}\n\n.sk-chasing-dots .sk-dot2 {\n    top: auto;\n    bottom: 0;\n    -webkit-animation-delay: -1s;\n    animation-delay: -1s;\n}\n\n@-webkit-keyframes sk-chasingDotsRotate {\n    100% {\n        transform: rotate(360deg);\n    }\n}\n\n@keyframes sk-chasingDotsRotate {\n    100% {\n        transform: rotate(360deg);\n    }\n}\n\n@-webkit-keyframes sk-chasingDotsBounce {\n    0%, 100% {\n        transform: scale(0);\n    }\n    50% {\n        transform: scale(1);\n    }\n}\n\n@keyframes sk-chasingDotsBounce {\n    0%, 100% {\n        transform: scale(0);\n    }\n    50% {\n        transform: scale(1);\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NwaW5uZXIvc3BpbmtpdC1jc3Mvc2stY2hhc2luZy1kb3RzLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFFBQVE7SUFDUixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLDBEQUEwRDtJQUMxRCxrREFBa0Q7QUFDdEQ7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLG1CQUFtQjtJQUNuQiwrREFBK0Q7SUFDL0QsdURBQXVEO0FBQzNEOztBQUVBO0lBQ0ksU0FBUztJQUNULFNBQVM7SUFDVCw0QkFBNEI7SUFDNUIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0k7UUFFSSx5QkFBeUI7SUFDN0I7QUFDSjs7QUFFQTtJQUNJO1FBRUkseUJBQXlCO0lBQzdCO0FBQ0o7O0FBRUE7SUFDSTtRQUVJLG1CQUFtQjtJQUN2QjtJQUNBO1FBRUksbUJBQW1CO0lBQ3ZCO0FBQ0o7O0FBRUE7SUFDSTtRQUVJLG1CQUFtQjtJQUN2QjtJQUNBO1FBRUksbUJBQW1CO0lBQ3ZCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvc3Bpbm5lci9zcGlua2l0LWNzcy9zay1jaGFzaW5nLWRvdHMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNrLWNoYXNpbmctZG90cyB7XG4gICAgdG9wOiA1MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1jaGFzaW5nRG90c1JvdGF0ZSAycyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgYW5pbWF0aW9uOiBzay1jaGFzaW5nRG90c1JvdGF0ZSAycyBpbmZpbml0ZSBsaW5lYXI7XG59XG5cbi5zay1jaGFzaW5nLWRvdHMgLnNrLWNoaWxkIHtcbiAgICB3aWR0aDogNjAlO1xuICAgIGhlaWdodDogNjAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNrLWNoYXNpbmdEb3RzQm91bmNlIDJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICAgIGFuaW1hdGlvbjogc2stY2hhc2luZ0RvdHNCb3VuY2UgMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG59XG5cbi5zay1jaGFzaW5nLWRvdHMgLnNrLWRvdDIge1xuICAgIHRvcDogYXV0bztcbiAgICBib3R0b206IDA7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0xcztcbiAgICBhbmltYXRpb24tZGVsYXk6IC0xcztcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLWNoYXNpbmdEb3RzUm90YXRlIHtcbiAgICAxMDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBzay1jaGFzaW5nRG90c1JvdGF0ZSB7XG4gICAgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzay1jaGFzaW5nRG90c0JvdW5jZSB7XG4gICAgMCUsIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgc2stY2hhc2luZ0RvdHNCb3VuY2Uge1xuICAgIDAlLCAxMDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgfVxufVxuIl19 */", ".sk-cube-grid {\n    position: relative;\n    top: 50%;\n    width: 40px;\n    height: 40px;\n    margin: auto;\n}\n\n.sk-cube-grid .sk-cube {\n    width: 33%;\n    height: 33%;\n    float: left;\n    -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n    animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n}\n\n.sk-cube-grid .sk-cube1 {\n    -webkit-animation-delay: 0.2s;\n    animation-delay: 0.2s;\n}\n\n.sk-cube-grid .sk-cube2 {\n    -webkit-animation-delay: 0.3s;\n    animation-delay: 0.3s;\n}\n\n.sk-cube-grid .sk-cube3 {\n    -webkit-animation-delay: 0.4s;\n    animation-delay: 0.4s;\n}\n\n.sk-cube-grid .sk-cube4 {\n    -webkit-animation-delay: 0.1s;\n    animation-delay: 0.1s;\n}\n\n.sk-cube-grid .sk-cube5 {\n    -webkit-animation-delay: 0.2s;\n    animation-delay: 0.2s;\n}\n\n.sk-cube-grid .sk-cube6 {\n    -webkit-animation-delay: 0.3s;\n    animation-delay: 0.3s;\n}\n\n.sk-cube-grid .sk-cube7 {\n    -webkit-animation-delay: 0s;\n    animation-delay: 0s;\n}\n\n.sk-cube-grid .sk-cube8 {\n    -webkit-animation-delay: 0.1s;\n    animation-delay: 0.1s;\n}\n\n.sk-cube-grid .sk-cube9 {\n    -webkit-animation-delay: 0.2s;\n    animation-delay: 0.2s;\n}\n\n@-webkit-keyframes sk-cubeGridScaleDelay {\n    0%, 70%, 100% {\n        transform: scale3D(1, 1, 1);\n    }\n    35% {\n        transform: scale3D(0, 0, 1);\n    }\n}\n\n@keyframes sk-cubeGridScaleDelay {\n    0%, 70%, 100% {\n        transform: scale3D(1, 1, 1);\n    }\n    35% {\n        transform: scale3D(0, 0, 1);\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NwaW5uZXIvc3BpbmtpdC1jc3Mvc2stY3ViZS1ncmlkLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxXQUFXO0lBQ1gsa0VBQWtFO0lBQ2xFLDBEQUEwRDtBQUM5RDs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJO1FBRUksMkJBQTJCO0lBQy9CO0lBQ0E7UUFFSSwyQkFBMkI7SUFDL0I7QUFDSjs7QUFFQTtJQUNJO1FBRUksMkJBQTJCO0lBQy9CO0lBQ0E7UUFFSSwyQkFBMkI7SUFDL0I7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zcGlubmVyL3NwaW5raXQtY3NzL3NrLWN1YmUtZ3JpZC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2stY3ViZS1ncmlkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiA1MCU7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLnNrLWN1YmUtZ3JpZCAuc2stY3ViZSB7XG4gICAgd2lkdGg6IDMzJTtcbiAgICBoZWlnaHQ6IDMzJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stY3ViZUdyaWRTY2FsZURlbGF5IDEuM3MgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gICAgYW5pbWF0aW9uOiBzay1jdWJlR3JpZFNjYWxlRGVsYXkgMS4zcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbn1cblxuLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTEge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC4ycztcbn1cblxuLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTIge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC4zcztcbn1cblxuLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTMge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC40cztcbn1cblxuLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTQge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjFzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC4xcztcbn1cblxuLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTUge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC4ycztcbn1cblxuLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTYge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC4zcztcbn1cblxuLnNrLWN1YmUtZ3JpZCAuc2stY3ViZTcge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwcztcbiAgICBhbmltYXRpb24tZGVsYXk6IDBzO1xufVxuXG4uc2stY3ViZS1ncmlkIC5zay1jdWJlOCB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMXM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjFzO1xufVxuXG4uc2stY3ViZS1ncmlkIC5zay1jdWJlOSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMnM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc2stY3ViZUdyaWRTY2FsZURlbGF5IHtcbiAgICAwJSwgNzAlLCAxMDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM0QoMSwgMSwgMSk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUzRCgxLCAxLCAxKTtcbiAgICB9XG4gICAgMzUlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM0QoMCwgMCwgMSk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUzRCgwLCAwLCAxKTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgc2stY3ViZUdyaWRTY2FsZURlbGF5IHtcbiAgICAwJSwgNzAlLCAxMDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM0QoMSwgMSwgMSk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUzRCgxLCAxLCAxKTtcbiAgICB9XG4gICAgMzUlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM0QoMCwgMCwgMSk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUzRCgwLCAwLCAxKTtcbiAgICB9XG59XG4iXX0= */", ".sk-rotating-plane {\n    position: relative;\n    top: 50%;\n    width: 40px;\n    height: 40px;\n    margin: auto;\n    -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;\n    animation: sk-rotateplane 1.2s infinite ease-in-out;\n}\n\n@-webkit-keyframes sk-rotateplane {\n    0% {\n        -webkit-transform: perspective(120px)\n    }\n    50% {\n        -webkit-transform: perspective(120px) rotateY(180deg)\n    }\n    100% {\n        -webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg)\n    }\n}\n\n@keyframes sk-rotateplane {\n    0% {\n        transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n        -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg)\n    }\n    50% {\n        transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n        -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg)\n    }\n    100% {\n        transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n        -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NwaW5uZXIvc3BpbmtpdC1jc3Mvc2stcm90YXRpbmctcGxhbmUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWiwyREFBMkQ7SUFDM0QsbURBQW1EO0FBQ3ZEOztBQUVBO0lBQ0k7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0lBQ0E7UUFDSTtJQUNKO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHlEQUF5RDtRQUN6RDtJQUNKO0lBQ0E7UUFDSSw4REFBOEQ7UUFDOUQ7SUFDSjtJQUNBO1FBQ0ksaUVBQWlFO1FBQ2pFLHlFQUF5RTtJQUM3RTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3NwaW5uZXIvc3BpbmtpdC1jc3Mvc2stcm90YXRpbmctcGxhbmUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNrLXJvdGF0aW5nLXBsYW5lIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiA1MCU7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2stcm90YXRlcGxhbmUgMS4ycyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbiAgICBhbmltYXRpb246IHNrLXJvdGF0ZXBsYW5lIDEuMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzay1yb3RhdGVwbGFuZSB7XG4gICAgMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpXG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWSgxODBkZWcpXG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVkoMTgwZGVnKSByb3RhdGVYKDE4MGRlZylcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgc2stcm90YXRlcGxhbmUge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWCgwZGVnKSByb3RhdGVZKDBkZWcpO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMTIwcHgpIHJvdGF0ZVgoMGRlZykgcm90YXRlWSgwZGVnKVxuICAgIH1cbiAgICA1MCUge1xuICAgICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVYKC0xODAuMWRlZykgcm90YXRlWSgwZGVnKTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDEyMHB4KSByb3RhdGVYKC0xODAuMWRlZykgcm90YXRlWSgwZGVnKVxuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWCgtMTgwZGVnKSByb3RhdGVZKC0xNzkuOWRlZyk7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSgxMjBweCkgcm90YXRlWCgtMTgwZGVnKSByb3RhdGVZKC0xNzkuOWRlZyk7XG4gICAgfVxufVxuIl19 */", ".sk-spinner-pulse {\n    position: relative;\n    top: 50%;\n    width: 40px;\n    height: 40px;\n    margin: auto;\n    border-radius: 100%;\n    -webkit-animation: sk-pulseScaleOut 1s infinite ease-in-out;\n    animation: sk-pulseScaleOut 1s infinite ease-in-out;\n}\n\n@-webkit-keyframes sk-pulseScaleOut {\n    0% {\n        transform: scale(0);\n    }\n    100% {\n        transform: scale(1);\n        opacity: 0;\n    }\n}\n\n@keyframes sk-pulseScaleOut {\n    0% {\n        transform: scale(0);\n    }\n    100% {\n        transform: scale(1);\n        opacity: 0;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NwaW5uZXIvc3BpbmtpdC1jc3Mvc2stc3Bpbm5lci1wdWxzZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiwyREFBMkQ7SUFDM0QsbURBQW1EO0FBQ3ZEOztBQUVBO0lBQ0k7UUFFSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUVJLG1CQUFtQjtRQUNuQixVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO1FBRUksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFFSSxtQkFBbUI7UUFDbkIsVUFBVTtJQUNkO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvc3Bpbm5lci9zcGlua2l0LWNzcy9zay1zcGlubmVyLXB1bHNlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zay1zcGlubmVyLXB1bHNlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiA1MCU7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1wdWxzZVNjYWxlT3V0IDFzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICAgIGFuaW1hdGlvbjogc2stcHVsc2VTY2FsZU91dCAxcyBpbmZpbml0ZSBlYXNlLWluLW91dDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLXB1bHNlU2NhbGVPdXQge1xuICAgIDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBzay1wdWxzZVNjYWxlT3V0IHtcbiAgICAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG59XG4iXX0= */", ".sk-three-bounce {\n    top: 50%;\n    position: relative;\n    margin: auto;\n    width: 80px;\n    text-align: center;\n}\n\n.sk-three-bounce .sk-child {\n    width: 20px;\n    height: 20px;\n    border-radius: 100%;\n    display: inline-block;\n    -webkit-animation: sk-three-bounce 1.4s ease-in-out 0s infinite both;\n    animation: sk-three-bounce 1.4s ease-in-out 0s infinite both;\n}\n\n.sk-three-bounce .sk-bounce1 {\n    -webkit-animation-delay: -0.32s;\n    animation-delay: -0.32s;\n}\n\n.sk-three-bounce .sk-bounce2 {\n    -webkit-animation-delay: -0.16s;\n    animation-delay: -0.16s;\n}\n\n@-webkit-keyframes sk-three-bounce {\n    0%, 80%, 100% {\n        transform: scale(0);\n    }\n    40% {\n        transform: scale(1);\n    }\n}\n\n@keyframes sk-three-bounce {\n    0%, 80%, 100% {\n        transform: scale(0);\n    }\n    40% {\n        transform: scale(1);\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NwaW5uZXIvc3BpbmtpdC1jc3Mvc2stdGhyZWUtYm91bmNlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsb0VBQW9FO0lBQ3BFLDREQUE0RDtBQUNoRTs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0k7UUFFSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUVJLG1CQUFtQjtJQUN2QjtBQUNKOztBQUVBO0lBQ0k7UUFFSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUVJLG1CQUFtQjtJQUN2QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3NwaW5uZXIvc3BpbmtpdC1jc3Mvc2stdGhyZWUtYm91bmNlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zay10aHJlZS1ib3VuY2Uge1xuICAgIHRvcDogNTAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2stdGhyZWUtYm91bmNlIC5zay1jaGlsZCB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay10aHJlZS1ib3VuY2UgMS40cyBlYXNlLWluLW91dCAwcyBpbmZpbml0ZSBib3RoO1xuICAgIGFuaW1hdGlvbjogc2stdGhyZWUtYm91bmNlIDEuNHMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgYm90aDtcbn1cblxuLnNrLXRocmVlLWJvdW5jZSAuc2stYm91bmNlMSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjMycztcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjMycztcbn1cblxuLnNrLXRocmVlLWJvdW5jZSAuc2stYm91bmNlMiB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjE2cztcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjE2cztcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLXRocmVlLWJvdW5jZSB7XG4gICAgMCUsIDgwJSwgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB9XG4gICAgNDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbn1cblxuQGtleWZyYW1lcyBzay10aHJlZS1ib3VuY2Uge1xuICAgIDAlLCA4MCUsIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgfVxuICAgIDQwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG59XG4iXX0= */", ".sk-wandering-cubes {\n    top: 50%;\n    margin: auto;\n    width: 40px;\n    height: 40px;\n    position: relative;\n}\n\n.sk-wandering-cubes .sk-cube {\n    width: 10px;\n    height: 10px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    -webkit-animation: sk-wanderingCube 1.8s ease-in-out -1.8s infinite both;\n    animation: sk-wanderingCube 1.8s ease-in-out -1.8s infinite both;\n}\n\n.sk-wandering-cubes .sk-cube2 {\n    -webkit-animation-delay: -0.9s;\n    animation-delay: -0.9s;\n}\n\n@-webkit-keyframes sk-wanderingCube {\n    0% {\n        transform: rotate(0deg);\n    }\n    25% {\n        transform: translateX(30px) rotate(-90deg) scale(0.5);\n    }\n    50% {\n        /* Hack to make FF rotate in the right direction */\n        transform: translateX(30px) translateY(30px) rotate(-179deg);\n    }\n    50.1% {\n        transform: translateX(30px) translateY(30px) rotate(-180deg);\n    }\n    75% {\n        transform: translateX(0) translateY(30px) rotate(-270deg) scale(0.5);\n    }\n    100% {\n        transform: rotate(-360deg);\n    }\n}\n\n@keyframes sk-wanderingCube {\n    0% {\n        transform: rotate(0deg);\n    }\n    25% {\n        transform: translateX(30px) rotate(-90deg) scale(0.5);\n    }\n    50% {\n        /* Hack to make FF rotate in the right direction */\n        transform: translateX(30px) translateY(30px) rotate(-179deg);\n    }\n    50.1% {\n        transform: translateX(30px) translateY(30px) rotate(-180deg);\n    }\n    75% {\n        transform: translateX(0) translateY(30px) rotate(-270deg) scale(0.5);\n    }\n    100% {\n        transform: rotate(-360deg);\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NwaW5uZXIvc3BpbmtpdC1jc3Mvc2std2FuZGVyaW5nLWN1YmVzLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFFBQVE7SUFDUixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLHdFQUF3RTtJQUN4RSxnRUFBZ0U7QUFDcEU7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0k7UUFFSSx1QkFBdUI7SUFDM0I7SUFDQTtRQUVJLHFEQUFxRDtJQUN6RDtJQUNBO1FBQ0ksa0RBQWtEO1FBRWxELDREQUE0RDtJQUNoRTtJQUNBO1FBRUksNERBQTREO0lBQ2hFO0lBQ0E7UUFFSSxvRUFBb0U7SUFDeEU7SUFDQTtRQUVJLDBCQUEwQjtJQUM5QjtBQUNKOztBQUVBO0lBQ0k7UUFFSSx1QkFBdUI7SUFDM0I7SUFDQTtRQUVJLHFEQUFxRDtJQUN6RDtJQUNBO1FBQ0ksa0RBQWtEO1FBRWxELDREQUE0RDtJQUNoRTtJQUNBO1FBRUksNERBQTREO0lBQ2hFO0lBQ0E7UUFFSSxvRUFBb0U7SUFDeEU7SUFDQTtRQUVJLDBCQUEwQjtJQUM5QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3NwaW5uZXIvc3BpbmtpdC1jc3Mvc2std2FuZGVyaW5nLWN1YmVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zay13YW5kZXJpbmctY3ViZXMge1xuICAgIHRvcDogNTAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2std2FuZGVyaW5nLWN1YmVzIC5zay1jdWJlIHtcbiAgICB3aWR0aDogMTBweDtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay13YW5kZXJpbmdDdWJlIDEuOHMgZWFzZS1pbi1vdXQgLTEuOHMgaW5maW5pdGUgYm90aDtcbiAgICBhbmltYXRpb246IHNrLXdhbmRlcmluZ0N1YmUgMS44cyBlYXNlLWluLW91dCAtMS44cyBpbmZpbml0ZSBib3RoO1xufVxuXG4uc2std2FuZGVyaW5nLWN1YmVzIC5zay1jdWJlMiB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjlzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOXM7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzay13YW5kZXJpbmdDdWJlIHtcbiAgICAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICAyNSUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KSByb3RhdGUoLTkwZGVnKSBzY2FsZSgwLjUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCkgcm90YXRlKC05MGRlZykgc2NhbGUoMC41KTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgICAgLyogSGFjayB0byBtYWtlIEZGIHJvdGF0ZSBpbiB0aGUgcmlnaHQgZGlyZWN0aW9uICovXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpIHRyYW5zbGF0ZVkoMzBweCkgcm90YXRlKC0xNzlkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCkgdHJhbnNsYXRlWSgzMHB4KSByb3RhdGUoLTE3OWRlZyk7XG4gICAgfVxuICAgIDUwLjElIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCkgdHJhbnNsYXRlWSgzMHB4KSByb3RhdGUoLTE4MGRlZyk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KSB0cmFuc2xhdGVZKDMwcHgpIHJvdGF0ZSgtMTgwZGVnKTtcbiAgICB9XG4gICAgNzUlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCkgdHJhbnNsYXRlWSgzMHB4KSByb3RhdGUoLTI3MGRlZykgc2NhbGUoMC41KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHRyYW5zbGF0ZVkoMzBweCkgcm90YXRlKC0yNzBkZWcpIHNjYWxlKDAuNSk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0zNjBkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgc2std2FuZGVyaW5nQ3ViZSB7XG4gICAgMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgMjUlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCkgcm90YXRlKC05MGRlZykgc2NhbGUoMC41KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpIHJvdGF0ZSgtOTBkZWcpIHNjYWxlKDAuNSk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAgIC8qIEhhY2sgdG8gbWFrZSBGRiByb3RhdGUgaW4gdGhlIHJpZ2h0IGRpcmVjdGlvbiAqL1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgzMHB4KSB0cmFuc2xhdGVZKDMwcHgpIHJvdGF0ZSgtMTc5ZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpIHRyYW5zbGF0ZVkoMzBweCkgcm90YXRlKC0xNzlkZWcpO1xuICAgIH1cbiAgICA1MC4xJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDMwcHgpIHRyYW5zbGF0ZVkoMzBweCkgcm90YXRlKC0xODBkZWcpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzBweCkgdHJhbnNsYXRlWSgzMHB4KSByb3RhdGUoLTE4MGRlZyk7XG4gICAgfVxuICAgIDc1JSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApIHRyYW5zbGF0ZVkoMzBweCkgcm90YXRlKC0yNzBkZWcpIHNjYWxlKDAuNSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKSB0cmFuc2xhdGVZKDMwcHgpIHJvdGF0ZSgtMjcwZGVnKSBzY2FsZSgwLjUpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMzYwZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTM2MGRlZyk7XG4gICAgfVxufVxuIl19 */", ".sk-wave {\n    position: relative;\n    top: 50%;\n    margin: auto;\n    width: 50px;\n    height: 40px;\n    text-align: center;\n    font-size: 10px;\n}\n\n.sk-wave .sk-rect {\n    height: 100%;\n    width: 6px;\n    display: inline-block;\n    -webkit-animation: sk-waveStretchDelay 1.2s infinite ease-in-out;\n    animation: sk-waveStretchDelay 1.2s infinite ease-in-out;\n}\n\n.sk-wave .sk-rect1 {\n    -webkit-animation-delay: -1.2s;\n    animation-delay: -1.2s;\n}\n\n.sk-wave .sk-rect2 {\n    -webkit-animation-delay: -1.1s;\n    animation-delay: -1.1s;\n}\n\n.sk-wave .sk-rect3 {\n    -webkit-animation-delay: -1s;\n    animation-delay: -1s;\n}\n\n.sk-wave .sk-rect5 {\n    -webkit-animation-delay: -0.8s;\n    animation-delay: -0.8s;\n}\n\n.sk-wave .sk-rect4 {\n    -webkit-animation-delay: -0.9s;\n    animation-delay: -0.9s;\n}\n\n@-webkit-keyframes sk-waveStretchDelay {\n    0%, 40%, 100% {\n        transform: scaleY(0.4);\n    }\n    20% {\n        transform: scaleY(1);\n    }\n}\n\n@keyframes sk-waveStretchDelay {\n    0%, 40%, 100% {\n        transform: scaleY(0.4);\n    }\n    20% {\n        transform: scaleY(1);\n    }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NwaW5uZXIvc3BpbmtpdC1jc3Mvc2std2F2ZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsZ0VBQWdFO0lBQ2hFLHdEQUF3RDtBQUM1RDs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSw4QkFBOEI7SUFDOUIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0k7UUFFSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUVJLG9CQUFvQjtJQUN4QjtBQUNKOztBQUVBO0lBQ0k7UUFFSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUVJLG9CQUFvQjtJQUN4QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3NwaW5uZXIvc3BpbmtpdC1jc3Mvc2std2F2ZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2std2F2ZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNTAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLnNrLXdhdmUgLnNrLXJlY3Qge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogNnB4O1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc2std2F2ZVN0cmV0Y2hEZWxheSAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICAgIGFuaW1hdGlvbjogc2std2F2ZVN0cmV0Y2hEZWxheSAxLjJzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xufVxuXG4uc2std2F2ZSAuc2stcmVjdDEge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMS4ycztcbiAgICBhbmltYXRpb24tZGVsYXk6IC0xLjJzO1xufVxuXG4uc2std2F2ZSAuc2stcmVjdDIge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMS4xcztcbiAgICBhbmltYXRpb24tZGVsYXk6IC0xLjFzO1xufVxuXG4uc2std2F2ZSAuc2stcmVjdDMge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAtMXM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMXM7XG59XG5cbi5zay13YXZlIC5zay1yZWN0NSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjhzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOHM7XG59XG5cbi5zay13YXZlIC5zay1yZWN0NCB7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC0wLjlzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuOXM7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBzay13YXZlU3RyZXRjaERlbGF5IHtcbiAgICAwJSwgNDAlLCAxMDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgwLjQpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgwLjQpO1xuICAgIH1cbiAgICAyMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVZKDEpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWSgxKTtcbiAgICB9XG59XG5cbkBrZXlmcmFtZXMgc2std2F2ZVN0cmV0Y2hEZWxheSB7XG4gICAgMCUsIDQwJSwgMTAwJSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoMC40KTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMC40KTtcbiAgICB9XG4gICAgMjAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWSgxKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XG4gICAgfVxufVxuIl19 */", ".sk-line-material {\r\n    top: 0  ;\r\n    position: relative;\r\n    margin: auto;\r\n    width: 100%;\r\n}\r\n\r\n.sk-line-material .sk-child {\r\n    width: 100%;\r\n    height: 4px;\r\n    position: absolute;\r\n    top:0;\r\n    display: inline-block;\r\n    transform-origin: 0% 0%;\r\n    -webkit-animation: sk-line-material 2s ease-in-out 0s infinite both;\r\n    animation: sk-line-material 2s ease-in-out 0s infinite both;\r\n}\r\n\r\n@-webkit-keyframes sk-line-material {\r\n    0%, 80%, 100% {\r\n        transform: scaleX(0);\r\n    }\r\n    40% {\r\n        transform: scaleX(1);\r\n    }\r\n}\r\n\r\n@keyframes sk-line-material {\r\n    0% {\r\n        transform: scaleX(0);\r\n    }\r\n    100% {\r\n        transform: scaleX(1);\r\n    }\r\n}\r\n\r\n#http-loader {\r\n    top: 0;\r\n    left: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    position: fixed;\r\n    z-index: 9999;\r\n}\r\n\r\n.loader-bg {\r\n    height: 100%;\r\n    width: 100%;\r\n    position: absolute;\r\n    filter: alpha(opacity=70);\r\n    opacity: 1;\r\n    background-color: rgba(0,0,0,0);\r\n}\r\n\r\n.colored-parent, .colored > div {\r\n    background-color: rgba(26, 188, 156, 0.80);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NwaW5uZXIvc3BpbmtpdC1jc3Mvc2stbGluZS1tYXRlcmlhbC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixLQUFLO0lBQ0wscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixtRUFBbUU7SUFDbkUsMkRBQTJEO0FBQy9EOztBQUVBO0lBQ0k7UUFFSSxvQkFBb0I7SUFDeEI7SUFDQTtRQUVJLG9CQUFvQjtJQUN4QjtBQUNKOztBQUVBO0lBQ0k7UUFFSSxvQkFBb0I7SUFDeEI7SUFDQTtRQUVJLG9CQUFvQjtJQUN4QjtBQUNKOztBQUVBO0lBQ0ksTUFBTTtJQUNOLE9BQU87SUFDUCxZQUFZO0lBQ1osV0FBVztJQUNYLGVBQWU7SUFDZixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFVBQVU7SUFDViwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSwwQ0FBMEM7QUFDOUMiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvc3Bpbm5lci9zcGlua2l0LWNzcy9zay1saW5lLW1hdGVyaWFsLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zay1saW5lLW1hdGVyaWFsIHtcclxuICAgIHRvcDogMCAgO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zay1saW5lLW1hdGVyaWFsIC5zay1jaGlsZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1saW5lLW1hdGVyaWFsIDJzIGVhc2UtaW4tb3V0IDBzIGluZmluaXRlIGJvdGg7XHJcbiAgICBhbmltYXRpb246IHNrLWxpbmUtbWF0ZXJpYWwgMnMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgYm90aDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLWxpbmUtbWF0ZXJpYWwge1xyXG4gICAgMCUsIDgwJSwgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgIH1cclxuICAgIDQwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzay1saW5lLW1hdGVyaWFsIHtcclxuICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAgIH1cclxufVxyXG5cclxuI2h0dHAtbG9hZGVyIHtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbn1cclxuXHJcbi5sb2FkZXItYmcge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NzApO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XHJcbn1cclxuXHJcbi5jb2xvcmVkLXBhcmVudCwgLmNvbG9yZWQgPiBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNiwgMTg4LCAxNTYsIDAuODApO1xyXG59XHJcbiJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-spinner',
                templateUrl: './spinner.component.html',
                styleUrls: [
                    './spinner.component.css',
                    './spinkit-css/sk-double-bounce.css',
                    './spinkit-css/sk-chasing-dots.css',
                    './spinkit-css/sk-cube-grid.css',
                    './spinkit-css/sk-rotating-plane.css',
                    './spinkit-css/sk-spinner-pulse.css',
                    './spinkit-css/sk-three-bounce.css',
                    './spinkit-css/sk-wandering-cubes.css',
                    './spinkit-css/sk-wave.css',
                    './spinkit-css/sk-line-material.css'
                ],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
            }] }]; }, { backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], spinner: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\RAJESH\Angular_Project\VayvaSetAdmin\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map