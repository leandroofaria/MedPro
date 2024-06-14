import { Component, OnInit } from '@angular/core';
import { AuthService } from './components/services/authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'seu-app';

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const token = localStorage.getItem('loginToken');
    if (token) {
      this.authService.login(); // Atualiza o estado de autenticação
    }
  }
}
