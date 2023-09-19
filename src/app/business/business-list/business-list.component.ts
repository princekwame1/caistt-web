import { Component } from '@angular/core';
import { BusinessService } from 'src/app/shared/service/business.service';

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.scss']
})
export class BusinessListComponent {
constructor(private businessService:BusinessService){

}

ngOnInit(){
this.getbusinessCategory();
}

getbusinessCategory(){
this.businessService.getBusiness_Category().subscribe(response=>{
  console.log(response)
})
}
}
