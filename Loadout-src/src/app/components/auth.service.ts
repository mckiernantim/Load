import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { ReturnStatement } from '@angular/compiler';
import { tokenNotExpired } from 'angular2-jwt'


interface User{
  password: string,
  username: string,
  email: string,
  title: string,
  

}



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;
  

  
  

  constructor(private http: HttpClient) { }
  
  registerUser(user: any): Observable<User> {
    let loginResponse;
    console.log(user + "passed into registerUser")
    let headers = new HttpHeaders().set("Content-Type", "application/json")
    return this.http.post<User>('http://localhost:3000/users/register', user, {headers: headers})
    .pipe(map(data => loginResponse = data))
      
    
   
    
  }
  getToken() {
    return localStorage.getItem('id_token');
  }
  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
    console.log(this.authToken + " got the token from the headers")
  }
  storeUserData(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
    console.log( "auth token " + this.authToken)
  }


  authenticateUser(user){
    let headers = new HttpHeaders().set("Content-Type", "application/json")
    console.log(headers)
    return this.http.post('http://localhost:3000/users/authenticate', user, {headers: headers})
    
  };


getProfile():Observable<any> { 
  this.loadToken();
  console.log("this is the loaded token to log in " + this.authToken )
 
  let headers = new HttpHeaders().set("Authorization", this.authToken).set("Content-Type", "application/json");
  
  console.log(headers);
  return this.http.get('http://localhost:3000/users/profile', {headers: headers})
  }
    
  logout() {
      this.authToken = null;
      this.user = null;
      localStorage.clear();
    }
    
    loggedIn(){
      return tokenNotExpired('id_token')
    }
  
  }
  