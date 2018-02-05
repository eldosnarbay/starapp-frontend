import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Http, Headers, Response} from '@angular/http';
import {HttpService} from "../httpService/http.service";
import {BaseUrl} from "../../constants/base-url";

@Injectable()
export class HomeService {

  constructor(private httpService:HttpService, private baseUrl:BaseUrl) { }

  async getStars() {
    return await this.httpService.get(this.baseUrl.baseUrl + 'stars').map((response:Response)=> {
      return response.json();
    }).toPromise();
  }

  async getCategories() {
    return await this.httpService.get(this.baseUrl.baseUrl + 'categories').map((response:Response)=> {
      return response.json();
    }).toPromise();
  }

  async getAuthors() {
    return await this.httpService.get(this.baseUrl.baseUrl + 'discoverers').map((response:Response)=> {
      return response.json();
    }).toPromise();
  }

  async changeStar(newStar) {
    return await this.httpService.post(this.baseUrl.baseUrl + 'stars/update/' + newStar.id, JSON.stringify(newStar)).map((response:Response)=> {
      return response;
    }).toPromise();
  }

  async addAuthor(newAuthor) {
    return await this.httpService.post(this.baseUrl.baseUrl + 'discoverers/insert', JSON.stringify(newAuthor)).map((response:Response)=> {
      return response;
    }).toPromise();
  }

  async addStar(newStar) {
    return await this.httpService.post(this.baseUrl.baseUrl + 'stars/insert', JSON.stringify(newStar)).map((response:Response)=> {
      return response;
    }).toPromise();
  }

  async deleteStar(id) {
    return await this.httpService.delete(this.baseUrl.baseUrl + 'stars/delete/' + id)
      .map((response:Response)=> {
        return response;
      }).toPromise();
  }

}
