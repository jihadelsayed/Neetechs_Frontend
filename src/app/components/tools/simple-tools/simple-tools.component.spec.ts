import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleToolsComponent } from './simple-tools.component';

describe('SimpleToolsComponent', () => {
  let component: SimpleToolsComponent;
  let fixture: ComponentFixture<SimpleToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleToolsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
