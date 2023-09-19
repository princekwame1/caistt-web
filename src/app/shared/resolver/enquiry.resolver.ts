import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { EnquiryService } from '../service/enquiry.service';
import { Observable } from 'rxjs';
import { ProductService } from '../service/product.service';

@Injectable()
export class enquiryResolver implements Resolve<Promise<any>>{

  constructor(
    private enquiryService:EnquiryService, 
    private route:ActivatedRoute,
    public productService:ProductService){};


   async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Promise<Promise<any>> {


    // this.route.params.subscribe(async params => {
    //   const data= await  this.productService.getProductbyID(params['id']).toPromise()

    //   return data;
    //    });

  }

};


