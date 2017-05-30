import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Transaksi } from './transaksi';

@NgModule({
	declarations:[Transaksi],
	imports:[IonicPageModule.forChild(Transaksi)],
	exports:[Transaksi]
})

export class TransaksiModule {}