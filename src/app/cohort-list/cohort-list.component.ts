import { Component, OnInit, EventEmitter } from '@angular/core';
import { Cohort } from '../cohort';

@Component({
  selector: 'cohort-list',
  templateUrl: './cohort-list.component.html',
  styleUrls: ['./cohort-list.component.css'],
  inputs: ['cohorts'],
  outputs: ['SelectCohort']
})
export class CohortListComponent implements OnInit {
  public SelectCohort = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSelect(vid: Cohort) {
    this.SelectCohort.emit(vid);
  }

}
