import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  msgVal: string = '';
userid :any;
message:any;

constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.items = af.list('/requests', {
      query: {
        limitToLast: 50
      }
    });

    this.user = this.afAuth.authState;

    this.user.subscribe(res => {
     if(res){
       this.userid = res.uid;
     }
        })




}



login() {
    this.afAuth.auth.signInAnonymously();
  
}

logout() {
    
    this.afAuth.auth.signOut();
}

Send(desc: string) {

  var d = new Date().toISOString();
  if(this.userid){
  this.items.push({ request: desc, userid:this.userid, resdate:d}).then((res) => {
    console.log(res);
  })
    this.msgVal = '';
  }else{
    alert("Please login");
  }
    
}

}
