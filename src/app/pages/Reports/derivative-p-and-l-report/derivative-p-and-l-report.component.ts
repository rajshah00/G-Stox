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
  DerivativePLList: any = [];
  authToken = JSON.parse(localStorage.getItem('isLoggedIn') || '')
  constructor(public service: ApiServiceService, public auth: AuthInterceptor) { }

  ngOnInit(): void {
    this.derivativePLGroup = new FormGroup({
      FromDate: new FormControl('', Validators.required),
      ToDate: new FormControl(this.service.getCurrentDate(), Validators.required),
      SegmentID: new FormControl('FNO', Validators.required),
      ReportType: new FormControl('R2', Validators.required),
      IncludeExpence: new FormControl('Y', Validators.required),
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
        if (res) {
          this.DerivativePLList = res;
        }
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
