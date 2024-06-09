import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CostumeInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('loginToken');
  
    if (token) {
      console.log('Token encontrado:', token);
      const newCloneRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log('Requisição clonada com cabeçalho de autorização:', newCloneRequest);
      return next.handle(newCloneRequest);
    }
  
    console.log('Token não encontrado, enviando requisição original.');
    return next.handle(request);
  }
}
