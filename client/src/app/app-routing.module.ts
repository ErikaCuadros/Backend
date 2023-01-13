import { AuthRoutingModule } from './auth/auth-routing.module';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages-routing.module';

import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { NotFoundRoutingModule } from './not-found/not-found-routing.module';

const routes: Routes = [
  //* Rutas hijas o rutas protegidas
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
  declarations: [],

  imports: [CommonModule, RouterModule, PagesRoutingModule,AuthRoutingModule,NotFoundRoutingModule,RouterModule.forRoot(routes)], //*especificamos las rutas principales con forRoot

  exports: [RouterModule],
})
export class AppRoutingModule { }
