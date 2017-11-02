import { Homework } from './homework';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HomeworkService {

  private _getUrl = "/api/homeworks";
  private _postUrl = "/api/homework";
  private _putUrl = "/api/homework/";
  private _deleteUrl = "/api/homework/";

  constructor(private _http: Http) { }

  getHomeworks() {
    return this._http.get(this._getUrl)
      .map((response: Response) => response.json());
  }

  addHomework(homework: Homework) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this._postUrl, JSON.stringify(homework), options)
      .map((response: Response) => response.json());
  }

  updateHomework(homework: Homework) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this._putUrl + homework._id, JSON.stringify(homework), options)
      .map((response: Response) => response.json());
  }

  deleteHomework(homework: Homework) {
    return this._http.delete(this._deleteUrl + homework._id)
      .map((response: Response) => response.json());
  }

}
