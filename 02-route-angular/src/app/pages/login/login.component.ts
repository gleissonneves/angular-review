import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Usuario } from './Usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public login: Usuario = new Usuario();

  public typeIcon = 'fa-eye-slash';
  public typePassword = 'password';

  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit(): void {
  }

  tooglePassword(): void {
    if (this.typePassword === 'password') {
      this.typePassword = 'text';
      this.typeIcon = 'fa-eye'
      return
    }
    
    this.typeIcon = 'fa-eye-slash'
    this.typePassword = 'password';
  }

  verifyIfUserExist() {
    const loginIsValid = this.authService.userExist(this.login);
    
    if (loginIsValid) {
      this.route.navigate(['/plataforma']);
      return;
    }
    
    console.log('Usuário ou senha incorreto');
  }
}
