import { Component } from '@angular/core';

import { User } from './../../model/user';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    selector: 'create-user',
    templateUrl: 'create-user.html'
})
export class CreateUserComponent {
  users: FirebaseListObservable<User[]>;
    newUser: User;

  constructor(private af: AngularFire) {
    this.initUser();
    this.users = af.database.list('/users');
  }

  initUser() {
  	this.newUser = new User();
  }

  create() {
    firebase.auth().createUserWithEmailAndPassword(this.newUser.email, this.newUser.password);
  	this.users.push(this.newUser);

    let list: User[] = [];
  	this.initUser();
  }
}
