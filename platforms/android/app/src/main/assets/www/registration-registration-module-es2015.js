(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registration-registration-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"success\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"color: white;\" slot=\"start\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Registration</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-icon (click)=\"logout()\" class=\"icon-size\" name=\"log-in-outline\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-toolbar color=\"smoke-white\">\n  <ion-item color=\"smoke-white\">\n    <ion-label style=\"font-size: 12px; \">Select Owner Type</ion-label>\n    <ion-select (ionChange)=\"segmentForOwnerType($event)\" [(ngModel)]=\"segment1\" class=\"owner-type\"\n      placeholder=\"Owner Type\">\n      <ion-select-option value=\"0\">Farmer</ion-select-option>\n      <ion-select-option value=\"1\">Government Farm</ion-select-option>\n    </ion-select>\n  </ion-item>\n</ion-toolbar>\n\n\n<ion-toolbar position=\"top\">\n  <ion-segment (ionChange)=\"segmentChanged($event)\" [(ngModel)]=\"segment\" color=\"success\">\n    <ion-segment-button value=\"0\">\n      <ion-label>Owner Details</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"1\">\n      <ion-label>Animal Details</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value=\"2\">\n      <ion-label>Pedigree Info</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n</ion-toolbar>\n\n<ion-content>\n  <!-- Individual farmer registration page -->\n  <div *ngIf=\"framers\">\n    <ion-card>\n      <ion-card-content *ngIf=\"ownerdetails\">\n        <ion-list class=\"line-input\">\n          <ion-item>\n            <ion-label position=\"floating\">Enter CID No and Press ENTER*: </ion-label>\n            <ion-input type=\"text\" maxlength=\"11\" (keypress)=\"keyPressNumbers($event)\" \n              [(ngModel)]=\"cid_number\" class=\"ion-text-left\">\n            </ion-input>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label position=\"fixed\">Owner's Name :</ion-label>\n            <ion-input readonly [(ngModel)]=\"owner_name\" class=\"ion-text-left\"> </ion-input>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label position=\"fixed\">Village:</ion-label>\n            <ion-input readonly [(ngModel)]=\"owner_village\" class=\"ion-text-left\"> </ion-input>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label position=\"fixed\">Gewog:</ion-label>\n            <ion-input readonly [(ngModel)]=\"owner_gewog\" class=\"ion-text-left\"> </ion-input>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label position=\"fixed\">Dzongkhag:</ion-label>\n            <ion-input readonly [(ngModel)]=\"owner_dzongkhag\" class=\"ion-text-left\"> </ion-input>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label position=\"floating\">Mobile Number *:</ion-label>\n            <ion-input maxlength=\"8\" [(ngModel)]=\"mobile_number\" (keypress)=\"keyPressNumbers($event)\" class=\"ion-text-left\" numbersOnly> </ion-input>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label color=\"primary\">Type of Housing</ion-label>\n            <ion-select [(ngModel)]=\"housing_type_option\" class=\"owner-type\" placeholder=\"Housing Type\">\n              <ion-select-option *ngFor=\"let item of housingType\" value=\"{{item}}\">{{item}}</ion-select-option>\n            </ion-select>\n          </ion-item><br>\n\n          <ion-segment (ionChange)=\"segmentChanged($event)\" [(ngModel)]=\"segment\">\n            <ion-segment-button value=\"1\" class=\"nextButton\">\n              Next\n            </ion-segment-button>\n          </ion-segment>\n\n        </ion-list>\n      </ion-card-content>\n\n      <ion-card-content *ngIf=\"animadetails\">\n        <ion-list class=\"line-input\">\n          <ion-item>\n            <ion-label class=\"ion-text-wrap\">Animal Registration Type</ion-label>\n            <ion-select class=\"owner-type\" placeholder=\"Registration Type\" (ionChange)=\"showAnimalRegistration($event)\">\n              <ion-select-option *ngFor=\"let item of taggedNonTagged\" value=\"{{item}}\">{{item}}</ion-select-option>\n            </ion-select>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label position=\"floating\" class=\"ion-text-wrap\">Animal Registration Number *: </ion-label>\n            <ion-input disabled=\"{{isDisabled}}\" maxlength=\"10\" [(ngModel)]=\"animalRegistrationNumber\"\n              value={{animalRegistrationNumber}} class=\"ion-text-left\"></ion-input>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label position=\"floating\" class=\"ion-text-wrap\">Name of Animal *:</ion-label>\n            <ion-input type=\"text\" [(ngModel)]=\"animalname\" class=\"ion-text-left\"> </ion-input>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label class=\"ion-text-wrap\">Date of Birth</ion-label>\n            <ion-input [(ngModel)]=\"birthdate\" displayFormat=\"DD-MM-YYYY\" type=\"date\" (ionChange)=\"calculateAge()\">\n            </ion-input>\n          </ion-item>\n          <p *ngIf=\"showInvalidAgeAlert\" style=\"color: red;\">{{errorMessage}}</p><br>\n\n          <ion-item>\n            <ion-label position=\"fixed\" class=\"ion-text-wrap\">Age:</ion-label>\n            <ion-input readonly [(ngModel)]=\"animalAge\" class=\"ion-text-left\"></ion-input>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label class=\"ion-text-wrap\">Sex:</ion-label>\n            <ion-select [(ngModel)]=\"sex\" class=\"owner-type\" placeholder=\"Sex\" (ionChange)=\"showAnimalCategory(sex)\">\n              <ion-select-option *ngFor=\"let item of animalSex\" value=\"{{item}}\">{{item}}</ion-select-option>\n            </ion-select>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label position=\"fixed\" class=\"ion-text-wrap\">Animal Category:</ion-label>\n            <ion-input [(ngModel)]=\"category\" readonly class=\"owner-type\"></ion-input>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label class=\"ion-text-wrap\">Migration:</ion-label>\n            <ion-select [(ngModel)]=\"migration\" class=\"owner-type\" (ionChange)=\"showMigrationRegion($event)\"\n              placeholder=\"Migration\">\n              <ion-select-option *ngFor=\"let item of migrationStatus\" value=\"{{item}}\">{{item}}</ion-select-option>\n            </ion-select>\n          </ion-item><br>\n\n          <ion-item *ngIf=\"showRegion\">\n            <ion-label color=\"primary\">Migration Region:*</ion-label>\n            <ion-select [(ngModel)]=\"migrationRegion\" class=\"owner-type\" placeholder=\"Region\">\n              <ion-select-option *ngFor=\"let item of migratioRegionSelect\" value=\"{{item}}\">{{item}}</ion-select-option>\n            </ion-select>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label class=\"ion-text-wrap\">CHBPP</ion-label>\n            <ion-select [(ngModel)]=\"CHBPP\" class=\"owner-type\" placeholder=\"Breed Type\">\n              <ion-select-option value=\"Yes\">Yes</ion-select-option>\n              <ion-select-option value=\"No\">No</ion-select-option>\n            </ion-select>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label class=\"ion-text-wrap\">Body Condition Score (BCS)</ion-label>\n            <ion-select [(ngModel)]=\"bcs\" class=\"owner-type\" placeholder=\"BCS\">\n              <ion-select-option *ngFor=\"let item of bodyConditionScore\" value=\"{{item}}\">{{item}}</ion-select-option>\n            </ion-select>\n          </ion-item><br>\n\n          <ion-segment (ionChange)=\"segmentChanged($event)\" [(ngModel)]=\"segment\">\n            <ion-segment-button fill=\"outline\" value=\"0\" class=\"backButton\">\n              Back\n            </ion-segment-button>\n            <ion-segment-button fill=\"outline\" value=\"2\" class=\"nextButton\">\n              Next\n            </ion-segment-button>\n          </ion-segment>\n\n        </ion-list>\n      </ion-card-content>\n\n      <ion-card-content *ngIf=\"pedigreeinformation\">\n        <ion-list class=\"line-input\">\n          <ion-item>\n            <ion-label position=\"floating\" class=\"ion-text-wrap\">Enter DAM No and Press ENTER*:</ion-label>\n            <ion-input [(ngModel)]=\"damNumber\" maxlength=\"10\" (keyup.enter)=\"getDamDetails(damNumber)\"\n              class=\"ion-text-left\">\n            </ion-input>\n          </ion-item><br>\n\n          <ion-list *ngIf=\"showYesDam\">\n            <ion-item>\n              <ion-label position=\"fixed\" class=\"ion-text-wrap\">DAM Name:</ion-label>\n              <ion-input [(ngModel)]=\"damName\" class=\"ion-text-left\" readonly></ion-input>\n            </ion-item><br>\n\n            <ion-item>\n              <ion-label position=\"fixed\" class=\"ion-text-wrap\">DAM Blood %:</ion-label>\n              <ion-input [(ngModel)]=\"damExotic\" class=\"ion-text-left\" readonly></ion-input>\n            </ion-item><br>\n\n            <ion-item>\n              <ion-label position=\"fixed\" class=\"ion-text-wrap\">DAM Breed: </ion-label>\n              <ion-input class=\"ion-text-right\" [(ngModel)]=\"damBreed\" readonly></ion-input>\n            </ion-item><br>\n          </ion-list>\n\n          <ion-list *ngIf=\"showNoDam\">\n            <ion-item>\n              <ion-label position=\"fixed\" class=\"ion-text-wrap\">DAM Name:</ion-label>\n              <ion-input [(ngModel)]=\"damName\" type=\"text\" class=\"ion-text-left\"></ion-input>\n            </ion-item><br>\n\n            <ion-item>\n              <ion-label class=\"ion-text-wrap\">DAM Blood %</ion-label>\n              <ion-select [(ngModel)]=\"damExotic\" class=\"owner-type\" placeholder=\"Blood %\">\n                <ion-select-option *ngFor=\"let de of exoticList;\" value=\"{{de.exoticBlood}}\">{{de.exoticBlood}}\n                </ion-select-option>\n              </ion-select>\n            </ion-item><br>\n\n            <ion-item>\n              <ion-label class=\"ion-text-wrap\">Dam Breed*</ion-label>\n              <ion-select [(ngModel)]=\"damBreedId\" class=\"owner-type\" placeholder=\"Breed Type\">\n                <ion-select-option *ngFor=\"let bT of breedTypeList;\" value=\"{{bT.breedId}}\">{{bT.breedType}}\n                </ion-select-option>\n              </ion-select>\n            </ion-item><br>\n          </ion-list>\n\n\n          <ion-item>\n            <ion-label position=\"floating\" class=\"ion-text-wrap\">Enter SIRE No and press ENTER*:</ion-label>\n            <ion-input type=\"text\" maxlength=\"10\" [(ngModel)]=\"sireNumber\" (keyup.enter)=\"getSireDetails(sireNumber)\"\n              class=\"ion-text-left\">\n            </ion-input>\n          </ion-item><br>\n\n          <div *ngIf=\"showYesSire\">\n            <ion-item>\n              <ion-label position=\"fixed\" class=\"ion-text-wrap\">Sire Name:</ion-label>\n              <ion-input readonly [(ngModel)]=\"sireName\" class=\"ion-text-left\"></ion-input>\n            </ion-item><br>\n\n            <ion-item>\n              <ion-label position=\"fixed\" class=\"ion-text-wrap\">Sire Blood %*:</ion-label>\n              <ion-input readonly [(ngModel)]=\"sireExotic\" class=\"ion-text-left\"></ion-input>\n            </ion-item><br>\n\n            <ion-item>\n              <ion-label position=\"fixed\" class=\"ion-text-wrap\">Sire Breed: </ion-label>\n              <ion-input readonly class=\"ion-text-left\" [(ngModel)]=\"sireBreed\"></ion-input>\n            </ion-item><br>\n          </div>\n\n          <div *ngIf=\"showNoSire\">\n            <ion-item>\n              <ion-label position=\"floating\" class=\"ion-text-wrap\">Sire Name:</ion-label>\n              <ion-input [(ngModel)]=\"sireName\" class=\"ion-text-left\"></ion-input>\n            </ion-item><br>\n\n            <ion-item>\n              <ion-label class=\"ion-text-wrap\">Sire Blood %</ion-label>\n              <ion-select [(ngModel)]=\"sireExotic\" class=\"owner-type\" placeholder=\"Blood %\">\n                <ion-select-option *ngFor=\"let se of exoticList;\" (ionChange)=\"getAnimalExoticNo()\"\n                  value=\"{{se.exoticBlood}}\">{{se.exoticBlood}}\n                </ion-select-option>\n              </ion-select>\n            </ion-item><br>\n\n            <ion-item>\n              <ion-label class=\"ion-text-wrap\">Sire Breed</ion-label>\n              <ion-select [(ngModel)]=\"sireBreedId\" class=\"owner-type\" placeholder=\"Breed Type\">\n                <ion-select-option *ngFor=\"let bT of breedTypeList;\" value=\"{{bT.breedId}}\">{{bT.breedType}}\n                </ion-select-option>\n              </ion-select>\n            </ion-item><br>\n          </div>\n\n          <ion-item>\n            <ion-label position=\"stack\" class=\"ion-text-wrap\">Animal Exotic:</ion-label>\n            <ion-input readonly [(ngModel)]=\"animalExotic\" class=\"ion-text-left\"></ion-input>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label class=\"ion-text-wrap\">Animal Breed:</ion-label>\n            <ion-select [(ngModel)]=\"animalBreedType\" class=\"owner-type\" placeholder=\"Breed Type\">\n              <ion-select-option *ngFor=\"let bT of breedTypeList;\" value=\"{{bT.breedId}}\">{{bT.breedType}}\n              </ion-select-option>\n            </ion-select>\n          </ion-item><br>\n\n          <ion-segment (ionChange)=\"segmentChanged($event)\" [(ngModel)]=\"segment\">\n            <ion-segment-button shape=\"round\" class=\"saveBtn\" (click)=\"registerAnimalofFarmers()\">Register\n            </ion-segment-button>\n            <ion-segment-button value=\"0\" class=\"exitBtn\" shape=\"round\" (click)=\"reloadFarmersPage($event)\">Exit\n            </ion-segment-button>\n          </ion-segment>\n\n\n        </ion-list>\n      </ion-card-content>\n\n    </ion-card>\n  </div>\n\n  <!-- Government type animal registration -->\n  <div *ngIf=\"governmentfarm\">\n    <ion-card>\n      <ion-card-content *ngIf=\"ownerdetails\">\n        <ion-list class=\"line-input\">\n          <ion-item>\n            <ion-label position=\"floating\">Enter NLH No and prees ENTER*: </ion-label>\n            <ion-input type=\"text\" (keyup.enter)=\"fetchGovtFarmDetailsByNlhd()\" [(ngModel)]=\"nlhd_number\"\n              class=\"ion-text-left\">\n\n            </ion-input>\n\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label position=\"fixed\">Farm Name:</ion-label>\n            <ion-input readonly [(ngModel)]=\"owner_name\" class=\"ion-text-left\"></ion-input>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label position=\"fixed\">Village:</ion-label>\n            <ion-input readonly [(ngModel)]=\"owner_village\" class=\"ion-text-left\"> </ion-input>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label position=\"fixed\">Gewog:</ion-label>\n            <ion-input readonly [(ngModel)]=\"owner_gewog\" class=\"ion-text-left\"> </ion-input>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label position=\"fixed\">Dzongkhag:</ion-label>\n            <ion-input readonly [(ngModel)]=\"owner_dzongkhag\" class=\"ion-text-left\">\n            </ion-input>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label position=\"floating\">Mobile Number:</ion-label>\n            <ion-input maxlength=\"8\" [(ngModel)]=\"mobile_number\" class=\"ion-text-left\"> </ion-input>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label color=\"primary\">Type of Housing</ion-label>\n            <ion-select [(ngModel)]=\"housing_type_option\" class=\"owner-type\" placeholder=\"Housing Type\">\n              <ion-select-option *ngFor=\"let item of housingType\" value=\"{{item}}\">{{item}}</ion-select-option>\n            </ion-select>\n          </ion-item><br>\n\n          <ion-segment (ionChange)=\"segmentChanged($event)\" [(ngModel)]=\"segment\">\n            <ion-segment-button value=\"1\" class=\"nextButton\">\n              Next\n            </ion-segment-button>\n          </ion-segment>\n\n        </ion-list>\n      </ion-card-content>\n\n      <ion-card-content *ngIf=\"animadetails\">\n        <ion-list class=\"line-input\">\n          <ion-item>\n            <ion-label class=\"ion-text-wrap\">Animal Registration Type</ion-label>\n            <ion-select class=\"owner-type\" placeholder=\"Registration Type\" (ionChange)=\"showAnimalRegistration($event)\">\n              <ion-select-option *ngFor=\"let item of taggedNonTagged\" value=\"{{item}}\">{{item}}</ion-select-option>\n            </ion-select>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label position=\"floating\" class=\"ion-text-wrap\">Animal Registration Number *: </ion-label>\n            <ion-input disabled=\"{{isDisabled}}\" maxlength=\"10\" [(ngModel)]=\"animalRegistrationNumber\"\n              value={{animalRegistrationNumber}} class=\"ion-text-left\"></ion-input>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label position=\"fixed\" class=\"ion-text-wrap\">Name of Animal:</ion-label>\n            <ion-input type=\"text\" [(ngModel)]=\"animalname\" class=\"ion-text-left\"> </ion-input>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label class=\"ion-text-wrap\">Date of Birth</ion-label>\n            <ion-input [(ngModel)]=\"birthdate\" displayFormat=\"DD-MM-YYYY\" type=\"date\" (ionChange)=\"calculateAge()\">\n            </ion-input>\n          </ion-item>\n          <p *ngIf=\"showInvalidAgeAlert\" style=\"color: red;\">{{errorMessage}}</p><br>\n          <br>\n\n          <ion-item>\n            <ion-label position=\"fixed\" class=\"ion-text-wrap\">Age:</ion-label>\n            <ion-input readonly [(ngModel)]=\"animalAge\" class=\"ion-text-left\"></ion-input>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label position=\"fixed\" class=\"ion-text-wrap\">Sex:</ion-label>\n            <ion-select [(ngModel)]=\"sex\" class=\"owner-type\" placeholder=\"Sex\" (ionChange)=\"showAnimalCategory(sex)\">\n              <ion-select-option *ngFor=\"let item of animalSex\" value=\"{{item}}\">{{item}}</ion-select-option>\n            </ion-select>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label class=\"ion-text-wrap\">Animal Category:</ion-label>\n            <ion-input [(ngModel)]=\"category\" readonly class=\"owner-type\"></ion-input>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label class=\"ion-text-wrap\">Migration:</ion-label>\n            <ion-select [(ngModel)]=\"migration\" class=\"owner-type\" (ionChange)=\"showMigrationRegion($event)\"\n              placeholder=\"Migration\">\n              <ion-select-option *ngFor=\"let item of migrationStatus\" value=\"{{item}}\">{{item}}</ion-select-option>\n            </ion-select>\n          </ion-item><br>\n\n          <ion-item *ngIf=\"showRegion\">\n            <ion-label color=\"primary\">Migration Region:*</ion-label>\n            <ion-select [(ngModel)]=\"migrationRegion\" class=\"owner-type\" placeholder=\"Region\">\n              <ion-select-option *ngFor=\"let item of migratioRegionSelect\" value=\"{{item}}\">{{item}}</ion-select-option>\n            </ion-select>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label class=\"ion-text-wrap\">CHBPP</ion-label>\n            <ion-select [(ngModel)]=\"CHBPP\" class=\"owner-type\" placeholder=\"Breed Type\">\n              <ion-select-option value=\"Yes\">Yes</ion-select-option>\n              <ion-select-option value=\"No\">No</ion-select-option>\n            </ion-select>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label class=\"ion-text-wrap\">Body Condition Score (BCS)</ion-label>\n            <ion-select [(ngModel)]=\"bcs\" class=\"owner-type\" placeholder=\"BCS\">\n              <ion-select-option *ngFor=\"let item of bodyConditionScore\" value=\"{{item}}\">{{item}}</ion-select-option>\n            </ion-select>\n          </ion-item><br>\n\n          <ion-segment (ionChange)=\"segmentChanged($event)\" [(ngModel)]=\"segment\">\n            <ion-segment-button value=\"0\" class=\"backButton\">\n              Back\n            </ion-segment-button>\n            <ion-segment-button value=\"2\" class=\"nextButton\">\n              Next\n            </ion-segment-button>\n          </ion-segment>\n\n        </ion-list>\n      </ion-card-content>\n\n      <ion-card-content *ngIf=\"pedigreeinformation\">\n        <ion-list class=\"line-input\">\n          <ion-item>\n            <ion-label position=\"floating\" class=\"ion-text-wrap\">Enter DAM No and press Enter*:</ion-label>\n            <ion-input [(ngModel)]=\"damNumber\" maxlength=\"10\" (keyup.enter)=\"getDamDetails(damNumber)\"\n              class=\"ion-text-left\">\n            </ion-input>\n          </ion-item><br>\n\n          <ion-list *ngIf=\"showYesDam\">\n            <ion-item>\n              <ion-label position=\"fixed\" class=\"ion-text-wrap\">DAM Name:</ion-label>\n              <ion-input [(ngModel)]=\"damName\" class=\"ion-text-left\" readonly></ion-input>\n            </ion-item><br>\n\n            <ion-item>\n              <ion-label position=\"fixed\" class=\"ion-text-wrap\">DAM Blood %:</ion-label>\n              <ion-input [(ngModel)]=\"damExotic\" class=\"ion-text-left\" readonly></ion-input>\n            </ion-item><br>\n\n            <ion-item>\n              <ion-label position=\"fixed\" class=\"ion-text-wrap\">DAM Breed: </ion-label>\n              <ion-input [(ngModel)]=\"damBreed\" readonly></ion-input>\n            </ion-item><br>\n          </ion-list>\n\n          <ion-list *ngIf=\"showNoDam\">\n            <ion-item>\n              <ion-label position=\"floating\" class=\"ion-text-wrap\">DAM Name:</ion-label>\n              <ion-input [(ngModel)]=\"damName\" type=\"text\" class=\"ion-text-left\"></ion-input>\n            </ion-item><br>\n\n            <ion-item>\n              <ion-label class=\"ion-text-wrap\">DAM Blood %:</ion-label>\n              <ion-select [(ngModel)]=\"damExotic\" class=\"owner-type\" placeholder=\"Blood %\">\n                <ion-select-option *ngFor=\"let de of exoticList;\" value=\"{{de.exoticBlood}}\">{{de.exoticBlood}}\n                </ion-select-option>\n              </ion-select>\n            </ion-item><br>\n\n            <ion-item>\n              <ion-label class=\"ion-text-wrap\">Dam Breed:</ion-label>\n              <ion-select [(ngModel)]=\"damBreedId\" class=\"owner-type\" placeholder=\"Breed Type\">\n                <ion-select-option *ngFor=\"let bT of breedTypeList;\" value=\"{{bT.breedId}}\">{{bT.breedType}}\n                </ion-select-option>\n              </ion-select>\n            </ion-item><br>\n          </ion-list>\n\n\n          <ion-item>\n            <ion-label position=\"floating\" class=\"ion-text-wrap\">Enter Sire No and press Enter:</ion-label>\n            <ion-input type=\"text\" maxlength=\"10\" [(ngModel)]=\"sireNumber\" (keyup.enter)=\"getSireDetails(sireNumber)\"\n              class=\"ion-text-left\">\n            </ion-input>\n          </ion-item><br>\n\n          <div *ngIf=\"showYesSire\">\n            <ion-item>\n              <ion-label position=\"stack\" class=\"ion-text-wrap\">Sire Name:</ion-label>\n              <ion-input readonly [(ngModel)]=\"sireName\" class=\"ion-text-left\"></ion-input>\n            </ion-item><br>\n\n            <ion-item>\n              <ion-label position=\"stack\" class=\"ion-text-wrap\">Sire Blood %:</ion-label>\n              <ion-input readonly [(ngModel)]=\"sireExotic\" class=\"ion-text-left\"></ion-input>\n            </ion-item><br>\n\n            <ion-item>\n              <ion-label position=\"stack\" class=\"ion-text-wrap\">Sire Breed:</ion-label>\n              <ion-input readonly class=\"ion-text-left\" [(ngModel)]=\"sireBreed\"></ion-input>\n            </ion-item><br>\n          </div>\n\n          <div *ngIf=\"showNoSire\">\n            <ion-item>\n              <ion-label position=\"floating\" class=\"ion-text-wrap\">Sire Name:</ion-label>\n              <ion-input [(ngModel)]=\"sireName\" class=\"ion-text-left\"></ion-input>\n            </ion-item><br>\n\n            <ion-item>\n              <ion-label class=\"ion-text-wrap\">Sire Blood %</ion-label>\n              <ion-select [(ngModel)]=\"sireExotic\" class=\"owner-type\" placeholder=\"Blood %\">\n                <ion-select-option *ngFor=\"let se of exoticList;\" (ionChange)=\"getAnimalExoticNo()\"\n                  value=\"{{se.exoticBlood}}\">{{se.exoticBlood}}\n                </ion-select-option>\n              </ion-select>\n            </ion-item><br>\n\n            <ion-item>\n              <ion-label class=\"ion-text-wrap\">Sire Breed</ion-label>\n              <ion-select [(ngModel)]=\"sireBreedId\" class=\"owner-type\" placeholder=\"Breed Type\">\n                <ion-select-option *ngFor=\"let bT of breedTypeList;\" value=\"{{bT.breedId}}\">{{bT.breedType}}\n                </ion-select-option>\n              </ion-select>\n            </ion-item><br>\n          </div>\n\n          <ion-item>\n            <ion-label position=\"stack\" class=\"ion-text-wrap\">Animal Exotic:</ion-label>\n            <ion-input readonly [(ngModel)]=\"animalExotic\" class=\"ion-text-left\"></ion-input>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label class=\"ion-text-wrap\">Animal Breed:</ion-label>\n            <ion-select [(ngModel)]=\"animalBreedType\" class=\"owner-type\" placeholder=\"Breed Type\">\n              <ion-select-option *ngFor=\"let bT of breedTypeList;\" value=\"{{bT.breedId}}\">{{bT.breedType}}\n              </ion-select-option>\n            </ion-select>\n          </ion-item><br>\n\n          <!-- <ion-button color=\"success\" class=\"exitButtonsize\" shape=\"round\" (click)=\"registerGovtFarmAnimal()\">Register\n          </ion-button>\n          <ion-button color=\"danger\" shape=\"round\" value=\"0\" (ionChange)=\"segmentChanged($event)\" class=\"exitButtonsize\">Exit</ion-button> -->\n\n          <ion-segment (ionChange)=\"segmentChanged($event)\" [(ngModel)]=\"segment\">\n            <ion-segment-button shape=\"round\" class=\"saveBtn\" (click)=\"registerGovtFarmAnimal()\">Register\n            </ion-segment-button>\n            <ion-segment-button value=\"0\" class=\"exitBtn\" shape=\"round\" (click)=\"reloadFarmersPage($event)\">Exit\n            </ion-segment-button>\n          </ion-segment>\n\n        </ion-list>\n\n      </ion-card-content>\n\n    </ion-card>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/model/application-sequence.ts":
/*!***********************************************!*\
  !*** ./src/app/model/application-sequence.ts ***!
  \***********************************************/
/*! exports provided: ApplicationSequence */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationSequence", function() { return ApplicationSequence; });
class ApplicationSequence {
}


/***/ }),

/***/ "./src/app/model/farmer-animal-registration.ts":
/*!*****************************************************!*\
  !*** ./src/app/model/farmer-animal-registration.ts ***!
  \*****************************************************/
/*! exports provided: FarmerAnimalRegistration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FarmerAnimalRegistration", function() { return FarmerAnimalRegistration; });
class FarmerAnimalRegistration {
}


/***/ }),

/***/ "./src/app/model/government-animal-registration.ts":
/*!*********************************************************!*\
  !*** ./src/app/model/government-animal-registration.ts ***!
  \*********************************************************/
/*! exports provided: GovernmentAnimalRegistration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GovernmentAnimalRegistration", function() { return GovernmentAnimalRegistration; });
class GovernmentAnimalRegistration {
}


/***/ }),

/***/ "./src/app/model/user-details.ts":
/*!***************************************!*\
  !*** ./src/app/model/user-details.ts ***!
  \***************************************/
/*! exports provided: UserDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetails", function() { return UserDetails; });
class UserDetails {
}


/***/ }),

/***/ "./src/app/registration/registration-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/registration/registration-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: RegistrationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPageRoutingModule", function() { return RegistrationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _registration_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registration.page */ "./src/app/registration/registration.page.ts");




const routes = [
    {
        path: '',
        component: _registration_page__WEBPACK_IMPORTED_MODULE_3__["RegistrationPage"]
    }
];
let RegistrationPageRoutingModule = class RegistrationPageRoutingModule {
};
RegistrationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegistrationPageRoutingModule);



/***/ }),

/***/ "./src/app/registration/registration.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/registration/registration.module.ts ***!
  \*****************************************************/
/*! exports provided: RegistrationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPageModule", function() { return RegistrationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _registration_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registration-routing.module */ "./src/app/registration/registration-routing.module.ts");
/* harmony import */ var _registration_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registration.page */ "./src/app/registration/registration.page.ts");
/* harmony import */ var ionic4_date_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ionic4-date-picker */ "./node_modules/ionic4-date-picker/__ivy_ngcc__/dist/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








let RegistrationPageModule = class RegistrationPageModule {
};
RegistrationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _registration_routing_module__WEBPACK_IMPORTED_MODULE_4__["RegistrationPageRoutingModule"],
            ionic4_date_picker__WEBPACK_IMPORTED_MODULE_6__["DatePickerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        ],
        declarations: [_registration_page__WEBPACK_IMPORTED_MODULE_5__["RegistrationPage"]]
    })
], RegistrationPageModule);



/***/ }),

/***/ "./src/app/registration/registration.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/registration/registration.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  font-size: 15px;\n}\n\nion-toolbar {\n  background-color: whitesmoke;\n}\n\nion-content {\n  background-color: whitesmoke;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n\n.line-input {\n  margin-bottom: 0 !important;\n}\n\n.line-input ion-item {\n  --border-color: transparent!important;\n  --highlight-height: 0;\n  border: 1px solid #dedede;\n  border-radius: 4px;\n}\n\n.line-input ion-item.item-has-focus {\n  border: 1px solid greenyellow;\n}\n\n.line-input ion-item ion-label {\n  color: black !important;\n  font-weight: 300;\n  font-size: 12px !important;\n}\n\nion-input {\n  font-size: 12px !important;\n}\n\nion-label {\n  font-weight: bold;\n}\n\nion-card-subtitle {\n  text-align: center;\n}\n\nion-item {\n  height: 55px;\n}\n\nion-label#farm-type {\n  font-size: 13px !important;\n}\n\nion-label {\n  font-size: 9px;\n}\n\nion-select.owner-type {\n  font-size: 13px;\n}\n\n.icon-size {\n  height: 25px;\n  width: 25px;\n}\n\n.btn-right {\n  float: right;\n}\n\n.btn-left {\n  float: left;\n}\n\n.nextButton {\n  border: 1px solid blue;\n  color: blue;\n  border-radius: 30px;\n  margin-top: 10px;\n  min-height: 37px;\n}\n\n.backButton {\n  border: 1px solid blue;\n  color: blue;\n  border-radius: 30px;\n  margin-top: 10px;\n  min-height: 37px;\n  max-width: 150px;\n}\n\n.exitBtn {\n  background-color: red;\n  color: white;\n  border-radius: 30px;\n  margin-top: 10px;\n  min-height: 37px;\n  max-width: 150px;\n}\n\n.saveBtn {\n  background-color: green;\n  color: white;\n  border-radius: 30px;\n  margin-top: 10px;\n  min-height: 37px;\n  max-width: 150px;\n}\n\n.exitButtonPlacement {\n  margin-top: 10px;\n}\n\n.ion-select {\n  max-width: 100% !important;\n}\n\n.exitButtonsize {\n  width: 120px;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cmF0aW9uL0Q6XFxPRkZJQ0VcXFBST0pFQ1RcXERPTF9EYWlyeU1vYmlsZUFwcFxcZG9sLWRhaXJ5LWFwcC1tYXN0ZXIvc3JjXFxhcHBcXHJlZ2lzdHJhdGlvblxccmVnaXN0cmF0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSw0QkFBQTtBQ0VKOztBREFBO0VBQ0ksNEJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0dKOztBREZJO0VBQ0EsYUFBQTtBQ0lKOztBREFBO0VBQ0ksMkJBQUE7QUNHSjs7QURGSTtFQUNJLHFDQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDSVI7O0FESFE7RUFDSSw2QkFBQTtBQ0taOztBREhRO0VBQ0ksdUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FDS1o7O0FEREE7RUFDSSwwQkFBQTtBQ0lKOztBREZBO0VBQ0ksaUJBQUE7QUNLSjs7QURGQTtFQUNJLGtCQUFBO0FDS0o7O0FERkE7RUFDSSxZQUFBO0FDS0o7O0FERkE7RUFDSSwwQkFBQTtBQ0tKOztBREZBO0VBQ0ksY0FBQTtBQ0tKOztBREZBO0VBQ1EsZUFBQTtBQ0tSOztBREZBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNLSjs7QURIQTtFQUNJLFlBQUE7QUNNSjs7QURKQTtFQUNJLFdBQUE7QUNPSjs7QURKQTtFQUNJLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ09KOztBREpBO0VBQ0ksc0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNPSjs7QURKQTtFQUNJLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDT0o7O0FETEE7RUFDSSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ1FKOztBRExBO0VBQ0ksZ0JBQUE7QUNRSjs7QURMQTtFQUNJLDBCQUFBO0FDUUo7O0FETEE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQ1FKIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuaW9uLXRvb2xiYXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIC0tb2Zmc2V0LWJvdHRvbTogYXV0byFpbXBvcnRhbnQ7XHJcbiAgICAtLW92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5saW5lLWlucHV0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDAhaW1wb3J0YW50O1xyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLS1oaWdobGlnaHQtaGVpZ2h0OiAwO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICYuaXRlbS1oYXMtZm9jdXMge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbnllbGxvdztcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgY29sb3I6IGJsYWNrIWltcG9ydGFudDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4IWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuaW9uLWlucHV0e1xyXG4gICAgZm9udC1zaXplOiAxMnB4IWltcG9ydGFudDtcclxufVxyXG5pb24tbGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmlvbi1jYXJkLXN1YnRpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pb24taXRlbXtcclxuICAgIGhlaWdodDogNTVweDtcclxufVxyXG5cclxuaW9uLWxhYmVsI2Zhcm0tdHlwZXtcclxuICAgIGZvbnQtc2l6ZTogMTNweCFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1sYWJlbHtcclxuICAgIGZvbnQtc2l6ZTogOXB4O1xyXG59XHJcblxyXG5pb24tc2VsZWN0Lm93bmVyLXR5cGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4OyAvL3NldHMgcGxhY2Vob2xkZXIgZm9udCBzaXplXHJcbn1cclxuXHJcbi5pY29uLXNpemV7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICB3aWR0aDogMjVweDtcclxufVxyXG4uYnRuLXJpZ2h0e1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5idG4tbGVmdHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4ubmV4dEJ1dHRvbntcclxuICAgIGJvcmRlcjoxcHggc29saWQgYmx1ZTtcclxuICAgIGNvbG9yOiBibHVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAzN3B4O1xyXG59XHJcblxyXG4uYmFja0J1dHRvbntcclxuICAgIGJvcmRlcjoxcHggc29saWQgYmx1ZTtcclxuICAgIGNvbG9yOiBibHVlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAzN3B4O1xyXG4gICAgbWF4LXdpZHRoOiAxNTBweDtcclxufVxyXG5cclxuLmV4aXRCdG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJlZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWluLWhlaWdodDogMzdweDtcclxuICAgIG1heC13aWR0aDogMTUwcHg7XHJcbn1cclxuLnNhdmVCdG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmdyZWVuO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAzN3B4O1xyXG4gICAgbWF4LXdpZHRoOiAxNTBweDtcclxufVxyXG5cclxuLmV4aXRCdXR0b25QbGFjZW1lbnR7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4XHJcbn1cclxuXHJcbi5pb24tc2VsZWN0e1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5leGl0QnV0dG9uc2l6ZXtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG4iLCJpb24tdGl0bGUge1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAtLW9mZnNldC1ib3R0b206IGF1dG8haW1wb3J0YW50O1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuaW9uLWNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmxpbmUtaW5wdXQge1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG4ubGluZS1pbnB1dCBpb24taXRlbSB7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XG4gIC0taGlnaGxpZ2h0LWhlaWdodDogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmxpbmUtaW5wdXQgaW9uLWl0ZW0uaXRlbS1oYXMtZm9jdXMge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbnllbGxvdztcbn1cbi5saW5lLWlucHV0IGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbn1cblxuaW9uLWlucHV0IHtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24tY2FyZC1zdWJ0aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWl0ZW0ge1xuICBoZWlnaHQ6IDU1cHg7XG59XG5cbmlvbi1sYWJlbCNmYXJtLXR5cGUge1xuICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiA5cHg7XG59XG5cbmlvbi1zZWxlY3Qub3duZXItdHlwZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLmljb24tc2l6ZSB7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG59XG5cbi5idG4tcmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5idG4tbGVmdCB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ubmV4dEJ1dHRvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XG4gIGNvbG9yOiBibHVlO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtaW4taGVpZ2h0OiAzN3B4O1xufVxuXG4uYmFja0J1dHRvbiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsdWU7XG4gIGNvbG9yOiBibHVlO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtaW4taGVpZ2h0OiAzN3B4O1xuICBtYXgtd2lkdGg6IDE1MHB4O1xufVxuXG4uZXhpdEJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtaW4taGVpZ2h0OiAzN3B4O1xuICBtYXgtd2lkdGg6IDE1MHB4O1xufVxuXG4uc2F2ZUJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1pbi1oZWlnaHQ6IDM3cHg7XG4gIG1heC13aWR0aDogMTUwcHg7XG59XG5cbi5leGl0QnV0dG9uUGxhY2VtZW50IHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmlvbi1zZWxlY3Qge1xuICBtYXgtd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLmV4aXRCdXR0b25zaXplIHtcbiAgd2lkdGg6IDEyMHB4O1xuICBmb250LXNpemU6IDE1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/registration/registration.page.ts":
/*!***************************************************!*\
  !*** ./src/app/registration/registration.page.ts ***!
  \***************************************************/
/*! exports provided: RegistrationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPage", function() { return RegistrationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _model_farmer_animal_registration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/farmer-animal-registration */ "./src/app/model/farmer-animal-registration.ts");
/* harmony import */ var _model_application_sequence__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/application-sequence */ "./src/app/model/application-sequence.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _model_user_details__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/user-details */ "./src/app/model/user-details.ts");
/* harmony import */ var _model_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../model/login */ "./src/app/model/login.ts");
/* harmony import */ var _model_government_animal_registration__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../model/government-animal-registration */ "./src/app/model/government-animal-registration.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");










let RegistrationPage = class RegistrationPage {
    constructor(apiService, router, alertCtrl) {
        this.apiService = apiService;
        this.router = router;
        this.alertCtrl = alertCtrl;
        //Page redirect variable after submission
        this.farmPageRedirect = 0;
        this.segment = 0;
        this.segment1 = 0;
        this.ownerdetails = true;
        this.animadetails = false;
        this.pedigreeinformation = false;
        this.framers = true;
        this.governmentfarm = false;
        //Details to submit to NDIS databas
        this.showAr = false;
        this.showRegion = false;
        this.isDisabled = true;
        this.showYesDam = true;
        this.showNoDam = false;
        this.showYesSire = true;
        this.showNoSire = false;
        this.showInvalidAgeAlert = false;
        this.btnNavAnimalDetails = 1;
        this.data = new _model_farmer_animal_registration__WEBPACK_IMPORTED_MODULE_3__["FarmerAnimalRegistration"]();
        this.data1 = new _model_application_sequence__WEBPACK_IMPORTED_MODULE_4__["ApplicationSequence"]();
        this.data2 = new _model_user_details__WEBPACK_IMPORTED_MODULE_6__["UserDetails"]();
        this.data3 = new _model_government_animal_registration__WEBPACK_IMPORTED_MODULE_8__["GovernmentAnimalRegistration"]();
        this.model = new _model_login__WEBPACK_IMPORTED_MODULE_7__["Login"]();
    }
    ngOnInit() {
        this.optionsForSelect();
        this.getBreedType();
        this.getExoticBloodPercent();
    }
    keyPressNumbers(event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        // Only Numbers 0-9
        if ((charCode < 48 || charCode > 57)) {
            event.preventDefault();
            this.fetchUserdetailsFromCencusById();
            return false;
        }
        else {
            return true;
        }
    }
    showAnimalRegistration($event) {
        let a = $event.target.value;
        if (a === "Tagged") {
            this.isDisabled = false;
            this.animalRegistrationNumber = "";
        }
        else {
            this.isDisabled = true;
            this.getApplicationSequenceNumberForNonTaggedAnimal();
        }
    }
    //Show the form to select the migration region
    showMigrationRegion($event) {
        let a = $event.target.value;
        if (a === "Yes") {
            this.showRegion = true;
        }
        else {
            this.showRegion = false;
        }
    }
    //Switch to change the tab between owner details, animadetails and pedigree information
    segmentChanged(event) {
        if (this.segment == 0) {
            this.ownerdetails = true;
            this.animadetails = false;
            this.pedigreeinformation = false;
        }
        else if (this.segment == 1) {
            this.ownerdetails = false;
            this.animadetails = true;
            this.pedigreeinformation = false;
        }
        else {
            this.ownerdetails = false;
            this.animadetails = false;
            this.pedigreeinformation = true;
        }
    }
    navNextAnimalDetails() {
        this.ownerdetails = false;
        this.animadetails = true;
        this.pedigreeinformation = false;
    }
    //Switch to change between the content of govern type farm and farme of private trype
    segmentForOwnerType(event) {
        if (this.segment1 == 0) {
            this.framers = true;
            this.governmentfarm = false;
        }
        else {
            this.framers = false;
            this.governmentfarm = true;
        }
    }
    //Calculte the age from date of birth
    calculateAge() {
        let timeDiff = Math.abs(Date.now() - new Date(this.birthdate).getTime());
        let age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
        if (age > 0) {
            this.animalAge = age;
            this.showInvalidAgeAlert = false;
        }
        else {
            this.errorMessage = "Enter valid age";
            this.showInvalidAgeAlert = true;
            this.animalAge = null;
        }
    }
    //Show the animal category from age and sex
    showAnimalCategory(sex) {
        this.sex = sex;
        switch (true) {
            case (this.animalAge == 2 && this.sex == "Female"):
                this.category = "Heifer";
                break;
            case (this.animalAge > 2 && this.sex == "Female"):
                this.category = "Cow";
                break;
            case (this.animalAge >= 2 && this.sex == "Male"):
                this.category = "Bull";
                break;
            default:
                this.errorMessage = "Animal is not eligible to register below age 2";
                this.alerFailedRegistration();
        }
    }
    optionsForSelect() {
        this.housingType =
            [
                "Temporary Structure",
                "Semi-permanent Structure",
                "Concrete Structure"
            ];
        this.taggedNonTagged =
            [
                "Tagged",
                "Non Tagged"
            ];
        this.animalSex =
            [
                "Male",
                "Female"
            ];
        this.migrationStatus =
            [
                "Yes",
                "No"
            ];
        this.bodyConditionScore =
            [
                1,
                2,
                3,
                4
            ];
        this.migratioRegionSelect =
            [
                "Within Chiwog",
                "Within Gewog",
                "Within Dzongkhag",
                "Within Dzongkhag",
                "Outer Dzongkhag"
            ];
    }
    //application details from local api
    getApplicationSequenceNumberForNonTaggedAnimal() {
        this.apiService.fetchApplicationSequenceNumber().subscribe(response => {
            this.api_responseApplicationSequenceNumber = response;
            if (this.api_responseApplicationSequenceNumber.serviceId === 1) {
                let application_number = this.api_responseApplicationSequenceNumber.lastApplicationNumber;
                let digit_append = "0" + this.api_responseApplicationSequenceNumber.serviceId;
                for (let i = 0; i < 6; i++) {
                    digit_append = digit_append + 0;
                }
                digit_append = digit_append + (application_number + 1);
                this.animalRegistrationNumber = digit_append;
                console.log("animal registration no for non tagg" + this.animalRegistrationNumber);
            }
        });
    }
    fetchUserdetailsFromCencusById() {
        console.log('CID: ' + this.cid_number);
        this.apiService.fetchUserDetailsById(this.cid_number).subscribe(response => {
            console.log(response);
            if (this.cid_number === response.cid_number) {
                this.owner_name = response.name;
                this.owner_village = response.village;
                this.owner_gewog = response.gewog;
                this.owner_dzongkhag = response.dzongkhag;
                console.log(this.owner_dzongkhag);
            }
        });
    }
    fetchGovtFarmDetailsByNlhd() {
        console.log('NLHD: ' + this.nlhd_number);
        this.apiService.fetchGovtFarmDetails(this.nlhd_number).subscribe(response => {
            if (this.nlhd_number === response.nlhdNumber) {
                this.owner_name = response.name;
                this.owner_village = response.village;
                this.owner_gewog = response.gewog;
                this.owner_dzongkhag = response.dzongkhag;
                console.log(this.owner_dzongkhag);
            }
        });
    }
    // get dam details from local api
    getDamDetails(damNumber) {
        this.apiService.fetchDamDetails().subscribe(response => {
            for (var i = 0; i < response.length; i++) {
                if (damNumber === response[i].animalTaggNumber) {
                    this.showYesDam = true;
                    this.showNoDam = false;
                    this.damName = response[i].animalName;
                    this.damExotic = response[i].animalExotic;
                    this.damBreed = response[i].breed.breedType;
                    this.damBreedId = response[i].breed.breedId;
                    console.log(this.damBreedId);
                    break;
                }
                else {
                    this.damName = "";
                    this.damExotic = 0;
                    this.damBreed = "";
                    this.showYesDam = false;
                    this.showNoDam = true;
                }
            }
        });
    }
    //get sire details from local api
    getSireDetails(sireNumber) {
        this.apiService.fetchSireDetails().subscribe(response => {
            console.log(response);
            //sessionStorage.getItem('currentUser');
            for (let i = 0; i < response.length; i++) {
                if (this.sireNumber === response[i].animalTaggNumber) {
                    this.sireName = response[i].animalName;
                    this.sireExotic = response[i].animalExotic;
                    this.sireBreed = response[i].breed.breedType;
                    this.sireBreedId = response[i].breed.breedId;
                    this.getAnimalExoticYes();
                    this.showYesSire = true;
                    this.showNoSire = false;
                    break;
                }
                else {
                    this.sireName = " ";
                    this.sireExotic = 0;
                    this.sireBreed = "";
                    this.getAnimalExoticNo();
                    this.showYesSire = false;
                    this.showNoSire = true;
                }
            }
        });
    }
    getAnimalExoticYes() {
        var dE = this.damExotic;
        var sE = this.sireExotic;
        var total = (dE + sE) / 2;
        this.animalExotic = total;
    }
    getAnimalExoticNo() {
        var dE = this.damExotic;
        var sE = this.sireExotic;
        this.animalExotic = (dE + sE) / 2;
    }
    //Register animail of farmers
    registerAnimalofFarmers() {
        this.data.cid_number = this.cid_number;
        this.data.owner_name = this.owner_name;
        this.data.owner_village = this.owner_village;
        this.data.owner_gewog = this.owner_gewog;
        this.data.owner_dzongkhag = this.owner_dzongkhag;
        this.data.animalRegistrationNumber = this.animalRegistrationNumber;
        this.data.damNumber = this.damNumber;
        this.data.damExotic = this.damExotic;
        this.data.damName = this.damName;
        this.data.sireNumber = this.sireNumber;
        this.data.sireName = this.sireName;
        this.data.sireExotic = this.sireExotic;
        this.data.housing_type_option = this.housing_type_option;
        this.data.animalname = this.animalname;
        this.data.mobile_number = this.mobile_number;
        this.data.birthdate = this.birthdate;
        this.data.animalAge = this.animalAge;
        this.data.migration = this.migration;
        this.data.migrationRegion = this.migrationRegion;
        this.data.sex = this.sex;
        this.data.category = this.category;
        this.data.bcs = this.bcs;
        this.data.damBreedId = this.damBreedId;
        this.data.sireBreedId = this.sireBreedId;
        this.data.CHBPP = this.CHBPP;
        this.data.animalBreedType = this.animalBreedType;
        this.data.animalExotic = this.animalExotic;
        if (this.cid_number != "" && this.animalRegistrationNumber != "" && this.damNumber != "" && this.damExotic != 0 && this.damName != "" &&
            this.sireNumber != "" && this.sireName != "" && this.sireExotic != 0 && this.housing_type_option != "" && this.animalname != "" &&
            this.mobile_number != "" && this.birthdate != null && this.migration != "" && this.migrationRegion != "" && this.sex != "" && this.bcs != 0 &&
            this.damBreedId != 0 && this.sireBreedId != 0 && this.CHBPP != "" && this.animalBreedType != 0 && this.animalExotic != 0) {
            this.apiService.registerFarmersAnimail(this.data).subscribe((response) => {
                this.successmessage = "Animal sucessfully registered with animal tag number: ";
                this.alerSuccessfulRegistration();
                this.emptyTheData();
            });
        }
        else {
            this.errorMessage = "Please fill in the required fields.";
            this.alerFailedRegistration();
        }
    }
    //Alert Controller to show sussess
    alerSuccessfulRegistration() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                message: this.successmessage + " " + this.animalRegistrationNumber,
                buttons: ['OK']
            });
            yield alert.present();
            const result = yield alert.onDidDismiss();
            console.log(result);
        });
    }
    alerFailedRegistration() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                message: this.errorMessage,
                buttons: ['OK']
            });
            yield alert.present();
            const result = yield alert.onDidDismiss();
            console.log(result);
        });
    }
    //Register government farm animal
    registerGovtFarmAnimal() {
        this.data3.nlhd_Number = this.nlhd_number;
        this.data3.owner_name = this.owner_name;
        this.data3.owner_village = this.owner_village;
        this.data3.owner_gewog = this.owner_gewog;
        this.data3.owner_dzongkhag = this.owner_dzongkhag;
        this.data3.animalRegistrationNumber = this.animalRegistrationNumber;
        this.data3.damNumber = this.damNumber;
        this.data3.damExotic = this.damExotic;
        this.data3.damName = this.damName;
        this.data3.sireNumber = this.sireNumber;
        this.data3.sireName = this.sireName;
        this.data3.sireExotic = this.sireExotic;
        this.data3.housing_type_option = this.housing_type_option;
        this.data3.animalname = this.animalname;
        this.data3.mobile_number = this.mobile_number;
        this.data3.birthdate = this.birthdate;
        this.data3.animalAge = this.animalAge;
        this.data3.migration = this.migration;
        this.data3.migrationRegion = this.migrationRegion;
        this.data3.sex = this.sex;
        this.data3.category = this.category;
        this.data3.bcs = this.bcs;
        this.data3.damBreedId = this.damBreedId;
        this.data3.sireBreedId = this.sireBreedId;
        this.data3.CHBPP = this.CHBPP;
        this.data3.animalBreedType = this.animalBreedType;
        this.data3.animalExotic = this.animalExotic;
        if (this.nlhd_number != "" && this.animalRegistrationNumber != "" && this.damNumber != "" && this.damExotic != 0 && this.damName != "" &&
            this.sireNumber != "" && this.sireName != "" && this.sireExotic != 0 && this.housing_type_option != "" && this.animalname != "" &&
            this.mobile_number != "" && this.birthdate != null && this.migration != "" && this.migrationRegion != "" && this.sex != "" && this.bcs != 0 &&
            this.damBreedId != 0 && this.sireBreedId != 0 && this.CHBPP != "" && this.animalBreedType != 0 && this.animalExotic != 0) {
            this.apiService.registerGovtFarmAnimail(this.data3).subscribe((response) => {
                //this.updateApplicationSequenceNUmber();
                console.log("Successfully registered");
                this.successmessage = "Animal sucessfully registered with animal tag number: ";
                this.alerSuccessfulRegistration();
                this.emptyTheData();
            });
        }
        else {
            this.errorMessage = "Please fill in the required fields.";
            this.alerFailedRegistration();
        }
    }
    //get all breed type
    getBreedType() {
        this.apiService.getBreedType().subscribe((response) => {
            this.breedTypeList = response;
        });
    }
    //get exotic blood percent of dam and sire
    getExoticBloodPercent() {
        this.apiService.getExoticBloodPercent().subscribe((response) => {
            this.exoticList = response;
        });
    }
    logout() {
        sessionStorage.clear();
        this.router.navigate(['home']);
    }
    emptyTheData() {
        this.cid_number = "";
        this.nlhd_number = "";
        this.owner_name = "";
        this.owner_village = "";
        this.owner_gewog = "";
        this.owner_dzongkhag = "";
        this.animalRegistrationNumber = "";
        this.damNumber = "";
        this.damExotic = null;
        this.damName = "";
        this.sireNumber = "";
        this.sireName = "";
        this.sireExotic = null;
        this.housing_type_option = "";
        this.animalname = "";
        this.mobile_number = "";
        this.birthdate = null;
        this.animalAge = null;
        this.migration = "";
        this.migrationRegion = "";
        this.sex = "";
        this.category = "";
        this.bcs = null;
        this.damBreed = "";
        this.damBreedId = null;
        this.damNbi = null;
        this.sireBreed = "";
        this.sireBreedId = null;
        this.sireNbi = null;
        this.CHBPP = "";
        this.animalBreedType = null;
        this.animalExotic = null;
    }
};
RegistrationPage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["AlertController"] }
];
RegistrationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registration',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./registration.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./registration.page.scss */ "./src/app/registration/registration.page.scss")).default]
    })
], RegistrationPage);



/***/ })

}]);
//# sourceMappingURL=registration-registration-module-es2015.js.map