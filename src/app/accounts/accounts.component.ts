import { Component, OnInit} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TasksService } from '../services/tasks.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit{

  username: any = '';
  account: any = '';
  balance: any = '';

  constructor (
    private authService: AuthService, private tasksService: TasksService, private router: Router) {}

  ngOnInit() {
    this.tasksService.getUsername()
      .subscribe(
        res => {
          console.log(res);
          this.username = res;
        },
        err => console.log(err)
      )
      
    this.tasksService.getAccount()
      .subscribe(
        res => {
          console.log(res);
          this.account = res;
        },
        err => console.log(err)
      )

      this.tasksService.showbalance()
      .subscribe(
        res => {
          console.log(res);
          this.balance = res;
        },
        err => console.log(err)
      )
  }

  deleteaccount(){
    let seleccionar = document.querySelector('select');
    let eleccion = seleccionar!.value;
    if (eleccion === '0') {
      alert("Selecciona tu cuenta para poder eliminarla")
    } else {
      if (this.balance > 0) {
        this.router.navigate(['/deleteaccount']);
      } else {
        this.router.navigate(['/confirm-deleteaccount']);
      }
    }
  }
  
  logout(){
    this.authService.logout()
  }
}
