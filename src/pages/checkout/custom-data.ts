export class Pembeli {
	kode?:string;
	nama?:string;
	hp?:string;
	lengkap?:string;
	desa?:string;
	kecamatan?:string;
}

export class Laba {
	kode?:string;
  margin?:number;
  jumlah?:number;
  laba?:number;
}

export class Jual {
	kode?:string;
  waktu?:number|string;
  item?:string;
  jumlah?:number;
  status?:string;
}