import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCenterComponent } from './teacher-center.component';

describe('TeacherCenterComponent', () => {
  let component: TeacherCenterComponent;
  let fixture: ComponentFixture<TeacherCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
