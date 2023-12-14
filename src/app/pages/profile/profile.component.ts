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
  profileData: { MasterData: never[]; BankDetail: { FirmID: string; BankID: string; ClientCode: string; PrimaryFlag: string; BankAccountNumber: string; BankAccountType: string; BankIFSC: string; BankMICR: string; ChequePrintName: null; BankCode: string; BankName: string; BankAddress1: string; BankAddress2: string; BankAddress3: string; BankCity: null; BankPincode: string; BankState: string; BankSateOther: null; BankCountry: string; POAFlag: string; POADate: null; Delete: string; CustomerID: null; UMRN: null; ECSMandateDate: null; ECSFromDate: null; ECSToDate: null; ECSUntilCancel: null; ECSStatus: null; ECSFrequency: null; ECSLimit: null; AutoDebit: null; RejectionReason: null; RBIApprovalNo: null; PISAccountNo: null; ACHCustomerID: null; ActiveFlag: string; BankShortCode: string; PGCode: string; BankDomain: null; FundMandate: null; }[]; SegmentMaster: ({ FirmID: string; ClientCode: string; ExchangeID: string; ExchangeName: string; SegmentID: string; SegmentName: string; ActiveDate: string; InactiveDate: null; TradingAllow: string; Remarks: null; CPCode: null; CMID: null; UCCExported: string; UCCExportDate: string; UCCExportBy: string; UCCSuccess: string; UCCClassification: null; ExchangeVerification: null; CPCodePledge: null; } | { FirmID: string; ClientCode: string; ExchangeID: string; ExchangeName: string; SegmentID: string; SegmentName: string; ActiveDate: null; InactiveDate: null; TradingAllow: string; Remarks: null; CPCode: null; CMID: null; UCCExported: string; UCCExportDate: null; UCCExportBy: null; UCCSuccess: string; UCCClassification: null; ExchangeVerification: null; CPCodePledge: null; } | { FirmID: string; ClientCode: string; ExchangeID: string; ExchangeName: string; SegmentID: string; SegmentName: string; ActiveDate: string; InactiveDate: null; TradingAllow: string; Remarks: string; CPCode: null; CMID: null; UCCExported: string; UCCExportDate: null; UCCExportBy: null; UCCSuccess: string; UCCClassification: null; ExchangeVerification: null; CPCodePledge: null; } | { FirmID: string; ClientCode: string; ExchangeID: string; ExchangeName: string; SegmentID: string; SegmentName: string; ActiveDate: string; InactiveDate: null; TradingAllow: string; Remarks: null; CPCode: null; CMID: null; UCCExported: string; UCCExportDate: null; UCCExportBy: null; UCCSuccess: string; UCCClassification: null; ExchangeVerification: null; CPCodePledge: null; })[]; DPDetail: { SerialNo: string; FirmID: string; ClientCode: string; DepositoryType: string; DepositoryID: string; DepositoryName: string; DepositoryClientID: string; POAFlag: string; POAID: string; PrimaryFlag: string; POAActiveDate: string; POAInactiveDate: null; POAMarginFlag: string; Delete: string; Addendum: string; PledgeAllow: string; Holders: null; DDPIFlag: null; DDPIID: null; DDPIActiveDate: null; DDPIInactiveDate: null; Status: string; DDPIORPOAFLAG: string; }[]; NomineeDetail: never[]; };
  constructor(public service: ApiServiceService) {
this.profileData = {
  "MasterData": [],
  "BankDetail": [
      {
          "FirmID": "1001",
          "BankID": "AAAWI3AAEAAB0XBAAc",
          "ClientCode": "G060",
          "PrimaryFlag": "Y",
          "BankAccountNumber": "00060340013069",
          "BankAccountType": "Current Account",
          "BankIFSC": "HDFC0000006",
          "BankMICR": "380240002",
          "ChequePrintName": null,
          "BankCode": "HDFC",
          "BankName": "HDFC BANK LTD",
          "BankAddress1": "HDFC HOUSE, 1ST FLOORNEAR MITHAKALI",
          "BankAddress2": "SIX ROADS,",
          "BankAddress3": "NAVRANGPURAAHMEDABADGUJARAT380 009",
          "BankCity": null,
          "BankPincode": "380009",
          "BankState": "Gujarat",
          "BankSateOther": null,
          "BankCountry": "India",
          "POAFlag": "N",
          "POADate": null,
          "Delete": "N",
          "CustomerID": null,
          "UMRN": null,
          "ECSMandateDate": null,
          "ECSFromDate": null,
          "ECSToDate": null,
          "ECSUntilCancel": null,
          "ECSStatus": null,
          "ECSFrequency": null,
          "ECSLimit": null,
          "AutoDebit": null,
          "RejectionReason": null,
          "RBIApprovalNo": null,
          "PISAccountNo": null,
          "ACHCustomerID": null,
          "ActiveFlag": "N",
          "BankShortCode": "HDFC",
          "PGCode": "3021",
          "BankDomain": null,
          "FundMandate": null
      }
  ],
  "SegmentMaster": [
      {
          "FirmID": "1001",
          "ClientCode": "G060",
          "ExchangeID": "BSE",
          "ExchangeName": "BOMBAY STOCK EXCHANGE LTD",
          "SegmentID": "CAP",
          "SegmentName": "Capital Market",
          "ActiveDate": "2004-02-24T00:00:00",
          "InactiveDate": null,
          "TradingAllow": "Y",
          "Remarks": null,
          "CPCode": null,
          "CMID": null,
          "UCCExported": "Y",
          "UCCExportDate": "2023-09-06T16:32:57",
          "UCCExportBy": "em0382",
          "UCCSuccess": "Y",
          "UCCClassification": null,
          "ExchangeVerification": null,
          "CPCodePledge": null
      },
      {
          "FirmID": "1001",
          "ClientCode": "G060",
          "ExchangeID": "BSE",
          "ExchangeName": "BOMBAY STOCK EXCHANGE LTD",
          "SegmentID": "COM",
          "SegmentName": "Commodity Derivative",
          "ActiveDate": null,
          "InactiveDate": null,
          "TradingAllow": "N",
          "Remarks": null,
          "CPCode": null,
          "CMID": null,
          "UCCExported": "N",
          "UCCExportDate": null,
          "UCCExportBy": null,
          "UCCSuccess": "N",
          "UCCClassification": null,
          "ExchangeVerification": null,
          "CPCodePledge": null
      },
      {
          "FirmID": "1001",
          "ClientCode": "G060",
          "ExchangeID": "BSE",
          "ExchangeName": "BOMBAY STOCK EXCHANGE LTD",
          "SegmentID": "FNO",
          "SegmentName": "Capital Derivative",
          "ActiveDate": "2023-10-31T00:00:00",
          "InactiveDate": null,
          "TradingAllow": "Y",
          "Remarks": "SEBI_Trading_Preference",
          "CPCode": null,
          "CMID": null,
          "UCCExported": "Y",
          "UCCExportDate": null,
          "UCCExportBy": null,
          "UCCSuccess": "Y",
          "UCCClassification": null,
          "ExchangeVerification": null,
          "CPCodePledge": null
      },
      {
          "FirmID": "1001",
          "ClientCode": "G060",
          "ExchangeID": "MCX",
          "ExchangeName": "MULTI COMMODITY EXCHANGE OF INDIA LTD",
          "SegmentID": "COM",
          "SegmentName": "Commodity Derivative",
          "ActiveDate": "2011-10-05T00:00:00",
          "InactiveDate": null,
          "TradingAllow": "Y",
          "Remarks": null,
          "CPCode": null,
          "CMID": null,
          "UCCExported": "N",
          "UCCExportDate": null,
          "UCCExportBy": null,
          "UCCSuccess": "N",
          "UCCClassification": null,
          "ExchangeVerification": null,
          "CPCodePledge": null
      },
      {
          "FirmID": "1001",
          "ClientCode": "G060",
          "ExchangeID": "NSE",
          "ExchangeName": "NATIONAL STOCK EXCHANGE LTD",
          "SegmentID": "CAP",
          "SegmentName": "Capital Market",
          "ActiveDate": "1995-05-15T00:00:00",
          "InactiveDate": null,
          "TradingAllow": "Y",
          "Remarks": null,
          "CPCode": null,
          "CMID": null,
          "UCCExported": "Y",
          "UCCExportDate": "2023-09-06T16:33:03",
          "UCCExportBy": "em0382",
          "UCCSuccess": "Y",
          "UCCClassification": null,
          "ExchangeVerification": null,
          "CPCodePledge": null
      },
      {
          "FirmID": "1001",
          "ClientCode": "G060",
          "ExchangeID": "NSE",
          "ExchangeName": "NATIONAL STOCK EXCHANGE LTD",
          "SegmentID": "COM",
          "SegmentName": "Commodity Derivative",
          "ActiveDate": null,
          "InactiveDate": null,
          "TradingAllow": "N",
          "Remarks": null,
          "CPCode": null,
          "CMID": null,
          "UCCExported": "N",
          "UCCExportDate": null,
          "UCCExportBy": null,
          "UCCSuccess": "N",
          "UCCClassification": null,
          "ExchangeVerification": null,
          "CPCodePledge": null
      },
      {
          "FirmID": "1001",
          "ClientCode": "G060",
          "ExchangeID": "NSE",
          "ExchangeName": "NATIONAL STOCK EXCHANGE LTD",
          "SegmentID": "CUR",
          "SegmentName": "Currency Derivative",
          "ActiveDate": null,
          "InactiveDate": null,
          "TradingAllow": "N",
          "Remarks": null,
          "CPCode": null,
          "CMID": null,
          "UCCExported": "N",
          "UCCExportDate": null,
          "UCCExportBy": null,
          "UCCSuccess": "N",
          "UCCClassification": null,
          "ExchangeVerification": null,
          "CPCodePledge": null
      },
      {
          "FirmID": "1001",
          "ClientCode": "G060",
          "ExchangeID": "NSE",
          "ExchangeName": "NATIONAL STOCK EXCHANGE LTD",
          "SegmentID": "FNO",
          "SegmentName": "Capital Derivative",
          "ActiveDate": "2004-02-24T00:00:00",
          "InactiveDate": null,
          "TradingAllow": "Y",
          "Remarks": null,
          "CPCode": null,
          "CMID": null,
          "UCCExported": "Y",
          "UCCExportDate": "2023-09-06T16:33:03",
          "UCCExportBy": "em0382",
          "UCCSuccess": "Y",
          "UCCClassification": null,
          "ExchangeVerification": null,
          "CPCodePledge": null
      },
      {
          "FirmID": "1001",
          "ClientCode": "G060",
          "ExchangeID": "NSE",
          "ExchangeName": "NATIONAL STOCK EXCHANGE LTD",
          "SegmentID": "SLB",
          "SegmentName": "Security Lending and Borrowing",
          "ActiveDate": null,
          "InactiveDate": null,
          "TradingAllow": "N",
          "Remarks": null,
          "CPCode": null,
          "CMID": null,
          "UCCExported": "N",
          "UCCExportDate": null,
          "UCCExportBy": null,
          "UCCSuccess": "N",
          "UCCClassification": null,
          "ExchangeVerification": null,
          "CPCodePledge": null
      }
  ],
  "DPDetail": [
      {
          "SerialNo": "AAAR75AAEAAAlUaAAE",
          "FirmID": "1001",
          "ClientCode": "G060",
          "DepositoryType": "NSDL",
          "DepositoryID": "IN301645",
          "DepositoryName": "GOLDMINE STOCKS PVT LTD",
          "DepositoryClientID": "10080010",
          "POAFlag": "Y",
          "POAID": "00100008",
          "PrimaryFlag": "Y",
          "POAActiveDate": "2010-08-28T00:00:00",
          "POAInactiveDate": null,
          "POAMarginFlag": "Y",
          "Delete": "N",
          "Addendum": "N",
          "PledgeAllow": "Y",
          "Holders": null,
          "DDPIFlag": null,
          "DDPIID": null,
          "DDPIActiveDate": null,
          "DDPIInactiveDate": null,
          "Status": "Active",
          "DDPIORPOAFLAG": "Y"
      }
  ],
  "NomineeDetail": []
}
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