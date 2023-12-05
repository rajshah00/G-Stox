import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './layout/header/header.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { EquityBillsSummaryComponent } from './Reports/equity-bills-summary/equity-bills-summary.component';
import { EquityTradeConfimationComponent } from './Reports/equity-trade-confimation/equity-trade-confimation.component';
import { EquityTransactionLedgerComponent } from './Reports/equity-transaction-ledger/equity-transaction-ledger.component';
import { DerivativeBillsSummaryComponent } from './Reports/derivative-bills-summary/derivative-bills-summary.component';
import { DerivativePAndLStatementComponent } from './Reports/derivative-p-and-l-statement/derivative-p-and-l-statement.component';
import { EquityPAndLReportComponent } from './Reports/equity-p-and-l-report/equity-p-and-l-report.component';
import { DerivativePAndLReportComponent } from './Reports/derivative-p-and-l-report/derivative-p-and-l-report.component';
import { YearEndReportComponent } from './Reports/year-end-report/year-end-report.component';
import { MtfDetailStatementComponent } from './Reports/mtf-detail-statement/mtf-detail-statement.component';
import { HoldingComponent } from './holding/holding.component';
import { NetPositionDerivativeComponent } from './Net-Position/net-position-derivative/net-position-derivative.component';
import { DerivativeTradeReportComponent } from './Net-Position/derivative-trade-report/derivative-trade-report.component';
import { EquityTradeReportComponent } from './Net-Position/equity-trade-report/equity-trade-report.component';
import { ClientWiseOpenPositionComponent } from './Net-Position/client-wise-open-position/client-wise-open-position.component';
import { FinancialLedgerComponent } from './financial-ledger/financial-ledger.component';
import { ShortCashColletralRequestComponent } from './RMS/short-cash-colletral-request/short-cash-colletral-request.component';
import { ExchangeRePledgeReportComponent } from './RMS/exchange-re-pledge-report/exchange-re-pledge-report.component';
import { BuyBackComponent } from './Request/buy-back/buy-back.component';
import { ACHRequestComponent } from './Request/achrequest/achrequest.component';
import { MarginPledgeComponent } from './Request/margin-pledge/margin-pledge.component';
import { KYCModificationRequestLetterComponent } from './Request/kycmodification-request-letter/kycmodification-request-letter.component';
import { ContractNoteComponent } from './Download/contract-note/contract-note.component';
import { ClientMasterComponent } from './NSDL Reports/client-master/client-master.component';
import { TransactionComponent } from './NSDL Reports/transaction/transaction.component';
import { NSDLHoldingComponent } from './NSDL Reports/nsdl-holding/nsdl-holding.component';
import { NSDLFinancialComponent } from './NSDL Reports/nsdl-financial/nsdl-financial.component';


@NgModule({
  declarations: [
    PagesComponent,
    LayoutComponent,
    DashboardComponent,
    HeaderComponent,
    SideBarComponent,
    EquityBillsSummaryComponent,
    EquityTradeConfimationComponent,
    EquityTransactionLedgerComponent,
    DerivativeBillsSummaryComponent,
    DerivativePAndLStatementComponent,
    EquityPAndLReportComponent,
    DerivativePAndLReportComponent,
    YearEndReportComponent,
    MtfDetailStatementComponent,
    HoldingComponent,
    NetPositionDerivativeComponent,
    DerivativeTradeReportComponent,
    EquityTradeReportComponent,
    ClientWiseOpenPositionComponent,
    FinancialLedgerComponent,
    ShortCashColletralRequestComponent,
    ExchangeRePledgeReportComponent,
    BuyBackComponent,
    ACHRequestComponent,
    MarginPledgeComponent,
    KYCModificationRequestLetterComponent,
    ContractNoteComponent,
    ClientMasterComponent,
    TransactionComponent,
    NSDLHoldingComponent,
    NSDLFinancialComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
