import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "./user.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
  public username;
  public password;
  public invalidData = false;

  userForm: FormGroup;

  constructor(
    private router: Router,
    private userService: UserService,
    private _formBuilder: FormBuilder
  ) {}

  data = <any>{}; // It givers error if you didnt assign 'data' to 'any'. ERROR - Property 'username' does not exist on type '{}' //

  formSubmit(value) {
    // this.reset();
    console.log(value);
    if (this.data.username == "admin" && this.data.password == "admin") {
      console.log("logged In");
      this.userService.setUserLoggedIn();
      this.router.navigate(["first"]);
    } else {
      console.log("who are you !!");
      this.invalidData = true;
      this.router.navigate(["login"]);
    }
  }

  // reset() {
  //  this.username.value = '';
  //  this.password.value = '';
  // }

  ngOnInit() {
    this.userForm = this._formBuilder.group({
      username: ["Kailash", [Validators.required, Validators.minLength(2)]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    });
  }
}
