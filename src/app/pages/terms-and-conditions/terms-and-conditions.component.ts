import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';
declare var $: any;

@Component({
  selector: 'app-terms-and-conditions',
  templateUrl: './terms-and-conditions.component.html',
  styleUrls: ['./terms-and-conditions.component.scss']
})
export class TermsAndConditionsComponent implements OnInit {
  stroge: any = JSON.parse(localStorage.getItem("isLoggedIn") || '')
  profileData: any;
  otp_input: any;
  otpReceived: any;
  isSendOtp: boolean = false;
  itemId: any;
  constructor(
    public service: ApiServiceService,
    public router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.params.subscribe((params:any) => {
      this.itemId = params['id'];
    });

    this.service.getProfile(this.stroge.username).subscribe((res: any) => {
      console.log("res", res)
      this.profileData = res.NomineeDetail;
    }, (err: any) => {
      console.log("err", err)
    })

    $('#opt_block').hide();
    $('#send_opt_btn_block').hide();
    $('#enter_opt_txt_block').hide();
    $('#submit_opt_btn_block').hide();
    $('#i_agree').change(function () {
      var boxes = $('#i_agree:checked').val();
      if (boxes == 1) {
        $('#opt_block').show();
        $('#send_opt_btn_block').show();
      } else {
        $('#opt_block').hide();
        $('#send_opt_btn_block').hide();
      }
    });
    // $('#send_opt_btn_block').click(function () {
    //   $('#opt_block').show();
    //   $('#enter_opt_txt_block').show();
    //   $('#send_opt_btn_block').hide();
    // });
    $('#enter_opt_txt_block').keyup(function () {
      var boxes_txt = $('#enter_opt_txt_block').val();
      if (boxes_txt != '') {
        $('#opt_block').show();
        $('#submit_opt_btn_block').show();
      } else {
        $('#submit_opt_btn_block').hide();
      }
    });
    // $('#submit_opt_btn_block').click(function () {
    //   var boxes_opt = $('#enter_opt_txt_block').val();
    //   alert(boxes_opt);
    // });
  }

  public sendOtp() {
    let obj = {
      client_code: this.stroge.username,
      mobile_number: this.profileData[0].Mobile,
      app_id:this.itemId
    }
    this.service.sendOTP(obj).subscribe((res: any) => {
      if (res.status) {
        this.otpReceived = res.opt;
        this.isSendOtp = true;
        this.service.toster("success", res.msg);
        $('#opt_block').show();
        $('#enter_opt_txt_block').show();
        $('#send_opt_btn_block').hide();
        // console.log("res", res)
      }
    }, (err: any) => {
      console.log("err", err)
    })
  }

  public submitOTP() {
    if (this.otpReceived == this.otp_input) {
      let obj = {
        client_code: this.stroge.username,
        otp_code: this.otp_input,
        app_id:this.itemId
      }
      this.service.verifyOTP(obj).subscribe((res: any) => {
        if (res.status) {
          this.otpReceived = res.opt;
          this.service.toster("success", res.msg);
          this.router.navigate(['/home/my-apps'])
          console.log("res", res)
        }
      }, (err: any) => {
        console.log("err", err)
      })
    } else {
      this.service.toster("error", "This OTP is not match please enter valid OTP");
    }
  }

}
