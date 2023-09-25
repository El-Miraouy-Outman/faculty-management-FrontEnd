import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from "../serviceAuth/auth.service";

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!request.url.includes("/auth/token")) {
      let newRequest = request.clone({
        headers: request.headers.set('Authorisation', 'Bearer ' + this.authService.accessToken)

      })
      console.log(" interceptores now " + newRequest.headers.get('headers'))
      // add this provide in module :    {provide : HTTP_INTERCEPTORS,useClass :AppHttpInterceptor,multi:true }
      return next.handle(newRequest);
    }
    else {
      return next.handle(request);
    }
  }
}
