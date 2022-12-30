import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { NotAuthGuard } from './authorization/services/not-auth.guard';

const routes: Routes = [
  // authentication component
  { path:'', pathMatch:'full', redirectTo:'home'},
  //{ path:'', pathMatch:'full', redirectTo:'home' ,component: AppComponent,canActivate:[AuthGuard] },
  { path:'home' ,component: AppComponent,canActivate:[NotAuthGuard] },
  { path:'**',component: NotFoundComponent,canActivate:[NotAuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy',useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
