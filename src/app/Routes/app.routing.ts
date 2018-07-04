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
import { AuthGuard } from '../Guards/auth.guard';

const routes: Routes = [
    { path: 'login', component: LoginbodyComponent },
    { path: 'condiciones', component: CondicionesComponent, canActivate: [AuthGuard] },
    { path: 'reserva', component: LockerComponent, canActivate: [AuthGuard] },
    { path: 'admin', component: AdminhomeComponent, canActivate: [AuthGuard] },
    { path: 'manager', component: ManagerhomeComponent, canActivate: [AuthGuard] },
    { path: 'admin/select', component: LockerselectorComponent, canActivate: [AuthGuard] },
    { path: 'manager/select', component: LockerselectorComponent, canActivate: [AuthGuard] },
    { path: 'manager/locker', component: ManagerlockerlistComponent, canActivate: [AuthGuard] },
    //{ path: 'manager/type', component: TypeComponent, canActivate: [AuthGuard] },
    { path: 'manager/type', component: TypeComponent },
    { path: 'manager/place', component: PlaceComponent, canActivate: [AuthGuard] },
    { path: 'manager/locker/:id', component: LockerviewComponent, canActivate: [AuthGuard] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login'}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRouting { }
