import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { FirebaseProvider} from '../../providers/firebase';


@IonicPage()
@Component({
  selector: 'page-alimentos',
  templateUrl: 'alimentos.html',
})
export class AlimentosPage {                                                        

  alimentos: any;
  sobremesas: any;
  loading: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private firebaseProvider: FirebaseProvider,
    private loadingCtrl: LoadingController,
  ) {
    this.getAlimento();
    this.getSobremesa();
    this.loading = this.loadingCtrl.create();
    this.loading.present();
  }

  getAlimento(){
    this.firebaseProvider.getAlimentos()
    .then((r) => {
      this.alimentos = r;
    })
  }

  getSobremesa(){
    this.firebaseProvider.getSobremesas()
    .then((r) => {
      this.sobremesas = r;
      this.loading.dismiss();
    })
  }

}