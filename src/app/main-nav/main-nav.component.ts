import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { SignInComponent } from '../sign-in/sign-in.component';
import * as firebase from 'firebase/app';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';
import { AngularFireAuth } from '@angular/fire/auth/angular-fire-auth';
@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  user$: Observable<firebase.User>;
  // appUser: AppUser;


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    
  constructor( private afAuth: AngularFireAuth, private auth: AuthService, private dialog: MatDialog, private breakpointObserver: BreakpointObserver) {
    this.user$ = afAuth.authState;
    // auth.appUser$.subscribe(appUser => this.appUser = appUser);
  }

 
  openDialog() {
    this.dialog.open(SignInComponent);
  }

  logout() {
    this.afAuth.signOut();
  }

}
