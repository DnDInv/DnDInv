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
  items = [];
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
        this.items = val;
        console.log("Storage items: ", val);
    }).catch((err) => {

    });
    //</editor-fold>
  }

  //function for opening a item.
  openItem() {
      //this.navCtrl.push(itemPage);
  }

  deleteItem(index, item) {
      //<editor-fold desc="Creating the modal for deleting only">
      //create the modal for deleting the selected item.
        let editorDelete = this.alertCtrl.create({
            title: "Are you sure you want to delete the item: " + item.itemName,
            message: "here you can delete the Item: " + item.itemName,
            buttons: [
                {
                    //<editor-fold desc="delete individual items">
                    text: "Delete",
                    handler: data => {
                        //gets the storage with the given itemKey
                        this.storage.get(this.itemKey).then((val) => {
                            //removes the selected item with the corresponding itemKey
                            this.storage.remove(this.itemKey);
                            //setting this.items to the val variable
                            this.items = val;
                            //splicing the val that has the selected item and delete one element so the object gets removed.
                            val.splice(index, 1);

                            //set the storage itemKey to val so that the selected item will stay removed and will not be shown on the list.
                            this.storage.set(this.itemKey, val);
                        }).catch((err) => {
                            console.log("something went wrong: ", err.message);
                        })
                    }
                    //</editor-fold>
                },
            ]
        });
        editorDelete.present();
      //</editor-fold>
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
