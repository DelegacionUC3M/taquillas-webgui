import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ManagerPlaceComponent } from './manager-place.component';

describe('ManagerPlaceComponent', () => {
    let component: ManagerPlaceComponent;
    let fixture: ComponentFixture<ManagerPlaceComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ManagerPlaceComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ManagerPlaceComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
