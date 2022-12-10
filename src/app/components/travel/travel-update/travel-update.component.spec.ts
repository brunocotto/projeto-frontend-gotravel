import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelUpdateComponent } from './travel-update.component';

describe('TravelUpdateComponent', () => {
  let component: TravelUpdateComponent;
  let fixture: ComponentFixture<TravelUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
