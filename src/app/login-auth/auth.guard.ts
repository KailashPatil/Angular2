import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(
		private router: Router,
		private loginService: LoginService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // Below line and if condition - Accesses currentuser data from localstorage, if it is true then allows you to see other pages otherwise go back to login page
    let user = localStorage.getItem('currentVideoUser');
    if(user){
      return true;
    }else{
      this.router.navigate(['login-auth']);
      return false;
    }
  }
}
