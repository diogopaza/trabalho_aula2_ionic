import { AuthProvider } from '../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  email = "";
  senha = "";

  constructor(public navCtrl: NavController,public authData: AuthProvider, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }


  cadastroUser() {
    this.authData.signupUser(this.email, this.senha);
    alert('Cadastrado com sucesso');

  }

}
