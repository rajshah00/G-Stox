import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public LoginUsername = 'test';
  profileData: any;
  isVerified: boolean = false;
  stroge: any = JSON.parse(localStorage.getItem("isLoggedIn") || '')
  constructor(public router: Router, public service: ApiServiceService) {

  }

  ngOnInit(): void {
    this.service.getProfile(this.stroge.username).subscribe((res: any) => {
      console.log("res", res)
      this.profileData = res.NomineeDetail;
      this.verifyedUser()
    }, (err: any) => {
      console.log("err", err)
    })
  }

  logOut() {
    localStorage.clear();
    this.router.navigate(['/login'])
  }


  public verifyedUser() {
    let obj = {
      client_code: this.stroge.username,
      mobile_number: this.profileData[0].Mobile
    }
    this.service.verifyedOTP(obj).subscribe((res: any) => {
      if (res.status && res.status == 'Success') {
        this.isVerified = true;
      }
    }, (err: any) => {
      console.log("err", err)
    })
  }

}
