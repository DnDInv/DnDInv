import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

//import { Http } from '@angular/http';

@Component({
    selector: 'page-standarditem',
    templateUrl: 'standarditem.html',
})
export class StandarditemPage {

    weapons = [
        {
            "strdweapId": 0,
            "type": "Simple Melee Weapon",
            "name": "Club",
            "cost": "1 SP",
            "damage": "1d4 bludgeoning",
            "weight": "2 LB",
            "properties": "Light",
            "amount": ""
        },
        {
            "strdweapId": 1,
            "type": "Simple Melee Weapon ",
            "name": "Hammer",
            "cost": "2 SP",
            "damage": "1d4 bludgeoning",
            "weight": "4 LB",
            "properties": "Medium",
            "amount": ""
        },
        {
            "strdweapId": 2,
            "type": "Advanced Melee Weapon ",
            "name": "LongSword",
            "cost": "4 SP",
            "damage": "1d4 bludgeoning",
            "weight": "6 LB",
            "properties": "IDK",
            "amount": ""
        }
    ];
    armor = [
        {
            "strdarmId": 0,
            "type": "Light armor",
            "name": "Padded",
            "Cost": "5 GP",
            "armor_class": "11 + dex modifier",
            "strenghtreq": "",
            "Stealth": "Disadvantage",
            "weight": "8 lb",
            "amount": ""
        }
    ];

    constructor(public navCtrl: NavController, public navParams: NavParams) {

    }


}
