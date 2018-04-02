import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class VideoService {

	private getAllVideosURL = "http://127.0.0.1:3000/api/videos";
	private postURL = "http://127.0.0.1:3000/api/video";
	private putURL = "http://127.0.0.1:3000/api/video";
	private deleteURL = "http://127.0.0.1:3000/api/video";

	constructor(private http: Http) { }

	getVideos() {
		return this.http.get(this.getAllVideosURL)
			.map((response: Response) => response.json());
	}

	addVideo(video) {
		console.log('coming here to addVideo method in service.ts', video);
		let headers = new Headers({'Content-Type': 'application/json'});
		let options = new RequestOptions({headers: headers});
		return this.http.post(this.postURL, video, options)
			.map((response: Response) => response.json());
	}

	updateVideo(video) {
		let headers = new Headers({'Content-Type': 'application/json'});
		let options = new RequestOptions({headers: headers});
		return this.http.put(this.putURL + '/' + video._id, JSON.stringify(video), options)
			.map((response: Response) => response.json());
	}

	deleteVideo(video) {
	 return this.http.delete(this.deleteURL + '/' + video._id)
	   .map((response: Response) => response.json());
	}

		// saveVideo(video){
	// 	console.log("am coming here");
	// 	let body:any = { "parameter1": "value1", "parameter2": "value2" };
	// 	let url = this.postURL;
	// 	let response:any;
	// 	let headers    = new Headers({ 'Content-Type': 'application/json' });
	// 	let options    = new RequestOptions({ headers: headers, body:body,url:url,method:'POST' });
	// 	console.log(url, body, options);
	// 	this.http.post(url, body, options).map((res:Response) => res.json()).subscribe(
	// 		data => { response = data },
	// 		err => console.error(err,"error"),
	// 		() => { console.log(response,"response") });
	// 	}

}
