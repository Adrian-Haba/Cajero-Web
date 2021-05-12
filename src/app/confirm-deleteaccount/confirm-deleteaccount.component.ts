import { Component, OnInit} from '@angular/core';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-confirm-deleteaccount',
  templateUrl: './confirm-deleteaccount.component.html',
  styleUrls: ['./confirm-deleteaccount.component.css']
})
export class ConfirmDeleteaccountComponent implements OnInit {

  username: any = '';

  constructor (private tasksService: TasksService) {}

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

}
