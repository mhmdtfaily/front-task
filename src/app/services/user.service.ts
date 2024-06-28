import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  getUsers(page: number): Observable<User[]> {
    const url = `${this.apiUrl}?page=${page}`;
    return this.http.get<any>(url).pipe(
      map((response) => response.data as any[]),
      map((users) =>
        users.map(
          (user) =>
            ({
              id: user.id,
              first_name: user.first_name,
              last_name: user.last_name,
              avatar: user.avatar,
            } as User)
        )
      )
    );
  }
}
