import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import {Dialog, DialogRef, DIALOG_DATA} from '@angular/cdk/dialog'
import { CreateTaskComponent } from '../create-task/create-task.component';
import { TasksService } from '../../core/services/tasks.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(
    public dialog: Dialog,
    private _TasksService:TasksService){}

    ngOnInit(){
    this.getAllTasks();
    }
    allTasksCount!:any;

    getAllTasks(){
      this._TasksService.getAllTasks().subscribe({
        next:res=>{
          console.log(res);
          this.todo = res.data.list;
          this.allTasksCount = res.data.list.length;
          console.log(this.allTasksCount);
          this.filterTasks();
        },
        error:err=>{
          console.log(err);
        }
      });
    }

  todo:Array<any> = [];
  done:Array<any> = [];

  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {

      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
      
      console.log(event.container.data[0]);
      //console.log('id',event.previousContainer.data[0]._id );
      
      this.updateTask(event.container.data[0]._id)
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateTaskComponent, {
      width: '750px',
    });


    dialogRef.closed.subscribe(result => {
      console.log('The dialog was closed');
      this.getAllTasks();
    });
  }
  
  updateTask(id:any){
    this._TasksService.updateTask(id).subscribe({
      next:res=>{
        console.log(res);
      },
      error:err=>{
        console.log(err);
      }
    })
  }
  filterTasks(){
    this.done = this.todo.filter(item=> item.checked == true);
    this.todo = this.todo.filter(item=> item.checked == false);
    console.log(this.todo);
    
  }
  delTask(id:any){
    console.log(id);
    this._TasksService.deleteTask(id).subscribe({
      next:res=>{
        console.log(res);
        this.todo = this.todo.filter(item => item._id != id);
        this.done = this.done.filter(item => item._id != id);
        this.allTasksCount-=1;
      },
      error:err=>{
        console.log(err);
        
      }
    })
  }
}
