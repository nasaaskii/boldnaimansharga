import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import { HomePage } from '../home/home';

/**
 * Generated class for the ListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-list',
    templateUrl: 'list.html',
})
export class ListPage {
    public currencyList = [];
    Home = HomePage;
    constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController, public http: Http) {
        let loading = this.loadingCtrl.create({content: 'Уншиж байна ...'});
        loading.present();

        let headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        this.http.get('http://localhost:8000/currency', headers).map(res => res.json()).subscribe(data => {

            for (var item of data.currencyList) {
               this.currencyList.push({'name':item.name, 'id':item.id});
            }

        }, (err) => { alert("Мэдээлэл татах үед алдаа гарлаа !!!"); });

        loading.dismiss();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ListPage');
    }

}
