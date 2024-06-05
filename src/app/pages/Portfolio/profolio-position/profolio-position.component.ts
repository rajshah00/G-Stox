import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { AuthInterceptor } from 'src/app/services/auth-interceptor.service';

@Component({
  selector: 'app-profolio-position',
  templateUrl: './profolio-position.component.html',
  styleUrls: ['./profolio-position.component.scss']
})
export class ProfolioPositionComponent implements OnInit {
  public netPositionGroup: FormGroup | any;
  authToken = JSON.parse(localStorage.getItem('isLoggedIn') || '')
  constructor(public service: ApiServiceService, public auth: AuthInterceptor) { }

  ngOnInit(): void {
    this.netPositionGroup = new FormGroup({
      FirmID: new FormControl(this.auth.firm_id, Validators.required),
      AccountID: new FormControl(this.authToken.username, Validators.required),
      AsOnDate: new FormControl(this.service.getCurrentDate(), Validators.required),
      Exchange: new FormControl('', Validators.required),
      Segment: new FormControl('', Validators.required),
    });
  }


  get f() {
    return this.netPositionGroup.controls;
  }


  public save() {
    console.log("this.netPositionGroup", this.netPositionGroup);
    return
    if (this.netPositionGroup.valid) {
      const formData = this.service.buildFormData(this.netPositionGroup.value);
      this.service.getClientHolding(formData).subscribe((res: any) => {
        console.log("res", res)
      }, (err: any) => {
        console.log("err", err)
      })
    }
    console.log(this.netPositionGroup);
  }
}
