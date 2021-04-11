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
    name: '',
    password: ''
  }

  constructor (private authService: AuthService, private router: Router) { }

  register(){
    if(this.user.email == '') {
      alert("Inserte un email")
    }else if(this.user.name == '') {
      alert("Inserte un nombre de usuario")
    }else if(this.user.password == '') {
      alert("Inserte una contraseña")
    }else{
      this.authService.register(this.user)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token);
          const usernameLC = this.user.name.toLowerCase()
          alert(`Se ha registrado correctamente. Bienvenido "${usernameLC}" , ahora inicie sesión con sus credenciales.`);
          this.router.navigate(['/login']);
        },
        err => {
          return console.log(err),
          alert("Credenciales erroneas");
        }
      )
    }
  }
}
