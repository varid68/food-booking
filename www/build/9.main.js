webpackJsonp([9],{

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profil__ = __webpack_require__(318);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilModule", function() { return ProfilModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilModule = (function () {
    function ProfilModule() {
    }
    return ProfilModule;
}());
ProfilModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__profil__["a" /* Profil */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profil__["a" /* Profil */])],
        exports: [__WEBPACK_IMPORTED_MODULE_2__profil__["a" /* Profil */]]
    })
], ProfilModule);

//# sourceMappingURL=profil.module.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Profil; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Profil = (function () {
    function Profil(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.profile = [
            {
                language: 'Indonesia',
                languages: ['indo', 'jawa', 'sunda'],
                enableNotification: true,
                paymentMethod: 'Online',
                paymentMethods: ['Online', 'Offline', 'Cod'],
                method: 'Cash',
                currency: 'Rupiah',
                currencies: ['Dollar', 'Rupiah']
            }
        ];
    }
    Profil.prototype.ionViewWillEnter = function () {
        var user = JSON.parse(localStorage.getItem('user'));
        this.cover = './assets/img/profile/cover.jpg';
        this.photo = user[0].photo;
        this.nama = user[0].nama;
    };
    Profil.prototype.toggleNotfication = function () {
    };
    Profil.prototype.logOut = function () {
        console.log(this.profile[0].language);
    };
    Profil.prototype.debug = function () {
    };
    return Profil;
}());
Profil = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-profil',template:/*ion-inline-start:"C:\xampp\htdocs\latihan\ionic2\ionicBlank\src\pages\profil\profil.html"*/'<ion-content>\n	<img [src]="cover"/>\n	<img [src]="photo" id="profil-image"/>\n\n	<h2 id="nama">{{ nama }}</h2>\n\n  <ion-list no-border>\n    <ion-list-header>\n      General\n    </ion-list-header>\n    <ion-item>\n      <ion-icon name=\'settings\' item-left></ion-icon>\n      <ion-label>App Language</ion-label>\n      <ion-select [(ngModel)]="profile[0].language">\n        <ion-option *ngFor="let language of profile[0].languages" [value]="language">{{language}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-toggle [(ngModel)]="profile[0].enableNotifications" (click)="toggleNotifications()"></ion-toggle>\n      <ion-label class="label"> Enable notifications </ion-label>\n      <ion-icon name=\'notifications\' item-left></ion-icon>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>\n      Currency\n    </ion-list-header>\n    <ion-item>\n      <ion-icon name=\'card\' item-left></ion-icon>\n      <ion-label>Payment Method</ion-label>\n      <ion-select [(ngModel)]="profile[0].paymentMethod">\n        <ion-option *ngFor="let method of profile[0].paymentMethods" [value]="method">{{method}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\'logo-usd\' item-left></ion-icon>\n      <ion-label>Currency</ion-label>\n      <ion-select [(ngModel)]="profile[0].currency">\n        <ion-option *ngFor="let currency of profile[0].currencies" [value]="currency">{{currency}}</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n  \n  <ion-list>\n    <ion-list-header>\n      Other\n    </ion-list-header>\n    <ion-item>\n      <ion-icon name=\'power\' item-left></ion-icon>\n      <button ion-button (click)="logOut()" item-right>\n      Logout\n      </button>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\latihan\ionic2\ionicBlank\src\pages\profil\profil.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], Profil);

//# sourceMappingURL=profil.js.map

/***/ })

});
//# sourceMappingURL=9.main.js.map