import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalProductsListComponent } from './digital-products-list.component';

describe('DigitalProductsListComponent', () => {
  let component: DigitalProductsListComponent;
  let fixture: ComponentFixture<DigitalProductsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalProductsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
