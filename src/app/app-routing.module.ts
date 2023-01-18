import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { NotAuthGuard } from './authorization/services/not-auth.guard';

const routes: Routes = [
  // authentication component
  //{ path:'',component: HomeComponent,canActivate:[NotAuthGuard] },
  //{ path:'', pathMatch:'full', redirectTo:'home' ,component: AppComponent,canActivate:[AuthGuard] },
  { path:'home' ,component: HomeComponent },
  { path:'**',component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy',useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
