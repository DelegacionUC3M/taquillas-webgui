import { Component, OnInit, Input } from '@angular/core';
import { MatInputModule, MatFormFieldModule } from '@angular/material';
import { ManagerApiService } from '../../Services/manager-api-service/manager.api.service';
import { TypesTableComponent } from '../types-table/types-table.component';
import { Type } from '../../Classes/Type';

@Component({
    selector: 'new-type',
    templateUrl: './new-type.component.html',
    styleUrls: ['./new-type.component.css']
})
export class NewTypeComponent implements OnInit {

    @Input() typesTable: TypesTableComponent;

    newTypeObject: Type = new Type;

    constructor(private managerApi:ManagerApiService) { 

    }

    ngOnInit() {

    }

    newType(): void {
        this.managerApi.newType(this.newTypeObject).subscribe(
            result => {
                this.typesTable.update();
                this.typesTable.showSnackbar(result.success); 
            },
            error => {
                this.typesTable.showSnackbar(error.error);
            }
        );
    }

}
