import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FeaturesRoutingModule } from './features-routing.module';
import { LoginComponent } from './public/login/login.component';
import { HomeComponent } from './private/home/home.component';

import { PixelButtonComponent } from '../components/pixel-button/pixel-button.component';
import { CollectionComponent } from '../components/collection/collection.component';
import { TiendaComponent } from '../components/tienda/tienda.component';

import { OnBoardingComponent } from '../components/on-boarding/on-boarding.component';
import { OnBoardingPage1Component } from '../components/on-boarding-page1/on-boarding-page1.component';
import { OnBoardingPage2Component } from '../components/on-boarding-page2/on-boarding-page2.component';
import { OnBoardingPage3Component } from '../components/on-boarding-page3/on-boarding-page3.component';
import { OnBoardingpageStartComponent } from '../components/on-boardingpage-start/on-boardingpage-start.component';
import { PixelFieldComponent } from '../components/pixel-field/pixel-field.component';
import { RegisterComponent } from './public/register/register.component';
import { CharacterCardComponent } from '../components/character-card/character-card.component';
import { LogoutCounterComponent } from '../components/logout-counter/logout-counter.component';
import { LogoutComponent } from './private/logout/logout.component';
import { MyAccountCardComponent } from '../components/my-account-card/my-account-card.component';
import { MyAccountComponent } from './private/my-account/my-account.component';
import { StoreComponent } from './private/store/store.component';
import { StoreItemComponent } from '../components/store-item/store-item.component';

@NgModule({
  declarations: [

    HomeComponent,

    CollectionComponent,
    TiendaComponent,
    OnBoardingComponent,
    OnBoardingPage1Component,
    OnBoardingPage2Component,
    OnBoardingPage3Component,
    OnBoardingpageStartComponent,
    CollectionComponent,
    PixelFieldComponent,
    RegisterComponent,
    CharacterCardComponent,
    LogoutCounterComponent,
    LogoutComponent,
    PixelButtonComponent,
    LoginComponent,
    MyAccountCardComponent,
    MyAccountComponent,
    StoreComponent,
    StoreItemComponent,
  ],
  imports: [CommonModule, FeaturesRoutingModule, ReactiveFormsModule, FormsModule],
})
export class FeaturesModule {}
