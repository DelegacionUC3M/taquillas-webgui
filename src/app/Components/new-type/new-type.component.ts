import { Component, OnInit, Input } from '@angular/core';
import { MatInputModule, MatFormFieldModule } from '@angular/material';
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

    constructor() { 

    }

    ngOnInit() {

    }

    newType(): void {
        this.typesTable.update();
    }

}
