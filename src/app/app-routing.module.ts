import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'login-page',
    loadChildren: () => import('./login-page/login-page.module').then( m => m.LoginPagePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'ai-ns',
    loadChildren: () => import('./ai-ns/ai-ns.module').then( m => m.AiNsPageModule)
  },

  {
    path: 'ai-update',
    loadChildren: () => import('./modal/ai-update/ai-update.module').then( m => m.AiUpdatePageModule)
  },
  {
    path: 'update-breeding-status',
    loadChildren: () => import('./modal/update-breeding-status/update-breeding-status.module').then( m => m.UpdateBreedingStatusPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
