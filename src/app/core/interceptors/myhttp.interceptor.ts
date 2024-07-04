import { HttpInterceptorFn } from '@angular/common/http';

export const myhttpInterceptor: HttpInterceptorFn = (req, next) => {
  if(localStorage.getItem('taskstoken')){
    let myHeader:any = {
      Authorization:'Bearer '+localStorage.getItem('taskstoken'),
    }
    req = req.clone({
      setHeaders:myHeader
    });
  }
  
  return next(req);
};
