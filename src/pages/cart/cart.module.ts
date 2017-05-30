import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Cart } from './cart';
import { PipesModule } from '../../pipes/pipes.module';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
	declarations:[Cart],
	imports:[IonicPageModule.forChild(Cart),PipesModule,DirectivesModule],
	exports:[Cart]
})

export class CartModule {}