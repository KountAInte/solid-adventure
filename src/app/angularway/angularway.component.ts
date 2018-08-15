import { AngularwayService } from './../angularway.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/map';
import { watch } from 'fs';

// clase para las coordenadas
class Marker {
  id_incidencia: string;
  codigo: string;
  cod_tipo_incidencia: string;
  nom_tipo_incidencia: string;
  fh_inicio: Date;
  fh_final: Date;
  incid_prevista: string;
  incid_planificada: string;
  incid_estado: string;
  descripcion: string;
  utm_x: number;
  utm_y: number;
  longitud: number;
  latitud: string;
  tipoincid: string;
  es_obras: string;
  es_accidente: string;
}

class Person {
  id: number;
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-angularway',
  templateUrl: './angularway.component.html',
  styleUrls: ['./angularway.component.css']
})
export class AngularwayComponent implements OnInit {
  coordinate: any;
  dtTrigger: Subject<any> = new Subject();
  markers: Marker[] = [];
  dtOptions: DataTables.Settings = {};
  message = '';

  persons: Person[] = [];


  constructor(private zone: NgZone, private wayServe: AngularwayService, private http: Http ) {
  }


  someClickHandler(info: any): void {
    this.message = info[0];
  }
  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      rowCallback: (row: Node, data: any[] | Object, index: number) => {
        const self = this;
        $('td', row).unbind('click');
        $('td', row).bind('click', () => {
          self.wayServe.tableClickHandler(data);
        });
        return row;
      }
    };

    this.http.get('../assets/PruebaDatos.json')
    .map(this.extractData)
    .subscribe(markers => {
      this.markers = markers;
      // Calling the DT trigger to manually render the table
      this.dtTrigger.next();
    });
  }

  private extractData(res: Response) {
    const body = res.json();
    return body.data || {};
  }


}
