import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelCrudComponent } from './travel-crud.component';

describe('TravelCrudComponent', () => {
  let component: TravelCrudComponent;
  let fixture: ComponentFixture<TravelCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelCrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
