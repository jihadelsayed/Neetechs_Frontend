import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleAiToolComponent } from './simple-ai-tool.component';

describe('SimpleAiToolComponent', () => {
  let component: SimpleAiToolComponent;
  let fixture: ComponentFixture<SimpleAiToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleAiToolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleAiToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
