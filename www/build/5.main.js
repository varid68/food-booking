webpackJsonp([5],{

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_item__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(305);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailItemModule", function() { return DetailItemModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DetailItemModule = (function () {
    function DetailItemModule() {
    }
    return DetailItemModule;
}());
DetailItemModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__detail_item__["a" /* DetailItem */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__detail_item__["a" /* DetailItem */]), __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__detail_item__["a" /* DetailItem */]]
    })
], DetailItemModule);

//# sourceMappingURL=detail-item.module.js.map

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

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_sound__ = __webpack_require__(104);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailItem; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailItem = (function () {
    function DetailItem(navCtrl, navParams, sound, alertCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sound = sound;
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.batas = true;
        this.icon = 'star-outline';
        this.favoritCheck = false;
        this.id_produk = this.navParams.get('id');
        this.item = this.navParams.get('item');
        this.harga = this.navParams.get('harga');
        this.modal = this.navParams.get('modal');
        this.total = this.harga;
        this.jumlah = 1;
        this.checkFavorit();
    }
    DetailItem.prototype.goBack = function () {
        this.sound.play('tabSwitch');
        this.navCtrl.pop();
    };
    DetailItem.prototype.checkFavorit = function () {
        var check = JSON.parse(localStorage.getItem('favorit'));
        for (var i in check) {
            if (check[i].id == this.id_produk) {
                this.icon = "star";
                this.favoritCheck = true;
            }
        }
    };
    DetailItem.prototype.favorit = function () {
        this.sound.play('tabSwitch');
        var favorit = {
            id: this.id_produk,
            item: this.item,
            harga: this.harga
        };
        if (!this.favoritCheck) {
            var ambil = JSON.parse(localStorage.getItem('favorit'));
            if (ambil == null || ambil.length == 0) {
                localStorage.setItem('favorit', JSON.stringify([favorit]));
                this.favoritCheck = true;
            }
            else {
                for (var i in ambil) {
                    if (ambil[i].id == this.id_produk) {
                        ambil.splice(i, 1);
                        ambil.push(favorit);
                        this.favoritCheck = true;
                    }
                    else {
                        ambil.push(favorit);
                        localStorage.setItem('favorit', JSON.stringify(ambil));
                        this.favoritCheck = true;
                        break;
                    }
                }
            }
            this.alertFavorit();
            this.icon = 'star';
        }
    };
    DetailItem.prototype.alertFavorit = function () {
        var alert = this.alertCtrl.create({
            subTitle: 'terima Kasih, Item Telah Ditambhkan ke list Favorit',
            buttons: ['ok Bro']
        });
        alert.present();
    };
    DetailItem.prototype.minusJumlah = function () {
        this.sound.play('tabSwitch');
        if (this.jumlah == 2) {
            this.batas = true;
        }
        this.jumlah--;
        this.total = this.total - this.harga;
    };
    DetailItem.prototype.plusJumlah = function () {
        this.sound.play('tabSwitch');
        if (this.jumlah >= 1) {
            this.batas = false;
        }
        this.jumlah++;
        this.total = this.jumlah * this.harga;
    };
    DetailItem.prototype.addToCart = function () {
        var _this = this;
        this.sound.play('tabSwitch');
        var cart = {
            id: this.id_produk,
            item: this.item,
            jumlah: this.jumlah,
            modal: this.modal,
            total: this.total
        };
        if (!localStorage.getItem('cart')) {
            localStorage.setItem('cart', JSON.stringify([cart]));
        }
        else {
            var ambil = JSON.parse(localStorage.getItem('cart'));
            for (var i in ambil) {
                if (ambil[i].id === this.id_produk) {
                    ambil.splice(i, 1);
                }
            }
            ambil.push(cart);
            localStorage.setItem('cart', JSON.stringify(ambil));
        }
        var confirm = this.alertCtrl.create({
            message: 'Terima Kasih, Pesanan anda telah ditambahkan ke keranjang',
            buttons: [
                {
                    text: 'Pesan lagi',
                    handler: function () {
                        _this.toHome();
                    }
                },
                {
                    text: 'Bayar',
                    handler: function () {
                        _this.bayar();
                    }
                }
            ]
        });
        confirm.present();
    };
    DetailItem.prototype.toHome = function () {
        this.sound.play('tabSwitch');
        this.navCtrl.popToRoot();
    };
    DetailItem.prototype.bayar = function () {
        this.sound.play('tabSwitch');
        this.navCtrl.push('Cart');
    };
    return DetailItem;
}());
DetailItem = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-detail-item',template:/*ion-inline-start:"C:\xampp\htdocs\latihan\ionic2\ionicBlank\src\pages\detail-item\detail-item.html"*/'<ion-header>\n\n  <ion-toolbar color="bukalapak">\n  	<ion-row>\n  		<ion-col col-2>\n  			<ion-buttons>\n    			<button ion-button end (click)="goBack()">\n    				<ion-icon name="arrow-round-back" end></ion-icon>\n    			</button>\n    		</ion-buttons>\n    	</ion-col>\n    	<ion-col col-8>\n    		<ion-title text-center>--</ion-title>\n    	</ion-col>\n    	<ion-col col-2>\n    		<ion-buttons>\n    			<button ion-button (click)="favorit()" [disabled]="favoritCheck" end>\n    				<ion-icon [name]="icon" end></ion-icon>\n    			</button>\n    		</ion-buttons>\n    	</ion-col>\n    </ion-row>\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content>\n\n	<img src="./assets/img/detail-item.png"/>\n\n	<ion-row>\n		<ion-col col-12>\n			<h4 text-center>{{ item }}</h4>\n			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </p>\n		</ion-col>\n	</ion-row>\n\n	<div id="button-jumlah">\n		<ion-grid>\n			<ion-row>\n				<ion-col no-padding>\n					<p no-margin id="choose-quantity" text-center>Choose Quantity</p>\n				</ion-col>\n			</ion-row>\n			<ion-row style="margin-top: -13px">\n				<ion-col col-6 offset-3>\n					<ion-row>\n						<ion-col col-4>\n							<button ion-button large color="danger" id="minus" [disabled]="batas" (click)="minusJumlah()"> - </button>\n						</ion-col>\n						<ion-col col-4 id="tampil-jumlah">\n							<ion-card>\n								<ion-card-header text-center>\n								{{ jumlah }}\n								</ion-card-header>\n							</ion-card>\n						</ion-col>\n						<ion-col col-4>\n							<button ion-button large color="danger" id="plus" (click)="plusJumlah()"> + </button>\n						</ion-col>\n					</ion-row>\n				</ion-col>\n			</ion-row>\n		</ion-grid>\n	</div>\n\n	<div id="deskripsi-harga">\n		<ion-grid>\n			<ion-row>\n				<ion-col col-6>\n					<p>Harga/item :</p>\n				</ion-col>\n				<ion-col>\n					<p text-right>{{ harga | rupiah }}</p>\n				</ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col col-6>\n					<p>Biaya antar :</p>\n				</ion-col>\n				<ion-col>\n					<p text-right>Rp.0</p>\n				</ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col col-6>\n					<p>Total harga :</p>\n				</ion-col>\n				<ion-col>\n					<p text-right id="total-harga">{{ total| rupiah }}</p>\n				</ion-col>\n			</ion-row>\n		</ion-grid>\n	</div>\n\n	<div id="button-keranjang">\n		<button ion-button full large color="secondary" (click)="addToCart()">Tambahkan ke Keranjang</button>\n	</div>\n		\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\latihan\ionic2\ionicBlank\src\pages\detail-item\detail-item.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_sound__["a" /* Sound */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
], DetailItem);

//# sourceMappingURL=detail-item.js.map

/***/ })

});
//# sourceMappingURL=5.main.js.map