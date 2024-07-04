import { Component } from '@angular/core';
import { FormBuilder, FormControlOptions, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { AuthService } from '../../core/services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(
    private _FormBuilder:FormBuilder ,
    private _ToastrService:ToastrService ,
    private _NgxSpinnerService:NgxSpinnerService,
    private _AuthService:AuthService,
    private _router:Router){}
stateOptions: any[] = [{ label: 'Male', value: 'male' },{ label: 'Female', value: 'female' }];

Value!:string;

registerForm:FormGroup = this._FormBuilder.group({
  email:['' , [Validators.required , Validators.email]],
  name:['' , Validators.required] , 
  password:['' , [Validators.required , Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]],
  passwordConfirm:['' ],
  gender:['', [Validators.required]],
} , {validators:[this.confirmPassword] } as FormControlOptions);

  confirmPassword(group:FormGroup):void{
    const pass = group.get('password');
    const repass = group.get('passwordConfirm');
    if(repass?.value == ''){      
      repass.setErrors({required:true});
    }
    else if(pass?.value != repass?.value){
      repass?.setErrors({misMatch:true});
    }
  }

  
  handleForm(){
    this._NgxSpinnerService.show();
    if(this.registerForm.valid){
      this._AuthService.register(this.registerForm.value).subscribe({
      next:res=>{
        this._NgxSpinnerService.hide();
        this._ToastrService.success(`${res.message}`);
        this._router.navigate(['/login']);
        console.log(res);
      },
      error:err=>{
        console.log(err);
        this._ToastrService.error('User Already Exists');
        this._NgxSpinnerService.hide();
      }
        });
    }
    else {
      this.registerForm.markAllAsTouched;
    }
  }
}
