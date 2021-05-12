import { Component, OnInit} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TasksService } from '../services/tasks.service';


@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit{

  username: any = '';
  account: any = '';

  constructor (private authService: AuthService, private tasksService: TasksService) {}

  ngOnInit() {
    this.tasksService.getUsername()
      .subscribe(
        res => {
          console.log(res);
          this.username = res;
        },
        err => console.log(err)
      )
      
    //this.tasksService.getAccount()
    //  .subscribe(
    //    res => {
    //      console.log(res);
    //      this.account = res;
    //    },
    //    err => console.log(err)
    //  )
  }

  logout(){
    this.authService.logout()
  }
}
