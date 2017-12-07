import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Storage} from '@ionic/storage';

@Component({
    selector: 'page-wallet',
    templateUrl: 'wallet.html',
})
export class WalletPage {

    //declaring all the stuff we need here.
    public backpack;

    coinKey;

    plat: any = 0;
    gold: any = 0;
    elec: any = 0;
    silv: any = 0;
    copp: any = 0;

    coins: any = [{
        "pp": this.plat,
        "gp": this.gold,
        "ep": this.elec,
        "sp": this.silv,
        "cp": this.copp,
    }];

    constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {

        this.backpack = this.navParams.get('backpack');
        console.log(" The backpack: ", this.backpack);
        this.coinKey = 'coins:' + this.backpack.name + this.backpack.HardLimit;

        //attempt to fill the input with the old numbers when loading the page
        this.storage.get(this.coinKey).then(val => {

            this.coins = val;
            //check wth is in coins.
            console.log(this.coins);
            //set the old coins in the input.
            this.plat = this.coins["0"].pp;
            this.gold = this.coins["0"].gp;
            this.elec = this.coins["0"].ep;
            this.silv = this.coins["0"].sp;
            this.copp = this.coins["0"].cp;
        }).catch((err) => {
            //first time, this.coins["0"] does not exist yet. So we catch it and fix it.
            this.storage.set(this.coinKey, [this.coins]);
            this.coins = [this.coins];
        });

    }

    saveWallet() {
        //put the newest plat values into a coins array
        let coins = {
            "pp": this.plat,
            "gp": this.gold,
            "ep": this.elec,
            "sp": this.silv,
            "cp": this.copp,
        };

        // get the backpack we are in, then give that "Key" to the coins array and
        // set it in the storage
        this.storage.get(this.coinKey).then((val) => {
            val = [];
            val.push(coins);
            this.coins = val;
            this.storage.set(this.coinKey, val);
        }).catch((err) => {
            this.storage.set(this.coinKey, [coins]);
            this.coins = [coins];
        });
        this.navCtrl.pop();

    }

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
}
