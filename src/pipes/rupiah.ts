import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rupiah',
})

export class Rupiah implements PipeTransform {
  transform(angka: any) {
    if (angka == null || angka == undefined)
      return false;
    else {
  	  if (typeof(angka) != 'string') {
  		  angka = angka.toString();
  	  }

  	  let reg = new RegExp('([0-9]+)([0-9]{3})');
  	  while (reg.test(angka)) angka = angka.replace(reg, '$1.$2');
      return 'Rp'+angka;
     }
  }
}
