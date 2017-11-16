import { Component } from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import { AboutPage} from "../about/about";
import { Storage } from '@ionic/storage';
import { InventoryPage } from "../inventory/inventory";

@Component({
  selector: 'page-backpack',
  templateUrl: 'backpack.html/'
})
export class BackPackPage {

    info: any = [];

    constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
        this.navCtrl = navCtrl;
        this.storage.get('backpacks').then((val) => {
            this.info = val;
            console.log(val);
        });
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
                  placeholder: 'Enter backpack name here...'
              },
              {
                  name: 'strength',
                  placeholder: 'Enter strength of the backpack...',
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
                  placeholder: 'Standard,Encumbrance,No rules...'
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
                          data.RuleVariants             != "No rules" &&
                          data.Carrying_Size            != "Tiny" &&
                          data.Carrying_Size            != "Small" &&
                          data.Carrying_Size            != "Medium" &&
                          data.Carrying_Size            != "Large" &&
                          data.Carrying_Size            != "Huge") {
                          console.log("Incorrect Values");
                          return false;
                      }
                      else {
                          console.log(data);
                          this.storage.get('backpacks').then((val) => {
                              // val.filter(x => {return x.name == data.name}).length() > 0
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
    //function for the modal confirmation for the delete
    deleteBackpack() {
        let deleteBackpack = this.alertCtrl.create({
            title: 'Delete Backpack',
            message: "Are you sure you want to delete your Backpack?",
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Delete',
                    role: 'submit',
                    handler: data => {
                        this.storage.get('backpacks').then(val => {
                            val = [];
                            this.info = val;
                            this.storage.set("backpacks", val);
                            console.log("Cleared.");
                        }).catch((err) =>{
                            console.log("Cleared????");
                        });
                    }
                }
            ]
      });
      //materialize the popup
      deleteBackpack.present();
    }
    //function for opening backpacks
    openInventory(index) {
        console.log(index);

        this.storage.get('backpacks').then((val) => {
            console.log(val, index);
            let data = {
                backpack: val[index]
            };
            this.info = val;
            this.navCtrl.push(InventoryPage, data);
            //storage.push(backpack.name, {items: [], dat: {}, dit: 5})

        }).catch((err) => {
            console.log("backpack not found!");
        });

    }
}
