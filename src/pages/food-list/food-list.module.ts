import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodList } from './food-list';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
	declarations:[FoodList],
	imports:[IonicPageModule.forChild(FoodList),PipesModule],
	exports:[FoodList]
})

export class FoodListModule {}