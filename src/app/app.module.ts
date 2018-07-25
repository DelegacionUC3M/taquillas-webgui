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
import { ManagerhomeComponent } from './Components/managerhome/managerhome.component';
import { LockerselectorComponent } from './Components/lockerselector/lockerselector.component';
import { ManagerlockerlistComponent } from './Components/managerlockerlist/managerlockerlist.component';
import { LockerformComponent } from './Components/lockerform/lockerform.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { TypeComponent } from './Components/type/type.component';
import { PlaceComponent } from './Components/place/place.component';
import { LockerviewComponent } from './Components/lockerview/lockerview.component';
import { AuthService } from './Services/auth-service/auth.service';
import { PublicApiService } from './Services/public-api-service/public.api.service';
import { ManagerApiService } from './Services/manager-api-service/manager.api.service';
import { AuthGuard } from './Guards/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TypesTableComponent } from './Components/types-table/types-table.component';
import { NewTypeComponent } from './Components/new-type/new-type.component';
import { NewLockerComponent } from './Components/new-locker/new-locker.component';
import { PlacesTableComponent } from './Components/places-table/places-table.component';
import { LockersTableComponent } from './Components/lockers-table/lockers-table.component';
import { ConfirmationDialog } from './Components/confirmation-dialog/confirmation.dialog.component';
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
    MatCheckboxModule
} from '@angular/material';
import { NewPlaceComponent } from './Components/new-place/new-place.component';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        LoginbodyComponent,
        CondicionesComponent,
        LockerComponent,
        AdminhomeComponent,
        ManagerhomeComponent,
        LockerselectorComponent,
        ManagerlockerlistComponent,
        LockerformComponent,
        TypeComponent,
        PlaceComponent,
        LockerviewComponent,
        TypesTableComponent,
        PlacesTableComponent,
        LockersTableComponent,
        ConfirmationDialog,
        NewTypeComponent,
        NewPlaceComponent,
        NewLockerComponent
    ],
    entryComponents: [ConfirmationDialog],
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
        MatCheckboxModule
    ],
    providers: [AuthService, PublicApiService, ManagerApiService, AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule { }
