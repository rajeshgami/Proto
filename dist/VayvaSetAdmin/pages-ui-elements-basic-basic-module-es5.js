function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ui-elements-basic-basic-module"], {
  /***/
  "./src/app/pages/ui-elements/basic/basic-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/ui-elements/basic/basic-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: BasicRoutingModule */

  /***/
  function srcAppPagesUiElementsBasicBasicRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicRoutingModule", function () {
      return BasicRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      data: {
        breadcrumb: 'Basic Components',
        status: false
      },
      children: [{
        path: 'button',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | button-button-module */
          "button-button-module").then(__webpack_require__.bind(null,
          /*! ./button/button.module */
          "./src/app/pages/ui-elements/basic/button/button.module.ts")).then(function (m) {
            return m.ButtonModule;
          });
        }
      }, {
        path: 'typography',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | typography-typography-module */
          "typography-typography-module").then(__webpack_require__.bind(null,
          /*! ./typography/typography.module */
          "./src/app/pages/ui-elements/basic/typography/typography.module.ts")).then(function (m) {
            return m.TypographyModule;
          });
        }
      }]
    }];

    var BasicRoutingModule = function BasicRoutingModule() {
      _classCallCheck(this, BasicRoutingModule);
    };

    BasicRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: BasicRoutingModule
    });
    BasicRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function BasicRoutingModule_Factory(t) {
        return new (t || BasicRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BasicRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasicRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/ui-elements/basic/basic.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/ui-elements/basic/basic.component.ts ***!
    \************************************************************/

  /*! exports provided: BasicComponent */

  /***/
  function srcAppPagesUiElementsBasicBasicComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicComponent", function () {
      return BasicComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/spinner/spinner.component */
    "./src/app/shared/spinner/spinner.component.ts");

    var BasicComponent =
    /*#__PURE__*/
    function () {
      function BasicComponent() {
        _classCallCheck(this, BasicComponent);
      }

      _createClass(BasicComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BasicComponent;
    }();

    BasicComponent.ɵfac = function BasicComponent_Factory(t) {
      return new (t || BasicComponent)();
    };

    BasicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BasicComponent,
      selectors: [["app-basic"]],
      decls: 2,
      vars: 0,
      template: function BasicComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VpLWVsZW1lbnRzL2Jhc2ljL2Jhc2ljLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-basic',
          templateUrl: './basic.component.html',
          styleUrls: ['./basic.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/ui-elements/basic/basic.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/ui-elements/basic/basic.module.ts ***!
    \*********************************************************/

  /*! exports provided: BasicModule */

  /***/
  function srcAppPagesUiElementsBasicBasicModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicModule", function () {
      return BasicModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _basic_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./basic-routing.module */
    "./src/app/pages/ui-elements/basic/basic-routing.module.ts");
    /* harmony import */


    var _basic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./basic.component */
    "./src/app/pages/ui-elements/basic/basic.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var BasicModule = function BasicModule() {
      _classCallCheck(this, BasicModule);
    };

    BasicModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: BasicModule
    });
    BasicModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function BasicModule_Factory(t) {
        return new (t || BasicModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BasicModule, {
        declarations: [_basic_component__WEBPACK_IMPORTED_MODULE_3__["BasicComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasicModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]],
          declarations: [_basic_component__WEBPACK_IMPORTED_MODULE_3__["BasicComponent"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=pages-ui-elements-basic-basic-module-es5.js.map