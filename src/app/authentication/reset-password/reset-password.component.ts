import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
//  import { ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from 'src/app/shared/service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {

newPasswordForm:FormGroup;
hide:boolean=true;
constructor(private fb:FormBuilder,private route: ActivatedRoute,private authService:AuthService,public router: Router){

  this.newPasswordForm=this.fb.group({
    password:['', [Validators.required]],
    password_confirmation:['', [Validators.required]],
    token:[],
    email:[]
    
  },
  {
    validator: this.passwordMatchValidator // add custom validator to the form group
  }
  )


}



ngOnInit(): void{



  this.route.params.subscribe(params=>{
console.log(params['token'])
    this.newPasswordForm.patchValue({token:params['token']});
    this.newPasswordForm.patchValue({email:this.route.snapshot.queryParamMap.get('email')})
  });
}

passwordMatchValidator(newPasswordForm:FormGroup) {
  const password = newPasswordForm.get('password')?.value;
  const confirmPassword = newPasswordForm.get('password_confirmation')?.value;

  return password === confirmPassword ? null : { mismatch: true };
}





reset(){
return this.authService.ResetPassword(this.newPasswordForm.value).subscribe(response=>{
console.log(response)
if(response.status ===200 || 204){
  Swal.fire({
    position: 'center',
    icon: 'success',
    backdrop: `
    rgba(255,255,255,0.99)
  
    no-repeat`,
    showClass: {
      popup: 'animate__animated animate__fadeIn'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOut'
    },
    title: 'Password reset was successful',
    showConfirmButton: false,
    timer: 3500
  });
   this.router.navigate(['/auth/login']);
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

togglePass(){
  this.hide=!this.hide;
}

}