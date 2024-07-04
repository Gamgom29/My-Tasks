import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from '../core/services/tasks.service';
import { UpdatePasswordComponent } from '../components/update-password/update-password.component';

@Component({
  selector: 'app-blank-navbar',
  templateUrl: './blank-navbar.component.html',
  styleUrl: './blank-navbar.component.css'
})
export class BlankNavbarComponent {
  constructor(
    private _Router:Router,
    public dialog: Dialog,
    private _TasksService:TasksService){}
  logout(){
    localStorage.removeItem('taskstoken');
    this._Router.navigate(['/login']);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(UpdatePasswordComponent, {
      width: '750px',
    });
    dialogRef.closed.subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
