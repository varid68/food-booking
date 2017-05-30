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
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { RestfulApi } from '../../providers/restful-api';
import { ServiceInDetail } from '../../providers/service-in-detail';
import { Sound } from '../../providers/sound';
var WesternList = (function () {
    function WesternList(navCtrl, navParams, service, sound, loadingCtrl, RestfulApi) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.sound = sound;
        this.loadingCtrl = loadingCtrl;
        this.RestfulApi = RestfulApi;
    }
    WesternList.prototype.ionViewDidLoad = function () {
        this.getWestern();
    };
    WesternList.prototype.ionViewWillEnter = function () {
        this.jumlahOrder = this.service.checkCart();
    };
    WesternList.prototype.back = function () {
        this.sound.play('tabSwitch');
        this.navCtrl.pop();
    };
    WesternList.prototype.getWestern = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'tunggu bentar lagi loading....'
        });
        this.loading.present();
        this.RestfulApi.getWestern()
            .subscribe(function (list) {
            _this.list = list,
                _this.hideLoading();
        }, function (error) { return _this.errorMessage = error; });
    };
    WesternList.prototype.hideLoading = function () {
        this.loading.dismiss();
    };
    WesternList.prototype.sort = function (val) {
        this.sound.play('tabSwitch');
        this.service.sortItems(val, this.list);
    };
    WesternList.prototype.toDetail = function (myList) {
        this.sound.play('tabSwitch');
        this.fab.close();
        this.navCtrl.push('DetailItem', {
            id: myList.id_produk,
            item: myList.item,
            harga: myList.jual,
            modal: myList.modal
        });
    };
    WesternList.prototype.toCart = function () {
        this.sound.play('tabSwitch');
        this.fab.close();
        this.navCtrl.push('Cart');
    };
    WesternList.prototype.play = function () {
        this.sound.play('tabSwitch');
    };
    return WesternList;
}());
__decorate([
    ViewChild('fab'),
    __metadata("design:type", Object)
], WesternList.prototype, "fab", void 0);
WesternList = __decorate([
    IonicPage(),
    Component({
        selector: 'page-western-list',
        templateUrl: 'western-list.html',
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        ServiceInDetail,
        Sound,
        LoadingController,
        RestfulApi])
], WesternList);
export { WesternList };
//# sourceMappingURL=western-list.js.map