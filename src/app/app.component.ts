import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'caistt';
constructor(
  public translateService: TranslateService,
  private router: Router
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

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Scrolls to the top of the page
      }
    });




  }
   
  }

