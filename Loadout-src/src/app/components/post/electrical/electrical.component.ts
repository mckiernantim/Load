import { Post } from './../post.interface';
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';




@Component({
  selector: 'app-electrical',
  templateUrl: './electrical.component.html',
  styleUrls: ['./electrical.component.css']
})
export class ElectricalComponent implements OnInit {
 
  @Input() item: string;
  @Output() public subCategoryOut = new EventEmitter<string>()
  displayedSubCategory: any = "";

  subCategories:any = [
   
    "Cable",
    "Hardware",
    "Accessories",
    "Consumables",
    "Misc"
  ];
  selectSubCategory(event, subCategories){
    var userChoice = event.target.value;
    console.log(userChoice + " this is THE EVENT TARGET VALUE OF THE SELECTION") 
    console.log(this.subCategories[userChoice] + "%%%%%%%%%%%%")

    this.subCategoryOut.emit(this.subCategories[userChoice]) ;
   
    
  }
  constructor() {
    
   }

  ngOnInit() {
  }
  selected(subCat: string): void {
    this.displayedSubCategory.emit()
  }

}
