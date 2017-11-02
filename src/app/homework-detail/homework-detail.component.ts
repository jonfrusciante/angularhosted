import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'homework-detail',
  templateUrl: './homework-detail.component.html',
  styleUrls: ['./homework-detail.component.css'],
  inputs: ['homework'],
  outputs: ['updateHomeworkEvent', 'deleteHomeworkEvent']
})
export class HomeworkDetailComponent implements OnInit {
  homework: any;

  private editTitle: boolean = false;
  private updateHomeworkEvent = new EventEmitter();
  private deleteHomeworkEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onTitleClick() {
    this.editTitle = true;
  }

  ngOnChanges() {
    this.editTitle = false;
  }

  updateHomework() {
    this.updateHomeworkEvent.emit(this.homework);
  }

  deleteHomework() {
    this.deleteHomeworkEvent.emit(this.homework);
  }

}
