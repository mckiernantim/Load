import { SelectSubcategoryService } from './../../../select-subcategory.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cables',
  templateUrl: './cables.component.html',
  styleUrls: ['./cables.component.css']
})

export class CablesComponent implements OnInit {
  
  displayedSubCategory: String = "";

  subCategories:any = [
   
    "Source_4",
    "Fresnel",
    "Pars",
    "Strips",
    "Other"
  ];
  selectSubCategory(event, subCategories){
    var userSelect = event.target.value 
    console.log(userSelect + "%%%%%%%%%%%%")
    this.displayedSubCategory = subCategories[userSelect];
   
    console.log(this.displayedSubCategory + "$$$$$$$$$$$$$")
  }
  constructor() { }

  ngOnInit() {
  }

}
