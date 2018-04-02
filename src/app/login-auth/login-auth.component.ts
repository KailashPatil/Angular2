import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { LoginService } from "./login.service";
import * as _ from "underscore";

@Component({
  selector: "app-login-auth",
  templateUrl: "./login-auth.component.html"
})
export class LoginAuthComponent implements OnInit {
  public users = [];
  public user = [];
  public invalidData;
  public notification;
  public errMsg;
  public isResetPwdSuccess;
  notiMessage: any;
  message: any;

  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit() {
    this.isResetPwdSuccess = true;
    // this.message = true;

    this.loginService
      .getUsers() // It takes all user lists from loginService and used to display in front end, I mean on screen
      .subscribe(resUsersdata => {
        this.users = resUsersdata;
        // After setting notification in Signup page, it gets item here and displays notification message. You can see message in its html
        this.message = localStorage.getItem("alertNotification");
        setTimeout(() => {
          // Instead writing function here like setTimeout(function(){ }) we can alse write setTimeout(()=>{}) in angular
          if (!_.isEmpty(this.message)) {
            // If message is not empty - used underscore.js here
            localStorage.removeItem("alertNotification"); // Removes key value so that after refreshing same page, notification should not display
            this.message = false; // Hiding notication after 6 sec
          }
        }, 6000); // after 6 seconds
      });
  }

  onLoginSubmit(user) {
    let data = {
      // available fields to do login
      email: user.email,
      password: btoa(user.password) // Entered password encrypts and checks for current user in db, if its same then it do login
      // Remember always passwords are stored in db after encrypting. so while signup-ing we encrypted and here also we encrypting to match the password so that it logins
    };
    console.log(data);
    this.loginService
      .doLogin(data) // calls doLogin method from loginService
      .subscribe(resUsersdata => {
        this.user = resUsersdata;
        console.log(this.user, "s,djbfk");
        if (resUsersdata.error) {
          // If any unknown person tries to login without signup then this condition runs and says error as "user doesn't exist". error set in api.js
          console.log("am in jhbh");
          this.notification = true;
          this.errMsg = resUsersdata.error; // displays the error if any unknown person tries to login
        } else {
          console.log("am in here");
          console.log("this.user", this.user, JSON.stringify(this.user));
          localStorage.setItem("currentVideoUser", user); // If any valid user logins then it stores its data in localstorage so that it gives access to view other pages
          this.router.navigate(["/first"]); // After success login it checks routing.ts file to display '/first' path page.
        }
      });

    // for(let i=0; i< userArray.length; i++) {
    //   if((userArray[i].email === user.email) && (userArray[i].password === user.password)) {
    //     console.log('coming here');
    //     this.router.navigate(['first']);
    //   } else {
    //     this.invalidData = true;
    //   }
    // }
  }

  closeNotification() {
    this.message = false;
  }

  forgotPassword() {
    this.router.navigate(["forgot-password"]); // This takes you to 'forgot-password' page
  }

  close() {
    this.notification = false;
  }
}
