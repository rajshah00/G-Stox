import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { AuthInterceptor } from 'src/app/services/auth-interceptor.service';

@Component({
  selector: 'app-dp-holding',
  templateUrl: './dp-holding.component.html',
  styleUrls: ['./dp-holding.component.scss']
})
export class DpHoldingComponent implements OnInit {
  public dpHoldingGroup: FormGroup | any;

  constructor(public service: ApiServiceService, public auth: AuthInterceptor) { }

  ngOnInit(): void {
    this.dpHoldingGroup = new FormGroup({
      FromDate: new FormControl(this.service.getCurrentDate(), Validators.required),
      ToDate: new FormControl(this.service.getCurrentDate(), Validators.required),
      category: new FormControl('Equity', Validators.required),
    });
  }

  get f() {
    return this.dpHoldingGroup.controls;
  }
}
