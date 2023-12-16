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
  holdingData: any;
  constructor(public service: ApiServiceService, public auth: AuthInterceptor) { }

  ngOnInit(): void {
    this.holdingGroup = new FormGroup({
      FirmID: new FormControl(this.auth.firm_id, Validators.required),
      AccountID: new FormControl(this.authToken.username, Validators.required),
      AsOnDate: new FormControl(this.service.getCurrentDate(), Validators.required),
      RateDate: new FormControl('', Validators.required),
      ScripCode: new FormControl('', Validators.required),
    });
  }


  get f() {
    return this.holdingGroup.controls;
  }


  public save() {
    if (this.holdingGroup.valid) {
      this.service.getClientHolding(this.holdingGroup.value).subscribe((res: any) => {
        this.holdingData = res.data
        console.log("res", res)
      }, (err: any) => {
        console.log("err", err)
      })
    }
    console.log(this.holdingGroup);
  }
}
