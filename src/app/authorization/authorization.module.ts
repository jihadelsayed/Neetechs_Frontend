import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorizationComponent } from './authorization.component';

@NgModule({
  declarations: [AuthorizationComponent],
  imports: [CommonModule],
  exports: [AuthorizationComponent],
  
})
export class AuthorizationModule {}
