function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modal-ai-update-ai-update-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modal/ai-update/ai-update.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/ai-update/ai-update.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalAiUpdateAiUpdatePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header><br>\n  <ion-toolbar color=\"success\">\n    <ion-title>AI Update </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <ion-list class=\"line-input\">\n        <ion-item>\n          <ion-label position=\"floating\" class=\"ion-text-wrap\">Select semen type*: </ion-label>\n          <ion-select [(ngModel)]=\"model.semen_Type\" class=\"owner-type\" placeholder=\"Status\">\n            <ion-select-option  *ngFor=\"let item of semenTypeList\" value=\"{{item}}\">{{item}}</ion-select-option>\n          </ion-select>\n        </ion-item><br>\n\n        <ion-item>\n          <ion-label class=\"ion-text-wrap\">Date of AI</ion-label>\n          <ion-input [(ngModel)]=\"model.date_Of_Event\" (ionChange)=\"showValidDate(model.date_Of_Event)\" displayFormat=\"DD-MM-YYYY\" type=\"date\">\n          </ion-input>\n        </ion-item><br>\n        <p style=\"color:red\">{{errorMsg}}</p>\n\n        <ion-item>\n          <ion-label position=\"floating\">Bull Number *: </ion-label>\n          <ion-input type=\"text\" maxlength=\"10\" \n            [(ngModel)]=\"model.bull_Number\" class=\"ion-text-right\"></ion-input>\n        </ion-item><br>\n\n        <ion-item>\n          <ion-label position=\"floating\">Bull Name *: </ion-label>\n          <ion-input type=\"text\"\n            [(ngModel)]=\"model.bull_Name\" class=\"ion-text-right\"></ion-input>\n        </ion-item><br>\n\n        <ion-button color=\"success\"  (click)=\"updateAiDetailsForAnimal()\" fill=\"outline\">Update Details</ion-button>\n        <ion-button color=\"danger\" (click)=\"exit()\" fill=\"outline\">Exit</ion-button>\n\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/modal/ai-update/ai-update-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/modal/ai-update/ai-update-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: AiUpdatePageRoutingModule */

  /***/
  function srcAppModalAiUpdateAiUpdateRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AiUpdatePageRoutingModule", function () {
      return AiUpdatePageRoutingModule;
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


    var _ai_update_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./ai-update.page */
    "./src/app/modal/ai-update/ai-update.page.ts");

    var routes = [{
      path: '',
      component: _ai_update_page__WEBPACK_IMPORTED_MODULE_3__["AiUpdatePage"]
    }];

    var AiUpdatePageRoutingModule = function AiUpdatePageRoutingModule() {
      _classCallCheck(this, AiUpdatePageRoutingModule);
    };

    AiUpdatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AiUpdatePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/modal/ai-update/ai-update.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/modal/ai-update/ai-update.module.ts ***!
    \*****************************************************/

  /*! exports provided: AiUpdatePageModule */

  /***/
  function srcAppModalAiUpdateAiUpdateModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AiUpdatePageModule", function () {
      return AiUpdatePageModule;
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


    var _ai_update_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ai-update-routing.module */
    "./src/app/modal/ai-update/ai-update-routing.module.ts");
    /* harmony import */


    var _ai_update_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./ai-update.page */
    "./src/app/modal/ai-update/ai-update.page.ts");

    var AiUpdatePageModule = function AiUpdatePageModule() {
      _classCallCheck(this, AiUpdatePageModule);
    };

    AiUpdatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ai_update_routing_module__WEBPACK_IMPORTED_MODULE_5__["AiUpdatePageRoutingModule"]],
      declarations: [_ai_update_page__WEBPACK_IMPORTED_MODULE_6__["AiUpdatePage"]]
    })], AiUpdatePageModule);
    /***/
  },

  /***/
  "./src/app/modal/ai-update/ai-update.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/modal/ai-update/ai-update.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalAiUpdateAiUpdatePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-title {\n  font-size: 15px;\n}\n\nion-toolbar {\n  background-color: whitesmoke;\n}\n\nion-content {\n  background-color: whitesmoke;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n\n.line-input {\n  margin-bottom: 0 !important;\n}\n\n.line-input ion-item {\n  --border-color: transparent!important;\n  --highlight-height: 0;\n  border: 1px solid #dedede;\n  border-radius: 4px;\n}\n\n.line-input ion-item.item-has-focus {\n  border: 1px solid greenyellow;\n}\n\n.line-input ion-item ion-label {\n  color: black !important;\n  font-weight: 300;\n  font-size: 12px !important;\n}\n\nion-input {\n  font-size: 12px !important;\n}\n\nion-label {\n  font-weight: bold;\n}\n\nion-card-subtitle {\n  text-align: center;\n}\n\nion-item {\n  height: 55px;\n}\n\nion-label#farm-type {\n  font-size: 13px !important;\n}\n\nion-label {\n  font-size: 9px;\n}\n\nion-select.owner-type {\n  font-size: 13px;\n}\n\nion-label#lb {\n  font-size: 12px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWwvYWktdXBkYXRlL0Q6XFxPRkZJQ0VcXFBST0pFQ1RcXERPTF9EYWlyeU1vYmlsZUFwcFxcZG9sLWRhaXJ5LWFwcC1tYXN0ZXIvc3JjXFxhcHBcXG1vZGFsXFxhaS11cGRhdGVcXGFpLXVwZGF0ZS5wYWdlLnNjc3MiLCJzcmMvYXBwL21vZGFsL2FpLXVwZGF0ZS9haS11cGRhdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBRENBO0VBQ0ksNEJBQUE7QUNFSjs7QURBQTtFQUNJLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNHSjs7QURGSTtFQUNBLGFBQUE7QUNJSjs7QURBQTtFQUNJLDJCQUFBO0FDR0o7O0FERkk7RUFDSSxxQ0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0lSOztBREhRO0VBQ0ksNkJBQUE7QUNLWjs7QURIUTtFQUNJLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQ0taOztBRERBO0VBQ0ksMEJBQUE7QUNJSjs7QURGQTtFQUNJLGlCQUFBO0FDS0o7O0FERkE7RUFDSSxrQkFBQTtBQ0tKOztBREZBO0VBQ0ksWUFBQTtBQ0tKOztBREZBO0VBQ0ksMEJBQUE7QUNLSjs7QURGQTtFQUNJLGNBQUE7QUNLSjs7QURIQTtFQUNRLGVBQUE7QUNNUjs7QURKQTtFQUNJLDBCQUFBO0FDT0oiLCJmaWxlIjoic3JjL2FwcC9tb2RhbC9haS11cGRhdGUvYWktdXBkYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5pb24tdG9vbGJhcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgLS1vZmZzZXQtYm90dG9tOiBhdXRvIWltcG9ydGFudDtcclxuICAgIC0tb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuLmxpbmUtaW5wdXQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMCFpbXBvcnRhbnQ7XHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcclxuICAgICAgICAtLWhpZ2hsaWdodC1oZWlnaHQ6IDA7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgJi5pdGVtLWhhcy1mb2N1cyB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVueWVsbG93O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2shaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHghaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5pb24taW5wdXR7XHJcbiAgICBmb250LXNpemU6IDEycHghaW1wb3J0YW50O1xyXG59XHJcbmlvbi1sYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaW9uLWNhcmQtc3VidGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1pdGVte1xyXG4gICAgaGVpZ2h0OiA1NXB4O1xyXG59XHJcblxyXG5pb24tbGFiZWwjZmFybS10eXBle1xyXG4gICAgZm9udC1zaXplOiAxM3B4IWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWxhYmVse1xyXG4gICAgZm9udC1zaXplOiA5cHg7XHJcbn1cclxuaW9uLXNlbGVjdC5vd25lci10eXBle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDsgLy9zZXRzIHBsYWNlaG9sZGVyIGZvbnQgc2l6ZVxyXG59XHJcbmlvbi1sYWJlbCNsYntcclxuICAgIGZvbnQtc2l6ZTogMTJweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiIsImlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG5pb24tY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XG4gIC0tb2Zmc2V0LWJvdHRvbTogYXV0byFpbXBvcnRhbnQ7XG4gIC0tb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5pb24tY29udGVudDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ubGluZS1pbnB1dCB7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbn1cbi5saW5lLWlucHV0IGlvbi1pdGVtIHtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcbiAgLS1oaWdobGlnaHQtaGVpZ2h0OiAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4ubGluZS1pbnB1dCBpb24taXRlbS5pdGVtLWhhcy1mb2N1cyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVueWVsbG93O1xufVxuLmxpbmUtaW5wdXQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xufVxuXG5pb24taW5wdXQge1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1jYXJkLXN1YnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pb24taXRlbSB7XG4gIGhlaWdodDogNTVweDtcbn1cblxuaW9uLWxhYmVsI2Zhcm0tdHlwZSB7XG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xufVxuXG5pb24tbGFiZWwge1xuICBmb250LXNpemU6IDlweDtcbn1cblxuaW9uLXNlbGVjdC5vd25lci10eXBlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuXG5pb24tbGFiZWwjbGIge1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modal/ai-update/ai-update.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/modal/ai-update/ai-update.page.ts ***!
    \***************************************************/

  /*! exports provided: AiUpdatePage */

  /***/
  function srcAppModalAiUpdateAiUpdatePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AiUpdatePage", function () {
      return AiUpdatePage;
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


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var src_app_model_ai_details__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/model/ai-details */
    "./src/app/model/ai-details.ts");
    /* harmony import */


    var src_app_model_ains_details__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/model/ains-details */
    "./src/app/model/ains-details.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var AiUpdatePage = /*#__PURE__*/function () {
      function AiUpdatePage(storage, router, alertCtrl, apiService) {
        _classCallCheck(this, AiUpdatePage);

        this.storage = storage;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.apiService = apiService;
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]('en-US');
        this.model = new src_app_model_ai_details__WEBPACK_IMPORTED_MODULE_6__["AiDetails"]();
        this.modelAiNs = new src_app_model_ains_details__WEBPACK_IMPORTED_MODULE_7__["AinsDetails"]();
      }

      _createClass(AiUpdatePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.optionsForSelect();
        } //list of option to select the list of semen type

      }, {
        key: "optionsForSelect",
        value: function optionsForSelect() {
          this.semenTypeList = ["Sex sorted Semen Inventory (Imported)", "Conventional frozen Semen Inventory (Imported)", "Progeny Tested Semen Yusipang"];
        }
      }, {
        key: "exit",
        value: function exit() {
          this.taggNumber = null;
          this.storage.set('taggNumber', this.taggNumber);
          this.router.navigate(['ai-ns']);
          this.storage.clear();
        }
      }, {
        key: "showValidDate",
        value: function showValidDate(date_Of_Event) {
          this.currentDate = this.pipe.transform(Date.now(), 'yyyy-MM-dd');

          if (date_Of_Event <= this.currentDate) {
            this.errorMsg = "";
            return this.model.date_Of_Event;
          } else {
            this.errorMsg = "Please enter valid date";
          }
        } //Update ai details for animal

      }, {
        key: "updateAiDetailsForAnimal",
        value: function updateAiDetailsForAnimal() {
          var _this = this;

          this.storage.get('taggNumber').then(function (parameter) {
            _this.taggNumber = parameter;

            if (_this.taggNumber != null && _this.model.semen_Type != "" && _this.model.date_Of_Event != null && _this.model.bull_Number != "" && _this.model.bull_Name != "") {
              _this.apiService.upodateAiDetails(_this.taggNumber, _this.model).subscribe(function (response) {
                _this.successAlert();
              }, function (error) {
                _this.failedAlert();
              });

              _this.taggNumber = null;

              _this.storage.set('taggNumber', _this.taggNumber);

              _this.router.navigate(['ai-ns']);

              _this.storage.clear();
            } else {
              _this.failedAlert();
            }
          });
          this.getAiNsDetailsAndSaveToAudit();
        } //get AINS details and update in Audit

      }, {
        key: "getAiNsDetailsAndSaveToAudit",
        value: function getAiNsDetailsAndSaveToAudit() {
          var _this2 = this;

          this.storage.get('taggNumber').then(function (parameter) {
            _this2.taggNumber = parameter;

            _this2.apiService.getAiNsDetailsById(_this2.taggNumber).subscribe(function (response) {
              if (_this2.taggNumber === response.animal_Tag_Number) {
                _this2.modelAiNs.bull_Name = response.bull_Name;
                _this2.modelAiNs.date_Of_Event = response.date_Of_Event;
                _this2.modelAiNs.semen_Type = response.semen_Type;
                _this2.modelAiNs.bull_Number = response.bull_Number;
                _this2.modelAiNs.ai_Center_Id = response.ai_Center_Id;
                _this2.modelAiNs.animal_Tag_Number = response.animal_Tag_Number;
                _this2.modelAiNs.technique_Name = response.technique_Name;
                _this2.modelAiNs.bull_Breed_Type_Id = response.bull_Breed_Type_Id;
                _this2.modelAiNs.technician_Name = response.technician_Name;
                _this2.modelAiNs.ai_Technician_Type = response.ai_Technician_Type;
                _this2.modelAiNs.type_Of_Assited_Formula = response.type_Of_Assited_Formula;
                _this2.modelAiNs.date_Of_Pd_Status = response.date_Of_Pd_Status;
                _this2.modelAiNs.pd_Status_Date = response.pd_Status_Date;
                _this2.modelAiNs.breeding_Status = response.breeding_Status;
                _this2.modelAiNs.longitude = response.longitude;
                _this2.modelAiNs.user_Gewog_Id = response.user_Gewog_Id;
                _this2.modelAiNs.type_Of_Event = response.type_Of_Event;
                _this2.modelAiNs.pd_Status = response.pd_Status;
                _this2.modelAiNs.bull_Exotic = response.bull_Exotic;
                _this2.modelAiNs.latitude = response.latitude;
                _this2.modelAiNs.pd_Date = response.pd_Date;
                _this2.modelAiNs.remarks = response.remarks;

                _this2.apiService.saveAiNsDetailsAudit(_this2.modelAiNs).subscribe(function (response) {
                  console.log("Updated");
                });
              }
            });
          });
        } // **************************************all alert message here****************
        //Failed alert

      }, {
        key: "failedAlert",
        value: function failedAlert() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertCtrl.create({
                      header: 'Update Failed',
                      message: "Please try again later",
                      buttons: [{
                        text: 'Ok'
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        } //success alert

      }, {
        key: "successAlert",
        value: function successAlert() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertCtrl.create({
                      header: 'Success',
                      message: "Updated AI Details Sucessfully",
                      buttons: [{
                        text: 'Ok'
                      }]
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return AiUpdatePage;
    }();

    AiUpdatePage.ctorParameters = function () {
      return [{
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
      }];
    };

    AiUpdatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ai-update',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./ai-update.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modal/ai-update/ai-update.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./ai-update.page.scss */
      "./src/app/modal/ai-update/ai-update.page.scss"))["default"]]
    })], AiUpdatePage);
    /***/
  },

  /***/
  "./src/app/model/ai-details.ts":
  /*!*************************************!*\
    !*** ./src/app/model/ai-details.ts ***!
    \*************************************/

  /*! exports provided: AiDetails */

  /***/
  function srcAppModelAiDetailsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AiDetails", function () {
      return AiDetails;
    });

    var AiDetails = function AiDetails() {
      _classCallCheck(this, AiDetails);
    };
    /***/

  }
}]);
//# sourceMappingURL=modal-ai-update-ai-update-module-es5.js.map