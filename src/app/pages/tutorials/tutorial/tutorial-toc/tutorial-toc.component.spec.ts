import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialTocComponent } from './tutorial-toc.component';

describe('TutorialTocComponent', () => {
  let component: TutorialTocComponent;
  let fixture: ComponentFixture<TutorialTocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorialTocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialTocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
