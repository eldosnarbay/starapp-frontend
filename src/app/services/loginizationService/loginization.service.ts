import { Injectable } from '@angular/core';
import {HttpService} from '../httpService/http.service';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {HttpHeaders} from '@angular/common/http';
import {BaseUrl} from '../../constants/base-url';

@Injectable()
export class LoginizationService {

  constructor(private httpService: HttpService, private baseUrl: BaseUrl) {
  }

   async  login(user: string, password: any) {
     const auth = 'Basic ' + btoa(user + ':' + password);
     let headers = new Headers();
     headers.append('Authorization', 'Basic ' + auth);
     headers.append('Content-Type', 'application/json');
     headers.append('Access-Control-Allow-Origin', '*');
     const options = new RequestOptions({headers: headers, body: {}});

    return await this.httpService.get(this.baseUrl.baseUrl + 'login', options)
      .map((response: Response) => {
        return response;
     }).toPromise().catch((reason => {
       console.log(reason);
      }));
  }


}
