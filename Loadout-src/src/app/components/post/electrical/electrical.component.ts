import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electrical',
  templateUrl: './electrical.component.html',
  styleUrls: ['./electrical.component.css']
})
export class ElectricalComponent implements OnInit {

  displayedSubCategory: String = "";

  subCategories:any = [
   
    "Cable",
    "Hardware",
    "Accessories",
    "Consumables",
    "Misc"
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
