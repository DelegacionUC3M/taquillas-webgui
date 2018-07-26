
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerTablePlacesComponent } from './manager-table-places.component';

describe('ManagerTablePlacesComponent', () => {
  let component: ManagerTablePlacesComponent;
  let fixture: ComponentFixture<ManagerTablePlacesComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerTablePlacesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerTablePlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
