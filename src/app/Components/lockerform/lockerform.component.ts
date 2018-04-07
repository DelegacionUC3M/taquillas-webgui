import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-lockerform',
  templateUrl: './lockerform.component.html',
  styleUrls: ['./lockerform.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LockerformComponent implements OnInit {
  name = new FormControl();
  constructor() { }

  ngOnInit() {
  }

}
