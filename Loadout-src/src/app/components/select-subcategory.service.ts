import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectSubcategoryService {
  selectSubCategory(event, subCategories){
    var userSelect = event.target.value 
    console.log(userSelect)
    var selected = subCategories[userSelect];
   
    return selected
  }

  constructor() { }
}
