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
import { IonicPage, NavController, NavParams, AlertController, Events } from 'ionic-angular';
import { RestfulApi } from '../../providers/restful-api';
import { ServiceInDetail } from '../../providers/service-in-detail';
import { Sound } from '../../providers/sound';
import { Keyboard } from '@ionic-native/keyboard';
var PageOne = (function () {
    function PageOne(navCtrl, navParams, alertCtrl, service, event, keyboard, sound, restfulApi) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.service = service;
        this.event = event;
        this.keyboard = keyboard;
        this.sound = sound;
        this.restfulApi = restfulApi;
        this.slides = [
            { image: "./assets/img/sate-kambing.png" },
            { image: "./assets/img/rujak.png" },
            { image: "./assets/img/mie-ayam.png" },
            { image: "./assets/img/es-buah.png" },
        ];
    }
    PageOne.prototype.ionViewWillEnter = function () {
        this.jumlahOrder = this.service.checkCart();
    };
    PageOne.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.keyboard.onKeyboardShow().subscribe(function () { return _this.event.publish('hideTabs'); });
        this.keyboard.onKeyboardHide().subscribe(function () { return _this.event.publish('showTabs'); });
    };
    //cari barang
    PageOne.prototype.searchItems = function (ev) {
        var _this = this;
        var val = ev.target.value;
        if (val != '') {
            this.restfulApi.search(val)
                .subscribe(function (hasil) {
                _this.hasil = hasil;
            }, function (error) { return _this.errorMessage = error; });
        }
        else {
            this.hasil = null;
        }
    };
    // ke detail pada autocomplete
    PageOne.prototype.toDetail = function (item) {
        this.sound.play('tabSwitch');
        this.hasil = null;
        this.navCtrl.push('DetailItem', {
            id: item.id_produk,
            item: item.item,
            harga: item.jual
        });
    };
    // pindah halaman food, drink, western dan cart
    PageOne.prototype.goToPage = function (link) {
        this.sound.play('tabSwitch');
        this.navCtrl.push(link);
    };
    return PageOne;
}());
PageOne = __decorate([
    IonicPage(),
    Component({
        selector: 'page-page-one',
        templateUrl: 'page-one.html',
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        AlertController,
        ServiceInDetail,
        Events,
        Keyboard,
        Sound,
        RestfulApi])
], PageOne);
export { PageOne };
//# sourceMappingURL=page-one.js.map