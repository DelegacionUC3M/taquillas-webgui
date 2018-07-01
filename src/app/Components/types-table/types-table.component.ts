import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatInputModule, MatFormFieldModule } from '@angular/material';
import { TypesTableDataSource } from './types-table-datasource';
import { Type } from '../../Classes/Type';

@Component({
    selector: 'types-table',
    templateUrl: './types-table.component.html',
    styleUrls: ['./types-table.component.css']
})

export class TypesTableComponent implements OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    dataSource: TypesTableDataSource;

    /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
    displayedColumns = ['id', 'name', 'price', 'edit', 'delete'];

    selectedRow: number = null;
    modifyType: Type = new Type;

    constructor() {

    }

    ngOnInit() {
        this.dataSource = new TypesTableDataSource(this.paginator, this.sort);

    }

    editSave(row: Type): void {
        if (this.selectedRow == row.id) {
            // Guardar la modificacion
            this.selectedRow = null;
            console.log(this.modifyType);
        }
        else {
            // Se activan los inputs para modificar la fila seleccionada
            this.modifyType.name = row.name;
            this.modifyType.price = row.price;

            this.selectedRow = row.id;
        }
    }

    deleteCancel(row: Type): void {
        if (this.selectedRow == row.id) {
            // Cancelar la modificacion
            this.selectedRow = null;
        }
        else {
            // Eliminar la fila
           
        }
    }

    newType(): void {
        
    }
}

