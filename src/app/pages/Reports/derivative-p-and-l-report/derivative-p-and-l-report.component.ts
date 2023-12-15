import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { AuthInterceptor } from 'src/app/services/auth-interceptor.service';

@Component({
  selector: 'app-derivative-p-and-l-report',
  templateUrl: './derivative-p-and-l-report.component.html',
  styleUrls: ['./derivative-p-and-l-report.component.scss']
})
export class DerivativePAndLReportComponent implements OnInit {
  public derivativePLGroup: FormGroup | any;
  authToken = JSON.parse(localStorage.getItem('isLoggedIn') || '')
  constructor(public service: ApiServiceService, public auth: AuthInterceptor) { }

  ngOnInit(): void {
    this.derivativePLGroup = new FormGroup({
      FromDate: new FormControl('', Validators.required),
      ToDate: new FormControl('', Validators.required),
      SegmentID: new FormControl('', Validators.required),
      Account: new FormControl('', Validators.required),
      BillNo: new FormControl('', Validators.required),
      ReportType: new FormControl('', Validators.required),
      IncludeExpence: new FormControl('Y/N', Validators.required),
    });
  }


  get f() {
    return this.derivativePLGroup.controls;
  }


  public save() {
    console.log("this.derivativePLGroup", this.derivativePLGroup);
    if (this.derivativePLGroup.valid) {
      this.service.getFIFONetPositionReport(this.derivativePLGroup.value).subscribe((res: any) => {
        console.log("res", res)
      }, (err: any) => {
        console.log("err", err)
      })
    }
  }


  public export(type: any) {
    if (this.derivativePLGroup.valid) {
      this.derivativePLGroup.value.ExportFormat = type;
      this.service.getFIFONetPositionReport(this.derivativePLGroup.value).subscribe((res: any) => {
        console.log("res", res)
      }, (err: any) => {
        console.log("err", err)
      })
    }
    console.log(this.derivativePLGroup);
  }
}
