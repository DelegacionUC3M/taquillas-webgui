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
export class PublicApiService {
    private apiURL = 'https://delegacion.uc3m.es/taquillas_api/';

    constructor(private http:Http) {
      
    }

    getLockers():Observable<Locker[]> {
        return this.http.get(this.getURL('locker')).map(this.getData).catch(this.error);
    }

    getLocker(lockerId:number):Observable<Locker> {
        return this.http.get(this.getURL('locker/' + lockerId)).map(this.getData).catch(this.error);
    }

    readQR(qr:number):Observable<Locker> {
        return this.http.get(this.getURL('qr/' + qr)).map(this.getData).catch(this.error);
    }

    getPlaces():Observable<Place[]> {
        return this.http.get(this.getURL('place')).map(this.getData).catch(this.error);
    }

    getPlace(placeId:number):Observable<Place> {
        return this.http.get(this.getURL('place/' + placeId)).map(this.getData).catch(this.error);
    }

    getTypes():Observable<Type[]> {
        return this.http.get(this.getURL('type')).map(this.getData).catch(this.error);
    }

    getType(typeId:number):Observable<Type> {
        return this.http.get(this.getURL('type/' + typeId)).map(this.getData).catch(this.error);
    }

    private error(error:any) {
        let err = error.json();
        let msg = (err.error[0]) ? err.error[0] : 'Error desconocido';
        return Observable.throw(msg);
    }

    private getData(data:Response) {
        let info = data.json();
        return info || [];
    }

    private getURL(endPoint:String) {
        return this.apiURL + endPoint;
    }
}