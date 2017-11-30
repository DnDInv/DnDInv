import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Storage} from '@ionic/storage';

@Component({
    selector: 'page-wallet',
    templateUrl: 'wallet.html',
})
export class WalletPage {

    public backpack;
    coin: any = [];
    coinKey;

    plat: number;
    gold: number;
    elec: number;
    silv: number;
    copp: number;

    constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {

        this.backpack = this.navParams.get('backpack');
        this.coinKey = 'coins:' + this.backpack.name + this.backpack.HardLimit;

        console.log("Backpack ", this.backpack);
        this.storage.get(this.coinKey).then(val => {
            this.coin = val;
            console.log("Getting Coins ", val);
        });

    }
    submitCoins(){

        console.log("now is forty. ")
    }
}
