import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateBreedingStatusPage } from './update-breeding-status.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateBreedingStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateBreedingStatusPageRoutingModule {}
