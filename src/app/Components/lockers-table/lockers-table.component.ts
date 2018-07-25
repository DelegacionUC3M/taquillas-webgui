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
import { FormControl, Validators } from '@angular/forms';
import { LockersTableDataSource } from './lockers-table-datasource';
import { Locker } from '../../Classes/Locker';
import { ConfirmationDialog } from '../confirmation-dialog/confirmation.dialog.component';
import { PublicApiService } from '../../Services/public-api-service/public.api.service';
import { ManagerApiService } from '../../Services/manager-api-service/manager.api.service';

@Component({
    selector: 'lockers-table',
    templateUrl: './lockers-table.component.html',
    styleUrls: ['./lockers-table.component.css']
})
export class LockersTableComponent implements OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    dataSource: LockersTableDataSource;

    /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
    displayedColumns = ['id', 'number', 'place', 'type', 'status', 'user', 'incidence', 'edit', 'delete'];

    selectedRow: number = null;
    modifyLocker: Locker = new Locker;

    schoolName = ['CCSSJJ', 'Leganés'];
    schoolControl = new FormControl('', [Validators.required]);

    typeText = new Map<number, string>();
    placeText = new Map<number, string>();

    constructor(
        private dialog: MatDialog, 
        public snackBar: MatSnackBar,
        private publicApiService: PublicApiService,
        private managerApi:ManagerApiService
    ) {
        
    }

    ngOnInit() {
        this.managerApi.getLockers().subscribe(
            result => {
                this.publicApiService.getTypes().subscribe(
                    result => {
                        for (let type of result) {
                            if (!this.typeText.has(type.id)){
                                this.typeText.set(type.id, type.name);
                            }
                        }
                    }
                );
                this.publicApiService.getPlaces().subscribe(
                    result => {
                        for (let place of result) {
                            if (!this.placeText.has(place.id)){
                                this.placeText.set(place.id, 'Edificio ' + place.building 
                                                            + ', planta ' + place.floor 
                                                            + ', zona ' + place.zone 
                                                            + ' (' + this.schoolName[place.school-1] + ')');
                            }
                        }
                    }
                );
                this.dataSource = new LockersTableDataSource(result, this.paginator, this.sort);
                
            }
        ); 
    }

    editSave(row: Locker): void {
        if (this.selectedRow == row.id) {
            // Guardar la modificacion
            this.managerApi.modifyLocker(
                row.id, 
                this.modifyLocker.number, 
                this.modifyLocker.status, 
                this.modifyLocker.qr, 
                this.modifyLocker.type,
                this.modifyLocker.place,
                this.modifyLocker.incidence,
                this.modifyLocker.user,
                this.modifyLocker.date
            ).subscribe(
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
            this.modifyLocker = row;
            this.selectedRow = row.id;
        }
    }

    deleteCancel(row: Locker): void {
        if (this.selectedRow == row.id) {
            // Cancelar la modificacion
            this.selectedRow = null;
        }
        else {
            // Confirmacion eliminar fila
            this.openDialog(row);    
        }
    }

    getTypeText(type: number) {
        this.publicApiService.getType(type).subscribe(
            result => {
                console.log(result);   
            }
        ); 
    }

    update(): void {
        this.managerApi.getLockers().subscribe(
            result => {
                this.dataSource.loadData(result); 
            }
        );
    }

    openDialog(row: Locker): void {
        const dialogRef = this.dialog.open(ConfirmationDialog);

        dialogRef.afterClosed().subscribe((result: boolean) => {
            if (result) {
                this.managerApi.deleteLocker(row.id).subscribe(
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
