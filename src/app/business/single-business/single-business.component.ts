import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusinessService } from 'src/app/shared/service/business.service';
import { ProductService } from 'src/app/shared/service/product.service';

@Component({
  selector: 'app-single-business',
  templateUrl: './single-business.component.html',
  styleUrls: ['./single-business.component.scss']
})
export class SingleBusinessComponent {
routeSub: any;
  businessData: any;
  businessProducts: any;
  categoryData:any;
constructor(
  private productService:ProductService,
  private route:ActivatedRoute,
  private businessService:BusinessService
  
  ){

}
ngOnInit(){
  this.getCategory();
  this.routeSub = this.route.params.subscribe(params => {
console.log(params['name'])
     this.productService.ProductByBusiness(params['name']).subscribe(response=>{
      this.businessProducts=response.data;
    



     });


     this.businessService.getBusinessById(params['id']).subscribe(response=>{
      console.log(response.data)

      this.businessData=response.data;
     })

  });
}



getCategory(){
  this.productService.getProductCategories().subscribe(response=>{

    this.categoryData = response.data;
    console.log(response);
  })
}


getBrand(){
  this.productService.getBrand().subscribe(response=>{
    console.log(response);
  })
}
// getProduct
}
