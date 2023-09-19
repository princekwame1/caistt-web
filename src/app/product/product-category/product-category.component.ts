import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { EnquiryService } from 'src/app/shared/service/enquiry.service';
import { ProductService } from 'src/app/shared/service/product.service';
// import Swal from 'sweetalert2'

declare var $:any;
declare var theme:any;

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss',]
})
export class ProductCategoryComponent {

  private routeSub!: Subscription;
  categoryData:any;
  allCategory:any;
 filterTerm!: string;
  allBrand:any;
enquireLength:any;
wishList:any;
  categoryProduct:any;
  p: number = 1;
  loading!: boolean;
  link:any;

constructor(
  private productService:ProductService,
  private route: ActivatedRoute,
  private enquiryService:EnquiryService,
  public toastr: ToastrService,
  private http:HttpClient
  ){

    
this.loading=false;
}
  ngOnInit(){





  if ($.isFunction($.fn['themePluginSort']) && ( $('[data-plugin-sort]').length || $('.sort-source').length )) {
		theme.fn.intObsInit( '[data-plugin-sort]:not(.manual), .sort-source:not(.manual)', 'themePluginSort' );
	}

    // Animate
	if ($.isFunction($.fn['themePluginAnimate']) && $('[data-appear-animation]').length) {
		theme.fn.dynIntObsInit( '[data-appear-animation], [data-appear-animation-svg]', 'themePluginAnimate', theme.PluginAnimate.defaults );
	}

	// Animated Content
	if ($.isFunction($.fn['themePluginAnimatedContent'])) {
		theme.fn.intObsInit( '[data-plugin-animated-letters]:not(.manual), .animated-letters', 'themePluginAnimatedContent' );
		theme.fn.intObsInit( '[data-plugin-animated-words]:not(.manual), .animated-words', 'themePluginAnimatedContent' );
	}



	if ($.isFunction($.fn['themePluginMasonry']) && $('[data-plugin-masonry]').length) {

		$(function() {
			$('[data-plugin-masonry]:not(.manual)').each(function() {
				var $this = $('[data-plugin-masonry]:not(.manual)'),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginMasonry(opts);
			});
		});

	}

	// Match Height
	if ($.isFunction($.fn['themePluginMatchHeight']) && $('[data-plugin-match-height]').length) {

		$(function() {
			$('[data-plugin-match-height]:not(.manual)').each(function() {
				var $this = $('[data-plugin-match-height]:not(.manual)'),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginMatchHeight(opts);
			});
		});

	}

  this.enquiryService.enquirylength.subscribe(res=>{
    this.enquireLength=res;
  });

  this.enquiryService.WishListlength.subscribe(res=>{
    this.wishList=res;
  })

  this.routeSub = this.route.params.subscribe(params => {

    return this.productService.getProductCategoryByID(params['id']).subscribe(response=>{
      this.categoryData=response?.data;
      console.log(params['id']);
      this.FilterByCategory(this.categoryData.name)


     });
     

  });
this.getCategory();
this.getBrand();
  }



FilterByCategory(name:any){
  this.loading=true;
  return this.productService.FilterProductByCategory(name).subscribe(response=>{
    if(response){
      this.loading=false;
      this.categoryProduct=response;
      console.log(response)
this.link= response.links 
   }


  })
}


getCategory(){
  this.productService.getProduct_categorytree().subscribe(response=>{
    this.allCategory=response?.data;
    console.log(this.allCategory)

  })
}


getBrand(){
  this.productService.getBrand().subscribe(response=>{
    this.allBrand=response?.data;
 
  })
}





Add2Wishlist(id:any){
  return this.enquiryService.add2Wish_list(id).subscribe(response=>{
if(response.success){
  this.enquiryService.WishListlength.next(this.wishList+1)
  this.toastr.success('successfully added ', '', {
    timeOut: 3000,
  });


}
if(response.error){

}
  })
}



customOptions1: OwlOptions = {
  loop: true,
  autoplay:true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  autoplayHoverPause:true,
  dots: false,
  navSpeed: 700,
  navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
  responsive: {
    0: {
      items: 3
    },
    400: {
      items: 3
    },
    740: {
      items: 5
    },
    940: {
      items: 9
    }
  },
  nav: true
}

pagination(Url:any){
  console.log(Url)
  this.http.get(Url).subscribe(data=>{
    this.categoryProduct=data;
 
  })
  }

// 72b21e4

  sortbyBrand(id:any){
    const dff=this.categoryProduct.filter((product: { brand: any; }) => product.brand.id === id);
    console.log(dff)
  }


  isActiveLink(currentLink: string): boolean {
    // Logic to check if the currentLink matches the active link or page
    // For example, you can compare it with a variable or property holding the active link.
  
    // Assuming you have an 'activeLink' property in your component, you can compare it like this:
    return currentLink === this.categoryProduct.meta.links
  }
}
