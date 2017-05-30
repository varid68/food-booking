import { Component, Renderer, ElementRef, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, Card } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';

import { Sound } from '../../providers/sound';

@IonicPage()
@Component({
  selector: 'page-favorit',
  templateUrl: 'favorit.html',
})

export class Favorit {
  @ViewChildren(Card) cards;

	favorit: string|number[];
  sedangFocus: boolean=false;
  checker =[{}];
  itemSelected: string[]=[];
  jumlah :number=this.countItemClicked();

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public actionSheetCtrl: ActionSheetController,
    public renderer: Renderer,
    public element: ElementRef,
    public sound:Sound, 
    public statusBar:StatusBar) {}

  ionViewWillEnter(){
  	this.favorit = JSON.parse(localStorage.getItem('favorit'));
  }

  // buat array kosong sesuai jumlah dari item favorit
  ngAfterViewInit(){
    setTimeout(() => {
      this.cards.forEach((item,index) => {
        this.checker[index] = null;
      })
    }, 300);
  }

  // hapus semua item favorit
  deleteAll(){
    this.sound.play('tabSwitch');
  	let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your favorit',
      buttons: [
        {
          text: 'Hapus Semua',
          role: 'destructive',
          handler: () => {
            this.sound.play('tabSwitch');
            localStorage.removeItem('favorit');
            this.favorit = null;
          }
        },{
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  // ke detail item
  toDetail(myList ,ev ,index){
    if (!this.sedangFocus){
      this.sound.play('tabSwitch');
    	this.navCtrl.push('DetailItem',{
    		id: myList.id,
    		item: myList.item,
    		harga: myList.harga
    	});
    }
    else {
      if (this.checker[index] == 'clicked'){
        this.renderer.setElementStyle(ev.srcEvent.srcElement.offsetParent.firstElementChild,'opacity','1');
        this.checker[index] = null;
        this.itemSelected.splice(index,1);
        this.countItemClicked();
      }
      else {
        this.renderer.setElementStyle(ev.srcEvent.srcElement.offsetParent.firstElementChild,'opacity','0.7');
        this.checker[index] = 'clicked';
        this.itemSelected.push(myList.item);
        this.countItemClicked();
      }
    }
  }

  // handle focus saat pertama kali press
  handleFocus(myList,index){
    this.sedangFocus = true;
    this.checker[index] = 'clicked'; 
    this.itemSelected.push(myList.item);
    this.countItemClicked();
    setTimeout(() => {
      this.statusBar.backgroundColorByHexString('#00695c');
    },150);
  }

  // hitung jumlah item yang diseleksi untuk di hapus
  countItemClicked(){
    let jumlah = 0;
    this.checker.forEach((item,index) => {
      if (item == 'clicked')
        jumlah++; 
    });

    if (jumlah == 0){
      this.sedangFocus = false;
      this.itemSelected.length = 0;
      setTimeout(() => {
        this.statusBar.backgroundColorByHexString('#673ab7');
      },150);
    }
    
    return this.jumlah = jumlah;
  }

  // hapus item berdasarkan seleksi user
  deleteSeveral(){
    let ambilJson = JSON.parse(localStorage.getItem('favorit'));
    let cari = this.itemSelected;

    // for (var i=0; i<cari.length; i++) {
    //   let k = ambilJson.map(function(e) {
    //     return e.item
    //   }).indexOf(cari[i]);
    //   ambilJson.splice(k,1);
    // }

    this.countItemClicked();
    this.favorit = ambilJson;
    localStorage.setItem('favorit', JSON.stringify(ambilJson));
    this.sedangFocus = false;
  }

  // keluar mode fokus
  exitFocus(){
    this.favorit = JSON.parse(localStorage.getItem('favorit'));
    this.sedangFocus = false;
    this.cards.forEach((item,index) => {
      this.cards[index] = null;
    })
    this.itemSelected.length = 0;
    setTimeout(() => {
      this.statusBar.backgroundColorByHexString('#673ab7');
    },150);
  }

  debug(){
    console.log(this.checker);
    console.log(this.itemSelected);
  }

}
