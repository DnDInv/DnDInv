import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage";


@Component({
    selector: 'page-standarditem',
    templateUrl: 'standarditem.html',
})
export class StandarditemPage {

    //<editor-fold desc="All Standard items in an array object">
    standardItems = [
        //<editor-fold desc="simple melee weapons">
        {
            "strditemId": 0,
            "type": "Weapon",
            "itemName": "Club",
            "price": "1 SP",
            "mechanical": "1d4 bludgeoning",
            "weight": 2,
            "properties": "Light",
            "amount": 1
        },
        {
            "strditemId": 1,
            "type": "Weapon",
            "itemName": "Dagger",
            "price": "2 gp",
            "mechanical": "1d4 piercing",
            "weight": 1,
            "properties": "Finesse, light, thrown (range 20/60)",
            "amount": 1
        },
        {
            "strditemId": 2,
            "type": "Weapon",
            "itemName": "Greatclub",
            "price": "2 sp",
            "mechanical": "1d8 bludgeoning",
            "weight": 10,
            "properties": "Two-handed",
            "amount": 1
        },
        {
            "strditemId": 3,
            "type": "Weapon",
            "itemName": "Handaxe",
            "price": "5 gp",
            "mechanical": "1d6 slashing",
            "weight": 2,
            "properties": "Light, thrown (range 20/60)",
            "amount": 1
        },
        {
            "strditemId": 4,
            "type": "Weapon",
            "itemName": "Javelin",
            "price": "5 sp",
            "mechanical": "1d6 piercing",
            "weight": 2,
            "properties": "Thrown (range 30/120)",
            "amount": 1
        },
        {
            "strditemId": 5,
            "type": "Simple Melee Weapon ",
            "itemName": "Light hammer",
            "type": "Weapon",
            "price": "2 gp",
            "mechanical": "1d4 bludgeoning",
            "weight": 2,
            "properties": "Light, thrown (range 20/60)",
            "amount": 1
        },
        {
            "strditemId": 6,
            "type": "Weapon",
            "itemName": "Mace",
            "price": "5 gp",
            "mechanical": "1d6 bludgeoning",
            "weight": 4,
            "properties": "",
            "amount": 1
        },
        {
            "strditemId": 7,
            "type": "Weapon",
            "itemName": "Quarterstaff",
            "price": "2 sp",
            "mechanical": "1d6 bludgeoning",
            "weight": 4,
            "properties": "Versatile (1d8)",
            "amount": 1
        },
        {
            "strditemId": 8,
            "type": "Weapon",
            "itemName": "Sickle",
            "price": "1 gp",
            "mechanical": "1d4 slashing",
            "weight": 2,
            "properties": "Light",
            "amount": 1
        },
        {
            "strditemId": 9,
            "type": "Weapon",
            "itemName": "Spear",
            "price": "1 gp",
            "mechanical": "1d6 piercing",
            "weight": 3,
            "properties": "Thrown (range 20/60), versatile (1d8)",
            "amount": 1
        },
        //</editor-fold>

        //<editor-fold desc="simple ranged weapons">
        {
            "strditemId": 10,
            "type": "Weapon",
            "itemName": "Crossbow, light",
            "price": "25 gp",
            "mechanical": "1d8 piercing",
            "weight": 5,
            "properties": "Ammunition (range 80/320), loading, two-handed",
            "amount": 1
        },
        {
            "strditemId": 11,
            "type": "Weapon",
            "itemName": "Dart",
            "price": "5 cp",
            "mechanical": "1d4 piercing",
            "weight": 0.25,
            "properties": "Finesse, thrown (range 20/60)",
            "amount": 1
        },
        {
            "strditemId": 12,
            "type": "Weapon",
            "itemName": "Shortbow",
            "price": "25 gp",
            "mechanical": "1d6 piercing",
            "weight": 5,
            "properties": "Ammunition (range 80/320),two-handed",
            "amount": 1
        },
        {
            "strditemId": 13,
            "type": "Weapon",
            "itemName": "Sling",
            "price": "1 sp",
            "mechanical": "1d4 bludgeoning",
            "weight": "",
            "properties": "Ammunition (range 30/120)",
            "amount": 1
        },
        //</editor-fold>

        //<editor-fold desc="martial melee weapons">
        {
            "strditemId": 14,
            "type": "Weapon",
            "itemName": "Battleaxe",
            "price": "10 gp",
            "mechanical": "1d8 slashing",
            "weight": 4,
            "properties": "Versatile (1d10)",
            "amount": 1
        },
        {
            "strditemId": 15,
            "type": "Weapon",
            "itemName": "Flail",
            "price": "10 gp",
            "mechanical": "1d8 bludgeoning",
            "weight": 2,
            "properties": "",
            "amount": 1
        },
        {
            "strditemId": 16,
            "type": "Weapon",
            "itemName": "Glaive",
            "price": "20 gp",
            "mechanical": "1d10 slashing",
            "weight": 6,
            "properties": "Heavy, reach, two-handed",
            "amount": 1
        },
        {
            "strditemId": 17,
            "type": "Weapon",
            "itemName": "Greataxe",
            "price": "30 gp",
            "mechanical": "1d12 slashing",
            "weight": 7,
            "properties": "Heavy, two-handed",
            "amount": 1
        },
        {
            "strditemId": 18,
            "type": "Weapon",
            "itemName": "Greatsword",
            "price": "50 gp",
            "mechanical": "2d6 slashing",
            "weight": 6,
            "properties": "Heavy, two-handed",
            "amount": 1
        },
        {
            "strdweapId": 19,
            "type": "Weapon",
            "itemName": "Halberd",
            "price": "20 gp",
            "mechanical": "1d19 slashing",
            "weight": 6,
            "properties": "Heavy, reach, two-handed",
            "amount": 1
        },
        {
            "strditemId": 20,
            "type": "Weapon",
            "itemName": "Lance",
            "price": "10 gp",
            "mechanical": "1d12 bludgeoning",
            "weight": 6,
            "properties": "Reach, Special",
            "amount": 1
        },
        {
            "strditemId": 21,
            "type": "Weapon",
            "itemName": "Longsword",
            "price": "15 gp",
            "mechanical": "1d8 slashing",
            "weight": 3,
            "properties": "Versatile (1d10)",
            "amount": 1
        },
        {
            "strditemId": 22,
            "type": "Weapon",
            "itemName": "Maul",
            "price": "10 gp",
            "mechanical": "2d6 bludgeoning",
            "weight": 10,
            "properties": "Heavy, two-handed",
            "amount": 1
        },
        {
            "strditemId": 23,
            "type": "Weapon",
            "itemName": "Morningstar",
            "price": "15 gp",
            "mechanical": "1d8 piercing",
            "weight": 4,
            "properties": "",
            "amount": 1
        },
        {
            "strditemId": 24,
            "type": "Weapon",
            "itemName": "Pike",
            "price": "5 gp",
            "mechanical": "1d10 piercing",
            "weight": 18,
            "properties": "Heavy, reach, two-handed",
            "amount": 1
        },
        {
            "strditemId": 25,
            "type": "Weapon",
            "itemName": "Rapier",
            "price": "25 gp",
            "mechanical": "1d8 piercing",
            "weight": 2,
            "properties": "Finesse",
            "amount": 1
        },
        {
            "strditemId": 26,
            "type": "Weapon",
            "itemName": "Scimitar",
            "price": "25 gp",
            "mechanical": "1d6 slashing",
            "weight": 3,
            "properties": "Finesse, light",
            "amount": 1
        },
        {
            "strditemId": 27,
            "type": "Weapon",
            "itemName": "Shortsword",
            "price": "10 gp",
            "mechanical": "1d6 piercing",
            "weight": 2,
            "properties": "Finesse, light",
            "amount": 1
        },
        {
            "strditemId": 28,
            "type": "Weapon",
            "itemName": "Trident",
            "price": "5 gp",
            "mechanical": "1d6 piercing",
            "weight": 4,
            "properties": "Thrown (range 20/60), Versatile (1d8)",
            "amount": 1
        },
        {
            "strditemId": 29,
            "type": "Weapon",
            "itemName": "War pick",
            "price": "5 gp",
            "mechanical": "1d8 piercing",
            "weight": 2,
            "properties": "",
            "amount": 1
        },
        {
            "strditemId": 30,
            "type": "Weapon",
            "itemName": "Warhammer",
            "price": "15 gp",
            "mechanical": "1d8 bludgeoning",
            "weight": 2,
            "properties": "Versatile (1d10)",
            "amount": 1
        },
        {
            "strditemId": 31,
            "type": "Weapon",
            "itemName": "Whip",
            "price": "2 gp",
            "mechanical": "1d4 slashing",
            "weight": 3,
            "properties": "Finesse, reach",
            "amount": 1
        },
        //</editor-fold>

        //<editor-fold desc="martial ranged weapons">
        {
            "strditemId": 32,
            "type": "Weapon",
            "itemName": "Blowgun",
            "price": "10 gp",
            "mechanical": "1 piercing",
            "weight": 1,
            "properties": "Ammunition (range 25/100), loading",
            "amount": 1
        },
        {
            "strditemId": 33,
            "type": "Weapon",
            "itemName": "Crossbow, hand",
            "price": "75 gp",
            "mechanical": "1d6 piercing",
            "weight": 3,
            "properties": "Ammunition (range 30/120), light, loading",
            "amount": 1
        },
        {
            "strditemId": 34,
            "type": "Weapon",
            "itemName": "Crossbow, heavy",
            "price": "50 gp",
            "mechanical": "1d10 piercing",
            "weight": 18,
            "properties": "Ammunition (range 100/400), heavy, loading, two-handed",
            "amount": 1
        },
        {
            "strditemId": 35,
            "type": "Weapon",
            "itemName": "Longbow",
            "price": "50 gp",
            "mechanical": "18 piercing",
            "weight": 2,
            "properties": "Ammunition (range 150/600), heavy, two-handed",
            "amount": 1
        },
        {
            "strditemId": 36,
            "type": "Weapon",
            "itemName": "Net",
            "price": "1 gp",
            "mechanical": "",
            "weight": 3,
            "properties": "Special, thrown (range 5/15)",
            "amount": 1
        },
        //</editor-fold>

        //<editor-fold desc="Light Armor">
        {
            "strditemId": 37,
            "type": "Armor",
            "itemName": "Padded",
            "price": "5 gp",
            "mechanical": "11 + Dex modifier",
            "weight": 8,
            "amount": 1
        },
        {
            "strditemId": 38,
            "type": "Armor",
            "itemName": "Leather",
            "price": "10 gp",
            "mechanical": "11 + Dex modifier",
            "weight": 10,
            "amount": 1
        },
        {
            "strditemId": 39,
            "type": "Armor",
            "itemName": "Studded leather",
            "price": "45 gp",
            "mechanical": "12 + Dex modifier",
            "weight": 13,
            "amount": 1
        },
        //</editor-fold>

        //<editor-fold desc="Medium Armor">
        {
            "strditemId": 40,
            "type": "Armor",
            "itemName": "Hide",
            "price": "10 gp",
            "mechanical": "12 + Dex modifier (max 2)",
            "weight": 12,
            "amount": 1
        },
        {
            "strditemId": 41,
            "type": "Armor",
            "itemName": "Chain shirt",
            "price": "50 gp",
            "mechanical": "13 + Dex modifier (max 2)",
            "weight": 20,
            "amount": 1
        },
        {
            "strditemId": 42,
            "type": "Armor",
            "itemName": "Scale mail",
            "price": "50 gp",
            "mechanical": "14 + Dex modifier (max 2)",
            "weight": 45,
            "amount": 1
        },
        {
            "strditemId": 43,
            "type": "Armor",
            "itemName": "Breastplate",
            "price": "400 gp",
            "mechanical": "14 + Dex modifier (max 2)",
            "weight": 20,
            "amount": 1
        },
        {
            "strditemId": 44,
            "type": "Armor",
            "itemName": "Half plate",
            "price": "750 gp",
            "mechanical": "15 + Dex modifier (max 2)",
            "weight": 40,
            "amount": 1
        },
        //</editor-fold>

        //<editor-fold desc="Heavy Armor">
        {
            "strditemId": 45,
            "type": "Armor",
            "itemName": "Ring mail",
            "price": "30 gp",
            "mechanical": "14",
            "weight": 40,
            "amount": 1
        },
        {
            "strditemId": 46,
            "type": "Armor",
            "itemName": "Chain mail",
            "price": "75 gp",
            "mechanical": "16",
            "weight": 55,
            "amount": 1
        },
        {
            "strdarmId": 47,
            "type": "Armor",
            "itemName": "Splint",
            "price": "200 gp",
            "mechanical": "17",
            "weight": 60,
            "amount": 1
        },
        {
            "strditemId": 48,
            "type": "Armor",
            "itemName": "Plate",
            "price": "1.500 gp",
            "mechanical": "18",
            "weight": 65,
            "amount": 1
        },
        //</editor-fold>

        //<editor-fold desc="shields">
        {
            "strditemId": 49,
            "type": "Shield",
            "itemName": "Shield",
            "cost": "10 gp",
            "mechanical": "+2",
            "weight": 6,
            "amount": 1
        },
        //</editor-fold>

        //<editor-fold desc="Adventuring Gear">
        {
            "strditemId": 50,
            "type": "Adventuring Gear",
            "itemName": "Abacus",
            "price": "2 gp",
            "weight": 2,
            "amount": 1
        },
        {
            "strditemId": 51,
            "type": "Adventuring Gear",
            "itemName": "Acid (vial)",
            "price": "25 gp",
            "weight": 1,
            "amount": 1
        },
        {
            "strditemId": 52,
            "type": "Adventuring Gear",
            "itemName": "Alechemist's fire",
            "price": "50 gp",
            "weight": 1,
            "amount": 1
        },
        {
            "strditemId": 53,
            "type": "Adventuring Gear",
            "itemName": "Antitoxin (vial)",
            "price": "50 gp",
            "weight": "",
            "amount": 1
        },
        {
            "strditemId": 54,
            "type": "Adventuring Gear",
            "itemName": "Crystal",
            "price": "10 gp",
            "weight": 1,
            "amount": 1
        },
        {
            "strditemId": 55,
            "type": "Adventuring Gear",
            "itemName": "Orb",
            "price": "20 gp",
            "weight": 3,
            "amount": 1
        },
        {
            "strditemId": 56,
            "type": "Adventuring Gear",
            "itemName": "Rod",
            "price": "10 gp",
            "weight": 2,
            "amount": 1
        },
        {
            "strditemId": 57,
            "type": "Adventuring Gear",
            "itemName": "Staff",
            "price": "5 gp",
            "weight": 4,
            "amount": 1
        },
        {
            "strditemId": 58,
            "type": "Adventuring Gear",
            "itemName": "Wand",
            "price": "10 gp",
            "weight": 1,
            "amount": 1
        },
        {
            "strditemId": 59,
            "type": "Adventuring Gear",
            "itemName": "Backpack",
            "price": "2 gp",
            "weight": 5,
            "amount": 1
        },
        {
            "strditemId": 60,
            "type": "Adventuring Gear",
            "itemName": "Ball bearings",
            "price": "1 gp",
            "weight": 2,
            "amount": 1
        },
        {
            "strditemId": 61,
            "type": "Adventuring Gear",
            "itemName": "Barrel",
            "price": "2 gp",
            "weight": 70,
            "amount": 1
        },
        {
            "strditemId": 62,
            "type": "Adventuring Gear",
            "itemName": "Basket",
            "price": "2 sp",
            "weight": 2,
            "amount": 1
        },
        {
            "strditemId": 63,
            "type": "Adventuring Gear",
            "itemName": "Bedroll",
            "price": "1 gp",
            "weight": 7,
            "amount": 1
        },
        {
            "strditemId": 64,
            "type": "Adventuring Gear",
            "itemName": "Bell",
            "price": "1 gp",
            "weight": "",
            "amount": 1
        },
        {
            "strditemId": 65,
            "type": "Adventuring Gear",
            "itemName": "Blanket",
            "price": "5 sp",
            "weight": 3,
            "amount": 1
        },
        {
            "strditemId": 66,
            "type": "Adventuring Gear",
            "itemName": "Block and tackle",
            "price": "1 gp",
            "weight": 5,
            "amount": 1
        },
        {
            "strditemId": 67,
            "type": "Adventuring Gear",
            "itemName": "Book",
            "price": "25 gp",
            "weight": 5,
            "amount": 1
        },
        {
            "strditemId": 68,
            "type": "Adventuring Gear",
            "itemName": "Bottle, glass",
            "price": "2 gp",
            "weight": 2,
            "amount": 1
        },
        {
            "strditemId": 69,
            "type": "Adventuring Gear",
            "itemName": "Bucket",
            "price": "5 cp",
            "weight": 2,
            "amount": 1
        },
        {
            "strditemId": 70,
            "type": "Adventuring Gear",
            "itemName": "caltrops",
            "price": "1 gp",
            "weight": 2,
            "amount": 1
        },
        {
            "strditemId": 71,
            "type": "Adventuring Gear",
            "itemName": "Candle",
            "price": "1 cp",
            "weight": "",
            "amount": 1
        },
        {
            "strditemId": 72,
            "type": "Adventuring Gear",
            "itemName": "Case, crossbow bolt",
            "price": "1 gp",
            "weight": 1,
            "amount": 1
        },
        {
            "strditemId": 73,
            "type": "Adventuring Gear",
            "itemName": "Case, map or scroll",
            "price": "1 gp",
            "weight": 1,
            "amount": 1
        },
        {
            "strditemId": 74,
            "type": "Adventuring Gear",
            "itemName": "chain (10 feet)",
            "price": "5 gp",
            "weight": 10,
            "amount": 1
        },
        {
            "strditemId": 75,
            "type": "Adventuring Gear",
            "itemName": "Chalk (1 piece)",
            "price": "1 cp",
            "weight": "",
            "amount": 1
        },
        {
            "strditemId": 76,
            "type": "Adventuring Gear",
            "itemName": "Chest",
            "price": "5 gp",
            "weight": 25,
            "amount": 1
        },
        {
            "strditemId": 77,
            "type": "Adventuring Gear",
            "itemName": "Climber's kit",
            "price": "25 gp",
            "weight": 12,
            "amount": 1
        },
        {
            "strditemId": 78,
            "type": "Adventuring Gear",
            "itemName": "Clothes, common",
            "price": "5 sp",
            "weight": 3,
            "amount": 1
        },
        {
            "strditemId": 79,
            "type": "Adventuring Gear",
            "itemName": "Clothes, costume",
            "price": "5 gp",
            "weight": 4,
            "amount": 1
        },
        {
            "strditemId": 80,
            "type": "Adventuring Gear",
            "itemName": "Clothes, fine",
            "price": "15 gp",
            "weight": 6,
            "amount": 1
        },
        {
            "strditemId": 81,
            "type": "Adventuring Gear",
            "itemName": "Clothes, traveler's",
            "price": "2 gp",
            "weight": 4,
            "amount": 1
        },
        {
            "strditemId": 82,
            "type": "Adventuring Gear",
            "itemName": "Component pouch",
            "price": "25 gp",
            "weight": 2,
            "amount": 1
        },
        {
            "strditemId": 83,
            "type": "Adventuring Gear",
            "itemName": "Crowbar",
            "price": "2 gp",
            "weight": 5,
            "amount": 1
        },
        {
            "strditemId": 84,
            "type": "Adventuring Gear",
            "itemName": "Sprig of mistletoe",
            "price": "1 gp",
            "weight": "",
            "amount": 1
        },
        {
            "strditemId": 85,
            "type": "Adventuring Gear",
            "itemName": "Totem",
            "price": "1 gp",
            "weight": "",
            "amount": 1
        },
        {
            "strditemId": 86,
            "type": "Adventuring Gear",
            "itemName": "Wooden staff",
            "price": "5 gp",
            "weight": 4,
            "amount": 1
        },
        {
            "strditemId": 87,
            "type": "Adventuring Gear",
            "itemName": "Yew wand",
            "price": "10 gp",
            "weight": 1,
            "amount": 1
        },
        {
            "strditemId": 88,
            "type": "Adventuring Gear",
            "itemName": "Fishing tackle",
            "price": "1 gp",
            "weight": 4,
            "amount": 1
        },
        {
            "strditemId": 89,
            "type": "Adventuring Gear",
            "itemName": "Flask or tankard",
            "price": "2 cp",
            "weight": 1,
            "amount": 1
        },
        {
            "strditemId": 90,
            "type": "Adventuring Gear",
            "itemName": "Grappling hook",
            "price": "2 gp",
            "weight": 4,
            "amount": 1
        },
        {
            "strditemId": 91,
            "type": "Adventuring Gear",
            "itemName": "Hammer",
            "price": "1 gp",
            "weight": 3,
            "amount": 1
        },
        {
            "strditemId": 92,
            "type": "Adventuring Gear",
            "itemName": "Hammer, sledge",
            "price": "2 gp",
            "weight": 10,
            "amount": 1
        },
        {
            "strditemId": 93,
            "type": "Adventuring Gear",
            "itemName": "Healer's kit",
            "price": "5 gp",
            "weight": 3,
            "amount": 1
        },
        {
            "strditemId": 94,
            "type": "Adventuring Gear",
            "itemName": "Amulet",
            "price": "5 gp",
            "weight": 1,
            "amount": 1
        },
        {
            "strditemId": 95,
            "type": "Adventuring Gear",
            "itemName": "Emblem",
            "price": "5 gp",
            "weight": "",
            "amount": 1
        },
        {
            "strditemId": 96,
            "type": "Adventuring Gear",
            "itemName": "Reliquary",
            "price": "5 gp",
            "weight": 2,
            "amount": 1
        },
        {
            "strditemId": 97,
            "type": "Adventuring Gear",
            "itemName": "Holy water (flask)",
            "price": "25 gp",
            "weight": 1,
            "amount": 1
        },
        {
            "strditemId": 98,
            "type": "Adventuring Gear",
            "itemName": "Hourglass",
            "price": "25 gp",
            "weight": 1,
            "amount": 1
        },
        {
            "strditemId": 99,
            "type": "Adventuring Gear",
            "itemName": "Hunting trap",
            "price": "5 gp",
            "weight": 25,
            "amount": 1
        },
        {
            "strditemId": 100,
            "type": "Adventuring Gear",
            "itemName": "Ink (1 ounce bottle)",
            "price": "10 gp",
            "weight": "",
            "amount": 1
        },
        {
            "strditemId": 101,
            "type": "Adventuring Gear",
            "itemName": "Ink pen",
            "price": "2 cp",
            "weight": "",
            "amount": 1
        },
        {
            "strditemId": 102,
            "type": "Adventuring Gear",
            "itemName": "Jug or pitcher",
            "price": "2 cp",
            "weight": 4,
            "amount": 1
        },
        {
            "strditemId": 103,
            "type": "Adventuring Gear",
            "itemName": "Ladder (10-foot)",
            "price": "1 sp",
            "weight": 25,
            "amount": 1
        },
        {
            "strditemId": 104,
            "type": "Adventuring Gear",
            "itemName": "Lamp",
            "price": "5 sp",
            "weight": 1,
            "amount": 1
        },
        {
            "strditemId": 105,
            "type": "Adventuring Gear",
            "itemName": "Latern, bullseye",
            "price": "10 gp",
            "weight": 2,
            "amount": 1
        },
        {
            "strditemId": 106,
            "type": "Adventuring Gear",
            "itemName": "Latern, hooded",
            "price": "5 gp",
            "weight": 2,
            "amount": 1
        },
        {
            "strditemId": 107,
            "type": "Adventuring Gear",
            "itemName": "Lock",
            "price": "10 gp",
            "weight": 1,
            "amount": 1
        },
        {
            "strditemId": 108,
            "type": "Adventuring Gear",
            "itemName": "Magnifying glass",
            "price": "100 gp",
            "weight": "",
            "amount": 1
        },
        {
            "strditemId": 109,
            "type": "Adventuring Gear",
            "itemName": "Manacles",
            "price": "2 gp",
            "weight": 6,
            "amount": 1
        },
        {
            "strditemId": 110,
            "type": "Adventuring Gear",
            "itemName": "Mess kit",
            "price": "2 sp",
            "weight": 1,
            "amount": 1
        },
        {
            "strditemId": 111,
            "type": "Adventuring Gear",
            "itemName": "Mirror, steel",
            "price": "5 gp",
            "weight": 0.5,
            "amount": 1
        },
        {
            "strditemId": 112,
            "type": "Adventuring Gear",
            "itemName": "Oil (flask)",
            "price": "1 sp",
            "weight": 1,
            "amount": 1
        },
        {
            "strditemId": 113,
            "type": "Adventuring Gear",
            "itemName": "Paper (one sheet)",
            "price": "2 sp",
            "weight": "",
            "amount": 1
        },
        {
            "strditemId": 114,
            "type": "Adventuring Gear",
            "itemName": "Parchment (one sheet)",
            "price": "1 sp",
            "weight": "",
            "amount": 1
        },
        {
            "strditemId": 115,
            "type": "Adventuring Gear",
            "itemName": "Perfume (vial)",
            "price": "5 gp",
            "weight": "",
            "amount": 1
        },
        {
            "strditemId": 116,
            "type": "Adventuring Gear",
            "itemName": "Pick, miner's",
            "price": "2 gp",
            "weight": 10,
            "amount": 1
        },
        {
            "strditemId": 117,
            "type": "Adventuring Gear",
            "itemName": "Piton",
            "price": "5 cp",
            "weight": 0.25,
            "amount": 1
        },
        {
            "strditemId": 118,
            "type": "Adventuring Gear",
            "itemName": "Posion, basic (vial)",
            "price": "100 gp",
            "weight": "",
            "amount": 1
        },
        {
            "strditemId": 119,
            "type": "Adventuring Gear",
            "itemName": "Pole (10-foot)",
            "price": "5 cp",
            "weight": 7,
            "amount": 1
        },
        {
            "strditemId": 120,
            "type": "Adventuring Gear",
            "itemName": "Pot, iron",
            "price": "2 gp",
            "weight": 10,
            "amount": 1
        },
        {
            "strditemId": 121,
            "type": "Adventuring Gear",
            "itemName": "Potion of healing",
            "price": "50 gp",
            "weight": 0.5,
            "amount": 1
        },
        {
            "strditemId": 122,
            "type": "Adventuring Gear",
            "itemName": "Pouch",
            "price": "5 sp",
            "weight": 1,
            "amount": 1
        },
        {
            "strditemId": 123,
            "type": "Adventuring Gear",
            "itemName": "Quiver",
            "price": "1 gp",
            "weight": 1,
            "amount": 1
        },
        {
            "strditemId": 124,
            "type": "Adventuring Gear",
            "itemName": "Ram, portable",
            "price": "4 gp",
            "weight": 35,
            "amount": 1
        },
        {
            "strditemId": 125,
            "type": "Adventuring Gear",
            "itemName": "Rations (1 day)",
            "price": "5 sp",
            "weight": 2,
            "amount": 1
        },
        {
            "strditemId": 126,
            "type": "Adventuring Gear",
            "itemName": "Robes",
            "price": "1 gp",
            "weight": 4,
            "amount": 1
        },
        {
            "strditemId": 127,
            "type": "Adventuring Gear",
            "itemName": "Rope, hempen (50 feet)",
            "price": "1 gp",
            "weight": 10,
            "amount": 1
        },
        {
            "strditemId": 128,
            "type": "Adventuring Gear",
            "itemName": "Rope, silk (50 feet)",
            "price": "10 gp",
            "weight": 5,
            "amount": 1
        },
        {
            "strditemId": 129,
            "type": "Adventuring Gear",
            "itemName": "Sack",
            "price": "1 cp",
            "weight": 0.5,
            "amount": 1
        },
        {
            "strditemId": 130,
            "type": "Adventuring Gear",
            "itemName": "Scale, merchant's",
            "price": "5 gp",
            "weight": 3,
            "amount": 1
        },
        {
            "strditemId": 131,
            "type": "Adventuring Gear",
            "itemName": "Sealing wax",
            "price": "1 sp",
            "weight": "",
            "amount": 1
        },
        {
            "strditemId": 132,
            "type": "Adventuring Gear",
            "itemName": "Shovel",
            "price": "2 gp",
            "weight": 5,
            "amount": 1
        },
        {
            "strditemId": 133,
            "type": "Adventuring Gear",
            "itemName": "Signal Whistle",
            "price": "5 cp",
            "weight": "",
            "amount": 1
        },
        {
            "strditemId": 134,
            "type": "Adventuring Gear",
            "itemName": "Signet ring",
            "price": "5 gp",
            "weight": "",
            "amount": 1
        },
        {
            "strditemId": 135,
            "type": "Adventuring Gear",
            "itemName": "Soap",
            "price": "1 cp",
            "weight": "",
            "amount": 1
        },
        {
            "strditemId": 136,
            "type": "Adventuring Gear",
            "itemName": "Spellbook",
            "price": "50 gp",
            "weight": 3,
            "amount": 1
        },
        {
            "strditemId": 137,
            "type": "Adventuring Gear",
            "itemName": "Spikes, iron",
            "price": "1 sp",
            "weight": 5,
            "amount": 1
        },
        {
            "strditemId": 138,
            "type": "Adventuring Gear",
            "itemName": "Spyglass",
            "price": "1000 gp",
            "weight": 1,
            "amount": 1
        },
        {
            "strditemId": 139,
            "type": "Adventuring Gear",
            "itemName": "Tent, two-person",
            "price": "2 gp",
            "weight": 20,
            "amount": 1
        },
        {
            "strditemId": 140,
            "type": "Adventuring Gear",
            "itemName": "Tinderbox",
            "price": "5 sp",
            "weight": 1,
            "amount": 1
        },
        {
            "strditemId": 141,
            "type": "Adventuring Gear",
            "itemName": "Torch",
            "price": "1 cp",
            "weight": 1,
            "amount": 1
        },
        {
            "strditemId": 142,
            "type": "Adventuring Gear",
            "itemName": "Vial",
            "price": "1 gp",
            "weight": "",
            "amount": 1
        },
        {
            "strditemId": 143,
            "type": "Adventuring Gear",
            "itemName": "Waterskin",
            "price": "2 sp",
            "weight": 5,
            "amount": 1
        },
        {
            "strditemId": 144,
            "type": "Adventuring Gear",
            "itemName": "Whetstone",
            "price": "1 cp",
            "weight": 1,
            "amount": 1
        },
        //</editor-fold>

        //<editor-fold desc="Ammunition">
        {
            "strditemId": 145,
            "type": "Ammunition",
            "itemName": "Arrow",
            "price": "1 gp",
            "weight": 1,
            "amount": 20
        },
        {
            "strditemId": 146,
            "type": "Ammunition",
            "itemName": "Blowgun needles",
            "price": "1 gp",
            "weight": 1,
            "amount": 20
        },
        {
            "strditemId": 147,
            "type": "Ammunition",
            "itemName": "Crossbow bolts",
            "price": "1 gp",
            "weight": 1,
            "amount": 20
        },
        {
            "strditemId": 148,
            "type": "Ammunition",
            "itemName": "Sling bullets",
            "price": "1 gp",
            "weight": 1,
            "amount": 20
        },
        //</editor-fold>

        //<editor-fold desc="artisan's tools">
        {
            "strditemId": 149,
            "type": "Tools",
            "itemName": "Alchemist's supplies",
            "price": "50 gp",
            "weight": 8,
            "amount": 1
        },
        {
            "strditemId": 150,
            "type": "Tools",
            "itemName": "Brewer's supplies",
            "price": "20 gp",
            "weight": 9,
            "amount": 1
        },
        {
            "strditemId": 151,
            "type": "Tools",
            "itemName": "Calligrapher's supplies",
            "price": "10 gp",
            "weight": 5,
            "amount": 1
        },
        {
            "strditemId": 152,
            "type": "Tools",
            "itemName": "Carpenter's supplies",
            "price": "8 gp",
            "weight": 6,
            "amount": 1
        },
        {
            "strditemId": 153,
            "type": "Tools",
            "itemName": "Cartographer's tools",
            "price": " 8",
            "weight": 6,
            "amount": 1
        },
        {
            "strditemId": 154,
            "type": "Tools",
            "itemName": "Cobbler's tools",
            "price": "5 gp",
            "weight": 5,
            "amount": 1
        },
        {
            "strditemId": 155,
            "type": "Tools",
            "itemName": "Cook's utensils",
            "price": "1 gp",
            "weight": 8,
            "amount": 1
        },
        {
            "strditemId": 156,
            "type": "Tools",
            "itemName": "Glassblower's2 tools",
            "price": "30 gp",
            "weight": 5,
            "amount": 1
        },
        {
            "strditemId": 157,
            "type": "Tools",
            "itemName": "Jeweler's tools",
            "price": "25 gp",
            "weight": 2,
            "amount": 1
        },
        {
            "strditemId": 158,
            "type": "Tools",
            "itemName": "Leatherworker's tools",
            "price": "5 gp",
            "weight": 5,
            "amount": 1
        },
        {
            "strditemId": 159,
            "type": "Tools",
            "itemName": "Mason's tools",
            "price": "10 gp",
            "weight": 8,
            "amount": 1
        },
        {
            "strditemId": 160,
            "type": "Tools",
            "itemName": "Painter's supplies",
            "price": "10 gp",
            "weight": 5,
            "amount": 1
        },
        {
            "strditemId": 161,
            "type": "Tools",
            "itemName": "Potter's tools",
            "price": "10 gp",
            "weight": 3,
            "amount": 1
        },
        {
            "strditemId": 162,
            "type": "Tools",
            "itemName": "Smith's tools",
            "price": "20 gp",
            "weight": 8,
            "amount": 1
        },
        {
            "strditemId": 163,
            "type": "Tools",
            "itemName": "Tinker's tools",
            "price": "50 gp",
            "weight": 10,
            "amount": 1
        },
        {
            "strditemId": 164,
            "type": "Tools",
            "itemName": "Weaver's tools",
            "price": "1 gp",
            "weight": 5,
            "amount": 1
        },
        {
            "strditemId": 165,
            "type": "Tools",
            "itemName": "Woodcarver's tools",
            "price": "1 gp",
            "weight": 5,
            "amount": 1
        },
        {
            "strditemId": 166,
            "type": "Tools",
            "itemName": "Disguise kit",
            "price": "25 gp",
            "weight": 3,
            "amount": 1
        },
        {
            "strditemId": 167,
            "type": "Tools",
            "itemName": "Forgery kut",
            "price": "15 gp",
            "weight": 5,
            "amount": 1
        },
        //</editor-fold>

        //<editor-fold desc="gaming set">
        {
            "strditemId": 168 ,
            "type": "Tools",
            "itemName": "Dice set",
            "price": "1 sp",
            "weight": "",
            "amount": 1
        },
        {
            "strditemId": 169 ,
            "type": "Tools",
            "itemName": "Dragonchess set",
            "price": "1 gp",
            "weight": 0.5,
            "amount": 1
        },
        {
            "strditemId": 170 ,
            "type": "Tools",
            "itemName": "Playing card set",
            "price": "5 sp",
            "weight": "",
            "amount": 1
        },
        {
            "strditemId": 171 ,
            "type": "Tools",
            "itemName": "Three-Dragon Ante set",
            "price": "1 gp",
            "weight": "",
            "amount": 1
        },
        {
            "strditemId": 172 ,
            "type": "Tools",
            "itemName": "Herbalism kit",
            "price": "5 gp",
            "weight": 3,
            "amount": 1
        },
        //</editor-fold>

        //<editor-fold desc="musical instrument">
        {
            "strtoolId": 173 ,
            "type": "Tools",
            "itemName": "Bagpipes",
            "price": "30 gp",
            "weight": 6,
            "amount": 1
        },
        {
            "strditemId": 174 ,
            "type": "Tools",
            "itemName": "Drum",
            "price": "6 gp",
            "weight": 3,
            "amount": 1
        },
        {
            "strditemId": 175 ,
            "type": "Tools",
            "itemName": "Dulcimer",
            "price": "25 gp",
            "weight": 10,
            "amount": 1
        },
        {
            "strditemId": 176 ,
            "type": "Tools",
            "itemName": "Flute",
            "price": "2 gp",
            "weight": 1,
            "amount": 1
        },
        {
            "strditemId": 177 ,
            "type": "Tools",
            "itemName": "Lute",
            "price": "35 gp",
            "weight": 2,
            "amount": 1
        },
        {
            "strditemId": 178 ,
            "type": "Tools",
            "itemName": "Lyre",
            "price": "30 gp",
            "weight": 2,
            "amount": 1
        },
        {
            "strditemId": 179 ,
            "type": "Tools",
            "itemName": "Horn",
            "price": "3 gp",
            "weight": 2,
            "amount": 1
        },
        {
            "strditemId": 180 ,
            "type": "Tools",
            "itemName": "Pan flute",
            "price": "12 gp",
            "weight": 2,
            "amount": 1
        },
        {
            "strditemId": 181 ,
            "type": "Tools",
            "itemName": "Shawn",
            "price": "2 gp",
            "weight": 1,
            "amount": 1
        },
        {
            "strditemId": 182 ,
            "type": "Tools",
            "itemName": "Violin",
            "price": "30 gp",
            "weight": 1,
            "amount": 1
        },
        //</editor-fold>

        //<editor-fold desc="tools">
        {
            "strditemId": 183 ,
            "type": "Tools",
            "itemName": "Navigator's tools",
            "price": "25 gp",
            "weight": 2,
            "amount": 1
        },
        {
            "strditemId": 184 ,
            "type": "Tools",
            "itemName": "Poisoner's kit",
            "price": "50 gp",
            "weight": 2,
            "amount": 1
        },
        {
            "strditemId": 185 ,
            "type": "Tools",
            "itemName": "Thieves tools",
            "price": "25 gp",
            "weight": 1,
            "amount": 1
        }
        //</editor-fold>
    ];
    //</editor-fold>

    //<editor-fold desc="variables">
    public backpack;

    items = [];

    strditems: any [];

    strdweapons: any = [];
    strdarmor: any = [];
    strdgear: any = [];
    strdammunition: any = [];
    strdtools: any = [];

    itemKey;
    //</editor-fold>

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private storage: Storage) {
        //<editor-fold desc="getting the selected backpack and setting default values">
        this.backpack = this.navParams.get('backpack');

        this.strditems = this.standardItems;

        //set backpack key items for the items in individual inventories.
        this.itemKey = 'item: ' + this.backpack.name + this.backpack.HardLimit;

        //console.log(this.itemKey);
        // this.storage.get(this.itemKey).then((val) =>{
        //
        // });
        //</editor-fold>
    }

    addStandarditem(index) {
        //<editor-fold desc="Adding standard items">
        let data = this.standardItems[index];

        this.storage.get(this.itemKey).then((val) => {
            val.push(data);
            this.items = val;
            this.storage.set(this.itemKey, val);
        }).catch((err) => {
            this.storage.set(this.itemKey, [data]);
            this.items = [data];
        });
        this.navCtrl.pop();
        //</editor-fold>
    }
}
