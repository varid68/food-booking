import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Events } from 'ionic-angular';

import { RestfulApi } from '../../providers/restful-api';
import { ServiceInDetail } from '../../providers/service-in-detail';
import { Sound } from '../../providers/sound';
import { Keyboard } from '@ionic-native/keyboard';

@IonicPage()
@Component({
  selector: 'page-page-one',
  templateUrl: 'page-one.html',
})

export class PageOne {
  slides: any;
  jumlahOrder:number;
  errorMessage :string;
  hasil:any;

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
    public alertCtrl: AlertController,
    public service: ServiceInDetail,
    private event: Events,
    public keyboard:Keyboard,
    public sound:Sound,
    public restfulApi: RestfulApi) {

  	this.slides = [
  		{ image: "./assets/img/sate-kambing.png"},
  		{ image: "./assets/img/rujak.png"},
  		{ image: "./assets/img/mie-ayam.png"},
      { image: "./assets/img/es-buah.png"}, 	
  	];
  }

  ionViewWillEnter(){
    this.jumlahOrder = this.service.checkCart();
  }

  ionViewDidLoad() {
    this.keyboard.onKeyboardShow().subscribe(() => this.event.publish('hideTabs'));
    this.keyboard.onKeyboardHide().subscribe(() => this.event.publish('showTabs'));
  }

  //cari barang
  searchItems(ev:any){
    let val = ev.target.value;
    if(val != ''){
      this.restfulApi.search(val)
      .subscribe((hasil) => {
        this.hasil = hasil;
      },
        (error) => this.errorMessage = <any> error);
    }
    else {
      this.hasil = null;
    }
  }


  // ke detail pada autocomplete
  toDetail(item){
    this.sound.play('tabSwitch');
    this.hasil = null;
    this.navCtrl.push('DetailItem',{
      id : item.id_produk,
      item : item.item,
      harga :item.jual
    });
  }

  // pindah halaman food, drink, western dan cart
  goToPage(link:string){
    this.sound.play('tabSwitch');
    this.navCtrl.push(link);
  }

}
