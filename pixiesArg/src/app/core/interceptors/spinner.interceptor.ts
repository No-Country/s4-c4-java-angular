import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SpinnerService } from '../services/spinner.service';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {

  constructor(private spinnerService:SpinnerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    intercept(request:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>
    {
    this.data.showSpinner();
    return next.handle(request).pipe(tap(
    event=>{
    if(event instanceof HttpResponse)
    {
    this.data.hideSpinner();
    }
    },
    error=>{
    if(error instanceof HttpErrorResponse)
    {
    console.log(error);
    this.data.hideSpinner();
    }
    }
    ))
    }
    }
