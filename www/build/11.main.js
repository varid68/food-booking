webpackJsonp([11],{

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(316);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__login__["a" /* Login */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* Login */])],
        exports: [__WEBPACK_IMPORTED_MODULE_2__login__["a" /* Login */]]
    })
], LoginModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_in_detail__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sound__ = __webpack_require__(104);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\xampp\htdocs\latihan\ionic2\ionicBlank\src\pages\login\login.html"*/'<ion-header>\n  <ion-navbar color="bukalapak">\n    <ion-title>Masuk</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n	<ion-list>\n	  <ion-item>\n	    <ion-label floating>Username</ion-label>\n	    <ion-input type="text"></ion-input>\n	  </ion-item>\n\n	  <ion-item>\n	    <ion-label floating>Password</ion-label>\n	    <ion-input type="password"></ion-input>\n	  </ion-item>\n	</ion-list>\n\n	 \n	<button ion-button block large color="bukalapak" (click)="toCheckout()">Masuk</button>\n	<a id="lupa-sandi">Lupa kata sandi?</a>\n	<div id="button-fb">\n		<button ion-button large block (click)="signInWithFacebook()">\n			<ion-icon name="logo-facebook"></ion-icon>Masuk Dengan Facebook\n		</button>\n	</div>\n	<div id="button-gmail">\n		<button ion-button large block (click)="signInWithGoogle()">\n			<ion-icon name="logo-google"></ion-icon>Masuk Dengan Google\n		</button>\n	</div>\n\n\n	<ion-footer>\n		<ion-toolbar>\n			<p text-center>Belum punya akun? Daftar Sekarang Bro</p>\n		</ion-toolbar>\n	</ion-footer>\n\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\latihan\ionic2\ionicBlank\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_sound__["a" /* Sound */],
        __WEBPACK_IMPORTED_MODULE_2__providers_service_in_detail__["a" /* ServiceInDetail */]])
], Login);

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=11.main.js.map