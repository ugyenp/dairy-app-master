(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ai-ns-ai-ns-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ai-ns/ai-ns.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ai-ns/ai-ns.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"success\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button style=\"color: white;\" slot=\"start\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title>AI/NS</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-icon (click)=\"logout()\" class=\"icon-size\" name=\"log-in-outline\"></ion-icon>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      <ion-label id=\"lb\">Registration For AI/NS And Calving</ion-label>\n      <ion-list class=\"line-input\">\n        <ion-item>\n          <ion-label position=\"floating\">Enter Tag No and press ENTER*: </ion-label>\n          <ion-input type=\"text\" [(ngModel)]=\"animalTagNumber\" numbersOnly\n            maxlength=\"10\" (keypress)=\"keyPressNumbers($event)\" class=\"ion-text-right\">\n          </ion-input>\n        </ion-item>\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-label id=\"lb\">Details of </ion-label>\n      <ion-segment (ionChange)=\"segmentChanged($event)\" [(ngModel)]=\"segment\" color=\"success\">\n        <ion-segment-button value=\"0\">\n          <ion-label>Farmer</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"1\">\n          <ion-label>Animals</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"2\">\n          <ion-label>Pedigree</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n    </ion-card-header>\n\n    <!-- Get farmers detais -->\n    <ion-card-content *ngIf=\"ownerdetails\">\n      <ion-list class=\"line-input\">\n        <ion-item>\n          <ion-label position=\"fixed\" class=\"ion-text-wrap\">Farmer's name: </ion-label>\n          <ion-input readonly [(ngModel)]=\"owner_name\" class=\"ion-text-right\"></ion-input>\n        </ion-item><br>\n\n        <ion-item>\n          <ion-label position=\"fixed\" class=\"ion-text-wrap\">Village: </ion-label>\n          <ion-input readonly [(ngModel)]=\"owner_village\" class=\"ion-text-right\"></ion-input>\n        </ion-item><br>\n\n        <ion-item>\n          <ion-label position=\"fixed\" class=\"ion-text-wrap\">Gewog: </ion-label>\n          <ion-input readonly [(ngModel)]=\"owner_gewog\" class=\"ion-text-right\"></ion-input>\n        </ion-item><br>\n\n        <ion-item>\n          <ion-label position=\"fixed\" class=\"ion-text-wrap\">Dzongkhag: </ion-label>\n          <ion-input readonly [(ngModel)]=\"owner_dzongkhag\" class=\"ion-text-right\"></ion-input>\n        </ion-item><br>\n\n        <ion-item>\n          <ion-label position=\"fixed\" class=\"ion-text-wrap\">Mobile No: </ion-label>\n          <ion-input readonly [(ngModel)]=\"mobile_number\" class=\"ion-text-right\"></ion-input>\n        </ion-item><br>\n\n      </ion-list>\n    </ion-card-content>\n\n    <!-- get animal details -->\n    <ion-card-content *ngIf=\"animadetails\">\n      <ion-list class=\"line-input\">\n        <ion-item>\n          <ion-label position=\"fixed\" class=\"ion-text-wrap\">Animal name: </ion-label>\n          <ion-input readonly [(ngModel)]=\"animalname\" class=\"ion-text-right\"></ion-input>\n        </ion-item><br>\n\n        <ion-item>\n          <ion-label position=\"fixed\" class=\"ion-text-wrap\">Age: </ion-label>\n          <ion-input readonly [(ngModel)]=\"animalAge\" class=\"ion-text-right\"></ion-input>\n        </ion-item><br>\n\n        <ion-item>\n          <ion-label position=\"fixed\" class=\"ion-text-wrap\">Sex: </ion-label>\n          <ion-input readonly [(ngModel)]=\"sex\" class=\"ion-text-right\"></ion-input>\n        </ion-item><br>\n\n        <ion-item>\n          <ion-label position=\"fixed\" class=\"ion-text-wrap\">Category: </ion-label>\n          <ion-input readonly [(ngModel)]=\"category\" class=\"ion-text-right\"></ion-input>\n        </ion-item><br>\n\n        <ion-item>\n          <ion-label position=\"fixed\" class=\"ion-text-wrap\">CHBPP: </ion-label>\n          <ion-input readonly [(ngModel)]=\"CHBPP\" class=\"ion-text-right\"></ion-input>\n        </ion-item><br>\n\n        <ion-item>\n          <ion-label position=\"fixed\" class=\"ion-text-wrap\">Migration: </ion-label>\n          <ion-input readonly [(ngModel)]=\"migration\" class=\"ion-text-right\"></ion-input>\n        </ion-item><br>\n\n        <ion-item>\n          <ion-label position=\"fixed\" class=\"ion-text-wrap\">Migration Region: </ion-label>\n          <ion-input readonly [(ngModel)]=\"migrationRegion\" class=\"ion-text-right\"></ion-input>\n        </ion-item><br>\n\n        <ion-item>\n          <ion-label position=\"fixed\" class=\"ion-text-wrap\">BCS: </ion-label>\n          <ion-input readonly [(ngModel)]=\"bcs\" class=\"ion-text-right\"></ion-input>\n        </ion-item><br>\n\n        <ion-item>\n          <ion-label position=\"fixed\" class=\"ion-text-wrap\">Housing Type: </ion-label>\n          <ion-input readonly [(ngModel)]=\"housing_type_option\" class=\"ion-text-right\">\n          </ion-input>\n        </ion-item><br>\n\n      </ion-list>\n    </ion-card-content>\n\n    <!-- get pedigree information -->\n    <ion-card-content *ngIf=\"pedigreeinformation\">\n      <ion-list class=\"line-input\">\n        <ion-item>\n          <ion-label position=\"fixed \" class=\"ion-text-wrap\">DAM No: </ion-label>\n          <ion-input readonly [(ngModel)]=\"damNumber\" class=\"ion-text-right\"></ion-input>\n        </ion-item><br>\n\n        <ion-item>\n          <ion-label position=\"fixed\" class=\"ion-text-wrap\">DAM Name: </ion-label>\n          <ion-input readonly [(ngModel)]=\"damName\" class=\"ion-text-right\">{{damName}}</ion-input>\n        </ion-item><br>\n\n        <ion-item>\n          <ion-label position=\"fixed\" class=\"ion-text-wrap\">DAM Exotic: </ion-label>\n          <ion-input readonly [(ngModel)]=\"damExotic\" class=\"ion-text-right\"></ion-input>\n        </ion-item><br>\n\n        <ion-item>\n          <ion-label position=\"fixed\" class=\"ion-text-wrap\">DAM Breed: </ion-label>\n          <ion-input readonly [(ngModel)]=\"damBreed\" class=\"ion-text-right\"></ion-input>\n        </ion-item><br>\n\n        <ion-item>\n          <ion-label position=\"fixed\" class=\"ion-text-wrap\">Sire No: </ion-label>\n          <ion-input [(ngModel)]=\"sireNumber\" (keypress)=\"keyPressNumbers($event)\" class=\"ion-text-right\"></ion-input>\n        </ion-item><br>\n\n        <ion-item>\n          <ion-label position=\"fixed\" class=\"ion-text-wrap\">Sire Name: </ion-label>\n          <ion-input readonly [(ngModel)]=\"sireName\" class=\"ion-text-right\"></ion-input>\n        </ion-item><br>\n\n        <ion-item>\n          <ion-label position=\"fixed\" class=\"ion-text-wrap\">Sire Exotic: </ion-label>\n          <ion-input readonly [(ngModel)]=\"sireExotic\" class=\"ion-text-right\"></ion-input>\n        </ion-item><br>\n\n        <ion-item>\n          <ion-label position=\"fixed\" class=\"ion-text-wrap\">Sire Breed: </ion-label>\n          <ion-input readonly [(ngModel)]=\"sireBreed\" class=\"ion-text-right\"></ion-input>\n        </ion-item><br>\n\n        <ion-item>\n          <ion-label position=\"fixed\" class=\"ion-text-wrap\">Exotic: </ion-label>\n          <ion-input readonly [(ngModel)]=\"selfExotic\" class=\"ion-text-right\"></ion-input>\n        </ion-item><br>\n\n        <ion-item>\n          <ion-label position=\"fixed\" class=\"ion-text-wrap\">Breed: </ion-label>\n          <ion-input readonly [(ngModel)]=\"selfBreedType\" class=\"ion-text-right\"></ion-input>\n        </ion-item><br>\n\n      </ion-list>\n    </ion-card-content>\n  </ion-card>\n\n  <!-- if the ai and ns is already done with given tagnumber just update -->\n  <div *ngIf=\"showAiDetails\">\n    <!-- Details of animal breeding -->\n    <ion-card>\n\n      <!-- Ai type breeding for animals -->\n      <ion-card-header>\n        <ion-label id=\"lb\">Details of AI Breeding</ion-label>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-list class=\"line-input\">\n          <ion-item>\n            <ion-label position=\"fixed\" class=\"ion-text-wrap\">Semen type: </ion-label>\n            <ion-input [(ngModel)]=\"semenType\" readonly class=\"ion-text-right\"></ion-input>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label position=\"fixed\" class=\"ion-text-wrap\">Date of AI: </ion-label>\n            <ion-input [(ngModel)]=\"dateOfAi\" displayFormat=\"DD-MM-YYYY\" readonly class=\"ion-text-right\"></ion-input>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label position=\"fixed\" class=\"ion-text-wrap\">Sire Number*: </ion-label>\n            <ion-input [(ngModel)]=\"bullNumber\" readonly class=\"ion-text-right\"></ion-input>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label position=\"fixed\" class=\"ion-text-wrap\">Bull Name*: </ion-label>\n            <ion-input [(ngModel)]=\"bullName\" readonly class=\"ion-text-right\"></ion-input>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label position=\"fixed\" class=\"ion-text-wrap\">Sire Exotic*: </ion-label>\n            <ion-input [(ngModel)]=\"bullExotic\" readonly class=\"ion-text-right\"></ion-input>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label position=\"fixed\" class=\"ion-text-wrap\">Breed type*: </ion-label>\n            <ion-input [(ngModel)]=\"bullType\" readonly class=\"ion-text-right\"></ion-input>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label position=\"fixed\" class=\"ion-text-wrap\">Technician Name: </ion-label>\n            <ion-input [(ngModel)]=\"technicianName\" readonly class=\"ion-text-right\"></ion-input>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label position=\"fixed\" class=\"ion-text-wrap\">AI Center: </ion-label>\n            <ion-input [(ngModel)]=\"aiCenter\" readonly class=\"ion-text-right\"></ion-input>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label position=\"fixed\" class=\"ion-text-wrap\">AI Technician Type: </ion-label>\n            <ion-input [(ngModel)]=\"technicianType\" readonly class=\"ion-text-right\"></ion-input>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label position=\"fixed\" class=\"ion-text-wrap\">Latitude: </ion-label>\n            <ion-input [(ngModel)]=\"latitude\" readonly class=\"ion-text-right\"></ion-input>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label position=\"fixed\" class=\"ion-text-wrap\">Longitude: </ion-label>\n            <ion-input [(ngModel)]=\"longitude\" readonly class=\"ion-text-right\"></ion-input>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label position=\"fixed\" class=\"ion-text-wrap\">Altitude: </ion-label>\n            <ion-input [(ngModel)]=\"altitude\" readonly class=\"ion-text-right\"></ion-input>\n          </ion-item><br>\n\n          <!-- <ion-item>\n            <ion-label position=\"fixed\" class=\"ion-text-wrap\">No of AI done: </ion-label>\n            <ion-input readonly class=\"ion-text-right\"></ion-input>\n          </ion-item><br> -->\n\n          <ion-button color=\"success\" shape=\"round\" (click)=\"updateAi()\">Update Details</ion-button>\n\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <!-- if the ai and ns is not done hide animal ai details -->\n  <div *ngIf=\"HideAiDetails\">\n    <ion-card>\n      <ion-card-header>\n        <ion-label id=\"lb\">Select Breeding Type</ion-label>\n        <ion-segment (ionChange)=\"segmentChangedBreedingMethod($event)\" [(ngModel)]=\"segment1\" color=\"success\">\n          <ion-segment-button value=\"0\">\n            <ion-label>AI</ion-label>\n          </ion-segment-button>\n          <ion-segment-button value=\"1\">\n            <ion-label>NS</ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-card-header>\n\n      <!-- Ai breeding type for animals -->\n      <ion-card-content *ngIf=\"ai\">\n        <ion-list class=\"line-input\">\n          <ion-item>\n            <ion-label class=\"ion-text-wrap\">Semen type:* </ion-label>\n            <ion-select [(ngModel)]=\"p_semenType\" class=\"owner-type\" placeholder=\"Semen type\">\n              <ion-select-option *ngFor=\"let item of semenTypeList\" value=\"{{item}}\"> {{item}}\n              </ion-select-option>\n            </ion-select>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label position=\"stack\" class=\"ion-text-wrap\">Date of AI*: </ion-label>\n            <ion-input [(ngModel)]=\"p_dateOfAi\" (ionChange)=\"showValidDate(p_dateOfAi)\" displayFormat=\"DD-MM-YYYY\" type=\"date\" class=\"ion-text-right\">\n            </ion-input>\n          </ion-item><br>\n          <p style=\"color: red;\">{{errorMessage}}</p>\n\n          <ion-item>\n            <ion-label position=\"floating\" class=\"ion-text-wrap\">Sire Number*: </ion-label>\n            <ion-input [(ngModel)]=\"p_bullNumber\" (keypress)=\"keyPressNumbers($event)\"  maxlength=\"10\" class=\"ion-text-right\"></ion-input>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label position=\"floating\" class=\"ion-text-wrap\">Sire Name*: </ion-label>\n            <ion-input type=\"text\" [(ngModel)]=\"p_bullName\" class=\"ion-text-right\"></ion-input>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label class=\"ion-text-wrap\">Sire Exotic %*: </ion-label>\n            <ion-select [(ngModel)]=\"p_bullExotic\" class=\"owner-type\" placeholder=\"Blood %\">\n              <ion-select-option *ngFor=\"let se of exoticList;\" value=\"{{se.exoticBlood}}\">{{se.exoticBlood}}\n              </ion-select-option>\n            </ion-select>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label class=\"ion-text-wrap\">Sire Breed*: </ion-label>\n            <ion-select [(ngModel)]=\"P_bullTypeId\" class=\"owner-type\" placeholder=\"Breed Type\">\n              <ion-select-option *ngFor=\"let bT of breedTypeList;\" value=\"{{bT.breedId}}\">{{bT.breedType}}\n              </ion-select-option>\n            </ion-select>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label position=\"floating\" class=\"ion-text-wrap\">Technician Name*: </ion-label>\n            <ion-input [(ngModel)]=\"p_technicianName\" class=\"ion-text-right\"></ion-input>\n          </ion-item><br>\n\n\n          <ion-item>\n            <ion-label position=\"fixed\" class=\"ion-text-wrap\">AI Center: </ion-label>\n            <ion-input readonly class=\"ion-text-right\">{{aiCenterDesc}}</ion-input>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label class=\"ion-text-wrap\">AI Technician Type:</ion-label>\n            <ion-select [(ngModel)]=\"p_technicianType\" class=\"owner-type\" placeholder=\"Technician Type\">\n              <ion-select-option *ngFor=\"let tech of technicianTypeList;\" value=\"{{tech}}\">{{tech}}\n              </ion-select-option>\n            </ion-select>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label position=\"fixed\" class=\"ion-text-wrap\">Gewog*: </ion-label>\n            <ion-input [(ngModel)]=\"p_gewog\" readonly class=\"ion-text-right\">{{gewog}}</ion-input>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label class=\"ion-text-wrap\">Village*:</ion-label>\n            <ion-select [(ngModel)]=\"p_village\" (ionChange)=\"getGeoLocation()\" class=\"owner-type\"\n              placeholder=\"Villages\">\n              <ion-select-option *ngFor=\"let vl of villageList;\" value=\"{{vl.village_Serial_No}}\">{{vl.village_Name}}\n              </ion-select-option>\n            </ion-select>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label position=\"fixed\" class=\"ion-text-wrap\">Latitude: </ion-label>\n            <ion-input readonly class=\"ion-text-right\">{{geoLatitude}}</ion-input>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label position=\"fixed\" class=\"ion-text-wrap\">Longitude: </ion-label>\n            <ion-input readonly class=\"ion-text-right\">{{geoLongitude}}</ion-input>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label position=\"fixed\" class=\"ion-text-wrap\">Altitude: </ion-label>\n            <ion-input [(ngModel)]=\"p_altitude\" class=\"ion-text-right\"> </ion-input>\n          </ion-item><br>\n\n          <ion-button color=\"success\" shape=\"round\" (click)=\"saveAiTypeBreeding()\">Save Details</ion-button>\n\n        </ion-list>\n      </ion-card-content>\n\n      <!-- NS type breeding for animals -->\n      <ion-card-content *ngIf=\"ns\">\n        <ion-list class=\"line-input\">\n          <ion-item>\n            <ion-label position=\"floating\" class=\"ion-text-wrap\">Date of NS: </ion-label>\n            <ion-input [(ngModel)]=\"N_Date\" displayFormat=\"DD-MM-YYYY\" type=\"date\" class=\"ion-text-right\"></ion-input>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label position=\"floating\" class=\"ion-text-wrap\">Bull Number: </ion-label>\n            <ion-input type=\"fixed\" numbersOnly maxlength=\"10\" [(ngModel)]=\"N_BullNumber\" class=\"ion-text-right\"></ion-input>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label position=\"floating\" class=\"ion-text-wrap\">Bull Name: </ion-label>\n            <ion-input type=\"fixed\" [(ngModel)]=\"N_BullName\" class=\"ion-text-right\"></ion-input>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label class=\"ion-text-wrap\">Bull Exotic %</ion-label>\n            <ion-select [(ngModel)]=\"N_BullExotic\" class=\"owner-type\" placeholder=\"Blood %\">\n              <ion-select-option *ngFor=\"let se of exoticList;\" value=\"{{se.exoticBlood}}\">{{se.exoticBlood}}\n              </ion-select-option>\n            </ion-select>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label class=\"ion-text-wrap\">Bull Breed</ion-label>\n            <ion-select [(ngModel)]=\"N_BullTypeId\" class=\"owner-type\" placeholder=\"Breed Type\">\n              <ion-select-option *ngFor=\"let bT of breedTypeList;\" value=\"{{bT.breedId}}\">{{bT.breedType}}\n              </ion-select-option>\n            </ion-select>\n          </ion-item><br>\n\n          <ion-button color=\"success\" shape=\"round\" (click)=\"saveNsTypeBreeding()\">Save Details</ion-button>\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <div *ngIf=\"showNsdetails\">\n    <ion-card>\n      <ion-card-header>\n        <ion-label id=\"lb\">Details of NS Breeding</ion-label>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-list class=\"line-input\">\n          <ion-item>\n            <ion-label position=\"fixed\" class=\"ion-text-wrap\">Bull Number: </ion-label>\n            <ion-input readonly>{{bullNumber}}</ion-input>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label position=\"fixed\" class=\"ion-text-wrap\">Bull Name: </ion-label>\n            <ion-input readonly class=\"ion-text-right\">{{bullName}}</ion-input>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label position=\"fixed\" class=\"ion-text-wrap\">Bull Exotic: </ion-label>\n            <ion-input readonly class=\"ion-text-right\">{{bullExotic}}</ion-input>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label position=\"fixed\" class=\"ion-text-wrap\">Bull Breed: </ion-label>\n            <ion-input readonly class=\"ion-text-right\">{{bullType}}</ion-input>\n          </ion-item><br>\n\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <!-- Status Save -->\n  <div *ngIf=\"statusSave\">\n    <ion-card>\n      <ion-card-header>\n        <ion-label id=\"lb\">Update Status</ion-label>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-list class=\"line-input\">\n          <ion-item>\n            <ion-label position=\"floating\" class=\"ion-text-wrap\">Breeding Status*: </ion-label>\n            <ion-select [(ngModel)]=\"model.breeding_Status\" class=\"owner-type\" placeholder=\"Status\">\n              <ion-select-option *ngFor=\"let item of breedingStatusList\" value=\"{{item}}\">{{item}}</ion-select-option>\n            </ion-select>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label position=\"floating\" class=\"ion-text-wrap\">PD Status*: </ion-label>\n            <ion-select [(ngModel)]=\"model.pd_Status\" class=\"owner-type\" placeholder=\"Status\">\n              <ion-select-option *ngFor=\"let item of pdStatusList\" value=\"{{item}}\">{{item}}</ion-select-option>\n            </ion-select>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label class=\"ion-text-wrap\">Date*: </ion-label>\n            <ion-input [(ngModel)]=\"model.pd_Status_Date\" displayFormat=\"DD-MM-YYYY\" type=\"date\">\n            </ion-input>\n          </ion-item><br>\n\n          <ion-button color=\"success\" (click)=\"updateBreedingStatusWhenPdstausIsNull()\" shape=\"round\">Update Status\n          </ion-button>\n          <!-- <ion-button color=\"danger\" shape=\"round\">Exit</ion-button> -->\n\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <!-- Update status -->\n  <div *ngIf=\"statusUpdate\">\n    <ion-card>\n      <ion-card-header>\n        <ion-label id=\"lb\">Status Details</ion-label>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-list class=\"line-input\">\n\n          <ion-item>\n            <ion-label position=\"fixed\" class=\"ion-text-wrap\">Breeding Status: </ion-label>\n            <ion-input readonly class=\"ion-text-right\">{{breedingStatus}}</ion-input>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label position=\"fixed\" class=\"ion-text-wrap\">PD Status: </ion-label>\n            <ion-input readonly class=\"ion-text-right\">{{pdStatus}}</ion-input>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label position=\"fixed\" class=\"ion-text-wrap\">Date: </ion-label>\n            <ion-input readonly class=\"ion-text-right\">{{pdStausdate}}</ion-input>\n          </ion-item><br>\n\n        </ion-list>\n\n        <ion-button color=\"success\" shape=\"round\" (click)=\"breedinStatusUpdate()\">Update</ion-button>\n\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <!-- //Event update -->\n  <div>\n    <ion-card>\n      <ion-card-header>\n        <ion-label id=\"lb\">Event Type</ion-label>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-list class=\"line-input\">\n\n          <!-- Selecting event type from list -->\n          <ion-item>\n            <ion-label position=\"fixed\" class=\"ion-text-wrap\">Event Type*: </ion-label>\n            <ion-select class=\"owner-type\" [(ngModel)]=\"modelAiNs.type_Of_Event\" (ionChange)=\"eventType($event)\"\n              placeholder=\"Event type\">\n              <ion-select-option *ngFor=\"let item of eventTypeList\" value=\"{{item}}\">{{item}}</ion-select-option>\n            </ion-select>\n          </ion-item><br>\n\n          <!-- normal event for animals -->\n          <div *ngIf=\"normal\">\n            <ion-item>\n              <ion-label class=\"ion-text-wrap\">Date*: </ion-label>\n              <ion-input [(ngModel)]=\"modelAiNs.date_Of_Pd_Status\"  displayFormat=\"DD-MM-YYYY\" type=\"date\">\n              </ion-input>\n            </ion-item><br>\n\n            <ion-button color=\"success\" shape=\"round\" (click)=\"updateEvent(modelAiNs.type_Of_Event)\">Save Details\n            </ion-button>\n          </div>\n\n          <!-- assiste event for animals -->\n          <div *ngIf=\"assist\">\n            <ion-item>\n              <ion-label position=\"fixed\" class=\"ion-text-wrap\">Assist Type*: </ion-label>\n              <ion-select [(ngModel)]=\"modelAiNs.type_Of_Assited_Formula\" class=\"owner-type\" placeholder=\"Assist type\">\n                <ion-select-option *ngFor=\"let item of assistedTypeList\" value=\"{{item}}\">{{item}}</ion-select-option>\n              </ion-select>\n            </ion-item><br>\n\n            <ion-item>\n              <ion-label class=\"ion-text-wrap\">Date*: </ion-label>\n              <ion-input [(ngModel)]=\"modelAiNs.date_Of_Pd_Status\" displayFormat=\"DD-MM-YYYY\" type=\"date\">\n              </ion-input>\n            </ion-item><br>\n\n            <ion-button color=\"success\" shape=\"round\" (click)=\"updateEvent(modelAiNs.type_Of_Event)\">Save Details\n            </ion-button>\n\n          </div>\n          <!-- still on birth even for animals -->\n          <div *ngIf=\"birth\">\n            <ion-item>\n              <ion-label class=\"ion-text-wrap\">Date*: </ion-label>\n              <ion-input [(ngModel)]=\"modelAiNs.date_Of_Pd_Status\" displayFormat=\"DD-MM-YYYY\" type=\"date\">\n              </ion-input>\n            </ion-item><br>\n\n            <ion-button color=\"success\" shape=\"round\" (click)=\"updateEvent(modelAiNs.type_Of_Event)\">Save Details\n            </ion-button>\n          </div>\n\n          <!-- abortion event for animals -->\n          <div *ngIf=\"abortion\">\n            <ion-item>\n              <ion-label position=\"floating\" class=\"ion-text-wrap\">Reason for Death*: </ion-label>\n              <ion-input [(ngModel)]=\"modelAiNs.remarks\" type=\"text\">\n              </ion-input>\n            </ion-item><br>\n\n            <ion-item>\n              <ion-label class=\"ion-text-wrap\">Date*: </ion-label>\n              <ion-input [(ngModel)]=\"modelAiNs.date_Of_Pd_Status\" displayFormat=\"DD-MM-YYYY\" type=\"date\">\n              </ion-input>\n            </ion-item><br>\n\n            <ion-button color=\"success\" shape=\"round\" (click)=\"updateEvent(modelAiNs.type_Of_Event)\">Save Details\n            </ion-button>\n          </div>\n\n        </ion-list>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <!-- show calf regestration for normal and assit type even -->\n  <div *ngIf=\"showCalfRegeistration\">\n    <ion-card>\n      <ion-card-header>\n        <ion-label id=\"lb\">Calve registration</ion-label>\n      </ion-card-header>\n\n      <ion-card-content>\n        <ion-list class=\"line-input\">\n\n          <ion-item>\n            <ion-label class=\"ion-text-wrap\">Date of Calving: </ion-label>\n            <ion-input [(ngMoodel)]=\"calf_birth_date\" displayFormat=\"DD-MM-YYYY\" type=\"date\"></ion-input>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label position=\"fixed\" class=\"ion-text-wrap\">Sex*: </ion-label>\n            <ion-select class=\"owner-type\" placeholder=\"Assist type\" [(ngMoodel)]=\"calve_sex\">\n              <ion-select-option value=\"male\">Male</ion-select-option>\n              <ion-select-option value=\"female\">Female</ion-select-option>\n            </ion-select>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label position=\"floating\" class=\"ion-text-wrap\">CalveRegistration No:* </ion-label>\n            <ion-input [(ngModel)]=\"clave_registration_no\"></ion-input>\n          </ion-item><br>\n\n          <ion-item>\n            <ion-label position=\"fixed\" class=\"ion-text-wrap\">Exotic:* </ion-label>\n            <ion-input [(ngModel)]=\"calf_exotic\" readonly></ion-input>\n          </ion-item><br>\n\n\n          <ion-item>\n            <ion-label position=\"fixed\" class=\"ion-text-wrap\">Breed Type*: </ion-label>\n            <ion-select [(ngModel)]=\"calf_breed_type\" class=\"owner-type\" placeholder=\"breed type\">\n              <ion-select-option *ngFor=\"let c of breedTypeList;\" value=\"{{c.breedId}}\">{{c.breedType}}\n              </ion-select-option>\n\n            </ion-select>\n          </ion-item><br>\n\n        </ion-list>\n        <ion-button color=\"success\" shape=\"round\" (click)=\"registerCalveDetails()\">Save Details\n        </ion-button>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/ai-ns/ai-ns-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/ai-ns/ai-ns-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AiNsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AiNsPageRoutingModule", function() { return AiNsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ai_ns_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ai-ns.page */ "./src/app/ai-ns/ai-ns.page.ts");




const routes = [
    {
        path: '',
        component: _ai_ns_page__WEBPACK_IMPORTED_MODULE_3__["AiNsPage"]
    }
];
let AiNsPageRoutingModule = class AiNsPageRoutingModule {
};
AiNsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AiNsPageRoutingModule);



/***/ }),

/***/ "./src/app/ai-ns/ai-ns.module.ts":
/*!***************************************!*\
  !*** ./src/app/ai-ns/ai-ns.module.ts ***!
  \***************************************/
/*! exports provided: AiNsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AiNsPageModule", function() { return AiNsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ai_ns_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ai-ns-routing.module */ "./src/app/ai-ns/ai-ns-routing.module.ts");
/* harmony import */ var _ai_ns_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ai-ns.page */ "./src/app/ai-ns/ai-ns.page.ts");







let AiNsPageModule = class AiNsPageModule {
};
AiNsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ai_ns_routing_module__WEBPACK_IMPORTED_MODULE_5__["AiNsPageRoutingModule"]
        ],
        declarations: [_ai_ns_page__WEBPACK_IMPORTED_MODULE_6__["AiNsPage"]]
    })
], AiNsPageModule);



/***/ }),

/***/ "./src/app/ai-ns/ai-ns.page.scss":
/*!***************************************!*\
  !*** ./src/app/ai-ns/ai-ns.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  font-size: 15px;\n}\n\nion-toolbar {\n  background-color: whitesmoke;\n}\n\nion-content {\n  background-color: whitesmoke;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n\n.line-input {\n  margin-bottom: 0 !important;\n}\n\n.line-input ion-item {\n  --border-color: transparent!important;\n  --highlight-height: 0;\n  border: 1px solid #dedede;\n  border-radius: 4px;\n}\n\n.line-input ion-item.item-has-focus {\n  border: 1px solid greenyellow;\n}\n\n.line-input ion-item ion-label {\n  color: black !important;\n  font-weight: 300;\n  font-size: 12px !important;\n}\n\nion-input {\n  font-size: 12px !important;\n}\n\nion-label {\n  font-weight: bold;\n}\n\nion-card-subtitle {\n  text-align: center;\n}\n\nion-item {\n  height: 55px;\n}\n\nion-label#farm-type {\n  font-size: 13px !important;\n}\n\nion-label {\n  font-size: 9px;\n}\n\nion-select.owner-type {\n  font-size: 13px;\n}\n\nion-label#lb {\n  font-size: 12px !important;\n}\n\n.icon-size {\n  height: 25px;\n  width: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWktbnMvRDpcXE9GRklDRVxcUFJPSkVDVFxcRE9MX0RhaXJ5TW9iaWxlQXBwXFxkb2wtZGFpcnktYXBwLW1hc3Rlci9zcmNcXGFwcFxcYWktbnNcXGFpLW5zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvYWktbnMvYWktbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQ0NKOztBRENBO0VBQ0ksNEJBQUE7QUNFSjs7QURBQTtFQUNJLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNHSjs7QURGSTtFQUNBLGFBQUE7QUNJSjs7QURBQTtFQUNJLDJCQUFBO0FDR0o7O0FERkk7RUFDSSxxQ0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0lSOztBREhRO0VBQ0ksNkJBQUE7QUNLWjs7QURIUTtFQUNJLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQ0taOztBRERBO0VBQ0ksMEJBQUE7QUNJSjs7QURGQTtFQUNJLGlCQUFBO0FDS0o7O0FERkE7RUFDSSxrQkFBQTtBQ0tKOztBREZBO0VBQ0ksWUFBQTtBQ0tKOztBREZBO0VBQ0ksMEJBQUE7QUNLSjs7QURGQTtFQUNJLGNBQUE7QUNLSjs7QURIQTtFQUNRLGVBQUE7QUNNUjs7QURKQTtFQUNJLDBCQUFBO0FDT0o7O0FESkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ09KIiwiZmlsZSI6InNyYy9hcHAvYWktbnMvYWktbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRpdGxle1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbmlvbi10b29sYmFye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5pb24tY29udGVudHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICAtLW9mZnNldC1ib3R0b206IGF1dG8haW1wb3J0YW50O1xyXG4gICAgLS1vdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubGluZS1pbnB1dCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwIWltcG9ydGFudDtcclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xyXG4gICAgICAgIC0taGlnaGxpZ2h0LWhlaWdodDogMDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGVkZWRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAmLml0ZW0taGFzLWZvY3VzIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW55ZWxsb3c7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjayFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmlvbi1pbnB1dHtcclxuICAgIGZvbnQtc2l6ZTogMTJweCFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5pb24tY2FyZC1zdWJ0aXRsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLWl0ZW17XHJcbiAgICBoZWlnaHQ6IDU1cHg7XHJcbn1cclxuXHJcbmlvbi1sYWJlbCNmYXJtLXR5cGV7XHJcbiAgICBmb250LXNpemU6IDEzcHghaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tbGFiZWx7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxufVxyXG5pb24tc2VsZWN0Lm93bmVyLXR5cGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4OyAvL3NldHMgcGxhY2Vob2xkZXIgZm9udCBzaXplXHJcbn1cclxuaW9uLWxhYmVsI2xie1xyXG4gICAgZm9udC1zaXplOiAxMnB4IWltcG9ydGFudDtcclxufVxyXG5cclxuLmljb24tc2l6ZXtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG59XHJcblxyXG4iLCJpb24tdGl0bGUge1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuaW9uLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAtLW9mZnNldC1ib3R0b206IGF1dG8haW1wb3J0YW50O1xuICAtLW92ZXJmbG93OiBoaWRkZW47XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuaW9uLWNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmxpbmUtaW5wdXQge1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG59XG4ubGluZS1pbnB1dCBpb24taXRlbSB7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XG4gIC0taGlnaGxpZ2h0LWhlaWdodDogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmxpbmUtaW5wdXQgaW9uLWl0ZW0uaXRlbS1oYXMtZm9jdXMge1xuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbnllbGxvdztcbn1cbi5saW5lLWlucHV0IGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbn1cblxuaW9uLWlucHV0IHtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24tY2FyZC1zdWJ0aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWl0ZW0ge1xuICBoZWlnaHQ6IDU1cHg7XG59XG5cbmlvbi1sYWJlbCNmYXJtLXR5cGUge1xuICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiA5cHg7XG59XG5cbmlvbi1zZWxlY3Qub3duZXItdHlwZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuaW9uLWxhYmVsI2xiIHtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pY29uLXNpemUge1xuICBoZWlnaHQ6IDI1cHg7XG4gIHdpZHRoOiAyNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/ai-ns/ai-ns.page.ts":
/*!*************************************!*\
  !*** ./src/app/ai-ns/ai-ns.page.ts ***!
  \*************************************/
/*! exports provided: AiNsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AiNsPage", function() { return AiNsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _model_ains_details__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../model/ains-details */ "./src/app/model/ains-details.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _model_breeding_status__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../model/breeding-status */ "./src/app/model/breeding-status.ts");
/* harmony import */ var _model_calve_registration__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../model/calve-registration */ "./src/app/model/calve-registration.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");












let AiNsPage = class AiNsPage {
    constructor(apiService, storage, router, alertCtrl, geolocation, nativeGeocoder) {
        this.apiService = apiService;
        this.storage = storage;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]('en-US');
        this.segment = 0;
        this.segment1 = 0;
        this.ownerdetails = true;
        this.animadetails = false;
        this.pedigreeinformation = false;
        this.HideAiDetails = true;
        this.showAiDetails = false;
        this.showNsdetails = false;
        //variable used to show status update and hide status update
        this.statusSave = true;
        this.statusUpdate = false;
        //Event type variable
        this.normal = false;
        this.assist = false;
        this.birth = false;
        this.abortion = false;
        this.showCalfRegeistration = false;
        this.animalTagNumber = "";
        this.p_technique = "AI";
        this.N_TechniqueType = "NS";
        this.pdStatus = null;
        this.ai = true;
        this.ns = false;
        // //Geocoder configuration
        this.geoencoderOptions = {
            useLocale: true,
            maxResults: 5
        };
        this.modelAiNs = new _model_ains_details__WEBPACK_IMPORTED_MODULE_6__["AinsDetails"]();
        this.model = new _model_breeding_status__WEBPACK_IMPORTED_MODULE_9__["BreedingStatus"]();
        this.claveModel = new _model_calve_registration__WEBPACK_IMPORTED_MODULE_10__["CalveRegistration"]();
    }
    ngOnInit() {
        this.getBreedType();
        this.optionsForSelect();
        this.getExoticBloodPercent();
        this.getUserLocationWhileLoggingIn();
    }
    showValidDate(p_dateOfAi) {
        var currentDate = this.pipe.transform(Date.now(), 'yyyy-MM-dd');
        if (p_dateOfAi <= currentDate) {
            this.errorMessage = "";
            return this.p_dateOfAi;
        }
        else {
            this.errorMessage = "Please enter valid date";
        }
    }
    keyPressNumbers(event) {
        var charCode = (event.which) ? event.which : event.keyCode;
        // Only Numbers 0-9
        if ((charCode < 48 || charCode > 57)) {
            event.preventDefault();
            this.fetchFarmerOrFarmNameAnimalPedigreeDetailsFromTagNumber();
            return false;
        }
        else {
            return true;
        }
    }
    //Getting user location while user is loggedin
    getUserLocationWhileLoggingIn() {
        this.currentUser = sessionStorage.getItem("presentUser");
        console.log("User name is:", this.currentUser);
        this.apiService.getUserLocation().subscribe(response => {
            console.log("Response:", response);
            for (let i = 0; i < response.length; i++) {
                if (this.currentUser === response[i].userName) {
                    this.gewog = response[i].user_location_name;
                    this.gewogId = response[i].user_location_id;
                    this.getAllVillagesList(this.gewogId);
                }
            }
        });
    }
    optionsForSelect() {
        this.semenTypeList =
            [
                "Sex sorted Semen Inventory( Imported)",
                "Conventional frozen Semen Inventory(Imported)",
                "Progeny Tested Semen-Yusipang"
            ],
            this.technicianTypeList =
                [
                    "Govt AIT",
                    "Community AIT"
                ],
            this.breedingStatusList =
                [
                    "Repeated",
                    "Not Repeated"
                ],
            this.pdStatusList =
                [
                    "Positive",
                    "Negative"
                ],
            this.eventTypeList =
                [
                    "Normal",
                    "Assisted",
                    "Still birth",
                    "Abortion"
                ],
            this.assistedTypeList =
                [
                    "Caesarean",
                    "Corrective Measure"
                ];
    }
    //To navigate between the tabs of owner details, animal details and pedigree ionformation
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
    //To navigate between the tab of the AI and NS
    segmentChangedBreedingMethod(event) {
        if (this.segment1 == 0) {
            this.ai = true;
            this.ns = false;
        }
        else {
            this.ai = false;
            this.ns = true;
        }
    }
    //Fetch farmer or farm name, animal details and pedigree information by animal tagg number
    fetchFarmerOrFarmNameAnimalPedigreeDetailsFromTagNumber() {
        this.apiService.fetchFarmerOrFarmNameAnimalPedigreeDetailsFromTagNumber().subscribe(response => {
            for (let i = 0; i < response.length; i++) {
                if (this.animalTagNumber === response[i].animalTagNumber) {
                    this.cid_number = response[i].cid_number;
                    this.nlhd_Number = response[i].nlhd_Number;
                    this.owner_name = response[i].farmOrFarmerName;
                    this.owner_village = response[i].village;
                    this.owner_gewog = response[i].gewog;
                    this.owner_dzongkhag = response[i].dzongkhag;
                    this.mobile_number = response[i].mobileNumber;
                    this.animalname = response[i].animalName;
                    this.animalAge = response[i].animalAge;
                    this.sex = response[i].animalSex;
                    this.category = response[i].animalCategory;
                    this.CHBPP = response[i].chbpp;
                    this.migration = response[i].migration;
                    this.migrationRegion = response[i].migrationRegion;
                    this.bcs = response[i].bcs;
                    this.housing_type_option = response[i].housingType;
                    this.damNumber = response[i].damNumber;
                    this.damName = response[i].damName;
                    this.damExotic = response[i].damExotic;
                    this.damBreed = response[i].damBreedJoin.breedType;
                    this.sireNumber = response[i].sireNumber;
                    this.sireName = response[i].sireName;
                    this.sireExotic = response[i].sireExotic;
                    this.sireBreed = response[i].sireBreedJoin.breedType;
                    this.selfExotic = response[i].exotic_Blood_Percent;
                    this.selfBreedType = response[i].selfBreedType.breedType;
                    this.selfBreedId = response[i].selfBreedType.breedId;
                    this.getArtificialInseminationDetailsById();
                    this.getAnimalBreedingStatus();
                    break;
                }
                else {
                    // this.errorMessage = "Please provide valid animal tag number";
                    // this.alerFailed();
                }
            }
        });
    }
    //get all animal breeding Status
    getAnimalBreedingStatus() {
        this.apiService.getAmimalBreedingStatus().subscribe((response) => {
            for (let i = 0; i < response.length; i++) {
                if (this.animalTagNumber === response[i].animal_Tag_Number && this.pdStatus === response[i].pd_Status) {
                    this.statusSave = true;
                    this.statusUpdate = false;
                    break;
                }
                else if (this.animalTagNumber === response[i].animal_Tag_Number && response[i].pd_Status != "") {
                    this.statusSave = false;
                    this.statusUpdate = true;
                    this.breedingStatus = response[i].breeding_Status;
                    this.pdStatus = response[i].pd_Status;
                    this.pdStausdate = response[i].pd_Status_Date;
                    break;
                }
                else {
                    this.statusSave = false;
                    this.statusUpdate = false;
                }
            }
        });
    }
    //get artificial insemination details by id
    getArtificialInseminationDetailsById() {
        this.apiService.getArtificialInseminationDetails().subscribe((response) => {
            for (let i = 0; i < response.length; i++) {
                if (this.animalTagNumber === response[i].animal_Tag_Number && this.p_technique === response[i].technique_Name) {
                    this.semenType = response[i].semen_Type;
                    this.dateOfAi = response[i].date_Of_Event;
                    this.bullNumber = response[i].bull_Number;
                    this.bullName = response[i].bull_Name;
                    this.bullExotic = response[i].bull_Exotic;
                    this.bullType = response[i].breed.breedType;
                    this.bullTypeId = response[i].breed.breedId;
                    this.technicianName = response[i].technician_Name;
                    this.aiCenter = response[i].aicenter.ai_Center_Desc;
                    this.technicianType = response[i].ai_Technician_Type;
                    this.longitude = response[i].longitude;
                    this.latitude = response[i].latitude;
                    this.altitude = this.longitude + this.latitude;
                    this.HideAiDetails = false;
                    this.showAiDetails = true;
                    this.showNsdetails = false;
                    break;
                }
                else if (this.animalTagNumber === response[i].animal_Tag_Number && this.N_TechniqueType === response[i].technique_Name) {
                    this.dateOfAi = response[i].date_Of_Event;
                    this.bullNumber = response[i].bull_Number;
                    this.bullName = response[i].bull_Name;
                    this.bullExotic = response[i].bull_Exotic;
                    this.bullType = response[i].breed.breedType;
                    this.bullTypeId = response[i].breed.breedId;
                    this.technicianType = response[i].ai_Technician_Type;
                    this.HideAiDetails = false;
                    this.showAiDetails = false;
                    this.showNsdetails = true;
                    break;
                }
                else {
                    this.HideAiDetails = true;
                    this.showAiDetails = false;
                    this.showNsdetails = false;
                }
            }
        });
    }
    //Update Ai Details
    updateAi() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.animalTagNumber != null) {
                this.storage.set("taggNumber", this.animalTagNumber);
                this.router.navigate(['ai-update']);
            }
            else {
                this.failedAlert();
            }
        });
    }
    //Update animal breeding status
    breedinStatusUpdate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.animalTagNumber != null) {
                this.storage.set("taggNumber", this.animalTagNumber);
                this.router.navigate(['update-breeding-status']);
            }
            else {
                this.failedAlert();
            }
        });
    }
    //Update breedingg status if pd status is null
    updateBreedingStatusWhenPdstausIsNull() {
        this.apiService.updateBreedingStatus(this.animalTagNumber, this.model).subscribe(response => {
            this.alertBreedingStatusSuccess();
        });
    }
    //get exotic blood percent of dam and sire
    getExoticBloodPercent() {
        this.apiService.getExoticBloodPercent().subscribe((response) => {
            this.exoticList = response;
        });
    }
    //get all breed type
    getBreedType() {
        this.apiService.getBreedType().subscribe((response) => {
            this.breedTypeList = response;
        });
    }
    //get all village
    getAllVillagesList(gewogId) {
        this.apiService.getVillageListFromGewogLookup(gewogId).subscribe((response) => {
            this.villageList = response.villageJoin;
            this.aiCenterDesc = response.aiCenterJoin[0].ai_Center_Desc;
            this.aiCenterId = response.aiCenterJoin[0].ai_Center_Id;
        });
    }
    //Get current coordinates of device
    getGeoLocation() {
        this.geolocation.getCurrentPosition().then((position) => {
            this.geoLatitude = position.coords.latitude;
            this.geoLongitude = position.coords.longitude;
            this.geoAltitude = position.coords.altitude;
            this.getGeoencoder(position.coords.latitude, position.coords.longitude);
        });
    }
    //geocoder method to fetch address from coordinates passed as arguments
    getGeoencoder(geoLatitude, geoLongitude) {
        this.nativeGeocoder.reverseGeocode(geoLatitude, geoLongitude, this.geoencoderOptions)
            .then((result) => {
            this.address = this.generateAddress(result[0]);
        })
            .catch((error) => {
            console.log('Error getting location' + JSON.stringify(error));
        });
    }
    //Return Comma saperated address
    generateAddress(addressObj) {
        let obj = [];
        let address = "";
        for (let key in addressObj) {
            obj.push(addressObj[key]);
        }
        obj.reverse();
        for (let val in obj) {
            if (obj[val].length)
                address += obj[val] + ', ';
        }
        return address.slice(0, -2);
    }
    //Save AI type breeding for animals
    saveAiTypeBreeding() {
        this.modelAiNs.animal_Tag_Number = this.animalTagNumber;
        this.modelAiNs.semen_Type = this.p_semenType;
        this.modelAiNs.ai_Technician_Type = this.p_technicianType;
        this.modelAiNs.technique_Name = this.p_technique;
        this.modelAiNs.date_Of_Event = this.p_dateOfAi;
        this.modelAiNs.bull_Number = this.p_bullNumber;
        this.modelAiNs.bull_Name = this.p_bullName;
        this.modelAiNs.bull_Exotic = this.p_bullExotic;
        this.modelAiNs.bull_Breed_Type_Id = this.P_bullTypeId;
        this.modelAiNs.technician_Name = this.p_technicianName;
        this.modelAiNs.ai_Center_Id = this.aiCenterId;
        this.modelAiNs.user_Gewog_Id = this.gewogId;
        this.modelAiNs.latitude = this.geoLatitude;
        this.modelAiNs.longitude = this.geoLongitude;
        this.modelAiNs.altitude = this.p_altitude;
        if (this.animalTagNumber != "" && this.p_semenType != "" && this.p_technique != "" && this.p_dateOfAi != null &&
            this.p_bullNumber != "" && this.p_bullExotic != 0 && this.P_bullTypeId != 0 && this.p_technicianName != "" &&
            this.aiCenterId != 0 && this.gewogId != 0) {
            this.apiService.saveAiAndNSTypeBreeding(this.modelAiNs).subscribe((response) => {
                this.alertSaveSuccesss();
            });
        }
        else {
            this.errorMessage = "Please fill all the required field";
            this.alerFailed();
        }
    }
    //Save NS type breeding for animals
    saveNsTypeBreeding() {
        this.modelAiNs.animal_Tag_Number = this.animalTagNumber;
        this.modelAiNs.technique_Name = this.N_TechniqueType;
        this.modelAiNs.date_Of_Event = this.N_Date;
        this.modelAiNs.bull_Number = this.N_BullNumber;
        this.modelAiNs.bull_Name = this.N_BullName;
        this.modelAiNs.bull_Exotic = this.N_BullExotic;
        this.modelAiNs.bull_Breed_Type_Id = this.N_BullTypeId;
        if (this.animalTagNumber != "" && this.N_TechniqueType != "" && this.N_Date != null && this.N_BullNumber != "" &&
            this.N_BullName != "" && this.N_BullExotic != 0 && this.N_BullTypeId != 0) {
            this.apiService.saveAiAndNSTypeBreeding(this.modelAiNs).subscribe((response) => {
                this.alertSaveSuccesss();
            });
        }
        else {
            this.errorMessage = "Please provide all the required values";
            this.alerFailed();
        }
    }
    //Selecting event type for animal
    eventType($event) {
        var item = $event.detail.value;
        if (item === "Normal") {
            this.normal = true;
            this.assist = false;
            this.birth = false;
            this.abortion = false;
        }
        else if (item === "Assisted") {
            this.normal = false;
            this.assist = true;
            this.birth = false;
            this.abortion = false;
        }
        else if (item === "Still birth") {
            this.normal = false;
            this.assist = false;
            this.birth = true;
            this.abortion = false;
        }
        else {
            this.normal = false;
            this.assist = false;
            this.birth = false;
            this.abortion = true;
        }
    }
    //normal event update
    updateEvent(eventType) {
        if (this.animalTagNumber != "" && (eventType === "Normal" || eventType === "Assisted")) {
            this.apiService.eventUpdate(this.animalTagNumber, this.modelAiNs).subscribe(response => {
                this.evntUpdateSuccesss();
                this.calf_exotic = (this.selfExotic + this.bullExotic) / 2;
                this.showCalfRegeistration = true;
            });
        }
        else if (this.animalTagNumber != "" && (eventType === "Still birth" || eventType === "Abortion")) {
            this.apiService.eventUpdate(this.animalTagNumber, this.modelAiNs).subscribe(response => {
                this.evntUpdateSuccesss();
                this.showCalfRegeistration = false;
            });
        }
        else {
            this.showCalfRegeistration = false;
        }
    }
    //Register new calve
    registerCalveDetails() {
        debugger;
        this.claveModel.animalRegistrationNumber = this.clave_registration_no;
        this.claveModel.cid_number = this.cid_number;
        this.claveModel.nlhd_Number = this.nlhd_Number;
        this.claveModel.owner_name = this.owner_name;
        this.claveModel.owner_village = this.owner_village;
        this.claveModel.owner_gewog = this.owner_gewog;
        this.claveModel.owner_dzongkhag = this.owner_dzongkhag;
        this.claveModel.damNumber = this.animalTagNumber;
        this.claveModel.damExotic = this.selfExotic;
        this.claveModel.damName = this.animalname;
        this.claveModel.sireNumber = this.bullNumber;
        this.claveModel.sireName = this.bullName;
        this.claveModel.sireExotic = this.bullExotic;
        this.claveModel.housing_type_option = this.housing_type_option = "";
        this.claveModel.animalname = this.calve_name;
        this.claveModel.mobile_number = this.mobile_number;
        this.claveModel.birthdate = this.calf_birth_date;
        this.claveModel.animalAge = this.calve_age;
        this.claveModel.migration = this.migration = "";
        this.claveModel.migrationRegion = this.migrationRegion = "";
        this.claveModel.sex = this.calve_sex;
        this.claveModel.category = this.category = "Calve";
        this.claveModel.bcs = this.bcs = 0;
        this.claveModel.damBreedId = this.selfBreedId;
        this.claveModel.sireBreedId = this.bullTypeId;
        this.claveModel.CHBPP = this.CHBPP = "";
        this.claveModel.animalBreedType = this.calf_breed_type;
        ;
        this.claveModel.animalExotic = this.calf_exotic;
        if (this.clave_registration_no != "" && this.calve_sex != "" && this.calf_birth_date != null) {
            this.apiService.registerCalveDetails(this.claveModel).subscribe((response) => {
                //console.log("Saved successfully");
                this.successmessage = "Calve registred successfully";
                this.alerSuccessful();
            });
        }
        else {
            this.errorMessage = "Please provide all the required details";
        }
    }
    // ********************all alert message here****************
    //Failed alert
    failedAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Failed',
                message: "Please provide animal tag number",
                buttons: [
                    {
                        text: 'Ok'
                    }
                ]
            });
            yield alert.present();
        });
    }
    //Alert Controller to show animal details saving
    alertSaveSuccesss() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                message: 'Animal sucessfully saved for AI: ',
                buttons: ['OK']
            });
            yield alert.present();
            const result = yield alert.onDidDismiss();
            console.log(result);
        });
    }
    //Show alert for successful breeding status update
    alertBreedingStatusSuccess() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                message: 'Status saved successfully ',
                buttons: ['OK']
            });
            yield alert.present();
            const result = yield alert.onDidDismiss();
            console.log(result);
        });
    }
    //Alert Controller to show animal details saving
    evntUpdateSuccesss() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                message: 'Successfull updated event',
                buttons: ['OK']
            });
            yield alert.present();
            const result = yield alert.onDidDismiss();
            console.log(result);
        });
    }
    //Alert Controller to show sussess
    alerSuccessful() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                message: this.successmessage,
                buttons: ['OK']
            });
            yield alert.present();
            const result = yield alert.onDidDismiss();
            console.log(result);
        });
    }
    alerFailed() {
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
    logout() {
        this.router.navigate(['home']);
        sessionStorage.clear();
    }
};
AiNsPage.ctorParameters = () => [
    { type: _services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__["Geolocation"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_8__["NativeGeocoder"] }
];
AiNsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ai-ns',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ai-ns.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ai-ns/ai-ns.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./ai-ns.page.scss */ "./src/app/ai-ns/ai-ns.page.scss")).default]
    })
], AiNsPage);



/***/ }),

/***/ "./src/app/model/calve-registration.ts":
/*!*********************************************!*\
  !*** ./src/app/model/calve-registration.ts ***!
  \*********************************************/
/*! exports provided: CalveRegistration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalveRegistration", function() { return CalveRegistration; });
class CalveRegistration {
}


/***/ })

}]);
//# sourceMappingURL=ai-ns-ai-ns-module-es2015.js.map