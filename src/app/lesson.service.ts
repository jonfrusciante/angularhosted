import { Lesson } from './lesson';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LessonService {

  private _getUrl = "/api/lessons";
  private _postUrl = "/api/lesson";
  private _putUrl = "/api/lesson/";
  private _deleteUrl = "/api/lesson/";

  constructor(private _http: Http) { }

  getLessons() {
    return this._http.get(this._getUrl)
      .map((response: Response) => response.json());
  }

  addLesson(lesson: Lesson) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this._postUrl, JSON.stringify(lesson), options)
      .map((response: Response) => response.json());
  }

  updateLesson(lesson: Lesson) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this._putUrl + lesson._id, JSON.stringify(lesson), options)
      .map((response: Response) => response.json());
  }

  deleteLesson(lesson: Lesson) {
    return this._http.delete(this._deleteUrl + lesson._id)
      .map((response: Response) => response.json());
  }

}
