import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { AuthInterceptor } from 'src/app/services/auth-interceptor.service';

@Component({
  selector: 'app-stt',
  templateUrl: './stt.component.html',
  styleUrls: ['./stt.component.scss']
})
export class SttComponent implements OnInit {
  public sttGroup: FormGroup | any;

  constructor(public service: ApiServiceService, public auth: AuthInterceptor) { }

  ngOnInit(): void {
    this.sttGroup = new FormGroup({
      financial_year: new FormControl('2021-2022', Validators.required),
    });
  }

  get f() {
    return this.sttGroup.controls;
  }
}