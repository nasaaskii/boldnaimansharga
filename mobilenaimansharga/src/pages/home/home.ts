import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    public currencyList = [];
    public nowdate = new Date().toISOString();
    
    Login = LoginPage;
    public mongolbank = '';
    constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController, public http: Http) {
        let loading = this.loadingCtrl.create({content: 'Уншиж байна ...'});
        loading.present();

        let headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        this.http.get('http://127.0.0.1:8000/currency/', headers).map(res => res.json()).subscribe(data => {

            for (var item of data.currencys) {
                this.http.get('http://monxansh.appspot.com/xansh.json?currency='+item.name, headers).map(res => res.json()).subscribe(data => {
                    this.mongolbank = data.rate;
                }, (err) => { alert(err); });
                console.log(this.mongolbank);
                this.currencyList.push({'name':item.name,'rate_sell':item.rate_sell,'rate_buy':item.rate_buy,'mongolbank':this.mongolbank, 'pic':'http://localhost:8000'+item.img });
            }

        }, (err) => { alert(err); });

        loading.dismiss();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ListPage');
    }

}
