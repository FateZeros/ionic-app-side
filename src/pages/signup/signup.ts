import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})

export class SignupPage {
	submitted = false;

	constructor(public navCtrl: NavController) {

	}

	onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.navCtrl.push(HomePage);
    }
  }
}