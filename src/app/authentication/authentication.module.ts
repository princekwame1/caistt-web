import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// modules (third-party)
import { AuthenticationRoutingModule } from './authentication-routing.module';

// components
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { TranslateModule } from '@ngx-translate/core';
// import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { RegisterComponent } from './register/register.component';


import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import {MatStepperModule} from '@angular/material/stepper';
@NgModule({
  declarations: [
LoginComponent,
ResetPasswordComponent,
ForgetPasswordComponent,
RegisterComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AuthenticationRoutingModule,
    TranslateModule.forChild(),
    NgxIntlTelInputModule,
    MatStepperModule,
    // ArchwizardModule
  ]
})
export class AuthenticationModule { }
