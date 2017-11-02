import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonListTeacherComponent } from './lesson-list-teacher.component';

describe('LessonListTeacherComponent', () => {
  let component: LessonListTeacherComponent;
  let fixture: ComponentFixture<LessonListTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonListTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonListTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
