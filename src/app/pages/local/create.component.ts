import { Component } from '@angular/core';

import { Local } from './../../model/local';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
	selector: 'create',
	templateUrl: './create.html'
})

export class CreateComponent{
	locals: FirebaseListObservable<Local[]>;
  	newLocal: Local;

  constructor(private af: AngularFire) {
  	this.initLocal();

    this.af.auth.login({ email: 'vl@cin.ufpe.br', password: '123456' });

	  this.locals = af.database.list('/locals', {
    query: {
        orderByChild: 'city',
      }
  });
  }

  initLocal() {
  	this.newLocal = new Local();
  }

  create() {
  	this.locals.push(this.newLocal);

    let list: Local[] = [];
  	this.initLocal();
  }

  delete(key: string) {
  	this.locals.remove(key);
  }
}
