import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BackPackPage} from '../pages/backpack/backpack';
import { SettingsPage} from "../pages/settings/settings";
import { AboutPage} from "../pages/about/about";
//import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SettingsProvider } from '../providers/settings/settings';
import { AboutProvider } from '../providers/about/about';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BackPackPage,
    SettingsPage,
    AboutPage
    //ListPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BackPackPage,
    SettingsPage,
    AboutPage
    //ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SettingsProvider,
    AboutProvider
  ]
})
export class AppModule {}
