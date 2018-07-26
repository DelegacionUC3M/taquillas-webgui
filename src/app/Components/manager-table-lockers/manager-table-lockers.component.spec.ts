
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerTableLockersComponent } from './manager-table-lockers.component';

describe('PlacesTableComponent', () => {
  let component: ManagerTableLockersComponent;
  let fixture: ComponentFixture<ManagerTableLockersComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerTableLockersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerTableLockersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
