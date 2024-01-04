import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { AuthInterceptor } from 'src/app/services/auth-interceptor.service';

@Component({
  selector: 'app-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.scss']
})
export class WithdrawalComponent implements OnInit {
  public WithdrawalGroup: FormGroup | any;
  authToken = JSON.parse(localStorage.getItem('isLoggedIn') || '')
  constructor(public service: ApiServiceService, public auth: AuthInterceptor) {

  }

  ngOnInit() {
    this.WithdrawalGroup = new FormGroup({
      Amount: new FormControl('', Validators.required),
      Remark: new FormControl('', Validators.required),
    });
  }

  onItemSelect(item: any) {
    console.log(item);
  }

  onSelectAll(items: any) {
    console.log(items);
  }

  get f() {
    return this.WithdrawalGroup.controls;
  }

  public save() {
    if (this.WithdrawalGroup.valid) {
      this.service.getFinancialLedger(this.WithdrawalGroup.value).subscribe((res: any) => {
      }, (err: any) => {
        console.log("err", err)
      })
    }
    console.log(this.WithdrawalGroup);
  }

}

