import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { trigger, style, animate, transition } from '@angular/animations';

import { AuthProvider } from '../../providers/auth';
import { FirebaseProvider } from '../../providers/firebase';
import { Storage } from '@ionic/storage';
import * as firebase from 'firebase';

import { TabsPage } from '../tabs/tabs';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  animations: [
    trigger(
      'login', [
        transition(':enter', [
          style({
            opacity: 0
          }),
          animate("1s ease-in-out", style({
            opacity: 1
          }))
        ]),
        transition(':leave', [
          style({
            opacity: 0
          })
        ])
      ],
    ),
    trigger(
      'registro', [
        transition(':enter', [
          style({
            opacity: 0
          }),
          animate("1s ease-in-out", style({
            opacity: 1
          }))
        ]),
        transition(':leave', [
          style({
            opacity: 0
          })
        ])
      ],
    ),
  ]
})
export class LoginPage {

  login = true;
  register = false;

  loginForm = {
    email: '',
    password: '',
  };

  registerForm = {
    email: '',
    password: '',
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private authProvider: AuthProvider,
    private FirebaseProvider: FirebaseProvider,
    private loadingCtrl: LoadingController,
    private storage: Storage,
    public alertCtrl: AlertController
  ) {
  }

  //Exibir form de registro
  exibirRegistrar(){
    this.login = false;
    this.register = true;
  };

  //Exibir form de login
  exibirLogin(){
    this.login = true;
    this.register = false;
  };

  //login
  fazerLogin() {
    let load = this.loadingCtrl.create();
    load.present();

    this.authProvider.login(this.loginForm)
      .then((res) => {
        let uid = res.user.uid;
        this.FirebaseProvider.getUser(uid)
          .then((res) => {
            console.log(res.data())
            let data = res.data();
            this.storage.set('usuario', data)
              .then(() => {
                load.dismiss();
                this.navCtrl.setRoot(TabsPage);
              })
          })
      })
      .catch((err) => {
        load.dismiss();
        const alert = this.alertCtrl.create({
          title: 'Login inválido',
          subTitle: 'Email ou senha inválidos!',
          buttons: ['OK']
        });
        alert.present();
      })
  }

  //registro
  criarNovaConta() {
    let load = this.loadingCtrl.create();
    load.present();

    this.authProvider.register(this.registerForm)
      .then((res) => {
        let uid = res.user.uid;

        //Organizar dados
        let data = {
          uid: uid,
          email: this.registerForm.email
        };

        //Gravar user no firestore
        this.FirebaseProvider.postUser(data)
          .then(() => {
            this.storage.set('usuario', data)
              .then(() => {
                load.dismiss();
                this.navCtrl.setRoot('LoginPage');
              })
          })
          .catch((err) => {
            load.dismiss();
          })
      })
      .catch((err) => {
        load.dismiss();
        const alert = this.alertCtrl.create({
          title: 'Cadastro inválido!',
          subTitle: 'Seu email deve conter um @, e sua senha no mínimo 6 caracteres!',
          buttons: ['OK']
        });
        alert.present();
      })
  }

  trocarSenha(email) {
    firebase
    .auth()
    .sendPasswordResetEmail(email)
    .then(function() {
      console.log("Correto");
    })
    .catch(function(error) {
      console.log("Erro");
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  };

}
