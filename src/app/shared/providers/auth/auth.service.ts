import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from '@firebase/util';
import * as firebase from 'firebase';
import {AngularFireAuth} from 'angularfire2/auth';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';




@Injectable()
export class AuthService {

    public test$: BehaviorSubject<any> = new BehaviorSubject<any>('');


    private user: Observable<firebase.User>;
    private userDetails: firebase.User = null;
    user$: Subject<firebase.User> = new Subject<firebase.User>();


    constructor(public afAuth: AngularFireAuth) {
      
      console.log('load auth service');
        this.user = afAuth.authState;
        this.user.subscribe(
            (user) => {
                if (user) {
                    this.userDetails = user;
                    this.user$.next(user);
                    console.log('user beállítva')
                }
                else {
                    this.userDetails = null;
                    this.user$.next(null);
                }
            }
        );

    }


    isLoggedIn() {

    }

    logout() {
        this.afAuth.auth.signOut()
            .then((res) => console.log('logged out user'));
    }

    loginWithGoogle() {
        return this.afAuth.auth.signInWithPopup(
            new firebase.auth.GoogleAuthProvider()
        ).then(res => {
            console.log(res);
        })
    }

    setTest(id, value) {
        let t = this.test$.getValue();
        let te = t.filter(obj => obj.b === id);
        te[0]['a'] = value;
        this.test$.next(t);
    }

}
