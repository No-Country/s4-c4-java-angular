import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FeaturesModule } from './features/features.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieModule } from 'ngx-cookie';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadbarComponent } from './components/headbar/headbar.component';
import { BottombarComponent } from './components/bottombar/bottombar.component';


@NgModule({
  declarations: [AppComponent, HeadbarComponent, BottombarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeaturesModule,
    ReactiveFormsModule,
    HttpClientModule,
    CookieModule.withOptions(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
