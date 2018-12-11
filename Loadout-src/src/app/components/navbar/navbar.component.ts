import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';

import { Component, OnInit } from '@angular/core';
import { timeout } from 'q';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }
onLogoutClick(){
  this.authService.logout();
  this.flashMessage.show("You've logged out", {
    cssClass: 'alert-success',
    timeout:3000,
  });
  this.router.navigate(["/login"]);
  return false;

}
}
