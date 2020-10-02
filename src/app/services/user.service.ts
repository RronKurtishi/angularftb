import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() { 
    this.users = [
			{
				firstName: 'John',
				lastName: 'Doe',
				email: 'johndoe@mail.com',
				isActive: true,
				registered: new Date('01/02/2000 08:30:00'),
				hide: true
			},
			{
				firstName: 'Kevin',
				lastName: 'Johnson',
				email: 'kevinjohnson@mail.com',
				isActive: false,
				registered: new Date('03/11/2005 19:30:00'),
				hide: true
			},
			{
				firstName: 'Karen',
				lastName: 'Williams',
				email: 'fuckkaren@mail.com',
				isActive: true,
				registered: new Date('11/02/2020 10:30:00'),
				hide: true
			}
    ];
  }
  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);
      setTimeout(() => {
        observer.next(2);
      }, 2000);
      setTimeout(() => {
        observer.next(3);
      }, 3000);
      setTimeout(() => {
        observer.next(4);
      }, 4000);
    });


    return this.data
  }
	getUsers(): User[] {
		return this.users;
  }
  
  addUser(user: User) {
    this.users.unshift(user);
  }
}
