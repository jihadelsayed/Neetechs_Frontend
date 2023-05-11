import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';

import { AuthorizationComponent } from './authorization/authorization.component';
import { JwtInterceptor } from './authorization/Jwt-interceptor.interceptor';
import { NotAuthGuard } from './authorization/services/not-auth.guard';
import { AuthGuard } from './authorization/services/auth.guard';




// header
import { LoginMenuComponent } from './header/login-menu/login-menu.component';
import { UserMenuComponent } from './header/user-menu/user-menu.component';
import { UserNotificationsMenuComponent } from './header/user-notifications-menu/user-notifications-menu.component';
import { MenuComponent } from './header/menu/menu.component';
import { SearchMenuComponent } from './header/search-menu/search-menu.component';
import { MenuContentComponent } from './header/menu/menu-content/menu-content.component';
import { AsideContentComponent } from './header/menu/menu-content/sub-menu/sub-menu-content/aside/aside-content/aside-content.component';
import { AsideComponent } from './header/menu/menu-content/sub-menu/sub-menu-content/aside/aside.component';
import { SubMenuContentComponent } from './header/menu/menu-content/sub-menu/sub-menu-content/sub-menu-content.component';
import { SubMenuComponent } from './header/menu/menu-content/sub-menu/sub-menu.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    AuthorizationComponent,
    HomeComponent,

    // header component
    HeaderComponent,
    LoginMenuComponent,
    UserMenuComponent,
    UserNotificationsMenuComponent,
    MenuComponent,
    SearchMenuComponent,
    AsideComponent,
    AsideContentComponent,
    MenuContentComponent,
    SubMenuComponent,
    SubMenuContentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },NotAuthGuard,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
