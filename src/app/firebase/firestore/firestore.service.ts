import { Injectable } from '@angular/core';
import { getFirestore, connectFirestoreEmulator, Firestore } from "firebase/firestore";
import { ClientService } from '../client/client.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private firebaseFirestore: Firestore;

  constructor(firebaseClient: ClientService) { 
    this.firebaseFirestore = getFirestore(firebaseClient.getApp());
    if (!environment.production) {
      connectFirestoreEmulator(this.firebaseFirestore, "127.0.0.1", 8080);
    }
  }

  public GetFirestore() {
    return this.firebaseFirestore;
  }
  
}

export const DATABASE_DATA_PATHS = {
  USER_DETAIL: 'UserDetail'
}
