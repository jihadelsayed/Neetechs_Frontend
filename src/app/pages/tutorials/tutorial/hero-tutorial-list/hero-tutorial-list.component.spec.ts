import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTutorialListComponent } from './hero-tutorial-list.component';

describe('HeroTutorialListComponent', () => {
  let component: HeroTutorialListComponent;
  let fixture: ComponentFixture<HeroTutorialListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroTutorialListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroTutorialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
