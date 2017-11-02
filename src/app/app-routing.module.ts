import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { VideoCenterComponent } from "./video-center/video-center.component";
import { LoginComponent } from "./login/login.component";
import { AdminCenterComponent } from "./admin-center/admin-center.component";
import { StudentCenterComponent } from "./student-center/student-center.component";
import { TeacherCenterComponent } from "./teacher-center/teacher-center.component";
import { UserRedirectComponent } from "./user-redirect/user-redirect.component";
import { CohortCreateComponent } from './cohort-create/cohort-create.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { LessonCreateComponent } from './lesson-create/lesson-create.component';
import { HomeworkCreateComponent } from './homework-create/homework-create.component';


const routes: Routes = [
	{path: '', redirectTo:'/login', pathMatch:'full'},
	{path: 'login', component: LoginComponent},
	{path: 'admin', component: AdminCenterComponent},
	{path: 'classcenter', component: StudentCenterComponent},
	{path: 'teachercenter', component: TeacherCenterComponent},
	{path: 'redirect', component: UserRedirectComponent},
  {path: 'home', component: HomeComponent},
	{path: 'videos', component: VideoCenterComponent},
	{path: 'cohortcreate', component: CohortCreateComponent},
	{path: 'usercreate', component: UserCreateComponent},
	{path: 'lessoncreate', component: LessonCreateComponent},
	{path: 'homeworkcreate', component: HomeworkCreateComponent},
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
