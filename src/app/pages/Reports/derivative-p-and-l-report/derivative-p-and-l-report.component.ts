import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { AuthInterceptor } from 'src/app/services/auth-interceptor.service';
import * as saveAs from 'file-saver';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-derivative-p-and-l-report',
  templateUrl: './derivative-p-and-l-report.component.html',
  styleUrls: ['./derivative-p-and-l-report.component.scss']
})
export class DerivativePAndLReportComponent implements OnInit {
  public derivativePLGroup: FormGroup | any;
  DerivativePLList: any = [];
  authToken = JSON.parse(localStorage.getItem('isLoggedIn') || '')
  constructor(public service: ApiServiceService, public auth: AuthInterceptor) { }

  ngOnInit(): void {
    this.derivativePLGroup = new FormGroup({
      Account: new FormControl(this.authToken.username, Validators.required),
      FromDate: new FormControl('2023-03-30', Validators.required),
      ToDate: new FormControl(this.service.getCurrentDate(), Validators.required),
      SegmentID: new FormControl('FNO', Validators.required),
      ReportType: new FormControl('R2', Validators.required),
      IncludeExpence: new FormControl('1', Validators.required),
      BFWithCloseRateFlag: new FormControl('Y', Validators.required),
    });
  }


  get f() {
    return this.derivativePLGroup.controls;
  }


  public save() {
    console.log("this.derivativePLGroup", this.derivativePLGroup);
    if (this.derivativePLGroup.valid) {
      const formData = this.service.buildFormData(this.derivativePLGroup.value);
      this.service.getFIFONetPositionReport(formData).subscribe((res: any) => {
        console.log("res", res)
        if (res) {
          this.DerivativePLList = res;
        }
      }, (err: any) => {
        this.service.toster("error", err.Message);
        console.log("err", err)
      })
    }
  }


  public export(type: any) {
    if (this.derivativePLGroup.valid) {
      this.derivativePLGroup.value.ExportFormat = type;
      const formData = this.service.buildFormData(this.derivativePLGroup.value);
      this.service.getFIFONetPositionReport(formData).subscribe((res: any) => {
        console.log("res", res)
      }, (err: any) => {
        this.service.toster("error", err.Message);
        console.log("err", err)
      })
    }
    console.log(this.derivativePLGroup);
  }

  downloadCsv() {
    const selectedFields = ['SecurityName', 'ISIN', 'Beneficiary', 'Colletral', 'DPHolding', 'TotalHolding', 'CloseRate', 'VARRate', 'ApprovedFlag', 'Category', 'ColletralHaircutValue', 'DPHoldingValue', 'TotalHaircutValue', 'BuyAvg', 'NotionalPNL'];
    const csvData = this.convertToCSV(this.DerivativePLList, selectedFields);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, 'holdingData.csv');
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
      doc.save('holdingData.pdf');
    });

    // doc.save('tableToPdf.pdf');
  }

}
