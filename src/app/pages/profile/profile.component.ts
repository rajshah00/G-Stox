import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ApiServiceService } from 'src/app/services/api-service.service';
declare var $: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  dropdownList: any = [];
  selectedItems: any = [];
  dropdownSettings: IDropdownSettings = {};
  isEditable = false;
  addList: any = [{ banckName: "" }]
  formObj: any = {
    AccountName: '',
  }
  stroge: any = JSON.parse(localStorage.getItem("isLoggedIn") || '')
  profileData: any;
  changeType: any;
  BankDetail: any;
  allData: any;
  constructor(public service: ApiServiceService) {

  }

  ngOnInit() {
    this.getBankDetail();
    this.service.getProfile(this.stroge.username).subscribe((res: any) => {
      console.log("res", res)
      this.profileData = res;
      this.formObj.AccountName = res.NomineeDetail && res.NomineeDetail.length ? res.NomineeDetail[0].Name : '';
      this.formObj.PANNo = res.NomineeDetail && res.NomineeDetail.length ? res.NomineeDetail[0].PANNO : '';
      this.formObj.MobileNo = res.NomineeDetail && res.NomineeDetail.length ? res.NomineeDetail[0].Mobile : '';
      this.formObj.EmailId = res.NomineeDetail && res.NomineeDetail.length ? res.NomineeDetail[0].EmailID : '';
      this.formObj.Address1 = res.NomineeDetail && res.NomineeDetail.length ? res.NomineeDetail[0].Address1 + ', ' + res.NomineeDetail[0].Address2 + ', ' + res.NomineeDetail[0].Address3 : '';
      this.formObj.DematAcName = res.DPDetail[0].DepositoryName;
      this.formObj.DematAcNo = res.DPDetail[0].DepositoryClientID;
      for (let i in this.profileData.SegmentMaster) {
        if (this.profileData.SegmentMaster[i].TradingAllow == 'Y') {
          this.profileData.SegmentMaster[i].checked = true;
        } else {
          this.profileData.SegmentMaster[i].checked = false;
        }
      }
      console.log("this.profileData.SegmentMaster", this.profileData.SegmentMaster);

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

  toggleVisibility(e: any, ind: any) {
    console.log("ind", ind);

    this.profileData.SegmentMaster[ind].checked = e.target.checked;
    this.changeType = e.target.checked;
    console.log("this.profileData", this.profileData);

  }

  toggleEdit(targetId: any) {
    console.log("targetId", targetId);
    $("#" + targetId).prop("disabled", (i: any, val: any) => {
      console.log(val);
      if (val == true) {
        $("." + targetId).removeClass("bi bi-pencil-square");
        $("." + targetId).addClass("bi bi-check2-square");
      } else {
        $("." + targetId).removeClass("bi bi-check2-square");
        $("." + targetId).addClass("bi bi-pencil-square");
      }
      return !val;
    });
  }

  getBankDetail() {
    let obj = {
      ClientCode: this.stroge.username
    }
    this.service.getOrionEKYCDetail(obj).subscribe((res: any) => {
      console.log("res", res)
      this.BankDetail = res.BankDetail;
      this.allData = res;
      // this.profileData = res;
    }, (err: any) => {
      console.log("err", err)
    })
  }

  saveAllChanges() {
    let ogj = {
      "ClientCode": this.stroge.username,
      "KYCDetail": this.allData.KYCDetail,
      "AddressDetail": this.allData.AddressDetail,
      "ContactDetail": this.allData.ContactDetail,
      "BankDetail": this.BankDetail,
      "DepositoryDetail": this.allData.DepositoryDetail,
      "NomineeDetail": this.allData.NomineeDetail,
      "ExchangeDetail": this.allData.ExchangeDetail,
      "SegmentDetail": this.profileData.SegmentMaster
    }
    this.service.saveProfileDetail(ogj).subscribe((res: any) => {
      this.service.toster("success", "Your Account Details is Updated succefully");
    }, (err: any) => {
      this.service.toster("error", "Failed to Updated Account Details")
      console.log("err", err)
    })
  }
}