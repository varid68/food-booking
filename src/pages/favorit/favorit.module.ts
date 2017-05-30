import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Favorit } from './favorit';
import { PipesModule } from '../../pipes/pipes.module';
import { DirectivesModule } from '../../directives/directives.module';

@NgModule({
	declarations:[Favorit],
	imports:[IonicPageModule.forChild(Favorit),
		PipesModule,
		DirectivesModule],
	exports:[Favorit]
})

export class FavoritModule {}