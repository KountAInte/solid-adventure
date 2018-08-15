import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import{AngularFireModule}from 'angularfire2';
import{AngularFireDatabaseModule}from 'angularfire2/database';
import { environment } from 'src/environments/environment';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { PostManPatchService } from './post-man-patch.service';
import{ AvbarComponent} from './avbar/avbar.component';
import { RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { BotoneraComponent } from './botonera/botonera.component';
import { InlineSVGModule } from 'ng-inline-svg'; // para usan iconos
import {AngularSvgIconModule}from 'angular-svg-icon'; // mas para iconos
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { AngularwayComponent } from './angularway/angularway.component';
import {DataTablesModule} from 'angular-datatables'
import { HomePageComponent } from './home-page/home-page.component';
import { CrashMapComponent } from './crash-map/crash-map.component';
import { MensajeInicialComponent } from './mensaje-inicial/mensaje-inicial.component';
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window/snazzy-info-window.module';
//importo enviromen para que funcione la variable environment

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    AvbarComponent,
    AboutPageComponent,
    NotFoundPageComponent,
    AngularwayComponent,
    HomePageComponent,
    BotoneraComponent,
    CrashMapComponent,
    MensajeInicialComponent,
   

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DataTablesModule,
    InlineSVGModule,
    AngularSvgIconModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCexLpFKKMYGnwWTFV5fy-r9_bf7AjsNgc'
    }),
    AgmSnazzyInfoWindowModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent},
      { path: 'about', component: AboutPageComponent},
      { path: '**', component: NotFoundPageComponent }
    ]),
  ],
  
  
  providers: [
    PostManPatchService,
    AngularwayComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
