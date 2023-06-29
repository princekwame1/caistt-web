import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { EnquiryService } from 'src/app/shared/service/enquiry.service';
import {ActivatedRoute} from '@angular/router'
declare var $:any;
declare var theme:any;
@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.scss','../../../assets/css/skins/default.css']
})
export class EnquiryComponent implements OnInit {
  files: any;
  enquiryData:any;
  enquiryForm:FormGroup;
  constructor(
     private EquiryService:EnquiryService,
     private fb:FormBuilder,
     private route:ActivatedRoute
     ) { 


console.log(this.route.snapshot.data)
    this.enquiryForm = this.fb.group({
    
      content: ["", Validators.required],
      attachment:['', Validators.required],
     

    });
  
     }

  ngOnInit(){

this.enquiryData=this.route.snapshot.data['enquiry'].data;
     console.log(this.enquiryData)
    // this.getEnquiryItems();


  if ($.isFunction($.fn['themePluginAnimate']) && $('[data-appear-animation]').length) {
      theme.fn.dynIntObsInit( '[data-appear-animation], [data-appear-animation-svg]', 'themePluginAnimate', theme.PluginAnimate.defaults );
  }
  
  
  
  // Animated Content
  if ($.isFunction($.fn['themePluginAnimatedContent'])) {
      theme.fn.intObsInit( '[data-plugin-animated-letters]:not(.manual), .animated-letters', 'themePluginAnimatedContent' );
      theme.fn.intObsInit( '[data-plugin-animated-words]:not(.manual), .animated-words', 'themePluginAnimatedContent' );
  }
  	// Sticky
	if ($.isFunction($.fn['themePluginSticky']) && $('[data-plugin-sticky]').length) {
		theme.fn.execOnceTroughWindowEvent( window, 'scroll.trigger.sticky', function(){
			$('[data-plugin-sticky]:not(.manual)').each(function() {
				var $this = $('[data-plugin-sticky]:not(.manual)'),
					opts;

				var pluginOptions = theme.fn.getOptions($this.data('plugin-options'));
				if (pluginOptions)
					opts = pluginOptions;

				$this.themePluginSticky(opts);
			});
		});
	}

  
 


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

  onSelect(event:any){
    const file = event.target.files[0];
    this.enquiryForm.patchValue({ attachment: file });
  }

  getEnquiryItems(){
    this.EquiryService.fetchEnquiryBasket().subscribe(response=>{
      this.enquiryData= response.data;
   });
  }

  delete4Enquiry(id:any){
    this.EquiryService.deleteEnquiry(id).subscribe(response=>{
      if(response.success){
        this.EquiryService.enquirylength.next(this.enquiryData)
      }
      this.getEnquiryItems();
    })
  }

  postEnquiry(){
// console.log(this.enquiryForm.value)
    this.EquiryService.postEnquiry(this.enquiryForm.value).subscribe(response=>{
      this.getEnquiryItems();
this.EquiryService.enquirylength.next(this.enquiryData)

    })
  }
}
