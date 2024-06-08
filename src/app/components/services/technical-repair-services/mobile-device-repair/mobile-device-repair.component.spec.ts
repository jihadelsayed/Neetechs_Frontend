import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileDeviceRepairComponent } from './mobile-device-repair.component';

describe('MobileDeviceRepairComponent', () => {
  let component: MobileDeviceRepairComponent;
  let fixture: ComponentFixture<MobileDeviceRepairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileDeviceRepairComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileDeviceRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
