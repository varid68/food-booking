import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Jual, Laba, Pembeli } from '../pages/checkout/custom-data';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class RestfulApi {
	private urlFood = 'http://knaggy-make.000webhostapp.com/public/food';
	private urlDrink = 'http://knaggy-make.000webhostapp.com/public/drink';
	private urlWestern = 'http://knaggy-make.000webhostapp.com/public/western';
  private urlKecamatan = 'http://knaggy-make.000webhostapp.com/public/kecamatan';
  private urlPostJual = 'http://knaggy-make.000webhostapp.com/public/jual';
  private urlPostPembeli = 'http://knaggy-make.000webhostapp.com/public/pembeli';
  private urlPostLaba = 'http://knaggy-make.000webhostapp.com/public/laba';

  constructor(public http: Http) {}

  getFood(): Observable<any>{
  	return this.http.get(this.urlFood)
  		.map(this.extractData)
  		.catch(this.handleError);
  }

  getDrink(): Observable<any>{
  	return this.http.get(this.urlDrink)
  		.map(this.extractData)
  		.catch(this.handleError);
  }

  getWestern(): Observable<any>{
  	return this.http.get(this.urlWestern)
  		.map(this.extractData)
  		.catch(this.handleError);
  }

  search(term:string): Observable<any>{
    return this.http.get(`http://knaggy-make.000webhostapp.com/public/search/${term}`)
      .map((res) => {
        if (res.json().length == 0){
          return [{item:'tidak ada hasil'}];
        }
        else {
          return res.json();
        }
      }).catch(this.handleError);
  }

  getKecamatan():Observable<any[]>{
    return this.http.get(this.urlKecamatan)
      .map(this.extract)
      .catch(this.handleError);
  }

  getDesa(id:number):Observable<any[]>{
    return this.http.get(`http://knaggy-make.000webhostapp.com/public/desa/${id}`)
      .map(this.extract)
      .catch(this.handleError);
  }  

  postJualDetail(data:any):Observable<Jual[]>{
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    let options = new RequestOptions({headers:headers});
    let body = 'kode='+data.kode+'&waktu='+data.waktu+'&item='+data.item+'&jumlah='+data.jumlah+'&status='+data.status;

    return this.http.post(this.urlPostJual,body,options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  postPembeli(data:any):Observable<Pembeli[]>{
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    let options = new RequestOptions({headers:headers});
    let body = 'kode='+data.kode+'&nama='+data.nama+'&hp='+data.hp+'&alamat='+data.lengkap+' Desa. '+data.desa+' Kec. '+data.kecamatan;

    return this.http.post(this.urlPostPembeli,body,options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  postLaba(data:any):Observable<Laba[]>{
    let headers = new Headers({'Content-Type':'application/x-www-form-urlencoded'});
    let options = new RequestOptions({headers:headers});
    let body = 'kode='+data.kode+'&jumlah='+data.jumlah+'&margin='+data.margin+'&laba='+data.laba;

    return this.http.post(this.urlPostLaba,body,options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res :Response){
  	let body = res;
  	return body || {};
  }

  private extract(res :Response){
    let body = res.json();
    return body || {};
  }

  private handleError (error: Response | any) {
	  let errMsg: string;
	  if (error instanceof Response) {
	    const body = error.json() || '';
	    const err = body.error || JSON.stringify(body);
	    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
	  } else {
	    errMsg = error.message ? error.message : error.toString();
	  }
	  console.error(errMsg);
	  return Observable.throw(errMsg);
	}
}
