import { NgModule } from '@angular/core';

import { SwipeToDelete } from './swipe-to-delete/swipe-to-delete';
import { TouchFocus } from './touch-focus/touch-focus';

@NgModule({
	declarations:[
		SwipeToDelete,
		TouchFocus],
	imports:[],
	exports:[
		SwipeToDelete,
		TouchFocus]
})

export class DirectivesModule {}