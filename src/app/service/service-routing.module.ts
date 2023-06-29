import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgriTechComponent } from './agri-tech/agri-tech.component';
import { DigitalMarketComponent } from './digital-market/digital-market.component';
import { InterTradeComponent } from './inter-trade/inter-trade.component';
import { OfftakeServiceComponent } from './offtake-service/offtake-service.component';


const routes: Routes = [
  
  


      {path:'agricutural-technology', component:AgriTechComponent},
      {path:'digital-market', component:DigitalMarketComponent},
      {path:'international-trade', component:InterTradeComponent},
      {path:'offtake-service', component:OfftakeServiceComponent},
] ;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
