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
  stroge: any = JSON.parse(localStorage.getItem("isLoggedIn") || '')
  Client_Code: any;
  Client_Name: any;
  BankID: any;
  Client_Bank_Detail: any;
  constructor(public service: ApiServiceService, public auth: AuthInterceptor) {

  }

  ngOnInit() {
    this.WithdrawalGroup = new FormGroup({
      bank_detail: new FormControl('', Validators.required),
      Amount: new FormControl('0', Validators.required),
      Remark: new FormControl('', Validators.required),
    });
    this.getBankDetail();
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
      const formData = this.service.buildFormData(this.WithdrawalGroup.value);
      this.service.getFinancialLedger(formData).subscribe((res: any) => {
      }, (err: any) => {
        console.log("err", err)
      })
    }
    console.log(this.WithdrawalGroup);
  }

  getBankDetail() {
    this.service.getProfile(this.stroge.username).subscribe((res: any) => {
      console.log("res", res)
      if (res.BankDetail) {
        this.Client_Code = this.stroge.username;
        this.Client_Name = this.stroge.username;
        this.BankID = res.BankDetail[0].BankID;
        if (this.BankID != '') {
          this.service.getBankDetail(this.stroge.username, this.BankID).subscribe((resInner: any) => {
            console.log("resInner", resInner)
            if (resInner) {
              this.Client_Bank_Detail = resInner[0].BankName + ' (' + resInner[0].BankAccountNumber + ')';
            }

          }, (err: any) => {
            console.log("err", err)
          })
        }
      }

    }, (err: any) => {
      console.log("err", err)
    })
  }

}

