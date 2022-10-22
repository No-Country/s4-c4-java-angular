import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { CollectionViewComponent } from './private/collection/collection-view.component';
import { HomeComponent } from './private/home/home.component';
import { LogoutComponent } from './private/logout/logout.component';
import { MyAccountComponent } from './private/my-account/my-account.component';
import { StoreComponent } from './private/store/store.component';
import { LoginComponent } from './public/login/login.component';
import { OnBoardingViewComponent } from './public/on-boarding-view/on-boarding-view.component';
import { RegisterComponent } from './public/register/register.component';

const routes: Routes = [
  { path: '', component: OnBoardingViewComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard] },
  {
    path: 'my-account',
    component: MyAccountComponent,
    canActivate: [AuthGuard],
  },
  { path: 'store', component: StoreComponent, canActivate: [AuthGuard] },
  {
    path: 'collection',
    component: CollectionViewComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
