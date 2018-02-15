import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

class Locker{
  constructor(public id: number, public lockerNumber: number, public status: number, public qr: number, public place: number, public incidence: number, public user: String, public date: String) { }
}

class Place{
  constructor(public id: number, public building: string, public zone: string, public floor: number, public school: number) { }
}

class Type{
  constructor(public id: number, public name: string, public price: number) {}
}

@Component({
  selector: 'app-lockerview',
  template: `
  <div id="lock">
  <h2> Viendo taquilla con id: {{id+1}} </h2>
  <p> Taquilla {{lockerNumber}}, del {{building}}, planta {{floor}} <span *ngIf="zone!='Sin zonas'">, zona {{zone}} </span> de <span *ngIf="school == 1"> Getafe.</span> <span *ngIf="school == 2"> Leganés.</span></p>
  <p> Es de tipo {{typename}}, con un precio de {{price}}€ </p>
  <p> Su estado actual es: <span *ngIf="status==0">libre.</span> <span *ngIf="status==1">reservada.</span> <span *ngIf="status==2">reservada y cobrada.</span>
  <p *ngIf="status!=0"> El usuario que la tiene reservada es {{user}} con fecha {{date}}. </p>
  <h2> Modificar taquilla </h2>

  <form action="./assets/test.json" method="post">

    <div class="col-izq">
      <p> Número </p>
      <input name="number">
      <br>
      <p> Estado </p>
      <input name="status">
      <p> QR </p>
      <input name="qr">
      <p> Tipo (ver <a routerLink="/manager/type"> aquí</a> para más información) </p>
      <input name="type">
    </div>

    <div class="col-der">
    <p> Incidencias </p>
    <input name="incidence">
    <br>
    <p> Usuario </p>
    <input name="user">
    <p> Fecha </p>
    <input name="date">
    <p> Lugar (ver <a routerLink="/manager/place"> aquí</a> para más información) </p>
    <input name="place">
    </div>
    <button id="modify" type="submit" value="modify" name="formulario" action="/put">
    Modificar taquilla</button>
    </form>
    <br>
  <h2> Borrar taquilla </h2>
  <button id="delete" type="submit" value="delete" name="formulario" action="/delete">
  Borrar taquilla</button>
  </div>
  `,
  styleUrls: ['./lockerview.component.css'],
  encapsulation: ViewEncapsulation.None
})

@Injectable()
export class LockerviewComponent implements OnInit {

  places: Place[] = []
  lockers: Locker[] = []
  types: Type[] = []

  thislocker: Locker;
  id: number;

  lockerNumber: number;
  status: number;
  qr: number;
  incidence: number;
  user: String;
  date: String;
  pl: number;
  ty: number;

  building: string;
  zone: string;
  floor: number;
  school: number;

  typename: string;
  price: number;

constructor(private http: HttpClient, private route: ActivatedRoute) {}

ngOnInit(): void {
  this.route.params.subscribe(params => {
      this.id = params['id'] - 1;
    });

  this.http.get<Locker[]>('./assets/taquillasmanager.json').subscribe(data => {
  this.lockers = data;
  });

  this.http.get<Place[]>('./assets/test.json').subscribe(data2 => {
  this.places = data2;

  });

  this.http.get<Type[]>('./assets/types.json').subscribe(data3 => {
  this.types = data3;
  this.lockerNumber = this.lockers[this.id]['number'];
  this.status = this.lockers[this.id]['status'];
  this.qr = this.lockers[this.id]['qr'];
  this.incidence = this.lockers[this.id]['incidence'];
  this.user = this.lockers[this.id]['user'];
  this.date = this.lockers[this.id]['date'];
  this.pl = this.lockers[this.id]['place'];
  this.ty = this.lockers[this.id]['type'];

  this.building = this.places[this.pl]['building'];
  this.zone = this.places[this.pl]['zone'];
  this.floor = this.places[this.pl]['floor'];
  this.school = this.places[this.pl]['school'];

  this.typename = this.types[this.ty]['name'];
  this.price = this.types[this.ty]['price'];
  });

}


}
