import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  postLogin(user:any):Observable<any>{
    return this.http.post('https://pixiesapp.herokuapp.com/auth/login', user)
  }
}
