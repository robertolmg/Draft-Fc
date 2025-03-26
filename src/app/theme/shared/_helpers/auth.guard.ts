// angular import
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

// project import
import {AuthenticationService} from '../../../core/authentication/authentication.service';
import { APPLICATION_ROUTES } from 'src/app/core/shared/enums';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  // constructor
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  // public method
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = this.authenticationService.GetCurrentUser();
    if (currentUser) {
      // logged in so return true
      return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate([APPLICATION_ROUTES.LOGIN], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
