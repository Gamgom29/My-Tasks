import { DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrl: './update-password.component.css'
})
export class UpdatePasswordComponent {
  constructor(    public dialogRef: DialogRef,
    private _FormBuilder:FormBuilder,
    private _AuthService:AuthService,
    private _ToastrService:ToastrService,
    private _NgxSpinnerService:NgxSpinnerService
  ){}

  frmgrp:FormGroup = this._FormBuilder.group({
    passwordCurrant:['' , Validators.required],
    password:['' , Validators.required],
    passwordConfirm:['' , Validators.required],
  });

  handleForm(){
    this._NgxSpinnerService.show();
    if(this.frmgrp.valid){
      this._AuthService.updatePass(this.frmgrp.value).subscribe({
        next:res=>{
          this._NgxSpinnerService.hide();
          this._ToastrService.success('Password Updated ');
          console.log(res);
        },
        error:err=>{
          this._NgxSpinnerService.hide()
          this._ToastrService.error('Invalid Password');
          console.log(err);
        }
      })
    }
  }
}
