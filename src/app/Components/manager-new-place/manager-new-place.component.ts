import { Component, OnInit, Input } from '@angular/core';
import { ManagerApiService } from '../../Services/manager-api-service/manager.api.service';
import { ManagerTablePlacesComponent } from '../manager-table-places/manager-table-places.component';
import { Place } from '../../Classes/Place';

@Component({
    selector: 'manager-new-place',
    templateUrl: './manager-new-place.component.html',
    styleUrls: ['./manager-new-place.component.css']
})
export class ManagerNewPlaceComponent implements OnInit {

    @Input() managerTablePlaces: ManagerTablePlacesComponent;

    newPlaceObject:Place = new Place;
    schoolName = ['CCSSJJ', 'Leganés'];

    constructor(private managerApi:ManagerApiService) { 

    }

    ngOnInit() {

    }

    newPlace(): void {
        this.managerApi.newPlace(this.newPlaceObject).subscribe(
            result => {
                this.managerTablePlaces.update();
                this.managerTablePlaces.showSnackbar(result.success); 
            },
            error => {
                this.managerTablePlaces.showSnackbar(error.error);
            }
        );
    }

}
