import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenapiToolsComponent } from './openapi-tools.component';

describe('OpenapiToolsComponent', () => {
  let component: OpenapiToolsComponent;
  let fixture: ComponentFixture<OpenapiToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenapiToolsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenapiToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
