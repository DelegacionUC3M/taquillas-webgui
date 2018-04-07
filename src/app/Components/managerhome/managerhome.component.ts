import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

class Place{
  constructor(public id: number, public building: string, public zone: string, public floor: number, public school: number) { }
}

class Locker{
  constructor(public id: number, public lockerNumber: number, public status: number, public qr: number, public type: number, public place: number, public incidence: number, public user: string, public date: string) { }
}

@Component({
  selector: 'app-managerhome',
  template: `
  <div id="manager">
  <div id="manager-control-panel">
    <h2> Panel de control </h2>
    <h4> Funciones de administrador </h4>
    <ul>
      <li> <a href="assets/pdfsample.pdf"> Lista taquillas (PDF) </a> </li>
      <li> <a routerLink="select"> Ver y asignar taquillas </a> </li>
    </ul>
    <h4> Funciones de manager </h4>
    <ul>
      <li> <a routerLink="locker"> Administrar taquillas </a> </li>
      <li> <a routerLink="place"> Administrar lugares </a> </li>
      <li> <a routerLink="type"> Administrar tipos </a> </li>

    </ul>
  </div>

  <div id="ultimas-reservas">
    <h2> Últimas reservas </h2>
    <input id="search" type="search" placeholder="Buscar">
    <button id="allbtn" type="submit"> Ver todas </button>

    <table>
      <tr>
        <th>Usuario</th>
        <th>Número</th>
        <th>Localización</th>
      </tr>
      <tr *ngFor="let tq of lockers">
        <td *ngIf="tq.status == 1">{{tq.user}}</td>
        <td *ngIf="tq.status == 1">{{tq.number}}</td>
        <td *ngIf="tq.status == 1">{{getPlace(tq.place)}}</td>
      </tr>
    </table>
    <br>
  </div>

  </div>

`,
  styleUrls: ['./managerhome.component.css'],
  encapsulation: ViewEncapsulation.None
})
@Injectable()
export class ManagerhomeComponent implements OnInit {

places: Place[] = [];
lockers: Locker[] = [];


constructor(private http: HttpClient) {}
ngOnInit(): void {
  this.http.get<Locker[]>('./assets/taquillasmanager.json').subscribe(data => {
  this.lockers = data;
  });

  this.http.get<Place[]>('./assets/test.json').subscribe(data2 => {
  this.places = data2;
  });
}

getPlace(taqpl){
  for(let i of this.places){
    if (taqpl == i.id && i.school == 2){
        return i.building + ", " + "piso " + i.floor + ", " + "zona " + i.zone + ", LEGANÉS";
      }
    else if (taqpl == i.id && i.school == 1){
          return i.building + ", " + "piso " + i.floor + ", GETAFE";
        }
    }
    return 0;
}

}
