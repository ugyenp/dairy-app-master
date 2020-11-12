import { Component, OnInit } from '@angular/core';
import { Login } from '../model/login';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  logoImagePath: string = "../../assets/images/photo_2020-08-10_11-32-01.jpg";
  usr: string;
  pwd: string;
  model: Login;

  isSubmitted = false;
  loginForm: FormGroup;

  constructor(

    private authenticationService: AuthenticationService,
    private router: Router,
    private formBuilder: FormBuilder,
    private alertCtrl: AlertController

  ) {
    this.model = new Login();
  }
  ngOnInit() {

    //this.authenticationService.logout();
    this.loginForm = this.formBuilder.group({
      usr: ['', [Validators.required]],
      pwd: ['', [Validators.required]]
    })
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
  async showAlert() { 
    const alert = await this.alertCtrl.create({ 
    message: 'Invalid Username and password. Please try again later!', 
    buttons: ['OK'] 
    }); 
    await alert.present(); 
    const result = await alert.onDidDismiss();  
    } 

  //Show error message if credentials are not filled and log in if credentials are true
  submitLoginForm(){
    this.isSubmitted = true;
    if (!this.loginForm.valid) {
      return this.showAlert();
    } else {
      return this.login();
    }
  }

}
