import { Component, OnInit, EventEmitter } from '@angular/core';
import { Homework } from '../homework';

@Component({
  selector: 'homework-list-teacher',
  templateUrl: './homework-list-teacher.component.html',
  styleUrls: ['./homework-list-teacher.component.css'],
  inputs: ['homeworks'],
  outputs: ['SelectHomework']
})
export class HomeworkListTeacherComponent implements OnInit {
  public SelectHomework = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSelect(vid: Homework) {
    this.SelectHomework.emit(vid);
  }

}