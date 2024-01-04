import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { AuthInterceptor } from 'src/app/services/auth-interceptor.service';

@Component({
  selector: 'app-add-funds',
  templateUrl: './add-funds.component.html',
  styleUrls: ['./add-funds.component.scss']
})
export class AddFundsComponent implements OnInit {
  public AddFundsGroup: FormGroup | any;
  authToken = JSON.parse(localStorage.getItem('isLoggedIn') || '')
  constructor(public service: ApiServiceService, public auth: AuthInterceptor) {

  }

  ngOnInit() {
    this.AddFundsGroup = new FormGroup({
      Amount: new FormControl('', Validators.required),
      ClientUPIID: new FormControl('', Validators.required),
      Remark: new FormControl('', Validators.required),
    });
  }

  get f() {
    return this.AddFundsGroup.controls;
  }

  public save() {
    if (this.AddFundsGroup.valid) {
      this.service.getFinancialLedger(this.AddFundsGroup.value).subscribe((res: any) => {
        console.log("res", res);
      }, (err: any) => {
        console.log("err", err)
      })
    }
    console.log(this.AddFundsGroup);
  }

}
