import { Injectable } from '@angular/core';

import { getAuth, Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, connectAuthEmulator, updateProfile, signOut } from "firebase/auth";
import { ClientService } from '../client/client.service';
import { NewRegisterRequest } from '../../shared/entities/authentication/NewRegisterRequest';
import { LoginRequest } from '../../shared/entities/authentication/LoginRequest';
import { environment } from 'src/environments/environment';
import { AthleteService } from '../../core/athlete/athlete.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private firebaseAuth: Auth;

  constructor(firebaseClient: ClientService,
        private athleteService: AthleteService
  ) 
  { 
    this.firebaseAuth = getAuth(firebaseClient.getApp());
    if (!environment.production) {
      connectAuthEmulator(this.firebaseAuth, "http://127.0.0.1:9099");
    }
  }

  public async CreateNewUser(request: NewRegisterRequest) : Promise<string> {
    var user = await createUserWithEmailAndPassword(this.firebaseAuth, request.email, request.password)
        .then((userCredential) => {
            return userCredential.user;
        })
        .catch((error) => {
            throw error;
        });
    updateProfile(user, {
          displayName: request.firstName + " " + request.lastName
        })
    return user.uid;
  }

  public Login(request: LoginRequest) {
    let user: any;

    signInWithEmailAndPassword(this.firebaseAuth, request.email, request.password)
        .then((userCredential) => {
          user = userCredential.user;
        })
        .catch((error) => {
            throw error;
        });

    return user;
  }

  public Logout() {
    signOut(this.firebaseAuth);
  }

  public GetCurrentUser() {
    return this.firebaseAuth.currentUser;
  }

}
