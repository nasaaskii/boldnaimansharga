import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CalculatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calculate',
  templateUrl: 'calculate.html',
})
export class CalculatePage {

    result = '';

    btnClicked(btn) {
        if (btn == 'C') {
            this.result = '';
        }
        else if (btn == '=') {
            this.result = eval(this.result);
        }
        else {
            this.result += btn;
        }
    }
    
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
    console.log('ionViewDidLoad CalculatePage');
    }

}
