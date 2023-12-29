import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { AuthInterceptor } from 'src/app/services/auth-interceptor.service';

@Component({
  selector: 'app-financial-ledger',
  templateUrl: './financial-ledger.component.html',
  styleUrls: ['./financial-ledger.component.scss']
})
export class FinancialLedgerComponent implements OnInit {
  public financialGroup: FormGroup | any;
  public TotalDebit = 0;
  public TotalCredit = 0;
  public TotaRunningBalance = 0;
  public TotalUnreleaseVoucher = 0;
  public TotalUnRecoVoucher = 0;
  public TotalClearBalance = 0;
  dropdownList: any = [];
  selectedItems: any = [];
  FinancialList: any = [];
  dropdownSettings: IDropdownSettings = {};
  authToken = JSON.parse(localStorage.getItem('isLoggedIn') || '')
  constructor(public service: ApiServiceService, public auth: AuthInterceptor) {

  }

  ngOnInit() {
    // this.dropdownList = [
    //   { item_id: 1, item_text: 'ALL' },
    //   { item_id: 2, item_text: 'EX_MARGIN' },
    //   { item_id: 3, item_text: 'EX_EPAYIN' },
    // ];
    // this.selectedItems = [
    //   { item_id: 3, item_text: 'Pune' },
    //   { item_id: 4, item_text: 'Navsari' }
    // ];
    // this.dropdownSettings = {
    //   singleSelection: false,
    //   idField: 'item_id',
    //   textField: 'item_text',
    //   selectAllText: 'Select All',
    //   unSelectAllText: 'UnSelect All',
    //   itemsShowLimit: 3,
    //   allowSearchFilter: true
    // };

    this.financialGroup = new FormGroup({
      FirmID: new FormControl(this.auth.firm_id, Validators.required),
      AccountID: new FormControl(this.authToken.username, Validators.required),
      FromDate: new FormControl('2023-01-01', Validators.required),
      ToDate: new FormControl('2024-01-01', Validators.required),
      Exchange: new FormControl('ALL', Validators.required),
      Segment: new FormControl('ALL', Validators.required),
      // Product: new FormControl('', Validators.required),
      FinancialFilter: new FormControl('QUxMLEVYX01BUkdJTixFWF9FUEFZSU4sRVhfQ0FTSE1HTixFWF9DUk9T', Validators.required),
    });
  }

  onItemSelect(item: any) {
    console.log(item);
  }

  onSelectAll(items: any) {
    console.log(items);
  }

  get f() {
    return this.financialGroup.controls;
  }

  public save() {
    if (this.financialGroup.valid) {
      this.service.getFinancialLedger(this.financialGroup.value).subscribe((res: any) => {
        console.log("res", res);
        if (res) {
          console.log('res.Financial',res.Financial);
          this.FinancialList = res.Financial;
        }
      }, (err: any) => {
        console.log("err", err)
      })
    }
    console.log(this.financialGroup);
  }

}
