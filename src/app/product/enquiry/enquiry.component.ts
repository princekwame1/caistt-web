import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { EnquiryService } from 'src/app/shared/service/enquiry.service';
import {ActivatedRoute, Route, Router} from '@angular/router'
import { ProductService } from 'src/app/shared/service/product.service';
import Swal from 'sweetalert2';
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
  productData:any;


  constructor(
     private EquiryService:EnquiryService,
     private fb:FormBuilder,
     private route:ActivatedRoute,
     public productService:ProductService,
     public router: Router,
     ) { 


console.log(this.route.snapshot.data)
    this.enquiryForm = this.fb.group({
    product_id:[],
      content: ["", Validators.required],
      attachment:['', Validators.required],
     quantity:[null , Validators.required]

    });
  
     }

  ngOnInit(){

    this.route.params.subscribe(params => {
      this.productService.getProductbyID(params['id']).subscribe(response => {

    this.productData=response.data;
   
         
         })
       });

// this.enquiryData=this.route.snapshot.data['enquiry'].data;
//      console.log(this.enquiryData)
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

this.enquiryForm.patchValue({'product_id' :this.productData.id})
    this.EquiryService.postEnquiry(this.enquiryForm.value).subscribe(response=>{
      if(response.status ===200 || 204){
        Swal.fire({
          position: 'center',
          icon: 'success',
          backdrop: `
          rgba(255,255,255,0.99)
        
          no-repeat`,
          showClass: {
            popup: 'animate__animated animate__fadeIn '
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOut'
          },
          title: 'Your enquiry has been sent successfully  ' ,
          text:'We will get back to you shortly',
          showConfirmButton: false,
       timer: 3500
        });
     this.router.navigate(['/auth/login']);
       };
this.EquiryService.enquirylength.next(this.enquiryData)

    })
  }
}
