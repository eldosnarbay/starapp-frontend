import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HomeService} from "../../services/homeService/home.service";
import {HttpService} from "../../services/httpService/http.service";
declare let $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public author;
  public stars:any = [{
    category: '',
    coorX: '',
    coorY: '',
    discovererFirstName: '',
    discovererLastName: '',
    id: '',
    name: '',
    categoryId: '',
    discovererId: '',
    starColor: ''
  }];

  public changeStars:any = {
    category: '',
    coorX: '',
    coorY: '',
    discovererFirstName: '',
    discovererLastName: '',
    id: '',
    name: '',
    categoryId: '',
    discovererId: ''
  };

  public categories:any = [{
    id: '',
    name: ''
  }];

  public authors:any = [{
    id: '',
    firstName: '',
    lastName: ''
  }];

  public newAuthor:any = {
    firstName: '',
    lastName: ''
  };

  public colors:any = ['asd', 'blue', '#ccffff', 'white', '#ffff99', 'yellow', '#ffa500', 'red'];

  constructor(private router: Router,
              private homeService: HomeService,
              private httpService: HttpService) {
    this.getTableInfo();
    this.getCategories();
    this.getAuthors();
  }

  ngOnInit() {
  }

  //get requests
  getTableInfo() {
    let promise = this.homeService.getStars();
    promise.then((data) => {
      this.stars = [];
      for(let i = 0; i < data.length; i++) {
        this.stars.push({
          category: data[i].category,
          coorX: data[i].coorX,
          coorY: data[i].coorY,
          discovererFirstName: data[i].discovererFirstName,
          discovererLastName: data[i].discovererLastName,
          id: data[i].id,
          name: data[i].name,
          categoryId: data[i].categoryId,
          discovererId: data[i].discovererId,
          starColor: data[i].starColor
        });
      }
    });
  }

  getCategories() {
    let promise = this.homeService.getCategories();
    promise.then((data) => {
      //console.log(data);
      this.categories = [];
      for(let i = 0; i < data.length; i++) {
        this.categories.push({
          id: data[i].id,
          name: data[i].name
        });
      }
    });
  }

  getAuthors() {
    let promise = this.homeService.getAuthors();
    promise.then((data) => {
      //console.log(data);
      this.authors = [];
      for(let i = 0; i < data.length; i++) {
        this.authors.push({
          id: data[i].id,
          firstName: data[i].firstName,
          lastName: data[i].lastName
        });
      }
    });
  }

  //actions
  callChangeModal(a) {
    this.changeStars = a;
    $('#ChangeModal').appendTo("body").modal('show');
  }

  changeStarMethod() {
    //console.log(this.changeStars);
    let promise = this.homeService.changeStar(this.changeStars);
    promise.then((data) => {
      this.getTableInfo();
    });
  }

  selectTest(a, b) {
    if (b == 'discovererId') {
      this.changeStars.discovererId = a;
    }
    else if (b == 'categoryId') {
      this.changeStars.categoryId = a;
    }
  }

  addNewAuthorBtns() {
    this.newAuthor = {};
    $('.addNewAuthor').show();
    $('.addNewBtn').hide();
    $('.submitDiscovererBtn').show();
  }

  addNewAuthorCancell() {
    $('.addNewAuthor').hide();
    $('.submitDiscovererBtn').hide();
    $('.addNewBtn').show();
    this.newAuthor = {};
  }

  addAuthor() {
    if(this.newAuthor.firstName == '' || !this.newAuthor.firstName){
      alert('Enter the firstName');
      return;
    }
    $('.addNewAuthor').hide();
    $('.submitDiscovererBtn').hide();
    $('.addNewBtn').show();

    let promise = this.homeService.addAuthor(this.newAuthor);
    promise.then((data) => {
      this.getAuthors();
      setTimeout(()=>{
      this.changeStars.discovererId = this.authors[this.authors.length - 1].id;
      },400);
    });

  }

  callAddModal() {
    this.changeStars = {};
    $('#addModal').appendTo("body").modal('show');
  }


  addStar() {
    let promise = this.homeService.addStar(this.changeStars);
    promise.then((data) => {
      this.getTableInfo();
    });
  }

  deleteStar(a) {
    if(!confirm("Are you sure?")){
      return;
    }
    let promise = this.homeService.deleteStar(a.id);
    promise.then((data) => {
      this.getTableInfo();
    });
  }

  logout() {
    this.httpService.removeHeader('Authorization');
    this.router.navigate(['/']);
  }
}
