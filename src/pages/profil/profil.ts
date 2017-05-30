import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Profile } from './interfaces';

@IonicPage()
@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})

export class Profil {
	photo :string;
	nama: string;
	cover: any;
	profile: Profile[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.profile = [
			{
				language:'Indonesia',
				languages:['indo','jawa','sunda'],
				enableNotification:true,
				paymentMethod:'Online',
				paymentMethods:['Online','Offline','Cod'],
				method:'Cash',
				currency:'Rupiah',
				currencies: ['Dollar','Rupiah']
			}];
  }

  ionViewWillEnter(){
  	let user = JSON.parse(localStorage.getItem('user'));
  	this.cover = './assets/img/profile/cover.jpg'
  	this.photo = user[0].photo;
  	this.nama = user[0].nama;
  }

  toggleNotfication(){

  }

  logOut(){
  	console.log(this.profile[0].language);
  }

  debug(){
  	
  }

}
