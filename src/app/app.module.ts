import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import {CookieService} from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpService } from './services/httpService/http.service';
import {HomeService} from './services/homeService/home.service';
import {BaseUrl} from './constants/base-url';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  }];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [
    HomeService,
    BaseUrl,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
