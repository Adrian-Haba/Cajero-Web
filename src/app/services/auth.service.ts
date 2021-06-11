import { Injectable, Type } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000/api'

  constructor(private http: HttpClient, private router: Router) { }

  // Registro de usuario
  register(user: { email: string; name: string; password: string; }) {
      return this.http.post<any>(this.URL + '/register', user);
  }
  // Login de usuario
  login(user: { email: string; password: string; }) {
    return this.http.post<any>(this.URL + '/login', user);
  }
  // Creación de cuenta bancaria
  create(account: { name_account: string; balance: number; }) {
    return this.http.post<any>(this.URL + '/createaccount', account);
  }
  // Añadir saldo a la cuenta
  add(account: { balance: number; }) {
    return this.http.put<any>(this.URL + '/sumbalance', account);
  }
  // Retirada de saldo de la cuenta
  remove(account: { balance: number; }) {
    return this.http.put<any>(this.URL + '/resbalance', account);
  }
  // Obtención del Token del usuario logueado
  loggedIn() {
    return !!localStorage.getItem('token');
  }
  // Obtención del Token del usuario registrado
  getToken() {
    return localStorage.getItem('token');
  }
  // Cierre de sesión de usuario
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}

