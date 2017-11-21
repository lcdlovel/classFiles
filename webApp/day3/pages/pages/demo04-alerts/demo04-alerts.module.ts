import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Demo04AlertsPage } from './demo04-alerts';

@NgModule({
  declarations: [
    Demo04AlertsPage,
  ],
  imports: [
    IonicPageModule.forChild(Demo04AlertsPage),
  ],
  exports: [
    Demo04AlertsPage
  ]
})
export class Demo04AlertsPageModule {}
