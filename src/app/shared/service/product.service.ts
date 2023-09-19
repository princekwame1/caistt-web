import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs'; 
import { Router } from '@angular/router';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  baseURL='https://api.caistt.com/api/v1/';

  quote = new BehaviorSubject<any[]>(JSON.parse(localStorage.getItem('quote') || '[]'))




// Product category

getProductCategories():Observable<any>{
  
  return this.http.get(`${this.baseURL}product-categories`)
}
createProductCategory(categoryInfo:any):Observable<any>{
    const formData = new FormData();
    formData.append("description", categoryInfo.description);
    formData.append("name", categoryInfo.name);
    formData.append("parent_id", categoryInfo.parent_id);
    formData.append("featured_image", categoryInfo.featured_image);
    formData.append("banner_image", categoryInfo.banner_image);
  
    return this.http.post(`${this.baseURL}product-categories`,formData,)
  }

deleteProductCategory(id:any):Observable<any>{
    return this.http.delete(`${this.baseURL}product-categories/${id}`)

  }
UpdateProductCategory(id:number, category:any):Observable<any>{
    const formData = new FormData();
    formData.append("description", category.description);
    formData.append("name", category.name);
    formData.append("parent_id", category.parent_id);
    formData.append("featured_image", category.featured_image);
    formData.append("banner_image", category.featured_image);
    return this.http.put(`${this.baseURL}product-categories/${id}`, formData)
   
   }
  
getProductCategoryByID(id:number):Observable<any>{
    return this.http.get<any>(`${this.baseURL}product-categories/${id}`);
   }


// Tag section

  getTag():Observable<any>{
  
    return this.http.get(`${this.baseURL}tags`)
  }
  

  


    //  brand section

getBrand():Observable<any>{
  
      return this.http.get(`${this.baseURL}brands`)
    }
 
getBrandbyID(uuid:number):Observable<any>{
        return this.http.get<any>(`${this.baseURL}brands/${uuid}`);
       }

// Product Section

getFeaturedProduct():Observable<any>{
  
        return this.http.get<any>(`${this.baseURL}products?filter[is_featured]=1`)
      }


      getProduct():Observable<any>{
        return this.http.get<any>(`${this.baseURL}products`)
      }
        
 getProductbyID(id:any):Observable<any>{
          return this.http.get<any>(`${this.baseURL}products/${id}`);
         }





         // product Variation section

  getVariationCategory():Observable<any>{
  
    return this.http.get(`${this.baseURL}variation-categories`)
  }
  
  getVariationCategoryByID(id:number):Observable<any>{
      return this.http.get<any>(`${this.baseURL}variation-categories/${id}`);
     }






     getProductPrice(){
      // return this.http.post(`${this.baseURL}products/${body.product_id}/product-prices`,body,)

     }


     getProductByCategory(name: any):Observable<any>{

   
      return this.http.get<any>(`${this.baseURL}product-category?filter[category.name]=${{name}}`)
     }
 
   
   

  createWishlist(id:any):Observable<any>{
      const body="";
      return this.http.post(`${this.baseURL}favourites/${id}`,body,)
     }


     FilterProductByCategory(name:any):Observable<any>{
    return this.http.get<any>(`${this.baseURL}products?filter[category.name]=${name}`)

     }



     

     searchCategoryForProduct(id:any , name:any):Observable<any>{

      return this.http.get<any>(`${this.baseURL}products?filter[category.id]=${id} && filter[name]=${name}`)
     }


// addQuotebasket(product_id:any):Observable<any>{
  
//   return this.http.post(`${this.baseURL}quote-basket/${product_id}`,'')
// }


// getQuoteBasket():Observable<any>{
//   return this.http.get(`${this.baseURL}quote-basket`)
// }

// deleteQuoteBasket(id:any):Observable<any>{
//   return this.http.delete(`${this.baseURL}quote-basket/${id}`)
// }


getProduct_categorytree():Observable<any>{
  return this.http.get(`${this.baseURL}product-categories/tree`)
}


ProductByCategory(name:any):Observable<any>{
  return this.http.get<any>(`${this.baseURL}products?filter[category.name]=${name}`)

   }


   ProductByBusiness(id:any):Observable<any>{

    return this.http.get<any>(`${this.baseURL}products?filter[business.business_name]=${id}`)
  
     }



     searchProduct(name:any):Observable<any>{
      return this.http.get<any>(`${this.baseURL}products?filter[name]=${name}`)

     }

}
