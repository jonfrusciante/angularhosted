import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonDetailTeacherComponent } from './lesson-detail-teacher.component';

describe('LessonDetailTeacherComponent', () => {
  let component: LessonDetailTeacherComponent;
  let fixture: ComponentFixture<LessonDetailTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonDetailTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonDetailTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
