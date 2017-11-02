import { Component, OnInit, EventEmitter } from '@angular/core';
import { Lesson } from '../lesson';

@Component({
  selector: 'lesson-list',
  templateUrl: './lesson-list.component.html',
  styleUrls: ['./lesson-list.component.css'],
  inputs: ['lessons'],
  outputs: ['SelectLesson']
})
export class LessonListComponent implements OnInit {
  public SelectLesson = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSelect(vid: Lesson) {
    this.SelectLesson.emit(vid);
  }

}
