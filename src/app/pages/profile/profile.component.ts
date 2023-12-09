import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings: IDropdownSettings = {};
  addList: any = [{ banckName: "" }]
  formObj: any = {
    AccountName: '',
  }
  stroge: any = JSON.parse(localStorage.getItem("isLoggedIn") || '')
  constructor(public service: ApiServiceService) {

  }

  ngOnInit() {
    this.service.getProfile(this.stroge.username).subscribe((res: any) => {
      console.log("res", res)
    }, (err: any) => {
      console.log("err", err)
    })

    this.dropdownList = [
      { item_id: 1, item_text: 'CLIENT' },
      { item_id: 2, item_text: 'PLANE' },
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
    ];
    this.dropdownSettings = {
      singleSelection: true,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  onItemSelect(item: any, ind: any) {
    console.log(item);
    console.log(ind);
  }

  addNew() {
    this.addList.push({ banckName: "" });
  }

  onSubmit(data: any) {
    console.log("data", data)
  }
}