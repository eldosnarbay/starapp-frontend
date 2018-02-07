import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Http, Headers, Response, RequestOptions} from '@angular/http';
import {Router} from "@angular/router";
import {RequestOptionsArgs} from '@angular/http/src/interfaces';

/**
 * Кастомный сервис для Http-запросов:
 * проставляются хидеры через этот сервис, чтобы постоянно не вбивать хидеры заново
 */
@Injectable()
export class HttpService {
  private _headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Authorization': 'Basic ZWxkb3M6cGFzc3dvcmQ='
  };
  private _options = new RequestOptions({headers: new Headers(this._headers)});

  get(url: string, options?: RequestOptionsArgs):Observable<Response> {
    if (options != null) {
      return this.http.get(url,options);
    }
    return this.http.get(url, this._options);
  }


  post(url:string, body?:any):Observable<Response> {
    return this.http.post(url, body, this._options);
  }

  put(url:string, body?:any):Observable<Response> {
    return this.http.put(url, body, this._options);
  }

  delete(url:string):Observable<Response> {
    return this.http.delete(url, this._options);
  }

  putHeader(header:string, value:string) {
    this._headers[header] = value;
    this._options = new RequestOptions({headers: new Headers(this._headers)});
  }

  removeHeader(header:string) {
    if (this._headers[header] != null) {
      this._headers[header] = null;
      this._options = new RequestOptions({headers: new Headers(this._headers)});
    }
  }

  constructor(private http:Http,
              private router:Router) {
  }

}
