import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSidebarHeaderComponent } from './mobile-sidebar-header.component';

describe('MobileSidebarHeaderComponent', () => {
  let component: MobileSidebarHeaderComponent;
  let fixture: ComponentFixture<MobileSidebarHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileSidebarHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileSidebarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
