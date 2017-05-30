var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { ServiceInDetail } from '../../providers/service-in-detail';
import { Sound } from '../../providers/sound';
import { RestfulApi } from '../../providers/restful-api';
var DrinkList = (function () {
    function DrinkList(navCtrl, navParams, loadingCtrl, alertCtrl, service, sound, RestfulApi) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.service = service;
        this.sound = sound;
        this.RestfulApi = RestfulApi;
    }
    DrinkList.prototype.ionViewDidLoad = function () {
        this.getDrink();
    };
    DrinkList.prototype.ionViewWillEnter = function () {
        this.jumlahOrder = this.service.checkCart();
    };
    DrinkList.prototype.back = function () {
        this.sound.play('tabSwitch');
        this.navCtrl.pop();
    };
    DrinkList.prototype.getDrink = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'tunggu bentar lagi loading....'
        });
        this.loading.present();
        this.RestfulApi.getDrink()
            .subscribe(function (list) {
            _this.list = list,
                _this.hideLoading();
        }, function (error) { _this.errorMessage = error; });
    };
    DrinkList.prototype.hideLoading = function () {
        this.loading.dismiss();
    };
    DrinkList.prototype.sort = function (val) {
        this.sound.play('tabSwitch');
        this.service.sortItems(val, this.list);
    };
    DrinkList.prototype.toDetail = function (myList) {
        this.sound.play('tabSwitch');
        this.fab.close();
        this.navCtrl.push('DetailItem', {
            id: myList.id_produk,
            item: myList.item,
            harga: myList.jual,
            modal: myList.modal
        });
    };
    DrinkList.prototype.toCart = function () {
        this.sound.play('tabSwitch');
        this.fab.close();
        this.navCtrl.push('Cart');
    };
    DrinkList.prototype.play = function () {
        this.sound.play('tabSwitch');
    };
    return DrinkList;
}());
__decorate([
    ViewChild('fab'),
    __metadata("design:type", Object)
], DrinkList.prototype, "fab", void 0);
DrinkList = __decorate([
    IonicPage(),
    Component({
        selector: 'page-drink-list',
        templateUrl: 'drink-list.html',
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        LoadingController,
        AlertController,
        ServiceInDetail,
        Sound,
        RestfulApi])
], DrinkList);
export { DrinkList };
//# sourceMappingURL=drink-list.js.map