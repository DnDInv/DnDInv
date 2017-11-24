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
            "type": "Simple Ranged Weapon ",
            "name": "Crossbow, light",
            "cost": "25 gp",
            "damage": "1d8 piercing",
            "weight": "5 lb",
            "properties": "Ammunition (range 80/320), loading, two-handed",
            "amount": ""
        },
        {
            "strdweapId": 11,
            "type": "Simple Ranged Weapon ",
            "name": "Dart",
            "cost": "5 cp",
            "damage": "1d4 piercing",
            "weight": "1/4 lb",
            "properties": "Finesse, thrown (range 20/60)",
            "amount": ""
        },
        {
            "strdweapId": 12,
            "type": "Simple Ranged Weapon ",
            "name": "Shortbow",
            "cost": "25 gp",
            "damage": "1d6 piercing",
            "weight": "5 lb",
            "properties": "Ammunition (range 80/320),two-handed",
            "amount": ""
        },
        {
            "strdweapId": 13,
            "type": "Simple Ranged Weapon ",
            "name": "Sling",
            "cost": "1 sp",
            "damage": "1d4 bludgeoning",
            "weight": "",
            "properties": "Ammunition (range 30/120)",
            "amount": ""
        },
        // martial melee weapons
        {
            "strdweapId": 14,
            "type": "Martial Melee Weapon ",
            "name": "Battleaxe",
            "cost": "10 gp",
            "damage": "1d8 slashing",
            "weight": "4 lb",
            "properties": "Versatile (1d10)",
            "amount": ""
        },
        {
            "strdweapId": 15,
            "type": "Martial Melee Weapon ",
            "name": "Flail",
            "cost": "10 gp",
            "damage": "1d8 bludgeoning",
            "weight": "2 lb",
            "properties": "",
            "amount": ""
        },
        {
            "strdweapId": 16,
            "type": "Martial Melee Weapon ",
            "name": "Glaive",
            "cost": "20 gp",
            "damage": "1d10 slashing",
            "weight": "6 lb",
            "properties": "Heavy, reach, two-handed",
            "amount": ""
        },
        {
            "strdweapId": 17,
            "type": "Martial Melee Weapon ",
            "name": "Greataxe",
            "cost": "30 gp",
            "damage": "1d12 slashing",
            "weight": "7 lb",
            "properties": "Heavy, two-handed",
            "amount": ""
        },
        {
            "strdweapId": 18,
            "type": "Martial Melee Weapon ",
            "name": "Greatsword",
            "cost": "50 gp",
            "damage": "2d6 slashing",
            "weight": "6 lb",
            "properties": "Heavy, two-handed",
            "amount": ""
        },
        {
            "strdweapId": 19,
            "type": "Martial Melee Weapon ",
            "name": "Halberd",
            "cost": "20 gp",
            "damage": "1d19 slashing",
            "weight": "6 lb",
            "properties": "Heavy, reach, two-handed",
            "amount": ""
        },
        {
            "strdweapId": 20,
            "type": "Martial Melee Weapon ",
            "name": "Lance",
            "cost": "10 gp",
            "damage": "1d12 bludgeoning",
            "weight": "6 lb",
            "properties": "Reach, Special",
            "amount": ""
        },
        {
            "strdweapId": 21,
            "type": "Martial Melee Weapon ",
            "name": "Longsword",
            "cost": "15 gp",
            "damage": "1d8 slashing",
            "weight": "3 lb",
            "properties": "Versatile (1d10)",
            "amount": ""
        },
        {
            "strdweapId": 22,
            "type": "Martial Melee Weapon ",
            "name": "Maul",
            "cost": "10 gp",
            "damage": "2d6 bludgeoning",
            "weight": "10 lb",
            "properties": "Heavy, two-handed",
            "amount": ""
        },
        {
            "strdweapId": 23,
            "type": "Martial Melee Weapon ",
            "name": "Morningstar",
            "cost": "15 gp",
            "damage": "1d8 piercing",
            "weight": "4 lb",
            "properties": "",
            "amount": ""
        },
        {
            "strdweapId": 24,
            "type": "Martial Melee Weapon ",
            "name": "Pike",
            "cost": "5 gp",
            "damage": "1d10 piercing",
            "weight": "18 lb",
            "properties": "Heavy, reach, two-handed",
            "amount": ""
        },
        {
            "strdweapId": 25,
            "type": "Martial Melee Weapon ",
            "name": "Rapier",
            "cost": "25 gp",
            "damage": "1d8 piercing",
            "weight": "2 lb",
            "properties": "Finesse",
            "amount": ""
        },
        {
            "strdweapId": 26,
            "type": "Martial Melee Weapon ",
            "name": "Scimitar",
            "cost": "25 gp",
            "damage": "1d6 slashing",
            "weight": "3 lb",
            "properties": "Finesse, light",
            "amount": ""
        },
        {
            "strdweapId": 27,
            "type": "Martial Melee Weapon ",
            "name": "Shortsword",
            "cost": "10 gp",
            "damage": "1d6 piercing",
            "weight": "2 lb",
            "properties": "Finesse, light",
            "amount": ""
        },
        {
            "strdweapId": 28,
            "type": "Martial Melee Weapon ",
            "name": "Trident",
            "cost": "5 gp",
            "damage": "1d6 piercing",
            "weight": "4 lb",
            "properties": "Thrown (range 20/60), Versatile (1d8)",
            "amount": ""
        },
        {
            "strdweapId": 29,
            "type": "Martial Melee Weapon ",
            "name": "War pick",
            "cost": "5 gp",
            "damage": "1d8 piercing",
            "weight": "2 lb",
            "properties": "",
            "amount": ""
        },
        {
            "strdweapId": 30,
            "type": "Martial Melee Weapon ",
            "name": "Warhammer",
            "cost": "15 gp",
            "damage": "1d8 bludgeoning",
            "weight": "2 lb",
            "properties": "Versatile (1d10)",
            "amount": ""
        },
        {
            "strdweapId": 31,
            "type": "Martial Melee Weapon ",
            "name": "Whip",
            "cost": "2 gp",
            "damage": "1d4 slashing",
            "weight": "3 lb",
            "properties": "Finesse, reach",
            "amount": ""
        },
        // martial ranged weapons
        {
            "strdweapId": 32,
            "type": "Martial Ranged Weapon ",
            "name": "Blowgun",
            "cost": "10 gp",
            "damage": "1 piercing",
            "weight": "1 lb",
            "properties": "Ammunition (range 25/100), loading",
            "amount": ""
        },
        {
            "strdweapId": 33,
            "type": "Martial Ranged Weapon ",
            "name": "Crossbow, hand",
            "cost": "75 gp",
            "damage": "1d6 piercing",
            "weight": "3 lb",
            "properties": "Ammunition (range 30/120), light, loading",
            "amount": ""
        },
        {
            "strdweapId": 34,
            "type": "Martial Ranged Weapon ",
            "name": "Crossbow, heavy",
            "cost": "50 gp",
            "damage": "1d10 piercing",
            "weight": "18 lb",
            "properties": "Ammunition (range 100/400), heavy, loading, two-handed",
            "amount": ""
        },
        {
            "strdweapId": 35,
            "type": "Martial Ranged Weapon ",
            "name": "Longbow",
            "cost": "50 gp",
            "damage": "18 piercing",
            "weight": "2 lb",
            "properties": "Ammunition (range 150/600), heavy, two-handed",
            "amount": ""
        },
        {
            "strdweapId": 36,
            "type": "Martial Ranged Weapon ",
            "name": "Net",
            "cost": "1 gp",
            "damage": "",
            "weight": "3 lb",
            "properties": "Special, thrown (range 5/15)",
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
            "strength": "",
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

    clickable(index) {
        console.log("Clicked id: ", index);
    }
}
