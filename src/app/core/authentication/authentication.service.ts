import {Injectable, signal} from '@angular/core';
import {NewRegisterRequest} from "../../shared/entities/authentication/NewRegisterRequest";
import {LoginRequest} from "../../shared/entities/authentication/LoginRequest";
import {Router} from "@angular/router";

import { AuthService } from '../../firebase/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSignal = signal<any | null>(null);

  constructor(private router: Router,
              private auth: AuthService
            ) {

  }

  public async CreateNewRegister(request: NewRegisterRequest) : Promise<string> {
    var userId = await this.auth.CreateNewUser(request);
    return userId;
  }

  public get currentUserValue(): any | null {
    return this.currentUserSignal();
  }

  public Login(request: LoginRequest) {
      try {
        const user = this.auth.Login(request);
        this.currentUserSignal.set(user);
      } catch (error) {
        console.log(error);
      }
  }

  public Logout() {
    this.auth.Logout();
    this.currentUserSignal.set(null);
    this.router.navigate(['/login']);
  }

  public GetCurrentUser() {
    return this.auth.GetCurrentUser();
  }

  public GetCurrentUserId() : string | null {
    return this.auth.GetCurrentUser()?.uid ?? null;
  }
}
