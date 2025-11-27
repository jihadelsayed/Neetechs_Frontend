import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeValueComponent } from './home-value.component';

describe('HomeValueComponent', () => {
  let component: HomeValueComponent;
  let fixture: ComponentFixture<HomeValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeValueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
