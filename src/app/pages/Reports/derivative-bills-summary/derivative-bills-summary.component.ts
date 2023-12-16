import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { AuthInterceptor } from 'src/app/services/auth-interceptor.service';

@Component({
  selector: 'app-derivative-bills-summary',
  templateUrl: './derivative-bills-summary.component.html',
  styleUrls: ['./derivative-bills-summary.component.scss']
})
export class DerivativeBillsSummaryComponent implements OnInit {
  public derivativeBillGroup: FormGroup | any;
  authToken = JSON.parse(localStorage.getItem('isLoggedIn') || '')
  constructor(public service: ApiServiceService, public auth: AuthInterceptor) { }

  ngOnInit(): void {
    this.derivativeBillGroup = new FormGroup({
      FromDate: new FormControl(this.service.getCurrentDate(), Validators.required),
      ToDate: new FormControl(this.service.getCurrentDate(), Validators.required),
      Exchange: new FormControl('', Validators.required),
      Segment: new FormControl('', Validators.required),
      BillNo: new FormControl('', Validators.required),
      ReportType: new FormControl('DETAIL', Validators.required),
    });
  }


  get f() {
    return this.derivativeBillGroup.controls;
  }


  public save() {
    console.log("this.derivativeBillGroup", this.derivativeBillGroup);
    if (this.derivativeBillGroup.valid) {
      this.service.getDerivativeBillDetail(this.derivativeBillGroup.value).subscribe((res: any) => {
        console.log("res", res)
      }, (err: any) => {
        console.log("err", err)
      })
    }
  }


  public export(type: any) {
    if (this.derivativeBillGroup.valid) {
      this.derivativeBillGroup.value.ExportFormat = type;
      this.service.getDerivativeBillDetail(this.derivativeBillGroup.value).subscribe((res: any) => {
        console.log("res", res)
      }, (err: any) => {
        console.log("err", err)
      })
    }
    console.log(this.derivativeBillGroup);
  }

}
