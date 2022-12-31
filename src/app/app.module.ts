import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { JwtInterceptor } from './authorization/Jwt-interceptor.interceptor';
import { NotAuthGuard } from './authorization/services/not-auth.guard';
import { AuthGuard } from './authorization/services/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginMenuComponent } from './header/login-menu/login-menu.component';
import { UserMenuComponent } from './header/user-menu/user-menu.component';
import { UserNotificationsMenuComponent } from './header/user-notifications-menu/user-notifications-menu.component';
import { MenuComponent } from './header/menu/menu.component';
import { SearchMenuComponent } from './header/search-menu/search-menu.component';
import { MaterialModule } from './material';

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
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
