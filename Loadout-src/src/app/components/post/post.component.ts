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
  deathDate: Date;
  claimedBy: String;
  specifics: String;
  selections = postOptions;
  currentData: any = {
    firstSelection: null,
    secondSelection: null,

  }
  currentOptions: any[]
  showSecond: boolean = null
  showThird:boolean= false;





  constructor(private fb: FormBuilder,
    private postService: PostService) {
    // this.rForm = fb.group({
    //   'title': [null, Validators.required],
    //   'description': [null, Validators.compose([Validators.required, Validators.minLength(5)])],
    //   'category': [null, Validators.required],
    //   "subCategory": [null, Validators.required],
    //   "item": [null, Validators.required],
    //   'deathDate': [null, Validators.required],
    //   'specifics': [null],
    //   'validate': '',



    // })
  }
  getSubcategory(selectedSubCat: string) {
    if (selectedSubCat) {
      this.subCategory = selectedSubCat
      console.log(this)
    }

  }
  addPost(post: Post) {
    // dummy data we will eventually get form NgForms
    post = {
      id: localStorage.getItem("user"["id"]),
      category: this.category,
      description: this.description,
      subCategory: this.subCategory,
      item:this.item,
      title: this.title,
      deathDate: this.deathDate.toString(),
      specifics: this.specifics
      



    }
    console.log(post.description + " ************")
    this.postService.createPost(post).subscribe(data => {
      console.log(data)
    })
    console.log("post working")
    this.showSecond = false;
    this.showThird = false;
  }



  ngOnInit() {


  }
  toggleCategory(event) {
    if(!this.currentData.firstSelection){
    this.currentData.firstSelection = event.target.value}
    else{
      if(!this.currentData.secondSelection){this.currentData.secondSelection = event.target.value}
      
    }
   
    // let selectedStr = (event.target.value);
    // console.log(event.target.getAttribute('name'))
    // this.currentName = event.target.getAttribute('name')
    // if(!this.showSecond || this.showSecond && !this.showThird){
    // this.currentOptions = this.displaySubcategory(selectedStr, this.currentName);}


    // console.log(this.currentOptions + " <------- your current options");
}
 
  displaySubcategory(str: any, dataToDisplay: String) {
    let childData = {
      index: 0,
      options: [],
    };
    for (let i = 0; i <= this.selections.length; i++) {
      console.log(str)
      console.log(this.selections[i].department)

      if (str === this.selections[i].department) {
        
        childData.index = i;
        for (let j = 0; j < this.selections[i].children.length; j++) {
          childData.options.push(this.selections[i][`${dataToDisplay}`][j].title)
          console.log(childData.options)
         if(!this.showSecond)
           {this.showSecond = true;}
        }
      }
      return childData.options;
    }
  }


}






