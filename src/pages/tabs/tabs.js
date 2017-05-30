var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, Renderer, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Sound } from '../../providers/sound';
import { Keyboard } from '@ionic-native/keyboard';
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
    ViewChild('myTabs'),
    __metadata("design:type", Object)
], Tabs.prototype, "tabRef", void 0);
Tabs = __decorate([
    IonicPage(),
    Component({
        selector: 'page-tabs',
        templateUrl: 'tabs.html',
    }),
    __metadata("design:paramtypes", [NavController,
        NavParams,
        ElementRef,
        Renderer,
        Events,
        Sound,
        Keyboard])
], Tabs);
export { Tabs };
//# sourceMappingURL=tabs.js.map