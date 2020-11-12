import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FarmerAnimalRegistration } from '../model/farmer-animal-registration';
import { ApplicationSequence } from '../model/application-sequence';
import { Router } from '@angular/router';
import { UserDetails } from '../model/user-details';
import { Login } from '../model/login';
import { GovernmentAnimalRegistration } from '../model/government-animal-registration';
import { AlertController } from '@ionic/angular';
import { Directive, ElementRef, HostListener, Input } from '@angular/core';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})


export class RegistrationPage implements OnInit {

  currentUser: String;

  //Page redirect variable after submission
  farmPageRedirect: number = 0;

  id: number;
  data: FarmerAnimalRegistration;
  data1: ApplicationSequence;
  data2: UserDetails;
  data3: GovernmentAnimalRegistration;
  model: Login;

  segment = 0;
  segment1 = 0;

  ownerdetails: boolean = true;
  animadetails: boolean = false;
  pedigreeinformation: boolean = false;

  framers: boolean = true;
  governmentfarm: boolean = false;

  //Date of birth variables to calculate age
  currentdate: any;
  converteddate: any;
  age: any;

  //List of option type defined in private farm owner form options
  housingType: Array<string>;
  taggedNonTagged: Array<string>;
  animalSex: Array<string>;
  animalCategory: Array<string>;
  bodyConditionScore: Array<number>;
  migrationStatus: Array<string>;
  migratioRegionSelect: Array<string>;

  //List of variable to post data through api for owner type animal registration
  nlhd_number: string;
  cid_number: string;
  owner_name: string;
  owner_village: string;
  owner_gewog: string;
  owner_dzongkhag: string;
  animalRegistrationNumber: String;
  damNumber: String;
  damExotic: number;
  damName: String;
  sireNumber: String;
  sireName: String;
  sireExotic: number;
  housing_type_option: String;
  animalname: String;
  mobile_number: String;
  birthdate: Date;
  animalAge: number;
  migration: String;
  migrationRegion: String;
  sex: string;
  category: string;
  bcs: number;
  damBreed: string;
  damBreedId: number
  damNbi: number;
  sireBreed: string;
  sireBreedId: number;
  sireNbi: number;
  CHBPP: String;
  animalBreedType: number;
  animalExotic: number;

  //Api response
  api_response: any;
  api_responseApplicationSequenceNumber: any;
  api_updateApplicationNumber: any;
  api_responseSireDetails: any;
  api_responseToUpdateApplicationNumber: any;
  //Details to submit to NDIS databas

  showAr: boolean = false;
  showRegion: boolean = false;
  private isDisabled: boolean = true;
  showYesDam: boolean = true;
  showNoDam: boolean = false;
  showYesSire: boolean = true;
  showNoSire: boolean = false;
  showInvalidAgeAlert:boolean = false;

  breedTypeList: Object;
  exoticList: Object;

  btnNavAnimalDetails: number = 1;


  //Validation variable
  successmessage: any;
  errorMessage: any;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private alertCtrl: AlertController
  ) {
    this.data = new FarmerAnimalRegistration();
    this.data1 = new ApplicationSequence();
    this.data2 = new UserDetails();
    this.data3 = new GovernmentAnimalRegistration();
    this.model = new Login();
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
      this.fetchUserdetailsFromCencusById()
      return false;
    } else {
      return true;
    }
  }

  showAnimalRegistration($event) {
    let a = $event.target.value;
    if (a === "Tagged") {
      this.isDisabled = false;
      this.animalRegistrationNumber = "";
    } else {
      this.isDisabled = true;
      this.getApplicationSequenceNumberForNonTaggedAnimal();
    }
  }

  //Show the form to select the migration region
  showMigrationRegion($event) {
    let a = $event.target.value;
    if (a === "Yes") {
      this.showRegion = true;
    } else {
      this.showRegion = false;
    }
  }


  //Switch to change the tab between owner details, animadetails and pedigree information
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
    } else {
      this.framers = false;
      this.governmentfarm = true;
    }
  }

  //Calculte the age from date of birth
  calculateAge() {
    let timeDiff = Math.abs(Date.now() - new Date(this.birthdate).getTime());
    let age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365.25);
    if(age > 0){this.animalAge = age;this.showInvalidAgeAlert = false}
    else {this.errorMessage = "Enter valid age";this.showInvalidAgeAlert = true; this.animalAge = null;}
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
        console.log("animal registration no for non tagg" + this.animalRegistrationNumber)
      }
    })
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
        console.log(this.owner_dzongkhag)
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
        } else {
          this.damName = "";
          this.damExotic = 0;
          this.damBreed = "";
          this.showYesDam = false;
          this.showNoDam = true;
        }
      }
    })
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
        } else {
          this.sireName = " ";
          this.sireExotic = 0;
          this.sireBreed = "";
          this.getAnimalExoticNo();
          this.showYesSire = false;
          this.showNoSire = true;
        }
      }
    })
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
    this.data.sireBreedId = this.sireBreedId
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
    } else {
      this.errorMessage = "Please fill in the required fields.";
      this.alerFailedRegistration();
    }
  }

  //Alert Controller to show sussess
  async alerSuccessfulRegistration() {
    const alert = await this.alertCtrl.create({
      message: this.successmessage + " " + this.animalRegistrationNumber,
      buttons: ['OK']
    });
    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
  }

  async alerFailedRegistration() {
    const alert = await this.alertCtrl.create({
      message: this.errorMessage,
      buttons: ['OK']
    });
    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(result);
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
    this.data3.sireBreedId = this.sireBreedId
    this.data3.CHBPP = this.CHBPP;
    this.data3.animalBreedType = this.animalBreedType
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
    } else {
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

}
