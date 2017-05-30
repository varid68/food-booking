import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class ServiceInDetail {
  sortedArray:string|number[];
  constructor(
  	public platform: Platform,
  	public fb: Facebook,
    public google: GooglePlus,
  	public af: AngularFireAuth){}


  // fungsi check apa ada item di keranjang / tidak?
  checkCart(){
  	let jumlahOrder:number;
    if(!localStorage.getItem('cart')){
      jumlahOrder = 0;
    }
    else {
      let ambil = JSON.parse(localStorage.getItem('cart')).length;
      jumlahOrder = ambil;
    }
  return jumlahOrder;
  }

  // fungsi sortir list food, drink dan western
  sortItems(val:string,list:any):string|number[]{
  	switch (val) {
  		case "nama":
  			this.sortedArray = list.sort((n1,n2) => {
	  		if (n1.item > n2.item){
	  			return 1;
	  		}
	  		if (n1.item < n2.item){
	  			return -1
	  		}
	  		return 0;
	  	});
  			break;
  		case "termurah":
  			this.sortedArray = list.sort((n1,n2) => n1.jual - n2.jual)
  			break;
  		default:
  			this.sortedArray = list.sort((n1,n2) => n2.jual - n1.jual)
  			break;
  	}
	 return this.sortedArray;
  }

  //fungsi login fb -> login.ts
  loginFb(){
  	if (!this.platform.is('cordova')){
	  	return this.af.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
	  		.then(res => {
	  			this.ambilNamaWeb(res)
	  		})
	  }
	  else {
	  	return this.fb.login(['public_profile','email'])
				.then((res: FacebookLoginResponse) => {
					this.ambilNamaCordova();
				})
	  }
  }

  //fungsi login google -> login.ts
  loginGoogle(){
    if (!this.platform.is('cordova')){
      return this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then(res => {
          this.ambilNamaWeb(res)
        })
    }
    else {
      return this.google.login({
        'webClientId':'826487777854-kked85tmbb197emk2amjle5ltmg0u4dt.apps.googleusercontent.com',
        'offline':true
      }).then(res => {
          this.ambilNamaGoogle(res);
        }).catch(err => console.log(err));
    }
  }

  // ambil nama di web jika login fb berhasil
  private ambilNamaWeb(res:any){
  	let user = {
  		nama:res.user.displayName,
  		email:res.user.email,
  		photo:res.user.photoURL
  	} 
  	localStorage.setItem('user',JSON.stringify([user]));
  }

  // ambil nama di device jika login fb berhasil
	private ambilNamaCordova(){
		this.fb.api('/me?fields=name,picture',['public_profile'])
		.then(function(response){
			let user = {
				nama:response.name,
				photo:response.picture.data.url,
				id:response.id
			}
			localStorage.setItem('user',JSON.stringify([user]));
		})
	}

  // ambil data google di device jika login google berhasil
  private ambilNamaGoogle(res:any){
    return this.af.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
      .then(function(res){
        let user = {
          nama:res.displayName,
          email:res.email,
          photo:res.photoURL
        }
        console.log(res);
        localStorage.setItem('user',JSON.stringify([user]));
      }).catch( gagal => {
          console.log('gagal');
      })
  }

}
