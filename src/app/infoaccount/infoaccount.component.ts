import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TasksService } from '../services/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-infoaccount',
  templateUrl: './infoaccount.component.html',
  styleUrls: ['./infoaccount.component.css']
})
export class InfoaccountComponent implements OnInit {

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
            this.balance = res;
          },
          err => console.log(err)
        )
    }

}
