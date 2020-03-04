import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider} from '../../providers/firebase';

@IonicPage()
@Component({
  selector: 'page-dicas',
  templateUrl: 'dicas.html',
})
export class DicasPage {

  dicas: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private firebaseProvider: FirebaseProvider,
    ) {
    this.getDica();
  }

  getDica(){
    this.firebaseProvider.getDicas()
    .then((r) => {
      this.dicas = r;
    })
  }
}
