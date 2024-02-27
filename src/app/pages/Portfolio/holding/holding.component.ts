import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { AuthInterceptor } from 'src/app/services/auth-interceptor.service';
import * as saveAs from 'file-saver';

@Component({
  selector: 'app-holding',
  templateUrl: './holding.component.html',
  styleUrls: ['./holding.component.scss']
})
export class HoldingComponent implements OnInit {
  public holdingGroup: FormGroup | any;
  authToken = JSON.parse(localStorage.getItem('isLoggedIn') || '')
  public TotalMarginPledgeVal = 0;
  public TotalHoldingValue = 0;
  public TotalValueAfterVAR = 0;
  public TotalNotionalPNL = 0;
  holdingData: any;
  constructor(public service: ApiServiceService, public auth: AuthInterceptor) { }

  ngOnInit(): void {
    this.holdingGroup = new FormGroup({
      FirmID: new FormControl(this.auth.firm_id),
      AccountID: new FormControl(this.authToken.username),
      AsOnDate: new FormControl(this.service.getCurrentDate()),
      ScripCode: new FormControl(''),
      Type: new FormControl('VARELMADH'),
      ExcelFormatType: new FormControl('CLIENT'),
      
      
    });
  }


  get f() {
    return this.holdingGroup.controls;
  }


  public save() {
    if (this.holdingGroup.valid) {
      this.service.getClientHolding(this.holdingGroup.value).subscribe((res: any) => {
        console.log("res", res)
        if (res) {
          this.holdingData = res.data
        }
      }, (err: any) => {
        console.log("err", err)
      })
    }
    console.log(this.holdingGroup);
  }
  /*downloadCsv() {
    const csvData = this.convertToCSV(this.holdingData);
    console.log('csvData',csvData);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });

    // Save the Blob as a file using the FileSaver.js library
    saveAs(blob, 'holdingData.csv');
  }
  private convertToCSV(data: any[]): string {
    const headers = Object.keys(data[0]);
    const rows = data.map(row => headers.map(header => row[header]));

    return [headers.join(','), ...rows.map(row => row.join(','))].join('\n');
  }*/
  downloadCsv() {
    const selectedFields = ['SecurityName','ISIN','Beneficiary','Colletral','DPHolding','TotalHolding','CloseRate','VARRate','ApprovedFlag','Category','ColletralHaircutValue','DPHoldingValue','TotalHaircutValue','BuyAvg','NotionalPNL'];
    const csvData = this.convertToCSV(this.holdingData, selectedFields);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, 'holdingData.csv');
  }

  private convertToCSV(data: any[], selectedFields: string[]): string {
    const headers = selectedFields;
    const rows = data.map(row => selectedFields.map(field => row[field]));

    return [headers.join(','), ...rows.map(row => row.join(','))].join('\n');
  }
}
