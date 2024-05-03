import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { AuthInterceptor } from 'src/app/services/auth-interceptor.service';
import * as XLSX from 'xlsx';
import * as saveAs from 'file-saver';

@Component({
  selector: 'app-equity-p-and-l-report',
  templateUrl: './equity-p-and-l-report.component.html',
  styleUrls: ['./equity-p-and-l-report.component.scss']
})
export class EquityPAndLReportComponent implements OnInit {
  public longShortGroup: FormGroup | any;
  LongTermList: any = [];
  ShortTermList: any = [];
  JobbingList: any = [];
  HoldingDetailList: any = [];
  DividendDetailList: any = [];
  MinusHoldingDetailList: any = [];
  authToken = JSON.parse(localStorage.getItem('isLoggedIn') || '')
  data: any

  constructor(public service: ApiServiceService, public auth: AuthInterceptor) { }

  ngOnInit(): void {
    this.longShortGroup = new FormGroup({
      FirmID: new FormControl(this.auth.firm_id, Validators.required),
      AccountID: new FormControl(this.authToken.username, Validators.required),
      FromDate: new FormControl('2023-03-30', Validators.required),
      ToDate: new FormControl(this.service.getCurrentDate(), Validators.required),
    });
  }


  get f() {
    return this.longShortGroup.controls;
  }


  public save() {
    if (this.longShortGroup.valid) {
      // this.longShortGroup.value.ExportFormat = 1;
      this.service.getEquityLongShort(this.longShortGroup.value).subscribe((res: any) => {
        console.log("res", res)
        if (res) {
          this.LongTermList = res.LongTerm;
          this.ShortTermList = res.ShortTerm;
          this.JobbingList = res.Jobbing;
          this.HoldingDetailList = res.HoldingDetail;
          this.DividendDetailList = res.DividendDetail;
          this.MinusHoldingDetailList = res.MinusHoldingDetail;
        }
      }, (err: any) => {
        console.log("err", err)
      })
    }
    console.log(this.longShortGroup);
  }

  public Export(type: any) {
    if (this.longShortGroup.valid) {
      this.longShortGroup.value.ExportFormat = type;
      this.service.getEquityLongShort(this.longShortGroup.value).subscribe((res: any) => {
        this.data = {
          "Long Term": res.LongTerm,
          "Short Term": res.ShortTerm,
          "Jobbing": res.Jobbing,
          "Holding Detail": res.HoldingDetail,
          "Dividend Detail": res.DividendDetail,
          "Short Sell":res.MinusHoldingDetail
        };
        console.log("res", res)
        this.exportAsExcelFile();
      }, (err: any) => {
        console.log("err", err)
      })
    }
    console.log(this.longShortGroup);
  }

  exportAsExcelFile(): void {
    const wb = XLSX.utils.book_new();

    // Add each array as a sheet
    for (const key in this.data) {
      if (this.data.hasOwnProperty(key)) {
        const dataArray = this.data[key];
        const ws = XLSX.utils.json_to_sheet(dataArray);
        XLSX.utils.book_append_sheet(wb, ws, key);
      }
    }

    // Generate XLSX file
    const wbout = XLSX.write(wb, {
      type: "array",
      bookType: 'xlsx',
      bookSST: true,
    });

    // Save the file
    saveAs(
      new Blob([wbout], { type: 'application/octet-stream' }),
      'combinedData.xlsx'
    );
  }

}
