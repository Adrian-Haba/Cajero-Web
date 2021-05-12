import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private URL = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }

  //EJEMPLO de obtención de datos públicos
  getTasks(){
    return this.http.get<any>(this.URL + '/tasks');
   }
   //EJEMPLO de obtención de datos privados
  getPrivateTasks(){
    return this.http.get<any>(this.URL + '/private-tasks');
   }

  //Obtención del nombre de usuario logueado
   getUsername(){
    return this.http.get<any>(this.URL + '/username');
   }
   //Obtención de la cuenta del usuario logueado
   getAccount(){
    return this.http.get<any>(this.URL + '/account');   
  }
}
