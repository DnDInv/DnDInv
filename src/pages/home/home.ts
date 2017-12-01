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
    //info for the access to the backpack local storage.
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
        //<editor-fold desc="Function for adding a backpack">
        let addBackpack = this.alertCtrl.create({
            title: "Add Backpack",
            message: "Please enter the following requirements.",
            inputs: [
                {
                    name: 'name',
                    placeholder: 'Enter backpack name here...'
                },
                {
                    name: 'strength',
                    placeholder: 'Enter strength of the backpack....',
                    type: "number",
                    min: 1,
                    max: 50
                },
                {
                    name: 'Carrying_Size',
                    placeholder: 'Tiny,Small,Medium,Large,Huge...'
                },
                {
                    name: 'HardLimit',
                    placeholder: 'Enter hard limit (if wanted)'
                },
                {
                    name: 'RuleVariants',
                    placeholder: 'Standard,Encumbrance,No Rules...'
                }
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
                        if (data.name.length              == 0 ||
                            data.strength                 > 50 ||
                            data.strength                 < 1  ||
                            data.Carrying_Size.length     == 0 ||
                            data.RuleVariants             != "Standard" &&
                            data.RuleVariants             != "Encumbrance" &&
                            data.RuleVariants             != "No Rules" &&
                            data.Carrying_Size            != "Tiny" &&
                            data.Carrying_Size            != "Small" &&
                            data.Carrying_Size            != "Medium" &&
                            data.Carrying_Size            != "Large" &&
                            data.Carrying_Size            != "Huge") {
                            console.log("Incorrect Values");
                            return false;
                        }
                        else {
                            //push the input of all the fields that are required into a JSON object.
                            //console.log(data);
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
        //</editor-fold>
    }
}
