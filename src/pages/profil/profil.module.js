var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Profil } from './profil';
var ProfilModule = (function () {
    function ProfilModule() {
    }
    return ProfilModule;
}());
ProfilModule = __decorate([
    NgModule({
        declarations: [Profil],
        imports: [IonicPageModule.forChild(Profil)],
        exports: [Profil]
    })
], ProfilModule);
export { ProfilModule };
//# sourceMappingURL=profil.module.js.map