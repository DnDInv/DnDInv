import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-backpack',
  templateUrl: 'backpack.html'
})
export class BackPackPage {

    constructor(public alertCtrl: AlertController) {
    }

//function for the modal confirmation for the Adding backpack
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
        //materialize the popup
        deleteBackpack.present();
    }
}
