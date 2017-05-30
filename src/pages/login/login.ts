import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ServiceInDetail } from '../../providers/service-in-detail';
import { Sound } from '../../providers/sound';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
    public sound:Sound,
  	public service:ServiceInDetail) {}

  toCheckout(){
    this.sound.play('tabSwitch');
  	this.navCtrl.push('Checkout');
  }

  signInWithFacebook(){
    this.sound.play('tabSwitch');
  	this.service.loginFb().then(res => console.log(res));
  }

  signInWithGoogle(){
    this.sound.play('tabSwitch');
    this.service.loginGoogle().then();
  }

}