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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Sound } from '../../providers/sound';
var Cart = (function () {
    function Cart(navCtrl, navParams, sound) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sound = sound;
        this.cart = JSON.parse(localStorage.getItem('cart'));
        if (this.cart == null || this.cart.length == 0) {
            this.jumlahOrder = 0;
            this.total = 0;
        }
        else {
            this.hitungTotal();
            this.jumlahOrder = this.cart.length;
        }
    }
    Cart.prototype.hitungTotal = function () {
        var ambil = JSON.parse(localStorage.getItem('cart'));
        if (ambil.length != 0) {
            var x = 0;
            for (var i in ambil) {
                var hasil = x + parseFloat(ambil[i].total);
                x = hasil;
            }
        }
        else {
            hasil = 0;
        }
        return this.total = hasil;
    };
    Cart.prototype.removeCart = function (id) {
        var ambil = JSON.parse(localStorage.getItem('cart'));
        for (var i in ambil) {
            if (ambil[i].id == id) {
                ambil.splice(i, 1);
                localStorage.setItem('cart', JSON.stringify(ambil));
            }
        }
        this.hitungTotal();
        this.jumlahOrder = ambil.length;
        return this.cart = JSON.parse(localStorage.getItem('cart'));
    };
    Cart.prototype.checkoutItems = function () {
        this.sound.play('tabSwitch');
        if (JSON.parse(localStorage.getItem('user'))) {
            this.navCtrl.push('Checkout');
        }
        else {
            this.navCtrl.push('Login');
        }
    };
    Cart.prototype.handleSwipe = function (id) {
        this.removeCart(id);
    };
    Cart.prototype.toHome = function () {
        this.sound.play('tabSwitch');
        this.navCtrl.popToRoot();
    };
    Cart.prototype.checkoutItem = function (id) {
        this.sound.play('tabSwitch');
        if (JSON.parse(localStorage.getItem('user'))) {
            this.navCtrl.push('Checkout', {
                id: id
            });
        }
        else {
            this.navCtrl.push('Login');
        }
    };
    Cart.prototype.back = function () {
        this.navCtrl.pop();
    };
    return Cart;
}());
Cart = __decorate([
    IonicPage(),
    Component({
        selector: 'page-cart',
        templateUrl: 'cart.html',
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        Sound])
], Cart);
export { Cart };
//# sourceMappingURL=cart.js.map