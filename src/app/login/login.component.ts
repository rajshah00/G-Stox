import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiServiceService } from '../services/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('userForm') ngForm: NgForm | any;
  username: any;
  password: any;
  constructor(public service: ApiServiceService, public router: Router) { }

  ngOnInit(): void {

  }

  onSubmit(form: any) {
    console.log(form);
    localStorage.setItem('isLoggedIn', JSON.stringify(form))
    this.router.navigate(['/home'])
    // this.service.isLogin(form).subscribe((res: any) => {
    //   console.log("res", res);
    // }, (err: any) => {
    //   console.log("err", err)
    // })
  }

}
