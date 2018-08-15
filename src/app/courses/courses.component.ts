// importo Component de la libreria angular/core para convertir esto en un
// componente
import {Component} from '@angular/core';
import {CoursesService} from './courses.service';


@Component({
    selector: 'app-courses',
    template: './courses.component.html',
    styleUrls: ['./courses.component.css']

})
// exporto la clase para que la pueda ver angular

export class CoursesComponent {

    title = 'Lista Incidentes';
    // llamada al servicio courses;
    courses;
// logic  para hacer la llamada HTTP service
// aqui no se puede meter nada de la logica de conexion a la api ni nada !!
// solo cosas que tengan que ver con la logica de su presentacion
// empleamos SERVICE

constructor(private courseServe: CoursesService) {
// aki no se puede / debe declarar ningun servicio a pelo
// se le mete al constructor asi es todo mas modular escalable
  //  let service = new CoursesService();

    this.courses = courseServe.getCourses();
    // this.courses = courseServe.getImages();
    // this.courses = service.getAccidentes();
       // this.getData()
}


        getData() {
        this.courseServe.getCrash();
        {

        }

    }


// funcion para pasar la variable titulo
    getTitulo() {

        return this.title;
    }

}
