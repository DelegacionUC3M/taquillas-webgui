import { Component, OnInit, Input } from '@angular/core';
import { ManagerApiService } from '../../Services/manager-api-service/manager.api.service';
import { ManagerTableTypesComponent } from '../manager-table-types/manager-table-types.component';
import { Type } from '../../Classes/Type';

@Component({
    selector: 'manager-new-type',
    templateUrl: './manager-new-type.component.html',
    styleUrls: ['./manager-new-type.component.css']
})
export class ManagerNewTypeComponent implements OnInit {

    @Input() managerTableTypes: ManagerTableTypesComponent;

    newTypeObject: Type = new Type;

    constructor(private managerApi:ManagerApiService) { 

    }

    ngOnInit() {

    }

    newType(): void {
        this.managerApi.newType(this.newTypeObject).subscribe(
            result => {
                this.managerTableTypes.update();
                this.managerTableTypes.showSnackbar(result.success); 
            },
            error => {
                this.managerTableTypes.showSnackbar(error.error);
            }
        );
    }

}
