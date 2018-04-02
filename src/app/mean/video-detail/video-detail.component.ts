import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  inputs: ['video'],
  outputs: ['updateVideoEvent', 'deleteVideoEvent']
})

export class VideoDetailComponent implements OnInit {

	public canBeEditable: boolean = true;
	public editableTitle: boolean = false;

	public video:any;

  constructor() { }

  public updateVideoEvent = new EventEmitter();
  public deleteVideoEvent = new EventEmitter();

  clickToEdit() {
  	this.canBeEditable = false;
  	this.editableTitle = true;
  }

  updateVideo() {
  	this.updateVideoEvent.emit(this.video);
  }

  deleteVideo() {
  	this.deleteVideoEvent.emit(this.video);
  }

  ngOnInit() {}

}
