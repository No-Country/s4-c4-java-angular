
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { BottombarComponent } from '../components/bottombar/bottombar.component';
import { LoginComponent } from './public/login/login.component';
import { HomeComponent } from './private/home/home.component';
import { HeadbarComponent } from './../components/headbar/headbar.component';
import { CollectionComponent } from '../components/collection/collection.component';
import { TiendaComponent } from '../components/tienda/tienda.component';
import { OnBoardingComponent } from '../components/on-boarding/on-boarding.component';
import { OnBoardingPage1Component } from '../components/on-boarding-page1/on-boarding-page1.component';
import { OnBoardingPage2Component } from '../components/on-boarding-page2/on-boarding-page2.component';
import { OnBoardingPage3Component } from '../components/on-boarding-page3/on-boarding-page3.component';
import { OnBoardingpageStartComponent } from '../components/on-boardingpage-start/on-boardingpage-start.component';

@NgModule({
  declarations: [
    BottombarComponent,
    LoginComponent,
    HomeComponent,
    HeadbarComponent,
    CollectionComponent,
    TiendaComponent,
    OnBoardingComponent,
    OnBoardingPage1Component,
    OnBoardingPage2Component,
    OnBoardingPage3Component,
    OnBoardingpageStartComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
