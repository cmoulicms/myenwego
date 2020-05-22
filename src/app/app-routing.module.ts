import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TourCountryComponent } from './tour-country/tour-country.component';
import { TourPriceComponent } from './tour-price/tour-price.component';
import { TourAvailableComponent } from './tour-available/tour-available.component';
import { TourOperatorsComponent } from './tour-operators/tour-operators.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthGuardService } from './auth-guard.service';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { TourFormComponent } from './tour-available/tour-form/tour-form.component';
import { OperatorFormComponent } from './tour-operators/operator-form/operator-form.component';


const routes: Routes = [
  {
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'tour-operators/operators/new',
    component: OperatorFormComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'tour-operators/operators/:id',
    component: OperatorFormComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'tour-operators',
    component: TourOperatorsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'tour-available',
    component: TourAvailableComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'tour-available/tours/new',
    component: TourFormComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'tour-price',
    component: TourPriceComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'tour-country',
    component: TourCountryComponent,
    canActivate: [AuthGuardService]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
