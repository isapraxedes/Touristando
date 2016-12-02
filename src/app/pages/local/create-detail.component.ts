import { Component, Input } from '@angular/core';

import { Local } from './../../model/local';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
	selector: 'create-detail',
	templateUrl: './create-detail.html'
})

export class CreateDetailComponent {
	@Input()
	locals: FirebaseListObservable<Local[]>;

	constructor(private af: AngularFire) {
    this.af.auth.login({ email: 'bellypraxedes@gmail.com', password: '130893' });

	  this.locals = af.database.list('/locals', {
    query: {
        orderByChild: 'city',
      }
  });
  }

	delete(key: string) {
		this.locals.remove(key);
	}
}
