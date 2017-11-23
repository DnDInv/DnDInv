import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage";

@Component({
  selector: 'page-inventory',
  templateUrl: 'inventory.html',
})
export class InventoryPage {

  public backpack;
  item: any = [];
  itemKey;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,public storage: Storage) {
    this.backpack = this.navParams.get('backpack');
    this.itemKey = 'items:' + this.backpack.name + this.backpack.HardLimit;

    console.log("Backpack ", this.backpack);
    this.storage.get(this.itemKey).then(val => {
        this.item = val;
        console.log("Getting Items ", val);
    });
  }

  openItem() {
      //push works in a push page. :)
      //this.navCtrl.push(HomePage);
  }

  addItem(index) {
    let addIteminventory = this.alertCtrl.create({
        title: 'Add Item',
        message: 'Enter the following required fields',
        inputs: [
            {
              name: 'itemName',
              placeholder: 'Enter item name...'
            }
        ],
        buttons: [
            {
                text: 'Cancel',
                role: 'cancel',
                handler: data => {
                    this.storage.get(this.itemKey).then(val => {
                        val = [];
                        this.item = val;
                        this.storage.set(this.itemKey, val);
                        console.log("Cleared.");
                    }).catch((err) =>{
                        console.log("Cleared????");
                    });
                }
            },
            {
                text: 'Save',
                role: 'submit',
                handler: data => {
                    if (data.itemName.length == 0){
                      return false;
                    }
                    else {
                      this.storage.get(this.itemKey).then(val => {
                          val.push(data);
                          this.item = val;
                          this.storage.set(this.itemKey, val);
                      }).catch((err) => {
                          this.storage.set(this.itemKey, [data]);
                          this.item = [data];
                      });
                      console.log(data);
                    }
                }
            }
        ]
    });
      //materialize the popup
      addIteminventory.present();
  }

}
