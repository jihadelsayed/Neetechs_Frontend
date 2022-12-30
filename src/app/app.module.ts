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

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    NotFoundComponent,
    AuthorizationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },NotAuthGuard,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
