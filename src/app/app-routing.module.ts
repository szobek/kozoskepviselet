import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
    {path: 'homescreen', loadChildren: 'app/components/homescreen/homescreen.module#HomescreenModule'},
    {path: 'login', loadChildren: 'app/components/login/login.module#LoginModule'},


];

@NgModule({
    imports: [RouterModule.forRoot(routes), HttpClientModule],
    exports: [RouterModule],
})
export class AppRoutingModule {
    constructor() {
        console.log('appRouting')
    }
}

