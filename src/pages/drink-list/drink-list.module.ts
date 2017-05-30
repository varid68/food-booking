import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DrinkList } from './drink-list';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
	declarations:[DrinkList],
	imports:[IonicPageModule.forChild(DrinkList),PipesModule],
	exports:[DrinkList]
})

export class DrinkListModule {}