import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WesternList } from './western-list';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
	declarations:[WesternList],
	imports:[IonicPageModule.forChild(WesternList),PipesModule],
	exports:[WesternList]
})

export class WesternListModule {}