import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from "../user";
@Component({
  selector: 'user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
  providers: [UserService]
})
export class UserCreateComponent implements OnInit {
  selectedUser: User;
  private hidenewUser: boolean = true;
  users: Array<User>;
  constructor(private _userService: UserService) { }

  ngOnInit() {
    this._userService.getUsers()
      .subscribe(resUserData => this.users = resUserData);
  }

  onSelectUser(user: any) {
    this.selectedUser = user;
    console.log(this.selectedUser);
  }

  newUser() {
    this.hidenewUser = false;
  }

  onSubmitAddUser(user: User) {
		console.log(this)
		console.log(user)
		console.log(User)
		console.log(this.selectedUser)
		console.log('working')
    this._userService.addUser(user)
      .subscribe(resNewUser => {
        this.users.push(resNewUser);
        this.hidenewUser = true;
        this.selectedUser = resNewUser;
      });

  }

  onUpdateUserEvent(user: any) {
    this._userService.updateUser(user)
      .subscribe(resUpdatedUser => user = resUpdatedUser);
    this.selectedUser = null;
  };

  onDeleteUserEvent(user: any) {
    let userArray = this.users;
    this._userService.deleteUser(user)
      .subscribe(resDeletedUser => {
        for (let i = 0; i < userArray.length; i++) {
          if (userArray[i]._id === user._id) {
            userArray.splice(i, 1);
          }
        }
      });
    this.selectedUser = null;
  };

}
