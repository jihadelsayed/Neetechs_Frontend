import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNotificationsMenuComponent } from './user-notifications-menu.component';

describe('UserNotificationsMenuComponent', () => {
  let component: UserNotificationsMenuComponent;
  let fixture: ComponentFixture<UserNotificationsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserNotificationsMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserNotificationsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
