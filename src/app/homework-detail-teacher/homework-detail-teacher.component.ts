import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'homework-detail-teacher',
  templateUrl: './homework-detail-teacher.component.html',
  styleUrls: ['./homework-detail-teacher.component.css'],
  inputs: ['homework'],
  outputs: ['updateHomeworkEvent', 'deleteHomeworkEvent']
})
export class HomeworkDetailTeacherComponent implements OnInit {
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
