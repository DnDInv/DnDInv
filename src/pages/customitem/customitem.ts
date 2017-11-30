import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage";


@Component({
    selector: 'page-customitem',
    templateUrl: 'customitem.html',
})
export class CustomitemPage {

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

    constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
        this.itemName = "";
        this.type = "";
        this.amount = null;
        this.weight = null;
        this.price = "";
        this.attune = false;
        this.mechanical = "";
        this.flavor = "";

        //get the selected backpacks
        this.backpack = this.navParams.get("backpack");
        //console.log("last backpack: ", this.backpack.name);
        //set backpack key items for the items in individual inventories.
        this.itemKey = "item:" + this.backpack.name + this.backpack.HardLimit;
        //console.log("itemKey: ", this.itemKey);
    }


    attunement(event) {
        //console.log("checked: ", event.checked);
    }



         this.itemKey = "item: " + this.backpack.name + this.backpack.HardLimit;
        // console.log("ItemKey: ", this.itemKey);

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

        this.storage.get(this.itemKey).then((val) => {
            // val.filter(x => {return x.name == data.name}).length() > 0
            val.push(data);
            //console.log(this.itemKey);
            this.item = val;
            //console.log("Val: ", val);
            //console.log("Data: ", data);
            // this.storage.remove(this.itemKey)
            this.storage.set(this.itemKey, val);
        }).catch((err) => {
            this.storage.set(this.itemKey, [data]);
            this.item = [data];
        });
    }

}
