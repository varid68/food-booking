import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Checkout } from './checkout';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
	declarations:[Checkout],
	imports:[IonicPageModule.forChild(Checkout),PipesModule],
	exports:[Checkout]
})

export class CheckoutModule {}