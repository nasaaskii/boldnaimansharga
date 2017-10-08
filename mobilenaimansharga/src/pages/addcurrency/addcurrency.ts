import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { HomePage } from '../home/home';
/**
 * Generated class for the AddcurrencyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addcurrency',
  templateUrl: 'addcurrency.html',
})
export class AddcurrencyPage {
    Home = HomePage;
    public currencyList = [];
    public setCurrency = { currency:'', rate_buy:'', rate_sell:'' };

    constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController, public http: Http) {
        let loading = this.loadingCtrl.create({content: 'Уншиж байна ...'});
        loading.present();

        let headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        this.http.get('http://127.0.0.1:8000/getcurrency/', headers).map(res => res.json()).subscribe(data => {
            for (var item of data.currencys) {
               this.currencyList.push({'name':item.name, 'id':item.id});
            }

        }, (err) => { alert("Мэдээлэл татах үед алдаа гарлаа !!!"); });

        loading.dismiss();

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad AddcurrencyPage');
    }

    AddCurrency(){

        var headers = new Headers();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json' );
        let options = new RequestOptions({ headers: headers });
        this.http.get("http://127.0.0.1:8000/addcurrency/"+this.setCurrency.currency+'/'+this.setCurrency.rate_buy+'/'+this.setCurrency.rate_sell+'/', options).map(res => res.json()).subscribe(data => {
            if (data.status == false){
                alert('Алдаа гарлаа !!!')
            } else{
                alert('Амжилттай илгээлээ.');
            }

        }, error => {});

        this.navCtrl.push(HomePage);
    }

}
