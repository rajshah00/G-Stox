import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-add-new-app',
  templateUrl: './add-new-app.component.html',
  styleUrls: ['./add-new-app.component.scss']
})
export class AddNewAppComponent implements OnInit {
  formData: any = {}
  stroge: any = JSON.parse(localStorage.getItem("isLoggedIn") || '');

  constructor(public service: ApiServiceService,public router: Router) {

  }

  ngOnInit() {

  }

  saveApp(form: any) {
    if (form.valid) {
      let obj = {
        client_code: this.stroge.username,
        app_name:this.formData.app_name,
        redirect_url:this.formData.redirect_url,
        post_back_url:this.formData.post_back_url,
        description:this.formData.description
      }
      this.service.submitApp(obj).subscribe((res: any) => {
        if (res.status) {
          this.service.toster("success", res.msg);
          this.router.navigate(['/home/terms-and-conditions',res.app_id])
          // console.log("res", res)
        }
      }, (err: any) => {
        this.service.toster("error", 'Oops something went wrong please try again');
        console.log("err", err)
      })
    } else {
      this.service.toster("error", 'Please enter a value to move next step');
    }
  }
}
