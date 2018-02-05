import { Injectable } from '@angular/core';
import {HttpService} from "../httpService/http.service";
import { Http, Headers, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {HttpHeaders} from "@angular/common/http";

@Injectable()
export class LoginizationService {

  constructor(private httpService:HttpService) {
  }
  token;

   login(user:string, password:any):void {
    let auth = 'Basic ' + btoa(user + ':' + password);
    this.httpService.putHeader('Authorization', auth);

    window.location.href = "/home";
  }

  putHeader(header:string, value:string) {
    this.httpService.putHeader(header, value);
  }
}
