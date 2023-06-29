import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { EnquiryService } from '../service/enquiry.service';
import { Observable } from 'rxjs';

@Injectable()
export class enquiryResolver implements Resolve<Promise<any>>{

  constructor(private enquiryService:EnquiryService){};
   async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Promise<Promise<any>> {
    const data= await this.enquiryService.fetchEnquiryBasket().toPromise();
    console.log(data)
    return data;
  }

};


