import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateBreedingStatusPageRoutingModule } from './update-breeding-status-routing.module';

import { UpdateBreedingStatusPage } from './update-breeding-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateBreedingStatusPageRoutingModule
  ],
  declarations: [UpdateBreedingStatusPage]
})
export class UpdateBreedingStatusPageModule {}
