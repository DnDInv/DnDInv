import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { CustomitemPage } from "../customitem/customitem";
import { StandarditemPage } from "../standarditem/standarditem";

@Component({
  selector: 'page-inventory',
  templateUrl: 'inventory.html',
})
export class InventoryPage {

  //<editor-fold desc="variables">
  //backpack variable for the selected backpack
  public backpack;

  //info array for getting all the backpacks
  info = [];
  //item to sync all the objects in this.itemKey and get them on the screen.
  item = [];
  //itemKey to get the items from the individual backpacks.
  itemKey;
  //</editor-fold

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public storage: Storage) {

    //<editor-fold desc="getting the backpack thats been tapped on.">
    //get the selected backpack
    this.backpack = this.navParams.get('backpack');

    //set backpack key items for the items in individual inventories.
    this.itemKey = 'item: ' + this.backpack.name + this.backpack.HardLimit;
    //</editor-fold>

    //<editor-fold desc="Getting items from itemKey">
    //get items in the selected backpack
    this.storage.get(this.itemKey).then((val) => {
        this.item = val;
    }).catch((err) => {

    });
    //</editor-fold>
  }

  //function for opening a item.
  openItem() {
      //this.navCtrl.push(itemPage);
  }

  //Creating custom item
  createcustomItem() {
      //<editor-fold desc="Pushing the selected backpack to the next page.">
      //getting all backpacks
      this.storage.get('backpacks').then((val) => {
          this.info = val;
          this.navCtrl.push(CustomitemPage, { backpack: this.backpack });

      }).catch((err) => {
          console.log("backpack not found!");
      });
      //</editor-fold>
  }

  //adding items
  addstandardItem() {
      //<editor-fold desc="Pushing the selected backpack to the next page.">
      //getting all backpacks
      this.storage.get('backpacks').then((val) => {
          this.info = val;
          this.navCtrl.push(StandarditemPage, { backpack: this.backpack });

      }).catch((err) => {
          console.log("backpack not found!");
      });
      //</editor-fold>
  }

}
