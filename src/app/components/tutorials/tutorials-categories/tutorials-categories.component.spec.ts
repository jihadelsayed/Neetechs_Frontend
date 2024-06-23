import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialsCategoriesComponent } from './tutorials-categories.component';

describe('TutorialsCategoriesComponent', () => {
  let component: TutorialsCategoriesComponent;
  let fixture: ComponentFixture<TutorialsCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorialsCategoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
