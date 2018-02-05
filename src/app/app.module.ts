import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router'
import {HttpModule} from '@angular/http'


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginizationService } from "./services/loginizationService/loginization.service";
import { HttpService } from "./services/httpService/http.service";
import {HomeService} from "./services/homeService/home.service";
import {BaseUrl} from "./constants/base-url";

const appRoutes:Routes = [
  {
    path: '',
    component: LoginFormComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [
    LoginizationService,
    HomeService,
    BaseUrl,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
