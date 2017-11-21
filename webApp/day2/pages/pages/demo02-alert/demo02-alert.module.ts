import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo02AlertPage } from './demo02-alert';

@NgModule({
  declarations: [
    Demo02AlertPage,
  ],
  imports: [
    IonicPageModule.forChild(Demo02AlertPage),
  ],
  exports: [
    Demo02AlertPage
  ]
})
export class Demo02AlertPageModule {}
