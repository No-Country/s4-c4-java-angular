
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { BottombarComponent } from '../components/bottombar/bottombar.component';
import { LoginComponent } from './public/login/login.component';
import { HomeComponent } from './private/home/home.component';
import { HeadbarComponent } from './../components/headbar/headbar.component';
import { CollectionComponent } from '../components/collection/collection.component';

@NgModule({
  declarations: [
    BottombarComponent,
    LoginComponent,
    HomeComponent,
    HeadbarComponent,
    CollectionComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
