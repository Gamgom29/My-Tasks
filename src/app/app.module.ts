import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimengImportsModule } from './primeng-imports/primeng-imports.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from "ngx-spinner";
import { withInterceptors
  , HttpClientModule, HttpInterceptorFn, provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {provideNativeDateAdapter} from '@angular/material/core';
import { myhttpInterceptor } from './core/interceptors/myhttp.interceptor';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import { AuthlayoutComponent } from './authlayout/authlayout.component';
import { BlanklayoutComponent } from './blanklayout/blanklayout.component';
import { BlankNavbarComponent } from './blank-navbar/blank-navbar.component';
import { UpdatePasswordComponent } from './components/update-password/update-password.component';
import { ForgetPassComponent } from './components/forget-pass/forget-pass.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CreateTaskComponent,
    AuthlayoutComponent,
    BlanklayoutComponent,
    BlankNavbarComponent,
    UpdatePasswordComponent,
    ForgetPassComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    PrimengImportsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule.forRoot({ type: 'square-jelly-box' }),
    HttpClientModule,
    MatDatepickerModule,
    MatCardModule,

  ],
  providers: [
    provideHttpClient(withInterceptors([
      myhttpInterceptor
    ])),
    provideAnimationsAsync(),
    provideNativeDateAdapter(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
