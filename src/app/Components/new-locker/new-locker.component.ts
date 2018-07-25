import { Component, OnInit, Input } from '@angular/core';
import { ManagerApiService } from '../../Services/manager-api-service/manager.api.service';
import { PublicApiService } from '../../Services/public-api-service/public.api.service';
import { LockersTableComponent } from '../lockers-table/lockers-table.component';
import { Locker } from '../../Classes/Locker';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
    selector: 'new-locker',
    templateUrl: './new-locker.component.html',
    styleUrls: ['./new-locker.component.css']
})
export class NewLockerComponent implements OnInit {

    @Input() lockersTable: LockersTableComponent;

    newLockerObject:Locker = new Locker;
    schoolName = ['CCSSJJ', 'Leganés'];

    types = new Map<number, string>();
    typesIterator;

    myControl = new FormControl();
    places: string[] = new Array;
    filteredPlaces: Observable<string[]>;
    placesTextId = new Map<number, string>();

    constructor(private managerApi:ManagerApiService, private publicApiService:PublicApiService) { 

    }

    ngOnInit() {
        this.publicApiService.getTypes().subscribe(
            result => {
                for (let type of result) {
                    if (!this.types.has(type.id)){
                        this.types.set(type.id, type.name);
                    }
                }
                this.typesIterator = Array.from(this.types.keys());
            }
        );

        this.publicApiService.getPlaces().subscribe(
            result => {
                for (let place of result) {
                    this.places.push('Edificio ' + place.building 
                                        + ', planta ' + place.floor 
                                        + ', zona ' + place.zone 
                                        + ' (' + this.schoolName[place.school-1] + ')'
                                    );
                    if (!this.placesTextId.has(place.id)){
                        this.placesTextId.set(place.id, 'Edificio ' + place.building 
                                                        + ', planta ' + place.floor 
                                                        + ', zona ' + place.zone 
                                                        + ' (' + this.schoolName[place.school-1] + ')'
                                                    );
                    }
                }
                
                this.filteredPlaces = this.myControl.valueChanges
                    .pipe(
                        startWith(''),
                        map(value => this._filter(value))
                    );
            }
        );
    }

    newPlace(): void {
        let newLockerPlace:number;
        this.placesTextId.forEach(
            (place: string, key: number) => {
                if (this.myControl.value == place) {
                    newLockerPlace = key;
                }
            }
        );
        
        this.newLockerObject.place = newLockerPlace;
        this.managerApi.newLocker(this.newLockerObject).subscribe(
            result => {
                this.lockersTable.update();
                this.lockersTable.showSnackbar(result.success); 
            },
            error => {
                this.lockersTable.showSnackbar(error.error);
            }
        );
    }

    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();
        return this.places.filter(place => place.toLowerCase().includes(filterValue));
    }
}
