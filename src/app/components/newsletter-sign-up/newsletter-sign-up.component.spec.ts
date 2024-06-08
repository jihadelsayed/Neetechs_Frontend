import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsletterSignUpComponent } from './newsletter-sign-up.component';

describe('NewsletterSignUpComponent', () => {
  let component: NewsletterSignUpComponent;
  let fixture: ComponentFixture<NewsletterSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsletterSignUpComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsletterSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
