import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user = {
    email: '',
    password: ''
  }

  constructor (private authService: AuthService, private router: Router) { }

  register(){
      this.authService.register(this.user)
        .subscribe(
          res => {
            console.log(res)
            localStorage.setItem('token', res.token);
            this.router.navigate(['/login']);
          },
          err => console.log(err)
        )
  }
}
