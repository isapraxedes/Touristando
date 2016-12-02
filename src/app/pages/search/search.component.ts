import { Component, OnInit } from '@angular/core';

import { Local } from './../../model/local';
import { CreateComponent } from './../../pages/local/create.component';
import { QuestComponent } from './../../pages/quest/quest.component';

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'search',
  templateUrl: './search.html'
})

export class SearchComponent {
  locals: FirebaseListObservable<Local[]>;

  constructor(private af: AngularFire) {

    this.locals = af.database.list('/locals', {
    query: {
        orderByChild: 'city',
        }
      });
    }

    selectedItem: Local = null;

    /*constructor(private sls: ShoppingListService) {}

    ngOnInit() {
      this.items = this.sls.getItems();
    }*/

    getLocals(id: string) {
      return this.locals[id];
    }

    onSelectItem(item: Local) {
      this.selectedItem = item;
    }
   }
