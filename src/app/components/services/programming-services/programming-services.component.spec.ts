import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammingServicesComponent } from './programming-services.component';

describe('ProgrammingServicesComponent', () => {
  let component: ProgrammingServicesComponent;
  let fixture: ComponentFixture<ProgrammingServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgrammingServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgrammingServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
