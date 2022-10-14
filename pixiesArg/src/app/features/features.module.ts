import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { BottombarComponent } from '../components/bottombar/bottombar.component';
import { LoginComponent } from './public/login/login.component';
import { HomeComponent } from './private/home/home.component';
import { HeadbarComponent } from './../components/headbar/headbar.component';
import { PixelButtonComponent } from '../components/pixel-button/pixel-button.component';
import { CollectionComponent } from '../components/collection/collection.component';
import { PixelFieldComponent } from '../components/pixel-field/pixel-field.component';

@NgModule({
  declarations: [
    BottombarComponent,
    LoginComponent,
    HomeComponent,
    HeadbarComponent,
    PixelButtonComponent,
    CollectionComponent,
    PixelFieldComponent,
  ],
  imports: [CommonModule, FeaturesRoutingModule],
})
export class FeaturesModule {}
