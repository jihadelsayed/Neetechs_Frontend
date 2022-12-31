import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-menu',
  templateUrl: './login-menu.component.html',
  styleUrls: ['./login-menu.component.scss']
})
export class LoginMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  logIn() {
    window.location.href = 'https://accounts.neetechs.com/ar/#/signin/' + "?" + "host=" + window.location.host + "&" + "language=" + window.navigator.language + "&" + "pathname=" + window.location.pathname;
  }
  SignUp() {
    window.location.href = 'https://accounts.neetechs.com/ar/#/signup/' + "?" + "host=" + window.location.host + "&" + "language=" + window.navigator.language + "&" + "pathname=" + window.location.pathname;
  }
}
