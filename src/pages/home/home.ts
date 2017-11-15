///<reference path="../../../node_modules/ionic-angular/navigation/nav-controller.d.ts"/>
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import { AboutPage} from "../about/about";
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    info: any = [];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,public storage: Storage) {
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
                    name: 'name',
                    placeholder: 'enter backpack name here...'
                },
                {
                    name: 'strength',
                    placeholder: 'Enter strength of the backpack....',
                    type: "number",
                    min: 1,
                    max: 50
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: data => {
                    }
                },
                {
                    text: 'Save',
                    role: 'submit',
                    handler: data => {
                        //save into object
                        if (data.name.length == 0 || data.strength > 50 || data.strength < 1) {
                            console.log("Incorrect Values");
                            return false;
                        }
                        else {
                            console.log(data);
                            this.storage.get('backpacks').then((val) => {
                                val.push(data);
                                this.info = val;
                                this.storage.set("backpacks", val);
                            }).catch((err) => {
                                this.storage.set("backpacks", [data]);
                                this.info = [data];
                            });
                        }
                    }
                }
            ]
        });
        //materialize the popup
        addBackpack.present();
    }
}
