import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  postRegister(user:any):Observable<any>{
    return this.http.post('https://pixiesapp.herokuapp.com/auth/register', user)
  }
}
