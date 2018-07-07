import { Component, OnInit, Input } from '@angular/core';
import { PlacesTableComponent } from '../places-table/places-table.component';
import { Place } from '../../Classes/Place';

@Component({
    selector: 'new-place',
    templateUrl: './new-place.component.html',
    styleUrls: ['./new-place.component.css']
})
export class NewPlaceComponent implements OnInit {

    @Input() placesTable: PlacesTableComponent;

    newPlaceObject:Place = new Place;
    schoolName = ['CCSSJJ', 'Leganés'];

    constructor() { 

    }

    ngOnInit() {

    }

    newPlace(): void {
        this.placesTable.update();
    }

}
