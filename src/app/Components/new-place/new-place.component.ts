import { Component, OnInit, Input } from '@angular/core';
import { ManagerApiService } from '../../Services/manager-api-service/manager.api.service';
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

    constructor(private managerApi:ManagerApiService) { 

    }

    ngOnInit() {

    }

    newPlace(): void {
        this.managerApi.newPlace(this.newPlaceObject).subscribe(
            result => {
                this.placesTable.update();
                this.placesTable.showSnackbar(result.success); 
            },
            error => {
                this.placesTable.showSnackbar(error.error);
            }
        );
    }

}
