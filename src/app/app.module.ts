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
//importo enviromen para que funcione la variable environment

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    AvbarComponent,
    AboutPageComponent,
   

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InlineSVGModule,
    AngularSvgIconModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule.forRoot([
      { path: '', component: PostsComponent},
      { path: 'about', component: AboutPageComponent},
      // { path: '**', component: NotFoundPageComponent }
    ]),
  ],
  
  
  providers: [PostManPatchService],
  bootstrap: [AppComponent],
})
export class AppModule { }
