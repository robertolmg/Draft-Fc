// angular import
import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

// project import
import { User } from '../_helpers/user';

// Import the 'map' operator from 'rxjs/operators'

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSignal = signal<User | null>(null);

  constructor(
    private router: Router,
    private http: HttpClient
  ) {
    // Initialize the signal with the current user from localStorage
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.currentUserSignal.set(JSON.parse(storedUser) as User);
    }
  }

  public get currentUserValue(): User | null {
    // Access the current user value from the signal
    return this.currentUserSignal();
  }

  logout() {
    // Remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    // Update the signal to null
    this.currentUserSignal.set(null);
    this.router.navigate(['/auth/auth1/login']);
  }
}
