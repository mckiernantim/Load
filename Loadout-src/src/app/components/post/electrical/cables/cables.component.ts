import { postOptions } from './../../postOptions';

import { Source4Component } from './source4/source4.component';
import { SelectSubcategoryService } from './../../../select-subcategory.service';
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-cables',
  templateUrl: './cables.component.html',
  styleUrls: ['./cables.component.css']
})

export class CablesComponent implements OnInit {
  
  displayedSubCategory: any = "";

  subCategories:any = [
   
    "Source_4",
    "Fresnel",
    "Pars",
    "Strips",
    "Other"
  ];
  selectSubCategory(event, subCategories){
    let index = postOptions[0].children[1].subcategories
    var userSelect = event.target.value 
    console.log(userSelect + "%%%%%%%%%%%% CABLES ")
    this.displayedSubCategory = this.subCategories[userSelect];
   
    console.log(this.displayedSubCategory + "$$$$$$$$$$$$$")
  }
  constructor() { }

  ngOnInit() {
  }

}
