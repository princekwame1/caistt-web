import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business.component';
import { SingleBusinessComponent } from './single-business/single-business.component';
import { BusinessListComponent } from './business-list/business-list.component';

const routes: Routes = [{ path: '', component: BusinessComponent },
{path:':name', component:SingleBusinessComponent},
{path:'list', component:BusinessListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
