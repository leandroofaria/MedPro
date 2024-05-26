import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private http: HttpClient, private router: Router){}

  onLogin () {
    this.http.post('http://localhost:8080/pacientes/login', this.loginObj).subscribe((res:any) => {
      if(res.token) { 
        localStorage.setItem('loginToken', res.token);
        this.router.navigateByUrl('/patienthome');
      }
    }, (error) => {
      console.log(error)
      alert('Credenciais inválidas');
    });
  }

}
