///<reference path="../../../node_modules/ionic-angular/navigation/nav-controller.d.ts"/>
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { AboutPage} from "../about/about";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
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
        let addBackpack = this.alertCtrl.create({
            title: "Add Backpack",
            message: "Please enter the following requirements.",
            inputs: [
                {
                    name: 'Backpack Name',
                    placeholder: 'enter backpack name here...'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    role: 'submit',
                    handler: data => {
                        console.log(JSON.stringify(data)); //to see the object
                    }
                }
            ]
        });
        //materialize the popup
        addBackpack.present();
    }
}
