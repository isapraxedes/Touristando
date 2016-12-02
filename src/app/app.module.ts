import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import {Ng2Bs3ModalModule} from 'NG2-BS3-modal/NG2-BS3-modal';
import { HttpModule } from '@angular/http';
import { CdAutocompleteComponent, CdAutocompleteDirective } from "./directives/index";

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AppComponent } from './app.component';

import { SearchComponent } from './pages/search/search.component';
import { AutenticationComponent } from './pages/modal/autentication.component';
import { CreateComponent } from './pages/local/create.component';
import { CreateDetailComponent } from './pages/local/create-detail.component';
import { CreateUserComponent } from './pages/modal/create-user.component';
import { QuestComponent } from './pages/quest/quest.component';


export const firebaseConfig = {
  apiKey: 'AIzaSyByymDKnaWKUA-ZbgTeXPc_MCCW0UH7DEY',
  authDomain: 'touristando-d5d71.firebaseapp.com',
  databaseURL: 'https://touristando-d5d71.firebaseio.com',
  storageBucket: 'touristando-d5d71.appspot.com'
};
firebase.initializeApp(firebaseConfig);

var rootRef = firebase.database().ref();

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

@NgModule({
  declarations: [
    AppComponent, SearchComponent, CreateUserComponent, AutenticationComponent, CreateComponent, CreateDetailComponent, QuestComponent, CdAutocompleteComponent,
    CdAutocompleteDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2Bs3ModalModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig , myFirebaseAuthConfig),
    RouterModule.forRoot([
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: 'autentic',
        component: AutenticationComponent
      },
      {
        path: 'create-user',
        component: CreateUserComponent
      },
      {
        path: 'create',
        component: CreateComponent
      },
      {
        path: 'quest',
        component: QuestComponent
      },
      {
        path: 'detail',
        component: CreateDetailComponent
      },
      {
        path: '',
        redirectTo: '/search',
        pathMatch: 'full'
      }
    ])
  ],
  entryComponents: [CdAutocompleteComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
