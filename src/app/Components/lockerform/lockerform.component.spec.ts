import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockerformComponent } from './lockerform.component';

describe('LockerformComponent', () => {
  let component: LockerformComponent;
  let fixture: ComponentFixture<LockerformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockerformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockerformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
