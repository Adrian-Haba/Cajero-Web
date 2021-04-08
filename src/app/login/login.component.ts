import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  error: boolean = false;

  user = {
    email: '',
    password: ''
  }

  constructor (
    private authService: AuthService,
    private router: Router
    ) { }
  
  login() {
    if(this.user.email == '') {
      alert("El email está vacío")
    }else if(this.user.password == '') {
      alert("La contraseña está vacía")
    }else{
      this.authService.login(this.user)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token);
          alert(`Sesión iniciada correctamente. Bienvenido "${this.user.email}"`);
          this.router.navigate(['/accounts']);
        },
        err => {
          return console.log(err),
          alert("Usuario o contraseña incorrectos");
        }
      )
    }
  }
}
