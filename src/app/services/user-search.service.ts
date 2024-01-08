import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserSearchService {
  user = signal<User | undefined>(undefined);

  constructor(private http: HttpClient) {}

  getUser(username: string) {
    this.http
      .get<User>(`https://api.github.com/users/${username}`)
      .pipe(
        catchError(() => {
          return of({ ...this.user(), error: true } as User);
        }),
        tap((user) => {
          this.user.set(user);
        })
      )
      .subscribe();
  }
}
