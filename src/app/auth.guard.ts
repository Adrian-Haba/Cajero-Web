import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
//AuthGuard: manera de proteger las rutas desde frontend. Se encarga de saber si existe un token o no
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  // Si existe el toquen te redirige a la ruta buscada
  canActivate(): boolean{
    if (this.authService.loggedIn()) {
      return true;
    }
  //Si no existe el toque te devuelve al apartado de login
    this.router.navigate(['login']);
    return false;
  }
}


