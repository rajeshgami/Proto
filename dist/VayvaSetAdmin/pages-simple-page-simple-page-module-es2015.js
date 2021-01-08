(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-simple-page-simple-page-module"],{

/***/ "./src/app/pages/simple-page/simple-page-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/simple-page/simple-page-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: SimplePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplePageRoutingModule", function() { return SimplePageRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _simple_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./simple-page.component */ "./src/app/pages/simple-page/simple-page.component.ts");





const routes = [
    {
        path: '',
        component: _simple_page_component__WEBPACK_IMPORTED_MODULE_2__["SimplePageComponent"],
        data: {
            breadcrumb: 'Sample Page',
            icon: 'icofont icofont-file-document bg-c-pink',
            breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Sample Page',
            status: true
        }
    }
];
class SimplePageRoutingModule {
}
SimplePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SimplePageRoutingModule });
SimplePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SimplePageRoutingModule_Factory(t) { return new (t || SimplePageRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SimplePageRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SimplePageRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/simple-page/simple-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/simple-page/simple-page.component.ts ***!
  \************************************************************/
/*! exports provided: SimplePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplePageComponent", function() { return SimplePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/card/card.component */ "./src/app/shared/card/card.component.ts");



class SimplePageComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
SimplePageComponent.ɵfac = function SimplePageComponent_Factory(t) { return new (t || SimplePageComponent)(); };
SimplePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SimplePageComponent, selectors: [["app-simple-page"]], decls: 5, vars: 1, consts: [[1, "row"], [1, "col-sm-12"], [3, "title"]], template: function SimplePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Hello card");
    } }, directives: [_shared_card_card_component__WEBPACK_IMPORTED_MODULE_1__["CardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpbXBsZS1wYWdlL3NpbXBsZS1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SimplePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-simple-page',
                templateUrl: './simple-page.component.html',
                styleUrls: ['./simple-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/simple-page/simple-page.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/simple-page/simple-page.module.ts ***!
  \*********************************************************/
/*! exports provided: SimplePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplePageModule", function() { return SimplePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _simple_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./simple-page-routing.module */ "./src/app/pages/simple-page/simple-page-routing.module.ts");
/* harmony import */ var _simple_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./simple-page.component */ "./src/app/pages/simple-page/simple-page.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");






class SimplePageModule {
}
SimplePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SimplePageModule });
SimplePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SimplePageModule_Factory(t) { return new (t || SimplePageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _simple_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["SimplePageRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SimplePageModule, { declarations: [_simple_page_component__WEBPACK_IMPORTED_MODULE_3__["SimplePageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _simple_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["SimplePageRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SimplePageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _simple_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["SimplePageRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ],
                declarations: [_simple_page_component__WEBPACK_IMPORTED_MODULE_3__["SimplePageComponent"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-simple-page-simple-page-module-es2015.js.map