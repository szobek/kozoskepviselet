import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HomescreenRoutingModule} from './homescreen-routing.module';
import {HomescreenComponent} from './homescreen.component';


@NgModule({
  imports: [
    CommonModule,
    HomescreenRoutingModule
  ],
  declarations: [
      HomescreenComponent,
  ],
    exports: [
    ]
})
export class HomescreenModule { 
    
    constructor() {
        console.log('run homescreen cons');
    }
}
