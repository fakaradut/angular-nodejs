import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private loginService: LoginService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const token = this.loginService.getToken();
    console.log(token);
    if (token) {
      req = req.clone({
        setHeaders: {
          'Authorization': `Bearer ${token}`
        }
      });
    }
    return next.handle(req);

  }

}
