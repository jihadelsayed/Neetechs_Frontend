import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartSidebarHeaderComponent } from './cart-sidebar-header.component';

describe('CartSidebarHeaderComponent', () => {
  let component: CartSidebarHeaderComponent;
  let fixture: ComponentFixture<CartSidebarHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartSidebarHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartSidebarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
