import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { BackPackPage} from '../pages/backpack/backpack';
<<<<<<< HEAD

import { SettingsProvider } from "../providers/settings/settings";
=======
>>>>>>> origin/master

//import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  selectedTheme: String;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private settings: SettingsProvider) {
      this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);

      this.platform.ready().then(() => {
          this.statusBar.styleDefault();
          this.splashScreen.hide();
      });
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Backpack', component: BackPackPage }
      //{ title: 'List', component: ListPage }
    ];

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
