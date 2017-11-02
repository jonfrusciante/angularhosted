import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeworkDetailTeacherComponent } from './homework-detail-teacher.component';

describe('HomeworkDetailTeacherComponent', () => {
  let component: HomeworkDetailTeacherComponent;
  let fixture: ComponentFixture<HomeworkDetailTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeworkDetailTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworkDetailTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
