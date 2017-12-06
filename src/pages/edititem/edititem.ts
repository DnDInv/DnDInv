import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage";

@Component({
  selector: 'page-edititem',
  templateUrl: 'edititem.html',
})
export class EdititemPage {

  //<editor-fold desc="Variables">
  public backpack;
  public item;

  itemKey;

  itemName: any;
  type: any;
  amount: any;
  price: any;
  mechanical: any;
  weight: any;
  //</editor-fold>

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {

    //<editor-fold desc="getting and setting backpack, item and itemKey">
    //getting selected backpack and selected item.
    this.backpack = this.navParams.get('backpack');
    this.item = this.navParams.get('item');
    //console.log("itemName: ", this.item.item.itemName);
    this.itemKey = 'item: ' + this.backpack.name + this.backpack.HardLimit;
    //</editor-fold>

    //<editor-fold desc="values for the ngModel">
    //variables set to the values of the ngModel
    this.itemName = this.item.item.itemName;
    this.type = this.item.item.type;
    this.amount = this.item.item.amount;
    this.price = this.item.item.price;
    this.mechanical = this.item.item.mechanical;
    this.weight = this.item.item.weight;
    //</editor-fold>

    //<editor-fold desc="get the selected item">
    // this.storage.get('item').then((val) => {
    //
    //   console.log("Val: ", val);
    // });
      //</editor-fold>
  }

  //editing the selected item
  editItem() {

  }

}
