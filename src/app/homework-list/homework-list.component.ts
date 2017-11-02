import { Component, OnInit, EventEmitter } from '@angular/core';
import { Homework } from '../homework';

@Component({
  selector: 'homework-list',
  templateUrl: './homework-list.component.html',
  styleUrls: ['./homework-list.component.css'],
  inputs: ['homeworks'],
  outputs: ['SelectHomework']
})
export class HomeworkListComponent implements OnInit {
  public SelectHomework = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSelect(vid: Homework) {
    this.SelectHomework.emit(vid);
  }

}
