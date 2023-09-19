import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { enquiryResolver } from '../shared/resolver/enquiry.resolver';
import { wishlistResolver } from '../shared/resolver/wishlist.resolver';
import { QuickviewComponent } from './quickview/quickview.component';
import { AllProductComponent } from './all-product/all-product.component';
// import { categoryResolver } from '../shared/resolver/category.resolver';

const routes: Routes = [
  
  { path: '', component: ProductComponent },
  { path: 'product-category/:id', component: ProductCategoryComponent 
// resolve:{
//   category:categoryResolver
// }
},
  { path:'product-list', component:AllProductComponent},
   { path:'single-product/:id', component:SingleProductComponent},
   { path:'single', component:QuickviewComponent},

  {path:'enquiry/:id', component:EnquiryComponent,     
  resolve: {
    enquiry:enquiryResolver,
},},
  {path:'wish-list', component:WishListComponent,
  resolve:{
    wishlist:wishlistResolver,
  }
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    enquiryResolver,
    wishlistResolver,

],
})
export class ProductRoutingModule { }
