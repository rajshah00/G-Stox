import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  stroge: any = JSON.parse(localStorage.getItem("isLoggedIn") || '')
  constructor(public service: ApiServiceService) {

  }

  ngOnInit() {
    this.service.getClintDas(this.stroge.username).subscribe((res: any) => {
      console.log("res", res)
    }, (err: any) => {
      console.log("err", err)
    })
  }
}
