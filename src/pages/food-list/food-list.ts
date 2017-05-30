import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

import { ServiceInDetail } from '../../providers/service-in-detail';
import { RestfulApi } from '../../providers/restful-api';
import { Sound } from '../../providers/sound';

@IonicPage()
@Component({
  selector: 'page-food-list',
  templateUrl: 'food-list.html',
})

export class FoodList {
	@ViewChild('fab') fab:any;

	list: any[];
	errorMessage :string;
	jumlahOrder:number;
  loading:any;

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams, 
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public service: ServiceInDetail,
    public sound:Sound,
  	public RestfulApi: RestfulApi) {}

  ionViewDidLoad(){
  	this.getFood();
  }


  ionViewWillEnter(){
    this.jumlahOrder = this.service.checkCart();
  }


  back(){
    this.sound.play('tabSwitch');
  	this.navCtrl.pop();
  }


  getFood(){
    this.loading = this.loadingCtrl.create({
      content: 'tunggu bentar lagi loading....'
    })
    this.loading.present();

  	this.RestfulApi.getFood()
  		.subscribe(
        response => {
          if (response.status == 200){ 
            this.list = response.json();
            this.loading.dismiss();
          }
          else {
            this.loading.dismiss();
            this.presentConfirm();
          }
        },
        error => this.errorMessage = <any>error);
  }


  presentConfirm() {
  let alert = this.alertCtrl.create({
    title: 'Error Connection',
    message: 'Do you want to Reload?',
    buttons: [
      {
        text: 'OK',
        handler: () => {
          this.navCtrl.pop();
        }
      }
    ]
  });
  alert.present();
  }


  sort(val){
    this.sound.play('tabSwitch');
  	this.service.sortItems(val,this.list);
  }


  toDetail(myList){
    this.sound.play('tabSwitch');
  	this.fab.close();
  	this.navCtrl.push('DetailItem',{
  		id : myList.id_produk,
  		item : myList.item,
  		harga :myList.jual,
      modal:myList.modal
  	});
  }


  toCart(){
    this.sound.play('tabSwitch');
  	this.fab.close();
  	this.navCtrl.push('Cart');
  }

  play(){
    this.sound.play('tabSwitch');
  }
}
