import { AuthlayoutComponent } from './authlayout/authlayout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { BlanklayoutComponent } from './blanklayout/blanklayout.component';
import { authGuard } from './auth.guard';
import { UpdatePasswordComponent } from './components/update-password/update-password.component';
import { ForgetPassComponent } from './components/forget-pass/forget-pass.component';

const routes: Routes = [
  {
    path:'' , component:BlanklayoutComponent,canActivate:[authGuard],
    children:
    [
      {path:'' , redirectTo:'home',pathMatch:'full'},
      {path:'home' , component:HomeComponent},
    ]
  },
  
  {path:'' , component:AuthlayoutComponent ,
    children:
    [
      {path:'' , redirectTo:'login',pathMatch:'full'},
      {path:'login' , component:LoginComponent},
      {path:'register' , component:RegisterComponent},
      {path:'forgetPassword' , component:ForgetPassComponent}
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
