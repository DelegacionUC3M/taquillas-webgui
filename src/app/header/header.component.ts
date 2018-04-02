import { Component, OnInit, ViewEncapsulation, Injectable } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  isAuth:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  login() {
  	this.isAuth == true;
  }

  logout() {
  	this.isAuth == false;
  }

}
