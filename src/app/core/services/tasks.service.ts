import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private _HttpClient:HttpClient) { }

  getAllTasks():Observable<any>{
    return this._HttpClient.get(`${environment.baseApi}tasks`);
  }
  Createtask(model:object):Observable<any>{
    return this._HttpClient.post(`${environment.baseApi}tasks`,model);
  }

  updateTask(taskID:any):Observable<any>{
    return this._HttpClient.patch(`${environment.baseApi}tasks/${taskID}`,{
      "checked":true
    })
  }

  deleteTask(taskID:any):Observable<any>{
    return this._HttpClient.delete(`${environment.baseApi}tasks/${taskID}`);
  }
}
