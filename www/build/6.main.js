webpackJsonp([6],{

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkout__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(305);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutModule", function() { return CheckoutModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CheckoutModule = (function () {
    function CheckoutModule() {
    }
    return CheckoutModule;
}());
CheckoutModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__checkout__["a" /* Checkout */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__checkout__["a" /* Checkout */]), __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__checkout__["a" /* Checkout */]]
    })
], CheckoutModule);

//# sourceMappingURL=checkout.module.js.map

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

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_restful_api__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sound__ = __webpack_require__(104);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Checkout; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Checkout = (function () {
    function Checkout(navCtrl, navParams, alertCtrl, loadingCtrl, sound, restfulApi) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.sound = sound;
        this.restfulApi = restfulApi;
        this.jual = {};
        this.laba = {};
        this.pembeli = {};
        this.loading = false;
    }
    Checkout.prototype.ionViewDidLoad = function () {
        var cart = JSON.parse(localStorage.getItem('cart'));
        this.id = this.navParams.get('id');
        this.getKecamatan();
        this.jual = { kode: this.createKode(), waktu: this.createDate(), status: 'ordered' };
        this.laba = { kode: this.jual.kode };
        // insert variabel dari keranjang ke variabel lain untuk di post API
        for (var i in cart) {
            if (cart[i].id == this.id)
                this.jual.item = cart[i].item;
            this.jual.jumlah = cart[i].jumlah;
            this.total = cart[i].total;
            this.pembeli.kode = this.jual.kode;
            this.laba.jumlah = cart[i].jumlah;
            this.laba.margin = cart[i].total / cart[i].jumlah - cart[i].modal;
            this.laba.laba = this.laba.margin * this.laba.jumlah;
        }
    };
    // tampilkan desa sesuai kecamatan yang dipilih
    Checkout.prototype.getDesa = function (ev) {
        var _this = this;
        this.loading = true;
        this.restfulApi.getDesa(ev)
            .subscribe(function (desa) {
            _this.desa = desa;
            _this.loading = false;
        }, function (error) { return _this.errorMessage = error; });
    };
    //tampilkan kecamatan
    Checkout.prototype.getKecamatan = function () {
        var _this = this;
        this.restfulApi.getKecamatan()
            .subscribe(function (kecamatan) { _this.kecamatan = kecamatan; }, function (error) { return _this.errorMessage = error; });
    };
    // post API 3 tabel
    Checkout.prototype.postData = function () {
        var _this = this;
        this.sound.play('tabSwitch');
        this.presentLoading();
        this.restfulApi.postJualDetail(this.jual)
            .subscribe(function (hasil) { console.log('hai'); });
        this.restfulApi.postPembeli(this.pembeli)
            .subscribe(function (hasil) { console.log('hai'); });
        this.restfulApi.postLaba(this.laba)
            .subscribe(function (hasil) { return _this.showAlert(); });
    };
    // tampilkan alert 
    Checkout.prototype.showAlert = function () {
        var _this = this;
        this.loader.dismiss();
        var alert = this.alertCtrl.create({
            subTitle: 'Terima kasih , Pesanan akan segera kami proses',
            buttons: [
                {
                    text: 'OK',
                    handler: function (data) {
                        _this.navCtrl.popToRoot();
                    }
                }
            ]
        });
        alert.present();
        this.removeCart();
    };
    //show loading
    Checkout.prototype.presentLoading = function () {
        this.loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        this.loader.present();
    };
    // hapus cart setelah checkout
    Checkout.prototype.removeCart = function () {
        var ambil = JSON.parse(localStorage.getItem('cart'));
        for (var i in ambil) {
            if (ambil[i].id == this.id) {
                ambil.splice(i, 1);
                localStorage.setItem('cart', JSON.stringify(ambil));
            }
        }
    };
    // membuat kode order
    Checkout.prototype.createKode = function () {
        var kode = Math.random().toString(36).substr(2, 5);
        return kode;
    };
    // menampilkan tanggal dan jam order
    Checkout.prototype.createDate = function () {
        var full = new Date();
        var tanggal = full.getDate();
        var bulan = full.getMonth() + 1;
        var tahun = full.getFullYear();
        var jam = full.getHours() + ':' + full.getMinutes();
        var hasil = tahun + '-' + bulan + '-' + tanggal + ' ' + jam;
        return hasil;
    };
    //play sound
    Checkout.prototype.play = function () {
        this.sound.play('tabSwitch');
    };
    return Checkout;
}());
Checkout = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-checkout',template:/*ion-inline-start:"C:\xampp\htdocs\latihan\ionic2\ionicBlank\src\pages\checkout\checkout.html"*/'<ion-header>\n  <ion-navbar color="bukalapak">\n    <ion-title>Selesaikan Pesanan</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n	<ion-card>\n		<ion-card-header>\n			Data Pembeli\n		</ion-card-header>\n		<ion-card-content>\n			<ion-list>\n				<ion-item>\n					<ion-label floating>Nama Pembeli</ion-label>\n					<ion-input type="text" required [(ngModel)]="pembeli.nama" #nama="ngModel"></ion-input>\n				</ion-item>\n				<div [hidden]="nama.valid || nama.pristine">nama tidak boleh kosong!</div>\n				<ion-item>\n					<ion-label floating>Email</ion-label>\n					<ion-input type="text"></ion-input>\n				</ion-item>\n				<ion-item>\n					<ion-label floating>No Telepon Pembeli</ion-label>\n					<ion-input type="text" required [(ngModel)]="pembeli.hp" #hp="ngModel"></ion-input>\n				</ion-item>\n				<div [hidden]="hp.valid || hp.pristine">no. HP tidak boleh kosong!</div>\n			</ion-list>\n			<p text-right>0/15</p>\n		</ion-card-content>\n	</ion-card>\n\n	<ion-card>\n		<ion-card-header>\n			Alamat Pengiriman\n		</ion-card-header>\n		<ion-card-content>\n			<ion-list>\n				<ion-item>\n					<ion-label stacked>Kecamatan</ion-label>\n					<ion-select placeholder="Pilih Kecamatan" interface="popover" (ionChange)="getDesa($event)" required [(ngModel)]="pembeli.kecamatan" #kec="ngModel">\n						<ion-option *ngFor="let item of kecamatan" value="{{ item.nama }}">{{ item.nama | lowercase }}</ion-option>\n					</ion-select>\n				</ion-item>\n\n				<div *ngIf="loading"><ion-spinner name="crescent"></ion-spinner> please wait ..</div>\n				<ion-item>\n					<ion-label stacked>Kampung/Desa</ion-label>\n					<ion-select placeholder="Pilih Desa" interface="popover" required [(ngModel)]="pembeli.desa" #kampung="ngModel">\n						<ion-option *ngFor="let item of desa">{{ item.nama | lowercase }}</ion-option>\n					</ion-select>\n				</ion-item>\n\n				<ion-item>\n					<ion-label floating>Alamat</ion-label>\n					<ion-input type="text" required [(ngModel)]="pembeli.lengkap" #lengkap="ngModel"></ion-input>\n				</ion-item>\n				<div [hidden]="lengkap.valid || lengkap.pristine">alamat lengkap tidak boleh kosong!</div>\n			</ion-list>\n		</ion-card-content>\n	</ion-card>\n\n	<div id="deskripsi-item">\n		<ion-card>\n			<ion-grid>\n				<ion-row>\n					<ion-col col-2 class="satu">\n						<p> Item</p>\n					</ion-col>\n					<ion-col col-10 class="satu">\n						<p text-right>Subtotal</p>\n					</ion-col>\n				</ion-row>\n				<ion-row>\n					<ion-col col-2 class="dua">\n						<img src="http://placehold.it/45x50">\n					</ion-col>\n					<ion-col col-7 class="dua">\n						<p>{{ jual.item |uppercase }}</p>\n						<p>{{ jual.jumlah }}item</p>\n						<p>{{ total / jual.jumlah | rupiah }}</p>\n					</ion-col>\n					<ion-col col-3>\n						<br><br>\n						<p class="tiga" text-right>{{ total | rupiah}}</p>\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n		</ion-card>\n	</div>\n\n	<div id="bawah">\n		<ion-card>\n			<ion-card-content>\n				<button ion-button full color="bukalapak" (click)="postData()" [disabled]="!nama.valid || !hp.valid || !kec.valid || !kampung.valid || !lengkap.valid">lanjut</button>\n			</ion-card-content>\n		</ion-card>\n	</div>\n			\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\latihan\ionic2\ionicBlank\src\pages\checkout\checkout.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_sound__["a" /* Sound */],
        __WEBPACK_IMPORTED_MODULE_2__providers_restful_api__["a" /* RestfulApi */]])
], Checkout);

//# sourceMappingURL=checkout.js.map

/***/ })

});
//# sourceMappingURL=6.main.js.map