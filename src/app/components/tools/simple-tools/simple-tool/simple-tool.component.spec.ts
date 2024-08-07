import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleToolComponent } from './simple-tool.component';

describe('SimpleToolComponent', () => {
  let component: SimpleToolComponent;
  let fixture: ComponentFixture<SimpleToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleToolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
