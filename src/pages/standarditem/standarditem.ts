import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

//import { Http } from '@angular/http';

@Component({
    selector: 'page-standarditem',
    templateUrl: 'standarditem.html',
})
export class StandarditemPage {

    weapons = [
        // simple melee weapons
        {
            "strdweapId": 0,
            "type": "Simple Melee Weapon",
            "name": "Club",
            "cost": "1 sp",
            "damage": "1d4 bludgeoning",
            "weight": "2 lb",
            "properties": "Light",
            "amount": ""
        },
        {
            "strdweapId": 1,
            "type": "Simple Melee Weapon ",
            "name": "Dagger",
            "cost": "2 gp",
            "damage": "1d4 piercing",
            "weight": "1 lb",
            "properties": "Finesse, light, thrown (range 20/60)",
            "amount": ""
        },
        {
            "strdweapId": 2,
            "type": "Simple Melee Weapon ",
            "name": "Greatclub",
            "cost": "2 sp",
            "damage": "1d8 bludgeoning",
            "weight": "10 lb",
            "properties": "Two-handed",
            "amount": ""
        },
        {
            "strdweapId": 3,
            "type": "Simple Melee Weapon ",
            "name": "Handaxe",
            "cost": "5 gp",
            "damage": "1d6 slashing",
            "weight": "2 lb",
            "properties": "Light, thrown (range 20/60)",
            "amount": ""
        },
        {
            "strdweapId": 4,
            "type": "Simple Melee Weapon ",
            "name": "Javelin",
            "cost": "5 sp",
            "damage": "1d6 piercing",
            "weight": "2 lb",
            "properties": "Thrown (range 30/120)",
            "amount": ""
        },
        {
            "strdweapId": 5,
            "type": "Simple Melee Weapon ",
            "name": "Light hammer",
            "cost": "2 gp",
            "damage": "1d4 bludgeoning",
            "weight": "2 lb",
            "properties": "Light, thrown (range 20/60)",
            "amount": ""
        },
        {
            "strdweapId": 6,
            "type": "Simple Melee Weapon ",
            "name": "Mace",
            "cost": "5 gp",
            "damage": "1d6 bludgeoning",
            "weight": "4 lb",
            "properties": "",
            "amount": ""
        },
        {
            "strdweapId": 7,
            "type": "Simple Melee Weapon ",
            "name": "Quarterstaff",
            "cost": "2 sp",
            "damage": "1d6 bludgeoning",
            "weight": "4 lb",
            "properties": "Versatile (1d8)",
            "amount": ""
        },
        {
            "strdweapId": 8,
            "type": "Simple Melee Weapon ",
            "name": "Sickle",
            "cost": "1 gp",
            "damage": "1d4 slashing",
            "weight": "2 lb",
            "properties": "Light",
            "amount": ""
        },
        {
            "strdweapId": 9,
            "type": "Simple Melee Weapon ",
            "name": "Spear",
            "cost": "1 gp",
            "damage": "1d6 piercing",
            "weight": "3 lb",
            "properties": "Thrown (range 20/60), versatile (1d8)",
            "amount": ""
        },
        // simple ranged weapons
        {
            "strdweapId": 10,
            "type": "Simple Melee Weapon ",
            "name": "Spear",
            "cost": "1 gp",
            "damage": "1d6 piercing",
            "weight": "3 lb",
            "properties": "Thrown (range 20/60), versatile (1d8)",
            "amount": ""
        }



    ];

    armor = [
        // light armor
        {
            "strdarmId": 0,
            "type": "Light armor",
            "name": "Padded",
            "cost": "5 gp",
            "armor_class": "11 + Dex modifier",
            "strenght": "",
            "stealth": "Disadvantage",
            "weight": "8 lb",
            "amount": ""
        },
        {
            "strdarmId": 1,
            "type": "Light armor",
            "name": "Leather",
            "cost": "10 gp",
            "armor_class": "11 + Dex modifier",
            "strenght": "",
            "stealth": "",
            "weight": "10 lb",
            "amount": ""
        },
        {
            "strdarmId": 2,
            "type": "Light armor",
            "name": "Studded leather",
            "cost": "45 gp",
            "armor_class": "12 + Dex modifier",
            "strenght": "",
            "stealth": "",
            "weight": "13 lb",
            "amount": ""
        },
        //medium armor
        {
            "strdarmId": 3,
            "type": "Medium armor",
            "name": "Hide",
            "cost": "10 gp",
            "armor_class": "12 + Dex modifier (max 2)",
            "strenght": "",
            "stealth": "",
            "weight": "12 lb",
            "amount": ""
        },
        {
            "strdarmId": 4,
            "type": "Medium armor",
            "name": "Chain shirt",
            "cost": "50 gp",
            "armor_class": "13 + Dex modifier (max 2)",
            "strenght": "",
            "stealth": "",
            "weight": "20 lb",
            "amount": ""
        },
        {
            "strdarmId": 5,
            "type": "Medium armor",
            "name": "Scale mail",
            "cost": "50 gp",
            "armor_class": "14 + Dex modifier (max 2)",
            "strenght": "",
            "stealth": "Disadvantage",
            "weight": "45 lb",
            "amount": ""
        },
        {
            "strdarmId": 6,
            "type": "Medium armor",
            "name": "Breastplate",
            "cost": "400 gp",
            "armor_class": "14 + Dex modifier (max 2)",
            "strenght": "",
            "stealth": "",
            "weight": "20 lb",
            "amount": ""
        },
        {
            "strdarmId": 7,
            "type": "Medium armor",
            "name": "Half plate",
            "cost": "750 gp",
            "armor_class": "15 + Dex modifier (max 2)",
            "strenght": "",
            "stealth": "Disadvantage",
            "weight": "40 lb",
            "amount": ""
        },
        // heavy armor
        {
            "strdarmId": 8,
            "type": "Heavy armor",
            "name": "Ring mail",
            "cost": "30 gp",
            "armor_class": "14",
            "strenght": "",
            "stealth": "Disadvantage",
            "weight": "40 lb",
            "amount": ""
        },
        {
            "strdarmId": 9,
            "type": "Heavy armor",
            "name": "Chain mail",
            "cost": "75 gp",
            "armor_class": "16",
            "strenght": "Str 13",
            "stealth": "Disadvantage",
            "weight": "55 lb",
            "amount": ""
        },
        {
            "strdarmId": 10,
            "type": "Heavy armor",
            "name": "Splint",
            "cost": "200 gp",
            "armor_class": "17",
            "strenght": "Str 15",
            "stealth": "Disadvantage",
            "weight": "60 lb",
            "amount": ""
        },
        {
            "strdarmId": 11,
            "type": "Heavy armor",
            "name": "Plate",
            "cost": "1.500 gp",
            "armor_class": "18",
            "strenght": "Str 15",
            "stealth": "Disadvantage",
            "weight": "65 lb",
            "amount": ""
        },
        // shields
        {
            "strdarmId": 12,
            "type": "Shield",
            "name": "Shield",
            "cost": "10 gp",
            "armor_class": "+2",
            "strenght": "",
            "stealth": "",
            "weight": "6 lb",
            "amount": ""
        }
    ];


    constructor(public navCtrl: NavController, public navParams: NavParams) {

    }


}
