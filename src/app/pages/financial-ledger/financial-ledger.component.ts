import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ApiServiceService } from 'src/app/services/api-service.service';

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
  constructor(public service: ApiServiceService) {

  }

  ngOnInit() {
    this.getFince();
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
  }


  getFince() {
    this.service.getFinancialLedger({}).subscribe((res: any) => {
      console.log("res", res)
    }, (err: any) => {
      console.log("err", err)
    })
  }

  onItemSelect(item: any) {
    console.log(item);
  }

  onSelectAll(items: any) {
    console.log(items);
  }

  
  public save() {
    if (this.financialGroup.invalid) {
      this.financialGroup.markAllAsTouched();
      return;
    }
    console.log(this.financialGroup.value);
  }

}
