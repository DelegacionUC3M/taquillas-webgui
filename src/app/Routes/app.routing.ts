import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginbodyComponent } from '../Components/loginbody/loginbody.component';
import { CondicionesComponent } from '../Components/condiciones/condiciones.component';
import { LockerComponent } from '../Components/locker/locker.component';
import { AdminhomeComponent } from '../Components/adminhome/adminhome.component';
import { ManagerhomeComponent } from '../Components/managerhome/managerhome.component';
import { LockerselectorComponent } from '../Components/lockerselector/lockerselector.component';
import { ManagerlockerlistComponent} from '../Components/managerlockerlist/managerlockerlist.component';
import { TypeComponent } from '../Components/type/type.component';
import { PlaceComponent } from '../Components/place/place.component';
import { LockerviewComponent } from '../Components/lockerview/lockerview.component';

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
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRouting { }
