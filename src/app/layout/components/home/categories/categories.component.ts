import { Component } from '@angular/core';
import { ProductService } from 'src/app/shared/service/product.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {
  categoryData:any;
  constructor(
    private productService:ProductService
  ) { }

  ngOnInit(): void {

    this.getCategory();
  }



  customOptions: OwlOptions = {
    loop: true,
    autoplay:true,
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
        items: 4
      }
    },
    nav: true
  }


  getCategory(){
    return this.productService.getProductCategories().subscribe(response=>{

      this.categoryData=response.data;
      console.log(this.categoryData);
    })
  }
}
