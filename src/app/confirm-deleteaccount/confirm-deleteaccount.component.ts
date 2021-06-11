import { Component, OnInit} from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm-deleteaccount',
  templateUrl: './confirm-deleteaccount.component.html',
  styleUrls: ['./confirm-deleteaccount.component.css']
})
export class ConfirmDeleteaccountComponent implements OnInit {

  username: any = '';

  constructor (private tasksService: TasksService, private authService: AuthService, private router: Router) {}

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


  deleteaccount(){
    
    this.tasksService.delete()
      .subscribe(
        res => {
          console.log(res)
        },
        err => {
          return console.log(err)
        }
      )
        
    this.router.navigate(['/definitive-deleteaccount']);
  }
}
