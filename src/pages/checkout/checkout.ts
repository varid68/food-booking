import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

import { RestfulApi } from '../../providers/restful-api';
import { Sound } from '../../providers/sound';
import { Pembeli, Jual, Laba } from './custom-data';

@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})

export class Checkout {
  id: string;
  loader: any;
	kecamatan: string|number[];
  desa: string|number[];
  errorMessage: any;
  total: number;
  jual: Jual={};
  laba: Laba={};
  pembeli: Pembeli={};
  loading: boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl:AlertController,
    public loadingCtrl:LoadingController,
    public sound:Sound,
    private restfulApi:RestfulApi) {
  }

  ionViewDidLoad(){
    let cart = JSON.parse(localStorage.getItem('cart'));
    this.id = this.navParams.get('id');
    this.getKecamatan();
    this.jual = {kode:this.createKode(),waktu:this.createDate(),status:'ordered'};
    this.laba= {kode:this.jual.kode}
    
    // insert variabel dari keranjang ke variabel lain untuk di post API
    for (var i in cart) {
      if (cart[i].id == this.id)
        this.jual.item = cart[i].item;
        this.jual.jumlah = cart[i].jumlah;
        this.total = cart[i].total;
        this.pembeli.kode = this.jual.kode;

        this.laba.jumlah = cart[i].jumlah;
        this.laba.margin = cart[i].total / cart[i].jumlah - cart[i].modal;
        this.laba.laba = this.laba.margin*this.laba.jumlah;
    }
  }


  // tampilkan desa sesuai kecamatan yang dipilih
  getDesa(ev:any){
    this.loading = true;
    this.restfulApi.getDesa(ev)
      .subscribe(
        desa => { 
          this.desa = desa;
          this.loading = false; },
        error => this.errorMessage = <any>error);
  }

  //tampilkan kecamatan
  getKecamatan(){
    this.restfulApi.getKecamatan()
      .subscribe(
        kecamatan => { this.kecamatan = kecamatan},
        error => this.errorMessage = <any>error);
  }

  // post API 3 tabel
  postData(){
    this.sound.play('tabSwitch');
    this.presentLoading();
    this.restfulApi.postJualDetail(this.jual)
    .subscribe(hasil => {console.log('hai'); });


    this.restfulApi.postPembeli(this.pembeli)
    .subscribe(hasil => {console.log('hai'); });

    this.restfulApi.postLaba(this.laba)
    .subscribe(hasil => this.showAlert());
  }

  // tampilkan alert 
  showAlert() {
    this.loader.dismiss();
    let alert = this.alertCtrl.create({
      subTitle: 'Terima kasih , Pesanan akan segera kami proses',
      buttons: [
        {
          text:'OK',
          handler:data => {
            this.navCtrl.popToRoot();
          }
        }]
    });
    alert.present();
    this.removeCart();
  }

  //show loading
  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    this.loader.present();
  }

  // hapus cart setelah checkout
  removeCart(){
    let ambil = JSON.parse(localStorage.getItem('cart'));

    for (var i in ambil) {
      if (ambil[i].id == this.id ) {
        ambil.splice(i,1);
        localStorage.setItem('cart',JSON.stringify(ambil));
      }
    }
  }

  // membuat kode order
  createKode(){
    let kode = Math.random().toString(36).substr(2, 5);
    return kode;
  }

  // menampilkan tanggal dan jam order
  createDate(){
    let full = new Date();
    let tanggal = full.getDate();
    let bulan = full.getMonth()+1;
    let tahun = full.getFullYear();
    let jam = full.getHours()+':'+full.getMinutes();

    let hasil = tahun+'-'+bulan+'-'+tanggal+' '+jam;
    return hasil;
  }

  //play sound
  play(){
    this.sound.play('tabSwitch');
  }


}
