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
  NetPositionGroupList: any = [];
  authToken = JSON.parse(localStorage.getItem('isLoggedIn') || '')
  constructor(public service: ApiServiceService, public auth: AuthInterceptor) { }

  ngOnInit(): void {
    this.netPositionGroup = new FormGroup({
      FirmID: new FormControl(this.auth.firm_id, Validators.required),
      AccountID: new FormControl(this.authToken.username, Validators.required),
      Exchange: new FormControl('NSE', Validators.required),
      Segment: new FormControl('FNO', Validators.required),
      AsOnDate: new FormControl(this.service.getCurrentDate(), Validators.required),
      Instrument: new FormControl('ALL'),
      Symbol: new FormControl(''),
      ExpiryDate: new FormControl(''),
      StrikePrice: new FormControl(''),
      OptionType: new FormControl('ALL'),
    });
  }


  get f() {
    return this.netPositionGroup.controls;
  }


  public save() {
    if (this.netPositionGroup.valid) {
      this.service.getDerivativeNetPosition(this.netPositionGroup.value).subscribe((res: any) => {
        console.log("res", res)
        if (res) {
          this.NetPositionGroupList = res.PositionData;
        }
        
      }, (err: any) => {
        console.log("err", err)
      })
    }
    console.log(this.netPositionGroup);
  }
}
