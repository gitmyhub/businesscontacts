import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import {FirebaseService} from './services/firebase.service';


// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyDfDva_hpY4yY4x1mn9M4nN80GchIdvTuU',
  authDomain: 'businesscontacts-a853a.firebaseapp.com',
  databaseURL: 'https://businesscontacts-a853a.firebaseio.com',
  storageBucket: 'businesscontacts-a853a.appspot.com',
  messagingSenderId: '119984483843'
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
