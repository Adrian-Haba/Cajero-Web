import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TasksService } from '../services/tasks.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-addbalance',
  templateUrl: './addbalance.component.html',
  styleUrls: ['./addbalance.component.css']
})
export class AddbalanceComponent implements OnInit {

  username: any = '';
  balance: any = '';

  account = {
    balance: 1
  }

  constructor (
    private authService: AuthService, 
    private tasksService: TasksService,
    private router: Router) {}

  ngOnInit() {
    this.tasksService.getUsername()
      .subscribe(
        res => {
          console.log(res);
          this.username = res;
        },
        err => console.log(err)
      )
      this.tasksService.showbalance()
        .subscribe(
          res => {
            this.balance = res;
          },
          err => console.log(err)
        )
  }
  add() {
    this.authService.add(this.account)
      .subscribe(
        res => {
          console.log(res)
        },
        err => {
          return console.log(err)
        }
      )
      alert(`Saldo ingresado correctamente. Volviendo a "Información de la cuenta"`);
      this.router.navigate(['/infoaccount']);
  }
}

