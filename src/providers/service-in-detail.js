var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
var ServiceInDetail = (function () {
    function ServiceInDetail(platform, fb, google, af) {
        this.platform = platform;
        this.fb = fb;
        this.google = google;
        this.af = af;
    }
    // fungsi check apa ada item di keranjang / tidak?
    ServiceInDetail.prototype.checkCart = function () {
        var jumlahOrder;
        if (!localStorage.getItem('cart')) {
            jumlahOrder = 0;
        }
        else {
            var ambil = JSON.parse(localStorage.getItem('cart')).length;
            jumlahOrder = ambil;
        }
        return jumlahOrder;
    };
    // fungsi sortir list food, drink dan western
    ServiceInDetail.prototype.sortItems = function (val, list) {
        switch (val) {
            case "nama":
                this.sortedArray = list.sort(function (n1, n2) {
                    if (n1.item > n2.item) {
                        return 1;
                    }
                    if (n1.item < n2.item) {
                        return -1;
                    }
                    return 0;
                });
                break;
            case "termurah":
                this.sortedArray = list.sort(function (n1, n2) { return n1.jual - n2.jual; });
                break;
            default:
                this.sortedArray = list.sort(function (n1, n2) { return n2.jual - n1.jual; });
                break;
        }
        return this.sortedArray;
    };
    //fungsi login fb -> login.ts
    ServiceInDetail.prototype.loginFb = function () {
        var _this = this;
        if (!this.platform.is('cordova')) {
            return this.af.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
                .then(function (res) {
                _this.ambilNamaWeb(res);
            });
        }
        else {
            return this.fb.login(['public_profile', 'email'])
                .then(function (res) {
                _this.ambilNamaCordova();
            });
        }
    };
    //fungsi login google -> login.ts
    ServiceInDetail.prototype.loginGoogle = function () {
        var _this = this;
        if (!this.platform.is('cordova')) {
            return this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
                .then(function (res) {
                _this.ambilNamaWeb(res);
            });
        }
        else {
            return this.google.login({
                'webClientId': '826487777854-kked85tmbb197emk2amjle5ltmg0u4dt.apps.googleusercontent.com',
                'offline': true
            }).then(function (res) {
                _this.ambilNamaGoogle(res);
            }).catch(function (err) { return console.log(err); });
        }
    };
    // ambil nama di web jika login fb berhasil
    ServiceInDetail.prototype.ambilNamaWeb = function (res) {
        var user = {
            nama: res.user.displayName,
            email: res.user.email,
            photo: res.user.photoURL
        };
        localStorage.setItem('user', JSON.stringify([user]));
    };
    // ambil nama di device jika login fb berhasil
    ServiceInDetail.prototype.ambilNamaCordova = function () {
        this.fb.api('/me?fields=name,picture', ['public_profile'])
            .then(function (response) {
            var user = {
                nama: response.name,
                photo: response.picture.data.url,
                id: response.id
            };
            localStorage.setItem('user', JSON.stringify([user]));
        });
    };
    // ambil data google di device jika login google berhasil
    ServiceInDetail.prototype.ambilNamaGoogle = function (res) {
        return this.af.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
            .then(function (res) {
            var user = {
                nama: res.displayName,
                email: res.email,
                photo: res.photoURL
            };
            console.log(res);
            localStorage.setItem('user', JSON.stringify([user]));
        }).catch(function (gagal) {
            console.log('gagal');
        });
    };
    return ServiceInDetail;
}());
ServiceInDetail = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Platform,
        Facebook,
        GooglePlus,
        AngularFireAuth])
], ServiceInDetail);
export { ServiceInDetail };
//# sourceMappingURL=service-in-detail.js.map