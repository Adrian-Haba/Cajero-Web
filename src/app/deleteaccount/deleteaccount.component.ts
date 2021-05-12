import { Component, OnInit} from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deleteaccount',
  templateUrl: './deleteaccount.component.html',
  styleUrls: ['./deleteaccount.component.css']
})
export class DeleteaccountComponent implements OnInit {

  username: any = '';

  account = {
    name_account: '',
    balance: 100
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
  }

  //delete() {
  //  this.authService.delete(this.account)
  //    .subscribe(
  //      res => {
  //        console.log(res)
  //      },
  //      err => {
  //        return console.log(err)
  //      }
  //    )
  //    this.router.navigate(['/accounts']);
 // }

}
