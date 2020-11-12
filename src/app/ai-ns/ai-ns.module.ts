import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AiNsPageRoutingModule } from './ai-ns-routing.module';

import { AiNsPage } from './ai-ns.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AiNsPageRoutingModule
  ],
  declarations: [AiNsPage]
})
export class AiNsPageModule {}
