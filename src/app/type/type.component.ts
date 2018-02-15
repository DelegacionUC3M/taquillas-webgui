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
  template: `
  <div class="type">

  <h2> Crea un nuevo tipo... </h2>

  <form action="/type" method="post">

    <div class="col-izq">
      <p> Tipo: </p>
        <input id="name" name="name" [(ngModel)]="nameNew">
    </div>

    <div class="col-der">
      <p> Precio: </p>
      <input id="price" name="price" [(ngModel)]="priceNew">
    </div>

    <div class="abajo">
    <button class="btnreserva" type="submit" value="reserva" name="formulario">
    Crear tipo</button>
    </div>
  </form>
  </div>

  <div class="type">
    <h2> O selecciona un tipo existente </h2>
    <form action='/type' method="post">
      <div class="col-izq">
      <p> Tipo: </p>
      <select id="name" name="name" [(ngModel)]="name" (change)="onChangeName($event)">
      <option name="vacio"></option>
      <option *ngFor="let n of names">
      {{n}}
      </option>
      </select>
    </div>

    <div class="col-der">
      <p> Precio: </p>
      <select id="price" name="price" [(ngModel)]="price">
        <option name="vacio"></option>
        <option *ngFor="let pr of prices">
          {{pr}}
        </option>
      </select>
      </div>

      <br>

      <div class="abajo">
      <button class="btnreserva" type="submit" value="reserva" name="formulario">
      Modificar/Eliminar tipo</button>
      </div>
      </form>
  </div>

  `,
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
