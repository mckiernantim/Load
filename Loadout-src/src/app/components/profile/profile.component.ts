import { map } from 'rxjs/operators';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: Object;

  constructor(
    private authService: AuthService,
    private router: Router,
  
  ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
     this.user = profile.user;
     console.log(this.user + "called from ngOnInit and getProfile")
    },
    err => {
      console.log(err)
      return false;
    }


    )};

}
