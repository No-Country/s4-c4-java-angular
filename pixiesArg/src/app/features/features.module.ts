import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { BottombarComponent } from '../components/bottombar/bottombar.component';
import { LoginComponent } from './public/login/login.component';


@NgModule({
  declarations: [
    BottombarComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
