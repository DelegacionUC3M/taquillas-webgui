import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerlockerlistComponent } from './managerlockerlist.component';

describe('ManagerlockerlistComponent', () => {
  let component: ManagerlockerlistComponent;
  let fixture: ComponentFixture<ManagerlockerlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerlockerlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerlockerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
