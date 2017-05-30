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
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { Sound } from '../../providers/sound';
var Favorit = (function () {
    function Favorit(sound, navCtrl, navParams, actionSheetCtrl) {
        this.sound = sound;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
    }
    Favorit.prototype.ionViewDidLoad = function () {
        this.favorit = JSON.parse(localStorage.getItem('favorit'));
        console.log(this.favorit);
    };
    Favorit.prototype.deleteAll = function () {
        var _this = this;
        this.sound.play('tabSwitch');
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Modify your favorit',
            buttons: [
                {
                    text: 'Hapus Semua',
                    role: 'destructive',
                    handler: function () {
                        _this.sound.play('tabSwitch');
                        localStorage.removeItem('favorit');
                        _this.favorit = null;
                    }
                }, {
                    text: 'Archive',
                    handler: function () {
                        console.log('Archive clicked');
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    Favorit.prototype.toDetail = function (myList) {
        this.sound.play('tabSwitch');
        this.navCtrl.push('DetailItem', {
            id: myList.id,
            item: myList.item,
            harga: myList.harga
        });
    };
    return Favorit;
}());
Favorit = __decorate([
    IonicPage(),
    Component({
        selector: 'page-favorit',
        templateUrl: 'favorit.html',
    }),
    __metadata("design:paramtypes", [Sound, NavController, NavParams, ActionSheetController])
], Favorit);
export { Favorit };
//# sourceMappingURL=favorit.js.map