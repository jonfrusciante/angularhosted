import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { Observable } from 'rxjs/Rx';
import { MatSidenavModule, MatButtonModule, MatCheckboxModule, MatProgressBarModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminCenterComponent } from './admin-center/admin-center.component';
import { StudentCenterComponent } from './student-center/student-center.component';
import { CalendarComponent } from './calendar/calendar.component';
import { SidebarNavComponent } from './sidebar-nav/sidebar-nav.component';
import { SidebarNavCollapsedComponent } from './sidebar-nav-collapsed/sidebar-nav-collapsed.component';
import { StudentCreationComponent } from './student-creation/student-creation.component';

import { SidebarModule } from 'ng-sidebar';

import { ClassCreationComponent } from './class-creation/class-creation.component';
import { ClassListComponent } from './class-list/class-list.component';
import { HomeworkListComponent } from './homework-list/homework-list.component';
import { UserRedirectComponent } from './user-redirect/user-redirect.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
		AdminCenterComponent,
		StudentCenterComponent,
		CalendarComponent,
		SidebarNavComponent,
		SidebarNavCollapsedComponent,
		StudentCreationComponent,
		ClassCreationComponent,
		ClassListComponent,
		HomeworkListComponent,
		UserRedirectComponent,
		UserDetailComponent,
		UserListComponent

  ],
  imports: [
		BrowserModule,
		FormsModule,
    HttpModule,
		AppRoutingModule,
		MaterializeModule,
		BrowserAnimationsModule,
		CalendarModule.forRoot(),
		SidebarModule.forRoot(),
		MatButtonModule,
		MatCheckboxModule,
		MatSidenavModule,
		MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
