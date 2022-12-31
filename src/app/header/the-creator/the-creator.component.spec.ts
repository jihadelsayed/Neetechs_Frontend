import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheCreatorComponent } from './the-creator.component';

describe('TheCreatorComponent', () => {
  let component: TheCreatorComponent;
  let fixture: ComponentFixture<TheCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheCreatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TheCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
