import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTypeComponent } from './new-type.component';

describe('NewTypeComponent', () => {
  let component: NewTypeComponent;
  let fixture: ComponentFixture<NewTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
