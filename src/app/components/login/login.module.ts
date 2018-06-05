import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TooltipModule} from 'ngx-bootstrap/tooltip';

import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login.component';
import {AuthService} from '../../shared/providers/auth/auth.service';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        TooltipModule.forRoot(),
    ],
    declarations: [LoginComponent],
    providers: [AuthService]
})


export class LoginModule {
    constructor() {
        console.log('loginModule constructor.. kozoskepviselet/src/app/components/login/login.module.ts:15')
    }
}
