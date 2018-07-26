import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ManagerTableTypesComponent } from './manager-table-types.component';

describe('ManagerTableTypesComponent', () => {
  let component: ManagerTableTypesComponent;
  let fixture: ComponentFixture<ManagerTableTypesComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerTableTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerTableTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
