import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import { AinsDetails } from '../model/ains-details';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
import { BreedingStatus } from '../model/breeding-status';
import { CalveRegistration } from '../model/calve-registration';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-ai-ns',
  templateUrl: './ai-ns.page.html',
  styleUrls: ['./ai-ns.page.scss'],
})


export class AiNsPage implements OnInit {
  pipe = new DatePipe('en-US');
  currentUser: string;
  semenTypeList: Array<String>;
  exoticList: Object;
  breedTypeList: Object;
  villageList: Object;
  aiCenterDesc: string;
  aiCenterId: number;
  technicianTypeList: Array<String>;
  breedingStatusList: Array<string>;
  pdStatusList: Array<string>;
  eventTypeList: Array<string>;
  assistedTypeList: Array<string>;

  segment = 0;
  segment1 = 0;

  ownerdetails: boolean = true;
  animadetails: boolean = false;
  pedigreeinformation: boolean = false;

  model: BreedingStatus;
  modelAiNs: AinsDetails;

  numberOfAi: number;
  //List of variables used for AI type breeding 
  animalBreedType: String;
  HideAiDetails: boolean = true;
  showAiDetails: boolean = false;
  showNsdetails: boolean = false;

  //variable used to show status update and hide status update
  statusSave: boolean = true;
  statusUpdate: boolean = false;

  //Event type variable
  normal: boolean = false;
  assist: boolean = false;
  birth: boolean = false;
  abortion: boolean = false;
  showCalfRegeistration: boolean = false;

  //List of variable to get details of owner, pedegree information, and animal details
  cid_number: string;
  nlhd_Number: string;
  owner_name: string;
  owner_village: string;
  owner_gewog: string;
  owner_dzongkhag: string;
  animalTagNumber: string = "";
  damNumber: string;
  damExotic: number;
  damName: string;
  sireNumber: String;
  sireName: String;
  sireExotic: number;
  housing_type_option: String;
  animalname: String;
  mobile_number: String;
  animalAge: number;
  migration: String;
  migrationRegion: String;
  sex: string;
  category: string;
  bcs: number;
  damBreedId: number;
  damBreed: String;
  sireBreedId: number;
  sireBreed: String;
  selfExotic:number;
  selfBreedId: number;
  selfBreedType: string;
  CHBPP: String;

  //Lidt of variables to get information about Animal artificial insemination
  semenType: string;
  dateOfAi: Date;
  techniqueName: string;
  bullNumber: string;
  bullName: string;
  bullExotic: number;
  bullType: string;
  bullTypeId: number;
  technicianName: string;
  aiCenter: string;
  technicianType: string;
  gewog: string;
  gewogId: number;
  village: string;
  longitude: number;
  latitude: number;
  altitude: number;
  numberOfAiDone: number;

  //List of variables to post the AI details of animals
  p_semenType: string;
  p_dateOfAi: Date;
  p_bullNumber: string;
  p_bullName: string;
  p_bullExotic: number;
  P_bullTypeId: number;
  p_technicianName: string;
  p_technique: string = "AI";
  p_technicianType: string;
  p_gewogId: number;
  p_village: string;
  p_altitude: number;

  //List of the varailes to post the NS details of animals
  N_Date: Date;
  N_BullNumber: string;
  N_BullName: string;
  N_BullExotic: number;
  N_BullTypeId: number;
  N_TechniqueType: string = "NS";

  //List of varaible to get animal breeding status;
  breedingStatus: string;
  pdStatus: string = null;
  pdStausdate: Date;

  //List of variable for Calve registration
  clave_registration_no: string;
  calve_name: string;
  calf_birth_date: Date;
  calve_age: number;
  calve_sex: string;
  calf_breed_type: number;
  calf_exotic: number;

  // // Readable Address
  address: string;

  geoLatitude: number;
  geoLongitude: number;
  geoAltitude: number;

  ai: boolean = true;
  ns: boolean = false;

  claveModel:CalveRegistration;

  //Validation variable
  successmessage: any;
  errorMessage: any;


  constructor(
    private apiService: ApiService,
    private storage: Storage,
    private router: Router,
    private alertCtrl: AlertController,
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder
  ) {
    this.modelAiNs = new AinsDetails();
    this.model = new BreedingStatus();
    this.claveModel = new CalveRegistration();
  }

  ngOnInit() {
    this.getBreedType();
    this.optionsForSelect();
    this.getExoticBloodPercent();
    this.getUserLocationWhileLoggingIn();
  }

  showValidDate(p_dateOfAi){
    var currentDate = this.pipe.transform( Date.now(), 'yyyy-MM-dd');
    if(p_dateOfAi <= currentDate){
      this.errorMessage = "";
      return this.p_dateOfAi;
    } else {
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
    } else {
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
    })
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
      ]

  }


  //To navigate between the tabs of owner details, animal details and pedigree ionformation
  segmentChanged(event) {
    if (this.segment == 0) {
      this.ownerdetails = true;
      this.animadetails = false;
      this.pedigreeinformation = false;
    } else if (this.segment == 1) {
      this.ownerdetails = false;
      this.animadetails = true;
      this.pedigreeinformation = false;
    } else {
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
    } else {
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
        } else {
          
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
        } else if (this.animalTagNumber === response[i].animal_Tag_Number && response[i].pd_Status != "") {
          this.statusSave = false;
          this.statusUpdate = true;
          this.breedingStatus = response[i].breeding_Status;
          this.pdStatus = response[i].pd_Status;
          this.pdStausdate = response[i].pd_Status_Date;
          break;
        } else {
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
        } else if (this.animalTagNumber === response[i].animal_Tag_Number && this.N_TechniqueType === response[i].technique_Name) {
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
        } else {
          this.HideAiDetails = true;
          this.showAiDetails = false;
          this.showNsdetails = false;
        }
      }
    });
  }

  //Update Ai Details
  async updateAi() {
    if (this.animalTagNumber != null) {
      this.storage.set("taggNumber", this.animalTagNumber);
      this.router.navigate(['ai-update']);
    } else {
      this.failedAlert();
    }
  }

  //Update animal breeding status
  async breedinStatusUpdate() {
    if (this.animalTagNumber != null) {
      this.storage.set("taggNumber", this.animalTagNumber);
      this.router.navigate(['update-breeding-status']);
    } else {
      this.failedAlert();
    }
  }

  //Update breedingg status if pd status is null
  updateBreedingStatusWhenPdstausIsNull() {
    this.apiService.updateBreedingStatus(this.animalTagNumber, this.model).subscribe(response => {
      this.alertBreedingStatusSuccess();
    })
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


  // //Geocoder configuration
  geoencoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };

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
      .then((result: NativeGeocoderResult[]) => {
        this.address = this.generateAddress(result[0]);
      })
      .catch((error: any) => {
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

    if(this.animalTagNumber != "" && this.p_semenType != "" && this.p_technique != "" && this.p_dateOfAi != null &&
    this.p_bullNumber != "" && this.p_bullExotic != 0 && this.P_bullTypeId != 0 && this.p_technicianName != "" && 
    this.aiCenterId != 0 && this.gewogId != 0){

      this.apiService.saveAiAndNSTypeBreeding(this.modelAiNs).subscribe((response) => {
        this.alertSaveSuccesss();
      });

    } else {
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

    if(this.animalTagNumber != "" && this.N_TechniqueType != "" && this.N_Date != null && this.N_BullNumber != "" &&
    this.N_BullName != "" && this.N_BullExotic != 0 && this.N_BullTypeId != 0){
      this.apiService.saveAiAndNSTypeBreeding(this.modelAiNs).subscribe((response) => {
        this.alertSaveSuccesss();
      })
    } else {
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
    } else if (item === "Assisted") {
      this.normal = false;
      this.assist = true;
      this.birth = false;
      this.abortion = false;
    } else if (item === "Still birth") {
      this.normal = false;
      this.assist = false;
      this.birth = true;
      this.abortion = false;
    } else {
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
        this.calf_exotic = (this.selfExotic+this.bullExotic)/2 
        this.showCalfRegeistration = true;
      });
    } else if (this.animalTagNumber != "" && (eventType === "Still birth" || eventType === "Abortion")) {
      this.apiService.eventUpdate(this.animalTagNumber, this.modelAiNs).subscribe(response => {
        this.evntUpdateSuccesss();
        this.showCalfRegeistration = false;
      });
    } else {
      this.showCalfRegeistration = false;
    }
  }

//Register new calve
  registerCalveDetails(){
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
    this.claveModel.animalBreedType = this.calf_breed_type;;
    this.claveModel.animalExotic = this.calf_exotic;

    if(this.clave_registration_no != "" && this.calve_sex != ""){
      this.apiService.registerCalveDetails(this.claveModel).subscribe((response) => {
        //console.log("Saved successfully");
        this.successmessage = "Calve registred successfully";
        this.alerSuccessful();
      });
    } else {
      this.errorMessage = "Please provide all the required details";
    }
  }

  // ********************all alert message here****************
  //Failed alert
  async failedAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Failed',
      message: "Please provide animal tag number",
      buttons: [
        {
          text: 'Ok'
        }
      ]
    });
    await alert.present();
  }

  //Alert Controller to show animal details saving
  async alertSaveSuccesss() {
    const alert = await this.alertCtrl.create({
      message: 'Animal sucessfully saved for AI: ',
      buttons: ['OK']
    });
    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
  }

  //Show alert for successful breeding status update
  async alertBreedingStatusSuccess() {
    const alert = await this.alertCtrl.create({
      message: 'Status saved successfully ',
      buttons: ['OK']
    });
    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
  }

  //Alert Controller to show animal details saving
  async evntUpdateSuccesss() {
    const alert = await this.alertCtrl.create({
      message: 'Successfull updated event',
      buttons: ['OK']
    });
    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
  }

  //Alert Controller to show sussess
async alerSuccessful() {
  const alert = await this.alertCtrl.create({
    message: this.successmessage ,
    buttons: ['OK']
  });
  await alert.present();
  const result = await alert.onDidDismiss();
  console.log(result);
}

async alerFailed() {
  const alert = await this.alertCtrl.create({
    message: this.errorMessage,
    buttons: ['OK']
  });
  await alert.present();
  const result = await alert.onDidDismiss();
  console.log(result);
}



logout() {
  this.router.navigate(['home']);
  sessionStorage.clear();
}

}






