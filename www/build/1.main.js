webpackJsonp([1],{

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(307);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartModule", function() { return CartModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CartModule = (function () {
    function CartModule() {
    }
    return CartModule;
}());
CartModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__cart__["a" /* Cart */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cart__["a" /* Cart */]), __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */], __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* DirectivesModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__cart__["a" /* Cart */]]
    })
], CartModule);

//# sourceMappingURL=cart.module.js.map

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

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__swipe_to_delete_swipe_to_delete__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__touch_focus_touch_focus__ = __webpack_require__(309);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DirectivesModule = (function () {
    function DirectivesModule() {
    }
    return DirectivesModule;
}());
DirectivesModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_1__swipe_to_delete_swipe_to_delete__["a" /* SwipeToDelete */],
            __WEBPACK_IMPORTED_MODULE_2__touch_focus_touch_focus__["a" /* TouchFocus */]
        ],
        imports: [],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__swipe_to_delete_swipe_to_delete__["a" /* SwipeToDelete */],
            __WEBPACK_IMPORTED_MODULE_2__touch_focus_touch_focus__["a" /* TouchFocus */]
        ]
    })
], DirectivesModule);

//# sourceMappingURL=directives.module.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwipeToDelete; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SwipeToDelete = (function () {
    function SwipeToDelete(renderer, element) {
        this.renderer = renderer;
        this.element = element;
        this.overSlide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* EventEmitter */]();
        this.triggered = false;
    }
    SwipeToDelete.prototype.handle = function (ev) {
        if (Math.abs(ev.getSlidingPercent()) > 1.8) {
            this.triggered = true;
            this.renderer.setElementStyle(this.element.nativeElement, 'transition', '0.3s linear');
            this.renderer.setElementStyle(this.element.nativeElement, 'opacity', '0');
            this.overSlide.emit(true);
        }
    };
    return SwipeToDelete;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Output */])(),
    __metadata("design:type", Object)
], SwipeToDelete.prototype, "overSlide", void 0);
SwipeToDelete = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Directive */])({
        selector: '[swipe-to-delete]',
        host: {
            '(ionDrag)': 'handle($event)'
        }
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Renderer */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
], SwipeToDelete);

//# sourceMappingURL=swipe-to-delete.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TouchFocus; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TouchFocus = (function () {
    function TouchFocus(renderer, element) {
        this.renderer = renderer;
        this.element = element;
        this.onFocus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* EventEmitter */]();
    }
    TouchFocus.prototype.handle = function (ev) {
        this.renderer.setElementStyle(this.element.nativeElement, 'opacity', '0.7');
        this.onFocus.emit(true);
    };
    return TouchFocus;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Output */])(),
    __metadata("design:type", Object)
], TouchFocus.prototype, "onFocus", void 0);
TouchFocus = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Directive */])({
        selector: '[touch-focus]',
        host: {
            '(press)': 'handle($event)'
        }
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Renderer */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
], TouchFocus);

//# sourceMappingURL=touch-focus.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_sound__ = __webpack_require__(104);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cart; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-cart',template:/*ion-inline-start:"C:\xampp\htdocs\latihan\ionic2\ionicBlank\src\pages\cart\cart.html"*/'<ion-header>\n	<ion-toolbar color="bukalapak">\n  	<ion-grid>\n  		<ion-row>\n  			<ion-col col-2>\n  				<ion-buttons>\n  					<button ion-button (click)="back()">\n  						<ion-icon name="arrow-round-back"></ion-icon>\n  					</button>\n  				</ion-buttons>\n  			</ion-col>\n  			<ion-col col-8>\n  				<ion-title text-center #coba>\n  					Keranjang\n  				</ion-title>\n  			</ion-col>\n  			<ion-col col-2>\n  				<ion-buttons>\n  					<button ion-button (click)="toHome()" end>\n  						<ion-icon name="home"></ion-icon>\n  					</button>\n  				</ion-buttons>\n  			</ion-col>\n  		</ion-row>\n  	</ion-grid> \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n		<ion-list *ngFor="let item of cart">\n			<ion-item-sliding (overSlide)="handleSwipe(item.id)" swipe-to-delete>\n				<ion-item>\n					<ion-grid>\n						<ion-row>\n							<ion-col col-4>\n								<img src="assets/img/cart.png">\n							</ion-col>\n							<ion-col col-8 class="deskripsi-item">\n								<p text-uppercase>{{ item.item }}</p>\n								<p>{{ item.total / item.jumlah | rupiah }} X [{{ item.jumlah }}]</p>\n								<p>Total : {{ item.total | rupiah }}</p>\n							</ion-col>\n						</ion-row>\n					</ion-grid>\n				</ion-item>\n				<ion-item-options side="right">\n					<button ion-button color="secondary" (click)="checkoutItem(item.id)">bayar</button>\n				</ion-item-options>\n			</ion-item-sliding>\n		</ion-list>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid>\n    	<ion-row>\n    		<ion-col col-5 id="jumlah-item">\n    			<p>{{ jumlahOrder }} item</p>\n    			<p>{{ total | rupiah }}</p>\n    		</ion-col>\n    		<ion-col col-7 id="checkout">\n    			<button ion-button full color="secondary" (click)="checkoutItems()">chekout</button>\n    		</ion-col>\n    	</ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\xampp\htdocs\latihan\ionic2\ionicBlank\src\pages\cart\cart.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_sound__["a" /* Sound */]])
], Cart);

//# sourceMappingURL=cart.js.map

/***/ })

});
//# sourceMappingURL=1.main.js.map