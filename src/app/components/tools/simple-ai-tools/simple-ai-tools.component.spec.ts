import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleAiToolsComponent } from './simple-ai-tools.component';

describe('SimpleAiToolsComponent', () => {
  let component: SimpleAiToolsComponent;
  let fixture: ComponentFixture<SimpleAiToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleAiToolsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleAiToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
