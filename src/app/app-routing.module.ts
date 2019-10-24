import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { ActualidadComponent } from './actualidad/actualidad.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo:'home',
    pathMatch: 'full'
  },

  { 
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },

  { 
    path: 'actualidad',
    component: ActualidadComponent
  },

  { 
    path: 'home-detail',
    loadChildren: './home/home-detail/home-detail.module#HomeDetailPageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
