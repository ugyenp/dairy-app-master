import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { BreedingStatus } from 'src/app/model/breeding-status';


@Component({
  selector: 'app-update-breeding-status',
  templateUrl: './update-breeding-status.page.html',
  styleUrls: ['./update-breeding-status.page.scss'],
})
export class UpdateBreedingStatusPage implements OnInit {

  breedingStatusList: Array<string>;
  pdStatusList: Array<string>;

  taggNumber:string;
  model:BreedingStatus;


  constructor(
    private storage: Storage,
    private router: Router,
    private alertCtrl: AlertController,
    private apiService: ApiService
  ) { 
    this.model = new BreedingStatus();
    
  }

  ngOnInit() {
    this.optionsForSelect();
  }

  //list of option to select the list of semen type
  optionsForSelect() {
    this.breedingStatusList =
      [
        "Repeated",
        "Not Repeated"
      ],

      this.pdStatusList = 
      [
        "Positive",
        "Negative"
      ]
    }

    //Exit to ains page
    exit() {
      this.taggNumber = null;
      this.storage.set('taggNumber', this.taggNumber);
      this.router.navigate(['ai-ns']);
      this.storage.clear();
    }

     //Update breeding status details for animals
     updateBreedingStatus(){
      this.storage.get('taggNumber').then((parameter) => {
        this.taggNumber = parameter;
        if(this.taggNumber != null && this.model.breeding_Status != "" && this.model.pd_Status != "" && this.model.pd_Status_Date != null){
          this.apiService.updateBreedingStatus(this.taggNumber, this.model).subscribe(response => {
            //this.router.navigate(['student-list']);
            console.log("Successful update");
            this.successAlert();
            this.router.navigate(['ai-ns']);
          })
          this.taggNumber = null;
          this.storage.set('taggNumber',this.taggNumber);
          this.router.navigate(['ai-ns']);
          this.storage.clear();
        }else {
          this.failedAlert();
        }
      })
    }


// **************************************all alert message here****************
 //Failed alert
    async failedAlert() {
      const alert = await this.alertCtrl.create({
        header: 'Failed',
        message: "Please provide all the required details",
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
        message: "Status Updated Sucessfully",
        buttons: [
          {
            text: 'Ok'
          }
        ]
      });
      await alert.present();
    }
  

}
