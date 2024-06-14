import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor() {}

  login() {
    this.isLoggedInSubject.next(true);
  }

  logout() {
    // Remover token e outros dados do localStorage
    localStorage.removeItem('loginToken');
    localStorage.removeItem('tipo');
    localStorage.removeItem('IdUser');
    this.isLoggedInSubject.next(false);
  }

  isAuthenticated(): boolean {
    return this.isLoggedInSubject.value;
  }
}
