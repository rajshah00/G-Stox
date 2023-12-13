import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }

  isAuthenticated(): boolean {
    const authToken = JSON.parse(localStorage.getItem('isLoggedIn') || '');
    return authToken !== null && authToken !== undefined;
  }

  isLogin(data: any) {
    data.Grant_type = "password";
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', });
    const body = new HttpParams({ fromObject: data });
    console.log("data", data);
    return this.http.post(environment.API_URL + '/token', body, { headers });
  }

  getProfile(ClientCode: any) {
    return this.http.get<any>(`${environment.API_URL}/Reports/ClientProfile/Get?ClientCode=${ClientCode}`);
  }

  getClintDas(ClientCode: any) {
    return this.http.get<any>(`${environment.API_URL}/Common/ClientDashBoard/Get?ClientCode=${ClientCode}`);
  }

  getSegmentBalance(data: any) {
    data.Grant_type = "password";
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', });
    return this.http.post(environment.API_URL + '/Reports/FinancialBalance/Post', {}, { headers });
  }

  getFinancialLedger(body: any) {
    return this.http.post(environment.API_URL + '/Reports/FinancialLedger/Post', body);
  }

  getClientHolding(body: any) {
    return this.http.post(environment.API_URL + '/Reports/ClientHolding/Post', body);
  }

  getDerivativeNetPosition(data: any) {
    data.Grant_type = "password";
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', });
    return this.http.post(environment.API_URL + '/Reports/DerivativeNetPosition/Post', {}, { headers });
  }

  getEquityLongShort(data: any) {
    return this.http.post(environment.API_URL + '/Reports/EquityLongShort/Post', data);
  }

  getClientMasterDetail(body: any) {
    return this.http.get<any>(`${environment.API_URL}/Masters/ClientMasterDetail/Get?Code=${body.ClientCode}&ClientType=A`);
  }

  getEquityTradeBook(data: any) {
    return this.http.post(environment.API_URL + '/Reports/EquityTradeBook/Post', data);
  }

  getDerivativeTradeBook(data: any) {
    data.Grant_type = "password";
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', });
    return this.http.post(environment.API_URL + '/Reports/DerivativeTradeBook/Post', {}, { headers });
  }

  getEquityNetPositionDateRange(data: any) {
    return this.http.post(environment.API_URL + '/Reports/EquityNetPositionDateRange/Post', data);
  }

  getContractNoteWeb(data: any) {
    return this.http.post(environment.API_URL + '/Reports/ContractNoteWeb/Post', data);
  }

  getDocumentSign(FileID: any) {
    return this.http.get<any>(`${environment.API_URL}/Services/DocumentSign/Get?DocumentID=${FileID}&DocumentType=CNOTE`);
  }

  getEquityBillDetail(data: any) {
    data.Grant_type = "password";
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', });
    return this.http.post(environment.API_URL + '/Reports/EquityBillDetail/Post', {}, { headers });
  }

  getDerivativeBillDetail(data: any) {
    return this.http.post(environment.API_URL + '/Reports/DerivativeBillDetail/Post', data);
  }

  getAPAmount(FileID: any) {
    return this.http.get<any>(`${environment.API_URL}/Vouchers/APAmount/Get?AccountID=${FileID}&RequestType=ONREQUEST&ReleaseFlag=N`);
  }

  getBankDetail(FileID: any) {
    return this.http.get<any>(`${environment.API_URL}/Masters/BankDetail/Get?Code=${FileID}&BankID=&BankType=D`);
  }

  getPaymentRequest(data: any) {
    data.Grant_type = "password";
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', });
    return this.http.post(environment.API_URL + '/Vouchers/PaymentRequest/Post', {}, { headers });
  }

  getPaymentReleaseRequest(FileID: any) {
    return this.http.get<any>(`${environment.API_URL}/Vouchers/PaymentReleaseRequest/Get?RequestDate=${FileID}&Release=N`);
  }

  getClientBrokerage(ClientCode: any) {
    return this.http.get<any>(`${environment.API_URL}/Common/ClientBrokerage/Get?ClientCode=${ClientCode}`);
  }


  getClientCustomInfo(ClientCode: any) {
    return this.http.get<any>(`${environment.API_URL}/Utilities/ClientCustomInfo/Get?AccountID=${ClientCode}`);
  }

  getFIFONetPositionReport(data: any) {
    data.Grant_type = "password";
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', });
    return this.http.post(environment.API_URL + '/Reports/FIFONetPositionReport/Post', {}, { headers });
  }

  getEquityPnLReportWeb(data: any) {
    return this.http.get<any>(`${environment.API_URL}/Masters/EquityPnLReportWeb/Get?ClientCode=${data.ClientCode}&FromDate=${data.FromDate}&ToDate=${data.ToDate}&ReportType=${data.ReportType}&ExportFormat=${data.ExportFormat} `);
  }

  getIFSCBankData(data: any) {
    return this.http.get<any>(`${environment.API_URL}/Masters/IFSCBankData/Get?micr=${data.micr}&ifsc=${data.ifsc}`);
  }

  getDerivativeNetPositionDateRange(data: any) {
    data.Grant_type = "password";
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', });
    return this.http.post(environment.API_URL + '/Reports/DerivativeNetPositionDateRange/Post', {}, { headers });
  }

  geClientCustomInfo(data: any) {
    return this.http.get<any>(`${environment.API_URL}/Utilities/ClientCustomInfo/Get?AccountID=${data.ClientCode}`);
  }

  geGetOrionCDSLDetail(data: any) {
    return this.http.get<any>(`${environment.API_URL}/Masters/GetOrionCDSLDetail/Get?PANNo=${data.PANNo}`);
  }

  getEquityTransactionLedger(data: any) {
    data.Grant_type = "password";
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', });
    return this.http.post(environment.API_URL + '/Reports/EquityTransactionLedger/Post', {}, { headers });
  }

  getWEBDebtorCreditorList(data: any) {
    data.Grant_type = "password";
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', });
    return this.http.post(environment.API_URL + '/Reports/WEBDebtorCreditorList/Post', {}, { headers });
  }

  getTurnoverBrokerageWebReport(data: any) {
    data.Grant_type = "password";
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', });
    return this.http.post(environment.API_URL + '/Reports/TurnoverBrokerageWebReport/Post', {}, { headers });
  }

  getBrokerageSummaryReport(data: any) {
    data.Grant_type = "password";
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', });
    let url1 = environment.API_URL + '/Reports/IntroBrokReport/Post';
    let url2 = environment.API_URL + '/Reports/BrokerageSummaryReport/Post';
    return this.http.post(url1, {}, { headers });
  }

  geFIFOHolding(data: any) {
    return this.http.get<any>(`${environment.API_URL}/Utilities/FIFOHolding/Get?AccountID=${data.ClientCode}`);
  }
}


