import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorplateComponent } from './colorplate.component';

describe('ColorplateComponent', () => {
  let component: ColorplateComponent;
  let fixture: ComponentFixture<ColorplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
