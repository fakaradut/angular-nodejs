import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {baseUrl} from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private router:Router) { }

  loginUser(user) {
    return this.http.post<any>(`${baseUrl}/login`, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['/home']);
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
