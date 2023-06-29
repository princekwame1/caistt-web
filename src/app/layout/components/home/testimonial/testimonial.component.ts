import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
declare var $:any;
declare var theme:any;
@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.scss']
})
export class TestimonialComponent {
ngOnInit(){
  // Counter
	if ($.isFunction($.fn['themePluginCounter']) && ( $('[data-plugin-counter]').length || $('.counters [data-to]').length )) {
		theme.fn.dynIntObsInit( '[data-plugin-counter]:not(.manual), .counters [data-to]', 'themePluginCounter', theme.PluginCounter.defaults );
	}


	// Carousel Light
	if ($.isFunction($.fn['themePluginCarouselLight']) && $('.owl-carousel-light').length) {
		theme.fn.intObsInit( '.owl-carousel-light', 'themePluginCarouselLight' );
	}

	// Carousel
	if ($.isFunction($.fn['themePluginCarousel']) && $('[data-plugin-carousel]:not(.manual), .owl-carousel:not(.manual)').length) {
		theme.fn.intObsInit( '[data-plugin-carousel]:not(.manual), .owl-carousel:not(.manual)', 'themePluginCarousel' );
	}
}

customOptions: OwlOptions = {
  loop: true,
  autoplay:true,
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false,
  dots: false,
  navSpeed: 700,

}

}
