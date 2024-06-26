import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AuthService } from '../services/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginObj: any = {
    "email": "",
    "senha": ""
  }
  isLoggedIn: boolean = false;

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {}

  onLogin () {
    this.http.post('http://localhost:8080/pacientes/login', this.loginObj).pipe(
      catchError(pacienteError => {
        return this.http.post('http://localhost:8080/medicos/login', this.loginObj).pipe(
          catchError(medicoError => {
            return throwError('Usuário não encontrado');
          })
        );
      })
    ).subscribe((res:any) => {
      if(res.token) { 
        localStorage.setItem('loginToken', res.token);
        localStorage.setItem('tipo', res.tipo)
        localStorage.setItem('IdUser', res.id)
        this.authService.login();
        if (res.tipo === 'paciente') {
          this.router.navigateByUrl('/user-home');
        } else if (res.tipo === 'medico') {
          this.router.navigateByUrl('/user-home');
        }
      }
    }, (error) => {
      console.log(error)
      alert('O usuário não existe.'); 
    });
  }
}

