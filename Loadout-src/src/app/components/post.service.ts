import { Post } from './post/post.interface';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';


import { Http, Headers } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  // user: any = JSON.parse(localStorage.getItem('user')['id']);
    constructor(private http: Http) { 
    }
    
    
    createPost(post:Post):Observable<any>{
      // grab user info 
      console.log(localStorage.getItem("user"))
      let token = JSON.parse(localStorage.getItem("user"));
      console.log(token + "     %%%%%%%%%%%%%%%%%%%%%%%")
      
      post.id = token.id;
      
      console.log(post.id + '$$$$$$$$$$')
      console.log(post)
      
      return this.http.post('http://localhost:3000/users/post', post)
  }
    compilePost(){
      
      
    }
    

}


 
