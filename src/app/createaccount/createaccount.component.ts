import { Component, OnInit} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { TasksService } from '../services/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {

  username: any = '';

  account = {
    name_account: '',
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
  }
  create() {
    this.authService.create(this.account)
      .subscribe(
        res => {
          console.log(res)
        },
        err => {
          return console.log(err)
        }
      )
      alert(`Cuenta creada correctamente. Volviendo a "CUENTAS"`);
      this.router.navigate(['/accounts']);
  }
}
