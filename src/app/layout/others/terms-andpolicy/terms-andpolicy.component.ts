import { Component } from '@angular/core';
declare var $:any;
declare var theme:any;
@Component({
  selector: 'app-terms-andpolicy',
  templateUrl: './terms-andpolicy.component.html',
  styleUrls: ['./terms-andpolicy.component.scss']
})
export class TermsAndpolicyComponent {
  ngOnInit(){

    if ($.isFunction($.fn['themePluginParallax']) && $('[data-plugin-parallax]').length) {
      theme.fn.intObsInit( '[data-plugin-parallax]:not(.manual)', 'themePluginParallax' );
  }
   // Counter
	if ($.isFunction($.fn['themePluginCounter']) && ( $('[data-plugin-counter]').length || $('.counters [data-to]').length )) {
		theme.fn.dynIntObsInit( '[data-plugin-counter]:not(.manual), .counters [data-to]', 'themePluginCounter', theme.PluginCounter.defaults );
	}
  
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
  
  $("[data-parent='#accordionServices']").on("click", function() {
  var trigger = $("[data-parent='#accordionServices']");
  $("#accordionServices .collapse.show").each(function() {
  if (trigger.attr("href") != ("#" + $("#accordionServices .collapse.show").attr("id"))) {
  $("#accordionServices .collapse.show").removeClass("show");
  }
  });
  });
  
  
  
  // Read More
  if ($.isFunction($.fn['themePluginReadMore']) && $('[data-plugin-readmore]').length) {
  theme.fn.intObsInit( '[data-plugin-readmore]:not(.manual)', 'themePluginReadMore' );
  }
  
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


  	// Chart.Circular
	if ($.isFunction($.fn['themePluginChartCircular']) && ( $('[data-plugin-chart-circular]').length || $('.circular-bar-chart').length )) {
		theme.fn.dynIntObsInit( '[data-plugin-chart-circular]:not(.manual), .circular-bar-chart:not(.manual)', 'themePluginChartCircular', theme.PluginChartCircular.defaults );
	}
  }
}
