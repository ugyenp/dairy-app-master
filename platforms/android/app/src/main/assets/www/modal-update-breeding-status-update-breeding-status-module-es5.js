function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modal-update-breeding-status-update-breeding-status-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modal/update-breeding-status/update-breeding-status.page.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/update-breeding-status/update-breeding-status.page.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModalUpdateBreedingStatusUpdateBreedingStatusPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header><br>\n  <ion-toolbar color=\"success\">\n    <ion-title>Update Breeding Status </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <ion-list class=\"line-input\">\n        <ion-item>\n          <ion-label position=\"floating\" class=\"ion-text-wrap\">Breeding Status*: </ion-label>\n          <ion-select [(ngModel)]=\"model.breeding_Status\" class=\"owner-type\" placeholder=\"Status\">\n            <ion-select-option  *ngFor=\"let item of breedingStatusList\" value=\"{{item}}\">{{item}}</ion-select-option>\n          </ion-select>\n        </ion-item><br>\n\n        <ion-item>\n          <ion-label position=\"floating\" class=\"ion-text-wrap\">PD Status*: </ion-label>\n          <ion-select [(ngModel)]=\"model.pd_Status\" class=\"owner-type\" placeholder=\"Status\">\n            <ion-select-option  *ngFor=\"let item of pdStatusList\" value=\"{{item}}\">{{item}}</ion-select-option>\n          </ion-select>\n        </ion-item><br>\n\n        <ion-item>\n          <ion-label class=\"ion-text-wrap\">Date*: </ion-label>\n          <ion-input  [(ngModel)]=\"model.pd_Status_Date\" displayFormat=\"DD-MM-YYYY\" type=\"date\">\n          </ion-input>\n        </ion-item><br>\n\n        <ion-button color=\"success\"  (click)=\"updateBreedingStatus()\" fill=\"outline\">Update Status</ion-button>\n        <ion-button color=\"danger\"  (click)=\"exit()\" fill=\"outline\">Exit</ion-button>\n\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/modal/update-breeding-status/update-breeding-status-routing.module.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/modal/update-breeding-status/update-breeding-status-routing.module.ts ***!
    \***************************************************************************************/

  /*! exports provided: UpdateBreedingStatusPageRoutingModule */

  /***/
  function srcAppModalUpdateBreedingStatusUpdateBreedingStatusRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateBreedingStatusPageRoutingModule", function () {
      return UpdateBreedingStatusPageRoutingModule;
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


    var _update_breeding_status_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./update-breeding-status.page */
    "./src/app/modal/update-breeding-status/update-breeding-status.page.ts");

    var routes = [{
      path: '',
      component: _update_breeding_status_page__WEBPACK_IMPORTED_MODULE_3__["UpdateBreedingStatusPage"]
    }];

    var UpdateBreedingStatusPageRoutingModule = function UpdateBreedingStatusPageRoutingModule() {
      _classCallCheck(this, UpdateBreedingStatusPageRoutingModule);
    };

    UpdateBreedingStatusPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UpdateBreedingStatusPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/modal/update-breeding-status/update-breeding-status.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/modal/update-breeding-status/update-breeding-status.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: UpdateBreedingStatusPageModule */

  /***/
  function srcAppModalUpdateBreedingStatusUpdateBreedingStatusModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateBreedingStatusPageModule", function () {
      return UpdateBreedingStatusPageModule;
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


    var _update_breeding_status_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./update-breeding-status-routing.module */
    "./src/app/modal/update-breeding-status/update-breeding-status-routing.module.ts");
    /* harmony import */


    var _update_breeding_status_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./update-breeding-status.page */
    "./src/app/modal/update-breeding-status/update-breeding-status.page.ts");

    var UpdateBreedingStatusPageModule = function UpdateBreedingStatusPageModule() {
      _classCallCheck(this, UpdateBreedingStatusPageModule);
    };

    UpdateBreedingStatusPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _update_breeding_status_routing_module__WEBPACK_IMPORTED_MODULE_5__["UpdateBreedingStatusPageRoutingModule"]],
      declarations: [_update_breeding_status_page__WEBPACK_IMPORTED_MODULE_6__["UpdateBreedingStatusPage"]]
    })], UpdateBreedingStatusPageModule);
    /***/
  },

  /***/
  "./src/app/modal/update-breeding-status/update-breeding-status.page.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/modal/update-breeding-status/update-breeding-status.page.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModalUpdateBreedingStatusUpdateBreedingStatusPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-title {\n  font-size: 15px;\n}\n\nion-toolbar {\n  background-color: whitesmoke;\n}\n\nion-content {\n  background-color: whitesmoke;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n\n.line-input {\n  margin-bottom: 0 !important;\n}\n\n.line-input ion-item {\n  --border-color: transparent!important;\n  --highlight-height: 0;\n  border: 1px solid #dedede;\n  border-radius: 4px;\n}\n\n.line-input ion-item.item-has-focus {\n  border: 1px solid greenyellow;\n}\n\n.line-input ion-item ion-label {\n  color: black !important;\n  font-weight: 300;\n  font-size: 12px !important;\n}\n\nion-input {\n  font-size: 12px !important;\n}\n\nion-label {\n  font-weight: bold;\n}\n\nion-card-subtitle {\n  text-align: center;\n}\n\nion-item {\n  height: 55px;\n}\n\nion-label#farm-type {\n  font-size: 13px !important;\n}\n\nion-label {\n  font-size: 9px;\n}\n\nion-select.owner-type {\n  font-size: 13px;\n}\n\nion-label#lb {\n  font-size: 12px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWwvdXBkYXRlLWJyZWVkaW5nLXN0YXR1cy9EOlxcT0ZGSUNFXFxQUk9KRUNUXFxET0xfRGFpcnlNb2JpbGVBcHBcXGRvbC1kYWlyeS1hcHAtbWFzdGVyL3NyY1xcYXBwXFxtb2RhbFxcdXBkYXRlLWJyZWVkaW5nLXN0YXR1c1xcdXBkYXRlLWJyZWVkaW5nLXN0YXR1cy5wYWdlLnNjc3MiLCJzcmMvYXBwL21vZGFsL3VwZGF0ZS1icmVlZGluZy1zdGF0dXMvdXBkYXRlLWJyZWVkaW5nLXN0YXR1cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSw0QkFBQTtBQ0VKOztBREFBO0VBQ0ksNEJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0dKOztBREZJO0VBQ0EsYUFBQTtBQ0lKOztBREFBO0VBQ0ksMkJBQUE7QUNHSjs7QURGSTtFQUNJLHFDQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDSVI7O0FESFE7RUFDSSw2QkFBQTtBQ0taOztBREhRO0VBQ0ksdUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FDS1o7O0FEREE7RUFDSSwwQkFBQTtBQ0lKOztBREZBO0VBQ0ksaUJBQUE7QUNLSjs7QURGQTtFQUNJLGtCQUFBO0FDS0o7O0FERkE7RUFDSSxZQUFBO0FDS0o7O0FERkE7RUFDSSwwQkFBQTtBQ0tKOztBREZBO0VBQ0ksY0FBQTtBQ0tKOztBREhBO0VBQ1EsZUFBQTtBQ01SOztBREpBO0VBQ0ksMEJBQUE7QUNPSiIsImZpbGUiOiJzcmMvYXBwL21vZGFsL3VwZGF0ZS1icmVlZGluZy1zdGF0dXMvdXBkYXRlLWJyZWVkaW5nLXN0YXR1cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuaW9uLXRvb2xiYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIC0tb2Zmc2V0LWJvdHRvbTogYXV0byFpbXBvcnRhbnQ7XHJcbiAgICAtLW92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5saW5lLWlucHV0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDAhaW1wb3J0YW50O1xyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1oaWdobGlnaHQtaGVpZ2h0OiAwO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICYuaXRlbS1oYXMtZm9jdXMge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbnllbGxvdztcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgY29sb3I6IGJsYWNrIWltcG9ydGFudDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4IWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuaW9uLWlucHV0e1xyXG4gICAgZm9udC1zaXplOiAxMnB4IWltcG9ydGFudDtcclxufVxyXG5pb24tbGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmlvbi1jYXJkLXN1YnRpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pb24taXRlbXtcclxuICAgIGhlaWdodDogNTVweDtcclxufVxyXG5cclxuaW9uLWxhYmVsI2Zhcm0tdHlwZXtcclxuICAgIGZvbnQtc2l6ZTogMTNweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG59XHJcbmlvbi1zZWxlY3Qub3duZXItdHlwZXtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7IC8vc2V0cyBwbGFjZWhvbGRlciBmb250IHNpemVcclxufVxyXG5pb24tbGFiZWwjbGJ7XHJcbiAgICBmb250LXNpemU6IDEycHghaW1wb3J0YW50O1xyXG59XHJcblxyXG4iLCJpb24tdGl0bGUge1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAtLW9mZnNldC1ib3R0b206IGF1dG8haW1wb3J0YW50O1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuaW9uLWNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmxpbmUtaW5wdXQge1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG4ubGluZS1pbnB1dCBpb24taXRlbSB7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XG4gIC0taGlnaGxpZ2h0LWhlaWdodDogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmxpbmUtaW5wdXQgaW9uLWl0ZW0uaXRlbS1oYXMtZm9jdXMge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbnllbGxvdztcbn1cbi5saW5lLWlucHV0IGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbn1cblxuaW9uLWlucHV0IHtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24tY2FyZC1zdWJ0aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWl0ZW0ge1xuICBoZWlnaHQ6IDU1cHg7XG59XG5cbmlvbi1sYWJlbCNmYXJtLXR5cGUge1xuICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiA5cHg7XG59XG5cbmlvbi1zZWxlY3Qub3duZXItdHlwZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuaW9uLWxhYmVsI2xiIHtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modal/update-breeding-status/update-breeding-status.page.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/modal/update-breeding-status/update-breeding-status.page.ts ***!
    \*****************************************************************************/

  /*! exports provided: UpdateBreedingStatusPage */

  /***/
  function srcAppModalUpdateBreedingStatusUpdateBreedingStatusPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateBreedingStatusPage", function () {
      return UpdateBreedingStatusPage;
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


    var src_app_model_breeding_status__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/model/breeding-status */
    "./src/app/model/breeding-status.ts");

    var UpdateBreedingStatusPage = /*#__PURE__*/function () {
      function UpdateBreedingStatusPage(storage, router, alertCtrl, apiService) {
        _classCallCheck(this, UpdateBreedingStatusPage);

        this.storage = storage;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.apiService = apiService;
        this.model = new src_app_model_breeding_status__WEBPACK_IMPORTED_MODULE_6__["BreedingStatus"]();
      }

      _createClass(UpdateBreedingStatusPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.optionsForSelect();
        } //list of option to select the list of semen type

      }, {
        key: "optionsForSelect",
        value: function optionsForSelect() {
          this.breedingStatusList = ["Repeated", "Not Repeated"], this.pdStatusList = ["Positive", "Negative"];
        } //Exit to ains page

      }, {
        key: "exit",
        value: function exit() {
          this.taggNumber = null;
          this.storage.set('taggNumber', this.taggNumber);
          this.router.navigate(['ai-ns']);
          this.storage.clear();
        } //Update breeding status details for animals

      }, {
        key: "updateBreedingStatus",
        value: function updateBreedingStatus() {
          var _this = this;

          this.storage.get('taggNumber').then(function (parameter) {
            _this.taggNumber = parameter;

            if (_this.taggNumber != null && _this.model.breeding_Status != "" && _this.model.pd_Status != "" && _this.model.pd_Status_Date != null) {
              _this.apiService.updateBreedingStatus(_this.taggNumber, _this.model).subscribe(function (response) {
                //this.router.navigate(['student-list']);
                console.log("Successful update");

                _this.successAlert();

                _this.router.navigate(['ai-ns']);
              });

              _this.taggNumber = null;

              _this.storage.set('taggNumber', _this.taggNumber);

              _this.router.navigate(['ai-ns']);

              _this.storage.clear();
            } else {
              _this.failedAlert();
            }
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
                      header: 'Failed',
                      message: "Please provide all the required details",
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
                      message: "Status Updated Sucessfully",
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

      return UpdateBreedingStatusPage;
    }();

    UpdateBreedingStatusPage.ctorParameters = function () {
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

    UpdateBreedingStatusPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-update-breeding-status',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./update-breeding-status.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modal/update-breeding-status/update-breeding-status.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./update-breeding-status.page.scss */
      "./src/app/modal/update-breeding-status/update-breeding-status.page.scss"))["default"]]
    })], UpdateBreedingStatusPage);
    /***/
  }
}]);
//# sourceMappingURL=modal-update-breeding-status-update-breeding-status-module-es5.js.map