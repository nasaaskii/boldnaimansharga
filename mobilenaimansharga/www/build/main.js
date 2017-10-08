webpackJsonp([4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddcurrencyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AddcurrencyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var AddcurrencyPage = (function () {
    function AddcurrencyPage(navCtrl, navParams, loadingCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.Home = __WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */];
        this.currencyList = [];
        this.setCurrency = { currency: '', rate_buy: '', rate_sell: '' };
        var loading = this.loadingCtrl.create({ content: 'Уншиж байна ...' });
        loading.present();
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        this.http.get('http://127.0.0.1:8000/getcurrency/', headers).map(function (res) { return res.json(); }).subscribe(function (data) {
            for (var _i = 0, _a = data.currencys; _i < _a.length; _i++) {
                var item = _a[_i];
                _this.currencyList.push({ 'name': item.name, 'id': item.id });
            }
        }, function (err) { alert("Мэдээлэл татах үед алдаа гарлаа !!!"); });
        loading.dismiss();
    }
    AddcurrencyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddcurrencyPage');
    };
    AddcurrencyPage.prototype.AddCurrency = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.get("http://127.0.0.1:8000/addcurrency/" + this.setCurrency.currency + '/' + this.setCurrency.rate_buy + '/' + this.setCurrency.rate_sell + '/', options).map(function (res) { return res.json(); }).subscribe(function (data) {
            if (data.status == false) {
                alert('Алдаа гарлаа !!!');
            }
            else {
                alert('Амжилттай илгээлээ.');
            }
        }, function (error) { });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    return AddcurrencyPage;
}());
AddcurrencyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-addcurrency',template:/*ion-inline-start:"/home/nasaaskii/Desktop/boldcurrency/naimansharga/mobilenaimansharga/src/pages/addcurrency/addcurrency.html"*/'<!--\n  Generated template for the PartnerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar hideBackButton="true" color="danger" >\n        <ion-title>\n            Ханш бүртгэх\n        </ion-title>\n\n        <ion-buttons end>\n            <button ion-fab mini [navPush]="Home">\n                <ion-icon ios="ios-add-circle" md="md-arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-item>\n        <ion-label>Вальт</ion-label>\n        <ion-select [(ngModel)]="setCurrency.currency">\n            <ion-option *ngFor="let currency of currencyList" value="{{currency.id}}" >{{currency.name}}</ion-option>\n            <ion-option value="f">Female</ion-option>\n            <ion-option value="m">Male</ion-option>\n        </ion-select>\n    </ion-item>\n    <br>\n    <ion-item>\n        <ion-input type="number" [(ngModel)]="setCurrency.rate_buy" required placeholder="Авах Ханш"></ion-input>\n    </ion-item>\n    <br>\n    <ion-item>\n        <ion-input type="number" [(ngModel)]="setCurrency.rate_sell" required placeholder="Зарах Ханш"></ion-input>\n    </ion-item>\n    <ion-row>\n        <ion-col class="signup-col">\n        <button ion-button class="submit-btn" full type="submit" (click)="AddCurrency()">Нэмэх</button>\n        </ion-col>\n    </ion-row>\n</ion-content>\n'/*ion-inline-end:"/home/nasaaskii/Desktop/boldcurrency/naimansharga/mobilenaimansharga/src/pages/addcurrency/addcurrency.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], AddcurrencyPage);

//# sourceMappingURL=addcurrency.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addcurrency_addcurrency__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Home = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.registerCredentials = { email: '', password: '' };
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__addcurrency_addcurrency__["a" /* AddcurrencyPage */], {});
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/home/nasaaskii/Desktop/boldcurrency/naimansharga/mobilenaimansharga/src/pages/login/login.html"*/'<!--\n  Generated template for the PartnerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar hideBackButton="true" color="danger" >\n        <ion-title>\n            Нэвтрэх\n        </ion-title>\n\n        <ion-buttons end>\n            <button ion-fab mini [navPush]="Home">\n                <ion-icon ios="ios-add-circle" md="md-arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-row class="logo-row">\n        <ion-col></ion-col>\n        <ion-col width-67>\n        <img src="http://placehold.it/300x200"/>\n        </ion-col>\n        <ion-col></ion-col>\n    </ion-row>\n    <div class="login-box">\n        <form (ngSubmit)="login()" #registerForm="ngForm">\n            <ion-row>\n                <ion-col>\n                    <ion-list inset>\n\n                        <ion-item>\n                        <ion-input type="text" required placeholder="Email" name="email" [(ngModel)]="registerCredentials.email" required></ion-input>\n                        </ion-item>\n\n                        <ion-item>\n                        <ion-input type="password" required placeholder="Password" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n                        </ion-item>\n\n                    </ion-list>\n                </ion-col>\n            </ion-row>\n\n        <ion-row>\n            <ion-col class="signup-col">\n            <button ion-button class="submit-btn" full type="submit">Нэвтрэх</button>\n            </ion-col>\n        </ion-row>\n\n        </form>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/home/nasaaskii/Desktop/boldcurrency/naimansharga/mobilenaimansharga/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/addcurrency/addcurrency.module": [
		266,
		3
	],
	"../pages/calculate/calculate.module": [
		269,
		0
	],
	"../pages/list/list.module": [
		268,
		2
	],
	"../pages/login/login.module": [
		267,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 152;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ListPage = (function () {
    function ListPage(navCtrl, navParams, loadingCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.currencyList = [];
        this.Home = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        var loading = this.loadingCtrl.create({ content: 'Уншиж байна ...' });
        loading.present();
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        this.http.get('http://localhost:8000/currency', headers).map(function (res) { return res.json(); }).subscribe(function (data) {
            for (var _i = 0, _a = data.currencyList; _i < _a.length; _i++) {
                var item = _a[_i];
                _this.currencyList.push({ 'name': item.name, 'id': item.id });
            }
        }, function (err) { alert("Мэдээлэл татах үед алдаа гарлаа !!!"); });
        loading.dismiss();
    }
    ListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListPage');
    };
    return ListPage;
}());
ListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"/home/nasaaskii/Desktop/boldcurrency/naimansharga/mobilenaimansharga/src/pages/list/list.html"*/'<!--\n  Generated template for the PartnerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar hideBackButton="true" color="danger" >\n        <ion-title>\n            Валютын ханш\n        </ion-title>\n\n        <ion-buttons end>\n            <button ion-fab mini [navPush]="Home">\n                <ion-icon name="md-arrow-back"></ion-icon>\n            </button>\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-list>\n\n        <ion-item-sliding *ngFor="let part of partner">\n            <ion-item>\n              {{part.name}}\n            </ion-item>\n\n            <ion-item-options>\n                <button ion-button (click)="saleOrder(part)">Бүртгэх</button>\n            </ion-item-options>\n        </ion-item-sliding>\n\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/nasaaskii/Desktop/boldcurrency/naimansharga/mobilenaimansharga/src/pages/list/list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], ListPage);

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(217);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_base_base__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_list_list__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_addcurrency_addcurrency__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_calculate_calculate__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_contact_contact__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_base_base__["a" /* BasePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_addcurrency_addcurrency__["a" /* AddcurrencyPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_calculate_calculate__["a" /* CalculatePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_contact_contact__["a" /* ContactPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], { tabsPlacement: 'top' }, {
                links: [
                    { loadChildren: '../pages/addcurrency/addcurrency.module#AddcurrencyPageModule', name: 'AddcurrencyPage', segment: 'addcurrency', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/list/list.module#ListPageModule', name: 'ListPage', segment: 'list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/calculate/calculate.module#CalculatePageModule', name: 'CalculatePage', segment: 'calculate', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_base_base__["a" /* BasePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_addcurrency_addcurrency__["a" /* AddcurrencyPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_calculate_calculate__["a" /* CalculatePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_contact_contact__["a" /* ContactPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_base_base__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_base_base__["a" /* BasePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/nasaaskii/Desktop/boldcurrency/naimansharga/mobilenaimansharga/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/nasaaskii/Desktop/boldcurrency/naimansharga/mobilenaimansharga/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculatePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CalculatePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CalculatePage = (function () {
    function CalculatePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.result = '';
    }
    CalculatePage.prototype.btnClicked = function (btn) {
        if (btn == 'C') {
            this.result = '';
        }
        else if (btn == '=') {
            this.result = eval(this.result);
        }
        else {
            this.result += btn;
        }
    };
    CalculatePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CalculatePage');
    };
    return CalculatePage;
}());
CalculatePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-calculate',template:/*ion-inline-start:"/home/nasaaskii/Desktop/boldcurrency/naimansharga/mobilenaimansharga/src/pages/calculate/calculate.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>\n            Тооцоолол\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content id="page1">\n    <form id="calculator-form1">\n        <ion-item id="calculator-input1">\n            <ion-label></ion-label>\n            <ion-input type="text" placeholder="0" name="display" [(ngModel)]="result"></ion-input>\n        </ion-item>\n    </form>\n\n    <div id="calculator-container3">\n        <button id="calculator-button1" ion-button color="danger" (click)="btnClicked(\'C\')"> C </button>\n        <button id="calculator-button2" ion-button color="energized" (click)="btnClicked(\'%\')"> % </button>\n        <button id="calculator-button3" ion-button color="energized" (click)="btnClicked(\'/\')"> / </button>\n    </div>\n\n    <div id="calculator-container6">\n        <button id="calculator-button10" ion-button (click)="btnClicked(\'7\')"> 7 </button>\n        <button id="calculator-button11" ion-button (click)="btnClicked(\'8\')"> 8 </button>\n        <button id="calculator-button12" ion-button (click)="btnClicked(\'9\')"> 9 </button>\n        <button id="calculator-button13" ion-button color="energized" (click)="btnClicked(\'*\')"> * </button>\n    </div>\n\n    <div id="calculator-container7">\n        <button id="calculator-button14" ion-button (click)="btnClicked(\'4\')"> 4 </button>\n        <button id="calculator-button15" ion-button (click)="btnClicked(\'5\')"> 5 </button>\n        <button id="calculator-button16" ion-button (click)="btnClicked(\'6\')"> 6 </button>\n        <button id="calculator-button17" ion-button color="energized" (click)="btnClicked(\'-\')"> - </button>\n    </div>\n\n    <div id="calculator-container8">\n        <button id="calculator-button18" ion-button (click)="btnClicked(\'1\')"> 1 </button>\n        <button id="calculator-button19" ion-button (click)="btnClicked(\'2\')"> 2 </button>\n        <button id="calculator-button20" ion-button (click)="btnClicked(\'3\')"> 3 </button>\n        <button id="calculator-button21" ion-button color="energized" (click)="btnClicked(\'+\')"> + </button>\n    </div>\n\n    <div id="calculator-container9">\n        <button id="calculator-button22" ion-button (click)="btnClicked(\'0\')"> 0 </button>\n        <button id="calculator-button23" ion-button (click)="btnClicked(\'.\')"> . </button>\n        <button id="calculator-button25" ion-button color="danger" (click)="btnClicked(\'=\')"> = </button>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/home/nasaaskii/Desktop/boldcurrency/naimansharga/mobilenaimansharga/src/pages/calculate/calculate.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], CalculatePage);

//# sourceMappingURL=calculate.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calculate_calculate__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__calculate_calculate__["a" /* CalculatePage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/nasaaskii/Desktop/boldcurrency/naimansharga/mobilenaimansharga/src/pages/tabs/tabs.html"*/'<ion-tabs class="tabs-icon-top tabs-dark">\n  <ion-tab [root]="tab1Root" tabTitle="Ханш" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Тооцоолуур" tabIcon="information-circle"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/home/nasaaskii/Desktop/boldcurrency/naimansharga/mobilenaimansharga/src/pages/tabs/tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"/home/nasaaskii/Desktop/boldcurrency/naimansharga/mobilenaimansharga/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      ХОЛБОО БАРИХ\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="about">\n  <address>\n   Төмөрчний гудамж, 8-н шарга валют арилжааны захын Голомт банктай орц<br/>\n   2 давхар, Евро Од ББСБ,<br/>\n   Чингэлтэй дүүрэг, Улаанбаатар хот, Монгол улс.<br/><br/>\n   Утас: +976 99090212<br/>\n</address>\n\n</ion-content>\n'/*ion-inline-end:"/home/nasaaskii/Desktop/boldcurrency/naimansharga/mobilenaimansharga/src/pages/contact/contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calculate_calculate__ = __webpack_require__(270);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BasePage = (function () {
    function BasePage() {
        this.homePage = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.contactPage = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.calculatePage = __WEBPACK_IMPORTED_MODULE_3__calculate_calculate__["a" /* CalculatePage */];
    }
    return BasePage;
}());
BasePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/nasaaskii/Desktop/boldcurrency/naimansharga/mobilenaimansharga/src/pages/base/base.html"*/'<ion-header>\n    <ion-navbar hideBackButton="true" color="primary" >\n        <img height="60" src="http://localhost:8000/uploads/currency/baselogo.png"> \n        <ion-title>  \n            НАЙМАН ШАРГА\n        </ion-title>\n        <ion-buttons end>\n            <button ion-fab mini [navPush]="Login" color="danger">\n                <ion-icon ios="ios-add-circle" md="md-add-circle"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content padding style="background-color:#E6E6E6;">\n    <div class="eag-home-container-flex">\n        <div class="eag-home-container">\n         <div class ="row">\n             <div class="col"><button class="button button-stable button-clear eag-home-button" [navPush]="homePage"><img src="http://localhost:8000/uploads/currency/rate.png" ></button><p class="eag-home-label">ХАНШ</p></div>\n            <div class="col"><button class="button button-stable button-clear eag-home-button" [navPush]="calculatePage"><img src="http://localhost:8000/uploads/currency/calc.png" ></button><p class="eag-home-label">ТООЦООЛОЛ</p></div>\n            </div>\n        <div class ="row">\n            <div class="col"><button class="button button-stable button-clear eag-home-button" [navPush]="contactPage"><img src="http://localhost:8000/uploads/currency/contact.png" ></button><p class="eag-home-label">ХОЛБОО БАРИХ</p></div>\n            <div class="col"></div> \n        </div>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/home/nasaaskii/Desktop/boldcurrency/naimansharga/mobilenaimansharga/src/pages/base/base.html"*/
    }),
    __metadata("design:paramtypes", [])
], BasePage);

//# sourceMappingURL=base.js.map

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, navParams, loadingCtrl, http) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.currencyList = [];
        this.nowdate = new Date().toISOString();
        this.Login = __WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */];
        this.mongolbank = '';
        var loading = this.loadingCtrl.create({ content: 'Уншиж байна ...' });
        loading.present();
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        this.http.get('http://127.0.0.1:8000/currency/', headers).map(function (res) { return res.json(); }).subscribe(function (data) {
            for (var _i = 0, _a = data.currencys; _i < _a.length; _i++) {
                var item = _a[_i];
                _this.http.get('http://monxansh.appspot.com/xansh.json?currency=' + item.name, headers).map(function (res) { return res.json(); }).subscribe(function (data) {
                    _this.mongolbank = data.rate;
                }, function (err) { alert(err); });
                console.log(_this.mongolbank);
                _this.currencyList.push({ 'name': item.name, 'rate_sell': item.rate_sell, 'rate_buy': item.rate_buy, 'mongolbank': _this.mongolbank, 'pic': 'http://localhost:8000' + item.img });
            }
        }, function (err) { alert(err); });
        loading.dismiss();
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ListPage');
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/nasaaskii/Desktop/boldcurrency/naimansharga/mobilenaimansharga/src/pages/home/home.html"*/'<!--\n  Generated template for the PartnerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="primary">\n        <ion-title>\n            Валютын ханш\n        </ion-title>\n\n        <ion-buttons end>\n            <button ion-fab mini [navPush]="Login" color="danger">\n                <ion-icon ios="ios-add-circle" md="md-add-circle"></ion-icon>\n            </button>\n        </ion-buttons>\n\n    </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n    <ion-item>\n        <ion-row>\n            <ion-col col-5>\n                <b>{{nowdate | date:\'yyyy-MM-dd\'}}</b>\n            </ion-col>\n            <ion-col align-self-center col-2>\n                <span style="float:center;">Албан</span>\n            </ion-col>\n            <ion-col align-self-center col-2>\n                <b style="float:center;font-weight:bold;">Авах</b>\n            </ion-col>\n            <ion-col align-self-center col-2>\n                <b style="float:center;font-weight:bold;">Зарах</b>\n            </ion-col>\n        </ion-row>\n    </ion-item>\n    <ion-list>\n        <ion-item-sliding *ngFor="let currency of currencyList">\n            <ion-item>\n                <ion-row>\n                    <ion-col col-5>\n                        <ion-img src="{{currency.pic}}" style="float:center;width:50px;height:50px;"> </ion-img>\n                        <b style="text-align: center;">{{currency.name}}</b>\n                    </ion-col>\n                    <ion-col  align-self-center col-2>\n                      <!--  <span style="float:center;">{{currency.mongolbank}}</span> -->\n                        <span style="float:center;">2100</span>\n                    </ion-col>\n                    <ion-col align-self-center col-2>\n                        <b style="float:center;font-weight:bold;">{{currency.rate_buy}}</b>\n                    </ion-col>\n                    <ion-col align-self-center col-2>\n                        <b style="float:center;font-weight:bold;">{{currency.rate_sell}}</b>\n                    </ion-col>\n                </ion-row>\n            </ion-item>\n        </ion-item-sliding>\n    </ion-list>\n\n\n    <h4>Валют арилжааны хэлцлийн ханш:</h4><br/>\n    <span>\n    	Харилцагч таны валютын арилжааны дүн 20 сая төгрөг ба түүнтэй тэнцэх гадаад валютаас их хэмжээтэй\n    	тохиолдолд та манай 99090212 утсаар холбогдож валют арилжааны гүйлгээ хийх боломжтой.\n    </span><br/><br/>\n    <span>\n    	Тухайн өдрийн валют арилжааны хэлбэлзлийг урьдчилан мэдээллэх боломжгүй болно.\n    </span>\n</ion-content>'/*ion-inline-end:"/home/nasaaskii/Desktop/boldcurrency/naimansharga/mobilenaimansharga/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map