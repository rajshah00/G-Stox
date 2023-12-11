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
  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings: IDropdownSettings = {};
  authToken = JSON.parse(localStorage.getItem('isLoggedIn') || '')
  constructor(public service: ApiServiceService, public auth: AuthInterceptor) {

  }

  ngOnInit() {
    this.dropdownList = [
      { item_id: 1, item_text: 'ALL' },
      { item_id: 2, item_text: 'EX_MARGIN' },
      { item_id: 3, item_text: 'EX_EPAYIN' },
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    this.financialGroup = new FormGroup({
      FirmID: new FormControl(this.auth.firm_id, Validators.required),
      AccountID: new FormControl(this.authToken.username, Validators.required),
      FromDate: new FormControl('', Validators.required),
      ToDate: new FormControl('', Validators.required),
      Exchange: new FormControl('', Validators.required),
      Segment: new FormControl('', Validators.required),
      Product: new FormControl('', Validators.required),
      FinancialFilter: new FormControl([], Validators.required),
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
      let data = [];
      for (let i in this.financialGroup.value.FinancialFilter) {
        data.push(this.financialGroup.value.FinancialFilter[i].item_text)
      }
      this.financialGroup.value.FinancialFilter = data;
      this.service.getFinancialLedger(this.financialGroup.value).subscribe((res: any) => {
        console.log("res", res)
      }, (err: any) => {
        console.log("err", err)
      })
    }
    console.log(this.financialGroup);
  }

}
