(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"loginPagePlacement\">\n\n  <div align=\"center\" class=\"vertical-center\">\n    <div align=\"center\">\n      <ion-avatar>\n        <ion-img src={{logoImagePath}}></ion-img>\n      </ion-avatar>\n    </div>\n  </div>\n  <div class=\"logo-text-box\">\n    <p class=\"logo-text\">National Dairy <br>Information System</p>\n    <ion-list color=\"success\" class=\"line-input\">\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"submitLoginForm()\">\n\n        <ion-item>\n          <ion-label position=\"floating\">User Name: </ion-label>\n          <ion-input formControlName=\"usr\" [(ngModel)]=\"usr\" maxlength=\"11\" type=\"text\" class=\"ion-text-left\"></ion-input>\n        </ion-item>\n        <p id=\"warning\" *ngIf=\"isSubmitted && errorControl.usr.errors?.required\">\n          Username is required\n        </p><br>\n        \n\n        <ion-item>\n          <ion-label position=\"floating\">Password: </ion-label>\n          <ion-input formControlName=\"pwd\"[(ngModel)]=\"pwd\" maxlength=\"11\" type=\"password\" class=\"ion-text-left\"></ion-input>\n        </ion-item>\n        <p  id=\"warning\" *ngIf=\"isSubmitted && errorControl.pwd.errors?.required\">\n          Password is required\n        </p><br>\n        \n\n        <ion-button color=\"secondary\" shape=\"round\" type=\"submit\">Sign in</ion-button>\n      </form>\n\n\n    </ion-list>\n  </div>\n\n\n\n</ion-content>");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");








let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #5cb85c!important;\n}\n\n#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.vertical-center {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 20%;\n  text-align: center;\n  margin: 15% auto auto auto;\n}\n\nion-img {\n  height: 90px;\n  width: 90px;\n  border-radius: 50%;\n  margin: auto auto auto -14px;\n}\n\n.logo-text {\n  -webkit-filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.502));\n          filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.502));\n  margin-top: 15px;\n  text-align: center;\n  white-space: nowrap;\n  font-family: Forte;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 25px;\n  color: white;\n  letter-spacing: 0.6px;\n}\n\n.logo-text-box {\n  height: 0 px;\n}\n\nion-title {\n  font-size: 13px;\n}\n\n.line-input {\n  margin-bottom: 0 !important;\n}\n\n.line-input ion-item {\n  --border-color: transparent!important;\n  --highlight-height: 0;\n  border: 1px solid #dedede;\n  border-radius: 4px;\n}\n\n.line-input ion-item.item-has-focus {\n  border: 1px solid blue;\n}\n\n.line-input ion-item ion-label {\n  color: black !important;\n  font-weight: 300;\n  font-size: 12px !important;\n}\n\nion-input {\n  font-size: 12px !important;\n  height: 40px !important;\n}\n\nion-list {\n  padding: 10px !important;\n  background-color: #5cb85c;\n}\n\nion-item {\n  height: 60px;\n}\n\np#warning {\n  color: white;\n  font-size: 13px !important;\n  align-content: justify !important;\n  font-weight: bold;\n  -webkit-text-stroke: 0.3px red;\n}\n\n.loginPagePlacement {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9EOlxcT0ZGSUNFXFxQUk9KRUNUXFxET0xfRGFpcnlNb2JpbGVBcHBcXGRvbC1kYWlyeS1hcHAtbWFzdGVyL3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtCQUFBO0FDQ0o7O0FEQ0E7RUFFSSxrQkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUNBSjs7QURHRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREdFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUNGSjs7QURLRTtFQUNFLHFCQUFBO0FDRko7O0FES0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0FDRko7O0FESUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUVBLGtCQUFBO0VBQ0EsNEJBQUE7QUNESjs7QURJRTtFQUNFLDZEQUFBO1VBQUEscURBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FDREo7O0FER0E7RUFDSSxZQUFBO0FDQUo7O0FESUE7RUFDSSxlQUFBO0FDREo7O0FESUE7RUFDSSwyQkFBQTtBQ0RKOztBREVJO0VBQ0kscUNBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNBUjs7QURDUTtFQUNJLHNCQUFBO0FDQ1o7O0FEQ1E7RUFDSSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUNDWjs7QURHQTtFQUNJLDBCQUFBO0VBQ0EsdUJBQUE7QUNBSjs7QURFQTtFQUNJLHdCQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURDQTtFQUNJLFlBQUE7QUNFSjs7QURDQTtFQUNFLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGlDQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtBQ0VGOztBRENBO0VBQ0Usa0JBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogIzVjYjg1YyFpbXBvcnRhbnQ7XHJcbn1cclxuI2NvbnRhaW5lciB7XHJcbiAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhaW5lciBzdHJvbmcge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250YWluZXIgcCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICBcclxuICAgIGNvbG9yOiAjOGM4YzhjO1xyXG4gIFxyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgI2NvbnRhaW5lciBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcblxyXG4gIC52ZXJ0aWNhbC1jZW50ZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAyMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDE1JSBhdXRvIGF1dG8gYXV0bztcclxuICB9XHJcbiAgaW9uLWltZ3tcclxuICAgIGhlaWdodDo5MHB4O1xyXG4gICAgd2lkdGg6IDkwcHg7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbjogYXV0byBhdXRvIGF1dG8gLTE0cHg7XHJcbiAgfVxyXG5cclxuICAubG9nby10ZXh0IHtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjUwMikpO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBmb250LWZhbWlseTogRm9ydGU7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMSk7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC42cHg7XHJcbn1cclxuLmxvZ28tdGV4dC1ib3h7XHJcbiAgICBoZWlnaHQ6IDAgcHg7XHJcbiAgfVxyXG5cclxuXHJcbmlvbi10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLmxpbmUtaW5wdXQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMCFpbXBvcnRhbnQ7XHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IWltcG9ydGFudDtcclxuICAgICAgICAtLWhpZ2hsaWdodC1oZWlnaHQ6IDA7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgJi5pdGVtLWhhcy1mb2N1cyB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjayFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmlvbi1pbnB1dHtcclxuICAgIGZvbnQtc2l6ZTogMTJweCFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6NDBweCFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWxpc3R7XHJcbiAgICBwYWRkaW5nOiAxMHB4IWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1Y2I4NWM7XHJcbn1cclxuaW9uLWl0ZW17XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbn1cclxuXHJcbnAjd2FybmluZ3tcclxuICBjb2xvcjp3aGl0ZTtcclxuICBmb250LXNpemU6IDEzcHghaW1wb3J0YW50O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGp1c3RpZnkhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIC13ZWJraXQtdGV4dC1zdHJva2U6IDAuM3B4IHJlZDtcclxufVxyXG5cclxuLmxvZ2luUGFnZVBsYWNlbWVudHsgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICM1Y2I4NWMhaW1wb3J0YW50O1xufVxuXG4jY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG4gIGNvbG9yOiAjOGM4YzhjO1xuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnZlcnRpY2FsLWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDIwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDE1JSBhdXRvIGF1dG8gYXV0bztcbn1cblxuaW9uLWltZyB7XG4gIGhlaWdodDogOTBweDtcbiAgd2lkdGg6IDkwcHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogYXV0byBhdXRvIGF1dG8gLTE0cHg7XG59XG5cbi5sb2dvLXRleHQge1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC41MDIpKTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBmb250LWZhbWlseTogRm9ydGU7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGxldHRlci1zcGFjaW5nOiAwLjZweDtcbn1cblxuLmxvZ28tdGV4dC1ib3gge1xuICBoZWlnaHQ6IDAgcHg7XG59XG5cbmlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmxpbmUtaW5wdXQge1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG4ubGluZS1pbnB1dCBpb24taXRlbSB7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XG4gIC0taGlnaGxpZ2h0LWhlaWdodDogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmxpbmUtaW5wdXQgaW9uLWl0ZW0uaXRlbS1oYXMtZm9jdXMge1xuICBib3JkZXI6IDFweCBzb2xpZCBibHVlO1xufVxuLmxpbmUtaW5wdXQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xufVxuXG5pb24taW5wdXQge1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1saXN0IHtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWNiODVjO1xufVxuXG5pb24taXRlbSB7XG4gIGhlaWdodDogNjBweDtcbn1cblxucCN3YXJuaW5nIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbiAgYWxpZ24tY29udGVudDoganVzdGlmeSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgLXdlYmtpdC10ZXh0LXN0cm9rZTogMC4zcHggcmVkO1xufVxuXG4ubG9naW5QYWdlUGxhY2VtZW50IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _model_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/login */ "./src/app/model/login.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");







let HomePage = class HomePage {
    constructor(authenticationService, router, formBuilder, alertCtrl) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.logoImagePath = "../../assets/images/photo_2020-08-10_11-32-01.jpg";
        this.isSubmitted = false;
        this.model = new _model_login__WEBPACK_IMPORTED_MODULE_2__["Login"]();
    }
    ngOnInit() {
        //this.authenticationService.logout();
        this.loginForm = this.formBuilder.group({
            usr: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            pwd: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
        });
    }
    login() {
        this.model.userName = this.usr;
        this.model.password = this.pwd;
        this.authenticationService.login(this.model.userName, this.model.password)
            .subscribe(response => {
            sessionStorage.setItem('currentUser', JSON.stringify({ userName: this.model.userName, token: response.jwt }));
            sessionStorage.setItem('presentUser', this.model.userName);
            this.router.navigate(['registration']);
            sessionStorage.getItem('currentUser');
            sessionStorage.getItem('presentUser');
        }, error => {
            this.showAlert();
        });
    }
    //Error controller funct5ion
    get errorControl() {
        return this.loginForm.controls;
    }
    // Alert message for wrong credentials
    showAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                message: 'Invalid Username and password. Please try again later!',
                buttons: ['OK']
            });
            yield alert.present();
            const result = yield alert.onDidDismiss();
        });
    }
    //Show error message if credentials are not filled and log in if credentials are true
    submitLoginForm() {
        this.isSubmitted = true;
        if (!this.loginForm.valid) {
            return this.showAlert();
        }
        else {
            return this.login();
        }
    }
};
HomePage.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map