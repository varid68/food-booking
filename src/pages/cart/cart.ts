import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Sound } from '../../providers/sound';

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class Cart {
	cart:any[];
  jumlahOrder : number;
  total:number;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public sound:Sound) {
    
  	this.cart = JSON.parse(localStorage.getItem('cart'));
    if (this.cart == null || this.cart.length == 0){
      this.jumlahOrder = 0;
      this.total = 0;
    } 
    else {
      this.hitungTotal();
      this.jumlahOrder = this.cart.length;
    }
  }

  hitungTotal(){
    let ambil = JSON.parse(localStorage.getItem('cart'));
    if (ambil.length != 0){
      let x = 0;
      for (var i in ambil) {
        var hasil = x + parseFloat(ambil[i].total);
        x = hasil;
      }
    }
    else {
      hasil = 0;
    }
    return this.total = hasil ;
  }


  removeCart(id){
    let ambil = JSON.parse(localStorage.getItem('cart'));

  	for (var i in ambil) {
  		if (ambil[i].id == id ) {
  			ambil.splice(i,1);
  			localStorage.setItem('cart',JSON.stringify(ambil));
  		}
  	}
    this.hitungTotal();
    this.jumlahOrder = ambil.length;
    return this.cart = JSON.parse(localStorage.getItem('cart'));
  }

  checkoutItems(){
    this.sound.play('tabSwitch');
    if (JSON.parse(localStorage.getItem('user'))){
      this.navCtrl.push('Checkout');
    }
    else {
      this.navCtrl.push('Login');
    } 
  }

  handleSwipe(id){
    this.removeCart(id);
  }


  toHome(){
    this.sound.play('tabSwitch');
    this.navCtrl.popToRoot();
  }

  checkoutItem(id){
    this.sound.play('tabSwitch');
    if (JSON.parse(localStorage.getItem('user'))){
      this.navCtrl.push('Checkout',{
        id:id
      });
    }
    else {
      this.navCtrl.push('Login');
    } 
  }

  back(){
    this.navCtrl.pop();
  }
  
}
