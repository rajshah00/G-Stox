import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { AuthInterceptor } from 'src/app/services/auth-interceptor.service';

@Component({
  selector: 'app-client-master',
  templateUrl: './client-master.component.html',
  styleUrls: ['./client-master.component.scss']
})
export class ClientMasterComponent implements OnInit {
  public clientGroup: FormGroup | any;
  authToken = JSON.parse(localStorage.getItem('isLoggedIn') || '')
  constructor(public service: ApiServiceService, public auth: AuthInterceptor) { }

  ngOnInit(): void {
    this.clientGroup = new FormGroup({
      ClientCode: new FormControl(this.auth.firm_id, Validators.required),
    });
  }

  get f() {
    return this.clientGroup.controls;
  }

  public save() {
    if (this.clientGroup.valid) {
      this.service.getClientMasterDetail(this.clientGroup.value).subscribe((res: any) => {
        console.log("res", res)
      }, (err: any) => {
        console.log("err", err)
      })
    }
    console.log(this.clientGroup);
  }

}
