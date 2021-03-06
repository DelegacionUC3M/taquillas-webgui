import { Component, OnInit, ViewChild } from '@angular/core';
import {    
    MatPaginator, 
    MatSort, 
    MatSnackBar,
    MatSnackBarConfig,
    MatDialog
} from '@angular/material';
import { ManagerTableTypesDataSource } from './manager-table-types-datasource';
import { Type } from '../../Classes/Type';
import { ConfirmationDialog } from '../confirmation-dialog/confirmation.dialog.component';
import { PublicApiService } from '../../Services/public-api-service/public.api.service';
import { ManagerApiService } from '../../Services/manager-api-service/manager.api.service';

@Component({
    selector: 'manager-table-types',
    templateUrl: './manager-table-types.component.html',
    styleUrls: ['./manager-table-types.component.css']
})
export class ManagerTableTypesComponent implements OnInit {
    
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    dataSource: ManagerTableTypesDataSource;

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
                this.dataSource = new ManagerTableTypesDataSource(result, this.paginator, this.sort);   
            }
        ); 
    }

    editSave(row: Type): void {
        if (this.selectedRow == row.id) {
            // Guardar la modificacion
            this.modifyType.id = row.id;
            this.managerApi.modifyType(this.modifyType).subscribe(
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
