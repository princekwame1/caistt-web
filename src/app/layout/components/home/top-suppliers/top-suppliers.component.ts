import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { BusinessService } from 'src/app/shared/service/business.service';
@Component({
  selector: 'app-top-suppliers',
  templateUrl: './top-suppliers.component.html',
  styleUrls: ['./top-suppliers.component.scss']
})
export class TopSuppliersComponent {
  businessData:any;
  constructor(

    private businessService:BusinessService
  ) { }

  ngOnInit(): void {
    this.getBusiness()
  }


  getBusiness(){
    return this.businessService.getBusiness().subscribe(response=>{
      this.businessData=response?.data;
    })
  }


  customOptions1: OwlOptions = {
    loop: true,
    autoplay:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplayHoverPause:true,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 3
      },
      740: {
        items: 5
      },
      940: {
        items: 7
      }
    },
    nav: true
  }

}

