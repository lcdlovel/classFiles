import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo07ListsPage } from './demo07-lists';

@NgModule({
  declarations: [
    Demo07ListsPage,
  ],
  imports: [
    IonicPageModule.forChild(Demo07ListsPage),
  ],
  exports: [
    Demo07ListsPage
  ]
})
export class Demo07ListsPageModule {}
