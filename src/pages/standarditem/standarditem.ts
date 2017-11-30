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

    gear = [
        {
            "strgearId": 0,
            "type": "Adventuring Gear",
            "name": "Abacus",
            "cost": "2 gp",
            "weight": "2 lb",
            "amount": ""
        },
        {
            "strgearId": 1,
            "type": "Adventuring Gear",
            "name": "Acid (vial)",
            "cost": "25 gp",
            "weight": "1 lb",
            "amount": ""
        },
        {
            "strgearId": 2,
            "type": "Adventuring Gear",
            "name": "Alechemist's fire",
            "cost": "50 gp",
            "weight": "1 lb",
            "amount": ""
        },
        {
            "strgearId": 3,
            "type": "Adventuring Gear",
            "name": "Antitoxin (vial)",
            "cost": "50 gp",
            "weight": "",
            "amount": ""
        },
        {
            "strgearId": 4,
            "type": "Adventuring Gear",
            "name": "Crystal",
            "cost": "10 gp",
            "weight": "1 lb",
            "amount": ""
        },
        {
            "strgearId": 5,
            "type": "Adventuring Gear",
            "name": "Orb",
            "cost": "20 gp",
            "weight": "3 lb",
            "amount": ""
        },
        {
            "strgearId": 6,
            "type": "Adventuring Gear",
            "name": "Rod",
            "cost": "10 gp",
            "weight": "2 lb",
            "amount": ""
        },
        {
            "strgearId": 7,
            "type": "Adventuring Gear",
            "name": "Staff",
            "cost": "5 gp",
            "weight": "4 lb",
            "amount": ""
        },
        {
            "strgearId": 8,
            "type": "Adventuring Gear",
            "name": "Wand",
            "cost": "10 gp",
            "weight": "1 lb",
            "amount": ""
        },
        {
            "strgearId": 9,
            "type": "Adventuring Gear",
            "name": "Backpack",
            "cost": "2 gp",
            "weight": "5 lb",
            "amount": ""
        },
        {
            "strgearId": 10,
            "type": "Adventuring Gear",
            "name": "Ball bearings",
            "cost": "1 gp",
            "weight": "2 lb",
            "amount": ""
        },
        {
            "strgearId": 11,
            "type": "Adventuring Gear",
            "name": "Barrel",
            "cost": "2 gp",
            "weight": "70 lb",
            "amount": ""
        },
        {
            "strgearId": 12,
            "type": "Adventuring Gear",
            "name": "Basket",
            "cost": "2 sp",
            "weight": "2 lb",
            "amount": ""
        },
        {
            "strgearId": 13,
            "type": "Adventuring Gear",
            "name": "Bedroll",
            "cost": "1 gp",
            "weight": "7 lb",
            "amount": ""
        },
        {
            "strgearId": 14,
            "type": "Adventuring Gear",
            "name": "Bell",
            "cost": "1 gp",
            "weight": "",
            "amount": ""
        },
        {
            "strgearId": 15,
            "type": "Adventuring Gear",
            "name": "Blanket",
            "cost": "5 sp",
            "weight": "3 lb",
            "amount": ""
        },
        {
            "strgearId": 16,
            "type": "Adventuring Gear",
            "name": "Block and tackle",
            "cost": "1 gp",
            "weight": "5 lb",
            "amount": ""
        },
        {
            "strgearId": 17,
            "type": "Adventuring Gear",
            "name": "Book",
            "cost": "25 gp",
            "weight": "5 lb",
            "amount": ""
        },
        {
            "strgearId": 18,
            "type": "Adventuring Gear",
            "name": "Bottle, glass",
            "cost": "2 gp",
            "weight": "2 lb",
            "amount": ""
        },
        {
            "strgearId": 19,
            "type": "Adventuring Gear",
            "name": "Bucket",
            "cost": "5 cp",
            "weight": "2 lb",
            "amount": ""
        },
        {
            "strgearId": 20,
            "type": "Adventuring Gear",
            "name": "caltrops",
            "cost": "1 gp",
            "weight": "2 lb",
            "amount": ""
        },
        {
            "strgearId": 21,
            "type": "Adventuring Gear",
            "name": "Candle",
            "cost": "1 cp",
            "weight": "",
            "amount": ""
        },
        {
            "strgearId": 22,
            "type": "Adventuring Gear",
            "name": "Case, crossbow bolt",
            "cost": "1 gp",
            "weight": "1 lb",
            "amount": ""
        },
        {
            "strgearId": 23,
            "type": "Adventuring Gear",
            "name": "Case, map or scroll",
            "cost": "1 gp",
            "weight": "1 lb",
            "amount": ""
        },
        {
            "strgearId": 24,
            "type": "Adventuring Gear",
            "name": "chain (10 feet)",
            "cost": "5 gp",
            "weight": "10 lb",
            "amount": ""
        },
        {
            "strgearId": 25,
            "type": "Adventuring Gear",
            "name": "Chalk (1 piece)",
            "cost": "1 cp",
            "weight": "",
            "amount": ""
        },
        {
            "strgearId": 26,
            "type": "Adventuring Gear",
            "name": "Chest",
            "cost": "5 gp",
            "weight": "25 lb",
            "amount": ""
        },
        {
            "strgearId": 27,
            "type": "Adventuring Gear",
            "name": "Climber's kit",
            "cost": "25 gp",
            "weight": "12 lb",
            "amount": ""
        },
        {
            "strgearId": 28,
            "type": "Adventuring Gear",
            "name": "Clothes, common",
            "cost": "5 sp",
            "weight": "3 lb",
            "amount": ""
        },
        {
            "strgearId": 29,
            "type": "Adventuring Gear",
            "name": "Clothes, costume",
            "cost": "5 gp",
            "weight": "4 lb",
            "amount": ""
        },
        {
            "strgearId": 30,
            "type": "Adventuring Gear",
            "name": "Clothes, fine",
            "cost": "15 gp",
            "weight": "6 lb",
            "amount": ""
        },
        {
            "strgearId": 31,
            "type": "Adventuring Gear",
            "name": "Clothes, traveler's",
            "cost": "2 gp",
            "weight": "4 lb",
            "amount": ""
        },
        {
            "strgearId": 32,
            "type": "Adventuring Gear",
            "name": "Component pouch",
            "cost": "25 gp",
            "weight": "2 lb",
            "amount": ""
        },
        {
            "strgearId": 33,
            "type": "Adventuring Gear",
            "name": "Crowbar",
            "cost": "2 gp",
            "weight": "5 lb",
            "amount": ""
        },
        {
            "strgearId": 34,
            "type": "Adventuring Gear",
            "name": "Sprig of mistletoe",
            "cost": "1 gp",
            "weight": "",
            "amount": ""
        },
        {
            "strgearId": 35,
            "type": "Adventuring Gear",
            "name": "Totem",
            "cost": "1 gp",
            "weight": "",
            "amount": ""
        },
        {
            "strgearId": 36,
            "type": "Adventuring Gear",
            "name": "Wooden staff",
            "cost": "5 gp",
            "weight": "4 lb",
            "amount": ""
        },
        {
            "strgearId": 37,
            "type": "Adventuring Gear",
            "name": "Yew wand",
            "cost": "10 gp",
            "weight": "1 lb",
            "amount": ""
        },
        {
            "strgearId": 38,
            "type": "Adventuring Gear",
            "name": "Fishing tackle",
            "cost": "1 gp",
            "weight": "4 lb",
            "amount": ""
        },
        {
            "strgearId": 39,
            "type": "Adventuring Gear",
            "name": "Flask or tankard",
            "cost": "2 cp",
            "weight": "1 lb",
            "amount": ""
        },
        {
            "strgearId": 40,
            "type": "Adventuring Gear",
            "name": "Grappling hook",
            "cost": "2 gp",
            "weight": "4 lb",
            "amount": ""
        },
        {
            "strgearId": 41,
            "type": "Adventuring Gear",
            "name": "Hammer",
            "cost": "1 gp",
            "weight": "3 lb",
            "amount": ""
        },
        {
            "strgearId": 42,
            "type": "Adventuring Gear",
            "name": "Hammer, sledge",
            "cost": "2 gp",
            "weight": "10 lb",
            "amount": ""
        },
        {
            "strgearId": 43,
            "type": "Adventuring Gear",
            "name": "Healer's kit",
            "cost": "5 gp",
            "weight": "3 lb",
            "amount": ""
        },
        {
            "strgearId": 44,
            "type": "Adventuring Gear",
            "name": "Amulet",
            "cost": "5 gp",
            "weight": "1 lb",
            "amount": ""
        },
        {
            "strgearId": 45,
            "type": "Adventuring Gear",
            "name": "Emblem",
            "cost": "5 gp",
            "weight": "",
            "amount": ""
        },
        {
            "strgearId": 46,
            "type": "Adventuring Gear",
            "name": "Reliquary",
            "cost": "5 gp",
            "weight": "2 lb",
            "amount": ""
        },
        {
            "strgearId": 47,
            "type": "Adventuring Gear",
            "name": "Holy water (flask)",
            "cost": "25 gp",
            "weight": "1 lb",
            "amount": ""
        },
        {
            "strgearId": 48,
            "type": "Adventuring Gear",
            "name": "Hourglass",
            "cost": "25 gp",
            "weight": "1 lb",
            "amount": ""
        },
        {
            "strgearId": 49,
            "type": "Adventuring Gear",
            "name": "Hunting trap",
            "cost": "5 gp",
            "weight": "25 lb",
            "amount": ""
        },
        {
            "strgearId": 50,
            "type": "Adventuring Gear",
            "name": "Ink (1 ounce bottle)",
            "cost": "10 gp",
            "weight": "",
            "amount": ""
        },
        {
            "strgearId": 51,
            "type": "Adventuring Gear",
            "name": "Ink pen",
            "cost": "2 cp",
            "weight": "",
            "amount": ""
        },
        {
            "strgearId": 52,
            "type": "Adventuring Gear",
            "name": "Jug or pitcher",
            "cost": "2 cp",
            "weight": "4 lb",
            "amount": ""
        },
        {
            "strgearId": 53,
            "type": "Adventuring Gear",
            "name": "Ladder (10-foot)",
            "cost": "1 sp",
            "weight": "25 lb",
            "amount": ""
        },
        {
            "strgearId": 54,
            "type": "Adventuring Gear",
            "name": "Lamp",
            "cost": "5 sp",
            "weight": "1 lb",
            "amount": ""
        },
        {
            "strgearId": 55,
            "type": "Adventuring Gear",
            "name": "Latern, bullseye",
            "cost": "10 gp",
            "weight": "2 lb",
            "amount": ""
        },
        {
            "strgearId": 56,
            "type": "Adventuring Gear",
            "name": "Latern, hooded",
            "cost": "5 gp",
            "weight": "2 lb",
            "amount": ""
        },
        {
            "strgearId": 57,
            "type": "Adventuring Gear",
            "name": "Lock",
            "cost": "10 gp",
            "weight": "1 lb",
            "amount": ""
        },
        {
            "strgearId": 58,
            "type": "Adventuring Gear",
            "name": "Magnifying glass",
            "cost": "100 gp",
            "weight": "",
            "amount": ""
        },
        {
            "strgearId": 59,
            "type": "Adventuring Gear",
            "name": "Manacles",
            "cost": "2 gp",
            "weight": "6 lb",
            "amount": ""
        },
        {
            "strgearId": 60,
            "type": "Adventuring Gear",
            "name": "Mess kit",
            "cost": "2 sp",
            "weight": "1 lb",
            "amount": ""
        },
        {
            "strgearId": 61,
            "type": "Adventuring Gear",
            "name": "Mirror, steel",
            "cost": "5 gp",
            "weight": "0,5 lb",
            "amount": ""
        },
        {
            "strgearId": 62,
            "type": "Adventuring Gear",
            "name": "Oil (flask)",
            "cost": "1 sp",
            "weight": "1 lb",
            "amount": ""
        },
        {
            "strgearId": 63,
            "type": "Adventuring Gear",
            "name": "Paper (one sheet)",
            "cost": "2 sp",
            "weight": "",
            "amount": ""
        },
        {
            "strgearId": 64,
            "type": "Adventuring Gear",
            "name": "Parchment (one sheet)",
            "cost": "1 sp",
            "weight": "",
            "amount": ""
        },
        {
            "strgearId": 65,
            "type": "Adventuring Gear",
            "name": "Perfume (vial)",
            "cost": "5 gp",
            "weight": "",
            "amount": ""
        },
        {
            "strgearId": 66,
            "type": "Adventuring Gear",
            "name": "Pick, miner's",
            "cost": "2 gp",
            "weight": "10 lb",
            "amount": ""
        },
        {
            "strgearId": 67,
            "type": "Adventuring Gear",
            "name": "Piton",
            "cost": "5 cp",
            "weight": "0,25 lb",
            "amount": ""
        },
        {
            "strgearId": 68,
            "type": "Adventuring Gear",
            "name": "Posion, basic (vial)",
            "cost": "100 gp",
            "weight": "",
            "amount": ""
        },
        {
            "strgearId": 69,
            "type": "Adventuring Gear",
            "name": "Pole (10-foot)",
            "cost": "5 cp",
            "weight": "7 lb",
            "amount": ""
        },
        {
            "strgearId": 70,
            "type": "Adventuring Gear",
            "name": "Pot, iron",
            "cost": "2 gp",
            "weight": "10 lb",
            "amount": ""
        },
        {
            "strgearId": 71,
            "type": "Adventuring Gear",
            "name": "Potion of healing",
            "cost": "50 gp",
            "weight": "0,5 lb",
            "amount": ""
        },
        {
            "strgearId": 72,
            "type": "Adventuring Gear",
            "name": "Pouch",
            "cost": "5 sp",
            "weight": "1 lb",
            "amount": ""
        },
        {
            "strgearId": 73,
            "type": "Adventuring Gear",
            "name": "Quiver",
            "cost": "1 gp",
            "weight": "1 lb",
            "amount": ""
        },
        {
            "strgearId": 74,
            "type": "Adventuring Gear",
            "name": "Ram, portable",
            "cost": "4 gp",
            "weight": "35 lb",
            "amount": ""
        },
        {
            "strgearId": 75,
            "type": "Adventuring Gear",
            "name": "Rations (1 day)",
            "cost": "5 sp",
            "weight": "2 lb",
            "amount": ""
        },
        {
            "strgearId": 76,
            "type": "Adventuring Gear",
            "name": "Robes",
            "cost": "1 gp",
            "weight": "4 lb",
            "amount": ""
        },
        {
            "strgearId": 77,
            "type": "Adventuring Gear",
            "name": "Rope, hempen (50 feet)",
            "cost": "1 gp",
            "weight": "10 lb",
            "amount": ""
        },
        {
            "strgearId": 78,
            "type": "Adventuring Gear",
            "name": "Rope, silk (50 feet)",
            "cost": "10 gp",
            "weight": "5 lb",
            "amount": ""
        },
        {
            "strgearId": 79,
            "type": "Adventuring Gear",
            "name": "Sack",
            "cost": "1 cp",
            "weight": "0,5 lb",
            "amount": ""
        },
        {
            "strgearId": 80,
            "type": "Adventuring Gear",
            "name": "Scale, merchant's",
            "cost": "5 gp",
            "weight": "3 lb",
            "amount": ""
        },
        {
            "strgearId": 81,
            "type": "Adventuring Gear",
            "name": "Sealing wax",
            "cost": "1 sp",
            "weight": "",
            "amount": ""
        },
        {
            "strgearId": 82,
            "type": "Adventuring Gear",
            "name": "Shovel",
            "cost": "2 gp",
            "weight": "5 lb",
            "amount": ""
        },
        {
            "strgearId": 83,
            "type": "Adventuring Gear",
            "name": "Signal Whistle",
            "cost": "5 cp",
            "weight": "",
            "amount": ""
        },
        {
            "strgearId": 84,
            "type": "Adventuring Gear",
            "name": "Signet ring",
            "cost": "5 gp",
            "weight": "",
            "amount": ""
        },
        {
            "strgearId": 85,
            "type": "Adventuring Gear",
            "name": "Soap",
            "cost": "1 cp",
            "weight": "",
            "amount": ""
        },
        {
            "strgearId": 86,
            "type": "Adventuring Gear",
            "name": "Spellbook",
            "cost": "50 gp",
            "weight": "3 lb",
            "amount": ""
        },
        {
            "strgearId": 87,
            "type": "Adventuring Gear",
            "name": "Spikes, iron",
            "cost": "1 sp",
            "weight": "5 lb",
            "amount": ""
        },
        {
            "strgearId": 88,
            "type": "Adventuring Gear",
            "name": "Spyglass",
            "cost": "1000 gp",
            "weight": "1 lb",
            "amount": ""
        },
        {
            "strgearId": 89,
            "type": "Adventuring Gear",
            "name": "Tent, two-person",
            "cost": "2 gp",
            "weight": "20 lb",
            "amount": ""
        },
        {
            "strgearId": 90,
            "type": "Adventuring Gear",
            "name": "Tinderbox",
            "cost": "5 sp",
            "weight": "1 lb",
            "amount": ""
        },
        {
            "strgearId": 91,
            "type": "Adventuring Gear",
            "name": "Torch",
            "cost": "1 cp",
            "weight": "1 lb",
            "amount": ""
        },
        {
            "strgearId": 92,
            "type": "Adventuring Gear",
            "name": "Vial",
            "cost": "1 gp",
            "weight": "",
            "amount": ""
        },
        {
            "strgearId": 93,
            "type": "Adventuring Gear",
            "name": "Waterskin",
            "cost": "2 sp",
            "weight": "5 lb",
            "amount": ""
        },
        {
            "strgearId": 94,
            "type": "Adventuring Gear",
            "name": "Whetstone",
            "cost": "1 cp",
            "weight": "1 lb",
            "amount": ""
        }
    ];

    ammunition = [
            {
                "str]ammoId": 0,
                "type": "Ammunition",
                "name": "Arrow",
                "cost": "",
                "weight": "",
                "amount": ""
            },
            {
                "strgearId": 1,
                "type": "Ammunition",
                "name": "Blowgun needles",
                "cost": "",
                "weight": "",
                "amount": ""
            },
            {
                "strgearId": 2,
                "type": "Ammunition",
                "name": "Crossbow bolts",
                "cost": "",
                "weight": "",
                "amount": ""
            },
            {
                "strgearId": 3,
                "type": "Ammunition",
                "name": "Sling bullets",
                "cost": "",
                "weight": "",
                "amount": ""
            }
        ];




    constructor(public navCtrl: NavController, public navParams: NavParams) {

    }

    clickable(index) {
        console.log("Clicked id: ", index);
    }
}
