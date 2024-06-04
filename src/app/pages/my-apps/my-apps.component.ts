import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-my-apps',
  templateUrl: './my-apps.component.html',
  styleUrls: ['./my-apps.component.scss']
})
export class MyAppsComponent implements OnInit {
  appData: any = [];
  stroge: any = JSON.parse(localStorage.getItem("isLoggedIn") || '');
  expAppData: any = [];
  constructor(
    public service: ApiServiceService,
    public router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getAppList();
    this.getAppExpList();
  }

  getAppList() {
    let obj = {
      client_code: this.stroge.username,

    }
    this.service.appList(obj).subscribe((res: any) => {
      if (res.status) {
        this.appData = res.app_list;
        console.log("res", res)
      }
    }, (err: any) => {
      console.log("err", err)
    })
  }

  getAppExpList() {
    let obj = {
      client_code: this.stroge.username,
    }
    this.service.expAppList(obj).subscribe((res: any) => {
      if (res.status) {
        this.expAppData = res.app_list;
      }
    }, (err: any) => {
      console.log("err", err)
    })
  }

  deleteApp(item: any) {
    let obj = {
      app_id: item.id,
      client_code: this.stroge.username
    }
    this.service.deleteApp(obj).subscribe((res: any) => {
      if (res.status) {
        this.getAppList();
        this.service.toster("success", res.msg);
      }
    }, (err: any) => {
      this.service.toster("error", 'Oops something went wrong please try again');
    })
  }
}
