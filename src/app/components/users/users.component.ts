import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from '../../models/User';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: [ './users.component.scss' ]
})
export class UsersComponent implements OnInit {
	user: User = {
		firstName: '',
		lastName: '',
		email: ''
	}
	users: User[];
	loaded: boolean = false;
	enableAdd: boolean = false;
	showUserForm: boolean = false;
	@ViewChild('userForm') form: any;
	data: any;

	constructor(private userService: UserService) {}

	ngOnInit(): void {
		this.userService.getData().subscribe(data => {
			console.log(data);
		});
		this.users = this.userService.getUsers();
		this.loaded = true;
  }

	toggleHide(user){
		user.hide = !user.hide;
	}

	onSubmit({value, valid}: {value: User, valid: boolean}){
		if(!valid){
			console.log("Invalid form")
		} else {
			value.isActive = true;
			value.registered = new Date();
			value.hide = true;

			this.userService.addUser(value);
			this.form.reset();
		}	
	}
}