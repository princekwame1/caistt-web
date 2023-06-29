import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/service/auth.service';
 import Swal from 'sweetalert2';
 import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  Forget_Paswword:FormGroup ;



constructor(private fb:FormBuilder, private authService:AuthService, private router:Router){



this.Forget_Paswword = this.fb.group({
   email: ['', Validators.required],
});
}


ngOnInit(): void {
}


forgot_password(){
  this.authService.forget_password(this.Forget_Paswword.value).subscribe(response=>{
 console.log(response)
    if(response.status ===200 || 204){
      Swal.fire({
        position: 'center',
        icon: 'success',
        backdrop: `
        rgba(255,255,255,0.99)
      
        no-repeat`,
        showClass: {
          popup: 'animate__animated animate__fadeIn '
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOut'
        },
        title: 'Please check your email  for the reset link ',
        showConfirmButton: false,
        // timer: 3500
      });
      //  this.router.navigate(['/auth/login']);
     };
  
   
  
  
      } ,(errors)=>{
        Swal.fire({
          position: 'center',
          icon: 'error',
          backdrop: `
          rgba(255,255,255,0.97)
        
          no-repeat`,
          showClass: {
            popup: 'animate__animated animate__fadeIn'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOut'
          },
          title:errors.error.message,
          showConfirmButton: false,
          timer: 3500
        });
  
  })
 
  }
}


