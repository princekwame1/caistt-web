import { ResolveFn } from '@angular/router';
import { EnquiryService } from '../service/enquiry.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class wishlistResolver implements Resolve<Promise<any>>{
  constructor(private enquiryService:EnquiryService){};
   async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Promise<Promise<any>> {
    const data= await this.enquiryService.fetchWishList().toPromise();
    console.log(data)
    return data;
  }

};
