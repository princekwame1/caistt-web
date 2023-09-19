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
  

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>  {
    const token = JSON.parse(localStorage.getItem("user")||"{}");


    // Attach the token to the request headers for POST and PUT requests using FormData
  if ((req.method === 'POST' || req.method === 'PUT') && req.body instanceof FormData) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
        "Access-Control-Allow-Origin": '*',
        'Access-Control-Allow-Methods': '*' ,
      }
    });
  }

  // Add all headers to requests that don't use FormData
  if (!(req.body instanceof FormData)) {
    req = req.clone({
      setHeaders: {
    
                   Authorization:`Bearer ${token}`,
                   "Access-Control-Allow-Origin": '*',
                 "Content-Type": "application/json",
                 "Accept":"application/json",
                  'Access-Control-Allow-Methods': '*' ,
          
      }
    });
  }

  return next.handle(req);
}
}
