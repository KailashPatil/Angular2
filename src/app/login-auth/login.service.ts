import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  public getUsersUrl = "http://127.0.0.1:3000/api/users";
  public postUsersUrl = "http://127.0.0.1:3000/api/user";
  public authoriseUrl = "http://127.0.0.1:3000/api/authorise";
  public forgotPasswordUrl = "http://127.0.0.1:3000/api/forgot-password";
  public validateHashUrl = "http://127.0.0.1:3000/api/validate-hash";
  public resetPasswordUrl = "http://127.0.0.1:3000/api/reset-password";

  getUsers() {
  	return this.http.get(this.getUsersUrl)
  		.map((response: Response) => response.json());
  }

  addUser(user) {     // Below code registers new user by calling api
		let headers = new Headers({'Content-Type': 'application/json'});
		let options = new RequestOptions({headers: headers});
    console.log('coming here', user);
		return this.http.post(this.postUsersUrl, user, options)
			.map((response: Response) => response.json());
	}

  doLogin(user) {    // Below code logins with valid credentials, which we got from api/authorize
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.authoriseUrl, user, options)
    .map((response: Response) => response.json());
  }

  forgotPassword(user) {  // passing user email here 
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.forgotPasswordUrl, user, options)
    .map((response: Response) => response.json());
  }

  validateHash(hash) {    // passing hash parameter here 
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.validateHashUrl, hash, options)
    .map((response: Response) => response.json());
  }

  resetPassword(password, hash) {  // Sending changed password and hash to db to update 
    let params = {  // there are two params so we are defining in one object and passing here
      password : password,
      hash : hash
    }
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(this.resetPasswordUrl, params, options)  // passing here - params
    .map((response: Response) => response.json());
  }

}
