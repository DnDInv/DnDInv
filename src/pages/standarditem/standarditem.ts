import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { Storage } from "@ionic/storage";


@Component({
    selector: 'page-standarditem',
    templateUrl: 'standarditem.html',
})
export class StandarditemPage {

    standardItems = [
        //<editor-fold desc="simple melee weapons">
        {
            "strditemId": 0,
            "type": "Simple Melee Weapon",
            "name": "Club",
            "cost": "1 sp",
            "damage": "1d4 bludgeoning",
            "weight": "2 lb",
            "properties": "Light",
            "amount": ""
        },
        {
            "strditemId": 1,
            "type": "Simple Melee Weapon ",
            "name": "Dagger",
            "cost": "2 gp",
            "damage": "1d4 piercing",
            "weight": "1 lb",
            "properties": "Finesse, light, thrown (range 20/60)",
            "amount": ""
        },
        {
            "strditemId": 2,
            "type": "Simple Melee Weapon ",
            "name": "Greatclub",
            "cost": "2 sp",
            "damage": "1d8 bludgeoning",
            "weight": "10 lb",
            "properties": "Two-handed",
            "amount": ""
        },
        {
            "strditemId": 3,
            "type": "Simple Melee Weapon ",
            "name": "Handaxe",
            "cost": "5 gp",
            "damage": "1d6 slashing",
            "weight": "2 lb",
            "properties": "Light, thrown (range 20/60)",
            "amount": ""
        },
        {
            "strditemId": 4,
            "type": "Simple Melee Weapon ",
            "name": "Javelin",
            "cost": "5 sp",
            "damage": "1d6 piercing",
            "weight": "2 lb",
            "properties": "Thrown (range 30/120)",
            "amount": ""
        },
        {
            "strditemId": 5,
            "type": "Simple Melee Weapon ",
            "name": "Light hammer",
            "cost": "2 gp",
            "damage": "1d4 bludgeoning",
            "weight": "2 lb",
            "properties": "Light, thrown (range 20/60)",
            "amount": ""
        },
        {
            "strditemId": 6,
            "type": "Simple Melee Weapon ",
            "name": "Mace",
            "cost": "5 gp",
            "damage": "1d6 bludgeoning",
            "weight": "4 lb",
            "properties": "",
            "amount": ""
        },
        {
            "strditemId": 7,
            "type": "Simple Melee Weapon ",
            "name": "Quarterstaff",
            "cost": "2 sp",
            "damage": "1d6 bludgeoning",
            "weight": "4 lb",
            "properties": "Versatile (1d8)",
            "amount": ""
        },
        {
            "strditemId": 8,
            "type": "Simple Melee Weapon ",
            "name": "Sickle",
            "cost": "1 gp",
            "damage": "1d4 slashing",
            "weight": "2 lb",
            "properties": "Light",
            "amount": ""
        },
        {
            "strditemId": 9,
            "type": "Simple Melee Weapon ",
            "name": "Spear",
            "cost": "1 gp",
            "damage": "1d6 piercing",
            "weight": "3 lb",
            "properties": "Thrown (range 20/60), versatile (1d8)",
            "amount": ""
        },
        //</editor-fold>

        //<editor-fold desc="simple ranged weapons">
        {
            "strditemId": 10,
            "type": "Simple Ranged Weapon ",
            "name": "Crossbow, light",
            "cost": "25 gp",
            "damage": "1d8 piercing",
            "weight": "5 lb",
            "properties": "Ammunition (range 80/320), loading, two-handed",
            "amount": ""
        },
        {
            "strditemId": 11,
            "type": "Simple Ranged Weapon ",
            "name": "Dart",
            "cost": "5 cp",
            "damage": "1d4 piercing",
            "weight": "1/4 lb",
            "properties": "Finesse, thrown (range 20/60)",
            "amount": ""
        },
        {
            "strditemId": 12,
            "type": "Simple Ranged Weapon ",
            "name": "Shortbow",
            "cost": "25 gp",
            "damage": "1d6 piercing",
            "weight": "5 lb",
            "properties": "Ammunition (range 80/320),two-handed",
            "amount": ""
        },
        {
            "strditemId": 13,
            "type": "Simple Ranged Weapon ",
            "name": "Sling",
            "cost": "1 sp",
            "damage": "1d4 bludgeoning",
            "weight": "",
            "properties": "Ammunition (range 30/120)",
            "amount": ""
        },
        //</editor-fold>

        //<editor-fold desc="martial melee weapons">
        {
            "strditemId": 14,
            "type": "Martial Melee Weapon ",
            "name": "Battleaxe",
            "cost": "10 gp",
            "damage": "1d8 slashing",
            "weight": "4 lb",
            "properties": "Versatile (1d10)",
            "amount": ""
        },
        {
            "strditemId": 15,
            "type": "Martial Melee Weapon ",
            "name": "Flail",
            "cost": "10 gp",
            "damage": "1d8 bludgeoning",
            "weight": "2 lb",
            "properties": "",
            "amount": ""
        },
        {
            "strditemId": 16,
            "type": "Martial Melee Weapon ",
            "name": "Glaive",
            "cost": "20 gp",
            "damage": "1d10 slashing",
            "weight": "6 lb",
            "properties": "Heavy, reach, two-handed",
            "amount": ""
        },
        {
            "strditemId": 17,
            "type": "Martial Melee Weapon ",
            "name": "Greataxe",
            "cost": "30 gp",
            "damage": "1d12 slashing",
            "weight": "7 lb",
            "properties": "Heavy, two-handed",
            "amount": ""
        },
        {
            "strditemId": 18,
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
            "strditemId": 20,
            "type": "Martial Melee Weapon ",
            "name": "Lance",
            "cost": "10 gp",
            "damage": "1d12 bludgeoning",
            "weight": "6 lb",
            "properties": "Reach, Special",
            "amount": ""
        },
        {
            "strditemId": 21,
            "type": "Martial Melee Weapon ",
            "name": "Longsword",
            "cost": "15 gp",
            "damage": "1d8 slashing",
            "weight": "3 lb",
            "properties": "Versatile (1d10)",
            "amount": ""
        },
        {
            "strditemId": 22,
            "type": "Martial Melee Weapon ",
            "name": "Maul",
            "cost": "10 gp",
            "damage": "2d6 bludgeoning",
            "weight": "10 lb",
            "properties": "Heavy, two-handed",
            "amount": ""
        },
        {
            "strditemId": 23,
            "type": "Martial Melee Weapon ",
            "name": "Morningstar",
            "cost": "15 gp",
            "damage": "1d8 piercing",
            "weight": "4 lb",
            "properties": "",
            "amount": ""
        },
        {
            "strditemId": 24,
            "type": "Martial Melee Weapon ",
            "name": "Pike",
            "cost": "5 gp",
            "damage": "1d10 piercing",
            "weight": "18 lb",
            "properties": "Heavy, reach, two-handed",
            "amount": ""
        },
        {
            "strditemId": 25,
            "type": "Martial Melee Weapon ",
            "name": "Rapier",
            "cost": "25 gp",
            "damage": "1d8 piercing",
            "weight": "2 lb",
            "properties": "Finesse",
            "amount": ""
        },
        {
            "strditemId": 26,
            "type": "Martial Melee Weapon ",
            "name": "Scimitar",
            "cost": "25 gp",
            "damage": "1d6 slashing",
            "weight": "3 lb",
            "properties": "Finesse, light",
            "amount": ""
        },
        {
            "strditemId": 27,
            "type": "Martial Melee Weapon ",
            "name": "Shortsword",
            "cost": "10 gp",
            "damage": "1d6 piercing",
            "weight": "2 lb",
            "properties": "Finesse, light",
            "amount": ""
        },
        {
            "strditemId": 28,
            "type": "Martial Melee Weapon ",
            "name": "Trident",
            "cost": "5 gp",
            "damage": "1d6 piercing",
            "weight": "4 lb",
            "properties": "Thrown (range 20/60), Versatile (1d8)",
            "amount": ""
        },
        {
            "strditemId": 29,
            "type": "Martial Melee Weapon ",
            "name": "War pick",
            "cost": "5 gp",
            "damage": "1d8 piercing",
            "weight": "2 lb",
            "properties": "",
            "amount": ""
        },
        {
            "strditemId": 30,
            "type": "Martial Melee Weapon ",
            "name": "Warhammer",
            "cost": "15 gp",
            "damage": "1d8 bludgeoning",
            "weight": "2 lb",
            "properties": "Versatile (1d10)",
            "amount": ""
        },
        {
            "strditemId": 31,
            "type": "Martial Melee Weapon ",
            "name": "Whip",
            "cost": "2 gp",
            "damage": "1d4 slashing",
            "weight": "3 lb",
            "properties": "Finesse, reach",
            "amount": ""
        },
        //</editor-fold>

        //<editor-fold desc="martial ranged weapons">
        {
            "strditemId": 32,
            "type": "Martial Ranged Weapon ",
            "name": "Blowgun",
            "cost": "10 gp",
            "damage": "1 piercing",
            "weight": "1 lb",
            "properties": "Ammunition (range 25/100), loading",
            "amount": ""
        },
        {
            "strditemId": 33,
            "type": "Martial Ranged Weapon ",
            "name": "Crossbow, hand",
            "cost": "75 gp",
            "damage": "1d6 piercing",
            "weight": "3 lb",
            "properties": "Ammunition (range 30/120), light, loading",
            "amount": ""
        },
        {
            "strditemId": 34,
            "type": "Martial Ranged Weapon ",
            "name": "Crossbow, heavy",
            "cost": "50 gp",
            "damage": "1d10 piercing",
            "weight": "18 lb",
            "properties": "Ammunition (range 100/400), heavy, loading, two-handed",
            "amount": ""
        },
        {
            "strditemId": 35,
            "type": "Martial Ranged Weapon ",
            "name": "Longbow",
            "cost": "50 gp",
            "damage": "18 piercing",
            "weight": "2 lb",
            "properties": "Ammunition (range 150/600), heavy, two-handed",
            "amount": ""
        },
        {
            "strditemId": 36,
            "type": "Martial Ranged Weapon ",
            "name": "Net",
            "cost": "1 gp",
            "damage": "",
            "weight": "3 lb",
            "properties": "Special, thrown (range 5/15)",
            "amount": ""
        },
        //</editor-fold>

        //<editor-fold desc="light armor">
        {
            "strditemId": 37,
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
            "strditemId": 38,
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
            "strditemId": 39,
            "type": "Light armor",
            "name": "Studded leather",
            "cost": "45 gp",
            "armor_class": "12 + Dex modifier",
            "strenght": "",
            "stealth": "",
            "weight": "13 lb",
            "amount": ""
        },
        //</editor-fold>

        //<editor-fold desc="medium armor">
        {
            "strditemId": 40,
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
            "strditemId": 41,
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
            "strditemId": 42,
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
            "strditemId": 43,
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
            "strditemId": 44,
            "type": "Medium armor",
            "name": "Half plate",
            "cost": "750 gp",
            "armor_class": "15 + Dex modifier (max 2)",
            "strenght": "",
            "stealth": "Disadvantage",
            "weight": "40 lb",
            "amount": ""
        },
        //</editor-fold>

        //<editor-fold desc="heavy armor">
        {
            "strditemId": 45,
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
            "strditemId": 46,
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
            "strdarmId": 47,
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
            "strditemId": 48,
            "type": "Heavy armor",
            "name": "Plate",
            "cost": "1.500 gp",
            "armor_class": "18",
            "strenght": "Str 15",
            "stealth": "Disadvantage",
            "weight": "65 lb",
            "amount": ""
        },
        //</editor-fold>

        //<editor-fold desc="shields">
        {
            "strditemId": 49,
            "type": "Shield",
            "name": "Shield",
            "cost": "10 gp",
            "armor_class": "+2",
            "strenght": "",
            "stealth": "",
            "weight": "6 lb",
            "amount": ""
        },
        //</editor-fold>

        //<editor-fold desc="Adventuring Gear">
        {
            "strditemId": 50,
            "type": "Adventuring Gear",
            "name": "Abacus",
            "cost": "2 gp",
            "weight": "2 lb",
            "amount": ""
        },
        {
            "strditemId": 51,
            "type": "Adventuring Gear",
            "name": "Acid (vial)",
            "cost": "25 gp",
            "weight": "1 lb",
            "amount": ""
        },
        {
            "strditemId": 52,
            "type": "Adventuring Gear",
            "name": "Alechemist's fire",
            "cost": "50 gp",
            "weight": "1 lb",
            "amount": ""
        },
        {
            "strditemId": 53,
            "type": "Adventuring Gear",
            "name": "Antitoxin (vial)",
            "cost": "50 gp",
            "weight": "",
            "amount": ""
        },
        {
            "strditemId": 54,
            "type": "Adventuring Gear",
            "name": "Crystal",
            "cost": "10 gp",
            "weight": "1 lb",
            "amount": ""
        },
        {
            "strditemId": 55,
            "type": "Adventuring Gear",
            "name": "Orb",
            "cost": "20 gp",
            "weight": "3 lb",
            "amount": ""
        },
        {
            "strditemId": 56,
            "type": "Adventuring Gear",
            "name": "Rod",
            "cost": "10 gp",
            "weight": "2 lb",
            "amount": ""
        },
        {
            "strditemId": 57,
            "type": "Adventuring Gear",
            "name": "Staff",
            "cost": "5 gp",
            "weight": "4 lb",
            "amount": ""
        },
        {
            "strditemId": 58,
            "type": "Adventuring Gear",
            "name": "Wand",
            "cost": "10 gp",
            "weight": "1 lb",
            "amount": ""
        },
        {
            "strditemId": 59,
            "type": "Adventuring Gear",
            "name": "Backpack",
            "cost": "2 gp",
            "weight": "5 lb",
            "amount": ""
        },
        {
            "strditemId": 60,
            "type": "Adventuring Gear",
            "name": "Ball bearings",
            "cost": "1 gp",
            "weight": "2 lb",
            "amount": ""
        },
        {
            "strditemId": 61,
            "type": "Adventuring Gear",
            "name": "Barrel",
            "cost": "2 gp",
            "weight": "70 lb",
            "amount": ""
        },
        {
            "strditemId": 62,
            "type": "Adventuring Gear",
            "name": "Basket",
            "cost": "2 sp",
            "weight": "2 lb",
            "amount": ""
        },
        {
            "strditemId": 63,
            "type": "Adventuring Gear",
            "name": "Bedroll",
            "cost": "1 gp",
            "weight": "7 lb",
            "amount": ""
        },
        {
            "strditemId": 64,
            "type": "Adventuring Gear",
            "name": "Bell",
            "cost": "1 gp",
            "weight": "",
            "amount": ""
        },
        {
            "strditemId": 65,
            "type": "Adventuring Gear",
            "name": "Blanket",
            "cost": "5 sp",
            "weight": "3 lb",
            "amount": ""
        },
        {
            "strditemId": 66,
            "type": "Adventuring Gear",
            "name": "Block and tackle",
            "cost": "1 gp",
            "weight": "5 lb",
            "amount": ""
        },
        {
            "strditemId": 67,
            "type": "Adventuring Gear",
            "name": "Book",
            "cost": "25 gp",
            "weight": "5 lb",
            "amount": ""
        },
        {
            "strditemId": 68,
            "type": "Adventuring Gear",
            "name": "Bottle, glass",
            "cost": "2 gp",
            "weight": "2 lb",
            "amount": ""
        },
        {
            "strditemId": 69,
            "type": "Adventuring Gear",
            "name": "Bucket",
            "cost": "5 cp",
            "weight": "2 lb",
            "amount": ""
        },
        {
            "strditemId": 70,
            "type": "Adventuring Gear",
            "name": "caltrops",
            "cost": "1 gp",
            "weight": "2 lb",
            "amount": ""
        },
        {
            "strditemId": 71,
            "type": "Adventuring Gear",
            "name": "Candle",
            "cost": "1 cp",
            "weight": "",
            "amount": ""
        },
        {
            "strditemId": 72,
            "type": "Adventuring Gear",
            "name": "Case, crossbow bolt",
            "cost": "1 gp",
            "weight": "1 lb",
            "amount": ""
        },
        {
            "strditemId": 73,
            "type": "Adventuring Gear",
            "name": "Case, map or scroll",
            "cost": "1 gp",
            "weight": "1 lb",
            "amount": ""
        },
        {
            "strditemId": 74,
            "type": "Adventuring Gear",
            "name": "chain (10 feet)",
            "cost": "5 gp",
            "weight": "10 lb",
            "amount": ""
        },
        {
            "strditemId": 75,
            "type": "Adventuring Gear",
            "name": "Chalk (1 piece)",
            "cost": "1 cp",
            "weight": "",
            "amount": ""
        },
        {
            "strditemId": 76,
            "type": "Adventuring Gear",
            "name": "Chest",
            "cost": "5 gp",
            "weight": "25 lb",
            "amount": ""
        },
        {
            "strditemId": 77,
            "type": "Adventuring Gear",
            "name": "Climber's kit",
            "cost": "25 gp",
            "weight": "12 lb",
            "amount": ""
        },
        {
            "strditemId": 78,
            "type": "Adventuring Gear",
            "name": "Clothes, common",
            "cost": "5 sp",
            "weight": "3 lb",
            "amount": ""
        },
        {
            "strditemId": 79,
            "type": "Adventuring Gear",
            "name": "Clothes, costume",
            "cost": "5 gp",
            "weight": "4 lb",
            "amount": ""
        },
        {
            "strditemId": 80,
            "type": "Adventuring Gear",
            "name": "Clothes, fine",
            "cost": "15 gp",
            "weight": "6 lb",
            "amount": ""
        },
        {
            "strditemId": 81,
            "type": "Adventuring Gear",
            "name": "Clothes, traveler's",
            "cost": "2 gp",
            "weight": "4 lb",
            "amount": ""
        },
        {
            "strditemId": 82,
            "type": "Adventuring Gear",
            "name": "Component pouch",
            "cost": "25 gp",
            "weight": "2 lb",
            "amount": ""
        },
        {
            "strditemId": 83,
            "type": "Adventuring Gear",
            "name": "Crowbar",
            "cost": "2 gp",
            "weight": "5 lb",
            "amount": ""
        },
        {
            "strditemId": 84,
            "type": "Adventuring Gear",
            "name": "Sprig of mistletoe",
            "cost": "1 gp",
            "weight": "",
            "amount": ""
        },
        {
            "strditemId": 85,
            "type": "Adventuring Gear",
            "name": "Totem",
            "cost": "1 gp",
            "weight": "",
            "amount": ""
        },
        {
            "strditemId": 86,
            "type": "Adventuring Gear",
            "name": "Wooden staff",
            "cost": "5 gp",
            "weight": "4 lb",
            "amount": ""
        },
        {
            "strditemId": 87,
            "type": "Adventuring Gear",
            "name": "Yew wand",
            "cost": "10 gp",
            "weight": "1 lb",
            "amount": ""
        },
        {
            "strditemId": 88,
            "type": "Adventuring Gear",
            "name": "Fishing tackle",
            "cost": "1 gp",
            "weight": "4 lb",
            "amount": ""
        },
        {
            "strditemId": 89,
            "type": "Adventuring Gear",
            "name": "Flask or tankard",
            "cost": "2 cp",
            "weight": "1 lb",
            "amount": ""
        },
        {
            "strditemId": 90,
            "type": "Adventuring Gear",
            "name": "Grappling hook",
            "cost": "2 gp",
            "weight": "4 lb",
            "amount": ""
        },
        {
            "strditemId": 91,
            "type": "Adventuring Gear",
            "name": "Hammer",
            "cost": "1 gp",
            "weight": "3 lb",
            "amount": ""
        },
        {
            "strditemId": 92,
            "type": "Adventuring Gear",
            "name": "Hammer, sledge",
            "cost": "2 gp",
            "weight": "10 lb",
            "amount": ""
        },
        {
            "strditemId": 93,
            "type": "Adventuring Gear",
            "name": "Healer's kit",
            "cost": "5 gp",
            "weight": "3 lb",
            "amount": ""
        },
        {
            "strditemId": 94,
            "type": "Adventuring Gear",
            "name": "Amulet",
            "cost": "5 gp",
            "weight": "1 lb",
            "amount": ""
        },
        {
            "strditemId": 95,
            "type": "Adventuring Gear",
            "name": "Emblem",
            "cost": "5 gp",
            "weight": "",
            "amount": ""
        },
        {
            "strditemId": 96,
            "type": "Adventuring Gear",
            "name": "Reliquary",
            "cost": "5 gp",
            "weight": "2 lb",
            "amount": ""
        },
        {
            "strditemId": 97,
            "type": "Adventuring Gear",
            "name": "Holy water (flask)",
            "cost": "25 gp",
            "weight": "1 lb",
            "amount": ""
        },
        {
            "strditemId": 98,
            "type": "Adventuring Gear",
            "name": "Hourglass",
            "cost": "25 gp",
            "weight": "1 lb",
            "amount": ""
        },
        {
            "strditemId": 99,
            "type": "Adventuring Gear",
            "name": "Hunting trap",
            "cost": "5 gp",
            "weight": "25 lb",
            "amount": ""
        },
        {
            "strditemId": 100,
            "type": "Adventuring Gear",
            "name": "Ink (1 ounce bottle)",
            "cost": "10 gp",
            "weight": "",
            "amount": ""
        },
        {
            "strditemId": 101,
            "type": "Adventuring Gear",
            "name": "Ink pen",
            "cost": "2 cp",
            "weight": "",
            "amount": ""
        },
        {
            "strditemId": 102,
            "type": "Adventuring Gear",
            "name": "Jug or pitcher",
            "cost": "2 cp",
            "weight": "4 lb",
            "amount": ""
        },
        {
            "strditemId": 103,
            "type": "Adventuring Gear",
            "name": "Ladder (10-foot)",
            "cost": "1 sp",
            "weight": "25 lb",
            "amount": ""
        },
        {
            "strditemId": 104,
            "type": "Adventuring Gear",
            "name": "Lamp",
            "cost": "5 sp",
            "weight": "1 lb",
            "amount": ""
        },
        {
            "strditemId": 105,
            "type": "Adventuring Gear",
            "name": "Latern, bullseye",
            "cost": "10 gp",
            "weight": "2 lb",
            "amount": ""
        },
        {
            "strditemId": 106,
            "type": "Adventuring Gear",
            "name": "Latern, hooded",
            "cost": "5 gp",
            "weight": "2 lb",
            "amount": ""
        },
        {
            "strditemId": 107,
            "type": "Adventuring Gear",
            "name": "Lock",
            "cost": "10 gp",
            "weight": "1 lb",
            "amount": ""
        },
        {
            "strditemId": 108,
            "type": "Adventuring Gear",
            "name": "Magnifying glass",
            "cost": "100 gp",
            "weight": "",
            "amount": ""
        },
        {
            "strditemId": 109,
            "type": "Adventuring Gear",
            "name": "Manacles",
            "cost": "2 gp",
            "weight": "6 lb",
            "amount": ""
        },
        {
            "strditemId": 110,
            "type": "Adventuring Gear",
            "name": "Mess kit",
            "cost": "2 sp",
            "weight": "1 lb",
            "amount": ""
        },
        {
            "strditemId": 111,
            "type": "Adventuring Gear",
            "name": "Mirror, steel",
            "cost": "5 gp",
            "weight": "0,5 lb",
            "amount": ""
        },
        {
            "strditemId": 112,
            "type": "Adventuring Gear",
            "name": "Oil (flask)",
            "cost": "1 sp",
            "weight": "1 lb",
            "amount": ""
        },
        {
            "strditemId": 113,
            "type": "Adventuring Gear",
            "name": "Paper (one sheet)",
            "cost": "2 sp",
            "weight": "",
            "amount": ""
        },
        {
            "strditemId": 114,
            "type": "Adventuring Gear",
            "name": "Parchment (one sheet)",
            "cost": "1 sp",
            "weight": "",
            "amount": ""
        },
        {
            "strditemId": 115,
            "type": "Adventuring Gear",
            "name": "Perfume (vial)",
            "cost": "5 gp",
            "weight": "",
            "amount": ""
        },
        {
            "strditemId": 116,
            "type": "Adventuring Gear",
            "name": "Pick, miner's",
            "cost": "2 gp",
            "weight": "10 lb",
            "amount": ""
        },
        {
            "strditemId": 117,
            "type": "Adventuring Gear",
            "name": "Piton",
            "cost": "5 cp",
            "weight": "0,25 lb",
            "amount": ""
        },
        {
            "strditemId": 118,
            "type": "Adventuring Gear",
            "name": "Posion, basic (vial)",
            "cost": "100 gp",
            "weight": "",
            "amount": ""
        },
        {
            "strditemId": 119,
            "type": "Adventuring Gear",
            "name": "Pole (10-foot)",
            "cost": "5 cp",
            "weight": "7 lb",
            "amount": ""
        },
        {
            "strditemId": 120,
            "type": "Adventuring Gear",
            "name": "Pot, iron",
            "cost": "2 gp",
            "weight": "10 lb",
            "amount": ""
        },
        {
            "strditemId": 121,
            "type": "Adventuring Gear",
            "name": "Potion of healing",
            "cost": "50 gp",
            "weight": "0,5 lb",
            "amount": ""
        },
        {
            "strditemId": 122,
            "type": "Adventuring Gear",
            "name": "Pouch",
            "cost": "5 sp",
            "weight": "1 lb",
            "amount": ""
        },
        {
            "strditemId": 123,
            "type": "Adventuring Gear",
            "name": "Quiver",
            "cost": "1 gp",
            "weight": "1 lb",
            "amount": ""
        },
        {
            "strditemId": 124,
            "type": "Adventuring Gear",
            "name": "Ram, portable",
            "cost": "4 gp",
            "weight": "35 lb",
            "amount": ""
        },
        {
            "strditemId": 125,
            "type": "Adventuring Gear",
            "name": "Rations (1 day)",
            "cost": "5 sp",
            "weight": "2 lb",
            "amount": ""
        },
        {
            "strditemId": 126,
            "type": "Adventuring Gear",
            "name": "Robes",
            "cost": "1 gp",
            "weight": "4 lb",
            "amount": ""
        },
        {
            "strditemId": 127,
            "type": "Adventuring Gear",
            "name": "Rope, hempen (50 feet)",
            "cost": "1 gp",
            "weight": "10 lb",
            "amount": ""
        },
        {
            "strditemId": 128,
            "type": "Adventuring Gear",
            "name": "Rope, silk (50 feet)",
            "cost": "10 gp",
            "weight": "5 lb",
            "amount": ""
        },
        {
            "strditemId": 129,
            "type": "Adventuring Gear",
            "name": "Sack",
            "cost": "1 cp",
            "weight": "0,5 lb",
            "amount": ""
        },
        {
            "strditemId": 130,
            "type": "Adventuring Gear",
            "name": "Scale, merchant's",
            "cost": "5 gp",
            "weight": "3 lb",
            "amount": ""
        },
        {
            "strditemId": 131,
            "type": "Adventuring Gear",
            "name": "Sealing wax",
            "cost": "1 sp",
            "weight": "",
            "amount": ""
        },
        {
            "strditemId": 132,
            "type": "Adventuring Gear",
            "name": "Shovel",
            "cost": "2 gp",
            "weight": "5 lb",
            "amount": ""
        },
        {
            "strditemId": 133,
            "type": "Adventuring Gear",
            "name": "Signal Whistle",
            "cost": "5 cp",
            "weight": "",
            "amount": ""
        },
        {
            "strditemId": 134,
            "type": "Adventuring Gear",
            "name": "Signet ring",
            "cost": "5 gp",
            "weight": "",
            "amount": ""
        },
        {
            "strditemId": 135,
            "type": "Adventuring Gear",
            "name": "Soap",
            "cost": "1 cp",
            "weight": "",
            "amount": ""
        },
        {
            "strditemId": 136,
            "type": "Adventuring Gear",
            "name": "Spellbook",
            "cost": "50 gp",
            "weight": "3 lb",
            "amount": ""
        },
        {
            "strditemId": 137,
            "type": "Adventuring Gear",
            "name": "Spikes, iron",
            "cost": "1 sp",
            "weight": "5 lb",
            "amount": ""
        },
        {
            "strditemId": 138,
            "type": "Adventuring Gear",
            "name": "Spyglass",
            "cost": "1000 gp",
            "weight": "1 lb",
            "amount": ""
        },
        {
            "strditemId": 139,
            "type": "Adventuring Gear",
            "name": "Tent, two-person",
            "cost": "2 gp",
            "weight": "20 lb",
            "amount": ""
        },
        {
            "strditemId": 140,
            "type": "Adventuring Gear",
            "name": "Tinderbox",
            "cost": "5 sp",
            "weight": "1 lb",
            "amount": ""
        },
        {
            "strditemId": 141,
            "type": "Adventuring Gear",
            "name": "Torch",
            "cost": "1 cp",
            "weight": "1 lb",
            "amount": ""
        },
        {
            "strditemId": 142,
            "type": "Adventuring Gear",
            "name": "Vial",
            "cost": "1 gp",
            "weight": "",
            "amount": ""
        },
        {
            "strditemId": 143,
            "type": "Adventuring Gear",
            "name": "Waterskin",
            "cost": "2 sp",
            "weight": "5 lb",
            "amount": ""
        },
        {
            "strditemId": 144,
            "type": "Adventuring Gear",
            "name": "Whetstone",
            "cost": "1 cp",
            "weight": "1 lb",
            "amount": ""
        },
        //</editor-fold>

        //<editor-fold desc="Ammunition">
        {
            "strditemId": 145,
            "type": "Ammunition",
            "name": "Arrow",
            "cost": "",
            "weight": "",
            "amount": ""
        },
        {
            "strditemId": 146,
            "type": "Ammunition",
            "name": "Blowgun needles",
            "cost": "",
            "weight": "",
            "amount": ""
        },
        {
            "strditemId": 147,
            "type": "Ammunition",
            "name": "Crossbow bolts",
            "cost": "",
            "weight": "",
            "amount": ""
        },
        {
            "strditemId": 148,
            "type": "Ammunition",
            "name": "Sling bullets",
            "cost": "",
            "weight": "",
            "amount": ""
        },
        //</editor-fold>

        //<editor-fold desc="artisan's tools">
        {
            "strditemId": 149,
            "type": "Tools",
            "name": "Alchemist's supplies",
            "cost": "50 gp",
            "weight": "8 lb",
            "amount": ""
        },
        {
            "strditemId": 150,
            "type": "Tools",
            "name": "Brewer's supplies",
            "cost": "20 gp",
            "weight": "9 lb",
            "amount": ""
        },
        {
            "strditemId": 151,
            "type": "Tools",
            "name": "Calligrapher's supplies",
            "cost": "10 gp",
            "weight": "5 lb",
            "amount": ""
        },
        {
            "strditemId": 152,
            "type": "Tools",
            "name": "Carpenter's supplies",
            "cost": "8 gp",
            "weight": "6 lb",
            "amount": ""
        },
        {
            "strditemId": 153,
            "type": "Tools",
            "name": "Cartographer's tools",
            "cost": " 8",
            "weight": "6 lb",
            "amount": ""
        },
        {
            "strditemId": 154,
            "type": "Tools",
            "name": "Cobbler's tools",
            "cost": "5 gp",
            "weight": "5 lb",
            "amount": ""
        },
        {
            "strditemId": 155,
            "type": "Tools",
            "name": "Cook's utensils",
            "cost": "1 gp",
            "weight": "8 lb",
            "amount": ""
        },
        {
            "strditemId": 156,
            "type": "Tools",
            "name": "Glassblower's2 tools",
            "cost": "30 gp",
            "weight": "5 lb",
            "amount": ""
        },
        {
            "strditemId": 157,
            "type": "Tools",
            "name": "Jeweler's tools",
            "cost": "25 gp",
            "weight": "2 lb",
            "amount": ""
        },
        {
            "strditemId": 158,
            "type": "Tools",
            "name": "Leatherworker's tools",
            "cost": "5 gp",
            "weight": "5 lb",
            "amount": ""
        },
        {
            "strditemId": 159,
            "type": "Tools",
            "name": "Mason's tools",
            "cost": "10 gp",
            "weight": "8 lb",
            "amount": ""
        },
        {
            "strditemId": 160,
            "type": "Tools",
            "name": "Painter's supplies",
            "cost": "10 gp",
            "weight": "5 lb",
            "amount": ""
        },
        {
            "strditemId": 161,
            "type": "Tools",
            "name": "Potter's tools",
            "cost": "10 gp",
            "weight": "3 lb",
            "amount": ""
        },
        {
            "strditemId": 162,
            "type": "Tools",
            "name": "Smith's tools",
            "cost": "20 gp",
            "weight": "8 lb",
            "amount": ""
        },
        {
            "strditemId": 163,
            "type": "Tools",
            "name": "Tinker's tools",
            "cost": "50 gp",
            "weight": "10 lb",
            "amount": ""
        },
        {
            "strditemId": 164,
            "type": "Tools",
            "name": "Weaver's tools",
            "cost": "1 gp",
            "weight": "5 lb",
            "amount": ""
        },
        {
            "strditemId": 165,
            "type": "Tools",
            "name": "Woodcarver's tools",
            "cost": "1 gp",
            "weight": "5 lb",
            "amount": ""
        },
        {
            "strditemId": 166,
            "type": "Tools",
            "name": "Disguise kit",
            "cost": "25 gp",
            "weight": "3 lb",
            "amount": ""
        },
        {
            "strditemId": 167,
            "type": "Tools",
            "name": "Forgery kut",
            "cost": "15 gp",
            "weight": "5 lb",
            "amount": ""
        },
        //</editor-fold>

        //<editor-fold desc="gaming set">
        {
            "strditemId": 168 ,
            "type": "Tools",
            "name": "Dice set",
            "cost": "1 sp",
            "weight": "",
            "amount": ""
        },
        {
            "strditemId": 169 ,
            "type": "Tools",
            "name": "Dragonchess set",
            "cost": "1 gp",
            "weight": "0,5 lb",
            "amount": ""
        },
        {
            "strditemId": 170 ,
            "type": "Tools",
            "name": "Playing card set",
            "cost": "5 sp",
            "weight": "",
            "amount": ""
        },
        {
            "strditemId": 171 ,
            "type": "Tools",
            "name": "Three-Dragon Ante set",
            "cost": "1 gp",
            "weight": "",
            "amount": ""
        },
        {
            "strditemId": 172 ,
            "type": "Tools",
            "name": "Herbalism kit",
            "cost": "5 gp",
            "weight": "3 lb",
            "amount": ""
        },
        //</editor-fold>

        //<editor-fold desc="musical instrument">
        {
            "strtoolId": 173 ,
            "type": "Tools",
            "name": "Bagpipes",
            "cost": "30 gp",
            "weight": "6 lb",
            "amount": ""
        },
        {
            "strditemId": 174 ,
            "type": "Tools",
            "name": "Drum",
            "cost": "6 gp",
            "weight": "3 lb",
            "amount": ""
        },
        {
            "strditemId": 175 ,
            "type": "Tools",
            "name": "Dulcimer",
            "cost": "25 gp",
            "weight": "10 lb",
            "amount": ""
        },
        {
            "strditemId": 176 ,
            "type": "Tools",
            "name": "Flute",
            "cost": "2 gp",
            "weight": "1 lb",
            "amount": ""
        },
        {
            "strditemId": 177 ,
            "type": "Tools",
            "name": "Lute",
            "cost": "35 gp",
            "weight": "2 lb",
            "amount": ""
        },
        {
            "strditemId": 178 ,
            "type": "Tools",
            "name": "Lyre",
            "cost": "30 gp",
            "weight": "2 lb",
            "amount": ""
        },
        {
            "strditemId": 179 ,
            "type": "Tools",
            "name": "Horn",
            "cost": "3 gp",
            "weight": "2 lb",
            "amount": ""
        },
        {
            "strditemId": 180 ,
            "type": "Tools",
            "name": "Pan flute",
            "cost": "12 gp",
            "weight": "2 lb",
            "amount": ""
        },
        {
            "strditemId": 181 ,
            "type": "Tools",
            "name": "Shawn",
            "cost": "2 gp",
            "weight": "1 lb",
            "amount": ""
        },
        {
            "strditemId": 182 ,
            "type": "Tools",
            "name": "Violin",
            "cost": "30 gp",
            "weight": "1 lb",
            "amount": ""
        },
        //</editor-fold>

        //<editor-fold desc="tools">
        {
            "strditemId": 183 ,
            "type": "Tools",
            "name": "Navigator's tools",
            "cost": "25 gp",
            "weight": "2 lb",
            "amount": ""
        },
        {
            "strditemId": 184 ,
            "type": "Tools",
            "name": "Poisoner's kit",
            "cost": "50 gp",
            "weight": "2 lb",
            "amount": ""
        },
        {
            "strditemId": 185 ,
            "type": "Tools",
            "name": "Thieves tools",
            "cost": "25 gp",
            "weight": "1 lb",
            "amount": ""
        }
        //</editor-fold>
    ];


    public backpack;


    strditems: any [];

    strdweapons: any = [];
    strdarmor: any = [];
    strdgear: any = [];
    strdammunition: any = [];
    strdtools: any = [];

    itemKey;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.backpack = this.navParams.get('backpack');


        this.strditems = this.standardItems;


        console.log("Standard Items: ", this.strditems);

        // console.log("weapons: ", this.strdweapons,
        //             "armor: ", this.strdarmor,
        //             "gear: ", this.strdgear,
        //             "Ammunitions: ", this.strdammunition,
        //             "tools: ", this.strdtools);

        //set backpack key items for the items in individual inventories.
        this.itemKey = 'item: ' + this.backpack.name + this.backpack.HardLimit;

        console.log(this.itemKey);
        // this.storage.get(this.itemKey).then((val) =>{
        //
        // });
    }

    clickable(index) {

        console.log("id: ", index);
        console.log("Test: ", this.standardItems[index]);

        // this.storage.get('strdItem').then((val) => {
        //     // console.log("itemKey: ", this.itemKey);
        //     // console.log("Val: ", val);
        // }).catch((err) => {
        //    console.log("something went wrong: ", err.message);
        // });
        // let keys = Object.keys(this.weapons[index]);

        //console.log("Clicked id: ", keys[index]);
    }
}
