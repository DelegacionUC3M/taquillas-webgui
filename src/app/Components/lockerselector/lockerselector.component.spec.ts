import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockerselectorComponent } from './lockerselector.component';

describe('LockerselectorComponent', () => {
  let component: LockerselectorComponent;
  let fixture: ComponentFixture<LockerselectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LockerselectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LockerselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
