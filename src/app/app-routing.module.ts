import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { headerRoutes } from './header/header-routing.module';

const routes: Routes = [
  // authentication component
  //{ path:'',component: HomeComponent,canActivate:[NotAuthGuard] },
  //{ path:'', pathMatch:'full', redirectTo:'home' ,component: AppComponent,canActivate:[AuthGuard] },
  { path:'home' ,component: HomeComponent },
  { path:'**',component: HomeComponent },

];

@NgModule({
  imports: [
    RouterModule.forChild(headerRoutes),
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy',useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
