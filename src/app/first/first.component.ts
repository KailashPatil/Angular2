import { Component, OnInit } from '@angular/core';
import { UserService } from '../login/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html'
})
export class FirstComponent implements OnInit {

  constructor(
  	private userService: UserService,
  	private router: Router) { }

  logout() {
  	// Below line - It removes the current user login details from localstorage and doesn't allow you to see any other pages, it just redirects to login page. 
  	// Eventhough if you change path in url to access page then it redirects to login page because you logged out it means you cleared the your login seesion
  	localStorage.removeItem('currentVideoUser');
  	this.router.navigate(['login-auth']);
  }

  ngOnInit() {
  }

}
