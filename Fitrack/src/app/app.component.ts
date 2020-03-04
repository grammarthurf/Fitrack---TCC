import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { TabsPage } from '../pages/tabs/tabs'
import { LoginPage } from '../pages/login/login'


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private storage: Storage) {
    platform.ready().then(() => {
    
      this.storage.get('usuario')
      .then((usuario) => {
        if(usuario){
          this.rootPage = TabsPage;
        }
        else {
          this.rootPage = LoginPage;
        }
      })

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

