import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { UserLogin } from '../../Classes/UserLogin';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {
  private apiURL = 'http://....';

  constructor(
    private http:Http
  ) {
    
  }

  //login(userLogin:UserLogin):Observable<boolean>
  login(userLogin:UserLogin):boolean {
    if(userLogin.login == "123" && userLogin.password == "password"){
      sessionStorage.setItem('login', "ok");
      return true;
    }
    
    //let headers = new Headers({'user':userLogin.login, 'password':userLogin.password});
    //let options = new RequestOptions({'headers':headers});
    //return this.http.get(this.getURL('login'), options).map(this.getData).catch(this.error);
    return false;
  }

  logout():void {
    sessionStorage.removeItem('token');
  }

  private error (error:any) {
    let msg = (error.message) ? error.message : 'Error desconocido';
    console.error(msg);
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