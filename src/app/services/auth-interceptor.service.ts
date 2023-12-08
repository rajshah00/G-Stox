import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private readonly token = localStorage.getItem('token');
  FIRM_ID: any = 1001;
  FINANCIAL_YEAR: any = 2019 - 2020;

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        FIRMID: this.FIRM_ID,
        FINANCIALYEAR: this.FINANCIAL_YEAR,
        Authorization: `Bearer ${this.token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    return next.handle(request);
  }
}
