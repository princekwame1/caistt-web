import { Component } from '@angular/core';
import { ProductService } from 'src/app/shared/service/product.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss','../../../../../assets/css/demos/demo-dentist.css']
})
export class CategoriesComponent {
  categoryData:any;
  categoriesData: any;
  constructor(
    private productService:ProductService
  ) { }

  ngOnInit(): void {

    this.getCategory();
    this.getcategories();
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
    return this.productService.getProduct_categorytree().subscribe(response=>{

      this.categoryData=response.data;
       console.log(this.categoryData);
    })
  }


  getcategories(){
    return this.productService.getProductCategories().subscribe(response=>{

      this.categoriesData=response.data;
      console.log(this.categoriesData);
    })
  }
}
