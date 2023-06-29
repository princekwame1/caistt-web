import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {
  

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // Get the access token from wherever you have stored it
    const token = JSON.parse(localStorage.getItem("user")||"{}");

    // Clone the request and add the Authorization header with the Bearer token
    const authenticatedRequest = request.clone({
      setHeaders: {
        Authorization:`Bearer ${token}`,
        // "Access-Control-Allow-Origin": '*',
      // "Content-Type": "application/json",
      // "Accept":"application/json",
      //  'Access-Control-Allow-Methods': '*',
      }
    });

    // Pass the cloned request to the next interceptor or the HTTP handler
    return next.handle(authenticatedRequest);
  }
}
