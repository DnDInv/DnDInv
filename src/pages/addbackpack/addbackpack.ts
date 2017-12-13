import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage";

@Component({
    selector: 'page-addbackpack',
    templateUrl: 'addbackpack.html',
})
export class AddbackpackPage {

    name: any;
    strength: number;
    Carrying_Size: any;
    HardLimit: number;
    RuleVariants: any;

    info: any = [];


    constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {

        this.name = "";
        this.strength = null;
        this.Carrying_Size = "";
        this.HardLimit = null;
        this.RuleVariants = "";
    }

    addBackpack() {
        let data = {
            "name": this.name,
            "strength": this.strength,
            "Carrying_Size": this.Carrying_Size,
            "HardLimit": this.HardLimit,
            "RuleVariants": this.RuleVariants
        };

        this.storage.get('backpacks').then((val) => {
            // val.filter(x => {return x.name == data.name}).length() > 0
            val.push(data);
            this.info = val;
            this.storage.set("backpacks", val);
        }).catch((err) => {
            this.storage.set("backpacks", [data]);
            this.info = [data];
        });
        this.navCtrl.pop();
    }

}
