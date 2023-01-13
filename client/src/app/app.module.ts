import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';
import { StaticModule } from './static/static.module';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { PagesComponent } from './pages/pages.component';
import { StaicComponent } from './static/staic.component';
import { UserComponent } from './user/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    NotFoundComponent,
    PagesComponent,
    AuthComponent,
    StaicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    StaticModule,
    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
