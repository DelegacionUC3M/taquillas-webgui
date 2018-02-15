import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginbodyComponent } from './loginbody/loginbody.component';
import { CondicionesComponent } from './condiciones/condiciones.component';
import { LockerComponent } from './locker/locker.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { ManagerhomeComponent } from './managerhome/managerhome.component';
import { LockerselectorComponent } from './lockerselector/lockerselector.component';
import { ManagerlockerlistComponent} from './managerlockerlist/managerlockerlist.component';
import { TypeComponent } from './type/type.component';
import { PlaceComponent } from './place/place.component';
import { LockerviewComponent } from './lockerview/lockerview.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginbodyComponent },
  { path: 'condiciones', component: CondicionesComponent },
  { path: 'reserva', component: LockerComponent },
  { path: 'admin', component: AdminhomeComponent },
  { path: 'manager', component: ManagerhomeComponent },
  { path: 'admin/select', component: LockerselectorComponent },
  { path: 'manager/select', component: LockerselectorComponent },
  { path: 'manager/locker', component: ManagerlockerlistComponent },
  { path: 'manager/type', component: TypeComponent },
  { path: 'manager/place', component: PlaceComponent },
  { path: 'manager/locker/:id', component: LockerviewComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
