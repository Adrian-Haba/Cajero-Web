import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-definitive-deleteaccount',
  templateUrl: './definitive-deleteaccount.component.html',
  styleUrls: ['./definitive-deleteaccount.component.css']
})
export class DefinitiveDeleteaccountComponent implements OnInit {

  username: any = '';

  constructor (private tasksService: TasksService, private router: Router) {}

  ngOnInit() {
    this.tasksService.getUsername()
      .subscribe(
        res => {
          console.log(res);
          this.username = res;
          setTimeout(() => {
            this.router.navigate(['/accounts']);
        }, 5000);
        },
        err => console.log(err)
      )
  }
}
