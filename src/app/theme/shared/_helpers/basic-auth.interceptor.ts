// angular import
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

// project import
import { environment } from 'src/environments/environment';
import { AuthenticationService } from '../service/authentication.service';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
  // constructor
  constructor(private authenticationService: AuthenticationService) {}

  // public method
  intercept(request: HttpRequest<string>, next: HttpHandler): Observable<HttpEvent<string>> {
    // add auth header with jwt if user is logged in and request is to the api url
    const currentUser = this.authenticationService.currentUserValue;
    const isLoggedIn = currentUser && currentUser.serviceToken;
    const isApiUrl = request.url.startsWith(environment.draftFcApiUrl);
    if (isLoggedIn && isApiUrl) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.serviceToken}`
        }
      });
    }

    return next.handle(request);
  }
}
