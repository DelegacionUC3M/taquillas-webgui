import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockerviewComponent } from './lockerview.component';

describe('LockerviewComponent', () => {
  let component: LockerviewComponent;
  let fixture: ComponentFixture<LockerviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockerviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockerviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
