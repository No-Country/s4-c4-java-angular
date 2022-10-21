import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  token = this.cookieService.get('token');
  id = localStorage.getItem('id')
  headers = new HttpHeaders({
    Authorization: `Bearer ${this.token}`,
  });

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  postFavorite(avatarLiked: any): Observable<any> {
    return this.http.put(
      `https://pixiesapp.herokuapp.com/likes/?favorite=${avatarLiked}&user=${this.id}`,
      'BODY',
      {
        headers: this.headers,
      }
    );
  }
}
