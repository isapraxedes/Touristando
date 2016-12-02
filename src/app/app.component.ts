import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { Local } from './model/local';
import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { CdAutocompleteData, CdAutocomplete, CdAutocompleteResponse} from "./directives/cd-autocomplete/index";

import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent {
  ref: string[] = [
    "Australia",
    "Canada",
    "China",
    "France",
    "Germany",
    "India",
    "Japan",
    "Poland",
    "Russia",
    "Switzerland",
    "United Kingdom",
    "United States"
  ];
    public filterQuery = "";
    inputValue: string = "";
    inputAutocomplete: CdAutocomplete = {
     changeTrigger: false,
     list: []
   };

 filterList(q: string, list: string[]) {
   return list.filter(function(item) {
     return item.toLowerCase().startsWith(q.toLowerCase());
   });
 }

 getRef(q: string) {
    this.updateInputAutocompleteData(this.filterList(q, this.ref));
  }

  updateInputAutocomplete(response: CdAutocompleteResponse): void {
    this.getRef(response.q);
  }

  updateInputAutocompleteData(list: string[]): void {
    this.inputAutocomplete.list = list;
    this.inputAutocomplete.changeTrigger = !this.inputAutocomplete.changeTrigger;
  }

  @ViewChild('modal')
      modal: ModalComponent;
      selected: string;
      output: string;

      closed() {
          this.output = '(closed) ' + this.selected;
      }

      open() {
          this.modal.open();
      }

}
