import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo03MyalertPage } from './demo03-myalert';

@NgModule({
  declarations: [
    Demo03MyalertPage,
  ],
  imports: [
    IonicPageModule.forChild(Demo03MyalertPage),
  ],
  exports: [
    Demo03MyalertPage
  ]
})
export class Demo03MyalertPageModule {}
