import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { LoginService } from '../login.service';
import * as _ from "underscore";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html'
})
export class ResetPasswordComponent implements OnInit {

	public user = [];
	public hash = "";
	private accesstoken;
	public notification;
  public errMsg;
  public hashExpiration;
  public resetPasswordForm;
  public pwdConfirmation;
  public message;

  constructor(
  	private loginService: LoginService,
  	private router: ActivatedRoute,
  	private routing: Router) { }

  onResetPwdSubmit(value) {

  	if(value.password == value.confPassword) {   // checks both (password and confirm password) are same
	  	console.log('values',value);
	  	console.log(btoa(value.password), btoa('indian'), value.password)
	  	// If Yes, send hash and password to api call to replace old password with resetted password in user db. 
	  	// Sending hash because this hash matches with stored hash(while doing forgot-password we saved hash in db for that user) in db 
	  	// then resetted password will replace with that user password
	  	this.loginService.resetPassword(btoa(value.password), this.hash)
	      .subscribe(resResetPassword => {
	      	value.password = resResetPassword
	      	if(resResetPassword.error) {
	  				// this.notification = true;
	  				this.errMsg = resResetPassword.error;  // If any error with resetting password
	  				// this.hashExpiration = true;
	          // this.resetPasswordForm = false;
	  			} else {
            localStorage.setItem('alertNotification', 'Reset Password has been successfull')
	          this.routing.navigate(['/login-auth']);  // If no error then it takes you to login page to login with latest credentials
	  			}
	      }); 
  	} else {
  		this.pwdConfirmation = true;  // If both(password and confirm password) are not same then it gives error( which we defined in html)
  	}
  }

  closeNotification() {
    this.message = false;
  }

  goToLogin() {
    this.routing.navigate(['login-auth']);
  }

  ngOnInit() {
  	this.resetPasswordForm = true;

  	// Below code gives hash value from URL *****
  	let queryValues = this.router.queryParams['_value']
    this.hash = queryValues['hash']
 		let hashParams = {
 			hash:this.hash
 		}

 		// from that hash we are validating with user to reset-password again 
 		// ==============
 				//  validateHash - If any user reset the password after getting mail, then if he goes to same mail and try to reset password again, below code helps
 				//  We should not allow user to reset password again, it should give error like "Hash expired or doesn't exist" because we clearing hash 
 				//  while upating new password - check api/reset-password
 		// ==============
    this.loginService.validateHash(hashParams)
    	.subscribe(responseData => {
    		if(responseData.error) {
  				this.errMsg = responseData.error;  // shows error msg which is written in its api call api/validate-hash - "Hash is expired or does not exist"
  				this.hashExpiration = true;   // shows error msg which is written in its html - "Hash has been expired or doesn't exist"
          this.resetPasswordForm = false;  // Hides reset-password form 
  			} else {
          this.hashExpiration = false;    
          this.resetPasswordForm = true;  // It shows resetPasswordForm to reset-password
          setTimeout(()=>{
          if(!(_.isEmpty(this.message))){
            this.resetPasswordForm = false;
            }
          },6000)
  			}
  			
  		})

	}
}
