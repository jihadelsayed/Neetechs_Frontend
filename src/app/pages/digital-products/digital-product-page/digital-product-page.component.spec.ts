import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalProductPageComponent } from './digital-product-page.component';

describe('DigitalProductPageComponent', () => {
  let component: DigitalProductPageComponent;
  let fixture: ComponentFixture<DigitalProductPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalProductPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
