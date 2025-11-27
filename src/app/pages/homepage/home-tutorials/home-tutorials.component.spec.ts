import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTutorialsComponent } from './home-tutorials.component';

describe('HomeTutorialsComponent', () => {
  let component: HomeTutorialsComponent;
  let fixture: ComponentFixture<HomeTutorialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeTutorialsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeTutorialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
