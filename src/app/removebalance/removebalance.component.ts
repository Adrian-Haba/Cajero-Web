import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TasksService } from '../services/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-removebalance',
  templateUrl: './removebalance.component.html',
  styleUrls: ['./removebalance.component.css']
})
export class RemovebalanceComponent implements OnInit {

  username: any = '';
  balance: any = '';

  account = {
    balance: 0
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
    remove() {
      this.authService.remove(this.account)
        .subscribe(
          res => {
            console.log(res)
          },
          err => {
            return console.log(err)
          }
        )
        alert(`Saldo retirado correctamente. Volviendo a "Información de la cuenta"`);
        this.router.navigate(['/infoaccount']);
    }
}
