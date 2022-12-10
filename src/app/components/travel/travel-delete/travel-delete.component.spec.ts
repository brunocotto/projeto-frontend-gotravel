import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelDeleteComponent } from './travel-delete.component';

describe('TravelDeleteComponent', () => {
  let component: TravelDeleteComponent;
  let fixture: ComponentFixture<TravelDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
