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

  //backpack variable for the selected backpack
  public backpack;

  //info array for getting all the backpacks
  info = [];
  //item to sync all the objects in this.itemKey and get them on the screen.
  item = [];
  //itemKey to get the items from the individual backpacks.
  itemKey;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public storage: Storage) {
    //get the selected backpack
    this.backpack = this.navParams.get('backpack');
    //set backpack key items for the items in individual inventories.
    this.itemKey = 'item: ' + this.backpack.name + this.backpack.HardLimit;
    //get items in the selected backpack
    this.storage.get(this.itemKey).then((val) => {
        this.item = val;
    }).catch((err) => {

    });
  }

  //function for opening a item.
  openItem() {
      //this.navCtrl.push(itemPage);
  }

  //Creating custom item
  createcustomItem() {
      //getting all backpacks
      this.storage.get('backpacks').then((val) => {
          this.info = val;
          this.navCtrl.push(CustomitemPage, { backpack: this.backpack });

      }).catch((err) => {
          console.log("backpack not found!");
      });
  }

  //adding items
  addstandardItem() {
    this.navCtrl.push(StandarditemPage);
  }

}
