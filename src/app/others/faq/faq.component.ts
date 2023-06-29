import { Component } from '@angular/core';
declare var $:any;
declare var theme:any;

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {

	
ngOnInit(){
  	// Toggle
	if ($.isFunction($.fn['themePluginToggle']) && $('[data-plugin-toggle]').length) {
		theme.fn.intObsInit( '[data-plugin-toggle]:not(.manual)', 'themePluginToggle' );
	}

}
}
