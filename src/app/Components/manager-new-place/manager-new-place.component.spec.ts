import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ManagerNewPlaceComponent } from './manager-new-place.component';

describe('ManagerNewPlaceComponent', () => {
    let component: ManagerNewPlaceComponent;
    let fixture: ComponentFixture<ManagerNewPlaceComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
        declarations: [ ManagerNewPlaceComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ManagerNewPlaceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
