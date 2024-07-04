import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TasksService } from '../core/services/tasks.service';
import { UpdatePasswordComponent } from '../components/update-password/update-password.component';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-blank-navbar',
  templateUrl: './blank-navbar.component.html',
  styleUrl: './blank-navbar.component.css'
})
export class BlankNavbarComponent implements OnInit {
  constructor(
    private _Router:Router,
    public dialog: Dialog,
    private _TasksService:TasksService,
    private _AuthService:AuthService){}
    userName!:String;
    ngOnInit(): void {
      this._AuthService.getUser().subscribe({
        next:res=>{
          console.log(res);
          this.userName = res.data.user.name;
        },
        error:err=>{
          console.log(err);
        }
      })
    }
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
