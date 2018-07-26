import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerNewLockerComponent } from './manager-new-locker.component';

describe('NewLockerComponent', () => {
  let component: ManagerNewLockerComponent;
  let fixture: ComponentFixture<ManagerNewLockerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerNewLockerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerNewLockerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
