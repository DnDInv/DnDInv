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
  public index;

  itemKey;

  itemName: any;
  type: any;
  amount: any;
  price: any;
  mechanical: any;
  weight: any;
  flavor: any;
  attune: any;
  //</editor-fold>

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {

    //<editor-fold desc="getting and setting backpack, item and itemKey">
    //getting selected backpack and selected item.
    this.backpack = this.navParams.get('backpack');
    this.item = this.navParams.get('item');
      this.index = this.navParams.get('index');

    //console.log("index: ", this.index);
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
    this.attune = this.item.item.attune;
    this.weight = this.item.item.weight;
    this.flavor = this.item.item.flavor;
    //</editor-fold>

    //<editor-fold desc="get the selected item">
    // this.storage.get('item').then((val) => {
    //
    //    console.log("Values: ", this.item);
    // });
      //</editor-fold>
  }

  //editing the selected item
  editItem() {

      let data = {
          "itemName": this.itemName,
          "type": this.type,
          "amount": this.amount,
          "weight": this.weight,
          "price": this.price,
          "attune": this.attune,
          "mechanical": this.mechanical,
          "flavor": this.flavor
      };
      //push the input of all the fields that are required into an JSON object.
       this.storage.get(this.itemKey).then((val) => {
           // val.filter(x => {return x.name == data.name}).length() > 0
           /*data = backpack + data;*/
           //console.log("REEEEEEE: ", val[this.index.index]);
           //console.log("some data: ", data)
           val[this.index.index] = data;
           //this.info = val;
           //console.log("itemkey ", this.itemKey);
           this.storage.set(this.itemKey, val);
           this.navCtrl.pop();
       });
  }
}
