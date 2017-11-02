import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'lesson-detail',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.css'],
  inputs: ['lesson'],
  outputs: ['updateLessonEvent', 'deleteLessonEvent']
})
export class LessonDetailComponent implements OnInit {
  lesson: any;

  private editTitle: boolean = false;
  private updateLessonEvent = new EventEmitter();
  private deleteLessonEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onTitleClick() {
    this.editTitle = true;
  }

  ngOnChanges() {
    this.editTitle = false;
  }

  updateLesson() {
    this.updateLessonEvent.emit(this.lesson);
  }

  deleteLesson() {
    this.deleteLessonEvent.emit(this.lesson);
  }

}
