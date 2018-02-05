import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginizationService} from "../../services/loginizationService/loginization.service";
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public loginInfo = {
    login: '',
    password: ''
  };
  public errorshow;
  public valid;

  constructor(private router: Router,
              private loginService: LoginizationService) { }
  ngOnInit() {
  }
  login() {

    this.loginService.login(this.loginInfo.login, this.loginInfo.password);

  }
}
