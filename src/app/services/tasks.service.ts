import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private URL = 'http://localhost:3000/api'

  constructor(private http: HttpClient) { }


  getTask(){
    return this.http.get(this.URL + '/tasks');
   }

  getPrivateTask(){
    return this.http.get(this.URL + '/private-tasks');
   }


}
