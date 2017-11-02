import { Attendance } from './attendance';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AttendanceService {

  private _getUrl = "/api/attendances";
  private _postUrl = "/api/attendance";
  private _putUrl = "/api/attendance/";
  private _deleteUrl = "/api/attendance/";

  constructor(private _http: Http) { }

  getAttendances() {
    return this._http.get(this._getUrl)
      .map((response: Response) => response.json());
  }

  addAttendance(attendance: Attendance) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this._postUrl, JSON.stringify(attendance), options)
      .map((response: Response) => response.json());
  }

  updateAttendance(attendance: Attendance) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this._putUrl + attendance._id, JSON.stringify(attendance), options)
      .map((response: Response) => response.json());
  }

  deleteAttendance(attendance: Attendance) {
    return this._http.delete(this._deleteUrl + attendance._id)
      .map((response: Response) => response.json());
  }

}
