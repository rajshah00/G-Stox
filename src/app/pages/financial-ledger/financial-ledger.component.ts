import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { AuthInterceptor } from 'src/app/services/auth-interceptor.service';
import * as saveAs from 'file-saver';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
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
      const formData = this.service.buildFormData(this.financialGroup.value);
      this.service.getFinancialLedger(formData).subscribe((res: any) => {
        console.log("res", res);
        if (res) {
          console.log('res.Financial',res.Financial);
          this.FinancialList = res.Financial;
          this.TotalDebit = this.calculateTotal(this.FinancialList,'Debit');
          this.TotalCredit = this.calculateTotal(this.FinancialList,'Credit');
          this.TotaRunningBalance = this.calculateTotal(this.FinancialList,'RunningBalance');
        }
      }, (err: any) => {
        console.log("err", err)
      })
    }
    console.log(this.financialGroup);
  }

  downloadCsv() {
    const selectedFields = ['ValueDate','VoucherDate','Exchange','Segment','Narration','BillNo','ReferenceNo','Debit','Credit','RunningBalance'];
    const csvData = this.convertToCSV(this.FinancialList, selectedFields);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, 'FinancialList.csv');
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
      doc.save('FinancialList.pdf');
    });

    // doc.save('tableToPdf.pdf');
  }

  calculateTotal(data: any, type: any) {
    let totalNetPL = 0;
    for (let entry of data) {
      totalNetPL += entry[type];
    }
    return totalNetPL;
  }
}
