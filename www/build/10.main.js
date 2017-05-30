webpackJsonp([10],{

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_one__ = __webpack_require__(317);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageOneModule", function() { return PageOneModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PageOneModule = (function () {
    function PageOneModule() {
    }
    return PageOneModule;
}());
PageOneModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__page_one__["a" /* PageOne */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__page_one__["a" /* PageOne */])],
        exports: [__WEBPACK_IMPORTED_MODULE_2__page_one__["a" /* PageOne */]]
    })
], PageOneModule);

//# sourceMappingURL=page-one.module.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_restful_api__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_in_detail__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_sound__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__ = __webpack_require__(209);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageOne; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-page-one',template:/*ion-inline-start:"C:\xampp\htdocs\latihan\ionic2\ionicBlank\src\pages\page-one\page-one.html"*/'<ion-header>\n  <ion-navbar color="bukalapak">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-10>\n          <ion-searchbar (ionInput)="searchItems($event)"></ion-searchbar>\n        </ion-col>\n        <ion-col col-2>\n          <ion-buttons style="position: absolute;">\n            <button ion-button (click)="goToPage(\'Cart\')" end>\n              <ion-icon name="cart"></ion-icon>\n            </button>\n            <ion-badge>{{ jumlahOrder }}</ion-badge>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div id="autocomplete" *ngIf="hasil">\n    <ion-list>\n      <ion-item *ngFor="let item of hasil" tappable (click)="toDetail(item)">{{ item.item }}</ion-item>\n    </ion-list>\n  </div>\n\n  <div id="slide">\n    <ion-slides pager autoplay="3000" speed="900" loop="true">\n      <ion-slide *ngFor="let slide of slides">\n        <img [src]="slide.image" class="slide-image">\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n  <div id="etalase">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-6 tappable (click)="goToPage(\'FoodList\')">\n          <img src="./assets/img/food.png" />\n        </ion-col>\n        <ion-col>\n          <img src="./assets/img/drink.png" tappable (click)="goToPage(\'DrinkList\')">\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12>\n          <img src="./assets/img/cake.png" tappable (click)="goToPage(\'WesternList\')">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-spinner name="crescent" *ngIf="stillLoading"></ion-spinner>\n  </div>\n\n\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\latihan\ionic2\ionicBlank\src\pages\page-one\page-one.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_service_in_detail__["a" /* ServiceInDetail */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Events */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_keyboard__["a" /* Keyboard */],
        __WEBPACK_IMPORTED_MODULE_4__providers_sound__["a" /* Sound */],
        __WEBPACK_IMPORTED_MODULE_2__providers_restful_api__["a" /* RestfulApi */]])
], PageOne);

//# sourceMappingURL=page-one.js.map

/***/ })

});
//# sourceMappingURL=10.main.js.map