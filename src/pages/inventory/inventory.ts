import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-inventory',
  templateUrl: 'inventory.html',
})
export class InventoryPage {

  public backpack;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.backpack = this.navParams.get('backpack');
  }



}
