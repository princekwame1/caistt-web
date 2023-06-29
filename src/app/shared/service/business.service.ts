import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private http:HttpClient) { }

  baseURL='https://caistt.herokuapp.com/api/v1/';


  registerBusiness(business:any): Observable<any>{

    const formData = new FormData();
    formData.append("name", business.name);
    formData.append("email", business.email);
    formData.append("mobile_number", business.mobile_number.e164Number);
    formData.append("password", business.password);
    formData.append("password_confirmation", business.password_confirmation);
    formData.append("business_name", business.business_name);
    formData.append("website", business.website);
    formData.append("business_category_id", business.business_category_id);
    formData.append("country_id", business.country_id);
    formData.append("website", business.website);
    formData.append("business_certificate", business.business_certificate);
    formData.append("logo", business.logo);
    formData.append("background_image", business.background_image);
    return this.http.post(`${this.baseURL}auth/register`,formData,)
  }

getBusiness():Observable<any>{
  return     this.http.get(`${this.baseURL}businesses`)
}

getBusinessById(id:any):Observable<any>{
  return this.http.get(`${this.baseURL}businesses/${id}`)
}
  getBusiness_Category(): Observable<any>{

    return this.http.get(`${this.baseURL}business-categories`)
  };


  getCountry(): Observable<any>{
    return this.http.get(`${this.baseURL}countries`)
  }


  getSingleBusiness(id:any): Observable<any>{
    return this.http.get(`${this.baseURL}businesses/${id}`)
  }

}
