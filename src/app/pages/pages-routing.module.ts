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
import { HoldingComponent } from './Portfolio/holding/holding.component';
import { NetPositionDerivativeComponent } from './Net-Position/net-position-derivative/net-position-derivative.component';
import { DerivativeTradeReportComponent } from './Net-Position/derivative-trade-report/derivative-trade-report.component';
import { EquityTradeReportComponent } from './Net-Position/equity-trade-report/equity-trade-report.component';
import { ClientWiseOpenPositionComponent } from './Net-Position/client-wise-open-position/client-wise-open-position.component';
import { FinancialLedgerComponent } from './financial-ledger/financial-ledger.component';
import { BuyBackComponent } from './Tender-Offer/buy-back/buy-back.component';
import { ACHRequestComponent } from './Tender-Offer/achrequest/achrequest.component';
import { IPOComponent } from './Tender-Offer/ipo/ipo.component';
import { MarginPledgeComponent } from './Tender-Offer/margin-pledge/margin-pledge.component';
import { KYCModificationRequestLetterComponent } from './Tender-Offer/kycmodification-request-letter/kycmodification-request-letter.component';
import { ContractNoteComponent } from './Download/contract-note/contract-note.component';
import { ClientMasterComponent } from './NSDL Reports/client-master/client-master.component';
import { TransactionComponent } from './NSDL Reports/transaction/transaction.component';
import { NSDLFinancialComponent } from './NSDL Reports/nsdl-financial/nsdl-financial.component';
import { NSDLHoldingComponent } from './NSDL Reports/nsdl-holding/nsdl-holding.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfolioPositionComponent } from './Portfolio/profolio-position/profolio-position.component';
import { AddFundsComponent } from './funds/add-funds/add-funds.component';
import { WithdrawalComponent } from './funds/withdrawal/withdrawal.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { MyAppsComponent } from './my-apps/my-apps.component';
import { AddNewAppComponent } from './my-apps/add-new-app/add-new-app.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      // reports starts
      {
        path: 'equity-bill-summary',
        component: EquityBillsSummaryComponent
      }, {
        path: 'equity-trade-confirmation',
        component: EquityTradeConfimationComponent
      }, {
        path: 'equity-transaction-ledger',
        component: EquityTransactionLedgerComponent
      },
      // reports end
      {
        path: 'long-short',
        component: EquityPAndLReportComponent
      },
      {
        path: 'FIFONetPosition',
        component: DerivativePAndLReportComponent
      },
      // Profolio start
      {
        path: 'holding',
        component: HoldingComponent
      }, {
        path: 'position',
        component: ProfolioPositionComponent
      },
      // Profolio end
      {
        path: 'net-position-derivative',
        component: NetPositionDerivativeComponent
      }, {
        path: 'derivative-trade-report',
        component: DerivativeTradeReportComponent
      }, {
        path: 'equity-trade-report',
        component: EquityTradeReportComponent
      }, {
        path: 'buy-back',
        component: BuyBackComponent
      }, {
        path: 'ACH-request',
        component: ACHRequestComponent
      }, {
        path: 'ipo',
        component: IPOComponent
      }, {
        path: 'contract-note',
        component: ContractNoteComponent
      }, {
        path: 'transaction',
        component: TransactionComponent
      }, {
        path: 'NSDL-holding',
        component: NSDLHoldingComponent
      }, {
        path: 'NSDL-financial',
        component: NSDLFinancialComponent
      }, {
        path: 'profile',
        component: ProfileComponent
      }, {
        path: 'FinancialLedger',
        component: FinancialLedgerComponent
      }, {
        path: 'add-funds',
        component: AddFundsComponent
      }, {
        path: 'withdrawal',
        component: WithdrawalComponent
      }, {
        path: 'terms-and-conditions',
        component: TermsAndConditionsComponent
      }, {
        path: 'my-apps',
        component: MyAppsComponent
      }, {
        path: 'add-new-app',
        component: AddNewAppComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
