import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {


  constructor(private authService: AuthService){}

  /* Transforma el Token al formato que se usa en Postman para la autenticación para que google lo pueda leer
  en ese formato y sea compatible */
  intercept(
    req: { clone: (arg0: { setHeaders: { Authorization: string; }; }) => any; },
    next: { handle: (arg0: any) => any; }) {
    const tokenReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.getToken()}`
      }
    })
    return next.handle(tokenReq)
  }

}
