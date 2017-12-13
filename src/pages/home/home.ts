import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { AboutPage } from "../about/about";
import { Storage } from '@ionic/storage';
import { AddbackpackPage } from "../addbackpack/addbackpack";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    //info for the access to the backpack local storage.
    info: any = [];

    constructor(public navCtrl: NavController,
                public alertCtrl: AlertController,
                public storage: Storage) {
        this.navCtrl = navCtrl;
    }

    //open setting menu with a push
    opensettingPage() {
        this.navCtrl.push(SettingsPage);
    }

    //open about Page with a push
    openaboutPage() {
        this.navCtrl.push(AboutPage);
    }

    //function for the modal confirmation for the Adding backpack
    addBackpack() {
        this.navCtrl.push(AddbackpackPage);
    }
}
