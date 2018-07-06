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
import { PlacesTableDataSource } from './places-table-datasource';
import { Place } from '../../Classes/Place';
import { ConfirmationDialog } from '../../Components/confirmation-dialog/confirmation.dialog.component';

@Component({
    selector: 'places-table',
    templateUrl: './places-table.component.html',
    styleUrls: ['./places-table.component.css']
})
export class PlacesTableComponent implements OnInit {
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    dataSource: PlacesTableDataSource;

    /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
    displayedColumns = ['id', 'school', 'building', 'floor', 'zone', 'edit', 'delete'];

    selectedRow: number = null;
    modifyPlace: Place = new Place;
    newPlaceObject: Place = new Place;

    schoolName = ['CCSSJJ', 'Leganés'];
    schoolControl = new FormControl('', [Validators.required]);

    constructor(private dialog: MatDialog, public snackBar: MatSnackBar) {
        
    }

    ngOnInit() {
        this.dataSource = new PlacesTableDataSource(this.paginator, this.sort);

    }

    editSave(row: Place): void {
        if (this.selectedRow == row.id) {
            // Guardar la modificacion
            this.selectedRow = null;
            console.log(this.modifyPlace);
        }
        else {
            // Se activan los inputs para modificar la fila seleccionada
            this.modifyPlace = row;

            this.selectedRow = row.id;
        }
    }

    deleteCancel(row: Place): void {
        if (this.selectedRow == row.id) {
            // Cancelar la modificacion
            this.selectedRow = null;
        }
        else {
            // Confirmacion eliminar fila
            this.openDialog(row);
        }
    }

    newPlace(): void {

    }

    openDialog(row: Place): void {
        const dialogRef = this.dialog.open(ConfirmationDialog);

        dialogRef.afterClosed().subscribe((result: boolean) => {
            if (result) {
                console.log("Eliminar lugar con id: " + row.id);
                this.showSnackbar("Eliminado correctamente");
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
