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

    newPlace(building: string, zone: string, floor:number, school:number): Observable<any> {
        var json = '{"building": "' + building 
                    + '", "zone": "' + zone 
                    + '", "floor": "' + floor 
                    + '", "school": "' + school + '"}';
                    console.log(json);
        return this.http.post(this.getURL('place'), json, this.getOptions()).map(this.getData).catch(this.error);
    }

    modifyPlace(id: number, building: string, zone: string, floor:number, school:number): Observable<any> {
        var json = '{"building": "' + building 
                    + '", "zone": "' + zone 
                    + '", "floor": "' + floor 
                    + '", "school": "' + school +'"}';
        return this.http.put(this.getURL('place/' + id), json, this.getOptions()).map(this.getData).catch(this.error);
    }

    deletePlace(id: number) {
        return this.http.delete(this.getURL('place/' + id), this.getOptions()).map(this.getData).catch(this.error);
    }

    newLocker(number: number, type: number, place:number): Observable<any> {
        var json = '{"number": "' + number 
                    + '", "type": "' + type 
                    + '", "place": "' + place + '"}';
                    console.log(json);
        return this.http.post(this.getURL('locker'), json, this.getOptions()).map(this.getData).catch(this.error);
    }

    newLockers(number: number, endnumber:number, type: number, place:number): Observable<any> {
        var json = '{"number": "' + number 
                    + '", "type": "' + type 
                    + '", "place": "' + place 
                    + '", "endnumber": "' + endnumber + '"}';
                    console.log(json);
        return this.http.post(this.getURL('locker'), json, this.getOptions()).map(this.getData).catch(this.error);
    }

    modifyLocker(locker: Locker): Observable<any> {
        var json = '{' ;

        json = '{"number": "' + locker.number 
                + '", "status": "' + locker.status;

        if (locker.status != 0) {
                json = json + '", "user": "' + locker.user;
        }
        if (locker.qr != null) { 
                json = json + '", "qr": "' + locker.qr;
        } 
        json = json + '", "type": "' + locker.type
                + '", "place": "' + locker.place;
        if (locker.incidence) {
            json = json + '", "incidence": "' + '1';
        }
        else {
            json = json + '", "incidence": "' + '0';
        }
        json = json +'"}';
        return this.http.put(this.getURL('locker/' + locker.id), json, this.getOptions()).map(this.getData).catch(this.error);
    }

    deleteLocker(id: number) {
        return this.http.delete(this.getURL('locker/' + id), this.getOptions()).map(this.getData).catch(this.error);
    }

    getLockers():Observable<Locker[]> {
        return this.http.get(this.getURL('locker'), this.getOptions()).map(this.getData).catch(this.error);
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