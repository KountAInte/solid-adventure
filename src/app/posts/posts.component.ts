import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  constructor( http:HttpClient) { 
   http.get('https://jsonplaceholder.typicode.com/posts')
    .subscribe(response =>{
      console.log('sdfsf');
    });
  }

}
