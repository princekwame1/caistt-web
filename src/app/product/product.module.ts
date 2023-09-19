import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { TranslateModule } from '@ngx-translate/core';
import {ToastrModule} from 'ngx-toastr';
import { WishListComponent } from './wish-list/wish-list.component';
import { QuickviewComponent } from './quickview/quickview.component';
import { AllProductComponent } from './all-product/all-product.component';

@NgModule({
  declarations: [
    ProductComponent,
    ProductCategoryComponent,
    SingleProductComponent,
    EnquiryComponent,
    WishListComponent,
    QuickviewComponent,
    AllProductComponent,

  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    NgxPaginationModule,
    CarouselModule,
    TranslateModule,
    ToastrModule,
    ReactiveFormsModule,

  ]
})
export class ProductModule { }
