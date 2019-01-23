import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { Post } from './../../../post/post.interface';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-display-post',
  templateUrl: './display-post.component.html',
  styleUrls: ['./display-post.component.css']
})
export class DisplayPostComponent implements OnInit {
  posts: Observable<Response>[]
  
  constructor( private http: Http) {
    
   }

  ngOnInit() {
    let userData = this.getAllPosts()
    console.log(userData)
  
   
    
  }
  
  getAllPosts() {
    return this.http.get('http://localhost:3000/users/dashboard')

  }


  

  claimPost(){
    console.log(this.posts)

  }
}
