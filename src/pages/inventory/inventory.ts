import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { CustomitemPage } from "../customitem/customitem";
import {StandarditemPage} from "../standarditem/standarditem";

@Component({
  selector: 'page-inventory',
  templateUrl: 'inventory.html',
})
export class InventoryPage {

  public backpack;
  item: any = [];
  itemKey;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,public storage: Storage) {
    //get all the backpacks
    this.backpack = this.navParams.get('backpack');
    //set backpack key items for the items in individual inventories.
    this.itemKey = 'items:' + this.backpack.name + this.backpack.HardLimit;
    //get items in the selected backpack
    this.storage.get(this.itemKey).then(val => {
        this.item = val;
    });
  }
  //function for opening a item.
  openItem() {
      //push works in a push page. :)
      //this.navCtrl.push(HomePage);
  }

  //Creating custom item
  createcustomItem(index) {
    this.navCtrl.push(CustomitemPage);
  }

  //adding items
  addstandardItem(index) {
    this.navCtrl.push(StandarditemPage);
  }

}
