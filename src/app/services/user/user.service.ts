import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public SaveUserIdOnLocalStorage(userId: string): void {
    if (this.IsEmpty(userId)) {
      throw new Error("User don't exists, please do the login first.");
    }
    localStorage.setItem('userId', userId);
  }

  public GetUserIdFromLocalStorage(): string {
    const userId = localStorage.getItem('userId');
    if (this.IsEmpty(userId)) {
      throw new Error("User don't exists, please do the login first.");
    }

    return <string>userId;
  }

  private IsEmpty(str: string|null): boolean {
    return (!str || str.length === 0 );
  }
}
