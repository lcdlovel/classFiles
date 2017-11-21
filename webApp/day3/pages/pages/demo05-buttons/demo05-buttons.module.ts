import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo05ButtonsPage } from './demo05-buttons';

@NgModule({
  declarations: [
    Demo05ButtonsPage,
  ],
  imports: [
    IonicPageModule.forChild(Demo05ButtonsPage),
  ],
  exports: [
    Demo05ButtonsPage
  ]
})
export class Demo05ButtonsPageModule {}
