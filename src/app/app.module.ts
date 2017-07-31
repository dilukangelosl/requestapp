import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { FormsModule } from '@angular/forms';
// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';

export const firebaseConfig = {
 apiKey: "AIzaSyC0jUOYHFXi9UCufS2jZBDkMG4tWLT6iP4",
    authDomain: "shaheed-ab25a.firebaseapp.com",
    databaseURL: "https://shaheed-ab25a.firebaseio.com",
    projectId: "shaheed-ab25a",
    storageBucket: "",
    messagingSenderId: "459382011520"
};



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
     AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
