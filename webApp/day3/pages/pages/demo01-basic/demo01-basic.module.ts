import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo01BasicPage } from './demo01-basic';

@NgModule({
  declarations: [
    Demo01BasicPage,
  ],
  imports: [
    IonicPageModule.forChild(Demo01BasicPage),
  ],
  exports: [
    Demo01BasicPage
  ]
})
export class Demo01BasicPageModule {}
