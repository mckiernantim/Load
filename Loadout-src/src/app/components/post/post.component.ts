import { MaterialComponent } from './material/material.component';
import { ElectricalComponent } from './electrical/electrical.component';
import { CarpenrtryComponent } from './carpenrtry/carpenrtry.component';
import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  rForm: FormGroup;
  title: String;
  description: String;
  category: String;
  subCategory: String;
  item: String;
  deathDate: String;
  specifics: {};


  selections = [{

    department: "Electrics",
    children: [
      {
         title: "instruments",
        subcategories: [

          {
            subTitle: "Source4",
            specifics: "description"
          },
          {
            subTitle: "Fresnel",
            specifics: "description"

          },
          {
            subTitle: "Pars",
            specifics: "description"

          },
          {
            subTitle: "Strips",
            specifics: "description"

          },
          {
            subTitle: "Other",
            specifics: "description"

          },
        ]
      },

      {
        title: "cables",
        subcategories: [
          {
            subTitle: "edison",
            specifics: ["specify length"]
          },
          {
            subTitle: "stage pin",
            specifics: ["specify length"]
          },

          {
            subTitle: "dmx",
            specifics: ["specify length, specify pin"]
          },

          {
            subTitle: "other",
            specifics: ["length"]
          },

        ]
      },
      {
        title: "hardware",
        subcategories: [
          {
            subTitle: "Cheesegoroughs",
            specifics: [{
              options: [{
                type: "swivel",
                materials: ["steel", "aluminum"]
              },
              {
                type: "Rigid",
                materials: ["steel", "aluminum"]
              },
              {
                type: "HalfBoro",
                materials: ["steel", "aluminum"]
              },
              ],
            }]

          },
          {
            subTitle: 'schedule40',
            specifics: ["specify length"]
          },
          {
            subTitle: "boomBase",
            specifics: []
          },
          {
            subTitle: "sideArms",
            specifics: []
          },
          {
            subTitle: "cClamps",
            specifics: []
          },
          {
            subTitle: "safetyCables",
            specifics: []
          },
          {
            subTitle: "other",
            specifics: []
          },

        ]

      }
    ]
  }
]

  selected: String = "";



  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      'title': [null, Validators.required],
      'description': [null, Validators.compose([Validators.required, Validators.minLength(5)])],
      'category': [null, Validators.required],
      "subCategory": [null, Validators.required],
      "item": [null, Validators.required],
      'deathDate': [null, Validators.required],
      'specifics': [null],
      'validate': '',



    })
  }
  addPost(post) {
    this.title = post.title;
    this.description = post.description;
    this.category = post.catagory;
    this.subCategory = post.subCategory;
    this.item = post.item;
    this.deathDate = post.deathDate;
    this.specifics = post.specifics;


  }


  ngOnInit() {

  }
  toggleCategory(event) {

    this.selected = (event.target.value);


  }
  closeCategory() {
    this.selected = "";
  }
}





