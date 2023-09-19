import { Component } from '@angular/core';
import { EnquiryService } from 'src/app/shared/service/enquiry.service';
import {ActivatedRoute} from '@angular/router'

declare var $:any;
declare var theme:any;
@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent {
  favData:any;

constructor(
  private enquiryService:EnquiryService,
  private route:ActivatedRoute
){



}


ngOnInit(){


this.favData=this.route.snapshot.data['wishlist'].data
console.log(this.favData)

  if ($.isFunction($.fn['themePluginAnimate']) && $('[data-appear-animation]').length) {
    theme.fn.dynIntObsInit( '[data-appear-animation], [data-appear-animation-svg]', 'themePluginAnimate', theme.PluginAnimate.defaults );
}



// Animated Content
if ($.isFunction($.fn['themePluginAnimatedContent'])) {
    theme.fn.intObsInit( '[data-plugin-animated-letters]:not(.manual), .animated-letters', 'themePluginAnimatedContent' );
    theme.fn.intObsInit( '[data-plugin-animated-words]:not(.manual), .animated-words', 'themePluginAnimatedContent' );
}

}

  getFavorite(){
this.enquiryService.fetchWishList().subscribe(response=>{
  console.log(response);
  this.favData=response.data
})
  };


  delete4rmFav(id:any){
  this.enquiryService.deleteWlish_list(id).subscribe(response=>{
    console.log(response);
    this.getFavorite();
    if(response.success){
      // this.EquiryService.enquirylength.next(this.enquiryData)
    }
    // this.getEnquiryItems();
  })
}


add2Enquiry(id:any){

  console.log(id)
//   this.enquiryService.addQuotebasket(id).subscribe(response=>{
// if(response.success){
//   this.delete4rmFav(id)
// }
//   })
}


}