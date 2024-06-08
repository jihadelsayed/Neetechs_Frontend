import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticToolsComponent } from './diagnostic-tools.component';

describe('DiagnosticToolsComponent', () => {
  let component: DiagnosticToolsComponent;
  let fixture: ComponentFixture<DiagnosticToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiagnosticToolsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiagnosticToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
