import { AuthService } from 'src/app/services/auth.service';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let tokenizedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.state.value.token}`
      }
    });

    return next.handle(tokenizedRequest);
  }
}
