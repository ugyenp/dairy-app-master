function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-page-login-page-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login-page/login-page.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login-page/login-page.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginPageLoginPagePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>login-page</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/login-page/login-page-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/login-page/login-page-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: LoginPagePageRoutingModule */

  /***/
  function srcAppLoginPageLoginPageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPagePageRoutingModule", function () {
      return LoginPagePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _login_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login-page.page */
    "./src/app/login-page/login-page.page.ts");

    var routes = [{
      path: '',
      component: _login_page_page__WEBPACK_IMPORTED_MODULE_3__["LoginPagePage"]
    }];

    var LoginPagePageRoutingModule = function LoginPagePageRoutingModule() {
      _classCallCheck(this, LoginPagePageRoutingModule);
    };

    LoginPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPagePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/login-page/login-page.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/login-page/login-page.module.ts ***!
    \*************************************************/

  /*! exports provided: LoginPagePageModule */

  /***/
  function srcAppLoginPageLoginPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPagePageModule", function () {
      return LoginPagePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _login_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-page-routing.module */
    "./src/app/login-page/login-page-routing.module.ts");
    /* harmony import */


    var _login_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login-page.page */
    "./src/app/login-page/login-page.page.ts");

    var LoginPagePageModule = function LoginPagePageModule() {
      _classCallCheck(this, LoginPagePageModule);
    };

    LoginPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPagePageRoutingModule"]],
      declarations: [_login_page_page__WEBPACK_IMPORTED_MODULE_6__["LoginPagePage"]]
    })], LoginPagePageModule);
    /***/
  },

  /***/
  "./src/app/login-page/login-page.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/login-page/login-page.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginPageLoginPagePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLXBhZ2UvbG9naW4tcGFnZS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/login-page/login-page.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/login-page/login-page.page.ts ***!
    \***********************************************/

  /*! exports provided: LoginPagePage */

  /***/
  function srcAppLoginPageLoginPagePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPagePage", function () {
      return LoginPagePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LoginPagePage = /*#__PURE__*/function () {
      function LoginPagePage() {
        _classCallCheck(this, LoginPagePage);
      }

      _createClass(LoginPagePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginPagePage;
    }();

    LoginPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login-page',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login-page.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login-page/login-page.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login-page.page.scss */
      "./src/app/login-page/login-page.page.scss"))["default"]]
    })], LoginPagePage);
    /***/
  }
}]);
//# sourceMappingURL=login-page-login-page-module-es5.js.map