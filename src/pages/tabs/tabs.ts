import { Component, ElementRef, Renderer, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

import { Sound } from '../../providers/sound';
import { Keyboard } from '@ionic-native/keyboard';

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})

export class Tabs {
  @ViewChild('myTabs') tabRef:any;
  
  mb:any;
	home = 'PageOne';
	favorit = 'Favorit';
	transaksi = 'Transaksi';
	profil = 'Profil';

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
    private elementRef: ElementRef,
    private renderer:Renderer,
    private event: Events,
    public sound:Sound,
    public keyboard:Keyboard) {
  }

  // sembunyikan tabs jika keyboard tampil
  ionViewDidLoad() {
    let tabs = this.queryElement(this.elementRef.nativeElement, '.tabbar');
    this.event.subscribe('hideTabs', () => {
      this.renderer.setElementStyle(tabs, 'display', 'none');
      let SelectTab = this.tabRef._elementRef.nativeElement;
      let content = this.queryElement(SelectTab, '.scroll-content');
      this.mb = content.style['margin-bottom'];
      this.renderer.setElementStyle(content, 'margin-bottom', '0')
    });
    this.event.subscribe('showTabs', () => {
      this.renderer.setElementStyle(tabs, 'display', '');
      let SelectTab = this.tabRef._elementRef.nativeElement;
      let content = this.queryElement(SelectTab, '.scroll-content');
      this.renderer.setElementStyle(content, 'margin-bottom', this.mb)
    })
  }
  
  queryElement(elem: HTMLElement, q: string): HTMLElement {
    return <HTMLElement>elem.querySelector(q);
  }

  play(){
    this.sound.play('tabSwitch');
  }

}
