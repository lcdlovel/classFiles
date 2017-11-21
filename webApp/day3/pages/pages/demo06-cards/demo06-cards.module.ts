import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo06CardsPage } from './demo06-cards';

@NgModule({
  declarations: [
    Demo06CardsPage,
  ],
  imports: [
    IonicPageModule.forChild(Demo06CardsPage),
  ],
  exports: [
    Demo06CardsPage
  ]
})
export class Demo06CardsPageModule {}
