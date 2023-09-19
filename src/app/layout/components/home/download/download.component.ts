import { Component } from '@angular/core';
declare var $:any;
declare var theme:any;
@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss',"../../../../../assets/css/demos/demo-app-landing.css"]
})
export class DownloadComponent {
  constructor() { }

  ngOnInit(): void {
    	// Animated Icon
	if ($.isFunction($.fn['themePluginIcon']) && $('[data-icon]').length) {
		theme.fn.dynIntObsInit( '[data-icon]:not(.svg-inline--fa)', 'themePluginIcon', theme.PluginIcon.defaults );
	}

  
	// Float Element
	if ($.isFunction($.fn['themePluginFloatElement']) && $('[data-plugin-float-element]').length) {
		theme.fn.intObsInit( '[data-plugin-float-element], [data-plugin-float-element-svg]', 'themePluginFloatElement' );
	}

  }
}
