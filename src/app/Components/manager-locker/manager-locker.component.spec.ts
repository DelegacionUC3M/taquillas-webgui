import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerLockerComponent } from './manager-locker.component';

describe('ManagerlockerlistComponent', () => {
  let component: ManagerLockerComponent;
  let fixture: ComponentFixture<ManagerLockerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerLockerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerLockerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
