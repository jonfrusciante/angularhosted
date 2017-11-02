import { CohortService } from './../cohort.service';
import { Component, OnInit } from '@angular/core';
import { Cohort } from "../cohort";
@Component({
  selector: 'cohort-create',
  templateUrl: './cohort-create.component.html',
  styleUrls: ['./cohort-create.component.css'],
  providers: [CohortService]
})
export class CohortCreateComponent implements OnInit {
  selectedCohort: Cohort;
  private hidenewCohort: boolean = true;
  cohorts: Array<Cohort>;
  constructor(private _cohortService: CohortService) { }

  ngOnInit() {
    this._cohortService.getCohorts()
      .subscribe(resCohortData => this.cohorts = resCohortData);
  }

  onSelectCohort(cohort: any) {
    this.selectedCohort = cohort;
    console.log(this.selectedCohort);
  }

  newCohort() {
    this.hidenewCohort = false;
  }

  onSubmitAddCohort(cohort: Cohort) {
		console.log(this)
		console.log(cohort)
		console.log(Cohort)
		console.log(this.selectedCohort)
		console.log('working')
    this._cohortService.addCohort(cohort)
      .subscribe(resNewCohort => {
        this.cohorts.push(resNewCohort);
        this.hidenewCohort = true;
        this.selectedCohort = resNewCohort;
      });

  }

  onUpdateCohortEvent(cohort: any) {
    this._cohortService.updateCohort(cohort)
      .subscribe(resUpdatedCohort => cohort = resUpdatedCohort);
    this.selectedCohort = null;
  };

  onDeleteCohortEvent(cohort: any) {
    let cohortArray = this.cohorts;
    this._cohortService.deleteCohort(cohort)
      .subscribe(resDeletedCohort => {
        for (let i = 0; i < cohortArray.length; i++) {
          if (cohortArray[i]._id === cohort._id) {
            cohortArray.splice(i, 1);
          }
        }
      });
    this.selectedCohort = null;
  };

}
