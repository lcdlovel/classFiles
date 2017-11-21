import { Component } from '@angular/core';
import { IonicPage, NavController,
   NavParams,AlertController }
 from 'ionic-angular';

/**
 * Generated class for the Demo02AlertPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-demo02-alert',
  templateUrl: 'demo02-alert.html',
})
export class Demo02AlertPage {

  constructor(public alertCtrl:AlertController ,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo02AlertPage');
  }

  //显示警告窗口
  showAlert(){
    //alert('Hello Alert');

    //步骤1：创建窗口
    let myAlert = this.alertCtrl.create({
      title:'警告',
      message:'这是一个危险操作！',
      buttons:['ok']
    });

    //步骤2：显示窗口
    myAlert.present();
  }

}
