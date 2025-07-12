import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialNavigationComponent } from './tutorial-navigation.component';

describe('TutorialNavigationComponent', () => {
  let component: TutorialNavigationComponent;
  let fixture: ComponentFixture<TutorialNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorialNavigationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
