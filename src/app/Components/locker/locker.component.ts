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
  selector: 'app-locker',
  templateUrl: './locker.component.html',
  styleUrls: ['./locker.component.css'],

})
@Injectable()
export class LockerComponent implements OnInit {

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
