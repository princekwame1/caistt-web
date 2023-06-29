import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/service/auth.service';
import { DeviceDetectorService, DeviceInfo } from 'ngx-device-detector';
import { CookieService } from 'ngx-cookie-service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss',]
})
export class LoginComponent {
  hide:boolean=true;
  deviceInfo!:DeviceInfo


  loginForm:FormGroup


  constructor(private fb:FormBuilder, private authService:AuthService,private deviceDetectorService: DeviceDetectorService,private cookieService: CookieService,public router: Router,){
    this.loginForm=this.fb.group({
    email:['',[Validators.required,Validators.email]],
   password:['',[Validators.required]],
   user_type:['business', Validators.required],
   device_name:[]
    })
  }


  ngOnInit(){
   
    this.deviceInfo = this.deviceDetectorService.getDeviceInfo();
  const deviceType=this.deviceInfo.browser || this.deviceInfo.device || this.deviceInfo.deviceType;
   this.loginForm.patchValue({device_name:deviceType })
  }

login(){
  console.log(this.loginForm.value)

  if(this.loginForm.valid){}{
    this.authService.loginUser(this.loginForm.value).subscribe(response=>{
      if(response.success=true){
        const userDetails = { id: response.data.business.id, name: response.data.business.business_name, email: response.data.business.email };
        this.cookieService.set('userDetails', JSON.stringify(userDetails));
        localStorage.setItem('user', JSON.stringify( response.data.token));
        this.router.navigate([""]);
    
    
    
      }
      else{
        // this.toastr.error(response.error.message);
    
      }
    })
        }
}

togglePass(){
  this.hide=!this.hide;
}
}
