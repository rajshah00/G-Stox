import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiServiceService } from '../services/api-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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
    this.service.isLogin(form).subscribe((res: any) => {
      if (res && res.access_token) {
        localStorage.setItem('isLoggedIn', JSON.stringify(form))
        localStorage.setItem('token', res.access_token);
        localStorage.setItem('expires_in', res.expires_in);
        this.service.toster("success","Log in successfully");
        this.router.navigate(['/home'])
      } 
      console.log("res", res);
    }, (err: any) => {
      console.log("err", err);
      this.service.toster("error","Failed to log in")
    })
  }

}
