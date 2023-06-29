import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import Swal from 'sweetalert2';
declare var theme:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'caistt';
constructor(
  public translateService: TranslateService,
){
  translateService.addLangs(['en','fr','zh']);
if (localStorage.getItem('locale')) {
	translateService.setDefaultLang(localStorage.getItem('locale')||"");
	translateService.use(localStorage.getItem('locale')||"");
} else {
	translateService.setDefaultLang('en');
	translateService.use('en');
	localStorage.setItem('locale', 'en');
}
}

  ngOnInit(){
    // Swal.fire({
  
    //   imageUrl: 'https://unsplash.it/400/200',
    //   imageWidth: 500,
    //   imageHeight: 200,
   
    // })

   
  }

  onActivate(event:any) {
window.scroll(0,0);
 
    window.scroll({ 
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
     });
}
}