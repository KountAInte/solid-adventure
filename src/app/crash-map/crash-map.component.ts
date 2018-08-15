import { AngularwayService } from './../angularway.service';
import { AngularwayComponent } from './../angularway/angularway.component';
import { element } from 'protractor';
import { map } from 'rxjs/operators';
import { CoursesService } from './../courses.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AgmMap } from '@agm/core';
import { AgmSnazzyInfoWindow } from '@agm/snazzy-info-window';


// clase para las coordenadas
class Coordinate {
  id: number;
  latitude: number;
  longitude: number;
  fecha: Date;
  descripcion: string;
  tipoIncidencia: string;
  es_obras: string;
  es_accidentes: string;
  fecha_fin: Date;

  constructor(lat, lng, fex, desc, ide, tinci, acci, obra, ffin) {
      this.latitude = lat;
      this.longitude = lng;
      this.fecha = fex;
      this.descripcion = desc;
      this.id = ide;
      this.tipoIncidencia = tinci;
      this.es_accidentes = acci;
      this.es_obras = obra;
      this.fecha_fin = ffin;
  }
}

@Component({
  selector: 'app-crash-map',
  templateUrl: './crash-map.component.html',
  styleUrls: ['./crash-map.component.css']
})


export class CrashMapComponent implements OnInit {
    @ViewChild('map') map: AgmMap;   // Fetching the child component through the "#map"
  CoursesService: any;
  coordenadas: any;
  lng = -3.65917952358271;
  lat = 40.4315620865114;
  public coordinates: Coordinate[] = []; // array de clase coordinates

  constructor(private mapServe: CoursesService, private wayServe: AngularwayService) {
    this.coordenadas = mapServe.getCourses();
   this.getLat();
  }

  ngOnInit() {
    this.resizeMap();
  }

  getLat() {
      // tslint:disable-next-line:no-shadowed-variable
      this.coordenadas.forEach(element => {
   //   this.test1 = element.latitud;
   //   this.test2 = typeof this.test1;
     // console.log(+element.latitud);
      // paso las coordenadas a numeros

      this.coordinates.push(new Coordinate(
        +element.latitud, +element.longitud,
        element.fh_inicio, element.descripcion,
        element.id_incidencia, element.nom_tipo_incidencia,
        element.es_obras, element.es_accidente, element.fh_final));
    });

  }

openWindow(id) {
   this.wayServe.openedWindow = id; // alternative: push to array of numbers
}

isInfoWindowOpen(id) {
    // tslint:disable-next-line:triple-equals
    return this.wayServe.openedWindow == id; // alternative: check if id is in array
}

  resizeMap() {
    this.map.triggerResize();
}

}
