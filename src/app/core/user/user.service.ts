import { Injectable } from '@angular/core';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { DATABASE_DATA_PATHS, FirestoreService } from 'src/app/firebase/firestore/firestore.service';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { UserDetail } from 'src/app/firebase/entities/user-detail';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: FirestoreService, private auth: AuthenticationService) { }

  public async GetUser(id: string) {
    const userRef = doc(this.db.GetFirestore(), 'users', id);
    const user = await getDoc(userRef);
    return user.data();
  }

  public async GetCurrentUserDetails() : Promise<UserDetail> {
    var userId = this.auth.GetCurrentUserId(); 
    if (userId == null) {
      throw new Error('User not found');
    }
    const userRef = doc(this.db.GetFirestore(), DATABASE_DATA_PATHS.USER_DETAIL, userId);
    const user = await getDoc(userRef);
    return user.data() as UserDetail;
  }

  public async CreateNewUser(id: string, firstName: string, lastName: string, email: string) {
    const user: UserDetail = {
      id: id,
      firstName: firstName,
      lastName: lastName,
      email: email,
      contactNumber: '',
      country: 'Brasil',
      state: '',
      city: '',
      shortBio: '',
      profilePicture: '',
      permissions: [],
      createdAt: new Date(),
      updatedAt: new Date()
    }
    await this.UpsertUser(id, user);
  }

  public async UpsertUser(id: string, user: UserDetail) {
    const userRef = doc(this.db.GetFirestore(), DATABASE_DATA_PATHS.USER_DETAIL, id);
    await setDoc(userRef, user);
  }
}
