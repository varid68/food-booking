webpackJsonp([2],{

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__western_list__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(305);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WesternListModule", function() { return WesternListModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var WesternListModule = (function () {
    function WesternListModule() {
    }
    return WesternListModule;
}());
WesternListModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__western_list__["a" /* WesternList */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__western_list__["a" /* WesternList */]), __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__western_list__["a" /* WesternList */]]
    })
], WesternListModule);

//# sourceMappingURL=western-list.module.js.map

/***/ }),

/***/ 305:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rupiah__ = __webpack_require__(306);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PipesModule = (function () {
    function PipesModule() {
    }
    return PipesModule;
}());
PipesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__rupiah__["a" /* Rupiah */]],
        imports: [],
        exports: [__WEBPACK_IMPORTED_MODULE_1__rupiah__["a" /* Rupiah */]]
    })
], PipesModule);

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rupiah; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Rupiah = (function () {
    function Rupiah() {
    }
    Rupiah.prototype.transform = function (angka) {
        if (angka == null || angka == undefined)
            return false;
        else {
            if (typeof (angka) != 'string') {
                angka = angka.toString();
            }
            var reg = new RegExp('([0-9]+)([0-9]{3})');
            while (reg.test(angka))
                angka = angka.replace(reg, '$1.$2');
            return 'Rp' + angka;
        }
    };
    return Rupiah;
}());
Rupiah = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Pipe */])({
        name: 'rupiah',
    })
], Rupiah);

//# sourceMappingURL=rupiah.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_restful_api__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_in_detail__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_sound__ = __webpack_require__(104);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WesternList; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WesternList = (function () {
    function WesternList(navCtrl, navParams, service, sound, loadingCtrl, alertCtrl, RestfulApi) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.sound = sound;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
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
            .subscribe(function (response) {
            if (response.status == 200) {
                _this.list = response.json();
                _this.loading.dismiss();
            }
            else {
                _this.loading.dismiss();
                _this.presentConfirm();
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    WesternList.prototype.presentConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Error Connection',
            message: 'Do you want to Reload?',
            buttons: [
                {
                    text: 'OK',
                    handler: function () {
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        alert.present();
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('fab'),
    __metadata("design:type", Object)
], WesternList.prototype, "fab", void 0);
WesternList = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-western-list',template:/*ion-inline-start:"C:\xampp\htdocs\latihan\ionic2\ionicBlank\src\pages\western-list\western-list.html"*/'<ion-header>\n\n  <ion-toolbar color="bukalapak">\n  	<ion-grid>\n  		<ion-row>\n        <ion-col col-2>\n          <ion-buttons>\n            <button ion-button (click)="back()">\n              <ion-icon name="arrow-round-back"></ion-icon>\n            </button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col col-2 offset-8>\n  				<ion-buttons>\n  					<button ion-button (click)="toCart()" end>\n  						<ion-icon name="cart"></ion-icon>\n  					</button>\n            <ion-badge>{{ jumlahOrder }}</ion-badge>\n  				</ion-buttons>\n  			</ion-col>\n  		</ion-row>\n  	</ion-grid> \n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content>\n\n	<div id="list-item">\n\n		<ion-row>\n			<ion-col col-6 *ngFor="let myList of list">\n				<ion-card tappable (click)="toDetail(myList)">\n			  	<img src="assets/img/list.png"/>\n			  	<ion-card-content>\n			    	<p>\n			      	<strong>{{ myList.item }}</strong><br>\n			      	{{ myList.jual | rupiah }}\n			    	</p>\n	  			</ion-card-content>\n				</ion-card>\n			</ion-col>\n		</ion-row>\n\n	</div>\n\n	<ion-fab bottom right #fab>\n    <button ion-fab color="bukalapak" (click)="play()">\n      <ion-icon name="funnel"></ion-icon>\n    </button>\n    <ion-fab-list side="top">\n      <div class="myFab">\n        <button ion-fab color="danger" (tap)="sort(\'nama\')"><ion-icon name="color-wand"></ion-icon></button>\n        <ion-label>nama A ~ Z</ion-label>\n      </div>\n      <div class="myFab">\n        <button ion-fab color="secondary" (tap)="sort(\'termurah\')"><ion-icon name="happy"></ion-icon></button>\n        <ion-label>termurah</ion-label>\n      </div>\n      <div class="myFab">\n        <button ion-fab color="jeruk" (tap)="sort(\'termahal\')"><ion-icon name="cash"></ion-icon></button>\n        <ion-label>termahal</ion-label>\n      </div>\n    </ion-fab-list>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\latihan\ionic2\ionicBlank\src\pages\western-list\western-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__providers_service_in_detail__["a" /* ServiceInDetail */],
        __WEBPACK_IMPORTED_MODULE_4__providers_sound__["a" /* Sound */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_restful_api__["a" /* RestfulApi */]])
], WesternList);

//# sourceMappingURL=western-list.js.map

/***/ })

});
//# sourceMappingURL=2.main.js.map