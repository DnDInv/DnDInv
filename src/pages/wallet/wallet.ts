import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
    selector: 'page-wallet',
    templateUrl: 'wallet.html',
})
export class WalletPage {

    //declaring all the stuff we need here.
    public backpack;

    //coinKey is for the storage to get the wallet and the values of each individual backpack.
    coinKey;

    //variable for the coin pieces.
    plat: any;
    gold: any;
    elec: any;
    silv: any;
    copp: any;

    //array for the coin pieces and their values.
    coins: any = {
        "pp": this.plat,
        "gp": this.gold,
        "ep": this.elec,
        "sp": this.silv,
        "cp": this.copp,
    };

    constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {

        //get the selected backpack by the nav param.
        this.backpack = this.navParams.get('backpack');
        //set the coinKey to the right value to put in the inventory of the selected backpack.
        this.coinKey = 'coins: ' + this.backpack.name + this.backpack.HardLimit;

        //attempt to fill the input with the old numbers when loading the page
        this.storage.get(this.coinKey).then(val => {
            this.coins = val;
            //check what is in coins.
            //set the old coins in the input.
            this.plat = this.coins.pp;
            this.gold = this.coins.gp;
            this.elec = this.coins.ep;
            this.silv = this.coins.sp;
            this.copp = this.coins.cp;
        }).catch((err) => {
            //first time, this.coins does not exist yet. So we catch it and fix it.
            this.storage.set(this.coinKey, this.coins);
            this.plat = this.coins.pp;
            this.gold = this.coins.gp;
            this.elec = this.coins.ep;
            this.silv = this.coins.sp;
            this.copp = this.coins.cp;
        });

    }

    saveWallet() {
        //put the newest values into a coins array
        let coins = {
            "pp": this.plat,
            "gp": this.gold,
            "ep": this.elec,
            "sp": this.silv,
            "cp": this.copp,
        };

        // get the backpack we are in, then give that "Key" to the coins array and
        this.storage.get(this.coinKey).then((val) => {
            val = coins;
            this.coins = val;
            // set it in the storage
            this.storage.set(this.coinKey, val);
        }).catch((err) => {
            this.storage.set(this.coinKey, coins);
            this.coins = coins;
        });

        this.navCtrl.pop();

    }

    //<editor-fold desc="button functionality">
    decrementPlat() {
        if (this.plat > 0) {
            this.plat--;
        }
    }

    incrementPlat() {
        this.plat++;
    }

    decrementGold() {
        if (this.gold > 0) {
            this.gold--;
        }
    }

    incrementGold() {
        this.gold++;
    }

    decrementElec() {
        if (this.elec > 0) {
            this.elec--;
        }
    }

    incrementElec() {
        this.elec++;
    }

    decrementSilv() {
        if (this.silv > 0) {
            this.silv--;
        }
    }

    incrementSilv() {
        this.silv++;
    }

    decrementCopp() {
        if (this.copp > 0) {
            this.copp--;
        }
    }

    incrementCopp() {
        this.copp++;
    }
    //</editor-fold>
}
