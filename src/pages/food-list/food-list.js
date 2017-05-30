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
import { ServiceInDetail } from '../../providers/service-in-detail';
import { RestfulApi } from '../../providers/restful-api';
import { Sound } from '../../providers/sound';
var FoodList = (function () {
    function FoodList(navCtrl, navParams, loadingCtrl, service, sound, RestfulApi) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.service = service;
        this.sound = sound;
        this.RestfulApi = RestfulApi;
    }
    FoodList.prototype.ionViewDidLoad = function () {
        this.getFood();
    };
    FoodList.prototype.ionViewWillEnter = function () {
        this.jumlahOrder = this.service.checkCart();
    };
    FoodList.prototype.back = function () {
        this.sound.play('tabSwitch');
        this.navCtrl.pop();
    };
    FoodList.prototype.getFood = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: 'tunggu bentar lagi loading....'
        });
        this.loading.present();
        this.RestfulApi.getFood()
            .subscribe(function (list) {
            _this.list = list,
                _this.hideLoading();
        }, function (error) { return _this.errorMessage = error; });
    };
    FoodList.prototype.hideLoading = function () {
        this.loading.dismiss();
    };
    FoodList.prototype.sort = function (val) {
        this.sound.play('tabSwitch');
        this.service.sortItems(val, this.list);
    };
    FoodList.prototype.toDetail = function (myList) {
        this.sound.play('tabSwitch');
        this.fab.close();
        this.navCtrl.push('DetailItem', {
            id: myList.id_produk,
            item: myList.item,
            harga: myList.jual,
            modal: myList.modal
        });
    };
    FoodList.prototype.toCart = function () {
        this.sound.play('tabSwitch');
        this.fab.close();
        this.navCtrl.push('Cart');
    };
    FoodList.prototype.play = function () {
        this.sound.play('tabSwitch');
    };
    return FoodList;
}());
__decorate([
    ViewChild('fab'),
    __metadata("design:type", Object)
], FoodList.prototype, "fab", void 0);
FoodList = __decorate([
    IonicPage(),
    Component({
        selector: 'page-food-list',
        templateUrl: 'food-list.html',
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        LoadingController,
        ServiceInDetail,
        Sound,
        RestfulApi])
], FoodList);
export { FoodList };
//# sourceMappingURL=food-list.js.map