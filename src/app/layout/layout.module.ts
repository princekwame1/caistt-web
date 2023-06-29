import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NavbarComponent } from './partial/navbar/navbar.component';
import { FooterComponent } from './partial/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LogoComponent } from './components/shared/logo/logo.component';
import { SiderComponent } from './components/home/sider/sider.component';
import { AboutUsComponent } from './components/home/about-us/about-us.component';
import { ServicesComponent } from './components/home/services/services.component';
import { CategoriesComponent } from './components/home/categories/categories.component';
import { DownloadComponent } from './components/home/download/download.component';
import { ContactComponent } from './components/home/contact/contact.component';
import { TopSuppliersComponent } from './components/home/top-suppliers/top-suppliers.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AboutComponent } from './components/about/about.component';
import { TestimonialComponent } from './components/home/testimonial/testimonial.component';
import { DigitalMarketComponent } from '../service/digital-market/digital-market.component';
import { OfftakeServiceComponent } from '../service/offtake-service/offtake-service.component';
import { InterTradeComponent } from '../service/inter-trade/inter-trade.component';
import { AgriTechComponent } from '../service/agri-tech/agri-tech.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FaqComponent } from '../others/faq/faq.component';

@NgModule({
  declarations: [
    LayoutComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LogoComponent,
    SiderComponent,
    AboutUsComponent,
    ServicesComponent,
    CategoriesComponent,
    DownloadComponent,
    ContactComponent,
    TopSuppliersComponent,
    AboutComponent,
    TestimonialComponent,
    DigitalMarketComponent,
    OfftakeServiceComponent,
    InterTradeComponent,
    AgriTechComponent,
    FaqComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    CarouselModule,
    TranslateModule
  ]
})
export class LayoutModule { }
