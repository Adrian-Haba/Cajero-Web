import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  
  private URL = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }
  //Obtención del nombre de usuario logueado
   getUsername(){
    return this.http.get<any>(this.URL + '/username');
   }
   //Obtención de la cuenta del usuario logueado
   getAccount(){
    return this.http.get<any>(this.URL + '/account');   
  }
  //Obtención del saldo de la cuenta del usuario logueado
  showbalance() {
    return this.http.get<any>(this.URL + '/showbalance');
  }
  //Obtención de la id de la cuenta del usuario logueado
  showid() {
    return this.http.get<any>(this.URL + '/showid');
  }
  //Eliminación de la cuenta
  delete() {
    return this.http.delete<any>(this.URL + '/deleteaccount');
  }
}
