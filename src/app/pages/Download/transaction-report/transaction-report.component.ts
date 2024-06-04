import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { AuthInterceptor } from 'src/app/services/auth-interceptor.service';

@Component({
  selector: 'app-transaction-report',
  templateUrl: './transaction-report.component.html',
  styleUrls: ['./transaction-report.component.scss']
})
export class TransactionReportComponent implements OnInit {
  public transactionReportGroup: FormGroup | any;

  constructor(public service: ApiServiceService, public auth: AuthInterceptor) { }

  ngOnInit(): void {
    this.transactionReportGroup = new FormGroup({
      FromDate: new FormControl(this.service.getCurrentDate(), Validators.required),
      ToDate: new FormControl(this.service.getCurrentDate(), Validators.required),
      category: new FormControl('Equity', Validators.required),
    });
  }

  get f() {
    return this.transactionReportGroup.controls;
  }
}