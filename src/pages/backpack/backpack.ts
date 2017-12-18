import { Component } from '@angular/core';
import { AlertController, NavController, NavParams} from 'ionic-angular';
import { AboutPage} from "../about/about";
import { Storage } from '@ionic/storage';
import { InventoryPage } from "../inventory/inventory";
import { AddbackpackPage } from "../addbackpack/addbackpack";
import { SettingsPage } from "../settings/settings";

@Component({
  selector: 'page-backpack',
  templateUrl: 'backpack.html/'
})
export class BackPackPage {

    //<editor-fold desc="variables">
    //backpack for calling the function to create and delete a backpack.
    public backpack;
    //itemKey for setting a itemKey for deleting a item if the backpack selected is deleted.
    itemKey;
    //storageKey for setting a storageKey for deleting the backpack
    storageKey;
    coinKey;
    //coins to transfer coins after edit.
    coins: any = {
        "pp": 0,
        "gp": 0,
        "ep": 0,
        "sp": 0,
        "cp": 0,
    };
    //info for the access to the backpack local storage.
    info: any = [];
    //item for the access to the items per inventory
    item: any = [];
    //</editor-fold>

    constructor(public alertCtrl: AlertController,
                public navCtrl: NavController,
                public navParams: NavParams,
                public storage: Storage) {
        this.navCtrl = navCtrl;

        //<editor-fold desc="fetching all the backpacks from local storage">
        //function for getting all the backpacks in the JSON array
        this.storage.get('backpacks').then((val) => {
            //after you get the backpacks set the val to this.info.
            this.info = val;
        });
    //</editor-fold>
    }


    ionViewDidEnter() {
        this.storage.get('backpacks').then ((val) => {
            //after you get the backpacks set the val to this.info.
            this.info = val;
        });
    }

    //open about Page with a push
    openaboutPage() {
        this.navCtrl.push(AboutPage);
    }
    //function for the modal confirmation for the Adding backpack
    addBackpack() {
        this.navCtrl.push(AddbackpackPage);
    }

    //function editing
    EditInventory(index, backpack){
        //<editor-fold desc="Setting itemKey and storageKey to get the right inventory to rename it.">
        //itemKey and storageKey requirements for editing backpacks so that the item
        //transfers (previous problem that when you edit a backpack the items where all gone and still in the old backpack (name))
        this.itemKey = 'item: ' + backpack.name + backpack.HardLimit;
        this.coinKey = 'coins: ' + backpack.name + backpack.HardLimit;
        this.storageKey = 'Storage:' + backpack.name + backpack.Carrying_Size + backpack.strength + backpack.RuleVariants + backpack.HardLimit;
        //</editor-fold>

        //<editor-fold desc="Getting the items in the selected backpack so they transfer on rename.">
        //getting all the items in a certain backpack.
        this.storage.get(this.itemKey).then(val => {
            if (val == null)
                return;
            this.item = val;
        });
        this.storage.get(this.coinKey).then(val => {
            if (val == null)
                return;
            this.coins = val;
        });
        //</editor-fold>

        //<editor-fold desc="Edit and Delete selected inventory">
        let EditInventory = this.alertCtrl.create({
            title: 'Edit Backpack',
            message: "enter the new value's for your backpack",
            inputs: [
                {
                    name: 'name',
                    value: backpack.name,
                    placeholder: 'Try creating a backpack named goose'
                },
                {
                    name: 'strength',
                    value: backpack.strength,
                    placeholder: 'enter your strength score' ,
                    type: "number",
                    min: 1,
                    max: 50
                },
                {
                    name: 'Carrying_Size',
                    value: backpack.Carrying_Size,
                    placeholder: 'Tiny,Small,Medium,Large,Huge'
                },
                {
                    name: 'HardLimit',
                    value: backpack.HardLimit,
                    placeholder: 'Enter hardlimit in lbs'
                },
                {
                    name: 'RuleVariants',
                    value: backpack.RuleVariants,
                    placeholder:'Standard,Encumbrance,No rules'
                }
            ],
            buttons:[
                {
                  text: 'Delete',
                  handler: data => {
                      //getting the backpack to delete it.
                      this.storage.get('backpacks').then((val) => {
                          this.storage.remove(this.itemKey);
                          this.storage.remove(this.coinKey);
                          //splice 1 to delete one element and there for delete the whole array.
                          val.splice(index, 1);
                          this.info = val;
                          this.storage.set("backpacks", val);
                      });
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
                            data.RuleVariants.length      == 0 ||
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
                            //push the input of all the fields that are required into an JSON object.
                            this.storage.get('backpacks').then((val) => {
                                val[index] = data;
                                this.info = val;
                                this.storage.set("backpacks", val);

                                let oldKey = this.itemKey.toString();
                                let oldCoins = this.coinKey.toString();

                                this.itemKey = 'item: ' + val[index].name + val[index].HardLimit;
                                this.coinKey = 'coins: ' + val[index].name + val[index].HardLimit;

                                this.storage.set(this.itemKey, this.item);
                                this.storage.set(this.coinKey, this.coins);

                                this.storage.remove(oldKey);
                                this.storage.remove(oldCoins);
                            });

                        }
                    }
            }
            ]
        });
        EditInventory.present();
        //</editor-fold>
    }

    //open setting menu with a push
    opensettingPage() {
        this.navCtrl.push(SettingsPage);
    }


    //function for opening backpacks
    openInventory(index) {
        //<editor-fold desc="Opening the inventory with the right items.">
        //getting all backpacks
        this.storage.get('backpacks').then((val) => {
            //getting the id of the backpack that is tapped.
            let data = {
                backpack: val[index]
            };
            this.info = val;
            this.navCtrl.push(InventoryPage, data);
        }).catch((err) => {
            console.log("backpack not found!");
        });
        //</editor-fold>
    }
}
