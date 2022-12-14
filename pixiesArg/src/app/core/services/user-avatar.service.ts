import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie';

@Injectable({
  providedIn: 'root',
})
export class UserAvatarService {
  token = this.cookieService.get('token');
  id = localStorage.getItem('id');
  headers = new HttpHeaders({
    Authorization: `Bearer ${this.token}`,
  });

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  getUser(): Observable<any> {
    return this.http.get(
      `https://pixiesapp.herokuapp.com/users/?id=${this.id}`,
      {
        headers: this.headers,
      }
    );
  }

  allUsers(): Observable<any> {
    return this.http.get(`https://pixiesapp.herokuapp.com/users/all`, {
      headers: this.headers,
    });
  }
}
