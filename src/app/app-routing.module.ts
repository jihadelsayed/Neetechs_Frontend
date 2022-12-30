import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotAuthGuard } from './authentication/services/not-auth.guard';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { AuthGuard } from './authentication/services/auth.guard';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  // authentication component
  { path:'', pathMatch:'full', redirectTo:'home'},

  //{ path:'', pathMatch:'full', redirectTo:'home' ,component: AppComponent,canActivate:[AuthGuard] },
  { path:'home' ,component: AppComponent,canActivate:[NotAuthGuard] },

  { path:'signUp',component: SignUpComponent,canActivate:[NotAuthGuard] },
  { path:'signIn',component: SignInComponent,canActivate:[NotAuthGuard] },
  { path:'**',component: NotFoundComponent,canActivate:[NotAuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy',useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
