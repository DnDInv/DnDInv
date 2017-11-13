import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import {Storage} from "@ionic/storage";

/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageProvider {

    list: any = [{
        name: 'Paco Backpack'
    }];

    local: any;

    constructor(public http: Http) {
        console.log('Hello StorageProvider Provider');

        this.local = new Storage('localstorage');

    }
    saveData(data: string){
        this.local.set('stuff', data)
    }

}
