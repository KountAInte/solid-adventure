import { Injectable } from '@angular/core';

@Injectable()
export class AngularwayService {

  openedWindow = 0; // alternative: array of numbers


  constructor() {
  }


  openWindow(id) {
    this.openedWindow = id; // alternative: push to array of numbers
}

isInfoWindowOpen(id) {
    // tslint:disable-next-line:triple-equals
    return this.openedWindow == id; // alternative: check if id is in array
}

tableClickHandler(info: any): void {
this.openedWindow = info[0];
}

}
