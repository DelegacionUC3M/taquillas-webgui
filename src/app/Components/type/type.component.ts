import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

class Type{
  constructor(public id: number, public name: string, public price: number) { }
}

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css'],
  encapsulation: ViewEncapsulation.None
})

@Injectable()
export class TypeComponent implements OnInit {

  types: Type[] = []

  name: String;
  price: number;

  names = [];
  prices = [];

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get<Type[]>('./assets/types.json').subscribe(data => {
    this.types = data;
    for (let i of this.types){
      if (!(this.names.indexOf(i.name) > -1)){
        this.names.push(i.name);
      }
    }
    });
  }

  onChangeName(event: any){
    const name = event.target.value;
    this.prices.length = 0;
    for(let i of this.types){
      if (i.name == name && !(this.prices.indexOf(i.price) > -1)){
        this.prices.push(i.price);
      }
    }
  }

}
