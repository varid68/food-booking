var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { RestfulApi } from '../../providers/restful-api';
import { Sound } from '../../providers/sound';
var Checkout = (function () {
    function Checkout(navCtrl, navParams, alertCtrl, loadingCtrl, sound, restfulApi) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.sound = sound;
        this.restfulApi = restfulApi;
        this.batas = 0;
        this.jual = {};
        this.laba = {};
        this.pembeli = {};
    }
    Checkout.prototype.ionViewDidLoad = function () {
        var cart = JSON.parse(localStorage.getItem('cart'));
        this.id = this.navParams.get('id');
        this.getKecamatan();
        this.jual = { kode: this.createKode(), waktu: this.createDate(), status: 'ordered' };
        this.laba = { kode: this.jual.kode, };
        // insert variabel dari keranjang ke variabel lain untuk di post API
        for (var i in cart) {
            if (cart[i].id == this.id)
                this.jual.item = cart[i].item;
            this.jual.jumlah = cart[i].jumlah;
            this.total = cart[i].total;
            this.pembeli.kode = this.jual.kode;
            this.laba.jumlah = cart[i].jumlah;
            this.laba.margin = cart[i].total / cart[i].jumlah - cart[i].modal;
            this.laba.laba = this.laba.margin * this.laba.jumlah;
        }
    };
    // tampilkan desa sesuai kecamatan yang dipilih
    Checkout.prototype.getDesa = function (id) {
        var _this = this;
        this.restfulApi.getDesa(id.value)
            .subscribe(function (desa) { _this.desa = desa; }, function (error) { return _this.errorMessage = error; });
        this.pembeli.kecamatan = id.text;
    };
    //tampilkan kecamatan
    Checkout.prototype.getKecamatan = function () {
        var _this = this;
        this.restfulApi.getKecamatan()
            .subscribe(function (kecamatan) { _this.kecamatan = kecamatan; }, function (error) { return _this.errorMessage = error; });
    };
    // post API 3 tabel
    Checkout.prototype.postData = function () {
        var _this = this;
        this.sound.play('tabSwitch');
        this.presentLoading();
        this.restfulApi.postJualDetail(this.jual)
            .subscribe(function (hasil) { console.log('hai'); });
        this.restfulApi.postPembeli(this.pembeli)
            .subscribe(function (hasil) { console.log('hai'); });
        this.restfulApi.postLaba(this.laba)
            .subscribe(function (hasil) { return _this.showAlert(); });
    };
    // tampilkan alert 
    Checkout.prototype.showAlert = function () {
        var _this = this;
        this.loader.dismiss();
        var alert = this.alertCtrl.create({
            subTitle: 'Terima kasih , Pesanan akan segera kami proses',
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        _this.navCtrl.popToRoot();
                    }
                }
            ]
        });
        alert.present();
        this.removeCart();
    };
    //show loading
    Checkout.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        this.loader.present();
    };
    // hapus cart setelah checkout
    Checkout.prototype.removeCart = function () {
        var ambil = JSON.parse(localStorage.getItem('cart'));
        for (var i in ambil) {
            if (ambil[i].id == this.id) {
                ambil.splice(i, 1);
                localStorage.setItem('cart', JSON.stringify(ambil));
            }
        }
    };
    // membuat kode order
    Checkout.prototype.createKode = function () {
        var kode = Math.random().toString(36).substr(2, 5);
        return kode;
    };
    // menampilkan tanggal dan jam order
    Checkout.prototype.createDate = function () {
        var full = new Date();
        var tanggal = full.getDate();
        var bulan = full.getMonth() + 1;
        var tahun = full.getFullYear();
        var jam = full.getHours() + ':' + full.getMinutes();
        var hasil = tahun + '-' + bulan + '-' + tanggal + ' ' + jam;
        return hasil;
    };
    //play sound
    Checkout.prototype.play = function () {
        this.sound.play('tabSwitch');
    };
    return Checkout;
}());
Checkout = __decorate([
    IonicPage(),
    Component({
        selector: 'page-checkout',
        templateUrl: 'checkout.html',
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        AlertController,
        LoadingController,
        Sound,
        RestfulApi])
], Checkout);
export { Checkout };
//# sourceMappingURL=checkout.js.map