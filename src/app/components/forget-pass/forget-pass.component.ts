import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { MatStepper, MatStepperIntl } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.component.html',
  styleUrl: './forget-pass.component.css'
})
export class ForgetPassComponent {
  @ViewChild('stepper') private stepper!: MatStepper;
  constructor(private _AuthService:AuthService , 
    private _ToastrService:ToastrService,
    private _NgxSpinnerService:NgxSpinnerService,
    private _Router: Router,
  ){}
  token!:any;
  stepperIndx:number = 0;
  preview:boolean = false;
  emailOK:boolean = false;
  email:FormControl = new FormControl('' , [Validators.required]);

    passgroup:FormGroup = new FormGroup({
    OTP:new FormControl('',Validators.required),
    password:new FormControl('' , [  Validators.required , Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]),
    passwordConfirm:new FormControl('' , Validators.required)
  });

  senEmail(){
    console.log(this.email.value);
    if(this.email.valid){
          this.stepperIndx = 1;
          this.emailOK = true;
          this._ToastrService.success("Code Sent Check Your Mail");
      let model = {
        email:this.email.value
      }
      this._AuthService.forgetPassword(model).subscribe({
        next:res=>{
        },
        error:err=>{
        }
      });
          
    }
  }

  changePass(){
    this._NgxSpinnerService.show();
    if(this.passgroup.valid){        
      console.log(this.passgroup.value);
      
      if(this.passgroup.value['password'] == this.passgroup.value['passwordConfirm'] ){
        this._AuthService.resetPassword(this.passgroup.value).subscribe({
          next:res=>{
            console.log(res);
            this._NgxSpinnerService.hide();
            this._ToastrService.success('Password Changed Successfully');
            this._Router.navigate(['/login']);
          },
          error:err=>{
            console.log(err);
            this._NgxSpinnerService.hide();
            this._ToastrService.success(err.error.message);
          }
        });
      }else{
        this._NgxSpinnerService.hide();
        this._ToastrService.error("Password Dosen't Match")
      }
    }
  }
}
