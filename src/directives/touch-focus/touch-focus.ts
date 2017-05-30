import { Directive, Renderer, ElementRef, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[touch-focus]', // Attribute selector
  host: {
  	'(press)':'handle($event)'
  }
})

export class TouchFocus {
	@Output() onFocus:any = new EventEmitter();

  constructor(
  	public renderer: Renderer,
  	public element: ElementRef) {}

  handle(ev:any){
  	this.renderer.setElementStyle(this.element.nativeElement,'opacity','0.7');
  	this.onFocus.emit(true);
  }

}
