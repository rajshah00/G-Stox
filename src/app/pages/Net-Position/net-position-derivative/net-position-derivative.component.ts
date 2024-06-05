import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { AuthInterceptor } from 'src/app/services/auth-interceptor.service';
import * as saveAs from 'file-saver';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-net-position-derivative',
  templateUrl: './net-position-derivative.component.html',
  styleUrls: ['./net-position-derivative.component.scss']
})
export class NetPositionDerivativeComponent implements OnInit {
  public netPositionGroup: FormGroup | any;
  NetPositionGroupList: any = [];
  authToken = JSON.parse(localStorage.getItem('isLoggedIn') || '')
  constructor(public service: ApiServiceService, public auth: AuthInterceptor) { }

  ngOnInit(): void {
    this.netPositionGroup = new FormGroup({
      FirmID: new FormControl(this.auth.firm_id, Validators.required),
      AccountID: new FormControl(this.authToken.username, Validators.required),
      Exchange: new FormControl('NSE', Validators.required),
      Segment: new FormControl('FNO', Validators.required),
      AsOnDate: new FormControl(this.service.getCurrentDate(), Validators.required),
      Instrument: new FormControl('ALL'),
      Symbol: new FormControl(''),
      ExpiryDate: new FormControl(''),
      StrikePrice: new FormControl(''),
      OptionType: new FormControl('ALL'),
      ReportType: new FormControl('CLIENT')
    });
  }


  get f() {
    return this.netPositionGroup.controls;
  }


  public save() {
    if (this.netPositionGroup.valid) {
      const formData = this.service.buildFormData(this.netPositionGroup.value);
      this.service.getDerivativeNetPosition(formData).subscribe((res: any) => {
        console.log("res", res)
        if (res) {
          this.NetPositionGroupList = res.PositionData;
        }

      }, (err: any) => {
        console.log("err", err)
      })
    }
    console.log(this.netPositionGroup);
  }

  downloadCsv() {
    const selectedFields = ['Symbol',
      'ExpiryDate',
      'StrikePrice',
      'OptionType',
      'BuyQuantity',
      'BuyValue',
      'SellQuantity',
      'SellValue',
      'NetQuantity',
      'NetValue',
      'AverageRate',
      'CloseRate',
      'MTM'];
    const csvData = this.convertToCSV(this.NetPositionGroupList, selectedFields);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, 'Net_Position_Derivative.csv');
  }

  private convertToCSV(data: any[], selectedFields: string[]): string {
    const headers = selectedFields;
    const rows = data.map(row => selectedFields.map(field => row[field]));

    return [headers.join(','), ...rows.map(row => row.join(','))].join('\n');
  }

  public downloadAsPDF() {
    const element: any = document.getElementById('pdfTable');
    const doc: any = new jsPDF();
    html2canvas(element).then((canvas: any) => {
      const imgData = canvas.toDataURL('image/png');
      // Set width and height of PDF page (similar to A4)
      const pdfWidth = doc.internal.pageSize.getWidth();
      const pdfHeight = doc.internal.pageSize.getHeight();
      const ratio = pdfWidth / canvas.width;
      const imgHeight = canvas.height * ratio;

      doc.addImage(imgData, 'PNG', 0, 10, pdfWidth, imgHeight);
      doc.save('Net_Position_Derivative.pdf');
    });

    // doc.save('tableToPdf.pdf');
  }

}
