import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'cohort-detail',
  templateUrl: './cohort-detail.component.html',
  styleUrls: ['./cohort-detail.component.css'],
  inputs: ['cohort'],
  outputs: ['updateCohortEvent', 'deleteCohortEvent']
})
export class CohortDetailComponent implements OnInit {
  cohort: any;

  private editTitle: boolean = false;
  private updateCohortEvent = new EventEmitter();
  private deleteCohortEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onTitleClick() {
    this.editTitle = true;
  }

  ngOnChanges() {
    this.editTitle = false;
  }

  updateCohort() {
    this.updateCohortEvent.emit(this.cohort);
  }

  deleteCohort() {
    this.deleteCohortEvent.emit(this.cohort);
  }

}
