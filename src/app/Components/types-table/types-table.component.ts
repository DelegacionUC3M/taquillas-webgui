import { Component, OnInit, ViewChild } from '@angular/core';
import {    
    MatPaginator, 
    MatSort, 
    MatInputModule, 
    MatFormFieldModule, 
    MatSnackBar,
    MatSnackBarConfig,
    MatDialog
} from '@angular/material';
import { TypesTableDataSource } from './types-table-datasource';
import { Type } from '../../Classes/Type';
import { ConfirmationDialog } from '../confirmation-dialog/confirmation.dialog.component';
import { PublicApiService } from '../../Services/public-api-service/public.api.service';
import { ManagerApiService } from '../../Services/manager-api-service/manager.api.service';

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

    constructor(
        private dialog: MatDialog, 
        public snackBar: MatSnackBar,
        private publicApiService: PublicApiService,
        private managerApi:ManagerApiService
    ) {

    }

    ngOnInit() {
        this.publicApiService.getTypes().subscribe(
            result => {
                this.dataSource = new TypesTableDataSource(result, this.paginator, this.sort);   
            }
        ); 
    }

    editSave(row: Type): void {
        if (this.selectedRow == row.id) {
            // Guardar la modificacion
            this.managerApi.modifyType(row.id, this.modifyType.name, this.modifyType.price).subscribe(
                result => {
                    this.update();
                    this.showSnackbar(result.success);  
                },
                err => {
                    this.showSnackbar(err.error);
                }
            );
            this.selectedRow = null;
        }
        else {
            // Se activan los inputs para modificar la fila seleccionada
            this.modifyType = row;
            this.selectedRow = row.id;
        }
    }

    deleteCancel(row: Type): void {
        if (this.selectedRow == row.id) {
            // Cancelar la modificacion
            this.selectedRow = null;
        }
        else {
            // Confirmacion eliminar fila
            this.openDialog(row);    
        }
    }

    update(): void {
        this.publicApiService.getTypes().subscribe(
            result => {
                this.dataSource.loadData(result); 
            }
        );
    }

    openDialog(row: any): void {
        const dialogRef = this.dialog.open(ConfirmationDialog);

        dialogRef.afterClosed().subscribe((result: boolean) => {
            if (result) {
                this.managerApi.deleteType(row.id).subscribe(
                    result => {
                        this.update();
                        this.showSnackbar(result.success);  
                    },
                    err => {
                        this.showSnackbar(err.error);
                    }
                );
            }
        });
    }

    showSnackbar(msg:string):void {
        let config = new MatSnackBarConfig();
        config.verticalPosition = "top";
        config.horizontalPosition = "right";
        config.duration = 3000;
        this.snackBar.open(msg, "OK", config);
    }
}
