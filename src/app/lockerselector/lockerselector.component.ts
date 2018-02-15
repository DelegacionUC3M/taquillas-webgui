import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

class Place{
  constructor(public id: number, public building: string, public zone: string, public floor: number, public school: number) { }
}

@Component({
  selector: 'app-lockerselector',
  template: `
  <div id="locker">
  <h2> Selecciona una taquilla </h2>

  <form action="/locker" method="post">
    <div id="col-izq">
      <p> Campus: </p>
      <select id="campus" name="campus" [(ngModel)]="campus" (change)="onChangeCampus($event)">
        <option name="vacio"></option>
        <option name="CCSSJJ" [value]=1>CCSSJJ</option>
        <option name="Leganes" [value]=2>Leganés</option>
      </select>
      <br>
      <p> Piso </p>
      <select id="floor" name="floor" [(ngModel)]="floor" (change)="onChangeFloor($event)">
        <option name="vacio"></option>
        <option *ngFor="let fl of floors">
          {{fl}}
        </option>
      </select>
    </div>
    <div id="col-der">
      <p> Edificio </p>
      <select id="building" name="building" [(ngModel)]="building" (change)="onChangeBuilding($event)">
        <option name="vacio"></option>
        <option *ngFor="let bd of buildings">
          {{bd}}
        </option>
      </select>
      <br>
      <p> Zona: </p>
      <select id="zone" name="zone" [(ngModel)]="zone">
        <option name="vacio"></option>
        <option *ngFor="let zn of zones">
          {{zn}}
        </option>
      </select>
    </div>
    <div id="abajo">
    <div *ngIf="this.campus==1" id="tipo-taquilla">
      <input name="tipo" value="simple" type="radio">
      <label> Simple: 6€ </label>
    </div>
      <div *ngIf="this.campus==2" id="tipo-taquilla">
        <input name="tipo" value="simple" type="radio">
        <label> Simple: 4€ </label>
        <input name="tipo" value="doble" type="radio">
        <label> Doble: 6€ </label>
      </div>

      <p> Número de taquilla (opcional) </p>
      <input name="num" type="number">
      <br>
      <button id="btnreserva" type="submit" value="reserva" name="formulario">
      Administrar taquilla</button>
      <a id="btnlistar" href="assets/pdfsample.pdf">
      Listar todas (PDF)</a>
    </div>
  </form>
  </div>
`,
  styleUrls: ['./lockerselector.component.css'],
  encapsulation: ViewEncapsulation.None
})

@Injectable()
export class LockerselectorComponent implements OnInit {
  places: Place[] = []

  campus: number;
  building: String;
  floor: number;
  zone: String;
  type: String;

  buildings = [];
  floors = [];
  zones = [];
  types = [];

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get<Place[]>('./assets/test.json').subscribe(data => {
    this.places = data;
    });
  }

  onChangeCampus(event: any){
    const campus = event.target.value;
    this.buildings.length = 0;
    this.floors.length = 0;
    this.zones.length = 0;
    this.types.length = 0;
    for(let i of this.places){
      if (i.school == campus && !(this.buildings.indexOf(i.building) > -1)){
        this.buildings.push(i.building);
      }
    }
  }

  onChangeBuilding(event: any){
    const building = event.target.value;
    this.floors.length = 0;
    this.zones.length = 0;
    this.types.length = 0;
    for(let i of this.places){
      if (i.school == this.campus && i.building == building && !(this.floors.indexOf(i.floor) > -1)){
        this.floors.push(i.floor);
      }
    }
  }

  onChangeFloor(event: any){
    const floor = event.target.value;
    this.zones.length = 0;
    this.types.length = 0;
    for(let i of this.places){
      if (i.school == this.campus && i.building == this.building && i.floor == floor && !(this.zones.indexOf(i.zone) > -1)){
        this.zones.push(i.zone);
      }
    }
  }

}
