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
  private token = localStorage.getItem('token');
  firm_id: any = "1001";
  // financial_year: any = "2019 - 2020";

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.token) {
      request = request.clone({
        setHeaders: {
          'FIRM_ID': this.firm_id,
          // 'FINANCIAL_YEAR': this.financial_year,
          Authorization: `Bearer ${this.token}`,
        },
      });
    }

    return next.handle(request);
  }
}
