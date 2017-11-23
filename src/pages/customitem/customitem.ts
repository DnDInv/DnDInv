import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-customitem',
  templateUrl: 'customitem.html',
})
export class CustomitemPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  attunement(event) {
    //console.log("checked: ", event.checked);
  }

}
