import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LoginbodyComponent } from './Components/loginbody/loginbody.component';
import { AppRouting } from './Routes/app.routing';
import { CondicionesComponent } from './Components/condiciones/condiciones.component';
import { LockerComponent } from './Components/locker/locker.component';
import { AdminhomeComponent } from './Components/adminhome/adminhome.component';
import { LockerselectorComponent } from './Components/lockerselector/lockerselector.component';
import { LockerformComponent } from './Components/lockerform/lockerform.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { LockerviewComponent } from './Components/lockerview/lockerview.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




import { ManagerComponent } from './Components/manager/manager.component';
import { ManagerLockerComponent } from './Components/manager-locker/manager-locker.component';
import { ManagerPlaceComponent } from './Components/manager-place/manager-place.component';
import { ManagerTypeComponent } from './Components/manager-type/manager-type.component';
import { ManagerNewLockerComponent } from './Components/manager-new-locker/manager-new-locker.component';
import { ManagerNewPlaceComponent } from './Components/manager-new-place/manager-new-place.component';
import { ManagerNewTypeComponent } from './Components/manager-new-type/manager-new-type.component';
import { ManagerTableLockersComponent } from './Components/manager-table-lockers/manager-table-lockers.component';
import { ManagerTablePlacesComponent } from './Components/manager-table-places/manager-table-places.component';
import { ManagerTableTypesComponent } from './Components/manager-table-types/manager-table-types.component';

import { ConfirmationDialog } from './Components/confirmation-dialog/confirmation.dialog.component';

import { AuthService } from './Services/auth-service/auth.service';
import { PublicApiService } from './Services/public-api-service/public.api.service';
import { ManagerApiService } from './Services/manager-api-service/manager.api.service';

import { AuthGuard } from './Guards/auth.guard';

import {
    MatTableModule, 
    MatPaginatorModule, 
    MatSortModule,
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatCardModule,
    MatDividerModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatTabsModule
} from '@angular/material';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        LoginbodyComponent,
        CondicionesComponent,
        LockerComponent,
        AdminhomeComponent,
        LockerselectorComponent,
        LockerformComponent,
        
        LockerviewComponent,
    
        ManagerComponent,
        ManagerLockerComponent,
        ManagerPlaceComponent,
        ManagerTypeComponent,
        ManagerNewLockerComponent,
        ManagerNewPlaceComponent,
        ManagerNewTypeComponent,
        ManagerTableLockersComponent,
        ManagerTablePlacesComponent,
        ManagerTableTypesComponent,

        ConfirmationDialog
    ],

    entryComponents: [ ConfirmationDialog ],

    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        AppRouting,
        BrowserAnimationsModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatDialogModule,
        MatSnackBarModule,
        MatCardModule,
        MatDividerModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatCheckboxModule,
        MatTabsModule
    ],

    providers: [ AuthService, PublicApiService, ManagerApiService, AuthGuard ],

    bootstrap: [ AppComponent ]
})
export class AppModule { }
