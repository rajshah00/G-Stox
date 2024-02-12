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
  BankID: any = [];
  Client_Bank_Detail: any = [];
  Client_Code: any = [];
  Client_Name: any = [];
  gatewayvalue = 'UPI';
  authToken = JSON.parse(localStorage.getItem('isLoggedIn') || '')
  stroge: any = JSON.parse(localStorage.getItem("isLoggedIn") || '')
  constructor(public service: ApiServiceService, public auth: AuthInterceptor) {

  }

  ngOnInit() {
    this.AddFundsGroup = new FormGroup({
      Amount: new FormControl('100', Validators.required),
      ClientUPIID: new FormControl('', Validators.required),
      Remark: new FormControl('', Validators.required),
    });
    this.service.getProfile(this.stroge.username).subscribe((res: any) => {
      console.log("res", res)
     if(res.BankDetail){
      this.Client_Code = this.stroge.username;
      this.Client_Name = this.stroge.username;
      this.BankID = res.BankDetail[0].BankID;
      if(this.BankID != ''){
        this.service.getBankDetail(this.stroge.username,this.BankID).subscribe((resInner: any) => {
          console.log("resInner", resInner)
          if(resInner){
            this.Client_Bank_Detail = resInner[0].BankName+' ('+resInner[0].BankAccountNumber+')';
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

  gateway(event:any){
    console.log(">>>>>",event.target.value);
    this.gatewayvalue = event.target.value;
    
  }

}
