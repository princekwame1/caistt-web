import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessRoutingModule } from './business-routing.module';
import { BusinessComponent } from './business.component';
import { SingleBusinessComponent } from './single-business/single-business.component';
import { BusinessListComponent } from './business-list/business-list.component';


@NgModule({
  declarations: [
    BusinessComponent,
    SingleBusinessComponent,
    BusinessListComponent
  ],
  imports: [
    CommonModule,
    BusinessRoutingModule
  ]
})
export class BusinessModule { }
