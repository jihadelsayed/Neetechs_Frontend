import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerLaptopRepairComponent } from './computer-laptop-repair.component';

describe('ComputerLaptopRepairComponent', () => {
  let component: ComputerLaptopRepairComponent;
  let fixture: ComponentFixture<ComputerLaptopRepairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComputerLaptopRepairComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComputerLaptopRepairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
