import { Component, OnInit } from '@angular/core';
import { Class } from "../class";
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'student-center',
  templateUrl: './student-center.component.html',
	styleUrls: ['./student-center.component.css'],
	providers: [UserService]
})
export class StudentCenterComponent implements OnInit {

	users: Array<User>;

	selectedUser: User;

  constructor(private _userService: UserService) { }

  ngOnInit() {
		this._userService.getUsers()
			.subscribe(resUserData => this.users = resUserData);
  }

}
