import { Component } from '@angular/core';

import { Local } from './../../model/local';
import { CreateComponent } from './../../pages/local/create.component';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'quest',
  templateUrl: './quest.html'
})

export class QuestComponent {
/*  locals: FirebaseListObservable<Local[]>;

  constructor(private af: AngularFire) {

  this.af.auth.login({ email: 'vl@cin.ufpe.br', password: '123456' });

  this.locals = af.database.list('/locals/local/name').equalsTo();
  }*/
}
