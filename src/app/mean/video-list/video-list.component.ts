import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';

import * as $ from "jquery";

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  inputs: ['videos'],
  outputs: ['SelectedVideo']
})

export class VideoListComponent implements OnInit {

  constructor() { }

  public activeVideo;
  public SelectedVideo = new EventEmitter<string>()

  onSelect(video) {
  	this.SelectedVideo.emit(video);
    this.activeVideo = video;
  }

  ngOnInit() {
  }

}
