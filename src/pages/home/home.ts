import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { CategoriasPage } from '../categorias/categorias';

@IonicPage() //pode deferenciar a classe como string em outros lugares (aumenta a flexibilidade com Lazy Loading)
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {  //injeção de dependência

  }
 
  login() {  //por padrão é público
    this.navCtrl.setRoot('CategoriasPage') //páginas criadas pelo CLI são criadas por Lazy Loading, então chama como String
  }
}
