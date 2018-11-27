import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() { }
  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    username:  new FormControl(null),
    password: new FormControl(''),
    createdAt: new FormControl(''),
    occupation: new FormControl(''),
    });

}