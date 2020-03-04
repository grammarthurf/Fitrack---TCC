import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  @ViewChild('doughnutCanvas') doughnutCanvas;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
  ) {}


  doughnutChart: any;

  testCheckboxOpen = true;
  testCheckboxResult = '';

  i: any;
  f: any;
  g: any;
  a: any;

  showCheckbox1() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Alimentos consumidos');

    alert.addInput({
      type: 'checkbox',
      label: 'Arroz',
      value: 'Arroz',
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Feijão',
      value: 'Feijão',
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Macarrão',
      value: 'Macarrão'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Margarina',
      value: 'Margarina'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Pão',
      value: 'Pão'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Lasanha Carne',
      value: 'Lasanha Carne'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Queijo Branco',
      value: 'Queijo Branco'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Geléia de Morango',
      value: 'Geléia de Morango'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Aipim Frito',
      value: 'Aipim Frito'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Bolo de Chocolate',
      value: 'Bolo de Chocolate'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Pizza Carne',
      value: 'Pizza Carne'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Chocolate - Barra',
      value: 'Chocolate - Barra'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Café',
      value: 'Café'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Gelatina - Morango',
      value: 'Gelatina - Morango'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Sorvete - Creme',
      value: 'Sorvete - Creme'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Cookie',
      value: 'Cookie'
    });

    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Salvar',
      handler: data => {
        console.log(data);
        this.testCheckboxOpen = false;

        this.i = data;

      }
    });
    alert.present();
  }

  showCheckbox2() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Alimentos consumidos');

    alert.addInput({
      type: 'checkbox',
      label: 'Arroz',
      value: 'Arroz',
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Feijão',
      value: 'Feijão',
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Macarrão',
      value: 'Macarrão'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Margarina',
      value: 'Margarina'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Pão',
      value: 'Pão'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Lasanha Carne',
      value: 'Lasanha Carne'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Queijo Branco',
      value: 'Queijo Branco'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Geléia de Morango',
      value: 'Geléia de Morango'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Aipim Frito',
      value: 'Aipim Frito'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Bolo de Chocolate',
      value: 'Bolo de Chocolate'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Pizza Carne',
      value: 'Pizza Carne'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Chocolate - Barra',
      value: 'Chocolate - Barra'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Café',
      value: 'Café'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Gelatina - Morango',
      value: 'Gelatina - Morango'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Sorvete - Creme',
      value: 'Sorvete - Creme'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Cookie',
      value: 'Cookie'
    });

    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Salvar',
      handler: data => {
        console.log(data);
        this.testCheckboxOpen = false;
       
        this.f = data;

      }
    });
    alert.present();

  }

  showCheckbox3() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Alimentos consumidos');

    alert.addInput({
      type: 'checkbox',
      label: 'Arroz',
      value: 'Arroz',
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Feijão',
      value: 'Feijão',
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Macarrão',
      value: 'Macarrão'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Margarina',
      value: 'Margarina'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Pão',
      value: 'Pão'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Lasanha Carne',
      value: 'Lasanha Carne'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Queijo Branco',
      value: 'Queijo Branco'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Geléia de Morango',
      value: 'Geléia de Morango'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Aipim Frito',
      value: 'Aipim Frito'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Bolo de Chocolate',
      value: 'Bolo de Chocolate'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Pizza Carne',
      value: 'Pizza Carne'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Chocolate - Barra',
      value: 'Chocolate - Barra'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Café',
      value: 'Café'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Gelatina - Morango',
      value: 'Gelatina - Morango'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Sorvete - Creme',
      value: 'Sorvete - Creme'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Cookie',
      value: 'Cookie'
    });

    alert.addButton('Cancelar');
    alert.addButton({
      text: 'Salvar',
      handler: data => {
        console.log(data);
        this.testCheckboxOpen = false;
       
        this.g = data;

      }
    });
    alert.present();

  }

  //meta
  showPrompt() {
    const prompt = this.alertCtrl.create({
      title: 'Meta',
      message: "Qual sua meta diária de calorias ?",
      inputs: [
        {
          name: 'title',
          placeholder: 'Meta'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Salvar',
          handler: data => {
            console.log('Saved clicked');
            
            this.a = data;

          }
        }
      ]
    });
    prompt.present();
  }

  ionViewDidLoad() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

      type: 'doughnut',
      data: {
          labels: ["Calorias", "Falta"],
          datasets: [{
              label: '# of Votes',
              data: [200, 100],
              backgroundColor: [ "#010101", "#a84a00" ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
              ]
          }]
      }

    });
  }
};
