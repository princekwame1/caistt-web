import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LayoutComponent } from './layout.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { TermsAndpolicyComponent } from './others/terms-andpolicy/terms-andpolicy.component';

const routes: Routes = [
  
  
  {
    path: '',
    component: LayoutComponent,

    children: [

      {
        path: '', component:HomeComponent,
      },
      // {path:'chat', component:AboutComponent},
      {path:'about-us', component:AboutComponent},
      {path:'contact', component:ContactComponent},
     { path: 'service', loadChildren: () => import('../service/service.module').then(m => m.ServiceModule) },
     { path: 'product', loadChildren: () => import('../product/product.module').then(m=>m.ProductModule)},
  
{ path: 'business', loadChildren: () => import('../business/business.module').then(m => m.BusinessModule) },
{ path: 'dashboard', loadChildren: () => import('./user-dashboard/user-dashboard.module').then(m => m.UserDashboardModule) },
{path:"terms", component:TermsAndpolicyComponent}

    ]}

] ;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
