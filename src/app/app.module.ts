import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ArchwizardModule } from 'angular-archwizard';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';




import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HTTP_INTERCEPTORS, HttpClient , HttpClientModule ,  } from '@angular/common/http';
import { Page404Component } from './others/page404/page404.component';
import { ChatBoxComponent } from './others/chat-box/chat-box.component';
import { CartComponent } from './others/cart/cart.component';
import { InterceptorInterceptor } from './shared/interceptor/interceptor.interceptor';
// import { FaqComponent } from './others/faq/faq.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    ChatBoxComponent,
    CartComponent,
    // FaqComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    // ArchwizardModule,
    // Ng2SearchPipeModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:httpTranslateLoader,
        deps:[HttpClient]
      }
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function httpTranslateLoader(http:HttpClient){
  return new TranslateHttpLoader(http)
}