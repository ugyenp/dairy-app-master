import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AiUpdatePageRoutingModule } from './ai-update-routing.module';

import { AiUpdatePage } from './ai-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AiUpdatePageRoutingModule
  ],
  declarations: [AiUpdatePage]
})
export class AiUpdatePageModule {}
