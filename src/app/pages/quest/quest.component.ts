import { Component, Input } from '@angular/core';

import { Local } from './../../model/local';
import { CreateComponent } from './../../pages/local/create.component';
import { SearchComponent } from './../../pages/search/search.component';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'quest-list',
  templateUrl: './quest.html'
})

export class QuestComponent{
  @Input() item: FirebaseListObservable<Local[]>;
  /*localIndex: SearchComponent = {getLocals(id);}

  constructor(private af: AngularFire) {

  this.af.auth.login({ email: 'bellypraxedes@gmail.com', password: '130893' });

  this.locals = af.database.list('locals/').equalsTo(localIndex);
  }*/
}
