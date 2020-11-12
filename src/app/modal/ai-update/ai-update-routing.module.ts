import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AiUpdatePage } from './ai-update.page';

const routes: Routes = [
  {
    path: '',
    component: AiUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AiUpdatePageRoutingModule {}
