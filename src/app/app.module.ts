import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginbodyComponent } from './loginbody/loginbody.component';
import { AppRoutingModule } from './/app-routing.module';
import { CondicionesComponent } from './condiciones/condiciones.component';
import { LockerComponent } from './locker/locker.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { ManagerhomeComponent } from './managerhome/managerhome.component';
import { LockerselectorComponent } from './lockerselector/lockerselector.component';
import { ManagerlockerlistComponent } from './managerlockerlist/managerlockerlist.component';
import { LockerformComponent } from './lockerform/lockerform.component';
import { HttpModule, JsonpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { TypeComponent } from './type/type.component';
import { PlaceComponent } from './place/place.component';
import { LockerviewComponent } from './lockerview/lockerview.component';


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
    LockerviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
