import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie';

@Injectable({
  providedIn: 'root',
})
export class CollectionService {
  token = this.cookieService.get('token');
  id = this.cookieService.get('id');

  headers = new HttpHeaders({
    Authorization: `Bearer ${this.token}`,
  });

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  putEquip(idEquip: number, item: any): Observable<any> {
    return this.http.put(
      `https://pixiesapp.herokuapp.com/equip/?id=${idEquip}&idAvatar=${this.id}`,
      item,
      {
        headers: this.headers,
      }
    );
  }

  unEquip(idEquip: number, item: any): Observable<any> {
    return this.http.put(
      `https://pixiesapp.herokuapp.com/disengage/?id=${idEquip}`,
      item,
      {
        headers: this.headers,
      }
    );
  }
}
