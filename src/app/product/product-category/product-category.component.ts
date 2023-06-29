import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { EnquiryService } from 'src/app/shared/service/enquiry.service';
import { ProductService } from 'src/app/shared/service/product.service';
import Swal from 'sweetalert2'

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

constructor(
  private productService:ProductService,
  private route: ActivatedRoute,
  private enquiryService:EnquiryService,
  public toastr: ToastrService
  ){
this.loading=false;
}
  ngOnInit(){


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
				var $this = $('[data-plugin-masonry]'),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginMasonry(opts);
			});
		});

	}
  if ($.isFunction($.fn['themePluginSort']) && ( $('[data-plugin-sort]').length || $('.sort-source').length )) {
		theme.fn.intObsInit( '[data-plugin-sort]:not(.manual), .sort-source:not(.manual)', 'themePluginSort' );
	}

  this.enquiryService.enquirylength.subscribe(res=>{
    this.enquireLength=res;
  });

  this.enquiryService.WishListlength.subscribe(res=>{
    this.wishList=res;
  })

  this.routeSub = this.route.params.subscribe(params => {

    return this.productService.getProductCategoryByID(params['id']).subscribe(response=>{
      this.categoryData=response.data;
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
      this.categoryProduct=response.data;

    }


  })
}


getCategory(){
  this.productService.getProductCategories().subscribe(response=>{
    this.allCategory=response.data;

  })
}


getBrand(){
  this.productService.getBrand().subscribe(response=>{
    this.allBrand=response.data;
 
  })
}

Add2Basket(id:any){
  return this.enquiryService.addQuotebasket(id).subscribe(response=>{
if(response.success){
  console.log(this.enquireLength+1)
  this.enquiryService.enquirylength.next(this.enquireLength+1)
  this.toastr.success('Product have been successfully added ','' ,{
    timeOut: 3000,
  });

}
  })
}



Add2Wishlist(id:any){
  return this.enquiryService.add2Wish_list(id).subscribe(response=>{
if(response.success){
  this.enquiryService.WishListlength.next(this.wishList+1)
  this.toastr.success('Product have been successfully added ', '', {
    timeOut: 3000,
  });

}
  })
}
}
