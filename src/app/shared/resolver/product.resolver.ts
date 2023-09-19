import { ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { ProductService } from '../service/product.service';

export class productResolver implements Resolve<Promise<any>> {

  constructor(private productService:ProductService){};


  async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Promise<Promise<any>> {

const data = await this.productService.getFeaturedProduct().toPromise();
   return data;
 }

};
