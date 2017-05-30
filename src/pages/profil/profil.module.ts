import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Profil } from './profil';

@NgModule({
	declarations:[Profil],
	imports:[IonicPageModule.forChild(Profil)],
	exports:[Profil]
})

export class ProfilModule {}