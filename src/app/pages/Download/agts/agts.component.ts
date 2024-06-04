import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { AuthInterceptor } from 'src/app/services/auth-interceptor.service';

@Component({
  selector: 'app-agts',
  templateUrl: './agts.component.html',
  styleUrls: ['./agts.component.scss']
})
export class AgtsComponent implements OnInit {
  public agtsGroup: FormGroup | any;

  constructor(public service: ApiServiceService, public auth: AuthInterceptor) { }

  ngOnInit(): void {
    this.agtsGroup = new FormGroup({
      financial_year: new FormControl('2021-2022', Validators.required),
    });
  }

  get f() {
    return this.agtsGroup.controls;
  }
}