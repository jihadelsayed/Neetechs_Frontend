import { ComponentFixture, TestBed } from '@angular/core/testing';

import { namesComponent } from './names.component';

describe('namesComponent', () => {
  let component: namesComponent;
  let fixture: ComponentFixture<namesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ namesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(namesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
