import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { AuthInterceptor } from 'src/app/services/auth-interceptor.service';

@Component({
  selector: 'app-equity-bills-summary',
  templateUrl: './equity-bills-summary.component.html',
  styleUrls: ['./equity-bills-summary.component.scss']
})
export class EquityBillsSummaryComponent implements OnInit {
  public equityBillGroup: FormGroup | any;
  authToken = JSON.parse(localStorage.getItem('isLoggedIn') || '')
  constructor(public service: ApiServiceService, public auth: AuthInterceptor) { }

  ngOnInit(): void {
    this.equityBillGroup = new FormGroup({
      FromDate: new FormControl('', Validators.required),
      ToDate: new FormControl('', Validators.required),
      Exchange: new FormControl('', Validators.required),
      Segment: new FormControl('', Validators.required),
      BillNo: new FormControl('', Validators.required),
      ReportType: new FormControl('DETAIL', Validators.required),
    });
  }


  get f() {
    return this.equityBillGroup.controls;
  }


  public save() {
    console.log("this.equityBillGroup", this.equityBillGroup);
    if (this.equityBillGroup.valid) {
      this.service.getEquityBillDetail(this.equityBillGroup.value).subscribe((res: any) => {
        console.log("res", res)
      }, (err: any) => {
        console.log("err", err)
      })
    }
  }


  public export(type: any) {
    if (this.equityBillGroup.valid) {
      this.equityBillGroup.value.ExportFormat = type;
      this.service.getEquityBillDetail(this.equityBillGroup.value).subscribe((res: any) => {
        console.log("res", res)
      }, (err: any) => {
        console.log("err", err)
      })
    }
    console.log(this.equityBillGroup);
  }
}
