import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.scss']
})
export class AllProductComponent {
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
  allProduct:any;

searchForm!:FormGroup

constructor(
  private productService:ProductService,
  private route: ActivatedRoute,
  private enquiryService:EnquiryService,
  public toastr: ToastrService,
  private http:HttpClient,
  private fb:FormBuilder
  ){

this.searchForm=this.fb.group({
  name:['']
})

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

  // this.routeSub = this.route.params.subscribe(params => {

  //   return this.productService.getProductCategoryByID(params['id']).subscribe(response=>{
  //     this.categoryData=response?.data;
  //     console.log(params['id']);
  //     this.FilterByCategory(this.categoryData.name)


  //    });
     

  // });
this.getCategory();
this.getBrand();
this.getProduct();
  }



// FilterByCategory(name:any){
//   this.loading=true;
//   return this.productService.FilterProductByCategory(name).subscribe(response=>{
//     if(response){
//       this.loading=false;
//       this.categoryProduct=response;
//       console.log(response)
// this.link= response.links 
//    }


//   })
// }



getProduct(){
  this.productService.getProduct().subscribe(response=>{
    this.allProduct=response;
    console.log(response)
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


SearchProduct(){
  this.productService.searchProduct(this.searchForm.value).subscribe(response=>{
    console.log(response);
    this.allProduct=response
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
}
