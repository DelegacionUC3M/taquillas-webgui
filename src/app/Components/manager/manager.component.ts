import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-managerhome',
    templateUrl: './manager.component.html',
    styleUrls: ['./manager.component.css'],
    encapsulation: ViewEncapsulation.None
})

@Injectable()
export class ManagerComponent implements OnInit {

    constructor(private http: HttpClient) {

    }

    ngOnInit(): void {
 
    }
}
