import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'manager-locker',
    templateUrl: './manager-locker.component.html',
    styleUrls: ['./manager-locker.component.css'],
    encapsulation: ViewEncapsulation.None
})

@Injectable()
export class ManagerLockerComponent implements OnInit {

    constructor () {

    }
    
    ngOnInit(): void {
  
    }

}
