import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { UserLogin } from '../../Classes/UserLogin';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {
    private apiURL = 'https://delegacion.uc3m.es/baimen/';

    constructor(private http:Http) {
      
    }

    login(userLogin:UserLogin):Observable<boolean> {
        let data = JSON.stringify({'nia':userLogin.login, 'password':userLogin.password});
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.getURL('login'), data, options).map(this.getData).catch(this.error);
    }

    verify():Observable<Response> {
        let token = (sessionStorage.getItem('token')) ? sessionStorage.getItem('token') : 'falta token';
        let headers = new Headers();
        headers.append("Authorization", "Bearer " + token);
        let options = new RequestOptions({ headers: headers });
        return this.http.get(this.getURL('verify'), options).catch(this.error);
    }

    logout():void {
        sessionStorage.removeItem('token');
    }

    private error(error:any) {
        let err = error.json();
        let msg = (err.error[0]) ? err.error[0] : 'Error desconocido';
        return Observable.throw(msg);
    }

    private getData(data:Response) {
        let info = data.json();
        if (info && info.token){
            sessionStorage.setItem('token', info.token);
            return true;
        }
        return false;
    }

    private getURL(endPoint:String) {
        return this.apiURL + endPoint;
    }
}