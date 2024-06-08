import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutomatedTroubleshootingComponent } from './automated-troubleshooting.component';

describe('AutomatedTroubleshootingComponent', () => {
  let component: AutomatedTroubleshootingComponent;
  let fixture: ComponentFixture<AutomatedTroubleshootingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutomatedTroubleshootingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutomatedTroubleshootingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
