import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { AuthInterceptor } from 'src/app/services/auth-interceptor.service';

@Component({
  selector: 'app-equity-transaction-ledger',
  templateUrl: './equity-transaction-ledger.component.html',
  styleUrls: ['./equity-transaction-ledger.component.scss']
})
export class EquityTransactionLedgerComponent implements OnInit {
  public equityTransactionGroup: FormGroup | any;
  authToken = JSON.parse(localStorage.getItem('isLoggedIn') || '')
  constructor(public service: ApiServiceService, public auth: AuthInterceptor) { }

  ngOnInit(): void {
    this.equityTransactionGroup = new FormGroup({
      AccountID: new FormControl(this.authToken.username),
      FromDate: new FormControl('', Validators.required),
      ToDate: new FormControl('', Validators.required),
      Exchange: new FormControl('', Validators.required),
      Segment: new FormControl('', Validators.required),
      Branch: new FormControl(null),
      SubBranch: new FormControl(null),
      RM: new FormControl(null),
      FamilyGroup: new FormControl(null),
      JDFlag: new FormControl('A'),
      ReportType: new FormControl('NORMAL'),
      ScripCode: new FormControl('', Validators.required),
    });
  }


  get f() {
    return this.equityTransactionGroup.controls;
  }


  public save() {
    console.log("this.equityTransactionGroup", this.equityTransactionGroup);
    if (this.equityTransactionGroup.valid) {
      this.service.getEquityTransactionLedger(this.equityTransactionGroup.value).subscribe((res: any) => {
        console.log("res", res)
      }, (err: any) => {
        console.log("err", err)
      })
    }
  }


  public export(type: any) {
    if (this.equityTransactionGroup.valid) {
      this.equityTransactionGroup.value.ExportFormat = type;
      this.service.getEquityTransactionLedger(this.equityTransactionGroup.value).subscribe((res: any) => {
        console.log("res", res)
      }, (err: any) => {
        console.log("err", err)
      })
    }
    console.log(this.equityTransactionGroup);
  }
}
