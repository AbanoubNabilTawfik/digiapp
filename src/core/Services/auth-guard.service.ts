import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor( private router: Router) {}

  canActivate(): boolean {
    let isLoggedIn= localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/auth/login']);
      return false;
    }
  } 

}
