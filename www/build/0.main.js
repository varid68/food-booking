webpackJsonp([0],{

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__favorit__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__ = __webpack_require__(307);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoritModule", function() { return FavoritModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var FavoritModule = (function () {
    function FavoritModule() {
    }
    return FavoritModule;
}());
FavoritModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__favorit__["a" /* Favorit */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__favorit__["a" /* Favorit */]),
            __WEBPACK_IMPORTED_MODULE_3__pipes_pipes_module__["a" /* PipesModule */],
            __WEBPACK_IMPORTED_MODULE_4__directives_directives_module__["a" /* DirectivesModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__favorit__["a" /* Favorit */]]
    })
], FavoritModule);

//# sourceMappingURL=favorit.module.js.map

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

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sound__ = __webpack_require__(104);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Favorit; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Favorit = (function () {
    function Favorit(navCtrl, navParams, actionSheetCtrl, renderer, element, sound, statusBar) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.renderer = renderer;
        this.element = element;
        this.sound = sound;
        this.statusBar = statusBar;
        this.sedangFocus = false;
        this.checker = [{}];
        this.itemSelected = [];
        this.jumlah = this.countItemClicked();
    }
    Favorit.prototype.ionViewWillEnter = function () {
        this.favorit = JSON.parse(localStorage.getItem('favorit'));
    };
    // buat array kosong sesuai jumlah dari item favorit
    Favorit.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.cards.forEach(function (item, index) {
                _this.checker[index] = null;
            });
        }, 300);
    };
    // hapus semua item favorit
    Favorit.prototype.deleteAll = function () {
        var _this = this;
        this.sound.play('tabSwitch');
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Modify your favorit',
            buttons: [
                {
                    text: 'Hapus Semua',
                    role: 'destructive',
                    handler: function () {
                        _this.sound.play('tabSwitch');
                        localStorage.removeItem('favorit');
                        _this.favorit = null;
                    }
                }, {
                    text: 'Archive',
                    handler: function () {
                        console.log('Archive clicked');
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    // ke detail item
    Favorit.prototype.toDetail = function (myList, ev, index) {
        if (!this.sedangFocus) {
            this.sound.play('tabSwitch');
            this.navCtrl.push('DetailItem', {
                id: myList.id,
                item: myList.item,
                harga: myList.harga
            });
        }
        else {
            if (this.checker[index] == 'clicked') {
                this.renderer.setElementStyle(ev.srcEvent.srcElement.offsetParent.firstElementChild, 'opacity', '1');
                this.checker[index] = null;
                this.itemSelected.splice(index, 1);
                this.countItemClicked();
            }
            else {
                this.renderer.setElementStyle(ev.srcEvent.srcElement.offsetParent.firstElementChild, 'opacity', '0.7');
                this.checker[index] = 'clicked';
                this.itemSelected.push(myList.item);
                this.countItemClicked();
            }
        }
    };
    // handle focus saat pertama kali press
    Favorit.prototype.handleFocus = function (myList, index) {
        var _this = this;
        this.sedangFocus = true;
        this.checker[index] = 'clicked';
        this.itemSelected.push(myList.item);
        this.countItemClicked();
        setTimeout(function () {
            _this.statusBar.backgroundColorByHexString('#00695c');
        }, 150);
    };
    // hitung jumlah item yang diseleksi untuk di hapus
    Favorit.prototype.countItemClicked = function () {
        var _this = this;
        var jumlah = 0;
        this.checker.forEach(function (item, index) {
            if (item == 'clicked')
                jumlah++;
        });
        if (jumlah == 0) {
            this.sedangFocus = false;
            this.itemSelected.length = 0;
            setTimeout(function () {
                _this.statusBar.backgroundColorByHexString('#673ab7');
            }, 150);
        }
        return this.jumlah = jumlah;
    };
    // hapus item berdasarkan seleksi user
    Favorit.prototype.deleteSeveral = function () {
        var ambilJson = JSON.parse(localStorage.getItem('favorit'));
        var cari = this.itemSelected;
        // for (var i=0; i<cari.length; i++) {
        //   let k = ambilJson.map(function(e) {
        //     return e.item
        //   }).indexOf(cari[i]);
        //   ambilJson.splice(k,1);
        // }
        this.countItemClicked();
        this.favorit = ambilJson;
        localStorage.setItem('favorit', JSON.stringify(ambilJson));
        this.sedangFocus = false;
    };
    // keluar mode fokus
    Favorit.prototype.exitFocus = function () {
        var _this = this;
        this.favorit = JSON.parse(localStorage.getItem('favorit'));
        this.sedangFocus = false;
        this.cards.forEach(function (item, index) {
            _this.cards[index] = null;
        });
        this.itemSelected.length = 0;
        setTimeout(function () {
            _this.statusBar.backgroundColorByHexString('#673ab7');
        }, 150);
    };
    Favorit.prototype.debug = function () {
        console.log(this.checker);
        console.log(this.itemSelected);
    };
    return Favorit;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Card */]),
    __metadata("design:type", Object)
], Favorit.prototype, "cards", void 0);
Favorit = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-favorit',template:/*ion-inline-start:"C:\xampp\htdocs\latihan\ionic2\ionicBlank\src\pages\favorit\favorit.html"*/'<ion-header>\n	<div id="not-focus">\n		<ion-navbar color="bukalapak" *ngIf="!sedangFocus">\n			<ion-buttons end>\n				<button ion-button (tap)="deleteAll()">\n					<ion-icon name="more"></ion-icon>\n				</button>\n			</ion-buttons>\n		</ion-navbar>\n	</div>\n\n	<div id="on-focus">\n		<ion-navbar color="bukalapak2" *ngIf="sedangFocus">\n			<ion-grid>\n				<ion-row>\n					<ion-col col-2>\n						<ion-icon name="checkbox-outline" id="first" tappable (tap)="exitFocus()"></ion-icon>\n					</ion-col>\n					<ion-col col-8>\n						<p>{{ jumlah }} item terpilih</p>\n					</ion-col>\n					<ion-col col-2>\n						<ion-buttons end>\n							<button ion-button (tap)="deleteSeveral()">\n								<ion-icon name="trash" id="twice"></ion-icon>\n							</button>\n						</ion-buttons>\n					</ion-col>\n				</ion-row>\n			</ion-grid>\n		</ion-navbar>\n	</div>\n</ion-header>\n\n\n<ion-content>\n\n	<div id="list-item">\n		<ion-row>\n			<ion-col col-6 *ngFor="let myList of favorit; let i = index">\n				<ion-card tappable (tap)="toDetail(myList,$event,i)" touch-focus (onFocus)="handleFocus(myList,i)">\n			  	<img src="assets/img/list.png"/>\n			  	<ion-card-content>\n			    	<p>\n			      	<strong>{{ myList.item }}</strong><br>\n			      	{{ myList.harga | rupiah }}\n			    	</p>\n	  			</ion-card-content>\n				</ion-card>\n			</ion-col>\n		</ion-row>\n	</div>\n<button ion-button (click)="debug()">debug</button>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\latihan\ionic2\ionicBlank\src\pages\favorit\favorit.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ActionSheetController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Renderer */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__providers_sound__["a" /* Sound */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_sound__["a" /* Sound */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _g || Object])
], Favorit);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=favorit.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map