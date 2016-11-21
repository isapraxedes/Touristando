import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';
import {FileUploadModule, GrowlModule} from 'primeng/primeng';

import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AppComponent } from './app.component';

import { SearchComponent } from './pages/search/search.component';
import { CreateComponent } from './pages/local/create.component';


export const firebaseConfig = {
  apiKey: 'AIzaSyByymDKnaWKUA-ZbgTeXPc_MCCW0UH7DEY',
  authDomain: 'touristando-d5d71.firebaseapp.com',
  databaseURL: 'https://touristando-d5d71.firebaseio.com',
  storageBucket: 'touristando-d5d71.appspot.com'
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

@NgModule({
  declarations: [
    AppComponent, SearchComponent, CreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FileUploadModule, GrowlModule,
    AngularFireModule.initializeApp(firebaseConfig , myFirebaseAuthConfig),
    RouterModule.forRoot([
      {
        path: 'search',
        component: SearchComponent
      },
      {
        path: 'create',
        component: CreateComponent
      },
      {
        path: '',
        redirectTo: '/search',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
