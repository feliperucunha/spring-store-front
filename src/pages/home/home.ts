import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { CategoriasPage } from '../categorias/categorias';
import { CredenciaisDTO } from '../../models/credenciais.dto';

@IonicPage() //pode deferenciar a classe como string em outros lugares (aumenta a flexibilidade com Lazy Loading)
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creds : CredenciaisDTO = {
    email: "", //começa valendo vazio porque ainda vai puxar do input
    senha: ""
  }

  constructor(public navCtrl: NavController, public menu: MenuController) {  //injeção de dependência
  
  }

  //lifecicle
  ionViewWillEnter() { //ao entrar na página, o swipe lateral é desativado
    this.menu.swipeEnable(false);
  }

    ionViewDidLeave() { //ao sair da página inicial, reativar o swipe lateral
    this.menu.swipeEnable(true);
  }
 

  login() {  //por padrão é público
    console.log(this.creds);
    this.navCtrl.setRoot('CategoriasPage') //páginas criadas pelo CLI são criadas por Lazy Loading, então chama como String
  }
}
