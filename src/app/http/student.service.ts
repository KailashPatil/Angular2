import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import "rxjs/add/operator/toPromise";

@Injectable()
export class StudentService {

  private url: string = "/customServer/appdata.json";

  constructor(protected http: Http){}

  getStudents() {
  	return this.http.get(this.url)
  		.map((response: Response) => response.json());
  }

}