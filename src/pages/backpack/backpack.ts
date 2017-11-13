import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import { AboutPage} from "../about/about";
import { StorageProvider } from "../../providers/storage/storage";

@Component({
  selector: 'page-backpack',
  templateUrl: 'backpack.html',
  providers:[
      [StorageProvider]
    ]
})
export class BackPackPage {

    constructor(public alertCtrl: AlertController, public navCtrl: NavController) {
        this.navCtrl = navCtrl;
    }

    //open about Page with a push
    openaboutPage() {
        this.navCtrl.push(AboutPage);
    }
//function for the modal confirmation for the Adding backpack
    addBackpack() {
      let addBackpack = this.alertCtrl.create({
          title: "Add Backpack",
          message: "Please enter the following requirements.",
          inputs: [
              {
                  name: 'Backpack Name',
                  placeholder: 'enter backpack name here...'
              },
          ],
          buttons: [
              {
                  text: 'Cancel',
                  role: 'cancel',
                  handler: data => {
                      console.log('Cancel clicked');
                  }
              },
              {
                  text: 'Save',
                  role: 'submit',
                  handler: data => {
                      console.log(JSON.stringify(data)); //to see the object
                  }
              }
          ]
      });
      //materialize the popup
      addBackpack.present();
    }

    //function of the Modal confirmation for the about page
    info() {
        let info = this.alertCtrl.create({
            title: "About",
            message: "This is the About page currently under contstruction.",
            buttons: [
                {
                    text: "Cancel",
                    handler: data => {
                        console.log("Cancel clicked")
                    }
                }
            ]
        });
        //materialize the popup
        info.present();
    }

    //function for the modal confirmation for the delete
    deleteBackpack() {
        let deleteBackpack = this.alertCtrl.create({
            title: 'Delete Backpack',
            message: "Are you sure you want to delete your Backpack?",
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Delete',
                    role: 'submit',
                    handler: data => {
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        //materialize the popup
        deleteBackpack.present();
    }
}
