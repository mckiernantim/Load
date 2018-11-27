import { Router } from '@angular/router';
import { AuthService } from './../auth.service';


import { FlashMessagesService } from 'angular2-flash-messages';
import { ValidateService } from './../validate.service';


import { Component, OnInit } from '@angular/core';
import { RegisterService } from './../register.service';

 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(
    public form: RegisterService,
     private validateService: ValidateService, 
     private flashMessage: FlashMessagesService,
     private router: Router,
     private authService: AuthService) { }
  name: String;
  username: String;
  email: String;
  password: String;
  user_title:{
    id: number;
    
  };


 titles = [
   { id:1, value:"Technical Director"},
   { id:2, value:"Costume Designer"},
   { id:3, value:"Lighting Designer"},
   { id:4, value:"Director"},
   { id:5, value:"Producer"},
   { id:6, value:"Electrician"},
   { id:7, value:"Carpenter"},
   ];
   selected = "worker";
   currentName = "newGuy ";


   
  ngOnInit() {}

  onRegisterSubmit(){
    const user ={
     
      password: this.password,
      username: this.username,
      email:this.email,
      title:this.titles[this.user_title.id]

    }
    console.log(user)

   if(!this.validateService.validateEmail(user.email)){
    this.flashMessage.show("Please use a valid email", {cssClass: 'alert-danger', timeout: 3000});
    return false;
  }
  if(!this.validateService.validateRegister(user)){
    this.flashMessage.show("Please fill all fields", {cssClass: 'alert-danger', timeout: 3000});
    return false;
  }
  this.authService.registerUser(user).subscribe(data => {
    if(data.success){
      this.flashMessage.show("Registration success", {cssClass: 'alert-success', timeout: 3000});
      this.router.navigate(['/dashboard'])
    } else {
      this.flashMessage.show("uhohs something went wrong....", {cssClass: 'alert-danger', timeout: 3000});
  

    }
  })
 }

}
