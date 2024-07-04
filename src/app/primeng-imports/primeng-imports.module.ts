import { NgModule , ChangeDetectorRef } from '@angular/core';
import { CommonModule , } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { SelectButtonModule } from 'primeng/selectbutton';
import { CalendarModule } from 'primeng/calendar';

import { PickListModule } from 'primeng/picklist';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { DialogModule} from '@angular/cdk/dialog';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import { InputOtpModule } from 'primeng/inputotp';

@NgModule({
  declarations: [],
  imports: [
    InputOtpModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    FloatLabelModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    DividerModule,
    SelectButtonModule,
    CalendarModule,
    PickListModule,
    CdkDropListGroup, CdkDropList, CdkDrag,
    DialogModule,
    AvatarModule,
    AvatarGroupModule

  ],
  exports:[
    InputOtpModule,
    FloatLabelModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    DividerModule,
    SelectButtonModule,
    CalendarModule,
    PickListModule,
    CdkDropListGroup, CdkDropList, CdkDrag,
    DialogModule,
    AvatarModule,
    AvatarGroupModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ]
})
export class PrimengImportsModule { }
