import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialAdsComponent } from './tutorial-ads.component';

describe('TutorialAdsComponent', () => {
  let component: TutorialAdsComponent;
  let fixture: ComponentFixture<TutorialAdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorialAdsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorialAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
