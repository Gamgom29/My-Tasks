import { HttpClient } from '@angular/common/http';
import { Injectable, model } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }

  register(model:object):Observable<any>{
    return this._HttpClient.post(`${environment.baseApi}users/sginup`,model);
  }

  login(model:object):Observable<any>{
    return this._HttpClient.post(`${environment.baseApi}users/login` , model);
  }

  updatePass(model:object):Observable<any>{
    return this._HttpClient.patch(`${environment.baseApi}users/updatepassword` , model);
  }

  forgetPassword(email:object):Observable<any>{
    return this._HttpClient.post(`${environment.baseApi}users/forgetpassword` , email);
  }

  resetPassword(model:object):Observable<any>{
    return this._HttpClient.patch(`${environment.baseApi}users/restpassword/40de70290d17f55a77b8714fd3b23031eef367cba8e837be7170e048be76036179d400e9cf0a7eddf17184c254c4b22249fee20c6d7ad4986dd5cab787636d50` , model)
  }
}
