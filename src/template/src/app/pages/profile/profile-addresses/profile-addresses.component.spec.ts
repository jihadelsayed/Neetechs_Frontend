import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAddressesComponent } from './profile-addresses.component';

describe('ProfileAddressesComponent', () => {
  let component: ProfileAddressesComponent;
  let fixture: ComponentFixture<ProfileAddressesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileAddressesComponent]
    });
    fixture = TestBed.createComponent(ProfileAddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
