import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { AuthInterceptor } from 'src/app/services/auth-interceptor.service';

@Component({
  selector: 'app-equity-p-and-l-report',
  templateUrl: './equity-p-and-l-report.component.html',
  styleUrls: ['./equity-p-and-l-report.component.scss']
})
export class EquityPAndLReportComponent implements OnInit {
  public longShortGroup: FormGroup | any;
  authToken = JSON.parse(localStorage.getItem('isLoggedIn') || '')
  constructor(public service: ApiServiceService, public auth: AuthInterceptor) { }

  ngOnInit(): void {
    this.longShortGroup = new FormGroup({
      FirmID: new FormControl(this.auth.firm_id, Validators.required),
      AccountID: new FormControl(this.authToken.username, Validators.required),
      FromDate: new FormControl(this.service.getCurrentDate(), Validators.required),
      ToDate: new FormControl(this.service.getCurrentDate(), Validators.required),
    });
  }


  get f() {
    return this.longShortGroup.controls;
  }


  public save() {
    if (this.longShortGroup.valid) {
      // this.longShortGroup.value.ExportFormat = 1;
      this.service.getEquityLongShort(this.longShortGroup.value).subscribe((res: any) => {
        console.log("res", res)
      }, (err: any) => {
        console.log("err", err)
      })
    }
    console.log(this.longShortGroup);
  }

  public Export(type: any) {
    if (this.longShortGroup.valid) {
      this.longShortGroup.value.ExportFormat = type;
      this.service.getEquityLongShort(this.longShortGroup.value).subscribe((res: any) => {
        console.log("res", res)
      }, (err: any) => {
        console.log("err", err)
      })
    }
    console.log(this.longShortGroup);
  }
}
