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


  toggleAppTheme() {
    console.log(this.selectedTheme);
    if(this.selectedTheme === 'light-theme')
      this.settings.setActiveTheme('dark-theme');
    else
      this.settings.setActiveTheme('light-theme');
  }

  toggleAwakemode(event) {
    //console.log("toggle: ", event.checked);
      if (event.checked == false)
          this.insomnia.allowSleepAgain();
      else
          this.insomnia.keepAwake();

  }
}
