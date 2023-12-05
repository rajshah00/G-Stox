import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
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
import { NSDLFinancialComponent } from './NSDL Reports/nsdl-financial/nsdl-financial.component';
import { NSDLHoldingComponent } from './NSDL Reports/nsdl-holding/nsdl-holding.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      }, {
        path: 'bill-summary-equity',
        component: EquityBillsSummaryComponent
      }, {
        path: 'equity-trade-confirmation',
        component: EquityTradeConfimationComponent
      }, {
        path: 'equity-transaction-ledger',
        component: EquityTransactionLedgerComponent
      }, {
        path: 'bill-summary-derivative',
        component: DerivativeBillsSummaryComponent
      }, {
        path: 'pl-statement',
        component: DerivativePAndLStatementComponent
      }, {
        path: 'long-short',
        component: EquityPAndLReportComponent
      }, {
        path: 'FIFO-net-position',
        component: DerivativePAndLReportComponent
      }, {
        path: 'year-end-report',
        component: YearEndReportComponent
      }, {
        path: 'MTF-detail-statement',
        component: MtfDetailStatementComponent
      }, {
        path: 'holding',
        component: HoldingComponent
      }, {
        path: 'net-position-derivative',
        component: NetPositionDerivativeComponent
      }, {
        path: 'derivative-trade-report',
        component: DerivativeTradeReportComponent
      }, {
        path: 'equity-trade-report',
        component: EquityTradeReportComponent
      }, {
        path: 'clientwis-open-position',
        component: ClientWiseOpenPositionComponent
      }, {
        path: 'financial-ledger',
        component: FinancialLedgerComponent
      }, {
        path: 'short-cash',
        component: ShortCashColletralRequestComponent
      }, {
        path: 'exchange-re-pledge',
        component: ExchangeRePledgeReportComponent
      }, {
        path: 'buy-back',
        component: BuyBackComponent
      }, {
        path: 'ACH-request',
        component: ACHRequestComponent
      }, {
        path: 'margin-pledge',
        component: MarginPledgeComponent
      }, {
        path: 'KYC-modification',
        component: KYCModificationRequestLetterComponent
      }, {
        path: 'contract-note',
        component: ContractNoteComponent
      }, {
        path: 'client-profile',
        component: ClientMasterComponent
      }, {
        path: 'transaction',
        component: TransactionComponent
      }, {
        path: 'NSDL-holding',
        component: NSDLHoldingComponent
      }, {
        path: 'NSDL-financial',
        component: NSDLFinancialComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
