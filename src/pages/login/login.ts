import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';
import { NavController } from 'ionic-angular';

import { LoadingController } from 'ionic-angular';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
	submitted = false;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {

  }

  onLogin(form: NgForm) {
  	this.submitted = true;

  	console.log('login ')
  	const loader = this.loadingCtrl.create({
  		content: "正在登录中..."
  	});
  	loader.present();
  	//登录Ajax发送完毕
  	setTimeout(() => {
  		loader.dismiss();
  		this.navCtrl.push(HomePage);
  	}, 3000)	
  }
}