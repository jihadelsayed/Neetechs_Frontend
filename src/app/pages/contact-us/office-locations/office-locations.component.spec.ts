import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeLocationsComponent } from './office-locations.component';

describe('OfficeLocationsComponent', () => {
  let component: OfficeLocationsComponent;
  let fixture: ComponentFixture<OfficeLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfficeLocationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
