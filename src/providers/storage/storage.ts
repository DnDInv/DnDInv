import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";

@Injectable()
export class StorageProvider {
  constructor(public storage: Storage) {}

  public inventory = [];

  public get(inv: string) {
    this.storage.get(inv).then((val) => {
      this.inventory = val;
      console.log("Val: ", val);
    });
    return this.inventory;
  }
}
