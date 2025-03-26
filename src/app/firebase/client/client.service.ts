import { Injectable } from '@angular/core';

import { initializeApp, FirebaseApp } from 'firebase/app';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private app: FirebaseApp;

  constructor() {
    this.app = initializeApp(environment.firebase);

  }

  public getApp(): FirebaseApp {
    return this.app;
  }

}
