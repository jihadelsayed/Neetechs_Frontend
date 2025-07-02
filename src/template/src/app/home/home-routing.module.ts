import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElectronicsComponent } from './electronics/electronics.component';

const routes: Routes = [
  {
    path: '',
    component: ElectronicsComponent,
    title: 'Phonetech.techs.se - Phone Tech && Dataservice',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
