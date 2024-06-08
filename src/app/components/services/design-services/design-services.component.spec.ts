import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignServicesComponent } from './design-services.component';

describe('DesignServicesComponent', () => {
  let component: DesignServicesComponent;
  let fixture: ComponentFixture<DesignServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
