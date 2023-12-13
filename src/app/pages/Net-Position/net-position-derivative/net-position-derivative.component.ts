import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { AuthInterceptor } from 'src/app/services/auth-interceptor.service';

@Component({
  selector: 'app-net-position-derivative',
  templateUrl: './net-position-derivative.component.html',
  styleUrls: ['./net-position-derivative.component.scss']
})
export class NetPositionDerivativeComponent implements OnInit {
  public netPositionGroup: FormGroup | any;
  authToken = JSON.parse(localStorage.getItem('isLoggedIn') || '')
  constructor(public service: ApiServiceService, public auth: AuthInterceptor) { }

  ngOnInit(): void {
    this.netPositionGroup = new FormGroup({
      FromDate: new FormControl('', Validators.required),
      ToDate: new FormControl('', Validators.required),
      Exchange: new FormControl('', Validators.required),
      Segment: new FormControl('', Validators.required),
      ScripCode: new FormControl('', Validators.required),
      SettlementNo: new FormControl('', Validators.required),
      SettlementType: new FormControl('', Validators.required),
      JDFlag: new FormControl('A', Validators.required),
      ReportSelection: new FormControl('CLIENT_SCRIP', Validators.required),
      ReportType: new FormControl('CLIENT', Validators.required),
    });
  }


  get f() {
    return this.netPositionGroup.controls;
  }


  public save() {
    if (this.netPositionGroup.valid) {
      this.service.getEquityNetPositionDateRange(this.netPositionGroup.value).subscribe((res: any) => {
        console.log("res", res)
      }, (err: any) => {
        console.log("err", err)
      })
    }
    console.log(this.netPositionGroup);
  }
}
