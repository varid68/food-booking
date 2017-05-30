webpackJsonp([8],{

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs__ = __webpack_require__(319);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsModule", function() { return TabsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabsModule = (function () {
    function TabsModule() {
    }
    return TabsModule;
}());
TabsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* Tabs */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* Tabs */])],
        exports: [__WEBPACK_IMPORTED_MODULE_2__tabs__["a" /* Tabs */]]
    })
], TabsModule);

//# sourceMappingURL=tabs.module.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_sound__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__ = __webpack_require__(209);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tabs; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Tabs = (function () {
    function Tabs(navCtrl, navParams, elementRef, renderer, event, sound, keyboard) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.event = event;
        this.sound = sound;
        this.keyboard = keyboard;
        this.home = 'PageOne';
        this.favorit = 'Favorit';
        this.transaksi = 'Transaksi';
        this.profil = 'Profil';
    }
    // sembunyikan tabs jika keyboard tampil
    Tabs.prototype.ionViewDidLoad = function () {
        var _this = this;
        var tabs = this.queryElement(this.elementRef.nativeElement, '.tabbar');
        this.event.subscribe('hideTabs', function () {
            _this.renderer.setElementStyle(tabs, 'display', 'none');
            var SelectTab = _this.tabRef._elementRef.nativeElement;
            var content = _this.queryElement(SelectTab, '.scroll-content');
            _this.mb = content.style['margin-bottom'];
            _this.renderer.setElementStyle(content, 'margin-bottom', '0');
        });
        this.event.subscribe('showTabs', function () {
            _this.renderer.setElementStyle(tabs, 'display', '');
            var SelectTab = _this.tabRef._elementRef.nativeElement;
            var content = _this.queryElement(SelectTab, '.scroll-content');
            _this.renderer.setElementStyle(content, 'margin-bottom', _this.mb);
        });
    };
    Tabs.prototype.queryElement = function (elem, q) {
        return elem.querySelector(q);
    };
    Tabs.prototype.play = function () {
        this.sound.play('tabSwitch');
    };
    return Tabs;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('myTabs'),
    __metadata("design:type", Object)
], Tabs.prototype, "tabRef", void 0);
Tabs = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-tabs',template:/*ion-inline-start:"C:\xampp\htdocs\latihan\ionic2\ionicBlank\src\pages\tabs\tabs.html"*/'<ion-content>\n	<ion-tabs #myTabs>\n		<ion-tab (ionSelect)="play()" [root]="home" tabTitle="home" tabIcon="home" tabsHideOnSubPages="true"></ion-tab>\n		<ion-tab (ionSelect)="play()" [root]="favorit" tabTitle="favorit" tabIcon="heart" tabsHideOnSubPages="true"></ion-tab>\n		<ion-tab (ionSelect)="play()" [root]="transaksi" tabTitle="transakasi" tabIcon="swap"></ion-tab>\n		<ion-tab (ionSelect)="play()" [root]="profil" tabTitle="profil" tabIcon="contact"></ion-tab>\n	</ion-tabs>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\latihan\ionic2\ionicBlank\src\pages\tabs\tabs.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Renderer */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Events */],
        __WEBPACK_IMPORTED_MODULE_2__providers_sound__["a" /* Sound */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__["a" /* Keyboard */]])
], Tabs);

//# sourceMappingURL=tabs.js.map

/***/ })

});
//# sourceMappingURL=8.main.js.map