import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(public http:HttpClient, private router:Router) { }

  baseURL='https://caistt.herokuapp.com/api/v1/';
  


  // RegisterUser(userinfo:any): Observable<any>{
  //   const body=JSON.stringify(userinfo);
  //  return this.http.post(`${this.baseURL}auth/register`,body)
     
  //  };



   loginUser(userInfo:any): Observable<any>{
   
    return this.http.post(`${this.baseURL}auth/login`,userInfo)
 
   }


   forget_password(body:any): Observable<any>{
    return this.http.post(`${this.baseURL}auth/forgot-password`,body);
   };



ResetPassword( body:any): Observable<any>{

    return this.http.post(`${this.baseURL}auth/reset-password`,body)
}
 



  logoutUser() {
    localStorage.removeItem('user');
    this.loggedIn.next(false);
  }
 
  public isLoggedIn(): BehaviorSubject<boolean> {
    return this.loggedIn;
  }

}
