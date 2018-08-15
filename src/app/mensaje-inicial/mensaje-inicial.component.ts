import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensaje-inicial',
  templateUrl: './mensaje-inicial.component.html',
  styleUrls: ['./mensaje-inicial.component.css']
})
export class MensajeInicialComponent implements OnInit {
  ocultar;
  constructor() { }

  ngOnInit() {
    this.ocultar = true;
  }

  onClickMe() {
    this.ocultar = false;
  }

}
