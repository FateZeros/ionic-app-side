import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';

import { UserOptions } from '../../interfaces/user-options';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})

export class SignupPage {
	signup: UserOptions = { 
		username: '', 
		password: '' 
	};
	submitted = false;

	constructor(public navCtrl: NavController) {

	}

	onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
    	console.log(form)
      this.navCtrl.push(HomePage);
    }
  }
}