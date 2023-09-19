
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { HttpErrorResponse } from '@angular/common/http';
import { DeviceDetectorService, DeviceInfo } from 'ngx-device-detector';
import { BusinessService } from 'src/app/shared/service/business.service';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  isLinear = false;

  private destroy$: Subject<void> = new Subject<void>();
  businessCategoryData:any;
  loginForm!: FormGroup;
  loginInProgress = false;
  countryData:any;
	separateDialCode = false;
	SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  registerForm!: FormGroup;
  registerInProgress = false;
  banner_imageData:any;
  deviceInfo!:DeviceInfo
  icon_imageData: any;
  document_imageData:any;
  public show: boolean = false

  hide:boolean=true;



  constructor(
    private fb: FormBuilder,
    private router: Router,
   
   
    private deviceDetectorService: DeviceDetectorService,
    private businessService:BusinessService
  ) { 

    
        this.registerForm = this.fb.group({
          name: ['', Validators.required],
          email: ['',[Validators.email, Validators.required] ],
          mobile_number: ['', Validators.required,],
          password: ['', [Validators.required,Validators.minLength(8)]],
          password_confirmation: ['', Validators.required],
          business_name: ['', Validators.required],
          business_category_id: ['', Validators.required],
          country_id: ['', Validators.required],
          website: ['', Validators.required],
          logo:["",Validators.required],
           background_image:[""],
          business_certificate: [null, Validators.required]
         
        }, { validators: [this.mustMatchValidator('password', ' password_confirmation')] });

        
  }

  ngOnInit(): void {
    this.getBusiness_category();
    this.getBusiness_country();

 
  
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();

}



register(): void {

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
    title: 'Please check your email  to verify your acoount ',
    showConfirmButton: false,
   timer: 3500
  });

  this.router.navigate(['/']);

//  this.registerForm.markAllAsTouched();

    // if (this.registerInProgress || this.registerForm.invalid) {
    //     return;
    // }

// this.registerInProgress = true;

  //  this.businessService.registerBusiness(this.registerForm.value)
  //  .pipe(
  //       finalize(() => this.registerInProgress = false),
  //       takeUntil(this.destroy$),
  //   )
  //   .subscribe(
  //       (response) =>{
  //         if(response.status ===200 || 204){
     
        
  //          };


        // }
        // ,
        
        // error => {
        //     if (error instanceof HttpErrorResponse) {
        //         this.registerForm.setErrors({
        //             server: `${error.error.message}`,
        //         });
        //     } else {
        //         alert(error);
        //     }
        // },
    // );
}



getBusiness_category() {
  return this.businessService.getBusiness_Category().subscribe(response => {
    this.businessCategoryData = response.data;
    console.log(this.businessCategoryData)


  })
};



getBusiness_country() {
  return this.businessService.getCountry().subscribe(response => {

    this.countryData = response.data;

    console.log(this.countryData)

  })
};
fileChange(event: any) {

  const file = event.target.files[0];
  this.registerForm.patchValue({ business_certificate: file });


}



Change(event: any) {

  const file = event.target.files[0];
  this.registerForm.patchValue({  background_image: file });
  //  this.EditvalidationForm1.patchValue({ featured_image: file });

 const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
 if (file && allowedMimeTypes.includes(file.type)) {
  const reader = new FileReader();
  reader.onload = () => {
     this.banner_imageData = reader.result as string;
  };
  reader.readAsDataURL(file);
 }

}



OnfileChange(event: any) {

  const file = event.target.files[0];
  this.registerForm.patchValue({ logo: file });
  //  this.EditvalidationForm1.patchValue({ featured_image: file });


 const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
 if (file && allowedMimeTypes.includes(file.type)) {
  const reader = new FileReader();
  reader.onload = () => {
     this.icon_imageData = reader.result as string;
  };
  reader.readAsDataURL(file);
 }


}

 mustMatchValidator(first: string, second: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
      const firstControl = control.get(first);
      const secondControl = control.get(second);

      if (firstControl && secondControl) {
          if (firstControl.value !== secondControl.value && firstControl.value && secondControl.value) {
              const errors = secondControl.errors || {};

              secondControl.setErrors(Object.assign({}, errors, { mustMatch: true }));
          } else if (secondControl.errors) {
              const errors = Object.assign({}, secondControl.errors);

              delete errors['mustMatch'];

              if (Object.keys(errors).length > 0) {
                  secondControl.setErrors(errors);
              } else {
                  secondControl.setErrors(null);
              }
          }
      }

      return null;
  };
}


showPassword(){
  this.show = !this.show
}

togglePass(){
  this.hide=!this.hide;
}
}
