import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductService } from 'src/app/shared/service/product.service';
declare var $:any;
declare var theme:any;
@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss',"../../../assets/css/product.css"]
})
export class SingleProductComponent {

productData:any;
BusinessProductData:any;
galleryData:any;
RelatedProduct: any;
main_image:any;
url!:string;
  constructor(private route:ActivatedRoute, private productService:ProductService ){

  }

  ngOnInit(){
  





  this.route.params.subscribe(params => {
    this.productService.getProductbyID(params['id']).subscribe(response => {

  this.productData=response?.data;
  this.url=this.productData?.featured_image.url;
  this.FilterByCategory(  this.productData.category.name)
 
   this.galleryData=response?.data.gallery.url;
       
       }
	   )});


     
  }


  customOptions: OwlOptions = {
    loop: true,
    autoplay:false,
    mouseDrag: true,
    autoplayHoverPause:true,
    touchDrag: true,
    pullDrag: true,
  
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: false
  }


  customOptions1: OwlOptions = {
    loop: true,
    autoplay:false,
    mouseDrag: true,
    autoplayHoverPause:true,
    touchDrag: true,
    pullDrag: true,
  
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
   items:4,
    nav: true
  }

  FilterByCategory(name:any){
    return this.productService.FilterProductByCategory(name).subscribe(response=>{
      this.RelatedProduct=response.data;
  console.log(this.RelatedProduct)
    })
  }

// add2Enquiry(id:any){
//   return this.productService.(id).subscribe(response=>{
//     this.getEnquireData()
//   })
// }

add2Favourite(id:any){
	return this.productService.createWishlist(id).subscribe(response=>{
		console.log(response);
	})
}


getProductbyBusiness(id:any){
  this.productService.ProductByBusiness(id).subscribe(response=>{
    this.BusinessProductData=response?.data;
   
console.log(this.BusinessProductData)
  })
}



}


