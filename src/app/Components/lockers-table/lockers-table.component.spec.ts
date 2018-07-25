
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { LockersTableComponent } from './lockers-table.component';

describe('PlacesTableComponent', () => {
  let component: LockersTableComponent;
  let fixture: ComponentFixture<LockersTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LockersTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LockersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
