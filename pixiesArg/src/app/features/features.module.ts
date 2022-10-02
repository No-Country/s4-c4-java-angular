import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { BottombarComponent } from '../components/bottombar/bottombar.component';
import { LoginComponent } from './public/login/login.component';
import { HomeComponent } from './private/home/home.component';


@NgModule({
  declarations: [
    BottombarComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
