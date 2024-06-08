import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceUpgradesComponent } from './maintenance-upgrades.component';

describe('MaintenanceUpgradesComponent', () => {
  let component: MaintenanceUpgradesComponent;
  let fixture: ComponentFixture<MaintenanceUpgradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaintenanceUpgradesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceUpgradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
