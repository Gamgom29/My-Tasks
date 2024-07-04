import { Component } from '@angular/core';
import { FormBuilder, FormControlOptions, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(
    private _FormBuilder:FormBuilder ,
    private _ToastrService:ToastrService ,
    private _NgxSpinnerService:NgxSpinnerService,
    private _AuthService:AuthService,
    private _router:Router){}
  loginForm:FormGroup= this._FormBuilder.group({
    email:['' , Validators.required],
    password:['' , Validators.required],
  })

  handleForm(){
    this._NgxSpinnerService.show()
    if(this.loginForm.valid){
      this._AuthService.login(this.loginForm.value).subscribe({
        next:res=>{
          console.log(res);
          this._ToastrService.success('Welcome');
          this._NgxSpinnerService.hide();
          this._router.navigate(['/home']);
          localStorage.setItem('taskstoken' , res.data.token);
          this._AuthService.userName.next(res.data.user.name);
          console.log(this._AuthService);
          
        },
        error:err=>{
          console.log(err);
          this._ToastrService.error(err.error.message)
          this._NgxSpinnerService.hide();
        }
      })
    }
  }

}
