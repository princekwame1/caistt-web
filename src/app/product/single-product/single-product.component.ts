import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ProductService } from 'src/app/shared/service/product.service';
declare var $:any;
declare var theme:any;
@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss',"../../../assets/css/skins/default.css"]
})
export class SingleProductComponent {
// ngOnInit(){
  
// 	// Float Element
// 	if ($.isFunction($.fn['themePluginFloatElement']) && $('[data-plugin-float-element]').length) {
// 		theme.fn.intObsInit( '[data-plugin-float-element], [data-plugin-float-element-svg]', 'themePluginFloatElement' );
// 	}

// 	// Hover Effect
// 	if ($.isFunction($.fn['themePluginHoverEffect']) && $('[data-plugin-hover-effect], .hover-effect-3d').length) {
// 		theme.fn.intObsInit( '[data-plugin-hover-effect]:not(.manual), .hover-effect-3d:not(.manual)', 'themePluginHoverEffect' );
// 	}

// 	// Animated Icon
// 	if ($.isFunction($.fn['themePluginIcon']) && $('[data-icon]').length) {
// 		theme.fn.dynIntObsInit( '[data-icon]:not(.svg-inline--fa)', 'themePluginIcon', theme.PluginIcon.defaults );
// 	}

// 	// In Viewport Style
// 	if ($.isFunction($.fn['themePluginInViewportStyle']) && $('[data-inviewport-style]').length) {

// 		$(function() {
// 			$('[data-inviewport-style]:not(.manual)').each(function() {
// 				var $this = $('[data-inviewport-style]'),
// 					opts;

// 				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
// 				if (pluginOptions)
// 					opts = pluginOptions;

// 				$this.themePluginInViewportStyle(opts);
// 			});
// 		});

// 	}




// 	// Parallax
// 	if ($.isFunction($.fn['themePluginParallax']) && $('[data-plugin-parallax]').length) {
// 		theme.fn.intObsInit( '[data-plugin-parallax]:not(.manual)', 'themePluginParallax' );
// 	}

// 	// Progress Bar
// 	if ($.isFunction($.fn['themePluginProgressBar']) && ( $('[data-plugin-progress-bar]') || $('[data-appear-progress-animation]').length )) {
// 		theme.fn.dynIntObsInit( '[data-plugin-progress-bar]:not(.manual), [data-appear-progress-animation]', 'themePluginProgressBar', theme.PluginProgressBar.defaults );
// 	}

// 	// Random Images
// 	if ($.isFunction($.fn['themePluginRandomImages']) && $('[data-plugin-random-images]').length) {
// 		theme.fn.dynIntObsInit( '.plugin-random-images', 'themePluginRandomImages', theme.PluginRandomImages.defaults );
// 	}

// 	// Read More
// 	if ($.isFunction($.fn['themePluginReadMore']) && $('[data-plugin-readmore]').length) {
// 		theme.fn.intObsInit( '[data-plugin-readmore]:not(.manual)', 'themePluginReadMore' );
// 	}

	


// 	// Scrollable
// 	if ( $.isFunction($.fn[ 'nanoScroller' ]) && $('[data-plugin-scrollable]').length ) {
// 		theme.fn.intObsInit( '[data-plugin-scrollable]', 'themePluginScrollable' );
// 	}


// 	// Sort
// 	if ($.isFunction($.fn['themePluginSort']) && ( $('[data-plugin-sort]').length || $('.sort-source').length )) {
// 		theme.fn.intObsInit( '[data-plugin-sort]:not(.manual), .sort-source:not(.manual)', 'themePluginSort' );
// 	}

// 	// Star Rating
// 	if ($.isFunction($.fn['themePluginStarRating']) && $('[data-plugin-star-rating]').length) {
// 		theme.fn.intObsInit( '[data-plugin-star-rating]:not(.manual)', 'themePluginStarRating' );
// 	}



// 	// Toggle
// 	if ($.isFunction($.fn['themePluginToggle']) && $('[data-plugin-toggle]').length) {
// 		theme.fn.intObsInit( '[data-plugin-toggle]:not(.manual)', 'themePluginToggle' );
// 	}


// 	// Video Background
// 	if ($.isFunction($.fn['themePluginVideoBackground']) && $('[data-plugin-video-background]').length) {
// 		theme.fn.intObsInit( '[data-plugin-video-background]:not(.manual)', 'themePluginVideoBackground' );
// 	}

// 	// Sticky Header
// 	if (typeof theme.StickyHeader !== 'undefined') {
// 		theme.StickyHeader.initialize();
// 	}

// 	// Nav Menu
// 	if (typeof theme.Nav !== 'undefined') {
// 		theme.Nav.initialize();
// 	}

// 	// Search
// 	if (typeof theme.Search !== 'undefined' && ( $('#searchForm').length || $('.header-nav-features-search-reveal').length )) {
// 		theme.Search.initialize();
// 	}

// 	// Newsletter
// 	if (typeof theme.Newsletter !== 'undefined' && $('#newsletterForm').length) {
// 		theme.fn.intObs( '#newsletterForm', 'theme.Newsletter.initialize();', {} );
// 	}

// 	// Account
// 	if (typeof theme.Account !== 'undefined' && ( $('#headerAccount').length || $('#headerSignUp').length || $('#headerSignIn').length || $('#headerRecover').length || $('#headerRecoverCancel').length )) {
// 		theme.Account.initialize();
// 	}

// }
productData:any;
BusinessProductData:any;
galleryData:any;
  RelatedProduct: any;
  selectedImageUrl: string;


  constructor(private route:ActivatedRoute, private productService:ProductService ){

    this.selectedImageUrl = 'http://www.jqueryscript.net/demo/Feature-rich-Product-Gallery-With-Image-Zoom-xZoom/images/gallery/original/01_b_car.jpg';

  }

  ngOnInit(){

    
	// Random Images
	if ($.isFunction($.fn['themePluginRandomImages']) && $('[data-plugin-random-images]').length) {
		theme.fn.dynIntObsInit( '.plugin-random-images', 'themePluginRandomImages', theme.PluginRandomImages.defaults );
	}
   
	// GDPR
	if ($.isFunction($.fn['themePluginGDPR']) && $('[data-plugin-gdpr]').length) {

		$(function() {
			$('[data-plugin-gdpr]:not(.manual)').each(function() {
				var $this = $('[data-plugin-gdpr]:not(.manual)'),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginGDPR(opts);
			});
		});

	}

	// GDPR Wrapper
	if ($.isFunction($.fn['themePluginGDPRWrapper']) && $('[data-plugin-gdpr-wrapper]').length) {

		$(function() {
			$('[data-plugin-gdpr-wrapper]:not(.manual)').each(function() {
				var $this = $('[data-plugin-gdpr-wrapper]:not(.manual)'),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginGDPRWrapper(opts);
			});
		});

	}

	// Hover Effect
	if ($.isFunction($.fn['themePluginHoverEffect']) && $('[data-plugin-hover-effect], .hover-effect-3d').length) {
		theme.fn.intObsInit( '[data-plugin-hover-effect]:not(.manual), .hover-effect-3d:not(.manual)', 'themePluginHoverEffect' );
	}

	// Animated Icon
	if ($.isFunction($.fn['themePluginIcon']) && $('[data-icon]').length) {
		theme.fn.dynIntObsInit( '[data-icon]:not(.svg-inline--fa)', 'themePluginIcon', theme.PluginIcon.defaults );
	}

	// In Viewport Style
	if ($.isFunction($.fn['themePluginInViewportStyle']) && $('[data-inviewport-style]').length) {

		$(function() {
			$('[data-inviewport-style]:not(.manual)').each(function() {
				var $this = $('[data-inviewport-style]:not(.manual)'),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginInViewportStyle(opts);
			});
		});

	}


	// Masonry
	if ($.isFunction($.fn['themePluginMasonry']) && $('[data-plugin-masonry]').length) {

		$(function() {
			$('[data-plugin-masonry]:not(.manual)').each(function() {
				var $this = $('themePluginMasonry'),
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

	// Animate
	if ($.isFunction($.fn['themePluginAnimate']) && $('[data-appear-animation]').length) {
		theme.fn.dynIntObsInit( '[data-appear-animation], [data-appear-animation-svg]', 'themePluginAnimate', theme.PluginAnimate.defaults );
	}

	// Animated Content
	if ($.isFunction($.fn['themePluginAnimatedContent'])) {
		theme.fn.intObsInit( '[data-plugin-animated-letters]:not(.manual), .animated-letters', 'themePluginAnimatedContent' );
		theme.fn.intObsInit( '[data-plugin-animated-words]:not(.manual), .animated-words', 'themePluginAnimatedContent' );
	}

	// Before / After
	if ($.isFunction($.fn['themePluginBeforeAfter']) && $('[data-plugin-before-after]').length) {
		theme.fn.intObsInit( '[data-plugin-before-after]:not(.manual)', 'themePluginBeforeAfter' );
	}

	// Carousel Light
	if ($.isFunction($.fn['themePluginCarouselLight']) && $('.owl-carousel-light').length) {
		theme.fn.intObsInit( '.owl-carousel-light', 'themePluginCarouselLight' );
	}

	// Carousel
	if ($.isFunction($.fn['themePluginCarousel']) && $('[data-plugin-carousel]:not(.manual), .owl-carousel:not(.manual)').length) {
		theme.fn.intObsInit( '[data-plugin-carousel]:not(.manual), .owl-carousel:not(.manual)', 'themePluginCarousel' );
	}



  this.route.params.subscribe(params => {
    this.productService.getProductbyID(params['id']).subscribe(response => {

  this.productData=response.data;
  this.FilterByCategory(  this.productData.category.name)
 
   this.galleryData=response.data.gallery;
 this.getProductbyBusiness(this.productData.business.id)
       
       })
     });


     
  }


  onThumbnailClick(imageUrl: string) {
    // Update the selected image URL when a thumbnail is clicked
    this.selectedImageUrl = imageUrl;
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
    nav: true
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
   items:5,
    nav: true
  }

  FilterByCategory(name:any){
    return this.productService.FilterProductByCategory(name).subscribe(response=>{
      this.RelatedProduct=response.data;
  console.log(this.RelatedProduct)
    })
  }

add2Enquiry(id:any){
  return this.productService.addQuotebasket(id).subscribe(response=>{
    this.getEnquireData()
  })
}


getEnquireData(){
  return this.productService.getQuoteBasket().subscribe(response=>{
    
  })

}

getProductbyBusiness(id:any){
  this.productService.ProductByBusiness(id).subscribe(response=>{
    this.BusinessProductData=response.data;
    console.log(this.BusinessProductData)

  })
}

}


