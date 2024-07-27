import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericSliderComponent } from './generic-slider.component';

describe('GenericSliderComponent', () => {
  let component: GenericSliderComponent;
  let fixture: ComponentFixture<GenericSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
