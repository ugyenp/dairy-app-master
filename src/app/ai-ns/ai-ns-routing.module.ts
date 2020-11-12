import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AiNsPage } from './ai-ns.page';

const routes: Routes = [
  {
    path: '',
    component: AiNsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AiNsPageRoutingModule {}
