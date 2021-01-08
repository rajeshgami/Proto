(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-item-master-item-master-module"],{

/***/ "./src/app/pages/item-master/edit-item/edit-item.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/item-master/edit-item/edit-item.component.ts ***!
  \********************************************************************/
/*! exports provided: EditItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditItemComponent", function() { return EditItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class EditItemComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
EditItemComponent.ɵfac = function EditItemComponent_Factory(t) { return new (t || EditItemComponent)(); };
EditItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditItemComponent, selectors: [["app-edit-item"]], decls: 0, vars: 0, template: function EditItemComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2l0ZW0tbWFzdGVyL2VkaXQtaXRlbS9lZGl0LWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-item',
                templateUrl: './edit-item.component.html',
                styleUrls: ['./edit-item.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/item-master/item-master-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/item-master/item-master-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ItemMasterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemMasterRoutingModule", function() { return ItemMasterRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: '',
        data: {
            breadcrumb: 'Master',
            status: false
        },
        children: [
            {
                path: 'item-master',
                loadChildren: () => Promise.all(/*! import() | item-list-item-list-module */[__webpack_require__.e("default~add-edit-item-add-edit-item-module~item-list-item-list-module"), __webpack_require__.e("item-list-item-list-module")]).then(__webpack_require__.bind(null, /*! ./item-list/item-list.module */ "./src/app/pages/item-master/item-list/item-list.module.ts")).then(m => m.ItemListModule)
            },
            {
                path: 'add-edit-item',
                loadChildren: () => Promise.all(/*! import() | add-edit-item-add-edit-item-module */[__webpack_require__.e("default~add-edit-item-add-edit-item-module~item-list-item-list-module"), __webpack_require__.e("add-edit-item-add-edit-item-module")]).then(__webpack_require__.bind(null, /*! ./add-edit-item/add-edit-item.module */ "./src/app/pages/item-master/add-edit-item/add-edit-item.module.ts")).then(m => m.AddEditItemModule)
            },
            {
                path: 'add-edit-item/:id',
                loadChildren: () => Promise.all(/*! import() | add-edit-item-add-edit-item-module */[__webpack_require__.e("default~add-edit-item-add-edit-item-module~item-list-item-list-module"), __webpack_require__.e("add-edit-item-add-edit-item-module")]).then(__webpack_require__.bind(null, /*! ./add-edit-item/add-edit-item.module */ "./src/app/pages/item-master/add-edit-item/add-edit-item.module.ts")).then(m => m.AddEditItemModule)
            }
        ]
    }
];
class ItemMasterRoutingModule {
}
ItemMasterRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ItemMasterRoutingModule });
ItemMasterRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ItemMasterRoutingModule_Factory(t) { return new (t || ItemMasterRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ItemMasterRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemMasterRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                declarations: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/item-master/item-master.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/item-master/item-master.component.ts ***!
  \************************************************************/
/*! exports provided: ItemMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemMasterComponent", function() { return ItemMasterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/spinner/spinner.component */ "./src/app/shared/spinner/spinner.component.ts");




class ItemMasterComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ItemMasterComponent.ɵfac = function ItemMasterComponent_Factory(t) { return new (t || ItemMasterComponent)(); };
ItemMasterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemMasterComponent, selectors: [["app-item-master"]], decls: 2, vars: 0, template: function ItemMasterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2l0ZW0tbWFzdGVyL2l0ZW0tbWFzdGVyLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemMasterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-item-master',
                templateUrl: './item-master.component.html',
                styleUrls: ['./item-master.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/item-master/item-master.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/item-master/item-master.module.ts ***!
  \*********************************************************/
/*! exports provided: ItemMasterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemMasterModule", function() { return ItemMasterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _item_master_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item-master-routing.module */ "./src/app/pages/item-master/item-master-routing.module.ts");
/* harmony import */ var _item_master_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item-master.component */ "./src/app/pages/item-master/item-master.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _edit_item_edit_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-item/edit-item.component */ "./src/app/pages/item-master/edit-item/edit-item.component.ts");







class ItemMasterModule {
}
ItemMasterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ItemMasterModule });
ItemMasterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ItemMasterModule_Factory(t) { return new (t || ItemMasterModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _item_master_routing_module__WEBPACK_IMPORTED_MODULE_2__["ItemMasterRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ItemMasterModule, { declarations: [_item_master_component__WEBPACK_IMPORTED_MODULE_3__["ItemMasterComponent"], _edit_item_edit_item_component__WEBPACK_IMPORTED_MODULE_5__["EditItemComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _item_master_routing_module__WEBPACK_IMPORTED_MODULE_2__["ItemMasterRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemMasterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_item_master_component__WEBPACK_IMPORTED_MODULE_3__["ItemMasterComponent"], _edit_item_edit_item_component__WEBPACK_IMPORTED_MODULE_5__["EditItemComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _item_master_routing_module__WEBPACK_IMPORTED_MODULE_2__["ItemMasterRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-item-master-item-master-module-es2015.js.map