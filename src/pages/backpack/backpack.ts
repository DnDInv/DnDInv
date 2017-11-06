import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-backpack',
  templateUrl: 'backpack.html'
})
export class BackPackPage {

    constructor(public alertCtrl: AlertController) {
    }


    addBackpack() {
      let addBackpack = this.alertCtrl.create({
          title: "Add Backpack",
          message: "Please enter the following requirements.",
          inputs: [
              {
                  name: 'Backpack Name*',
                  placeholder: 'enter backpack name here...'
              },
          ],
          buttons: [
              {
                  text: 'Cancel',
                  handler: data => {
                      console.log('Cancel clicked');
                  }
              },
              {
                  text: 'Save',
                  handler: data => {
                      console.log('Saved clicked');
                  }
              }
          ]
      });
      addBackpack.present();
    }



    deleteBackpack() {
        let deleteBackpack = this.alertCtrl.create({
            title: 'Delete Backpack',
            message: "Are you sure you want to delete your Backpack?",
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Delete',
                    handler: data => {
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        deleteBackpack.present();
    }
}
