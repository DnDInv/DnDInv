import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage";


@Component({
    selector: 'page-customitem',
    templateUrl: 'customitem.html',
})
export class CustomitemPage {

    //<editor-fold desc="variables">
    //backpack variable for the selected backpack
    public backpack;
    //item to sync all the objects in this.itemKey.
    item: any = [];
    //itemKey to set the items from the individual backpacks
    itemKey;

    //the itemName field.
    itemName: any;
    //the Type field.
    type: any;
    //the amount field.
    amount: number;
    //the weight field.
    weight: number;
    //the price field.
    price: any;
    //the attune checkbox.
    attune: boolean;
    //the mechanical field.
    mechanical: any;
    //the flavor field.
    flavor: any;
    //</editor-fold>

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public storage: Storage) {
        //<editor-fold desc="variables default values.">
        this.itemName = "";
        this.type = "";
        this.amount = null;
        this.weight = null;
        this.price = "";
        this.attune = false;
        this.mechanical = "";
        this.flavor = "";
        //</editor-fold

        //<editor-fold desc="getting the selected backpack.">
        //get the selected backpacks
        this.backpack = this.navParams.get("backpack");
        //set backpack key items for the items in individual inventories.
        this.itemKey = "item: " + this.backpack.name + this.backpack.HardLimit;
        //</editor-fold
    }

    createCustom() {
        //<editor-fold desc="set itemKey for the selected backpack">
         this.itemKey = "item: " + this.backpack.name + this.backpack.HardLimit;
        //</editor-fold>

        //<editor-fold desc="input data">
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
        //</editor-fold>

        //<editor-fold desc="Save and Add Custom item.">
        //get the items from the selected backpack thats been retrieved within the constructor.
        this.storage.get(this.itemKey).then((val) => {
            //pushes the new data that has been filled into the fields into the old array thats been retrieved in the constructor
            //and add the new one item to the old array
            val.push(data);
            //set this.item to val so that the push can validate.
            this.item = val;
            //set the new array to into the old one replacing everything except the new item thats been created.
            this.storage.set(this.itemKey, val);
        }).catch((err) => {
            this.storage.set(this.itemKey, [data]);
            this.item = [data];
        });
        this.navCtrl.pop();
        //</editor-fold>
    }
}
