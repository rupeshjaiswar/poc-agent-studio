import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../modules/login/services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard {

  constructor(private _authService: AuthenticationService, private _route: Router) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this._authService.isUserLoggedIn()) {
      return true;
    }
    this._route.navigateByUrl("/");
    return false;
  }
}
