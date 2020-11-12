import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router, RouterLink } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { AiDetails } from 'src/app/model/ai-details';
import { AinsDetails } from 'src/app/model/ains-details';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-ai-update',
  templateUrl: './ai-update.page.html',
  styleUrls: ['./ai-update.page.scss'],
})
export class AiUpdatePage implements OnInit {

  pipe = new DatePipe('en-US');
  semenTypeList: Array<String>;
  taggNumber: string;
  model: AiDetails;
  modelAiNs: AinsDetails;
  currentDate:any;
  errorMsg:string;

  constructor(
    private storage: Storage,
    private router: Router,
    private alertCtrl: AlertController,
    private apiService: ApiService
  ) {
    this.model = new AiDetails();
    this.modelAiNs = new AinsDetails();
  }

  ngOnInit() {
    this.optionsForSelect();
  }

  //list of option to select the list of semen type
  optionsForSelect() {
    this.semenTypeList =
      [
        "Sex sorted Semen Inventory (Imported)",
        "Conventional frozen Semen Inventory (Imported)",
        "Progeny Tested Semen Yusipang"
      ];
  }

  exit() {
    this.taggNumber = null;
    this.storage.set('taggNumber', this.taggNumber);
    this.router.navigate(['ai-ns']);
    this.storage.clear();
  }

  showValidDate(date_Of_Event){
    this.currentDate = this.pipe.transform( Date.now(), 'yyyy-MM-dd');
    if(date_Of_Event <= this.currentDate){
      this.errorMsg = "";
      return this.model.date_Of_Event;
    } else {
      this.errorMsg = "Please enter valid date";
    }
  }

  //Update ai details for animal
  updateAiDetailsForAnimal() {
    this.storage.get('taggNumber').then((parameter) => {
      this.taggNumber = parameter;
      if (this.taggNumber != null && this.model.semen_Type != "" && this.model.date_Of_Event != null && this.model.bull_Number != "" &&
        this.model.bull_Name != "") {
        this.apiService.upodateAiDetails(this.taggNumber, this.model).subscribe(response => {
          this.successAlert();
        }, error => {
          this.failedAlert();
        });
        this.taggNumber = null;
        this.storage.set('taggNumber', this.taggNumber);
        this.router.navigate(['ai-ns']);
        this.storage.clear();
      } else {
        this.failedAlert();
      }
    })
    this.getAiNsDetailsAndSaveToAudit();
  }

  //get AINS details and update in Audit
  getAiNsDetailsAndSaveToAudit() {
    this.storage.get('taggNumber').then((parameter) => {
      this.taggNumber = parameter;
      this.apiService.getAiNsDetailsById(this.taggNumber).subscribe((response) => {

        if (this.taggNumber === response.animal_Tag_Number) {
          this.modelAiNs.bull_Name = response.bull_Name;
          this.modelAiNs.date_Of_Event = response.date_Of_Event;
          this.modelAiNs.semen_Type = response.semen_Type;
          this.modelAiNs.bull_Number = response.bull_Number;
          this.modelAiNs.ai_Center_Id = response.ai_Center_Id;
          this.modelAiNs.animal_Tag_Number = response.animal_Tag_Number;
          this.modelAiNs.technique_Name = response.technique_Name;
          this.modelAiNs.bull_Breed_Type_Id = response.bull_Breed_Type_Id;
          this.modelAiNs.technician_Name = response.technician_Name;
          this.modelAiNs.ai_Technician_Type = response.ai_Technician_Type;
          this.modelAiNs.type_Of_Assited_Formula = response.type_Of_Assited_Formula;
          this.modelAiNs.date_Of_Pd_Status = response.date_Of_Pd_Status;
          this.modelAiNs.pd_Status_Date = response.pd_Status_Date;
          this.modelAiNs.breeding_Status = response.breeding_Status;
          this.modelAiNs.longitude = response.longitude;
          this.modelAiNs.user_Gewog_Id = response.user_Gewog_Id;
          this.modelAiNs.type_Of_Event = response.type_Of_Event;
          this.modelAiNs.pd_Status = response.pd_Status;
          this.modelAiNs.bull_Exotic = response.bull_Exotic;
          this.modelAiNs.latitude = response.latitude;
          this.modelAiNs.pd_Date = response.pd_Date;
          this.modelAiNs.remarks = response.remarks;

          this.apiService.saveAiNsDetailsAudit(this.modelAiNs).subscribe((response) => {
            console.log("Updated");
          });
        }
      });

    })
  }


  // **************************************all alert message here****************
  //Failed alert
  async failedAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Update Failed',
      message: "Please try again later",
      buttons: [
        {
          text: 'Ok'
        }
      ]
    });
    await alert.present();
  }

  //success alert
  async successAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Success',
      message: "Updated AI Details Sucessfully",
      buttons: [
        {
          text: 'Ok'
        }
      ]
    });
    await alert.present();
  }

}
