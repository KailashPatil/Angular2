import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { VideoService } from '../video.service';

import * as $ from 'jquery';

// declare var $:any;

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html'
})

export class VideoComponent implements OnInit {

  public id: string;
  public title: string;
  public url: string;
  public description: string;


  public selectedVideo;
  public videoTabContent = true;
  public newVideoForm = false;

  public videoName;

	public allvideos = [];
			// {"id": "1", "title": "Angular 2", "url": "angular-url", "description": "Hey Angular2"},
			// {"id": "2", "title": "MongoDB", "url": "mongodb-url", "description": "Hey MongoDB"},
			// {"id": "3", "title": "Express JS", "url": "express-url", "description": "Hey ExpressJS"},
			// {"id": "4", "title": "Node JS", "url": "node-url", "description": "Hey Node"},
			// {"id": "5", "title": "Javascript", "url": "javascript-url", "description": "Hey Javascript"}

  // @ViewChild('.video-lists li') el:ElementRef;


  constructor(
    private videoService: VideoService,
    private route: Router) { }


  onSelectVideo(video) {
    this.selectedVideo = video;
    this.newVideoForm = false;
    this.videoTabContent = false;
    $('.video-lists li.active').removeClass('active');
    $(this).addClass('active');
    console.log(this.selectedVideo.title);
    this.route.navigate(['/mean/video', this.selectedVideo.title])
  }

  onSubmittingNewVideo(video) {
    console.log('coming here to form submission method', video);
    this.videoService.addVideo(video)
      .subscribe(resNewVideo => {
        this.allvideos.push(video);
        this.selectedVideo = video;
      });
      this.newVideoForm = false;
      setTimeout(function() {
        $('.video-lists li:last-child').delay(1000).addClass('active');
      }, 1000);
      this.route.navigate(['/mean/video', this.selectedVideo.title]);
  }

  addNewVideoButton() {
    this.newVideoForm = true;
    this.selectedVideo = false;
    $('.video-lists li.active').removeClass('active');
    this.videoTabContent = false;
    this.route.navigate(['/mean/video/add-video-list']);
  }


  onUpdatedVideoEvent(video) {
    console.log('onUpdate', video)
    this.videoService.updateVideo(video)
      .subscribe((resUpdatedVideo) => video = resUpdatedVideo);
      this.selectedVideo = null;
  }

  onDeletingVideoEvent(video) {
    let videoArray = this.allvideos;
    console.log(video, this.allvideos, 'deleting video');
    this.videoService.deleteVideo(video)
      .subscribe(resDeleteVideo => {
        for(let i=0; i< videoArray.length; i++) {
          if(videoArray[i].id === video._id) {
            console.log(video._id, videoArray[i].id, 'deleting i1' );
            videoArray.splice(i,1);
            console.log(video._id, videoArray[i].id, 'deleting i2' );
          }
        }
      });
      this.selectedVideo = null;
      window.location.reload();
      this.route.navigate(['/mean/video']);
  }

  cancel() {
    this.videoTabContent = true;
    this.newVideoForm = false
  }

  ngAfterViewChecked() {
    console.log('jQuery works after loading component completely');
  }

  ngOnInit() {
  	this.videoService.getVideos()
  	  .subscribe((resGetAllVideos) => this.allvideos = resGetAllVideos);
  }

}
