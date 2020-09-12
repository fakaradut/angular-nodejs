import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {baseUrl} from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {


  constructor(private http : HttpClient) { }

    registerUser(user){
      return this.http.post<any>(`${baseUrl}/register`,user);
    }

}
