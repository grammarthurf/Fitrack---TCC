import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth';
import { LoginPage } from '../login/login';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private authProvider: AuthProvider,
    public toastCtrl: ToastController, 
    private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

  Sair() {
    this.authProvider.logout()
      .then(() => {
        this.storage.clear();
        this.navCtrl.parent.parent.setRoot(LoginPage);
      })
      .catch((erro: any) => {
        this.exibirToast(erro);
      });
  }

  exibirToast(mensagem: string): void {
    let toast = this.toastCtrl.create({
      duration: 3000,
      position: 'botton'
    });
    toast.setMessage(mensagem);
    toast.present();
  }

}
