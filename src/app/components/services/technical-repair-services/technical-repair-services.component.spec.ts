import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalRepairServicesComponent } from './technical-repair-services.component';

describe('TechnicalRepairServicesComponent', () => {
  let component: TechnicalRepairServicesComponent;
  let fixture: ComponentFixture<TechnicalRepairServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnicalRepairServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicalRepairServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
