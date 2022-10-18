import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FeaturesRoutingModule } from './features-routing.module';
import { LoginComponent } from './public/login/login.component';
import { HomeComponent } from './private/home/home.component';

import { PixelButtonComponent } from '../components/pixel-button/pixel-button.component';
import { CollectionComponent } from '../components/collection/collection.component';
import { PixelFieldComponent } from '../components/pixel-field/pixel-field.component';
import { RegisterComponent } from './public/register/register.component';
import { CharacterCardComponent } from '../components/character-card/character-card.component';
import { LogoutCounterComponent } from '../components/logout-counter/logout-counter.component';
import { LogoutComponent } from './private/logout/logout.component';
import { MyAccountCardComponent } from '../components/my-account-card/my-account-card.component';
import { MyAccountComponent } from './private/my-account/my-account.component';

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    PixelButtonComponent,
    CollectionComponent,
    PixelFieldComponent,
    RegisterComponent,
    CharacterCardComponent,
    LogoutCounterComponent,
    LogoutComponent,
    MyAccountCardComponent,
    MyAccountComponent,
  ],
  imports: [CommonModule, FeaturesRoutingModule, ReactiveFormsModule, FormsModule],
})
export class FeaturesModule {}
