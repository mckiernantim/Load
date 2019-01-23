import { postOptions } from './postOptions';
import { Post } from './post.interface';
import { MaterialComponent } from './material/material.component';
import { ElectricalComponent } from './electrical/electrical.component';
import { CarpenrtryComponent } from './carpenrtry/carpenrtry.component';
import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';




@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',

  styleUrls: ['./post.component.css'],

})
export class PostComponent implements OnInit {
  rForm: FormGroup;
  title: String;
  description: String;
  category: String;
  subCategory: String;
  item: String;
  subitem: String;
  deathDate: Date;
  claimedBy: String;
  specifics: String;
  selections = postOptions;
   currentOptions: String[]
  thirdOptions: String[]
  fourthOptions: String[]
  fifthOptions:String[]
  showSecond: boolean = null
  showThird:boolean= false
  showFourth:boolean = false
  showFifth: boolean = false
  currentDataName:String
  counter:number = 0
  subcatIndex: number = 0
  thirdCatIndex: number =0
  fourthCatIndex:number = 0
  fifthCatIndex:number = 0





  constructor(private fb: FormBuilder,
    private postService: PostService) {
  
  }
  getSubcategory(selectedSubCat: string) {
    if (selectedSubCat) {
      this.subCategory = selectedSubCat
      console.log(this)
    }

  }
  addPost(post: Post) {
   
    post = {
     username:null,
     email:null,
      category: this.category,
      description: this.description,
      subCategory: this.subCategory,
      item:this.item,
      title: this.title,
      deathDate: this.deathDate.toString(),
      specifics: this.specifics
      
     }
    console.log(post)
    this.postService.createPost(post).subscribe(data => {
      console.log(data)
    })
    console.log("post working")
    this.showSecond = false;
    this.showThird = false;
    this.showFourth = false;
    this.showFifth = false
  }



  ngOnInit() {


  }
  toggleCategory(event, num) {
    
    this.counter++;
    console.log(this.counter + "  !!!!!!!!!!!!  COUNTER INCREASED !!!!!!!!!!!!!!!!")

    
    
    this.toggleDisplay(this.counter)
    let selectedTitle = (event.target.value);
    console.log(selectedTitle)
    this.currentDataName = event.target.getAttribute('id');
   
    if (this.counter === 1  ){
       
      let returnedData = this.displaySubcategory(selectedTitle, this.currentDataName);
      this.currentOptions = returnedData.options;
      this.subcatIndex = returnedData.index
      console.log(this.subcatIndex + " subcategory selected index!!!!" + selectedTitle)
    
    } 
    
    if (this.counter === 2){
     
      
      let returnedData = this.displayThirdCategory(selectedTitle, this.currentDataName, this.subcatIndex);
     
      this.thirdOptions = returnedData.options;
      console.log(this.thirdOptions + "  THID OPTIONS WORKING")
      this.thirdCatIndex = returnedData.index;
     
      
    }

    if (this.counter === 3 ){
      
      let returnedData = this.displayFourthCategory(selectedTitle, this.currentDataName, this.thirdCatIndex);
      this.fourthOptions = returnedData.options;
      console.log(this.fourthOptions + " %%%%%%%%%%%%%%%%%%%%%%%")
      
      this.fourthCatIndex = returnedData.index;
      
    }
    if (this.counter === 4 ) {
      let returnedData = this.displayFifthCategory(selectedTitle, this.currentDataName, this.fourthCatIndex);
      this.fifthOptions = returnedData.options;
      console.log(this.fifthOptions + "fifth firing!")
      
      this.fifthCatIndex = returnedData.index;
      
    }
 
   
    

    console.log(this.currentOptions + " current options")
    console.log(this.thirdOptions + " third options")

    ;
}
  displaySubcategory(str: any, dataToDisplay: String) {
  
    let childData = {
      index: 0,
      options: [],
    };
    for (let i = 0; i < this.selections.length; i++) {
      
      if (str === this.selections[i].department) {
         childData.index = i;
        for (let j = 0; j < this.selections[i].children.length; j++) {
          childData.options.push(this.selections[i][`${dataToDisplay}`][j].subDepartment)
          
        }
      }
     
    } return childData;
  }
 
  displayThirdCategory(str:any, previousCategory: String, index: number){
   
   
    let childData = {
      index: 0,
      options: [],
    };
     
    for (let i = 0; i < this.selections[this.subcatIndex].children.length; i++) {
     
    
      if (str === this.selections[this.subcatIndex].children[i].subDepartment) {
       console.log(this.selections[this.subcatIndex].children[i].subDepartment + " this is the current title being iterated")
         childData.index = i;
        for (let j = 0; j < this.selections[this.subcatIndex].children.length; j++) {
          console.log(previousCategory + " this is the data we will return !!!!!!!", this.subcatIndex + " <-------this.subCatIndex" , i+ " <----- I")
          console.log(this.counter)
          childData.options.push(this.selections[this.subcatIndex].children[i][`${previousCategory}`][j].title)
        
          
        }
      }
    }
      return childData;
   }
   displayFourthCategory(str:any, dataToDisplay: String, index: number){
   
  
    let childData = {
      index: 0,
      options: [],
    };
      
    for (let i = 0; i < this.selections[this.subcatIndex].children[this.thirdCatIndex].subcategories.length; i++) {
     
     let x = this.selections[this.subcatIndex].children[this.thirdCatIndex].subcategories[i]['title'];
     console.log(x)
      if (str === x) {
       
         childData.index = i;
        for (let j = 0; j < this.selections[this.subcatIndex].children[this.thirdCatIndex].subcategories[i]['options'].length; j++) {
          
            childData.options.push(this.selections[this.subcatIndex].children[this.thirdCatIndex].subcategories[i][`${dataToDisplay}`][j].itemTitle)
          
          
        }
      }
    }
    console.log(childData.options)
      return childData;
   }

  displayFifthCategory(str: any, dataToDisplay: String, index: number) {
    let childData = {
      index: 0,
      options: [],
    };
    let x = this.selections[this.subcatIndex].children[this.thirdCatIndex].subcategories[this.fourthCatIndex]['options'].length;
    console.log(x + " this is the index")
    for (let i = 0; i < x; i++) {
      let y  = this.selections[this.subcatIndex].children[this.thirdCatIndex].subcategories[this.fourthCatIndex]['options'][i].itemTitle
      childData.index = i;
      if (str === y )
        for (let j = 0; j < this.selections[this.subcatIndex].children[this.thirdCatIndex].subcategories[this.fourthCatIndex]['options'].length; j++) {
          console.log(this.selections[this.subcatIndex].children[this.thirdCatIndex].subcategories[this.fourthCatIndex]['options'][i][`${dataToDisplay}`][j].optionTitle)
          childData.options.push(this.selections[this.subcatIndex].children[this.thirdCatIndex].subcategories[this.fourthCatIndex]['options'][i][`${dataToDisplay}`][j].optionTitle)
          console.log(childData.options + "here its working!!!1")
        }
       }
    return childData;
  }


 
  
  
  
  
  
  
  
  toggleDisplay(num){
    if (num === 1 ){this.showSecond = true}
    console.log( this.showSecond + " showing second")
    if(num ===2   ) {this.showThird = true }
    console.log (this.showThird + " showing third")
    if (num=== 3  ) {this.showFourth =true }
    if (num===4) (this.showFifth = true)
    
  }

  }


 
 









