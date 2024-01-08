import { Component } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { AuthInterceptor } from 'src/app/services/auth-interceptor.service';
@Component({
  selector: 'app-buy-back',
  templateUrl: './buy-back.component.html',
  styleUrls: ['./buy-back.component.scss']
})
export class BuyBackComponent {
  BuyBackList: any = [];
  authToken = JSON.parse(localStorage.getItem('isLoggedIn') || '')
  constructor(public service: ApiServiceService, public auth: AuthInterceptor) { }
  ngOnInit(): void {
    this.BuyBackData();
  }
  public BuyBackData() {
      this.service.getEquityNetPositionDateRange('1').subscribe((res: any) => {
        console.log("res", res)
        if (res) {
          this.BuyBackList = res;
        }
        
      }, (err: any) => {
        console.log("err", err)
      })
    }
}

