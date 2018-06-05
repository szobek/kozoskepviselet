import {Component} from '@angular/core';
import {AuthService} from '../../shared/providers/auth/auth.service';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase';
import "rxjs/add/observable/interval";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/timeInterval';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    private user: Observable<firebase.User>;
    testSub;
    testStream;

    obs;

    constructor(private authService: AuthService) {
        this.authService.user$.subscribe(
            (user) => {
                console.log('login component user', user);
                this.user = user
            },
            (error) => { console.log('Hiba van', error)}
            );

        this.testSub = this.authService.test$.subscribe((sub) => {
            this.testStream = sub;
            console.log('a sub', sub)
        });

        this.authService.test$.next([{a:5, b:1},{a:6,  b:2}]);


    }

    loginWithGoogle() {
        this.authService.loginWithGoogle();
    }

    logout() {
        this.authService.logout();
    }

    sub() {
        this.authService.setTest(2,2000);
    }




}
