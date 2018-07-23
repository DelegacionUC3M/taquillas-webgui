import { Injectable } from '@angular/core';
import { Http, Headers, Request, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Locker } from '../../Classes/Locker';
import { Place } from '../../Classes/Place';
import { Type } from '../../Classes/Type';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ManagerApiService {
    private apiURL = 'https://delegacion.uc3m.es/taquillas_api/manager/';

    constructor(private http: Http) {

    }

    newType(name: string, price: number): Observable<any> {
        var json = '{"name": "' + name + '", "price": "' + price + '"}';
        return this.http.post(this.getURL('type'), json, this.getOptions()).map(this.getData).catch(this.error);
    }

    modifyType(id: number, name: string, price: number): Observable<any> {
        var json = '{"name": "' + name + '", "price": "' + price + '"}';
        return this.http.put(this.getURL('type/' + id), json, this.getOptions()).map(this.getData).catch(this.error);
    }

    deleteType(id: number) {
        return this.http.delete(this.getURL('type/' + id), this.getOptions()).map(this.getData).catch(this.error);
    }

    private error(error: any) {
        let err = error.json();
        let msg = (err.error[0]) ? err.error[0] : 'Error desconocido';
        return Observable.throw(msg);
    }

    private getData(data: Response) {
        let info = data.json();
        return info || [];
    }

    private getURL(endPoint: String) {
        return this.apiURL + endPoint;
    }

    private getOptions(): RequestOptions {
        let token = (sessionStorage.getItem('token')) ? sessionStorage.getItem('token') : 'falta token';
        let headers = new Headers();
        headers.append("Authorization", "Bearer " + token);
        headers.append("Content-Type", "application/json")
        let options = new RequestOptions({ headers: headers });
        return options;
    }
}