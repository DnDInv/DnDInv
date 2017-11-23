import { Component } from '@angular/core';
import { AlertController, NavController, NavParams} from 'ionic-angular';
import { AboutPage} from "../about/about";
import { Storage } from '@ionic/storage';
import { InventoryPage } from "../inventory/inventory";

@Component({
  selector: 'page-backpack',
  templateUrl: 'backpack.html/'
})
export class BackPackPage {

    //backpack for calling the function to create and delete a backpack.
    public backpack;
    //itemKey for setting a itemKey for deleting a item if the backpack selected is deleted.
    itemKey;
    //for setting a storageKey for deleting the backpack
    storageKey;
    //info for the access to the backpack local storage.
    info: any = [];
    //item for the access to the items per inventory
    item: any = [];


    constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
        this.navCtrl = navCtrl;

        //function for getting all the backpacks in the JSON array
        this.storage.get('backpacks').then((val) => {
            this.info = val;
            //console.log(val);
        });
    }

    //open about Page with a push
    openaboutPage() {
        this.navCtrl.push(AboutPage);
    }
    //function for the modal confirmation for the Adding backpack
    addBackpack() {


      let addBackpack = this.alertCtrl.create({
          //fields that are shown in the alert modal.
          title: "Add Backpack",
          message: "Please enter the following requirements.",
          inputs: [
              {
                  name: 'name',
                  placeholder: 'Enter backpack name here...'
              },
              {
                  name: 'strength',
                  placeholder: 'Enter strength of the backpack...',
                  type: "number",
                  min: 1,
                  max: 50
              },
              {
                  name: 'Carrying_Size',
                  placeholder: 'Tiny,Small,Medium,Large,Huge...'
              },
              {
                  name: 'HardLimit',
                  placeholder: 'Enter hard limit (if wanted)'
              },
              {
                  name: 'RuleVariants',
                  placeholder: 'Standard,Encumbrance,No rules...'
              }
          ],
          buttons: [
              {
                  text: 'Cancel',
                  role: 'cancel',
                  handler: data => {

                  }
              },
              {
                  text: 'Save',
                  role: 'submit',
                  handler: data => {
                    //save into object
                      if (data.name.length              == 0 ||
                          data.strength                 > 50 ||
                          data.strength                 < 1  ||
                          data.Carrying_Size.length     == 0 ||
                          data.RuleVariants.length      == 0 ||
                          data.RuleVariants             != "Standard" &&
                          data.RuleVariants             != "Encumbrance" &&
                          data.RuleVariants             != "No rules" &&
                          data.Carrying_Size            != "Tiny" &&
                          data.Carrying_Size            != "Small" &&
                          data.Carrying_Size            != "Medium" &&
                          data.Carrying_Size            != "Large" &&
                          data.Carrying_Size            != "Huge") {
                          console.log("Incorrect Values");
                          return false;
                      }
                      else {
                          //push the input of all the fields that are required into an JSON object.
                          console.log(data);
                          this.storage.get('backpacks').then((val) => {
                              // val.filter(x => {return x.name == data.name}).length() > 0
                              val.push(data);
                              this.info = val;
                              this.storage.set("backpacks", val);
                          }).catch((err) => {
                              this.storage.set("backpacks", [data]);
                              this.info = [data];
                          });
                      }
                  }
              }
          ]
      });
      //materialize the popup
      addBackpack.present();
    }

    //function editing
    EditInventory(index, backpack){

        //itemKey and storageKey requirements for editing backpacks so that the item
        //transfers (previous problem that when you edit a backpack the items where all gone and still in the old backpack (name))
        this.itemKey = 'items:' + backpack.name + backpack.HardLimit;
        this.storageKey = 'Storage:' + backpack.name + backpack.Carrying_Size + backpack.strength + backpack.RuleVariants + backpack.HardLimit;


        //console.log(this.itemKey);

        //getting all the items in a certain backpack.
        this.storage.get(this.itemKey).then(val => {
            this.item = val;
            //console.log("Getting Items ", val);
        });

        //console.log("Backpack Page: ", index, backpack);

        let EditInventory = this.alertCtrl.create({
            title: 'Edit Backpack',
            message: "enter the new value's for your backpack",
            inputs: [
                {
                    name: 'name',
                    value: backpack.name,
                    placeholder: 'Try creating a backpack named goose'
                },
                {
                    name: 'strength',
                    value: backpack.strength,
                    placeholder: 'enter your strength score' ,
                    type: "number",
                    min: 1,
                    max: 50
                },
                {
                    name: 'Carrying_Size',
                    value: backpack.Carrying_Size,
                    placeholder: 'Tiny,Small,Medium,Large,Huge'
                },
                {
                    name: 'HardLimit',
                    value: backpack.HardLimit,
                    placeholder: 'Enter hardlimit in lbs'
                },
                {
                    name: 'RuleVariants',
                    value: backpack.RuleVariants,
                    placeholder:'Standard,Encumbrance,No rules'
                }
            ],
            buttons:[
                {
                  text: 'Delete',
                  handler: data => {
                      //console.log('Delete clicked!');
                      //getting the backpack to delete it.
                      this.storage.get('backpacks').then((val) => {
                          this.storage.remove(this.itemKey);
                          //splice 1 to delete one element and there for delete the whole array.
                          val.splice(index, 1);
                          this.info = val;
                          this.storage.set("backpacks", val);
                      });
                  }
                },
                {
                    text: 'Save',
                    role: 'submit',
                    handler: data => {
                        //save into object
                        if (data.name.length              == 0 ||
                            data.strength                 > 50 ||
                            data.strength                 < 1  ||
                            data.Carrying_Size.length     == 0 ||
                            data.RuleVariants.length      == 0 ||
                            data.RuleVariants             != "Standard" &&
                            data.RuleVariants             != "Encumbrance" &&
                            data.RuleVariants             != "No rules" &&
                            data.Carrying_Size            != "Tiny" &&
                            data.Carrying_Size            != "Small" &&
                            data.Carrying_Size            != "Medium" &&
                            data.Carrying_Size            != "Large" &&
                            data.Carrying_Size            != "Huge") {
                            console.log("Incorrect Values");
                            return false;
                        }
                        else {
                            //push the input of all the fields that are required into an JSON object.
                            this.storage.get('backpacks').then((val) => {
                                // val.filter(x => {return x.name == data.name}).length() > 0
                                /*data = backpack + data;*/
                                val[index] = data;
                                this.info = val;
                                this.storage.set("backpacks", val);

                                let oldKey = this.itemKey.toString();

                                this.itemKey = 'items:' + val[index].name + val[index].HardLimit;
                                console.log(this.itemKey, this.item);
                                this.storage.set(this.itemKey, this.item);
                                console.log("old key :", oldKey);
                                this.storage.remove(oldKey);
                                //this.itemKey = 'items:' + val.name + val.HardLimit;
                            });

                        }
                    }
            }
            ]
        });
        EditInventory.present();
    }

    //function for opening backpacks
    openInventory(index) {
        //console.log('index', index);

        //getting all backpacks
        this.storage.get('backpacks').then((val) => {
            //console.log('Backpack with ID: ', val, index);
            //getting the id of the backpack that is tapped.
            let data = {
                backpack: val[index]
            };
            //console.log('Data', index);
            this.info = val;
            this.navCtrl.push(InventoryPage, data);
            //storage.push(backpack.name, {items: [], dat: {}, dit: 5})

        }).catch((err) => {
            console.log("backpack not found!");
        });

    }
}
