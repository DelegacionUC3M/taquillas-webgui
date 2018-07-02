import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

@Component({
    selector: 'confirmation-dialog',
    templateUrl: 'confirmation.dialog.component.html',
})
export class ConfirmationDialog {

    constructor(public dialogRef: MatDialogRef<ConfirmationDialog>) {

    }

    onYesClick(): void {
        this.dialogRef.close(true);
    }
}