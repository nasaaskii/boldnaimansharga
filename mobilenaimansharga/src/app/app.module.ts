import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { BasePage } from '../pages/base/base';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { AddcurrencyPage } from '../pages/addcurrency/addcurrency';
import { TabsPage } from '../pages/tabs/tabs';
import { CalculatePage } from '../pages/calculate/calculate';
import { ContactPage } from '../pages/contact/contact';

@NgModule({
    declarations: [
        MyApp,
        BasePage,
        HomePage,
        ListPage,
        LoginPage,
        AddcurrencyPage,
        TabsPage,
        CalculatePage,
        ContactPage
    ],
    imports: [
        BrowserModule,
        HttpModule,
        IonicModule.forRoot(MyApp, {tabsPlacement: 'top'})
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        BasePage,
        HomePage,
        ListPage,
        LoginPage,
        AddcurrencyPage,
        TabsPage,
        CalculatePage,
        ContactPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {}
