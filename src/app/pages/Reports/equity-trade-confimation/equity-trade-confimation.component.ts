import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { AuthInterceptor } from 'src/app/services/auth-interceptor.service';

@Component({
  selector: 'app-equity-trade-confimation',
  templateUrl: './equity-trade-confimation.component.html',
  styleUrls: ['./equity-trade-confimation.component.scss']
})
export class EquityTradeConfimationComponent implements OnInit {
  public equityTradeGroup: FormGroup | any;
  authToken = JSON.parse(localStorage.getItem('isLoggedIn') || '')
  constructor(public service: ApiServiceService, public auth: AuthInterceptor) { }

  ngOnInit(): void {
    this.equityTradeGroup = new FormGroup({
      FromDate: new FormControl(this.service.getCurrentDate(), Validators.required),
      ToDate: new FormControl(this.service.getCurrentDate(), Validators.required),
      Exchange: new FormControl('', Validators.required),
      Segment: new FormControl('', Validators.required),
      ScripCode: new FormControl('', Validators.required),
      ReportType: new FormControl('', Validators.required),
    });
  }


  get f() {
    return this.equityTradeGroup.controls;
  }

  public save() {
    console.log("this.equityTradeGroup", this.equityTradeGroup);
    if (this.equityTradeGroup.valid) {
      this.service.getDerivativeTradeBook(this.equityTradeGroup.value).subscribe((res: any) => {
        console.log("res", res)
      }, (err: any) => {
        console.log("err", err)
      })
    }
  }

  public export(type: any) {
    if (this.equityTradeGroup.valid) {
      this.equityTradeGroup.value.ExportFormat = type;
      this.service.getDerivativeTradeBook(this.equityTradeGroup.value).subscribe((res: any) => {
        console.log("res", res)
      }, (err: any) => {
        console.log("err", err)
      })
    }
    console.log(this.equityTradeGroup);
  }
}
