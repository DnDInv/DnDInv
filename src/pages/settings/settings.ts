import { SettingsProvider} from "../../providers/settings/settings";
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Insomnia } from '@ionic-native/insomnia';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  selectedTheme: String;

  constructor(public navCtrl: NavController, private settings: SettingsProvider,public insomnia: Insomnia) {
    this.settings.getActiveTheme().subscribe(val => this.selectedTheme = val);
  }

//function for changing theme
  toggleAppTheme() {
    if(this.selectedTheme === 'light-theme')
      this.settings.setActiveTheme('dark-theme');
    else
      this.settings.setActiveTheme('light-theme');
  }

//function for turning Awake mode on and off
  toggleAwakemode(event) {
      if (event.checked == false)
          this.insomnia.allowSleepAgain();
      else
          this.insomnia.keepAwake();

  }
}
