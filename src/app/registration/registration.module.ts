import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { RegistrationPageRoutingModule } from './registration-routing.module';

import { RegistrationPage } from './registration.page';
import { DatePickerModule } from 'ionic4-date-picker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrationPageRoutingModule,
    DatePickerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [RegistrationPage]
})
export class RegistrationPageModule {}
