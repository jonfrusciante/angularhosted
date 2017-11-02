import { Cohort } from './cohort';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CohortService {

  private _getUrl = "/api/cohorts";
  private _postUrl = "/api/cohort";
  private _putUrl = "/api/cohort/";
  private _deleteUrl = "/api/cohort/";

  constructor(private _http: Http) { }

  getCohorts() {
    return this._http.get(this._getUrl)
      .map((response: Response) => response.json());
  }

  addCohort(cohort: Cohort) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this._postUrl, JSON.stringify(cohort), options)
      .map((response: Response) => response.json());
  }

  updateCohort(cohort: Cohort) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this._putUrl + cohort._id, JSON.stringify(cohort), options)
      .map((response: Response) => response.json());
  }

  deleteCohort(cohort: Cohort) {
    return this._http.delete(this._deleteUrl + cohort._id)
      .map((response: Response) => response.json());
  }

}
