import { Component } from '@angular/core';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { WalletPage } from "../wallet/wallet";
import { CustomitemPage } from "../customitem/customitem";
import { StandarditemPage } from "../standarditem/standarditem";
import { EdititemPage } from "../edititem/edititem";
//import {StorageProvider} from "../../providers/storage/storage";

@Component({
  selector: 'page-inventory',
  templateUrl: 'inventory.html',
})
export class InventoryPage {

    //<editor-fold desc="variables">
    //backpack variable for the selected backpack
    public backpack;
    //variable for selected item for the Edit page
    public item;

    public audio;

    plat: any = 0;
    gold: any = 0;
    elec: any = 0;
    silv: any = 0;
    copp: any = 0;

    coins: any = {
        "pp": this.plat,
        "gp": this.gold,
        "ep": this.elec,
        "sp": this.silv,
        "cp": this.copp,
    };

    //info array for getting all the backpacks
    info = [];
    //item to sync all the objects in this.itemKey and get them on the screen.
    items = [];
    //itemKey to get the items from the individual backpacks.
    itemKey;
    //coinKey for the wallet inside the selected backpack
    coinKey;
    //</editor-fold

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public alertCtrl: AlertController,
                public storage: Storage
                /*private storageProvider: StorageProvider*/) {
        //<editor-fold desc="getting the backpack thats been tapped on.">
        //get the selected backpack
        this.backpack = this.navParams.get('backpack');

        //set backpack key items for the items in individual inventories.
        this.itemKey = 'item: ' + this.backpack.name + this.backpack.HardLimit;
        //console.log("itemkey@inv: ", this.itemKey)
        //</editor-fold>


        //<editor-fold desc="get Wallet">

        this.coinKey = 'coins: ' + this.backpack.name + this.backpack.HardLimit;
        this.storage.get(this.coinKey).then((val) => {
            if (val == null) {
                this.storage.set(this.coinKey, this.coins);
            }else {
                this.coins = val;
            }
            this.plat = this.coins.pp;
            this.gold = this.coins.gp;
            this.elec = this.coins.ep;
            this.silv = this.coins.sp;
            this.copp = this.coins.cp;
            //console.log("Val: ", this.coins);
        });
        //</editor-fold>

        //<editor-fold desc="Getting items from itemKey">
        //get items in the selected backpack
        this.storage.get(this.itemKey).then((val) => {
            this.items = val;
            console.log("Storage items: ", val);
            //goose easter egg
            if(val.itemName == "goose"||"Goose"){
                //console.log("THERE'S A GOOSE IN YOUR INVENTORY!!!")
                this.audio = new Audio('assets/QuackSound.mp3');
                this.audio.play();
            }
        }).catch((err) => {

        });
        //</editor-fold>
    }

  ionViewDidEnter() {
      //this.items = this.storageProvider.get(this.itemKey);
      //console.log(this.items);
      // this.platform.ready().then(() => {
      //     Keyboard.disableScroll(true);
      // });
      this.storage.get(this.coinKey).then((val) => {
          this.coins = val;
          //console.log("Val: ", val);
      });

      this.storage.get(this.itemKey).then ((val) => {
         this.items = val;
      });
  }
  
  wallet() {
      this.storage.get('backpacks').then((val) => {
          this.info = val;
          this.navCtrl.push(WalletPage, { backpack: this.backpack });

      }).catch((err) => {
          console.log("backpack not found!");
      });
  }
  //function for opening a item.
  openItem(index) {
      //<editor-fold desc="Pushing the selected backpack to the Item page.">
      //getting all backpacks
      this.storage.get(this.itemKey).then((val) => {
          let data = {
              item: val[index]
          };
          let selectedIndex = {
              index: index
          };
          //console.log('stuff ', selectedIndex);
          //console.log("Val: ", data);

          this.info = val;
          this.navCtrl.push(EdititemPage, { index: selectedIndex, item: data, backpack: this.backpack } );
      }).catch((err) => {
          console.log("backpack not found!");
      });
      //</editor-fold>*/
  }

  //delete items
  deleteItem(index, item) {
      //<editor-fold desc="Creating the modal for deleting only">
      //create the modal for deleting the selected item.
        let editorDelete = this.alertCtrl.create({
            title: "Are you sure you want to delete the item: " + item.itemName,
            message: "here you can delete the Item: " + item.itemName,
            buttons: [
                {
                    text: "No"
                },
                {
                    //<editor-fold desc="delete individual items">
                    text: "Yes",
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
                }

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

  //adding standard items
  addstandardItem() {
      //<editor-fold desc="Pushing the selected backpack to the add Standard Item page.">
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
