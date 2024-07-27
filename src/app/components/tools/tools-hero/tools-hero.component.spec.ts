import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsHeroComponent } from './tools-hero.component';

describe('ToolsHeroComponent', () => {
  let component: ToolsHeroComponent;
  let fixture: ComponentFixture<ToolsHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolsHeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToolsHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
