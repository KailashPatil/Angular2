import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { EmailService } from '../email.service';
import { Location } from '@angular/common';
import * as _ from "underscore";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent implements OnInit {

	public invalidData;
  public notification;
  public errMsg;
  public resetPasswordEmail;
  public message;

  constructor(
  	private router: Router,
  	private loginService: LoginService,
    private location: Location) { }

  onForgotPasswordSubmit(user) {
  	console.log(user, 'forgot password');
  	let data = {
  		email : user.email
  	}
    console.log('entered email', user, user.email, data, 'dataaaaaa');
  	this.loginService.forgotPassword(data)
  		.subscribe(resSetPassword => {
  			if(resSetPassword.error) {
  				this.notification = true;
  				this.errMsg = resSetPassword.error;  // this line takes error msg from api/forgot-password - res.json({error:"Entered user email doesn't exist "});
  				console.log('error in fp');
          setTimeout(()=>{
            if(!(_.isEmpty(this.errMsg))) {
              this.notification = false;
            }
          }, 3000)
  			} else {
  				console.log('no error in fp');

          this.resetPasswordEmail = true;
          // Send Reset Password email here //
          console.log(resSetPassword, user, "abcd");


  			}
  		})
  }

  close() {
    this.notification = false;
  }

  closeNotification() {
    this.resetPasswordEmail = false;
  }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
  }

}
