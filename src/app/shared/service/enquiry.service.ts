import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../interface/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  
  enquirylength=new BehaviorSubject<Number>(0);
WishListlength=new BehaviorSubject<Number>(0);
  constructor(private http:HttpClient) { }

  baseURL='https://caistt.herokuapp.com/api/v1/';


// Enquiries Section

addQuotebasket(product_id:any):Observable<any>{
  
  return this.http.post(`${this.baseURL}enquiries-basket/${product_id}`,'');
  
}

fetchEnquiryBasket():Observable<any>
{
  return this.http.get(`${this.baseURL}enquiries-basket`);
}



deleteEnquiry(product_id:any):Observable<any>{
  return this.http.delete(`${this.baseURL}enquiries-basket/${product_id}`);
}



// Wishlist Section

fetchWishList():Observable<any>{
  return this.http.get(`${this.baseURL}favourites`);
}


add2Wish_list(product_id:any):Observable<any>{
  return this.http.post(`${this.baseURL}favourites/${product_id}`,"");

}

deleteWlish_list(product_id:any):Observable<any>{
  return this.http.delete(`${this.baseURL}favourites/${product_id}`);

}


postEnquiry(data:any):Observable<any>{
  console.log(data)
  const formData = new FormData();
  formData.append("content", data.content);
  formData.append("attachment", data.attachment);
  return this.http.post(`${this.baseURL}enquiries`,formData);

}
}
