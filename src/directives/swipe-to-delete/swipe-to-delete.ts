import { Directive, Output, EventEmitter, Renderer, ElementRef } from '@angular/core';

@Directive({
  selector: '[swipe-to-delete]', // Attribute selector
  host: {
  	'(ionDrag)':'handle($event)'
  }
})

export class SwipeToDelete {
	@Output() overSlide:any = new EventEmitter();
	triggered:boolean=false;

  constructor(
  	public renderer:Renderer,
  	public element:ElementRef) {}

  handle(ev){
    if(Math.abs(ev.getSlidingPercent()) > 1.8){
 
    	this.triggered = true;
      this.renderer.setElementStyle(this.element.nativeElement, 'transition', '0.3s linear');
      this.renderer.setElementStyle(this.element.nativeElement, 'opacity', '0');
      this.overSlide.emit(true);
    }
  }

}