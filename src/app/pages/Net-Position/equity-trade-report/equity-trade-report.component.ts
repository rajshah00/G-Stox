import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { AuthInterceptor } from 'src/app/services/auth-interceptor.service';

@Component({
  selector: 'app-equity-trade-report',
  templateUrl: './equity-trade-report.component.html',
  styleUrls: ['./equity-trade-report.component.scss']
})
export class EquityTradeReportComponent implements OnInit {
  public equityTradeGroup: FormGroup | any;
  authToken = JSON.parse(localStorage.getItem('isLoggedIn') || '')
  constructor(public service: ApiServiceService, public auth: AuthInterceptor) { }

  ngOnInit(): void {
    this.equityTradeGroup = new FormGroup({
      FromDate: new FormControl(this.auth.firm_id, Validators.required),
      ToDate: new FormControl(this.authToken.username, Validators.required),
      Exchange: new FormControl('', Validators.required),
      Segment: new FormControl('', Validators.required),
      ReportType: new FormControl('', Validators.required),
      ScripCode: new FormControl('', Validators.required),
    });
  }


  get f() {
    return this.equityTradeGroup.controls;
  }


  public save() {
    if (this.equityTradeGroup.valid) {
      this.service.getEquityTradeBook(this.equityTradeGroup.value).subscribe((res: any) => {
        console.log("res", res)
      }, (err: any) => {
        console.log("err", err)
      })
    }
    console.log(this.equityTradeGroup);
  }
}
