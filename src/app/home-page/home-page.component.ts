import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  template: `<div class=".container">


  <div class="row md-6">
  <app-angularway class="col md-6"></app-angularway>
  <div class="col md-6">
      <app-botonera class=".row"></app-botonera>
      <app-crash-map class='.row'></app-crash-map>
  </div>
  </div>

</div>`

})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
