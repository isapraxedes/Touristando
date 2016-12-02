import { Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { User } from './../../model/user';

import { ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    selector: 'autentic',
    templateUrl: 'autentication.html',
    encapsulation: ViewEncapsulation.None
})
export class AutenticationComponent {
  email: string;
  password: string;
  logins: FirebaseListObservable<User[]>;


  constructor(private af: AngularFire) {
    this.logins = af.database.list('/users');
  }
  login(email, password){
    firebase.auth().signInWithEmailAndPassword(this.email, this.password);
    close();
  }

  closed() {
      this.output = '(closed) ' + this.selected;
  }

  @ViewChild('modal')
      modal: ModalComponent;
      selected: string;
      output: string;
      index: number = 0;
}
