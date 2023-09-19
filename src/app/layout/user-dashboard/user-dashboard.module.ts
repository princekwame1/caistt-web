import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { UserDashboardComponent } from './user-dashboard.component';
import { OrderHistoryComponent } from './order-history/order-history.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { EnquiryComponent } from './enquiry/enquiry.component';


@NgModule({
  declarations: [
    UserDashboardComponent,
    OrderHistoryComponent,
    DashboardHomeComponent,
    EnquiryComponent
  ],
  imports: [
    CommonModule,
    UserDashboardRoutingModule
  ]
})
export class UserDashboardModule { }
