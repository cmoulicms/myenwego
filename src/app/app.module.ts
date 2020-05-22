import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { TourAvailableComponent } from './tour-available/tour-available.component';
import { TourCountryComponent } from './tour-country/tour-country.component';
import { TourPriceComponent } from './tour-price/tour-price.component';
import { TourOperatorsComponent } from './tour-operators/tour-operators.component';
import { F1indiaService } from './f1india.service';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { AuthService } from './auth.service';
import { AuthGuardService  } from './auth-guard.service';
import { UserService } from './user.service';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AdminAuthGuardService } from './admin-auth-guard.service';
import { TourFormComponent } from './tour-available/tour-form/tour-form.component';
import { OperatorService } from './operator.service';
import { OperatorFormComponent } from './tour-operators/operator-form/operator-form.component';



@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    SignInComponent,
    TourAvailableComponent,
    TourCountryComponent,
    TourPriceComponent,
    TourOperatorsComponent,
    TourFormComponent,
    OperatorFormComponent
  ],
  entryComponents: [
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    LayoutModule,
    MaterialModule,
    MatListModule,
    MatGridListModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    
  ],
  providers: [
    F1indiaService,
    AuthService,
    AuthGuardService,
    UserService,
    AdminAuthGuardService,
    OperatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
