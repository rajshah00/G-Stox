import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }
  // toster function //
  toster(type: any, message: any) {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: type,
      title: message
    });
  }

  buildFormData(data: any, formData: FormData = new FormData(), parentKey: string | null = null): FormData {
    if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
      Object.keys(data).forEach(key => {
        this.buildFormData(data[key], formData, parentKey ? `${parentKey}[${key}]` : key);
      });
    } else {
      if (data instanceof Date) {
        data = data.toISOString();
      }
      formData.append(parentKey!, data);
    }
    return formData;
  }


  isAuthenticated(): boolean {
    const authToken = JSON.parse(localStorage.getItem('isLoggedIn') || '');
    return authToken !== null && authToken !== undefined;
  }

  isLogin(data: any) {
    data.Grant_type = "password";
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', });
    const body = new HttpParams({ fromObject: data });
    // console.log("data", data);
    // return this.http.post(environment.API_URL + '/token', body, { headers });
    return this.http.post(environment.BASE_URL +'/backoffice/login.php', body);
  }

  getProfile(ClientCode: any) {
    return this.http.get<any>(`${environment.BASE_URL}/backoffice/Reports/ClientProfile.php?ClientCode=${ClientCode}`);
  }

  getClintDas(ClientCode: any) {
    return this.http.get<any>(`${environment.BASE_URL}/backoffice/Common/ClientDashBoard.php?ClientCode=${ClientCode}`);
  }

  getSegmentBalance(data: any) {
    data.Grant_type = "password";
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', });
    return this.http.post(environment.API_URL + '/Reports/FinancialBalance/Post', {}, { headers });
  }

  getFinancialLedger(body: any) {
    // const headers = new HttpHeaders({ 'Authorization': 'Bearer FRb1_Nl7QPD3r1Xx_ZOPgKE_LFbXOez5F-oxd3rn-ZiQIReDbnbTJtmP2jZJ0qv0YlAy5h9737lmjxTyxJR5NIw28AQ2xZ5n8U9RzdZSgaRVBE_N3M_FnnPTufLyqAKbrSppNBLDD1lbVfw4zu12MjVZ3QsIT55IuemKgsqUzZ-Rqlrj8ETeqyWTjP_-RAlY1gceQHu_lXnhyHcKhZkhSTfjY5_WFm9HoajuWTCz9eauc6Whb_U_hXtyNoSEtorfGTCwwWNi3wVkra2EO_DiCAMo_CUW8lU0njZb3KO99tTsZfcGUzwX-w9hzzXd2ip4C7dVIc5DJeJkWLOWhwM2otb0Yn6y-Tzotu-uqlLF-7g', });
    return this.http.post(environment.BASE_URL + '/backoffice/Reports/FinancialLedger.php', body);
  }

  getClientHolding(body: any) {
    return this.http.post(environment.BASE_URL + '/backoffice/Reports/ClientHolding.php', body);
  }

  getDerivativeNetPosition(data: any) {
    return this.http.post(environment.BASE_URL + '/backoffice/Reports/DerivativeNetPosition.php', data);
  }

  getEquityLongShort(data: any) {
    return this.http.post(environment.BASE_URL + '/backoffice/Reports/EquityLongShort.php', data);
  }

  getClientMasterDetail(body: any) {
    return this.http.get<any>(`${environment.API_URL}/Masters/ClientMasterDetail/Get?Code=${body.ClientCode}&ClientType=A`);
  }

  getEquityTradeBook(data: any) {
    return this.http.post(environment.API_URL + '/Reports/EquityTradeBook/Post', data);
  }

  getDerivativeTradeBook(data: any) {
    return this.http.post(environment.API_URL + '/Reports/DerivativeTradeBook/Post', data);
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
    return this.http.post(environment.API_URL + '/Reports/EquityBillDetail/Post', data);
  }

  getDerivativeBillDetail(data: any) {
    return this.http.post(environment.API_URL + '/Reports/DerivativeBillDetail/Post', data);
  }

  getAPAmount(FileID: any) {
    return this.http.get<any>(`${environment.API_URL}/Vouchers/APAmount/Get?AccountID=${FileID}&RequestType=ONREQUEST&ReleaseFlag=N`);
  }

  getBankDetail(ClientCode: any, BankID: any) {
    return this.http.get<any>(`${environment.BASE_URL}/backoffice/Masters/BankDetail.php?Code=${ClientCode}&BankID=${BankID}&BankType=D`);
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
    return this.http.post(environment.BASE_URL + '/backoffice/Reports/FIFONetPositionReport.php', data);
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
    return this.http.post(environment.API_URL + '/Reports/EquityTransactionLedger/Post', data);
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

  getCurrentDate(): string {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString()
      .padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;
    return formattedDate;
  }

  sendOTP(data: any) {
    // const headers = new HttpHeaders({ 'Host': '192.200.8.14:4200' });
    const body = new HttpParams({ fromObject: data });
    return this.http.post(environment.BASE_URL + '/app_send_opt.php', body);
  }

  verifyOTP(data: any) {
    // const headers = new HttpHeaders({ 'Host': '192.200.8.14:4200' });
    const body = new HttpParams({ fromObject: data });
    return this.http.post(environment.BASE_URL + '/app_verify_opt.php', body);
  }


  verifyedOTP(data: any) {
    // const headers = new HttpHeaders({ 'Host': '192.200.8.14:4200' });
    const body = new HttpParams({ fromObject: data });
    return this.http.post(environment.BASE_URL + '/verify.php', body);
  }

  submitApp(data: any) {
    // const headers = new HttpHeaders({ 'Host': '192.200.8.14:4200' });
    const body = new HttpParams({ fromObject: data });
    return this.http.post(environment.BASE_URL + '/create_app.php', body);
  }


  appList(data: any) {
    // const headers = new HttpHeaders({ 'Host': '192.200.8.14:4200' });
    const body = new HttpParams({ fromObject: data });
    return this.http.post(environment.BASE_URL + '/app_list.php', body);
  }

  deleteApp(data: any) {
    // const headers = new HttpHeaders({ 'Host': '192.200.8.14:4200' });
    const body = new HttpParams({ fromObject: data });
    return this.http.post(environment.BASE_URL + '/app_delete.php', body);
  }

  expAppList(data: any) {
    // const headers = new HttpHeaders({ 'Host': '192.200.8.14:4200' });
    const body = new HttpParams({ fromObject: data });
    return this.http.post(environment.BASE_URL + '/expiry_app_list.php', body);
  }

  getOrionEKYCDetail(body: any) {
    return this.http.get<any>(`${environment.BASE_URL}/backoffice/Masters/GetOrionEKYCDetail.php?Code=${body.ClientCode}&ClientType=A`);
  }

  saveProfileDetail(body: any) {
     return this.http.post(environment.BASE_URL + '/backoffice/Reports/FinancialLedger.php', body);
  }

}


