import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './others/page404/page404.component';

const routes: Routes = [
  
  
{ path: '', loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) },


{path:'auth', loadChildren:()=> import('./authentication/authentication.module').then(m=>m.AuthenticationModule)},
  
  
  
  
  
  

{path:'**', component:Page404Component},


]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
