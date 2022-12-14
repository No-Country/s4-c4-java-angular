import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  token = this.cookieService.get('token');

  idUser = localStorage.getItem('id');

  headers = new HttpHeaders({
    Authorization: `Bearer ${this.token}`,
  });

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  getStore(): Observable<any> {
    return this.http.get('https://pixiesapp.herokuapp.com/store/1', {
      headers: this.headers,
    });
  }

  buyItem(type: string, id: number, user: number, item: any): Observable<any> {
    return this.http.put(
      `https://pixiesapp.herokuapp.com/inventory/${type}/?${type}=${id}&user=${this.idUser}`,
      item,
      {
        headers: this.headers,
      }
    );
  }
}
