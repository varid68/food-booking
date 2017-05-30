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
import { ServiceInDetail } from '../../providers/service-in-detail';
import { Sound } from '../../providers/sound';
var Login = (function () {
    function Login(navCtrl, navParams, sound, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sound = sound;
        this.service = service;
    }
    Login.prototype.toCheckout = function () {
        this.sound.play('tabSwitch');
        this.navCtrl.push('Checkout');
    };
    Login.prototype.signInWithFacebook = function () {
        this.sound.play('tabSwitch');
        this.service.loginFb().then(function (res) { return console.log(res); });
    };
    Login.prototype.signInWithGoogle = function () {
        this.sound.play('tabSwitch');
        this.service.loginGoogle().then();
    };
    return Login;
}());
Login = __decorate([
    IonicPage(),
    Component({
        selector: 'page-login',
        templateUrl: 'login.html',
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        Sound,
        ServiceInDetail])
], Login);
export { Login };
//# sourceMappingURL=login.js.map