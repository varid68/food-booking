var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
var RestfulApi = (function () {
    function RestfulApi(http) {
        this.http = http;
        this.urlFood = 'https://knaggy-make.000webhostapp.com/public/food';
        this.urlDrink = 'https://knaggy-make.000webhostapp.com/public/drink';
        this.urlWestern = 'https://knaggy-make.000webhostapp.com/public/western';
        this.urlKecamatan = 'https://knaggy-make.000webhostapp.com/public/kecamatan';
        this.urlPostJual = 'https://knaggy-make.000webhostapp.com/public/jual';
        this.urlPostPembeli = 'https://knaggy-make.000webhostapp.com/public/pembeli';
        this.urlPostLaba = 'https://knaggy-make.000webhostapp.com/public/laba';
    }
    RestfulApi.prototype.getFood = function () {
        return this.http.get(this.urlFood)
            .map(this.extractData)
            .catch(this.handleError);
    };
    RestfulApi.prototype.getDrink = function () {
        return this.http.get(this.urlDrink)
            .map(this.extractData)
            .catch(this.handleError);
    };
    RestfulApi.prototype.getWestern = function () {
        return this.http.get(this.urlWestern)
            .map(this.extractData)
            .catch(this.handleError);
    };
    RestfulApi.prototype.search = function (term) {
        return this.http.get("http://knaggy-make.000webhostapp.com/public/search/" + term)
            .map(function (res) {
            if (res.json().length == 0) {
                return [{ item: 'tidak ada hasil' }];
            }
            else {
                return res.json();
            }
        }).catch(this.handleError);
    };
    RestfulApi.prototype.getKecamatan = function () {
        return this.http.get(this.urlKecamatan)
            .map(this.extractData)
            .catch(this.handleError);
    };
    RestfulApi.prototype.getDesa = function (id) {
        return this.http.get("http://knaggy-make.000webhostapp.com/public/desa/" + id)
            .map(this.extractData)
            .catch(this.handleError);
    };
    RestfulApi.prototype.postJualDetail = function (data) {
        var headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new RequestOptions({ headers: headers });
        var body = 'kode=' + data.kode + '&waktu=' + data.waktu + '&item=' + data.item + '&jumlah=' + data.jumlah + '&status=' + data.status;
        return this.http.post(this.urlPostJual, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    RestfulApi.prototype.postPembeli = function (data) {
        var headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new RequestOptions({ headers: headers });
        var body = 'kode=' + data.kode + '&nama=' + data.nama + '&hp=' + data.hp + '&alamat=' + data.lengkap + ' Desa. ' + data.desa + ' Kec. ' + data.kecamatan;
        return this.http.post(this.urlPostPembeli, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    RestfulApi.prototype.postLaba = function (data) {
        var headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new RequestOptions({ headers: headers });
        var body = 'kode=' + data.kode + '&jumlah=' + data.jumlah + '&margin=' + data.margin + '&laba=' + data.laba;
        return this.http.post(this.urlPostLaba, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    RestfulApi.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    RestfulApi.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    };
    return RestfulApi;
}());
RestfulApi = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], RestfulApi);
export { RestfulApi };
//# sourceMappingURL=restful-api.js.map