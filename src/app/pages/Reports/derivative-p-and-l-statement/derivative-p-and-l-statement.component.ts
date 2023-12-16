import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { AuthInterceptor } from 'src/app/services/auth-interceptor.service';

@Component({
  selector: 'app-derivative-p-and-l-statement',
  templateUrl: './derivative-p-and-l-statement.component.html',
  styleUrls: ['./derivative-p-and-l-statement.component.scss']
})
export class DerivativePAndLStatementComponent implements OnInit {
  public derivativePLGroup: FormGroup | any;
  authToken = JSON.parse(localStorage.getItem('isLoggedIn') || '')
  constructor(public service: ApiServiceService, public auth: AuthInterceptor) { }

  ngOnInit(): void {
    this.derivativePLGroup = new FormGroup({
      FirmID: new FormControl(this.auth.firm_id),
      AccountID: new FormControl(this.authToken.username),
      FromDate: new FormControl('', Validators.required),
      ToDate: new FormControl(this.service.getCurrentDate(), Validators.required),
      Exchange: new FormControl('', Validators.required),
      Segment: new FormControl('', Validators.required),
      ExpiryDate: new FormControl('', Validators.required),
      OptionType: new FormControl('', Validators.required),
      CTCLID: new FormControl('', Validators.required),
      UserID: new FormControl('', Validators.required),
      QtyInLot: new FormControl('Y'), //Y,N
    });
  }


  get f() {
    return this.derivativePLGroup.controls;
  }


  public save() {
    console.log("this.derivativePLGroup", this.derivativePLGroup);
    if (this.derivativePLGroup.valid) {
      this.service.getDerivativeBillDetail(this.derivativePLGroup.value).subscribe((res: any) => {
        console.log("res", res)
      }, (err: any) => {
        console.log("err", err)
      })
    }
  }


  public export(type: any) {
    if (this.derivativePLGroup.valid) {
      this.derivativePLGroup.value.ExportFormat = type;
      this.service.getDerivativeBillDetail(this.derivativePLGroup.value).subscribe((res: any) => {
        console.log("res", res)
      }, (err: any) => {
        console.log("err", err)
      })
    }
    console.log(this.derivativePLGroup);
  }
}
