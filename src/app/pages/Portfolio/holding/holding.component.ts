import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { AuthInterceptor } from 'src/app/services/auth-interceptor.service';

@Component({
  selector: 'app-holding',
  templateUrl: './holding.component.html',
  styleUrls: ['./holding.component.scss']
})
export class HoldingComponent implements OnInit {
  public holdingGroup: FormGroup | any;
  authToken = JSON.parse(localStorage.getItem('isLoggedIn') || '')
  public TotalMarginPledgeVal = 0;
  public TotalHoldingValue = 0;
  public TotalValueAfterVAR = 0;
  public TotalNotionalPNL = 0;
  holdingData: any;
  constructor(public service: ApiServiceService, public auth: AuthInterceptor) { }

  ngOnInit(): void {
    this.holdingGroup = new FormGroup({
      FirmID: new FormControl(this.auth.firm_id),
      AccountID: new FormControl(this.authToken.username),
      AsOnDate: new FormControl(this.service.getCurrentDate()),
      ScripCode: new FormControl(''),
      Type: new FormControl('VARELMADH'),
      ExcelFormatType: new FormControl('CLIENT'),
      
      
    });
  }


  get f() {
    return this.holdingGroup.controls;
  }


  public save() {
    if (this.holdingGroup.valid) {
      this.service.getClientHolding(this.holdingGroup.value).subscribe((res: any) => {
        console.log("res", res)
        if (res) {
          this.holdingData = res.data
        }
      }, (err: any) => {
        console.log("err", err)
      })
    }
    console.log(this.holdingGroup);
  }
}
