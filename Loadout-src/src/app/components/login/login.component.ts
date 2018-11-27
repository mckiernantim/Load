import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';

import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;

  constructor( 
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onLoginSubmit(){
    const user = {
      username: this.username,
      password: this.password
      
    }
    console.log(this.username)
    this.authService.authenticateUser(user).subscribe(data =>{
      if(data.success){
        this.authService.storeUserData(data.token, data.user);
        this.flashMessage.show("You're logged in",{
          cssClass: 'alert-success',
          timeout: 5000
        })
        ;
    }else {
      this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout:5000});
      this.router.navigate(["/dashboard"])
    } 
  });

}
