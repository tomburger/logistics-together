import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GooglePlus } from '@ionic-native/google-plus';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 * 
 * 
 * 
 * How to login with Google...
 * https://www.joshmorony.com/implementing-google-plus-sign-in-with-oauth-2-0-in-ionic-2/
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, private googlePlus: GooglePlus) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.googlePlus.login({})
      .then(result => console.log(result));
  }
}
