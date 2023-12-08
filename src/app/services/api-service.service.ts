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
}
