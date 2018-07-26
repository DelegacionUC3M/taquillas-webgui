import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ManagerNewTypeComponent } from './manager-new-type.component';

describe('ManagerNewTypeComponent', () => {
  let component: ManagerNewTypeComponent;
  let fixture: ComponentFixture<ManagerNewTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerNewTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerNewTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
