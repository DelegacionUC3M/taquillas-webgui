import { Component, OnInit, ViewChild } from '@angular/core';
import {    
    MatPaginator, 
    MatSort,
    MatSnackBar,
    MatSnackBarConfig,
    MatDialog
} from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { ManagerTableLockersDataSource } from './manager-table-lockers-datasource';
import { Locker } from '../../Classes/Locker';
import { ConfirmationDialog } from '../confirmation-dialog/confirmation.dialog.component';
import { PublicApiService } from '../../Services/public-api-service/public.api.service';
import { ManagerApiService } from '../../Services/manager-api-service/manager.api.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
    selector: 'manager-table-lockers',
    templateUrl: './manager-table-lockers.component.html',
    styleUrls: ['./manager-table-lockers.component.css']
})
export class ManagerTableLockersComponent implements OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    dataSource: ManagerTableLockersDataSource;

    /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
    displayedColumns = ['id', 'number', 'place', 'type', 'status', 'user', 'incidence', 'qr', 'edit', 'delete'];

    selectedRow: number = null;
    modifyLocker: Locker = new Locker;

    schoolName = ['CCSSJJ', 'Leganés'];
    schoolControl = new FormControl('', [Validators.required]);

    typeText = new Map<number, string>();
    placeText = new Map<number, string>();

    myControl = new FormControl();
    places: string[] = new Array;
    filteredPlaces: Observable<string[]>;
    placesTextId = new Map<number, string>();

    types = new Map<number, string>();
    typesIterator;

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
                this.dataSource = new ManagerTableLockersDataSource(result, this.paginator, this.sort);  
            }
        );
        
        this.publicApiService.getPlaces().subscribe(
            result => {
                for (let place of result) {
                    this.places.push('Edificio ' + place.building 
                                        + ', planta ' + place.floor 
                                        + ', zona ' + place.zone 
                                        + ' (' + this.schoolName[place.school-1] + ')'
                                    );
                    if (!this.placesTextId.has(place.id)){
                        this.placesTextId.set(place.id, 'Edificio ' + place.building 
                                                        + ', planta ' + place.floor 
                                                        + ', zona ' + place.zone 
                                                        + ' (' + this.schoolName[place.school-1] + ')'
                                                    );
                    }
                }
                
                this.filteredPlaces = this.myControl.valueChanges
                    .pipe(
                        startWith(''),
                        map(value => this._filter(value))
                    );
            }
        );

        this.publicApiService.getTypes().subscribe(
            result => {
                for (let type of result) {
                    if (!this.types.has(type.id)){
                        this.types.set(type.id, type.name);
                    }
                }
                this.typesIterator = Array.from(this.types.keys());
            }
        );
    }

    editSave(row: Locker): void {
        if (this.selectedRow == row.id) {
            this.placesTextId.forEach(
                (place: string, key: number) => {
                    if (this.myControl.value == place) {
                        this.modifyLocker.place = key;
                    }
                }
            );
            // Guardar la modificacion
            this.managerApi.modifyLocker(this.modifyLocker).subscribe(
                result => {
                    this.update();
                    this.showSnackbar(result.success);  
                },
                err => {
                    this.showSnackbar(err.error);
                    this.update();
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
                        this.update();
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

    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();
        return this.places.filter(place => place.toLowerCase().includes(filterValue));
    }
}
