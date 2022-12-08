import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelReadComponent } from './travel-read.component';

describe('TravelReadComponent', () => {
  let component: TravelReadComponent;
  let fixture: ComponentFixture<TravelReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
