import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Location } from '@angular/common';
import * as _ from "underscore";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {

  public id: string;
  public email: string;
  public password: string;

  public selectedUser;
  public notification;
  public errMsg;

  public users = [];
  public isResetPwdSuccess;

  constructor(
  	private router: Router,
  	private loginService: LoginService,
    private location: Location) { }

  onSignupSubmit(user) {
  	console.log('coming here to form submission method', user);
    this.loginService.addUser(user)
      .subscribe(resNewUser => {
        this.users.push(user); // pushing new user into a user db
        this.selectedUser = user;
        if(resNewUser.error){   // here checking for any error like duplicate user. Ex: the one new user we are adding, the same user email should not be in existing db
          this.notification = true;
          this.errMsg = resNewUser.error;  // If any same user email exists, then setting error message. We set the error message as "User already exist" in api.js
        }else{
          console.log('am hereeeeeee');
          this.notification = true;
          this.errMsg = "Registration has been successfully done";
          // ** Important ** - Below line of code sends notification message to display in Login page after signup has been successfull 
          // so it creating key name as 'alertNotification' and message as 'Registration successful'
          // To display this in Login page we need to get Item there and display -- see login component
          localStorage.setItem('alertNotification','Registration successful');
          this.router.navigate(['login-auth']); // If doesn't have any error msg then it redirects to login page by creating user login detail in db.
          this.isResetPwdSuccess = true;
          console.log('am hereeeeeee 22');
        }

      }); 
  }

  close() {
    this.notification = false;
  }

  goBack() {
    this.location.back();
  }

  ngOnInit() {
  }

}
