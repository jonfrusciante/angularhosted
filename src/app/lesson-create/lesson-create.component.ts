import { LessonService } from './../lesson.service';
import { Component, OnInit } from '@angular/core';
import { Lesson } from "../lesson";
@Component({
  selector: 'lesson-create',
  templateUrl: './lesson-create.component.html',
  styleUrls: ['./lesson-create.component.css'],
  providers: [LessonService]
})
export class LessonCreateComponent implements OnInit {
  selectedLesson: Lesson;
  private hidenewLesson: boolean = true;
  lessons: Array<Lesson>;
  constructor(private _lessonService: LessonService) { }

  ngOnInit() {
    this._lessonService.getLessons()
      .subscribe(resLessonData => this.lessons = resLessonData);
  }

  onSelectLesson(lesson: any) {
    this.selectedLesson = lesson;
    console.log(this.selectedLesson);
  }

  newLesson() {
    this.hidenewLesson = false;
  }

  onSubmitAddLesson(lesson: Lesson) {
		console.log(this)
		console.log(lesson)
		console.log(Lesson)
		console.log(this.selectedLesson)
		console.log('working')
    this._lessonService.addLesson(lesson)
      .subscribe(resNewLesson => {
        this.lessons.push(resNewLesson);
        this.hidenewLesson = true;
        this.selectedLesson = resNewLesson;
      });

  }

  onUpdateLessonEvent(lesson: any) {
    this._lessonService.updateLesson(lesson)
      .subscribe(resUpdatedLesson => lesson = resUpdatedLesson);
    this.selectedLesson = null;
  };

  onDeleteLessonEvent(lesson: any) {
    let lessonArray = this.lessons;
    this._lessonService.deleteLesson(lesson)
      .subscribe(resDeletedLesson => {
        for (let i = 0; i < lessonArray.length; i++) {
          if (lessonArray[i]._id === lesson._id) {
            lessonArray.splice(i, 1);
          }
        }
      });
    this.selectedLesson = null;
  };

}
