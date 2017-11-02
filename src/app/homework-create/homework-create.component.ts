import { HomeworkService } from './../homework.service';
import { Component, OnInit } from '@angular/core';
import { Homework } from "../homework";
@Component({
  selector: 'homework-create',
  templateUrl: './homework-create.component.html',
  styleUrls: ['./homework-create.component.css'],
  providers: [HomeworkService]
})
export class HomeworkCreateComponent implements OnInit {
  selectedHomework: Homework;
  private hidenewHomework: boolean = true;
  homeworks: Array<Homework>;
  constructor(private _homeworkService: HomeworkService) { }

  ngOnInit() {
    this._homeworkService.getHomeworks()
      .subscribe(resHomeworkData => this.homeworks = resHomeworkData);
  }

  onSelectHomework(homework: any) {
    this.selectedHomework = homework;
    console.log(this.selectedHomework);
  }

  newHomework() {
    this.hidenewHomework = false;
  }

  onSubmitAddHomework(homework: Homework) {
		console.log(this)
		console.log(homework)
		console.log(Homework)
		console.log(this.selectedHomework)
		console.log('working')
    this._homeworkService.addHomework(homework)
      .subscribe(resNewHomework => {
        this.homeworks.push(resNewHomework);
        this.hidenewHomework = true;
        this.selectedHomework = resNewHomework;
      });

  }

  onUpdateHomeworkEvent(homework: any) {
    this._homeworkService.updateHomework(homework)
      .subscribe(resUpdatedHomework => homework = resUpdatedHomework);
    this.selectedHomework = null;
  };

  onDeleteHomeworkEvent(homework: any) {
    let homeworkArray = this.homeworks;
    this._homeworkService.deleteHomework(homework)
      .subscribe(resDeletedHomework => {
        for (let i = 0; i < homeworkArray.length; i++) {
          if (homeworkArray[i]._id === homework._id) {
            homeworkArray.splice(i, 1);
          }
        }
      });
    this.selectedHomework = null;
  };

}
