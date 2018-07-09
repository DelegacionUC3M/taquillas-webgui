import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../Services/auth-service/auth.service';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthGuard implements CanActivate {
	
	constructor(
		private router:Router,
		private authService:AuthService
	) {
		
	}

	canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean>|boolean {
		return this.authService.verify().map((auth) => {
				if(auth.status == 200){
					return true;
				}
				this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
				return false;
			}).catch((error: any) => Observable.throw(this.error(error, state.url)));
	}

	private error(error:any, url:any): void {
		this.router.navigate(['login'], { queryParams: { returnUrl: url }});
    }
}