import { Component, Inject } from '@angular/core';
import {Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { EnquiryService } from 'src/app/shared/service/enquiry.service';

declare var $:any;
declare var theme:any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss',]
})
export class NavbarComponent {
enquiryLength: any;
wishListLength:any;
	
constructor(
	public translateService:TranslateService,
	private enquiryservice:EnquiryService
  ){
translateService.addLangs(['en','fr','zh']);
if (localStorage.getItem('locale')) {
	translateService.setDefaultLang(localStorage.getItem('locale')||"");
	translateService.use(localStorage.getItem('locale')||"");
} else {
	translateService.setDefaultLang('en');
	translateService.use('en');
	localStorage.setItem('locale', 'en');
}
}




ngOnInit(){

	// Sticky Header
	if (typeof theme.StickyHeader !== 'undefined') {
		theme.StickyHeader.initialize();
	}

	// Nav Menu
	if (typeof theme.Nav !== 'undefined') {
		theme.Nav.initialize();
	}



this.enquiryservice.enquirylength.subscribe(res=>{
	this.enquiryLength= res;

})

this.enquiryservice.fetchEnquiryBasket().subscribe(res=>{
	console.log(res.data)
	this.enquiryservice.enquirylength.next(res.data.length)
});

this.enquiryservice.WishListlength.subscribe(res=>{
	this.wishListLength= res;

})

this.enquiryservice.fetchWishList().subscribe(res=>{
	console.log(res.data)
	this.enquiryservice.WishListlength.next(res.data.length)
});



  if ($.isFunction($.fn['themePluginSticky']) && $('[data-plugin-sticky]').length) {
		theme.fn.execOnceTroughWindowEvent( window, 'scroll.trigger.sticky', () =>{
			$('[data-plugin-sticky]:not(.manual)').each(() => {
				var $this = $(this),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginSticky(opts);
			});
		});
	}

  
	// Nav Menu
	if (typeof theme.Nav !== 'undefined') {
		theme.Nav.initialize();
	}

	

  	// Sticky Header
	if (typeof theme.StickyHeader !== 'undefined') {
		theme.StickyHeader.initialize();
	}

	// Nav Menu
	if (typeof theme.Nav !== 'undefined') {
		theme.Nav.initialize();
	}

	

	

}

translateSite(language:string){
	this.translateService.use(language)
	this.translateService.setDefaultLang(language)
    localStorage.setItem('locale', language)
}


}
