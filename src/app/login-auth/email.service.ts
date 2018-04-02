import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EmailService {

  constructor(private http: Http) { }

//   sendEmail(data) {
//     return this.http.post('http://localhost:1337/email/', data)
//     .map(res => res.json())
//     .catch(this._errorHandler);
//   }

//   private _errorHandler(error: Response) {
//     console.error(error);
//     return Observable.throw(error || 'Server Error')
// }

}
