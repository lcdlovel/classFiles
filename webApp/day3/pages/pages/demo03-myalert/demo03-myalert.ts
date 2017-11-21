import { Component } from '@angular/core';
import { IonicPage, AlertController,
  NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Demo03MyalertPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-demo03-myalert',
  templateUrl: 'demo03-myalert.html',
})
export class Demo03MyalertPage {
  myInput:string = "";
  uName:string = "";
  constructor(public alertCtrl:AlertController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Demo03MyalertPage');
  }

  showAlert(){
    //将用户输入的值 通过警告窗口 显示出来
    //创建
    let myAlert = this.alertCtrl.create({
      title:'警告窗口',
      message:this.myInput,
      inputs:[
        {
          label:'用户名',
          type:'text',
          placeholder:'请输入用户名！'
        }
      ],
      buttons:[
        {
          text:'ok',
          handler:(data)=>{
            console.log('ok btn is clicked,value is '+data[0]);
            this.uName = data[0];
          }
        },
        {
          role:'cancel',
          text:'取消',
          handler:function(){
            console.log('cancel btn is clicked');
          }
        }
      ]
    })

    //显示
    myAlert.present();
  }

}
