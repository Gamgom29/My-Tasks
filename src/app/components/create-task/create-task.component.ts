import { Dialog , DialogRef} from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { TasksService } from '../../core/services/tasks.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.css'
})
export class CreateTaskComponent {
  constructor(
    public dialogRef: DialogRef,
    public dialog: Dialog,
    private _TasksService:TasksService,
    private _FormBuilder:FormBuilder,
    private _NgxSpinnerService : NgxSpinnerService,
    private _ToastrService:ToastrService,
  ) {}

  taskForm:FormGroup = this._FormBuilder.group({
    name:['' , Validators.required],
    content:['',Validators.required]
  })

  CreateTask(){
    this._NgxSpinnerService.show();
    if(this.taskForm.valid){
      this._TasksService.Createtask(this.taskForm.value).subscribe({
        next:res=>{
          console.log(res);
          this._NgxSpinnerService.hide();
          this._ToastrService.success('Task Created Successfully');
          this.dialogRef.close();
        },
        error:err=>{
          console.log(err);
          this._NgxSpinnerService.hide();
        }
      })
    }
  }

}
