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
      const newCloneRequest = request.clone({
        setHeaders: {
          Authorization: `bearer-key ${token}`
        }
      });
  
      return next.handle(newCloneRequest);
    }
  
    return next.handle(request);
  }
  
}
