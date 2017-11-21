import { Component } from '@angular/core';
import { IonicPage, AlertController,NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Demo04AlertsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-demo04-alerts',
  templateUrl: 'demo04-alerts.html',
})
export class Demo04AlertsPage {
  myPhone="";
  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo04AlertsPage');
  }

  //显示一个输入提示窗口
  showPrompt(){
    let myPrompt = this.alertCtrl.create({
      title:'请输入手机号',
      inputs:[
        {
          type:'text',
          placeholder:'请输入手机号'
        }
      ],
      buttons:[
        {
          text:'ok',
          handler:(data)=>{
            console.log('ok btn is clicked'+data[0]);
            this.myPhone = data[0];
            this.showConfirm();
          }
        },
        {
          role:'cencel',//无论点击了取消还是点击背景自动取消，都会执行取消回调
          text:'cancel',
          handler:()=>{
            console.log('cancel operation');
          }
        }
      ]
    });
    myPrompt.present();
  }

  //创建一个确认窗口
  showConfirm(){
    let myConfirm = this.alertCtrl.create({
      title:'请确认手机号',
      message:'确认将验证码发送到'+this.myPhone+"吗？",
      buttons:[
        {
          text:'ok',
          handler:()=>{
            this.showAlert();
          }
        },
        {
          text:'cancel',
          role:'cancel'
        }
      ]
    });
    myConfirm.present();
  }
  
  //创建一个警告窗
  showAlert(){
    let myAlert = this.alertCtrl.create({
      title:'成功',
      message:'验证码已经成功到'+this.myPhone,
      buttons:[
        'ok'
      ]
    });
    myAlert.present();
  }
}
