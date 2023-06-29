import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
declare var $:any;
declare var theme:any;
@Component({
  selector: 'app-sider',
  templateUrl: './sider.component.html',
  styleUrls: ['./sider.component.scss']
})
export class SiderComponent {

constructor(){}

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

  // Parallax
	if ($.isFunction($.fn['themePluginParallax']) && $('[data-plugin-parallax]').length) {
		theme.fn.intObsInit( '[data-plugin-parallax]:not(.manual)', 'themePluginParallax' );
	}
}



}
