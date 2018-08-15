import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botonera',
  templateUrl: './botonera.component.html',
  styleUrls: ['./botonera.component.css']
})

export class BotoneraComponent implements OnInit {

@Input() verOtrosSelected: boolean;
@Output() change = new EventEmitter();

  constructor() { }
  ngOnInit() {
  }

  onClick() {
    // toggle booleaan
    this.verOtrosSelected = !this.verOtrosSelected;
    // sendign out an sos
    this.change.emit();
  }

}
