import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import 'firebase/storage'; // only import firebase storage
import { Facebook } from '@ionic-native/facebook';
import { NativeAudio } from '@ionic-native/native-audio';
import { Keyboard } from '@ionic-native/keyboard';
import { GooglePlus } from '@ionic-native/google-plus';

import { MyApp } from './app.component';
import { RestfulApi } from '../providers/restful-api';
import { ServiceInDetail } from '../providers/service-in-detail';
import { Sound } from '../providers/sound';

export const firebaseConfig = {
  apiKey: "AIzaSyAnOOT-DvtSlH4ueMO0SsIKzWyEETcxA80",
  authDomain: "ionic2-1afad.firebaseapp.com",
  databaseURL: "https://ionic2-1afad.firebaseio.com",
  storageBucket: "ionic2-1afad.appspot.com",
  messagingSenderId: "826487777854"
};

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      preloadModules:true
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [
    RestfulApi,
    ServiceInDetail,
    Sound,
    Facebook,
    StatusBar,
    SplashScreen,
    NativeAudio,
    Keyboard,
    GooglePlus,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

