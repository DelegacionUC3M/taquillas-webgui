
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesTableComponent } from './types-table.component';

describe('TypesTableComponent', () => {
  let component: TypesTableComponent;
  let fixture: ComponentFixture<TypesTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TypesTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
