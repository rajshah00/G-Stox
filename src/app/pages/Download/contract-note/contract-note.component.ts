import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { AuthInterceptor } from 'src/app/services/auth-interceptor.service';

@Component({
  selector: 'app-contract-note',
  templateUrl: './contract-note.component.html',
  styleUrls: ['./contract-note.component.scss']
})
export class ContractNoteComponent implements OnInit {
  public contractNoteGroup: FormGroup | any;
  authToken = JSON.parse(localStorage.getItem('isLoggedIn') || '')
  constructor(public service: ApiServiceService, public auth: AuthInterceptor) { }

  ngOnInit(): void {
    this.contractNoteGroup = new FormGroup({
      FromDate: new FormControl(this.service.getCurrentDate(), Validators.required),
      ToDate: new FormControl(this.service.getCurrentDate(), Validators.required),
    });
  }


  get f() {
    return this.contractNoteGroup.controls;
  }


  public save() {
    if (this.contractNoteGroup.valid) {
      this.service.getContractNoteWeb(this.contractNoteGroup.value).subscribe((res: any) => {
        console.log("res", res)
      }, (err: any) => {
        console.log("err", err)
      })
    }
    console.log(this.contractNoteGroup);
  }


  public export() {
    if (this.contractNoteGroup.valid) {
      this.service.getDocumentSign(this.auth.firm_id).subscribe((res: any) => {
        console.log("res", res)
      }, (err: any) => {
        console.log("err", err)
      })
    }
    console.log(this.contractNoteGroup);
  }
}
