import { Injectable, signal } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserProfileService {
  private profile = signal<'admin' | 'user'>('admin');

  setProfile(profile: 'admin' | 'user') {
    this.profile.set(profile);
  }

  getProfile(): Observable<'admin' | 'user'> {
    return of(this.profile());
  }
}
