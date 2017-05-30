import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Sound } from '../providers/sound';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage:any = 'Tabs';

  constructor(public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public sound:Sound) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      splashScreen.hide();
      statusBar.backgroundColorByHexString('#673ab7');
      sound.preLoad('tabSwitch','assets/audio/click.mp3');
    });
  }

}

