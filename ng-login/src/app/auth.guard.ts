import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './Services/login.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  canActivate() {
    if (this.loginService.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['/home']);
      return false;
    }
  }

}


